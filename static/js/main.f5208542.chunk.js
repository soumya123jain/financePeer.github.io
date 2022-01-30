(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{35:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var c=n(30),a=n.n(c),s=(n(35),n(11)),i=n(8),r=n(12),o=(n(41),r.a.initializeApp({apiKey:"AIzaSyBhYll44LWToS6AXg6talQ9gwDLe33o9T8",authDomain:"login-finance-peer.firebaseapp.com",projectId:"login-finance-peer",storageBucket:"login-finance-peer.appspot.com",messagingSenderId:"555939069142",appId:"1:555939069142:web:c33edbebade84614d99d77"})),l=r.a.storage(),j=(r.a.database(),o),d=(n(20),n(59),n(3)),u=function(e){return Object(d.jsx)("div",{style:{overflow:"auto",height:"600px"},children:Object(d.jsxs)("table",{children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{style:{padding:"10px"},children:[Object(d.jsx)("th",{children:"UserId"}),Object(d.jsx)("th",{children:"Title"}),Object(d.jsx)("th",{children:"Content"})]})}),Object(d.jsx)("tbody",{children:e.data.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.userId}),Object(d.jsx)("td",{children:e.title}),Object(d.jsx)("td",{children:e.body})]},e.id)}))})]})})};var b=function(){var e,t=Object(i.useState)(0),n=Object(s.a)(t,2),c=n[0],a=n[1],o=Object(i.useState)([]),j=Object(s.a)(o,2),b=j[0],h=j[1],O=Object(i.useState)(""),p=Object(s.a)(O,2),g=(p[0],p[1],Object(i.useState)(!1)),x=Object(s.a)(g,2),f=x[0],m=x[1],v=Object(i.useState)([]),w=Object(s.a)(v,2),S=(w[0],w[1],function(t){var n=[JSON.parse(e.result)];console.log(n),console.log(typeof n),h(n[0]),console.log(n[0][0].title),n[0].map((function(e){r.a.database().ref("posts").push().set({item:e})}))}),y=function(e){l.ref("files/".concat(e.name)).put(e).on("state_changed",(function(e){var t=Math.round(e.bytesTransferred/e.totalBytes*100);a(t)}),(function(e){return console.log(e)}),(function(){l.ref("files").child(e.name).getDownloadURL().then((function(e){console.log(e)}))}))},k=function(t){(e=new FileReader).onloadend=S,e.readAsText(t)};return Object(d.jsxs)("div",{className:"Fileupload",children:[Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.target[0].files[0];console.log(t),k(t),y(t)},children:[Object(d.jsx)("input",{type:"file",className:"input"}),Object(d.jsx)("button",{type:"submit",children:"Upload"})]}),Object(d.jsx)("hr",{}),Object(d.jsxs)("p",{children:["Uploading done ",c,"%"]}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{style:{color:"red",fontSize:"15px"},children:100===c?"click here to view the data":"Waiting"}),100===c&&Object(d.jsx)("button",{style:{marginBottom:"10px",marginLeft:"5px"},onClick:function(){return m(!0)},children:"View data"}),f&&Object(d.jsx)(u,{data:b})]})},h=function(e){var t=e.handleLogout,n=e.user;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("section",{className:"Header",children:[Object(d.jsxs)("nav",{children:[Object(d.jsxs)("h2",{children:["Welcome ",n]}),Object(d.jsx)("button",{onClick:t,children:"Logout"})]}),Object(d.jsx)(b,{})]})})},O=function(e){var t=e.email,n=e.setEmail,c=e.password,a=e.setPassword,s=e.handleLogin,i=e.handleSignup,r=e.hasAccount,o=e.setHasAccount,l=e.emailError,j=e.passwordError;return Object(d.jsx)("section",{className:"login",children:Object(d.jsxs)("div",{className:"loginContainer",children:[Object(d.jsx)("label",{children:"Username"}),Object(d.jsx)("input",{type:"text",autoFocus:!0,required:!0,value:t,onChange:function(e){return n(e.target.value)}}),Object(d.jsx)("p",{className:"errorMsg",children:l}),Object(d.jsx)("label",{children:"Password"}),Object(d.jsx)("input",{type:"password",required:!0,value:c,onChange:function(e){return a(e.target.value)}}),Object(d.jsx)("p",{className:"errorMsg",children:j}),Object(d.jsx)("div",{className:"btnContainer",children:r?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("button",{onClick:s,children:"Sign in"}),Object(d.jsxs)("p",{children:["Don't have an account? ",Object(d.jsx)("span",{onClick:function(){return o(!r)},children:"Sign up"})]})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("button",{onClick:i,children:"Sign Up"}),Object(d.jsxs)("p",{children:["have an account? ",Object(d.jsx)("span",{onClick:function(){return o(!r)},children:"Sign In"})]})]})})]})})};n(61);var p=function(){var e=Object(i.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(""),r=Object(s.a)(a,2),o=r[0],l=r[1],u=Object(i.useState)(""),b=Object(s.a)(u,2),p=b[0],g=b[1],x=Object(i.useState)(""),f=Object(s.a)(x,2),m=f[0],v=f[1],w=Object(i.useState)(""),S=Object(s.a)(w,2),y=S[0],k=S[1],C=Object(i.useState)(!1),A=Object(s.a)(C,2),E=A[0],I=A[1],L=function(){v(""),k("")},N=function(){j.auth().onAuthStateChanged((function(e){e?(l(""),g(""),c(e)):c("")}))};return Object(i.useEffect)((function(){N()}),[]),Object(d.jsx)("div",{children:n?Object(d.jsx)(h,{handleLogout:function(){j.auth().signOut()}}):Object(d.jsx)(O,{email:o,setEmail:l,password:p,setPassword:g,handleLogin:function(){L(),j.auth().signInWithEmailAndPassword(o,p).catch((function(e){switch(e.code){case"auth/invalid-email":case"auth/user-disabled":case"auth/user-not-found":v(e.message);break;case"auth/wrong-password":k(e.message)}}))},handleSignup:function(){L(),j.auth().createUserWithEmailAndPassword(o,p).catch((function(e){switch(e.code){case"auth/email-already-in-use":case"auth/invalid-email":v(e.message);break;case"auth/weak-password":k(e.message)}}))},hasAccount:E,setHasAccount:I,emailError:m,passwordError:y})})};a.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.f5208542.chunk.js.map