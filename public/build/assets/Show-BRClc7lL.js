import{W as g,R as e,Y as S,I as o,a as _}from"./app-DCVUtIqw.js";import{A as b}from"./AdminLayout -CAXSqyn7.js";import{F as w}from"./BookmarkIcon-mAFX88TI.js";import{F as h}from"./ArrowLeftIcon-CAl_QhjE.js";import{C as k,a as v}from"./chunk-YQO7BFFX-DXVB8yjZ.js";import{C as y}from"./chunk-2EW3JUUD-D0SPJ-En.js";import{H as F}from"./chunk-7OLJDQMT-Cv4BbNAv.js";import{S as n}from"./chunk-NEK3OOAM-B-cdqXZ7.js";import{T as a}from"./chunk-2OOHT3W5-BlFa8Fv_.js";import{I as B}from"./chunk-QINAG4RG-CJmaY4ZB.js";import{B as l}from"./chunk-Z6RXEUPO-Bc4zVw1C.js";import{F as x}from"./chunk-56K2BSAJ-3Mdre515.js";import{F as C,a as D}from"./chunk-H46NUPBZ-CO9d4yfX.js";import{S as T}from"./chunk-3RSXBRAN-aOto4z4c.js";import{B as i}from"./chunk-UVUR7MCU-87Ltadkx.js";import"./chunk-KRPLQIP4-Gdrq63o7.js";import"./chunk-PULVB27S-DupAKUVl.js";import"./ChevronDownIcon-4oo1iQ45.js";import"./chunk-7JBTTEVG-AZ8puJBW.js";import"./chunk-3ASUQ6PA-Cs92Ss6H.js";import"./chunk-5MKCW436-CnR9LSu-.js";import"./chunk-G72KV6MB-ClQoAU4d.js";import"./chunk-V7PAE35Z-BEXAZOsh.js";import"./chunk-SPIKMR6I-DpZJN6Nr.js";import"./chunk-NABYTFTG-DSNTBKXV.js";import"./tslib.es6-DjSP9Sqm.js";import"./MapPinIcon-DvMUsgFM.js";import"./chunk-6RSEZNRH-DWTnfycA.js";import"./chunk-JARCRF6W-ei9ziPk7.js";import"./chunk-X3PS6RUF-DEDFK66O.js";const oe=({auth:s,sessions:u,transaction:t})=>{const{data:c,setData:p,put:E,processing:d,errors:m}=g({status:""}),f=r=>{r.preventDefault(),E(`/admin/transaction/${t.nomor_pemesanan}`)};return e.createElement(b,{auth:s,sessions:u},e.createElement(S,{title:"Detail Transaksi"}),e.createElement(k,{maxW:"xl",w:"full",p:2,h:"auto"},e.createElement(y,{pb:0},e.createElement(F,{size:"md",fontWeight:"bold"},"Detail Transaki")),e.createElement(v,null,e.createElement(n,{mb:2,gap:2,columns:2},e.createElement(a,null,"Nomor Pemesanan"),e.createElement(a,null,t.nomor_pemesanan),e.createElement(a,null,"Destinasi Wisata"),e.createElement(a,null,t.destination_price.destination.nama),e.createElement(a,null,"Paket Wisata"),e.createElement(a,null,t.destination_price.nama),e.createElement(a,null,"Kuantitas"),e.createElement(a,null,t.quantitas," Orang"),e.createElement(a,null,"Total"),e.createElement(a,null,t.total_custom," ")),t.wallet_id&&e.createElement(e.Fragment,null,e.createElement(n,{mb:2,gap:2,columns:2},e.createElement(a,null,"Nama Akun"),e.createElement(a,null,t.wallet.nama_akun),e.createElement(a,null,"Nomor Rekening"),e.createElement(a,null,t.wallet.nomor_rekening),e.createElement(a,null,"Nama Bank"),e.createElement(a,null,t.wallet.nama_bank),e.createElement(a,null,"Nama Pengirim"),e.createElement(a,null,t.nama_pengirim),e.createElement(a,null,"Bukti Bayar")),e.createElement(B,{my:4,w:"full",src:t.bukti_bayar})),e.createElement(n,{mb:2,gap:2,columns:2},e.createElement(a,null,"Status"),e.createElement(a,null," ",e.createElement("div",null,!t.wallet_id&&t.status==0&&e.createElement(l,{colorScheme:"red",variant:"solid"},"Belum Bayar"),t.wallet_id&&t.status==0&&e.createElement(l,{colorScheme:"yellow",variant:"solid"},"Pending"),t.wallet_id&&t.status==1&&e.createElement(l,{colorScheme:"green",variant:"solid"},"Sukses"),t.wallet_id&&t.status==2&&e.createElement(l,{colorScheme:"red",variant:"solid"},"Gagal")))),t.wallet_id&&t.status!=1&&e.createElement("form",{onSubmit:f,my:4},e.createElement(x,{mb:3,isInvalid:m.status},e.createElement(C,{htmlFor:"status",fontSize:"sm"},"Status"," ",e.createElement(a,{display:"inline",color:"red"},"*")),e.createElement(T,{type:"text",id:"status",value:c.status,onChange:r=>p("status",r.target.value)},e.createElement("option",{value:""},"Pilih status"),e.createElement("option",{value:"1"},"Sukses"),e.createElement("option",{value:"2"},"Gagal")),m.status&&e.createElement(D,{fontSize:"xs"},m.status)),e.createElement(i,{type:"submit",colorScheme:"blue",isLoading:d,loadingText:"Simpan"},e.createElement(o,{as:w,mr:2}),"Simpan"),e.createElement(i,{as:_,href:"/admin/transaction",colorScheme:"gray",ml:3},e.createElement(o,{as:h,mr:2}),"Kembali")))))};export{oe as default};