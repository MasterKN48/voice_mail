(this.webpackJsonpvoicemail=this.webpackJsonpvoicemail||[]).push([[0],{16:function(e,n,t){e.exports=t.p+"static/media/abc.314e8d99.gif"},17:function(e,n,t){e.exports=t(41)},22:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),o=t(13),r=t.n(o),l=t(3),s=t(2),i=(t(22),t(14)),u=t.n(i),d=t(15),m=t.n(d),f=t(16),h=t.n(f),b=window.SpeechRecognition||window.webkitSpeechRecognition;var p=function(){var e=Object(a.useState)({from:"",email:"",subject:"",body:"",send:!1}),n=Object(s.a)(e,2),t=n[0],o=n[1],r=Object(a.useRef)(),i=Object(a.useRef)(),d=Object(a.useRef)(),f=Object(a.useRef)(),p=Object(a.useRef)(),g=Object(a.useRef)(),v=Object(a.useState)(!1),w=Object(s.a)(v,2),y=w[0],E=w[1],N=Object(a.useState)(!1),k=Object(s.a)(N,2),j=k[0],S=k[1],x=Object(a.useState)(!1),O=Object(s.a)(x,2),C=O[0],R=O[1],T=Object(a.useState)(!1),I=Object(s.a)(T,2),B=I[0],F=I[1],U=function(){var e=window.speechSynthesis,n=new SpeechSynthesisUtterance("Should i send mail now? Reply in Yes or No");n.lang="hi-IN",n.onend=function(e){var n=new b;n.lang="en-GB",n.start(),n.onstart=function(){S(!0)},console.log("listening for body"),n.onresult=function(e){var n=e.resultIndex;if((e.results[n][0].transcript+"").includes("yes"))return console.log(t,"sending mail..."),S(!1),0;console.log("Response is no or unusual"),S(!1)},n.onend=function(){return S(!1),document.getElementById("btn").click(),0}},e.speak(n)};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-1 col-md-1"}),c.a.createElement("div",{className:"col-lg-10 col-md-10"},c.a.createElement("div",{className:"card",ref:p,align:"center"},c.a.createElement("h1",null,"Voice Email"),c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"row-1"}),c.a.createElement("div",{className:"row-10"},c.a.createElement(m.a,{onChange:function(e){!1===e?(E(!1),document.body.style.backgroundColor="white",document.body.style.color="#000",r.current.className="box",i.current.className="box",d.current.className="box",f.current.className="box",p.current.className="card",C&&(g.current.className="card")):(E(!0),document.body.style.backgroundColor="#1d1c19",document.body.style.color="white",r.current.className="darkbox",i.current.className="darkbox",d.current.className="darkbox",f.current.className="darkbox",p.current.className="card darkcard",C&&(g.current.className="card darkcard"))},checked:y})),c.a.createElement("div",{className:"row-1"})),c.a.createElement("h6",null,"Click on Fields to talk,and reply after each beap "),j?c.a.createElement("img",{style:{height:"20vh",backgroundColor:"rgba(0,0,0,0.01)"},src:h.a,alt:"Listening gif"}):"",c.a.createElement("input",{ref:f,type:"email",name:"from",autoFocus:!0,required:!0,readOnly:!0,className:"box","x-webkit-speech":"true",placeholder:"Enter Your Email",defaultValue:t.from,onClick:function(){S(!0);var e=window.speechSynthesis,n=new SpeechSynthesisUtterance("Tell me about Your email");n.lang="hi-IN",n.onend=function(e){console.log("Finished in "+e.elapsedTime+" seconds.");var n=new b;n.lang="en-GB",n.start(),n.onstart=function(){S(!0)},console.log("listening for your email"),n.onresult=function(e){var n=e.resultIndex,a=e.results[n][0].transcript+"";o(Object(l.a)({},t,{from:a.replace(/\s/g,"").toLowerCase()}))},n.onend=function(){S(!1),n.stop()}},e.speak(n)}}),c.a.createElement("br",null),c.a.createElement("input",{ref:r,type:"email",name:"email",readOnly:!0,className:"box","x-webkit-speech":"true",required:!0,placeholder:"Enter Receiver Email",defaultValue:t.email,onClick:function(){var e=window.speechSynthesis,n=new SpeechSynthesisUtterance("Tell me about receiver email");n.lang="hi-IN",n.onend=function(e){console.log("Finished in "+e.elapsedTime+" seconds.");var n=new b;n.lang="en-GB",n.start(),n.onstart=function(){S(!0)},console.log("listening for receiver email"),n.onresult=function(e){var n=e.resultIndex,a=e.results[n][0].transcript+"";o(Object(l.a)({},t,{email:a.replace(/\s/g,"").toLowerCase()}))},n.onend=function(){S(!1),n.stop()}},e.speak(n)}}),c.a.createElement("br",null),c.a.createElement("input",{ref:i,type:"text",name:"subject","x-webkit-speech":"true",className:"box",readOnly:!0,required:!0,placeholder:"Enter Subject",defaultValue:t.subject,onClick:function(){var e=window.speechSynthesis,n=new SpeechSynthesisUtterance("Tell me about Subject Line");n.lang="hi-IN",n.onend=function(e){console.log("Finished in "+e.elapsedTime+" seconds.");var n=new b;n.lang="en-GB",n.start(),n.onstart=function(){S(!0)},console.log("listening for subject"),n.onresult=function(e){var n=e.resultIndex,a=e.results[n][0].transcript;o(Object(l.a)({},t,{subject:a+""}))},n.onend=function(){S(!1),n.stop()}},e.speak(n)}}),c.a.createElement("br",null),c.a.createElement("textarea",{ref:d,type:"text",rows:"5",className:"box","x-webkit-speech":"true",name:"body",readOnly:!0,required:!0,placeholder:"Enter Body",defaultValue:t.body,onClick:function(){var e=window.speechSynthesis,n=new SpeechSynthesisUtterance("Tell me about Body");n.lang="hi-IN",n.onend=function(e){console.log("Finished in "+e.elapsedTime+" seconds.");var n=new b;n.start(),n.onstart=function(){S(!0)},console.log("listening for body"),n.onresult=function(e){var n=e.resultIndex,a=e.results[n][0].transcript;o(Object(l.a)({},t,{body:a+""}))},n.onend=function(){S(!1),U()}},e.speak(n)}}),c.a.createElement("br",null),c.a.createElement("input",{id:"btn",type:"hidden",className:"btns btn-success",onClick:function(e){e.preventDefault(),S(!1),console.log("sending"),R(!1);var n=new URLSearchParams;n.append("email",t.email),n.append("from",t.from),n.append("body",t.body),n.append("subject",t.subject),u.a.post("https://letsgowithmkn.000webhostapp.com/test.php",n).then((function(e){"Yes"===e.data.status&&(R(!0),F(!0),g.current.focus())})).catch((function(e){R(!0),F(!1),g.current.focus(),console.log(e)}))}}))),c.a.createElement("div",{className:"col-lg-1 col-md-1"})),C?B?c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-1 col-md-1"}),c.a.createElement("div",{className:"col-md-10 col-lg-10"},c.a.createElement("div",{className:"card",ref:g},c.a.createElement("h6",{className:"alert-success"},"Email Sent Successfully!"),"From:\xa0",t.from,c.a.createElement("hr",null),"To:\xa0",t.email,c.a.createElement("hr",null),"Subject:\xa0",t.subject,c.a.createElement("hr",null),"Body:\xa0",t.body)),c.a.createElement("div",{className:"col-md-1 col-lg-1"})):c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-1 col-md-1"}),c.a.createElement("div",{className:"col-md-10 col-lg-10"},c.a.createElement("div",{className:"card",ref:g},c.a.createElement("h6",{className:"alert-success"},"There is error in sending email! Please check data."),"From:\xa0",t.from,c.a.createElement("hr",null),"To:\xa0",t.email,c.a.createElement("hr",null),"Subject:\xa0",t.subject,c.a.createElement("hr",null),"Body:\xa0",t.body)),c.a.createElement("div",{className:"col-md-1 col-lg-1"})):"")},g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(c.a.createElement(p,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/voice_mail",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/voice_mail","/service-worker.js");g?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):v(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):v(n,e)}))}}()}},[[17,1,2]]]);
//# sourceMappingURL=main.320d388c.chunk.js.map