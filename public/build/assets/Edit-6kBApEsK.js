import{W as B,R as e,Y as I,I as c,a as S}from"./app-HBiJlnI8.js";import{A as C}from"./AppLayout-CpbgXBRc.js";import{F as y}from"./BookmarkIcon-CzmCP40L.js";import{F}from"./ArrowLeftIcon-B6U8UWXR.js";import{C as h,a as x,b as z}from"./chunk-YQO7BFFX-CLc-jOlG.js";import{H as N,T as m}from"./chunk-7OLJDQMT-B2-9I_Vq.js";import{F as o,I as u}from"./chunk-6CVSDS6C-BglDr7sb.js";import{F as i,a as s,C as O}from"./chunk-H46NUPBZ-C5KCibLe.js";import{S as R}from"./chunk-3RSXBRAN-YcKrQjz1.js";import{B as p}from"./chunk-UVUR7MCU-3OT5YZR6.js";import"./chunk-KRPLQIP4-BCZQ4Znw.js";import"./chunk-G72KV6MB-B7dcihXc.js";import"./chunk-V7PAE35Z-BAxIKRoy.js";import"./chunk-SPIKMR6I-F1cGqwRb.js";const j=({auth:b,sessions:d,wallet:t})=>{const{data:r,setData:l,put:k,processing:E,errors:n}=B({nama_bank:t.nama_bank,nama_akun:t.nama_akun,nomor_rekening:t.nomor_rekening}),_=a=>{a.preventDefault(),k(`/profile/wallet/${t.id}`)},f=[{value:"BCA",label:"BCA"},{value:"BNI",label:"BNI"},{value:"BRI",label:"BRI"},{value:"Mandiri",label:"Mandiri"},{value:"CIMB",label:"CIMB"},{value:"Niaga",label:"Niaga"},{value:"Danamon",label:"Danamon"},{value:"Permata",label:"Permata"},{value:"BSI",label:"BSI"}],v=[{value:"Dana",label:"Dana"},{value:"OVO",label:"OVO"},{value:"Go-Pay",label:"Go-Pay"}],g=[...f,...v];return e.createElement(C,{auth:b,sessions:d},e.createElement(I,{title:"Edit Wallet"}),e.createElement(h,{maxW:"xl",w:"full",p:2,h:"auto"},e.createElement(x,{pb:0},e.createElement(N,{size:"md",fontWeight:"bold"},"Edit Wallet")),e.createElement("form",{onSubmit:_},e.createElement(z,{pb:0},e.createElement(o,{mb:3,isInvalid:n.nama_bank},e.createElement(i,{htmlFor:"nama_bank",fontSize:"sm"},"Nama Bank",e.createElement(m,{display:"inline",color:"red"},"*")),e.createElement(R,{type:"text",id:"nama_bank",value:r.nama_bank,onChange:a=>l("nama_bank",a.target.value)},e.createElement("option",{value:""},"Pilih Bank"),g.map(a=>e.createElement("option",{key:a.value,value:a.value},a.label))),n.nama_bank&&e.createElement(s,{fontSize:"xs"},n.nama_bank)),e.createElement(o,{mb:3,isInvalid:n.nama_akun},e.createElement(i,{htmlFor:"nama_akun",fontSize:"sm"},"Nama Akun",e.createElement(m,{display:"inline",color:"red"},"*")),e.createElement(u,{type:"text",id:"nama_akun",value:r.nama_akun,onChange:a=>l("nama_akun",a.target.value)}),n.nama_akun&&e.createElement(s,{fontSize:"xs"},n.nama_akun)),e.createElement(o,{mb:3,isInvalid:n.nomor_rekening},e.createElement(i,{htmlFor:"nomor_rekening",fontSize:"sm"},"Nomor Rekening",e.createElement(m,{display:"inline",color:"red"},"*")),e.createElement(u,{type:"text",id:"nomor_rekening",value:r.nomor_rekening,onChange:a=>l("nomor_rekening",a.target.value)}),n.nomor_rekening&&e.createElement(s,{fontSize:"xs"},n.nomor_rekening))),e.createElement(O,null,e.createElement(p,{type:"submit",colorScheme:"blue",isLoading:E,loadingText:"Simpan"},e.createElement(c,{as:y,mr:2}),"Simpan"),e.createElement(p,{as:S,href:"/profile/wallet",colorScheme:"gray",ml:3},e.createElement(c,{as:F,mr:2}),"Kembali")))))};export{j as default};