import{q as F,W as b,j as i,Y as g,I as e,a as S}from"./app-JHr847d-.js";import{A as C}from"./AdminLayout -Bc3andDT.js";import{F as v}from"./BookmarkIcon-Bmpjnh4y.js";import{F as y}from"./ArrowLeftIcon-BQViQJlt.js";import{C as T,a as I}from"./chunk-YQO7BFFX-DSZLBsX_.js";import{C as z}from"./chunk-2EW3JUUD-BnP4_yfU.js";import{H as D}from"./chunk-7OLJDQMT-AfpAcD5m.js";import{F as m}from"./chunk-56K2BSAJ-B5oYsPph.js";import{F as n,a as l}from"./chunk-H46NUPBZ-BOPC4Oho.js";import{T as p}from"./chunk-2OOHT3W5-CSJh4K3n.js";import{I as k}from"./chunk-6CVSDS6C-DYEn1HBN.js";import{S as w}from"./chunk-3RSXBRAN-DMxxMGji.js";import{C as A}from"./chunk-BDSTZZXD-CYaIS77w.js";import{B as d}from"./chunk-UVUR7MCU-xK3lE66g.js";import"./chunk-KRPLQIP4-D2gzZcl_.js";import"./chunk-PULVB27S-H6C7mPE7.js";import"./ChevronDownIcon-vE-s4u4y.js";import"./chunk-7JBTTEVG-Dz6D23Ef.js";import"./chunk-3ASUQ6PA-DZHSwCkz.js";import"./chunk-5MKCW436-CDR3RVuy.js";import"./chunk-G72KV6MB-CldgvVEv.js";import"./chunk-V7PAE35Z-D4m-ilcb.js";import"./chunk-SPIKMR6I-BlSDUyza.js";import"./chunk-NABYTFTG-B-MaHP8x.js";import"./tslib.es6-DjSP9Sqm.js";import"./MapPinIcon-CNmZlcmu.js";import"./chunk-6RSEZNRH-Bc2GE4v1.js";const oi=({auth:c,sessions:x})=>{const{url:h}=F(),t=new URLSearchParams(h.split("?")[1]).get("kode"),{data:s,setData:o,post:f,processing:j,errors:a}=b({tipe:"",nama:"",destination_id:t}),u=r=>{r.preventDefault(),f("/admin/destination-facility")};return i.jsxs(C,{auth:c,sessions:x,children:[i.jsx(g,{title:"Tambah Fasilitas Destinasi"}),i.jsxs(T,{maxW:"xl",w:"full",p:2,h:"auto",children:[i.jsx(z,{pb:0,children:i.jsx(D,{size:"md",fontWeight:"bold",children:"Tambah Fasilitas Destinasi"})}),i.jsxs("form",{onSubmit:u,children:[i.jsxs(I,{pb:0,children:[i.jsxs(m,{mb:3,isInvalid:a.nama,children:[i.jsxs(n,{htmlFor:"nama",fontSize:"sm",children:["Nama",i.jsx(p,{display:"inline",color:"red",children:"*"})]}),i.jsx(k,{type:"text",id:"nama",value:s.nama,onChange:r=>o("nama",r.target.value)}),a.nama&&i.jsx(l,{fontSize:"xs",children:a.nama})]}),i.jsxs(m,{mb:3,isInvalid:a.tipe,children:[i.jsxs(n,{htmlFor:"tipe",fontSize:"sm",children:["Tipe",i.jsx(p,{display:"inline",color:"red",children:"*"})]}),i.jsxs(w,{type:"text",id:"tipe",value:s.tipe,onChange:r=>o("tipe",r.target.value),children:[i.jsx("option",{value:"",children:"Pilih Tipe"}),i.jsx("option",{value:"Fasilitas",children:"Fasilitas"}),i.jsx("option",{value:"Akomodasi",children:"Akomodasi"})]}),a.tipe&&i.jsx(l,{fontSize:"xs",children:a.tipe})]})]}),i.jsxs(A,{children:[i.jsxs(d,{type:"submit",colorScheme:"blue",isLoading:j,loadingText:"Simpan",children:[i.jsx(e,{as:v,mr:2}),"Simpan"]}),i.jsxs(d,{as:S,href:"/admin/destination/"+t,colorScheme:"gray",ml:3,children:[i.jsx(e,{as:y,mr:2}),"Kembali"]})]})]})]})]})};export{oi as default};