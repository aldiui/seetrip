import{W as B,R as e,Y as C,I as p,a as I}from"./app-CRUbJu4Z.js";import{A as S}from"./AdminLayout -CAyLJs5J.js";import{F as y}from"./BookmarkIcon-CC9ky48A.js";import{F}from"./ArrowLeftIcon-pEpefhP8.js";import{C as h,a as x}from"./chunk-YQO7BFFX-BCfAnfk7.js";import{C as z}from"./chunk-2EW3JUUD-BRnsAHIO.js";import{H as N}from"./chunk-7OLJDQMT-CSaLqb1Z.js";import{F as o}from"./chunk-56K2BSAJ-B_XMpqjX.js";import{F as l,a as i}from"./chunk-H46NUPBZ-B6kUYA5q.js";import{T as s}from"./chunk-2OOHT3W5-DdxI42KR.js";import{S as O}from"./chunk-3RSXBRAN-CknXJn70.js";import{I as u}from"./chunk-6CVSDS6C-D73OriWR.js";import{C as R}from"./chunk-BDSTZZXD-UGsc0v3H.js";import{B as c}from"./chunk-UVUR7MCU-eTSeZI0_.js";import"./chunk-KRPLQIP4-DNxTn6Yp.js";import"./chunk-PULVB27S-B9ln4okT.js";import"./ChevronDownIcon-Aa-CVtjH.js";import"./chunk-7JBTTEVG-ClGgynL9.js";import"./chunk-3ASUQ6PA-BN5Hmi5c.js";import"./chunk-5MKCW436-D1mH52k9.js";import"./chunk-G72KV6MB-CD-aFYuC.js";import"./chunk-V7PAE35Z-bcQCC_dJ.js";import"./chunk-SPIKMR6I-Dljxbnrn.js";import"./chunk-NABYTFTG-D5F2i9a3.js";import"./tslib.es6-DjSP9Sqm.js";import"./MapPinIcon-D2415P5-.js";import"./UserCircleIcon-COBS2074.js";import"./chunk-6RSEZNRH-CW-Q5ZHl.js";const le=({auth:b,sessions:d,wallet:t})=>{const{data:r,setData:m,put:k,processing:E,errors:n}=B({nama_bank:t.nama_bank,nama_akun:t.nama_akun,nomor_rekening:t.nomor_rekening}),f=a=>{a.preventDefault(),k(`/admin/wallet/${t.uuid}`)},_=[{value:"BCA",label:"BCA"},{value:"BNI",label:"BNI"},{value:"BRI",label:"BRI"},{value:"Mandiri",label:"Mandiri"},{value:"CIMB",label:"CIMB"},{value:"Niaga",label:"Niaga"},{value:"Danamon",label:"Danamon"},{value:"Permata",label:"Permata"},{value:"BSI",label:"BSI"}],v=[{value:"Dana",label:"Dana"},{value:"OVO",label:"OVO"},{value:"Go-Pay",label:"Go-Pay"}],g=[..._,...v];return e.createElement(S,{auth:b,sessions:d},e.createElement(C,{title:"Edit Wallet"}),e.createElement(h,{maxW:"xl",w:"full",p:2,h:"auto"},e.createElement(z,{pb:0},e.createElement(N,{size:"md",fontWeight:"bold"},"Edit Wallet")),e.createElement("form",{onSubmit:f},e.createElement(x,{pb:0},e.createElement(o,{mb:3,isInvalid:n.nama_bank},e.createElement(l,{htmlFor:"nama_bank",fontSize:"sm"},"Nama Bank",e.createElement(s,{display:"inline",color:"red"},"*")),e.createElement(O,{type:"text",id:"nama_bank",value:r.nama_bank,onChange:a=>m("nama_bank",a.target.value)},e.createElement("option",{value:""},"Pilih Bank"),g.map(a=>e.createElement("option",{key:a.value,value:a.value},a.label))),n.nama_bank&&e.createElement(i,{fontSize:"xs"},n.nama_bank)),e.createElement(o,{mb:3,isInvalid:n.nama_akun},e.createElement(l,{htmlFor:"nama_akun",fontSize:"sm"},"Nama Akun",e.createElement(s,{display:"inline",color:"red"},"*")),e.createElement(u,{type:"text",id:"nama_akun",value:r.nama_akun,onChange:a=>m("nama_akun",a.target.value)}),n.nama_akun&&e.createElement(i,{fontSize:"xs"},n.nama_akun)),e.createElement(o,{mb:3,isInvalid:n.nomor_rekening},e.createElement(l,{htmlFor:"nomor_rekening",fontSize:"sm"},"Nomor Rekening",e.createElement(s,{display:"inline",color:"red"},"*")),e.createElement(u,{type:"number",id:"nomor_rekening",value:r.nomor_rekening,onChange:a=>m("nomor_rekening",a.target.value)}),n.nomor_rekening&&e.createElement(i,{fontSize:"xs"},n.nomor_rekening))),e.createElement(R,null,e.createElement(c,{type:"submit",colorScheme:"blue",isLoading:E,loadingText:"Simpan"},e.createElement(p,{as:y,mr:2}),"Simpan"),e.createElement(c,{as:I,href:"/admin/wallet",colorScheme:"gray",ml:3},e.createElement(p,{as:F,mr:2}),"Kembali")))))};export{le as default};
