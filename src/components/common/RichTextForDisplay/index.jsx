import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import './index.css';

const RichTextForDisplay = (props) => {
  const { value } = props;
  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link'
  ];

  return (
    <div className="bg-grey w-100per">
      <ReactQuill value={value} theme="bubble" formats={formats} readOnly />
    </div>
  );
};

export default RichTextForDisplay;
