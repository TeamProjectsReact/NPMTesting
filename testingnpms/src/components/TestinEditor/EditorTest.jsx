import React, { useRef, useState } from 'react'

const EditorTest = () => {
    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('');
    const textareaRef = useRef(null);
  
    const handlePreview = () => {
      setOutputText(inputText);
    };
  
    // headle the bold
    const handleBold = () => {
      const textarea = textareaRef.current; // get the current selected area in textarea
      const start = textarea.selectionStart; //html textarea input in javascript property (selectionStart) => when user select some charaters in textarea the (selectionStart) is the starting point of the selection
      const end = textarea.selectionEnd; //html textarea input in javascript property (selectionEnd) => when user select some charaters in textarea the (selectionStart) is the ending point of the selection
  
      if (start === end) return; // No text is selected
  
      const before = inputText.substring(0, start); // get the before string in selection start
      const selected = inputText.substring(start, end); // get the selected text
      const after = inputText.substring(end); // last sting of the selection
  
      const newText = `${before}**${selected}**${after}`; // ** use this for bold text
      setInputText(newText);
    };
    

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
          <h1 className="text-2xl font-bold mb-4">React Textarea with Tailwind CSS</h1>
          <textarea
            ref={textareaRef}
            className="w-full max-w-md p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            rows="10"
            placeholder="Type something here..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          ></textarea>
          <div className="w-full max-w-md flex justify-between mb-4">
            <button
              className="p-2 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2"
              onClick={handlePreview}
            >
              Preview
            </button>
            <button
              className="p-2 bg-green-500 text-white font-semibold rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              onClick={handleBold}
            >
              Bold
            </button>
          </div>
          <div className="w-full max-w-md p-2 bg-white border border-gray-300 rounded-md shadow-sm">
            <div className="whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: outputText.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>') }}></div>
          </div>
        </div>
      );
}

export default EditorTest