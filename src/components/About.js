import React from "react";

export default function About(props) {
    // const [myStyle, setMyStyle]=useState({
    //     color: "black",
    //     backgroundColor: "white"
    // })
    // const [btnStyle, setBtnStyle]=useState("Enable Dark Mode")
    // const toggleStyle=()=>{
    //     if(myStyle.color==="black")
    //     {
    //         setMyStyle({
    //             color:"white",
    //             backgroundColor:"black"
    //         })
    //         setBtnStyle("Enable Light Mode")
    //     }
    //     else
    //     {
    //         setMyStyle({
    //             color:"black",
    //             backgroundColor:"white"
    //         })
    //         setBtnStyle("Enable Dark Mode")
    //     }
    // }
    let myStyle={
      color: props.mode==="dark"? "white": "black",
      backgroundColor: props.mode=== "dark"? "#1f6176":"white",
    }
  return (
    <div className="container" style={{color: props.mode==="dark"? "white": "black"}}>
      <h2 className="my-3">About Us</h2>
      <div className="accordion" id="accordionExample" >
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" >
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <strong>Analyse your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              TextUtils gives a way to analyse text effectively and quickly.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              TextUtils is a free counter tool which counts the characters and also words.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
             <strong>Browser compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            This works well for many broswers like Chrome , Firefox, Internet Explorer and many more.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="my-3">
        <button onClick={toggleStyle} type="button" className="btn btn-primary" >
          {btnStyle}
        </button>
      </div> */}
    </div>
  );
}
