(this.webpackJsonpvoicemail=this.webpackJsonpvoicemail||[]).push([[0],{12:function(e,n,t){},14:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),c=t(4),l=t.n(c),r=t(2),s=t(1),i=(t(12),t(5)),u=t.n(i),d=t(6),m=t.n(d),b=window.SpeechRecognition||window.webkitSpeechRecognition;var f=function(){var e=Object(a.useState)({email:"",subject:"",body:"",send:!1}),n=Object(s.a)(e,2),t=n[0],c=n[1],l=Object(a.useRef)(),i=Object(a.useRef)(),d=Object(a.useRef)(),f=Object(a.useRef)(),h=Object(a.useRef)(),g=Object(a.useState)(!1),p=Object(s.a)(g,2),w=p[0],v=p[1],y=Object(a.useState)(!1),E=Object(s.a)(y,2),k=E[0],N=E[1],S=Object(a.useState)(!1),j=Object(s.a)(S,2),x=j[0],O=j[1],C=function(){N(!0);var e=window.speechSynthesis,n=new SpeechSynthesisUtterance("Should i send mail now? Reply in Yes or No");n.lang="hi-IN",n.onend=function(e){var n=new b;n.lang="en-GB",n.start(),console.log("listening for body"),n.onresult=function(e){var n=e.resultIndex,a=e.results[n][0].transcript;if(console.log(a),(a+"").includes("yes"))return console.log(t,"sending mail..."),0;console.log("Response is no or unusual")},n.onend=function(){return N(!1),document.getElementById("btn").click(),0}},e.speak(n)};return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-1 col-md-1"}),o.a.createElement("div",{className:"col-lg-10 col-md-10"},o.a.createElement("div",{className:"card",ref:f,align:"center"},o.a.createElement("h1",null,"Voice Email",o.a.createElement("sup",{style:{fontSize:"10px"}},"beta 0.5")," "),o.a.createElement("div",{className:"col"},o.a.createElement("div",{className:"row-1"}),o.a.createElement("div",{className:"row-10"},o.a.createElement(u.a,{onChange:function(e){!1===e?(v(!1),document.body.style.backgroundColor="white",document.body.style.color="#000",l.current.className="box",i.current.className="box",d.current.className="box",f.current.className="card",h.current.style.backgroundColor="#efeeee"):(v(!0),document.body.style.backgroundColor="#1d1c19",document.body.style.color="white",l.current.className="darkbox",i.current.className="darkbox",d.current.className="darkbox",f.current.className="card darkcard",h.current.style.backgroundColor="#1d1c19")},checked:w})),o.a.createElement("div",{className:"row-1"})),o.a.createElement("h6",null,"Click on Fields to talk,and reply after each beap "),k?o.a.createElement("img",{style:{height:"20vh",backgroundColor:"rgba(0,0,0,0.01)"},src:m.a,alt:"Listening gif"}):"",o.a.createElement("input",{ref:l,type:"email",name:"email",autoFocus:!0,className:"box",readOnly:!0,"x-webkit-speech":"true",placeholder:"Enter Email",defaultValue:t.email,onClick:function(){N(!0);var e=window.speechSynthesis,n=new SpeechSynthesisUtterance("Tell me about receiver email");n.lang="hi-IN",n.onend=function(e){console.log("Finished in "+e.elapsedTime+" seconds.");var n=new b;n.lang="en-GB",n.start(),console.log("listening for receiver email"),n.onresult=function(e){var n=e.resultIndex,a=e.results[n][0].transcript,o=a+"";c(Object(r.a)({},t,{email:o.replace(/\s/g,"").toLowerCase()})),console.log(a)},n.onend=function(){N(!1),n.stop()},n.stop()},e.speak(n)}}),o.a.createElement("br",null),o.a.createElement("input",{ref:i,type:"text",name:"subject","x-webkit-speech":"true",readOnly:!0,className:"box",placeholder:"Enter Subject",defaultValue:t.subject,onClick:function(){N(!0);var e=window.speechSynthesis,n=new SpeechSynthesisUtterance("Tell me about Subject Line");n.lang="hi-IN",n.onend=function(e){console.log("Finished in "+e.elapsedTime+" seconds.");var n=new b;n.lang="en-GB",n.start(),console.log("listening for subject"),n.onresult=function(e){var n=e.resultIndex,a=e.results[n][0].transcript;c(Object(r.a)({},t,{subject:a+""})),console.log(a)},n.onend=function(){N(!1),n.stop()},n.stop()},e.speak(n)}}),o.a.createElement("br",null),o.a.createElement("textarea",{ref:d,type:"text",rows:"5",readOnly:!0,className:"box","x-webkit-speech":"true",name:"body",placeholder:"Enter Body",defaultValue:t.body,onClick:function(){N(!0);var e=window.speechSynthesis,n=new SpeechSynthesisUtterance("Tell me about Body");n.lang="hi-IN",n.onend=function(e){console.log("Finished in "+e.elapsedTime+" seconds.");var n=new b;n.start(),console.log("listening for body"),n.onresult=function(e){var n=e.resultIndex,a=e.results[n][0].transcript;c(Object(r.a)({},t,{body:a+""})),console.log(a)},n.onend=function(){N(!1),C()}},e.speak(n)}}),o.a.createElement("br",null),o.a.createElement("button",{id:"btn",className:"btns btn-success",onClick:function(e){e.preventDefault(),N(!1),console.log("send",t),O(!0)}},"Submit"))),o.a.createElement("div",{className:"col-lg-1 col-md-1"})),x?o.a.createElement("div",{className:"row",ref:"submit"},o.a.createElement("div",{className:"col-lg-1 col-md-1"}),o.a.createElement("div",{className:"col-md-10 col-lg-10"},o.a.createElement("div",{className:"card"},o.a.createElement("h6",{className:"alert-success"},"Your Email will be send when backend is ready,rest your data is here:"," "),"Email:",t.email,o.a.createElement("hr",null),"Subject:",t.subject,o.a.createElement("hr",null),"Body:",t.body)),o.a.createElement("div",{className:"col-md-1 col-lg-1"})):"")},h=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(o.a.createElement(f,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/voice_mail",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/voice_mail","/service-worker.js");h?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):g(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):g(n,e)}))}}()},6:function(e,n,t){e.exports=t.p+"static/media/abc.314e8d99.gif"},7:function(e,n,t){e.exports=t(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.724318a1.chunk.js.map