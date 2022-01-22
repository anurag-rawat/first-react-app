import React, { useState } from 'react'

export default function InputTextArea(props) {
    const [text, setText] = useState('');

    const convertToUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        if(newText.length === 0){
            props.showAlert("No Text Found","warning");
        }else{
            props.showAlert("Text Converted to Upper Case","success");
        }
    }
    
    const convertToLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        if(newText.length === 0){
            props.showAlert("No Text Found","warning");
        }else{
            props.showAlert("Text Converted to Lower Case","success");
        }
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
        if(newText.length === 0){
            props.showAlert("No Text Found","warning");
        }else{
            props.showAlert("Text Converted to Camel Case","success");
        }
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
                    <textarea className="form-control" id="text" rows='10' value={text} onChange={update} style={{color: props.mode==='dark'?'white':'black', backgroundColor:props.mode==='dark'?'#272727':'white'}}></textarea>
                </div>
                <button className='btn btn-primary mx-1' onClick={convertToUpperCase}>Make Upper Case</button>
                <button className='btn btn-primary mx-1' onClick={convertToLowerCase}>Make Lower Case</button>
                <button className='btn btn-primary mx-1' onClick={convertToCamelCase}>Make Camel Case</button>
                <button className='btn btn-danger mx-1' onClick={clearEverthing}>Clear</button>
            </div>
            <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
                <h2 className='my-2'>Your Summary</h2>
                <p><b>{text.split(" ").length-1}</b> Words And <b>{text.length}</b> Characters</p>
                <h2 >Preview</h2>
                <p>{(text.length === 0)?"Enter Text to preview":text}</p>
            </div>
        </>
    )
}
