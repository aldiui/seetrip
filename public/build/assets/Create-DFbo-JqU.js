import{q as F,W as C,R as e,Y as S,I as p,a as k}from"./app-DPnmQNMl.js";import{A as x}from"./AdminLayout -B5LiPOup.js";import{F as v}from"./BookmarkIcon-B-jtLz3k.js";import{F as y}from"./ArrowLeftIcon-DUbXo-N_.js";import{C as z,a as I}from"./chunk-YQO7BFFX-DjfJuZn_.js";import{C as T}from"./chunk-2EW3JUUD-BRdUR3w7.js";import{H as D}from"./chunk-7OLJDQMT-CJSwRjv4.js";import{F as i,I as c}from"./chunk-6CVSDS6C-ChT1bA7_.js";import{F as o,a as n,C as H}from"./chunk-H46NUPBZ-M_mnBLCq.js";import{T as s}from"./chunk-2OOHT3W5-ChCwLuug.js";import{T as R}from"./chunk-4IH3O7BJ-CoCotj3E.js";import{B as d}from"./chunk-UVUR7MCU-CmIpkDyX.js";import"./chunk-KRPLQIP4-CwPIyTBq.js";import"./chunk-PULVB27S-BmB31oiW.js";import"./MapPinIcon-CIgvDU8k.js";import"./chunk-7JBTTEVG-CIlxP4pX.js";import"./chunk-3ASUQ6PA-DrJ3xbiw.js";import"./chunk-5MKCW436-BrFvw1lA.js";import"./chunk-G72KV6MB-CFzf8KEx.js";import"./chunk-V7PAE35Z-ArVLID_a.js";import"./chunk-SPIKMR6I-D8fXho7g.js";import"./chunk-NABYTFTG-CWJEsaVk.js";import"./tslib.es6-DjSP9Sqm.js";const ae=({auth:E,sessions:f})=>{const{url:g}=F(),l=new URLSearchParams(g.split("?")[1]).get("kode"),{data:r,setData:m,post:h,processing:u,errors:a}=C({nama:"",deskripsi:"",harga:"",destination_id:l}),b=t=>{t.preventDefault(),h("/destination-price")};return e.createElement(x,{auth:E,sessions:f},e.createElement(S,{title:"Tambah Harga Destinasi"}),e.createElement(z,{maxW:"xl",w:"full",p:2,h:"auto"},e.createElement(T,{pb:0},e.createElement(D,{size:"md",fontWeight:"bold"},"Tambah Harga Destinasi")),e.createElement("form",{onSubmit:b},e.createElement(I,{pb:0},e.createElement(i,{mb:3,isInvalid:a.nama},e.createElement(o,{htmlFor:"nama",fontSize:"sm"},"Nama",e.createElement(s,{display:"inline",color:"red"},"*")),e.createElement(c,{type:"text",id:"nama",value:r.nama,onChange:t=>m("nama",t.target.value)}),a.nama&&e.createElement(n,{fontSize:"xs"},a.nama)),e.createElement(i,{mb:3,isInvalid:a.deskripsi},e.createElement(o,{htmlFor:"deskripsi",fontSize:"sm"},"Deskripsi",e.createElement(s,{display:"inline",color:"red"},"*")),e.createElement(R,{type:"text",id:"deskripsi",value:r.deskripsi,onChange:t=>m("deskripsi",t.target.value)}),a.deskripsi&&e.createElement(n,{fontSize:"xs"},a.deskripsi)),e.createElement(i,{mb:3,isInvalid:a.harga},e.createElement(o,{htmlFor:"harga",fontSize:"sm"},"Harga",e.createElement(s,{display:"inline",color:"red"},"*")),e.createElement(c,{type:"number",id:"harga",value:r.harga,onChange:t=>m("harga",t.target.value)}),a.harga&&e.createElement(n,{fontSize:"xs"},a.harga))),e.createElement(H,null,e.createElement(d,{type:"submit",colorScheme:"blue",isLoading:u,loadingText:"Simpan"},e.createElement(p,{as:v,mr:2}),"Simpan"),e.createElement(d,{as:k,href:"/destination/"+l,colorScheme:"gray",ml:3},e.createElement(p,{as:y,mr:2}),"Kembali")))))};export{ae as default};
