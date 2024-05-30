import React, { useRef, useState } from 'react'

const NewEditor = () => {
    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('');
    const textareaRef = useRef(null);

  return (
        <div className="min-h-screen bg-gray-100 p-4">
          <textarea
            // ref={textareaRef}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            rows="20"
            placeholder="Type something here..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          ></textarea>
          <div className="w-full  p-2 bg-white border border-gray-300 rounded-md shadow-sm">
            <div className="whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: outputText.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>') }}></div>
          </div>
        </div>
  )
}

export default NewEditor