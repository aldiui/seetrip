import{q as h,W as g,R as e,Y as S,I as o,a as C}from"./app-DCVUtIqw.js";import{A as v}from"./AdminLayout -CAXSqyn7.js";import{F as y}from"./BookmarkIcon-mAFX88TI.js";import{F as x}from"./ArrowLeftIcon-CAl_QhjE.js";import{C as T,a as I}from"./chunk-YQO7BFFX-DXVB8yjZ.js";import{C as z}from"./chunk-2EW3JUUD-D0SPJ-En.js";import{H as D}from"./chunk-7OLJDQMT-Cv4BbNAv.js";import{F as n}from"./chunk-56K2BSAJ-3Mdre515.js";import{F as l,a as s}from"./chunk-H46NUPBZ-CO9d4yfX.js";import{T as p}from"./chunk-2OOHT3W5-BlFa8Fv_.js";import{I as R}from"./chunk-6CVSDS6C-DslWv91l.js";import{S as k}from"./chunk-3RSXBRAN-aOto4z4c.js";import{C as w}from"./chunk-BDSTZZXD-ldmz08Vi.js";import{B as c}from"./chunk-UVUR7MCU-87Ltadkx.js";import"./chunk-KRPLQIP4-Gdrq63o7.js";import"./chunk-PULVB27S-DupAKUVl.js";import"./ChevronDownIcon-4oo1iQ45.js";import"./chunk-7JBTTEVG-AZ8puJBW.js";import"./chunk-3ASUQ6PA-Cs92Ss6H.js";import"./chunk-5MKCW436-CnR9LSu-.js";import"./chunk-G72KV6MB-ClQoAU4d.js";import"./chunk-V7PAE35Z-BEXAZOsh.js";import"./chunk-SPIKMR6I-DpZJN6Nr.js";import"./chunk-NABYTFTG-DSNTBKXV.js";import"./tslib.es6-DjSP9Sqm.js";import"./MapPinIcon-DvMUsgFM.js";import"./chunk-6RSEZNRH-DWTnfycA.js";const ie=({auth:d,sessions:f})=>{const{url:E}=h(),r=new URLSearchParams(E.split("?")[1]).get("kode"),{data:m,setData:i,post:u,processing:F,errors:t}=g({tipe:"",nama:"",destination_id:r}),b=a=>{a.preventDefault(),u("/admin/destination-facility")};return e.createElement(v,{auth:d,sessions:f},e.createElement(S,{title:"Tambah Fasilitas Destinasi"}),e.createElement(T,{maxW:"xl",w:"full",p:2,h:"auto"},e.createElement(z,{pb:0},e.createElement(D,{size:"md",fontWeight:"bold"},"Tambah Fasilitas Destinasi")),e.createElement("form",{onSubmit:b},e.createElement(I,{pb:0},e.createElement(n,{mb:3,isInvalid:t.nama},e.createElement(l,{htmlFor:"nama",fontSize:"sm"},"Nama",e.createElement(p,{display:"inline",color:"red"},"*")),e.createElement(R,{type:"text",id:"nama",value:m.nama,onChange:a=>i("nama",a.target.value)}),t.nama&&e.createElement(s,{fontSize:"xs"},t.nama)),e.createElement(n,{mb:3,isInvalid:t.tipe},e.createElement(l,{htmlFor:"tipe",fontSize:"sm"},"Tipe",e.createElement(p,{display:"inline",color:"red"},"*")),e.createElement(k,{type:"text",id:"tipe",value:m.tipe,onChange:a=>i("tipe",a.target.value)},e.createElement("option",{value:""},"Pilih Tipe"),e.createElement("option",{value:"Fasilitas"},"Fasilitas"),e.createElement("option",{value:"Akomodasi"},"Akomodasi")),t.tipe&&e.createElement(s,{fontSize:"xs"},t.tipe))),e.createElement(w,null,e.createElement(c,{type:"submit",colorScheme:"blue",isLoading:F,loadingText:"Simpan"},e.createElement(o,{as:y,mr:2}),"Simpan"),e.createElement(c,{as:C,href:"/admin/destination/"+r,colorScheme:"gray",ml:3},e.createElement(o,{as:x,mr:2}),"Kembali")))))};export{ie as default};
