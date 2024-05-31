import React, { useEffect, useState } from 'react'
import { Editor } from 'js-wysiwyg-editor'
import axios from 'axios'

const TestingPack = () => {
  // send backend
  const [EditorData, SetEditorData] = useState({
    title: '',
  })

  const [text, setText] = useState('');

  // headleSubmit

  const headleSubmit = async (e) => {
    e.preventDefault()

    try{
      const res = await axios.post('http://localhost:8081/AddEditorData', {EditorData, text})
      .then(res => {
        if(res.data.Status === "Success"){
          alert("Editor Data Added Successful")
          window.location.reload()
        }
        else{
          alert(res.data.Error)
        }
      })
    }
    catch (err) {
      console.log(err)   
    }
  }

  const [GetData, SetGetData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8081/DisplayData')
    .then(res => SetGetData(res.data.Result))
    .catch(err => console.log(err))
  }, [])

  

  return (
    <div className='my-8 mx-12'>
        <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque eaque nihil error sequi dignissimos totam distinctio impedit. Nesciunt nobis itaque eligendi quae, temporibus placeat ratione animi illo, vel assumenda ut!
        </p>

          <form onSubmit={headleSubmit}>
            <input type="text" name="" id="" className='h-12 bg-gray-200 rounded'
            onChange={e => SetEditorData({...EditorData, title:e.target.value})}/>
          

            <div className="">
              <Editor dataValue={text} OutputTest={setText}/>
            </div>


            <button type="submit" className="py-2 px-8 bg-blue-500 text-white rounded">Submit</button>
          </form>


        <div className="w-full p-2 bg-white border border-gray-300 rounded-md shadow-sm">
          <div dangerouslySetInnerHTML={{ __html: text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>') }} />
        </div>
        

        <p className="py-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga natus perspiciatis consequuntur aut delectus at, suscipit quisquam voluptatum, fugiat adipisci quibusdam possimus illum corrupti iusto sunt, inventore quae. Alias, nesciunt.
            Dignissimos officiis voluptatibus recusandae ut tempora rem impedit corrupti nesciunt ducimus voluptatem! Vitae obcaecati eos quia, doloribus suscipit incidunt. Adipisci quia possimus temporibus ratione ex quam voluptatum doloribus laudantium architecto?
            Voluptatibus ipsa quidem cumque debitis! Consectetur veniam porro iusto corporis suscipit ex aliquam laborum, similique cumque est, aperiam quibusdam odio nostrum nobis aliquid autem rerum facere dolor voluptatum error quasi!
            Sapiente quos voluptates dolore laboriosam, asperiores ipsa explicabo tenetur, praesentium dignissimos ullam, voluptatem ea! Enim, exercitationem eum. Odio, dolore error est iure aspernatur tenetur molestias. Non, nemo eligendi? Autem, delectus.
            Adipisci quo nobis odit delectus fugit, veniam laboriosam qui ea est illo voluptatum ut rem consequuntur corporis modi error eligendi soluta at nam fuga atque labore nisi praesentium nihil. Et.
        </p>

        <div className="my-8">
          <div className="bg-gray-200 rounded py-2 px4">
            {
              GetData.map((Data, index) => {
                return (
                  <div className="">
                    <h1 className="">{Data.editor_title}</h1>
                    <p className="">
                    <div dangerouslySetInnerHTML={{ __html: Data.editor_data.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>') }} />
                    </p>
                  </div>
                )
              })
            }
          </div>
        </div>
    </div>
  )
}

export default TestingPack