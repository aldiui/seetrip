import{W as v,R as e,Y as S,I as p,a as b}from"./app-DCVUtIqw.js";import{A as F}from"./AdminLayout -CAXSqyn7.js";import{F as h}from"./BookmarkIcon-mAFX88TI.js";import{F as y}from"./ArrowLeftIcon-CAl_QhjE.js";import{C as x,a as C}from"./chunk-YQO7BFFX-DXVB8yjZ.js";import{C as z}from"./chunk-2EW3JUUD-D0SPJ-En.js";import{H as I}from"./chunk-7OLJDQMT-Cv4BbNAv.js";import{F as l}from"./chunk-56K2BSAJ-3Mdre515.js";import{F as n,a as m}from"./chunk-H46NUPBZ-CO9d4yfX.js";import{T as s}from"./chunk-2OOHT3W5-BlFa8Fv_.js";import{I as d}from"./chunk-6CVSDS6C-DslWv91l.js";import{T as _}from"./chunk-4IH3O7BJ-W-wECUCa.js";import{S as D}from"./chunk-3RSXBRAN-aOto4z4c.js";import{C as T}from"./chunk-BDSTZZXD-ldmz08Vi.js";import{B as u}from"./chunk-UVUR7MCU-87Ltadkx.js";import"./chunk-KRPLQIP4-Gdrq63o7.js";import"./chunk-PULVB27S-DupAKUVl.js";import"./ChevronDownIcon-4oo1iQ45.js";import"./chunk-7JBTTEVG-AZ8puJBW.js";import"./chunk-3ASUQ6PA-Cs92Ss6H.js";import"./chunk-5MKCW436-CnR9LSu-.js";import"./chunk-G72KV6MB-ClQoAU4d.js";import"./chunk-V7PAE35Z-BEXAZOsh.js";import"./chunk-SPIKMR6I-DpZJN6Nr.js";import"./chunk-NABYTFTG-DSNTBKXV.js";import"./tslib.es6-DjSP9Sqm.js";import"./MapPinIcon-DvMUsgFM.js";import"./chunk-6RSEZNRH-DWTnfycA.js";const ie=({auth:c,sessions:k,destinationVoucher:r})=>{const{data:o,setData:i,put:E,processing:g,errors:t}=v({kode:r.kode,deskripsi:r.deskripsi,diskon:r.diskon,kuota:r.kuota,tanggal_kadaluarsa:r.tanggal_kadaluarsa,status:r.status}),f=a=>{a.preventDefault(),E(`/destination-voucher/${r.uuid}`)};return e.createElement(F,{auth:c,sessions:k},e.createElement(S,{title:"Edit Voucher Destinasi"}),e.createElement(x,{maxW:"xl",w:"full",p:2,h:"auto"},e.createElement(z,{pb:0},e.createElement(I,{size:"md",fontWeight:"bold"},"Edit Voucher Destinasi")),e.createElement("form",{onSubmit:f},e.createElement(C,{pb:0},e.createElement(l,{mb:3,isInvalid:t.kode},e.createElement(n,{htmlFor:"kode",fontSize:"sm"},"Kode",e.createElement(s,{display:"inline",color:"red"},"*")),e.createElement(d,{type:"text",id:"kode",value:o.kode,onChange:a=>i("kode",a.target.value)}),t.kode&&e.createElement(m,{fontSize:"xs"},t.kode)),e.createElement(l,{mb:3,isInvalid:t.deskripsi},e.createElement(n,{htmlFor:"deskripsi",fontSize:"sm"},"Deskripsi",e.createElement(s,{display:"inline",color:"red"},"*")),e.createElement(_,{type:"text",id:"deskripsi",value:o.deskripsi,onChange:a=>i("deskripsi",a.target.value)}),t.deskripsi&&e.createElement(m,{fontSize:"xs"},t.deskripsi)),e.createElement(l,{mb:3,isInvalid:t.diskon},e.createElement(n,{htmlFor:"diskon",fontSize:"sm"},"Diskon",e.createElement(s,{display:"inline",color:"red"},"*")),e.createElement(d,{type:"number",id:"diskon",value:o.diskon,onChange:a=>i("diskon",a.target.value)}),t.diskon&&e.createElement(m,{fontSize:"xs"},t.diskon)),e.createElement(l,{mb:3,isInvalid:t.kuota},e.createElement(n,{htmlFor:"kuota",fontSize:"sm"},"Kuota",e.createElement(s,{display:"inline",color:"red"},"*")),e.createElement(d,{type:"number",id:"kuota",value:o.kuota,onChange:a=>i("kuota",a.target.value)}),t.kuota&&e.createElement(m,{fontSize:"xs"},t.kuota)),e.createElement(l,{mb:3,isInvalid:t.tanggal_kadaluarsa},e.createElement(n,{htmlFor:"tanggal_kadaluarsa",fontSize:"sm"},"Tanggal Kadaluarsa",e.createElement(s,{display:"inline",color:"red"},"*")),e.createElement(d,{type:"date",id:"tanggal_kadaluarsa",value:o.tanggal_kadaluarsa,onChange:a=>i("tanggal_kadaluarsa",a.target.value)}),t.tanggal_kadaluarsa&&e.createElement(m,{fontSize:"xs"},t.tanggal_kadaluarsa)),e.createElement(l,{mb:3,isInvalid:t.status},e.createElement(n,{htmlFor:"status",fontSize:"sm"},"Status",e.createElement(s,{display:"inline",color:"red"},"*")),e.createElement(D,{id:"status",value:o.status,onChange:a=>i("status",a.target.value)},e.createElement("option",{value:""},"Pilih Status"),e.createElement("option",{value:"1"},"Aktif"),e.createElement("option",{value:"0"},"Tidak Aktif")),t.status&&e.createElement(m,{fontSize:"xs"},t.status))),e.createElement(T,null,e.createElement(u,{type:"submit",colorScheme:"blue",isLoading:g,loadingText:"Simpan"},e.createElement(p,{as:h,mr:2}),"Simpan"),e.createElement(u,{as:b,href:"/destination/"+r.destination_uuid,colorScheme:"gray",ml:3},e.createElement(p,{as:y,mr:2}),"Kembali")))))};export{ie as default};