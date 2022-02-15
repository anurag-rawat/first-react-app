import React, { useState } from 'react'

export default function InputTextArea(props) {
    const [text, setText] = useState('');

    const convertToUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text Converted to Upper Case","success");
    }
    
    const convertToLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text Converted to Lower Case","success");
    }
    
    const convertToCamelCase = () => {
        let newText = "";
        for(let i=0;i<text.length;i++){
            if(i === 0 ){
                newText += text[i].toUpperCase();
            }else if (text.charAt(i-1) === ' '){
                newText += text[i].toUpperCase();
            }else{
                newText += text[i]
            }
        }
        setText(newText);
        props.showAlert("Text Converted to Camel Case","success");
    }

    const copyText = () => {
        var text = document.getElementById("input-area");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text Copied to clipboard","success");

    }

    const clearEverthing = () => {
        let newText = '';
        setText(newText);
    }


    const update = (event) => {
        setText(event.target.value)
    }

    return (
        <>
            <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
                <div className="mb-4">
                    <h2>{props.heading}</h2>
                    <textarea className="form-control" id="input-area" rows='10' value={text} onChange={update} style={{color: props.mode==='dark'?'white':'black', backgroundColor:props.mode==='dark'?'#272727':'white'}}></textarea>
                </div>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={convertToUpperCase}>Make Upper Case</button>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={convertToLowerCase}>Make Lower Case</button>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={convertToCamelCase}>Make Camel Case</button>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={copyText}>Copy Text</button>
                <button disabled={text.length===0} className='btn btn-danger mx-1 my-1' onClick={clearEverthing}>Clear</button>
            </div>
            <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
                <h2 className='my-2'>Your Summary</h2>
                <p><b>{text.split(" ").filter((element)=>{return element.length!==0}).length}</b> Words And <b>{text.length}</b> Characters</p>
                <h2 >Preview</h2>
                <p>{(text.length === 0)?"Enter Text to preview":text}</p>
            </div>
        </>
    )
}
