import{W as c,j as s,I as x}from"./app-JHr847d-.js";import{F as h}from"./BookmarkIcon-Bmpjnh4y.js";import{C as j,a as u}from"./chunk-YQO7BFFX-DSZLBsX_.js";import{C as _}from"./chunk-2EW3JUUD-BnP4_yfU.js";import{H as b}from"./chunk-7OLJDQMT-AfpAcD5m.js";import{F as e}from"./chunk-56K2BSAJ-B5oYsPph.js";import{F as d,a as n}from"./chunk-H46NUPBZ-BOPC4Oho.js";import{T as l}from"./chunk-2OOHT3W5-CSJh4K3n.js";import{I as m}from"./chunk-6CVSDS6C-DYEn1HBN.js";import{C as g}from"./chunk-BDSTZZXD-CYaIS77w.js";import{B as S}from"./chunk-UVUR7MCU-xK3lE66g.js";const T=()=>{const{data:o,setData:i,put:p,processing:t,errors:r,reset:w}=c({password_lama:"",password:"",konfirmasi_password:""}),f=a=>{a.preventDefault(),p("/user/profile/password",{preserveScroll:!0,onSuccess:()=>w()})};return s.jsxs(j,{w:"full",p:2,h:"auto",children:[s.jsx(_,{pb:0,children:s.jsx(b,{size:"md",fontWeight:"bold",children:"Ubah Password Profile"})}),s.jsxs("form",{onSubmit:f,children:[s.jsxs(u,{pb:0,children:[s.jsxs(e,{mb:3,isInvalid:r.password_lama,children:[s.jsxs(d,{htmlFor:"password_lama",fontSize:"sm",children:["Password Lama"," ",s.jsx(l,{display:"inline",color:"red",children:"*"})]}),s.jsx(m,{type:"password",id:"password_lama",value:o.password_lama,onChange:a=>i("password_lama",a.target.value)}),r.password_lama&&s.jsx(n,{fontSize:"xs",children:r.password_lama})]}),s.jsxs(e,{mb:3,isInvalid:r.password,children:[s.jsxs(d,{htmlFor:"password",fontSize:"sm",children:["Password"," ",s.jsx(l,{display:"inline",color:"red",children:"*"})]}),s.jsx(m,{type:"password",id:"password",value:o.password,onChange:a=>i("password",a.target.value)}),r.password&&s.jsx(n,{fontSize:"xs",children:r.password})]}),s.jsxs(e,{mb:3,isInvalid:r.konfirmasi_password,children:[s.jsxs(d,{htmlFor:"konfirmasi_password",fontSize:"sm",children:["Konfirmasi Password"," ",s.jsx(l,{display:"inline",color:"red",children:"*"})]}),s.jsx(m,{type:"password",id:"konfirmasi_password",value:o.konfirmasi_password,onChange:a=>i("konfirmasi_password",a.target.value)}),r.konfirmasi_password&&s.jsx(n,{fontSize:"xs",children:r.konfirmasi_password})]})]}),s.jsx(g,{children:s.jsxs(S,{type:"submit",colorScheme:"blue",isLoading:t,loadingText:"Simpan",children:[s.jsx(x,{as:h,mr:2}),"Simpan"]})})]})]})};export{T as default};
