// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alerts from "./components/Alerts";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  const [pageMode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    // console.log(pageMode);
    if (pageMode === "light") {
      setMode("dark");
      document.body.style.backgroundColor ="#273e60";
      showAlert("Dark Mode has been enabled","success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled","success");
    }
  }
  return (
    <>
<Router>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      <Navbar title="TextUtils" mode={pageMode} toggleMode={toggleMode} />
      <Alerts alert={alert} />
      <div className="container my-3">
      {/* <TextForm heading="Enter text to analyse" mode={pageMode} showAlert={showAlert} /> */}
      {/* <About/> */}
<Routes>
      <Route path="/" element={<TextForm heading="Enter text to analyse" mode={pageMode} showAlert={showAlert} />}/>
    <Route path="About/" element={<About mode={pageMode}/> } />
</Routes>
       
      </div>

</Router>
    </>
  );
}

export default App;
 