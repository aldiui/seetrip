import{W as f,j as s,Y as h,I as j,a as g}from"./app-JHr847d-.js";import{A as u,F as w}from"./AuthLayout-DQ6nmAZL.js";import{C as y,a as b}from"./chunk-YQO7BFFX-DSZLBsX_.js";import{C as v}from"./chunk-2EW3JUUD-BnP4_yfU.js";import{I as C}from"./chunk-YF5BD7DN-CBZVvOXh.js";import{H as S}from"./chunk-7OLJDQMT-AfpAcD5m.js";import{F as n}from"./chunk-56K2BSAJ-B5oYsPph.js";import{F as t,a as l}from"./chunk-H46NUPBZ-BOPC4Oho.js";import{T as e}from"./chunk-2OOHT3W5-CSJh4K3n.js";import{I as m}from"./chunk-6CVSDS6C-DYEn1HBN.js";import{C as F}from"./chunk-BDSTZZXD-CYaIS77w.js";import{B as z}from"./chunk-UVUR7MCU-xK3lE66g.js";import"./chunk-6RSEZNRH-Bc2GE4v1.js";import"./chunk-5MKCW436-CDR3RVuy.js";import"./chunk-G72KV6MB-CldgvVEv.js";import"./chunk-KRPLQIP4-D2gzZcl_.js";import"./chunk-X3PS6RUF-VuPBMW7K.js";const q=({sessions:d})=>{const{data:a,setData:o,post:p,processing:x,errors:r}=f({nama:"",email:"",password:"",konfirmasi_password:""}),c=i=>{i.preventDefault(),p("/register")};return s.jsxs(u,{sessions:d,children:[s.jsx(h,{title:"Register"}),s.jsxs(y,{maxW:"md",w:"full",p:2,children:[s.jsxs(v,{pb:0,children:[s.jsx(C,{src:"/images/logo.png",w:200,mx:"auto",alt:"Seetrip Logo"}),s.jsx(S,{size:"md",fontWeight:"bold",textAlign:"center",children:"Register"})]}),s.jsxs("form",{onSubmit:c,children:[s.jsxs(b,{pb:0,children:[s.jsxs(n,{mb:3,isInvalid:r.nama,children:[s.jsxs(t,{htmlFor:"nama",fontSize:"sm",children:["Nama"," ",s.jsx(e,{display:"inline",color:"red",children:"*"})]}),s.jsx(m,{type:"text",id:"nama",value:a.nama,onChange:i=>o("nama",i.target.value)}),r.nama&&s.jsx(l,{fontSize:"xs",children:r.nama})]}),s.jsxs(n,{mb:3,isInvalid:r.email,children:[s.jsxs(t,{htmlFor:"email",fontSize:"sm",children:["Email"," ",s.jsx(e,{display:"inline",color:"red",children:"*"})]}),s.jsx(m,{type:"email",id:"email",value:a.email,onChange:i=>o("email",i.target.value)}),r.email&&s.jsx(l,{fontSize:"xs",children:r.email})]}),s.jsxs(n,{mb:3,isInvalid:r.password,children:[s.jsxs(t,{htmlFor:"password",fontSize:"sm",children:["Password"," ",s.jsx(e,{display:"inline",color:"red",children:"*"})]}),s.jsx(m,{type:"password",id:"password",value:a.password,onChange:i=>o("password",i.target.value)}),r.password&&s.jsx(l,{fontSize:"xs",children:r.password})]}),s.jsxs(n,{isInvalid:r.konfirmasi_password,children:[s.jsxs(t,{htmlFor:"konfirmasi_password",fontSize:"sm",children:["Konfirmasi Password"," ",s.jsx(e,{display:"inline",color:"red",children:"*"})]}),s.jsx(m,{type:"password",id:"konfirmasi_password",value:a.konfirmasi_password,onChange:i=>o("konfirmasi_password",i.target.value)}),r.konfirmasi_password&&s.jsx(l,{fontSize:"xs",children:r.konfirmasi_password})]})]}),s.jsxs(F,{display:"flex",flexDirection:"column",gap:3,justifyContent:"center",children:[s.jsxs(z,{type:"submit",colorScheme:"blue",w:"100%",isLoading:x,loadingText:"Register",children:[s.jsx(j,{as:w,mr:2}),"Register"]}),s.jsxs(e,{fontSize:"sm",textAlign:"center",children:["Sudah punya akun?"," ",s.jsx(g,{href:"/login",children:s.jsx(e,{display:"inline",fontWeight:"semibold",color:"blue.500",children:"Login"})})]})]})]})]})]})};export{q as default};