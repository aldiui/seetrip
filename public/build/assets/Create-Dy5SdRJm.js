import{q as v,W as S,R as e,Y as b,I as c,a as F}from"./app-DPnmQNMl.js";import{A as y}from"./AdminLayout -B5LiPOup.js";import{F as C}from"./BookmarkIcon-B-jtLz3k.js";import{F as x}from"./ArrowLeftIcon-DUbXo-N_.js";import{C as z,a as I}from"./chunk-YQO7BFFX-DjfJuZn_.js";import{C as T}from"./chunk-2EW3JUUD-BRdUR3w7.js";import{H as _}from"./chunk-7OLJDQMT-CJSwRjv4.js";import{F as n,I as m}from"./chunk-6CVSDS6C-ChT1bA7_.js";import{F as i,a as l,C as D}from"./chunk-H46NUPBZ-M_mnBLCq.js";import{T as s}from"./chunk-2OOHT3W5-ChCwLuug.js";import{T as R}from"./chunk-4IH3O7BJ-CoCotj3E.js";import{S as w}from"./chunk-3RSXBRAN-BFlJOCeO.js";import{B as u}from"./chunk-UVUR7MCU-CmIpkDyX.js";import"./chunk-KRPLQIP4-CwPIyTBq.js";import"./chunk-PULVB27S-BmB31oiW.js";import"./MapPinIcon-CIgvDU8k.js";import"./chunk-7JBTTEVG-CIlxP4pX.js";import"./chunk-3ASUQ6PA-DrJ3xbiw.js";import"./chunk-5MKCW436-BrFvw1lA.js";import"./chunk-G72KV6MB-CFzf8KEx.js";import"./chunk-V7PAE35Z-ArVLID_a.js";import"./chunk-SPIKMR6I-D8fXho7g.js";import"./chunk-NABYTFTG-CWJEsaVk.js";import"./tslib.es6-DjSP9Sqm.js";const re=({auth:p,sessions:k})=>{const{url:E}=v(),d=new URLSearchParams(E.split("?")[1]).get("kode"),{data:r,setData:o,post:g,processing:f,errors:t}=S({kode:"",deskripsi:"",diskon:"",kuota:"",tanggal_kadaluarsa:"",status:"",destination_id:d}),h=a=>{a.preventDefault(),g("/destination-voucher")};return e.createElement(y,{auth:p,sessions:k},e.createElement(b,{title:"Tambah Voucher Destinasi"}),e.createElement(z,{maxW:"xl",w:"full",p:2,h:"auto"},e.createElement(T,{pb:0},e.createElement(_,{size:"md",fontWeight:"bold"},"Tambah Voucher Destinasi")),e.createElement("form",{onSubmit:h},e.createElement(I,{pb:0},e.createElement(n,{mb:3,isInvalid:t.kode},e.createElement(i,{htmlFor:"kode",fontSize:"sm"},"Kode",e.createElement(s,{display:"inline",color:"red"},"*")),e.createElement(m,{type:"text",id:"kode",value:r.kode,onChange:a=>o("kode",a.target.value)}),t.kode&&e.createElement(l,{fontSize:"xs"},t.kode)),e.createElement(n,{mb:3,isInvalid:t.deskripsi},e.createElement(i,{htmlFor:"deskripsi",fontSize:"sm"},"Deskripsi",e.createElement(s,{display:"inline",color:"red"},"*")),e.createElement(R,{type:"text",id:"deskripsi",value:r.deskripsi,onChange:a=>o("deskripsi",a.target.value)}),t.deskripsi&&e.createElement(l,{fontSize:"xs"},t.deskripsi)),e.createElement(n,{mb:3,isInvalid:t.diskon},e.createElement(i,{htmlFor:"diskon",fontSize:"sm"},"Diskon",e.createElement(s,{display:"inline",color:"red"},"*")),e.createElement(m,{type:"number",id:"diskon",value:r.diskon,onChange:a=>o("diskon",a.target.value)}),t.diskon&&e.createElement(l,{fontSize:"xs"},t.diskon)),e.createElement(n,{mb:3,isInvalid:t.kuota},e.createElement(i,{htmlFor:"kuota",fontSize:"sm"},"Kuota",e.createElement(s,{display:"inline",color:"red"},"*")),e.createElement(m,{type:"number",id:"kuota",value:r.kuota,onChange:a=>o("kuota",a.target.value)}),t.kuota&&e.createElement(l,{fontSize:"xs"},t.kuota)),e.createElement(n,{mb:3,isInvalid:t.tanggal_kadaluarsa},e.createElement(i,{htmlFor:"tanggal_kadaluarsa",fontSize:"sm"},"Tanggal Kadaluarsa",e.createElement(s,{display:"inline",color:"red"},"*")),e.createElement(m,{type:"date",id:"tanggal_kadaluarsa",value:r.tanggal_kadaluarsa,onChange:a=>o("tanggal_kadaluarsa",a.target.value)}),t.tanggal_kadaluarsa&&e.createElement(l,{fontSize:"xs"},t.tanggal_kadaluarsa)),e.createElement(n,{mb:3,isInvalid:t.status},e.createElement(i,{htmlFor:"status",fontSize:"sm"},"Status",e.createElement(s,{display:"inline",color:"red"},"*")),e.createElement(w,{id:"status",value:r.status,onChange:a=>o("status",a.target.value)},e.createElement("option",{value:""},"Pilih Status"),e.createElement("option",{value:"1"},"Aktif"),e.createElement("option",{value:"0"},"Tidak Aktif")),t.status&&e.createElement(l,{fontSize:"xs"},t.status))),e.createElement(D,null,e.createElement(u,{type:"submit",colorScheme:"blue",isLoading:f,loadingText:"Simpan"},e.createElement(c,{as:C,mr:2}),"Simpan"),e.createElement(u,{as:F,href:"/destination/"+d,colorScheme:"gray",ml:3},e.createElement(c,{as:x,mr:2}),"Kembali")))))};export{re as default};
