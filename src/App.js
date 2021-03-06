// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import { sampleText } from './sampleText'
import marked from 'marked'

function App() {

  const [text, setText] = useState(sampleText)

  const handleChange = (event) => {
    const text = event.target.value
    setText(text)
  }

  const renderText = text => {
    const __html = marked(text, { sanitize: true })
    return { __html }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <textarea onChange={handleChange} value={text} className='form-control' rows="35" />
        </div>
        <div className="col-sm-6">
          <div dangerouslySetInnerHTML={renderText(text)}></div>
        </div>
      </div>
    </div>
  );
}

export default App;
