import React, { useState } from "react";

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
    message.onend = function(event) {
      console.log("Finished in " + event.elapsedTime + " seconds.");
      let recognition = new SpeechRecognition();
      recognition.lang = "en-GB";
      recognition.start();
      console.log("listening for subject");
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
    <div className="conainter card mt-5 ml-5 mr-5">
      <h6>Click on Fields to talk,and reply after each beap </h6>
      <h1>
        Voice Email<sup style={{ fontSize: "10px" }}>beta 0.5</sup>
      </h1>
      <input
        type="email"
        name="email"
        autoFocus
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
        placeholder="Enter Subject"
        defaultValue={data.subject}
        onClick={speakHandleSubject}
      ></input>
      <br />
      <textarea
        type="text"
        rows="5"
        readOnly
        x-webkit-speech="true"
        name="body"
        placeholder="Enter Body"
        defaultValue={data.body}
        onClick={speakHandleBody}
      ></textarea>
      <br />
      <button id="btn" className="btn btn-success" onClick={handleClick}>
        Submit
      </button>
      <br />
      {load ? (
        <div>
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
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
