import{W as _,R as e,Y as C,I as s,a as B}from"./app-CRUbJu4Z.js";import{A as I}from"./AdminLayout -CAyLJs5J.js";import{F as S}from"./BookmarkIcon-CC9ky48A.js";import{F as h}from"./ArrowLeftIcon-pEpefhP8.js";import{C as y,a as F}from"./chunk-YQO7BFFX-BCfAnfk7.js";import{C as x}from"./chunk-2EW3JUUD-BRnsAHIO.js";import{H as z}from"./chunk-7OLJDQMT-CSaLqb1Z.js";import{F as m}from"./chunk-56K2BSAJ-B_XMpqjX.js";import{F as l,a as o}from"./chunk-H46NUPBZ-B6kUYA5q.js";import{T as i}from"./chunk-2OOHT3W5-DdxI42KR.js";import{S as N}from"./chunk-3RSXBRAN-CknXJn70.js";import{I as p}from"./chunk-6CVSDS6C-D73OriWR.js";import{C as O}from"./chunk-BDSTZZXD-UGsc0v3H.js";import{B as c}from"./chunk-UVUR7MCU-eTSeZI0_.js";import"./chunk-KRPLQIP4-DNxTn6Yp.js";import"./chunk-PULVB27S-B9ln4okT.js";import"./ChevronDownIcon-Aa-CVtjH.js";import"./chunk-7JBTTEVG-ClGgynL9.js";import"./chunk-3ASUQ6PA-BN5Hmi5c.js";import"./chunk-5MKCW436-D1mH52k9.js";import"./chunk-G72KV6MB-CD-aFYuC.js";import"./chunk-V7PAE35Z-bcQCC_dJ.js";import"./chunk-SPIKMR6I-Dljxbnrn.js";import"./chunk-NABYTFTG-D5F2i9a3.js";import"./tslib.es6-DjSP9Sqm.js";import"./MapPinIcon-D2415P5-.js";import"./UserCircleIcon-COBS2074.js";import"./chunk-6RSEZNRH-CW-Q5ZHl.js";const le=({auth:u,sessions:b})=>{const{data:n,setData:r,post:d,processing:k,errors:t}=_({nama_bank:"",nama_akun:"",nomor_rekening:""}),E=a=>{a.preventDefault(),d("/admin/wallet")},f=[{value:"BCA",label:"BCA"},{value:"BNI",label:"BNI"},{value:"BRI",label:"BRI"},{value:"Mandiri",label:"Mandiri"},{value:"CIMB",label:"CIMB"},{value:"Niaga",label:"Niaga"},{value:"Danamon",label:"Danamon"},{value:"Permata",label:"Permata"},{value:"BSI",label:"BSI"}],v=[{value:"Dana",label:"Dana"},{value:"OVO",label:"OVO"},{value:"Go-Pay",label:"Go-Pay"}],g=[...f,...v];return e.createElement(I,{auth:u,sessions:b},e.createElement(C,{title:"Tambah Wallet"}),e.createElement(y,{maxW:"xl",w:"full",p:2,h:"auto"},e.createElement(x,{pb:0},e.createElement(z,{size:"md",fontWeight:"bold"},"Tambah Wallet")),e.createElement("form",{onSubmit:E},e.createElement(F,{pb:0},e.createElement(m,{mb:3,isInvalid:t.nama_bank},e.createElement(l,{htmlFor:"nama_bank",fontSize:"sm"},"Nama Bank",e.createElement(i,{display:"inline",color:"red"},"*")),e.createElement(N,{type:"text",id:"nama_bank",value:n.nama_bank,onChange:a=>r("nama_bank",a.target.value)},e.createElement("option",{value:""},"Pilih Bank"),g.map(a=>e.createElement("option",{key:a.value,value:a.value},a.label))),t.nama_bank&&e.createElement(o,{fontSize:"xs"},t.nama_bank)),e.createElement(m,{mb:3,isInvalid:t.nama_akun},e.createElement(l,{htmlFor:"nama_akun",fontSize:"sm"},"Nama Akun",e.createElement(i,{display:"inline",color:"red"},"*")),e.createElement(p,{type:"text",id:"nama_akun",value:n.nama_akun,onChange:a=>r("nama_akun",a.target.value)}),t.nama_akun&&e.createElement(o,{fontSize:"xs"},t.nama_akun)),e.createElement(m,{mb:3,isInvalid:t.nomor_rekening},e.createElement(l,{htmlFor:"nomor_rekening",fontSize:"sm"},"Nomor Rekening",e.createElement(i,{display:"inline",color:"red"},"*")),e.createElement(p,{type:"number",id:"nomor_rekening",value:n.nomor_rekening,onChange:a=>r("nomor_rekening",a.target.value)}),t.nomor_rekening&&e.createElement(o,{fontSize:"xs"},t.nomor_rekening))),e.createElement(O,null,e.createElement(c,{type:"submit",colorScheme:"blue",isLoading:k,loadingText:"Simpan"},e.createElement(s,{as:S,mr:2}),"Simpan"),e.createElement(c,{as:B,href:"/admin/wallet",colorScheme:"gray",ml:3},e.createElement(s,{as:h,mr:2}),"Kembali")))))};export{le as default};
