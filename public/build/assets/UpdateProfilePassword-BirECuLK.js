import{W as f,R as e,I as E}from"./app-CRUbJu4Z.js";import{F as u}from"./BookmarkIcon-CC9ky48A.js";import{C as _,a as b}from"./chunk-YQO7BFFX-BCfAnfk7.js";import{C as g}from"./chunk-2EW3JUUD-BRnsAHIO.js";import{H as S}from"./chunk-7OLJDQMT-CSaLqb1Z.js";import{F as t}from"./chunk-56K2BSAJ-B_XMpqjX.js";import{F as m,a as n}from"./chunk-H46NUPBZ-B6kUYA5q.js";import{T as i}from"./chunk-2OOHT3W5-DdxI42KR.js";import{I as l}from"./chunk-6CVSDS6C-D73OriWR.js";import{C as v}from"./chunk-BDSTZZXD-UGsc0v3H.js";import{B as C}from"./chunk-UVUR7MCU-eTSeZI0_.js";const R=()=>{const{data:s,setData:o,put:d,processing:p,errors:a,reset:c}=f({password_lama:"",password:"",konfirmasi_password:""}),w=r=>{r.preventDefault(),d("/admin/profile/password",{preserveScroll:!0,onSuccess:()=>c()})};return e.createElement(_,{w:"full",p:2,h:"auto"},e.createElement(g,{pb:0},e.createElement(S,{size:"md",fontWeight:"bold"},"Ubah Password Profile")),e.createElement("form",{onSubmit:w},e.createElement(b,{pb:0},e.createElement(t,{mb:3,isInvalid:a.password_lama},e.createElement(m,{htmlFor:"password_lama",fontSize:"sm"},"Password Lama"," ",e.createElement(i,{display:"inline",color:"red"},"*")),e.createElement(l,{type:"password",id:"password_lama",value:s.password_lama,onChange:r=>o("password_lama",r.target.value)}),a.password_lama&&e.createElement(n,{fontSize:"xs"},a.password_lama)),e.createElement(t,{mb:3,isInvalid:a.password},e.createElement(m,{htmlFor:"password",fontSize:"sm"},"Password"," ",e.createElement(i,{display:"inline",color:"red"},"*")),e.createElement(l,{type:"password",id:"password",value:s.password,onChange:r=>o("password",r.target.value)}),a.password&&e.createElement(n,{fontSize:"xs"},a.password)),e.createElement(t,{mb:3,isInvalid:a.konfirmasi_password},e.createElement(m,{htmlFor:"konfirmasi_password",fontSize:"sm"},"Konfirmasi Password"," ",e.createElement(i,{display:"inline",color:"red"},"*")),e.createElement(l,{type:"password",id:"konfirmasi_password",value:s.konfirmasi_password,onChange:r=>o("konfirmasi_password",r.target.value)}),a.konfirmasi_password&&e.createElement(n,{fontSize:"xs"},a.konfirmasi_password))),e.createElement(v,null,e.createElement(C,{type:"submit",colorScheme:"blue",isLoading:p,loadingText:"Simpan"},e.createElement(E,{as:u,mr:2}),"Simpan"))))};export{R as default};