import{W as b,R as e,Y as F,I as p,a as x}from"./app-CRUbJu4Z.js";import{A as C}from"./AdminLayout -CAyLJs5J.js";import{F as S}from"./BookmarkIcon-CC9ky48A.js";import{F as k}from"./ArrowLeftIcon-pEpefhP8.js";import{C as v,a as y}from"./chunk-YQO7BFFX-BCfAnfk7.js";import{C as z}from"./chunk-2EW3JUUD-BRnsAHIO.js";import{H as I}from"./chunk-7OLJDQMT-CSaLqb1Z.js";import{F as o}from"./chunk-56K2BSAJ-B_XMpqjX.js";import{F as n,a as s}from"./chunk-H46NUPBZ-B6kUYA5q.js";import{T as l}from"./chunk-2OOHT3W5-DdxI42KR.js";import{I as d}from"./chunk-6CVSDS6C-D73OriWR.js";import{T as D}from"./chunk-4IH3O7BJ-CBurIdAl.js";import{C as H}from"./chunk-BDSTZZXD-UGsc0v3H.js";import{B as c}from"./chunk-UVUR7MCU-eTSeZI0_.js";import"./chunk-KRPLQIP4-DNxTn6Yp.js";import"./chunk-PULVB27S-B9ln4okT.js";import"./ChevronDownIcon-Aa-CVtjH.js";import"./chunk-7JBTTEVG-ClGgynL9.js";import"./chunk-3ASUQ6PA-BN5Hmi5c.js";import"./chunk-5MKCW436-D1mH52k9.js";import"./chunk-G72KV6MB-CD-aFYuC.js";import"./chunk-V7PAE35Z-bcQCC_dJ.js";import"./chunk-SPIKMR6I-Dljxbnrn.js";import"./chunk-NABYTFTG-D5F2i9a3.js";import"./tslib.es6-DjSP9Sqm.js";import"./MapPinIcon-D2415P5-.js";import"./UserCircleIcon-COBS2074.js";import"./chunk-6RSEZNRH-CW-Q5ZHl.js";const me=({auth:E,sessions:f,destinationPrice:r})=>{const{data:m,setData:i,put:g,processing:u,errors:a}=b({nama:r.nama,deskripsi:r.deskripsi,harga:r.harga}),h=t=>{t.preventDefault(),g(`/admin/destination-price/${r.uuid}`)};return e.createElement(C,{auth:E,sessions:f},e.createElement(F,{title:"Edit Harga Destinasi"}),e.createElement(v,{maxW:"xl",w:"full",p:2,h:"auto"},e.createElement(z,{pb:0},e.createElement(I,{size:"md",fontWeight:"bold"},"Edit Harga Destinasi")),e.createElement("form",{onSubmit:h},e.createElement(y,{pb:0},e.createElement(o,{mb:3,isInvalid:a.nama},e.createElement(n,{htmlFor:"nama",fontSize:"sm"},"Nama",e.createElement(l,{display:"inline",color:"red"},"*")),e.createElement(d,{type:"text",id:"nama",value:m.nama,onChange:t=>i("nama",t.target.value)}),a.nama&&e.createElement(s,{fontSize:"xs"},a.nama)),e.createElement(o,{mb:3,isInvalid:a.deskripsi},e.createElement(n,{htmlFor:"deskripsi",fontSize:"sm"},"Deskripsi",e.createElement(l,{display:"inline",color:"red"},"*")),e.createElement(D,{type:"text",id:"deskripsi",value:m.deskripsi,onChange:t=>i("deskripsi",t.target.value)}),a.deskripsi&&e.createElement(s,{fontSize:"xs"},a.deskripsi)),e.createElement(o,{mb:3,isInvalid:a.harga},e.createElement(n,{htmlFor:"harga",fontSize:"sm"},"Harga",e.createElement(l,{display:"inline",color:"red"},"*")),e.createElement(d,{type:"number",id:"harga",value:m.harga,onChange:t=>i("harga",t.target.value)}),a.harga&&e.createElement(s,{fontSize:"xs"},a.harga))),e.createElement(H,null,e.createElement(c,{type:"submit",colorScheme:"blue",isLoading:u,loadingText:"Simpan"},e.createElement(p,{as:S,mr:2}),"Simpan"),e.createElement(c,{as:x,href:"/admin/destination/"+r.destination_uuid,colorScheme:"gray",ml:3},e.createElement(p,{as:k,mr:2}),"Kembali")))))};export{me as default};