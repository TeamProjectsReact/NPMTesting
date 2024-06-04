const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config(); // Load environment variables
const JkMysql = require('jkmysql-easy')

const resourceLimits = require('worker_threads');
const e = require('express');
const { stat } = require('fs');

const app = express();
const PORT = process.env.PORT || 8081


// make connection between server and mysql database
// change the 'db_npm_testing' according to your database name
const connection = JkMysql.ConnectToDatabase('localhost', 'root', '1234', 'db_npm_testing')

// configurate email sending 
// uncomment and change according to your changes (if you need)
// const transporter = JkMysql.SendEmailConfig("Gmail", process.env.EMAIL_USER, process.env.EMAIL_PASSWORD)

// middleware
app.use(express.json())
app.use(cors())


// all endpoint start

app.post('/SignUp', (req, res) => {
    // console.log(req.body)

    // table will be change according to your table name
    const tableName = "users"
    const columns = []
    const conditions = {
        username: req.body.username,
        email: req.body.email,
    }

    JkMysql.SelectByOR(connection, tableName, columns, conditions, (result) => {
        if(result.length > 0){
            return res.json({ Error: "User Already Exists"})
        }
        else{
            bcrypt.hash(req.body.password, 10, (err, PassHash) => {
                if(PassHash){
                    const tableName = 'users';
                    const data = { 
                        username: req.body.username, 
                        email: req.body.email,
                        password: PassHash,
                        role: "User", //change this as you need
                        create_at: new Date(),
                        is_active: 1,
                        is_lock: 0
                    };
                            
                    JkMysql.insertData(connection, tableName, data, (result) => {
                        if(result) {
                            return res.json({ Status: "Success" })
                        }
                        else{
                            return res.json({ Error: "Internal Server Error While Adding user in to database"})
                        }
                    });
                }
                else{
                    return res.json({ Error: "Internal Servaer Error While Hashing Password"})
                }
            }) 
        }
    })
})

app.post('/SignIn', (req, res) => {
    const tableName = "users"
    const columnData = { email: req.body.email }

    JkMysql.SelectData(connection, tableName, columnData, (result) => {
        if(result.length === 0){
            return res.json({ Error: "No User Found"})
        } 
        else{
            const password = req.body.password;

            bcrypt.compare(password, result[0].password, (err, MatchPass) => {
                if(MatchPass) {
                    const token = jwt.sign(
                        {email: result[0].Email, role: result[0].Role, is_active: result[0].is_active, is_lock: result[0].is_lock},
                        'your-secret-key',
                        {expiresIn: '1h'}
                    );
                    res.json({Token: token, Msg: "Success", LoginUser:result})
                    // console.log(result)
                }
                else{
                    return res.json({ Error: "Password not Match" })
                }
            })
        }
    })
})

// all endpoints end

app.listen(PORT, () => console.log(`Server is Running on PORT ${PORT}`));