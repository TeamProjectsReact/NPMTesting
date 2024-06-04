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
const connection = JkMysql.ConnectToDatabase('localhost', 'root', '1234', 'db_cms')

// configurate email sending 
// uncomment and change according to your changes (if you need)
// const transporter = JkMysql.SendEmailConfig("Gmail", process.env.EMAIL_USER, process.env.EMAIL_PASSWORD)

// middleware
app.use(express.json())
app.use(cors())


// all endpoint start



// all endpoints end

app.listen(PORT, () => console.log(`Server is Running on PORT ${PORT}`));