import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';

const TextEditor: React.FC = () => {
  const [value, setValue] = useState<string>('');

  const modules = {
    toolbar: [
     
      ['bold', 'italic', 'underline', 'strike'],        // Text styling
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'align': [] }],                                // Text alignment
      ['link'],                                         // Links
      ['clean'],
      [{ 'header': [1, 2, false] }],                                      // Clear formatting
    ],
  };

  const formats = [
    'header', 'bold', 'italic', 'underline', 'strike', 'list', 'bullet', 'align', 'link',
  ];

  return (
    <div className="mt-10 mb-24">
      <h2 className="text-lg font-bold mb-2">Description</h2>
      <div className="bg-white rounded-lg  shadow-sm">
        <ReactQuill 
          value={value} 
          onChange={setValue} 
          modules={modules} 
          formats={formats} 
          className="h-[100px] rounded-md"
         
        />
      </div>
    
    </div>
  );
};

export default TextEditor;
