import './App.css';
import Navbar from './components/Navbar';
import InputTextArea from './components/InputTextArea';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);
  // const [darkColor, setdarkColor] = useState({bgColor: 'rgb(39, 39, 39)'})

  // const updateDarkMode = (bgColor)=>{
  //   setdarkColor({
  //     bgColor:bgColor
  //   })
  //   if(mode === 'dark'){
  //     document.body.style.backgroundColor = bgColor;
  //   }
  // }

  const showAlert = (alertMessage, alertType) => {
    setalert({
      message: alertMessage,
      type: alertType
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }

  const changeMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "rgb(39, 39, 39)";
      showAlert("Dark mode Enabled", "success")
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'rgb(256, 256, 256)';
      showAlert("Dark mode Disabled", "success")
    }
  }

  return (
    <>
      <Router>
      <div className="test">
        <Navbar title='Text Utilities' mode={mode} changeMode={changeMode} />
        <Alert alert={alert} />
          <Routes>
            <Route exact path="/" element={<InputTextArea heading='Enter Your Text Below: ' mode={mode} showAlert={showAlert} />}/>
            <Route exact path="/about" element={<About/>} />
          </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;

