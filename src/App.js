import React, { useState } from "react";
import "./app.css";
import Switch from "react-switch";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

function App() {
  const [data, setData] = useState({
    email: "",
    subject: "",
    body: "",
    send: false
  });
  const [load, setLoad] = useState(false);
  const handleClick = e => {
    e.preventDefault();
    console.log("send", data);
    setLoad(true);
    // const upperCase =
    //   transcript.charAt(0).toUpperCase() + transcript.substring(1);
    // console.log(upperCase);
  };
  const speakHandleBody = () => {
    let synth = window.speechSynthesis;
    let message = new SpeechSynthesisUtterance("Tell me about Body");
    message.lang = "hi-IN";
    message.onend = function(event) {
      console.log("Finished in " + event.elapsedTime + " seconds.");
      let recognition = new SpeechRecognition();
      recognition.start();
      console.log("listening for body");
      recognition.onresult = e => {
        const current = e.resultIndex;
        const transcript = e.results[current][0].transcript;
        setData({
          ...data,
          body: transcript + ""
        });
        console.log(transcript);
      };
      recognition.onend = () => {
        end();
      };
    };
    synth.speak(message);
  };
  const end = () => {
    let synth = window.speechSynthesis;
    let message = new SpeechSynthesisUtterance(
      "Should i send mail now? Reply in Yes or No"
    );
    message.lang = "hi-IN";
    message.onend = event => {
      let recognition = new SpeechRecognition();
      recognition.lang = "en-GB";
      recognition.start();
      console.log("listening for body");
      recognition.onresult = e => {
        const current = e.resultIndex;
        const transcript = e.results[current][0].transcript;
        console.log(transcript);
        let str = transcript + "";
        if (str.includes("yes")) {
          console.log(data, "sending mail...");
          return 0;
        } else {
          console.log("Response is no or unusual");
        }
      };
      recognition.onend = () => {
        document.getElementById("btn").click();
        return 0;
      };
    };
    synth.speak(message);
  };
  const speakHandleSubject = () => {
    let synth = window.speechSynthesis;
    let message = new SpeechSynthesisUtterance("Tell me about Subject Line");
    message.lang = "hi-IN";
    message.onend = function(event) {
      console.log("Finished in " + event.elapsedTime + " seconds.");
      let recognition = new SpeechRecognition();
      recognition.lang = "en-GB";
      recognition.start();
      console.log("listening for subject");
      recognition.onresult = e => {
        const current = e.resultIndex;
        const transcript = e.results[current][0].transcript;
        setData({
          ...data,
          subject: transcript + ""
        });
        console.log(transcript);
      };
      recognition.stop();
    };
    synth.speak(message);
  };
  const speakHandleEmail = () => {
    let synth = window.speechSynthesis;
    let message = new SpeechSynthesisUtterance("Tell me about receiver email");
    message.lang = "hi-IN";
    message.onend = function(event) {
      console.log("Finished in " + event.elapsedTime + " seconds.");
      let recognition = new SpeechRecognition();
      recognition.lang = "en-GB";
      recognition.start();
      console.log("listening for receiver email");
      recognition.onresult = e => {
        const current = e.resultIndex;
        const transcript = e.results[current][0].transcript;
        let email = transcript + "";
        setData({
          ...data,
          email: email.replace(/\s/g, "").toLowerCase()
        });
        console.log(transcript);
      };
      recognition.stop();
    };
    synth.speak(message);
  };
  return (
    <>
      <div className="row">
        <div className="col-lg-1 col-md-1"></div>
        <div className="col-lg-10 col-md-10">
          <div className="card " align="center">
            <h1>
              Voice Email<sup style={{ fontSize: "10px" }}>beta 0.5</sup>{" "}
              &nbsp;&nbsp;&nbsp;
              <Switch onChange={console.log("dark mode")} checked={true} />
            </h1>
            <h6>Click on Fields to talk,and reply after each beap </h6>
            <input
              type="email"
              name="email"
              autoFocus
              className="box"
              readOnly
              x-webkit-speech="true"
              placeholder="Enter Email"
              defaultValue={data.email}
              onClick={speakHandleEmail}
            ></input>
            <br />
            <input
              type="text"
              name="subject"
              x-webkit-speech="true"
              readOnly
              className="box"
              placeholder="Enter Subject"
              defaultValue={data.subject}
              onClick={speakHandleSubject}
            ></input>
            <br />
            <textarea
              type="text"
              rows="5"
              readOnly
              className="box"
              x-webkit-speech="true"
              name="body"
              placeholder="Enter Body"
              defaultValue={data.body}
              onClick={speakHandleBody}
            ></textarea>
            <br />
            <button id="btn" className="btns btn-success" onClick={handleClick}>
              Submit
            </button>
          </div>
        </div>
        <div className="col-lg-1 col-md-1"></div>
      </div>
      {load ? (
        <div className="row">
          <div className="col-lg-1 col-md-1"></div>
          <div className="col-md-10 col-lg-10">
            <div className="card">
              <h6 className="alert-success">
                Your Email will be send when backend is ready,rest your data is
                here:{" "}
              </h6>
              Email:{data.email}
              <hr />
              Subject:{data.subject}
              <hr />
              Body:{data.body}
            </div>
          </div>
          <div className="col-md-1 col-lg-1"></div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default App;
