import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to uppercase","success");
  };
  const handleLowerClick = () => {
    // console.log("Lowercase was clicked"+ text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text converted to lowercase","success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
   props.showAlert("Text cleared","success");
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  const copyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard","success");
  }
  const handleOnChange = (event) => {
    // console.log("On Changed");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{ color: props.mode === "dark" ? "white" : "black" }} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black"
            }}
            value={text}
            onChange={handleOnChange}
            id="myBox"
            cols="5"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowerClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear
        </button>
        <button className="btn btn-primary mx-2" onClick={speak}>
          Speak
        </button>
        <button className="btn btn-primary mx-2" onClick={copyText}>
          Copy Text
        </button>
      </div>

      <div className="container my-2" style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h1>My text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <h2>Preview</h2>
        <p>{text.length>0? text: "Enter something in above textbox to preview it here"}</p>
      </div>
    </>
  );
}
