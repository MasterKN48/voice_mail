import React, { useState, useRef } from "react";
import "./app.css";
import axios from "axios";
import Switch from "react-switch";
import GIF from "./abc.gif";
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

function App() {
  const [data, setData] = useState({
    from: "",
    email: "",
    subject: "",
    body: "",
    send: false
  });
  const box1 = useRef();
  const box2 = useRef();
  const box3 = useRef();
  const box4 = useRef();
  const card = useRef();
  const sub = useRef();
  const [mode, setMode] = useState(false);
  const [gif, setGif] = useState(false);
  const [load, setLoad] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleClick = e => {
    e.preventDefault();
    setGif(false);
    console.log("sending");
    setLoad(false);
    var params = new URLSearchParams();
    params.append("email", data.email);
    params.append("from", data.from);
    params.append("body", data.body);
    params.append("subject", data.subject);
    axios
      .post("https://letsgowithmkn.000webhostapp.com/test.php", params)
      .then(res => {
        if (res.data.status === "Yes") {
          setLoad(true);
          setSuccess(true);
          sub.current.focus();
        }
      })
      .catch(err => {
        setLoad(true);
        setSuccess(false);
        sub.current.focus();
        console.log(err);
      });
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
      recognition.onstart = () => {
        setGif(true);
      };
      console.log("listening for body");
      recognition.onresult = e => {
        const current = e.resultIndex;
        const transcript = e.results[current][0].transcript;
        setData({
          ...data,
          body: transcript + ""
        });
      };

      recognition.onend = () => {
        setGif(false);
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
      recognition.onstart = () => {
        setGif(true);
      };
      console.log("listening for body");
      recognition.onresult = e => {
        const current = e.resultIndex;
        const transcript = e.results[current][0].transcript;
        let str = transcript + "";
        if (str.includes("yes")) {
          console.log(data, "sending mail...");
          setGif(false);
          return 0;
        } else {
          console.log("Response is no or unusual");
          setGif(false);
        }
      };
      recognition.onend = () => {
        setGif(false);
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
      recognition.onstart = () => {
        setGif(true);
      };
      console.log("listening for subject");
      recognition.onresult = e => {
        const current = e.resultIndex;
        const transcript = e.results[current][0].transcript;
        setData({
          ...data,
          subject: transcript + ""
        });
      };
      recognition.onend = () => {
        setGif(false);
        recognition.stop();
      };
    };
    synth.speak(message);
  };
  const speakHandleEmailTo = () => {
    let synth = window.speechSynthesis;
    let message = new SpeechSynthesisUtterance("Tell me about receiver email");
    message.lang = "hi-IN";
    message.onend = function(event) {
      console.log("Finished in " + event.elapsedTime + " seconds.");
      let recognition = new SpeechRecognition();
      recognition.lang = "en-GB";
      recognition.start();
      recognition.onstart = () => {
        setGif(true);
      };
      console.log("listening for receiver email");
      recognition.onresult = e => {
        const current = e.resultIndex;
        const transcript = e.results[current][0].transcript;
        let email = transcript + "";
        setData({
          ...data,
          email: email.replace(/\s/g, "").toLowerCase()
        });
      };
      recognition.onend = () => {
        setGif(false);
        recognition.stop();
      };
    };
    synth.speak(message);
  };
  const speakHandleEmailFrom = () => {
    setGif(true);
    let synth = window.speechSynthesis;
    let message = new SpeechSynthesisUtterance("Tell me about Your email");
    message.lang = "hi-IN";
    message.onend = function(event) {
      console.log("Finished in " + event.elapsedTime + " seconds.");
      let recognition = new SpeechRecognition();
      recognition.lang = "en-GB";
      recognition.start();
      recognition.onstart = () => {
        setGif(true);
      };
      console.log("listening for your email");
      recognition.onresult = e => {
        const current = e.resultIndex;
        const transcript = e.results[current][0].transcript;
        let email = transcript + "";
        setData({
          ...data,
          from: email.replace(/\s/g, "").toLowerCase()
        });
      };
      recognition.onend = () => {
        setGif(false);
        recognition.stop();
      };
    };
    synth.speak(message);
  };
  const handleChange = mode => {
    if (mode === false) {
      setMode(false);
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#000";
      box1.current.className = "box";
      box2.current.className = "box";
      box3.current.className = "box";
      box4.current.className = "box";
      card.current.className = "card";
      if (load) {
        sub.current.className = "card";
      }
    } else {
      setMode(true);
      document.body.style.backgroundColor = "#1d1c19";
      document.body.style.color = "white";
      box1.current.className = "darkbox";
      box2.current.className = "darkbox";
      box3.current.className = "darkbox";
      box4.current.className = "darkbox";
      card.current.className = "card darkcard";
      if (load) {
        sub.current.className = "card darkcard";
      }
    }
  };
  return (
    <>
      <div className="row">
        <div className="col-lg-1 col-md-1"></div>
        <div className="col-lg-10 col-md-10">
          <div className="card" ref={card} align="center">
            <h1>Voice Email</h1>
            <div className="col">
              <div className="row-1"></div>
              <div className="row-10">
                <Switch onChange={handleChange} checked={mode}></Switch>
              </div>
              <div className="row-1"></div>
            </div>
            <h6>Click on Fields to talk,and reply after each beap </h6>
            {gif ? (
              <img
                style={{ height: "20vh", backgroundColor: "rgba(0,0,0,0.01)" }}
                src={GIF}
                alt="Listening gif"
              />
            ) : (
              ""
            )}
            <input
              ref={box4}
              type="email"
              name="from"
              autoFocus
              required
              readOnly
              className="box"
              x-webkit-speech="true"
              placeholder="Enter Your Email"
              defaultValue={data.from}
              onClick={speakHandleEmailFrom}
            ></input>
            <br />
            <input
              ref={box1}
              type="email"
              name="email"
              readOnly
              className="box"
              x-webkit-speech="true"
              required
              placeholder="Enter Receiver Email"
              defaultValue={data.email}
              onClick={speakHandleEmailTo}
            ></input>
            <br />
            <input
              ref={box2}
              type="text"
              name="subject"
              x-webkit-speech="true"
              className="box"
              readOnly
              required
              placeholder="Enter Subject"
              defaultValue={data.subject}
              onClick={speakHandleSubject}
            ></input>
            <br />
            <textarea
              ref={box3}
              type="text"
              rows="5"
              className="box"
              x-webkit-speech="true"
              name="body"
              readOnly
              required
              placeholder="Enter Body"
              defaultValue={data.body}
              onClick={speakHandleBody}
            ></textarea>
            <br />
            <input
              id="btn"
              type="hidden"
              className="btns btn-success"
              onClick={handleClick}
            ></input>
          </div>
        </div>
        <div className="col-lg-1 col-md-1"></div>
      </div>
      {load ? (
        success ? (
          <div className="row">
            <div className="col-lg-1 col-md-1"></div>
            <div className="col-md-10 col-lg-10">
              <div className="card" ref={sub}>
                <h6 className="alert-success">Email Sent Successfully!</h6>
                From:&nbsp;{data.from}
                <hr />
                To:&nbsp;{data.email}
                <hr />
                Subject:&nbsp;{data.subject}
                <hr />
                Body:&nbsp;{data.body}
              </div>
            </div>
            <div className="col-md-1 col-lg-1"></div>
          </div>
        ) : (
          <div className="row">
            <div className="col-lg-1 col-md-1"></div>
            <div className="col-md-10 col-lg-10">
              <div className="card" ref={sub}>
                <h6 className="alert-success">
                  There is error in sending email! Please check data.
                </h6>
                From:&nbsp;{data.from}
                <hr />
                To:&nbsp;{data.email}
                <hr />
                Subject:&nbsp;{data.subject}
                <hr />
                Body:&nbsp;{data.body}
              </div>
            </div>
            <div className="col-md-1 col-lg-1"></div>
          </div>
        )
      ) : (
        ""
      )}
    </>
  );
}

export default App;
