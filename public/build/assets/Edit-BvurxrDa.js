import{W as B,R as e,Y as C,I as u,a as I}from"./app-DPnmQNMl.js";import{A as S}from"./AdminLayout -B5LiPOup.js";import{F as y}from"./BookmarkIcon-B-jtLz3k.js";import{F}from"./ArrowLeftIcon-DUbXo-N_.js";import{C as h,a as x}from"./chunk-YQO7BFFX-DjfJuZn_.js";import{C as z}from"./chunk-2EW3JUUD-BRdUR3w7.js";import{H as N}from"./chunk-7OLJDQMT-CJSwRjv4.js";import{F as l,I as c}from"./chunk-6CVSDS6C-ChT1bA7_.js";import{F as o,a as i,C as O}from"./chunk-H46NUPBZ-M_mnBLCq.js";import{T as s}from"./chunk-2OOHT3W5-ChCwLuug.js";import{S as R}from"./chunk-3RSXBRAN-BFlJOCeO.js";import{B as p}from"./chunk-UVUR7MCU-CmIpkDyX.js";import"./chunk-KRPLQIP4-CwPIyTBq.js";import"./chunk-PULVB27S-BmB31oiW.js";import"./MapPinIcon-CIgvDU8k.js";import"./chunk-7JBTTEVG-CIlxP4pX.js";import"./chunk-3ASUQ6PA-DrJ3xbiw.js";import"./chunk-5MKCW436-BrFvw1lA.js";import"./chunk-G72KV6MB-CFzf8KEx.js";import"./chunk-V7PAE35Z-ArVLID_a.js";import"./chunk-SPIKMR6I-D8fXho7g.js";import"./chunk-NABYTFTG-CWJEsaVk.js";import"./tslib.es6-DjSP9Sqm.js";const ne=({auth:b,sessions:d,wallet:t})=>{const{data:r,setData:m,put:k,processing:E,errors:n}=B({nama_bank:t.nama_bank,nama_akun:t.nama_akun,nomor_rekening:t.nomor_rekening}),_=a=>{a.preventDefault(),k(`/wallet/${t.uuid}`)},f=[{value:"BCA",label:"BCA"},{value:"BNI",label:"BNI"},{value:"BRI",label:"BRI"},{value:"Mandiri",label:"Mandiri"},{value:"CIMB",label:"CIMB"},{value:"Niaga",label:"Niaga"},{value:"Danamon",label:"Danamon"},{value:"Permata",label:"Permata"},{value:"BSI",label:"BSI"}],v=[{value:"Dana",label:"Dana"},{value:"OVO",label:"OVO"},{value:"Go-Pay",label:"Go-Pay"}],g=[...f,...v];return e.createElement(S,{auth:b,sessions:d},e.createElement(C,{title:"Edit Wallet"}),e.createElement(h,{maxW:"xl",w:"full",p:2,h:"auto"},e.createElement(z,{pb:0},e.createElement(N,{size:"md",fontWeight:"bold"},"Edit Wallet")),e.createElement("form",{onSubmit:_},e.createElement(x,{pb:0},e.createElement(l,{mb:3,isInvalid:n.nama_bank},e.createElement(o,{htmlFor:"nama_bank",fontSize:"sm"},"Nama Bank",e.createElement(s,{display:"inline",color:"red"},"*")),e.createElement(R,{type:"text",id:"nama_bank",value:r.nama_bank,onChange:a=>m("nama_bank",a.target.value)},e.createElement("option",{value:""},"Pilih Bank"),g.map(a=>e.createElement("option",{key:a.value,value:a.value},a.label))),n.nama_bank&&e.createElement(i,{fontSize:"xs"},n.nama_bank)),e.createElement(l,{mb:3,isInvalid:n.nama_akun},e.createElement(o,{htmlFor:"nama_akun",fontSize:"sm"},"Nama Akun",e.createElement(s,{display:"inline",color:"red"},"*")),e.createElement(c,{type:"text",id:"nama_akun",value:r.nama_akun,onChange:a=>m("nama_akun",a.target.value)}),n.nama_akun&&e.createElement(i,{fontSize:"xs"},n.nama_akun)),e.createElement(l,{mb:3,isInvalid:n.nomor_rekening},e.createElement(o,{htmlFor:"nomor_rekening",fontSize:"sm"},"Nomor Rekening",e.createElement(s,{display:"inline",color:"red"},"*")),e.createElement(c,{type:"number",id:"nomor_rekening",value:r.nomor_rekening,onChange:a=>m("nomor_rekening",a.target.value)}),n.nomor_rekening&&e.createElement(i,{fontSize:"xs"},n.nomor_rekening))),e.createElement(O,null,e.createElement(p,{type:"submit",colorScheme:"blue",isLoading:E,loadingText:"Simpan"},e.createElement(u,{as:y,mr:2}),"Simpan"),e.createElement(p,{as:I,href:"/wallet",colorScheme:"gray",ml:3},e.createElement(u,{as:F,mr:2}),"Kembali")))))};export{ne as default};
