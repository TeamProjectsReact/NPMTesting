import React, { useState } from 'react'
import { Editor } from 'js-wysiwyg-editor'
import axios from 'axios'

const TestingPack = () => {
  // send backend
  const [EditorData, SetEditorData] = useState({
    title: '',
    dataEditor: '',
  })

  // headleSubmit

  const headleSubmit = async (e) => {
    e.preventDefault()

    try{
      const res = await axios.post('http://localhost:8081/AddEditorData', EditorData)
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
  return (
    <div className='my-8 mx-12'>
        <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque eaque nihil error sequi dignissimos totam distinctio impedit. Nesciunt nobis itaque eligendi quae, temporibus placeat ratione animi illo, vel assumenda ut!
        </p>


        <form onSubmit={headleSubmit}>
          <div className="">
            <label htmlFor="">Title</label>
            <input type="text" name="" id="" className="h-12 bg-gray-200 rounded pl-2 my-4" required placeholder='Title'
            onChange={e => SetEditorData({...EditorData, title:e.target.value})}/>
          </div>
          <div className="">
            <Editor FormValue={e => SetEditorData({...EditorData, dataEditor:e.target.value})}/>
          </div>

          <button type="submit" className="bg-green-500 py-2 px-4 rounded text-white">Submit</button>
        </form>
        

        <p className="py-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga natus perspiciatis consequuntur aut delectus at, suscipit quisquam voluptatum, fugiat adipisci quibusdam possimus illum corrupti iusto sunt, inventore quae. Alias, nesciunt.
            Dignissimos officiis voluptatibus recusandae ut tempora rem impedit corrupti nesciunt ducimus voluptatem! Vitae obcaecati eos quia, doloribus suscipit incidunt. Adipisci quia possimus temporibus ratione ex quam voluptatum doloribus laudantium architecto?
            Voluptatibus ipsa quidem cumque debitis! Consectetur veniam porro iusto corporis suscipit ex aliquam laborum, similique cumque est, aperiam quibusdam odio nostrum nobis aliquid autem rerum facere dolor voluptatum error quasi!
            Sapiente quos voluptates dolore laboriosam, asperiores ipsa explicabo tenetur, praesentium dignissimos ullam, voluptatem ea! Enim, exercitationem eum. Odio, dolore error est iure aspernatur tenetur molestias. Non, nemo eligendi? Autem, delectus.
            Adipisci quo nobis odit delectus fugit, veniam laboriosam qui ea est illo voluptatum ut rem consequuntur corporis modi error eligendi soluta at nam fuga atque labore nisi praesentium nihil. Et.
        </p>
    </div>
  )
}

export default TestingPack