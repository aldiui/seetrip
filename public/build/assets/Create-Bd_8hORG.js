import{q as h,W as g,R as e,Y as S,I as o,a as v}from"./app-ejYvf9I6.js";import{A as y}from"./AdminLayout -DsdHsFTC.js";import{F as C}from"./BookmarkIcon-B0US5lbf.js";import{F as x}from"./ArrowLeftIcon-Ce2Pljhj.js";import{C as T,a as I,b as z}from"./chunk-YQO7BFFX-BKgxr97c.js";import{H as D}from"./chunk-7OLJDQMT-BJ9HDscd.js";import{F as n,I as R}from"./chunk-6CVSDS6C-Bo-pWQ03.js";import{F as l,a as s,C as k}from"./chunk-H46NUPBZ-DmgQdsBx.js";import{T as p}from"./chunk-2OOHT3W5-DFNUYQAk.js";import{S as w}from"./chunk-3RSXBRAN-Cm2CTRoQ.js";import{B as c}from"./chunk-UVUR7MCU-BjWsXQ7b.js";import"./chunk-KRPLQIP4-D64IDwbM.js";import"./chunk-PULVB27S-DDjE-Xuc.js";import"./ChevronDownIcon-DZRVX3ZZ.js";import"./chunk-7JBTTEVG-Dbobh0N6.js";import"./chunk-5MKCW436-DEJ5ysAq.js";import"./chunk-G72KV6MB-zvdQHsNT.js";import"./chunk-V7PAE35Z-Bco8DSa1.js";import"./chunk-SPIKMR6I-DRedfjXK.js";import"./chunk-NABYTFTG-C-PE8_xX.js";import"./tslib.es6-DjSP9Sqm.js";const Z=({auth:d,sessions:E})=>{const{url:f}=h(),r=new URLSearchParams(f.split("?")[1]).get("kode"),{data:i,setData:m,post:u,processing:F,errors:t}=g({tipe:"",nama:"",destination_id:r}),b=a=>{a.preventDefault(),u("/admin/destination-facility")};return e.createElement(y,{auth:d,sessions:E},e.createElement(S,{title:"Tambah Fasilitas Destinasi"}),e.createElement(T,{maxW:"xl",w:"full",p:2,h:"auto"},e.createElement(I,{pb:0},e.createElement(D,{size:"md",fontWeight:"bold"},"Tambah Fasilitas Destinasi")),e.createElement("form",{onSubmit:b},e.createElement(z,{pb:0},e.createElement(n,{mb:3,isInvalid:t.nama},e.createElement(l,{htmlFor:"nama",fontSize:"sm"},"Nama",e.createElement(p,{display:"inline",color:"red"},"*")),e.createElement(R,{type:"text",id:"nama",value:i.nama,onChange:a=>m("nama",a.target.value)}),t.nama&&e.createElement(s,{fontSize:"xs"},t.nama)),e.createElement(n,{mb:3,isInvalid:t.tipe},e.createElement(l,{htmlFor:"tipe",fontSize:"sm"},"Tipe",e.createElement(p,{display:"inline",color:"red"},"*")),e.createElement(w,{type:"text",id:"tipe",value:i.tipe,onChange:a=>m("tipe",a.target.value)},e.createElement("option",{value:""},"Pilih Tipe"),e.createElement("option",{value:"Fasilitas"},"Fasilitas"),e.createElement("option",{value:"Akomodasi"},"Akomodasi")),t.tipe&&e.createElement(s,{fontSize:"xs"},t.tipe))),e.createElement(k,null,e.createElement(c,{type:"submit",colorScheme:"blue",isLoading:F,loadingText:"Simpan"},e.createElement(o,{as:C,mr:2}),"Simpan"),e.createElement(c,{as:v,href:"/admin/destination/"+r,colorScheme:"gray",ml:3},e.createElement(o,{as:x,mr:2}),"Kembali")))))};export{Z as default};
