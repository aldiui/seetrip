import{W as g,R as e,Y as E,I as u,a as w}from"./app-DPnmQNMl.js";import{A as b,F as x}from"./AuthLayout-Bmj-UUa8.js";import{I as y}from"./chunk-YF5BD7DN-II7Coxse.js";import{C,a as F}from"./chunk-YQO7BFFX-DjfJuZn_.js";import{C as h}from"./chunk-2EW3JUUD-BRdUR3w7.js";import{H as L}from"./chunk-7OLJDQMT-CJSwRjv4.js";import{F as n,I as i}from"./chunk-6CVSDS6C-ChT1bA7_.js";import{F as l,a as s,C as I}from"./chunk-H46NUPBZ-M_mnBLCq.js";import{T as r}from"./chunk-2OOHT3W5-ChCwLuug.js";import{B as S}from"./chunk-UVUR7MCU-CmIpkDyX.js";import"./chunk-5MKCW436-BrFvw1lA.js";import"./chunk-G72KV6MB-CFzf8KEx.js";import"./chunk-KRPLQIP4-CwPIyTBq.js";import"./chunk-X3PS6RUF-DTGnK-xB.js";const _=({sessions:c})=>{const{data:o,setData:m,post:p,processing:d,errors:t}=g({email:"",password_confirmation:""}),f=a=>{a.preventDefault(),p("/login")};return e.createElement(b,{sessions:c},e.createElement(E,{title:"Login"}),e.createElement(C,{maxW:"md",w:"full",p:2},e.createElement(h,{pb:0},e.createElement(y,{src:"/images/logo.png",w:200,mx:"auto",alt:"Seetrip Logo"}),e.createElement(L,{size:"md",fontWeight:"bold",textAlign:"center"},"Login")),e.createElement("form",{onSubmit:f},e.createElement(F,{pb:0},e.createElement(n,{mb:3,isInvalid:t.email},e.createElement(l,{htmlFor:"email",fontSize:"sm"},"Email"," ",e.createElement(r,{display:"inline",color:"red"},"*")),e.createElement(i,{type:"email",id:"email",value:o.email,onChange:a=>m("email",a.target.value)}),t.email&&e.createElement(s,{fontSize:"xs"},t.email)),e.createElement(n,{mb:3,isInvalid:t.password},e.createElement(l,{htmlFor:"password",fontSize:"sm"},"Password"," ",e.createElement(r,{display:"inline",color:"red"},"*")),e.createElement(i,{type:"password",id:"password",value:o.password,onChange:a=>m("password",a.target.value)}),t.password&&e.createElement(s,{fontSize:"xs"},t.password))),e.createElement(I,{display:"flex",flexDirection:"column",gap:3,justifyContent:"center"},e.createElement(S,{type:"submit",colorScheme:"blue",w:"100%",isLoading:d,loadingText:"Login"},e.createElement(u,{as:x,mr:2}),"Login"),e.createElement(r,{fontSize:"sm",textAlign:"center"},"Belum punya akun?"," ",e.createElement(w,{href:"/register"},e.createElement(r,{display:"inline",fontWeight:"semibold",color:"blue.500"},"Register")))))))};export{_ as default};