import{q as v,W as S,R as e,Y as b,I as c,a as F}from"./app-CRUbJu4Z.js";import{A as y}from"./AdminLayout -CAyLJs5J.js";import{F as C}from"./BookmarkIcon-CC9ky48A.js";import{F as x}from"./ArrowLeftIcon-pEpefhP8.js";import{C as z,a as I}from"./chunk-YQO7BFFX-BCfAnfk7.js";import{C as T}from"./chunk-2EW3JUUD-BRnsAHIO.js";import{H as _}from"./chunk-7OLJDQMT-CSaLqb1Z.js";import{F as n}from"./chunk-56K2BSAJ-B_XMpqjX.js";import{F as i,a as m}from"./chunk-H46NUPBZ-B6kUYA5q.js";import{T as l}from"./chunk-2OOHT3W5-DdxI42KR.js";import{I as s}from"./chunk-6CVSDS6C-D73OriWR.js";import{T as D}from"./chunk-4IH3O7BJ-CBurIdAl.js";import{S as R}from"./chunk-3RSXBRAN-CknXJn70.js";import{C as w}from"./chunk-BDSTZZXD-UGsc0v3H.js";import{B as p}from"./chunk-UVUR7MCU-eTSeZI0_.js";import"./chunk-KRPLQIP4-DNxTn6Yp.js";import"./chunk-PULVB27S-B9ln4okT.js";import"./ChevronDownIcon-Aa-CVtjH.js";import"./chunk-7JBTTEVG-ClGgynL9.js";import"./chunk-3ASUQ6PA-BN5Hmi5c.js";import"./chunk-5MKCW436-D1mH52k9.js";import"./chunk-G72KV6MB-CD-aFYuC.js";import"./chunk-V7PAE35Z-bcQCC_dJ.js";import"./chunk-SPIKMR6I-Dljxbnrn.js";import"./chunk-NABYTFTG-D5F2i9a3.js";import"./tslib.es6-DjSP9Sqm.js";import"./MapPinIcon-D2415P5-.js";import"./UserCircleIcon-COBS2074.js";import"./chunk-6RSEZNRH-CW-Q5ZHl.js";const le=({auth:u,sessions:k})=>{const{url:E}=v(),d=new URLSearchParams(E.split("?")[1]).get("kode"),{data:r,setData:o,post:g,processing:f,errors:t}=S({kode:"",deskripsi:"",diskon:"",kuota:"",tanggal_kadaluarsa:"",status:"",destination_id:d}),h=a=>{a.preventDefault(),g("/admin/destination-voucher")};return e.createElement(y,{auth:u,sessions:k},e.createElement(b,{title:"Tambah Voucher Destinasi"}),e.createElement(z,{maxW:"xl",w:"full",p:2,h:"auto"},e.createElement(T,{pb:0},e.createElement(_,{size:"md",fontWeight:"bold"},"Tambah Voucher Destinasi")),e.createElement("form",{onSubmit:h},e.createElement(I,{pb:0},e.createElement(n,{mb:3,isInvalid:t.kode},e.createElement(i,{htmlFor:"kode",fontSize:"sm"},"Kode",e.createElement(l,{display:"inline",color:"red"},"*")),e.createElement(s,{type:"text",id:"kode",value:r.kode,onChange:a=>o("kode",a.target.value)}),t.kode&&e.createElement(m,{fontSize:"xs"},t.kode)),e.createElement(n,{mb:3,isInvalid:t.deskripsi},e.createElement(i,{htmlFor:"deskripsi",fontSize:"sm"},"Deskripsi",e.createElement(l,{display:"inline",color:"red"},"*")),e.createElement(D,{type:"text",id:"deskripsi",value:r.deskripsi,onChange:a=>o("deskripsi",a.target.value)}),t.deskripsi&&e.createElement(m,{fontSize:"xs"},t.deskripsi)),e.createElement(n,{mb:3,isInvalid:t.diskon},e.createElement(i,{htmlFor:"diskon",fontSize:"sm"},"Diskon",e.createElement(l,{display:"inline",color:"red"},"*")),e.createElement(s,{type:"number",id:"diskon",value:r.diskon,onChange:a=>o("diskon",a.target.value)}),t.diskon&&e.createElement(m,{fontSize:"xs"},t.diskon)),e.createElement(n,{mb:3,isInvalid:t.kuota},e.createElement(i,{htmlFor:"kuota",fontSize:"sm"},"Kuota",e.createElement(l,{display:"inline",color:"red"},"*")),e.createElement(s,{type:"number",id:"kuota",value:r.kuota,onChange:a=>o("kuota",a.target.value)}),t.kuota&&e.createElement(m,{fontSize:"xs"},t.kuota)),e.createElement(n,{mb:3,isInvalid:t.tanggal_kadaluarsa},e.createElement(i,{htmlFor:"tanggal_kadaluarsa",fontSize:"sm"},"Tanggal Kadaluarsa",e.createElement(l,{display:"inline",color:"red"},"*")),e.createElement(s,{type:"date",id:"tanggal_kadaluarsa",value:r.tanggal_kadaluarsa,onChange:a=>o("tanggal_kadaluarsa",a.target.value)}),t.tanggal_kadaluarsa&&e.createElement(m,{fontSize:"xs"},t.tanggal_kadaluarsa)),e.createElement(n,{mb:3,isInvalid:t.status},e.createElement(i,{htmlFor:"status",fontSize:"sm"},"Status",e.createElement(l,{display:"inline",color:"red"},"*")),e.createElement(R,{id:"status",value:r.status,onChange:a=>o("status",a.target.value)},e.createElement("option",{value:""},"Pilih Status"),e.createElement("option",{value:"1"},"Aktif"),e.createElement("option",{value:"0"},"Tidak Aktif")),t.status&&e.createElement(m,{fontSize:"xs"},t.status))),e.createElement(w,null,e.createElement(p,{type:"submit",colorScheme:"blue",isLoading:f,loadingText:"Simpan"},e.createElement(c,{as:C,mr:2}),"Simpan"),e.createElement(p,{as:F,href:"/admin/destination/"+d,colorScheme:"gray",ml:3},e.createElement(c,{as:x,mr:2}),"Kembali")))))};export{le as default};