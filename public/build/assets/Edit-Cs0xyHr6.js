import{W as v,R as e,Y as S,I as u,a as b}from"./app-DPnmQNMl.js";import{A as F}from"./AdminLayout -B5LiPOup.js";import{F as h}from"./BookmarkIcon-B-jtLz3k.js";import{F as y}from"./ArrowLeftIcon-DUbXo-N_.js";import{C as x,a as C}from"./chunk-YQO7BFFX-DjfJuZn_.js";import{C as z}from"./chunk-2EW3JUUD-BRdUR3w7.js";import{H as I}from"./chunk-7OLJDQMT-CJSwRjv4.js";import{F as i,I as d}from"./chunk-6CVSDS6C-ChT1bA7_.js";import{F as n,a as s,C as _}from"./chunk-H46NUPBZ-M_mnBLCq.js";import{T as m}from"./chunk-2OOHT3W5-ChCwLuug.js";import{T as D}from"./chunk-4IH3O7BJ-CoCotj3E.js";import{S as T}from"./chunk-3RSXBRAN-BFlJOCeO.js";import{B as c}from"./chunk-UVUR7MCU-CmIpkDyX.js";import"./chunk-KRPLQIP4-CwPIyTBq.js";import"./chunk-PULVB27S-BmB31oiW.js";import"./MapPinIcon-CIgvDU8k.js";import"./chunk-7JBTTEVG-CIlxP4pX.js";import"./chunk-3ASUQ6PA-DrJ3xbiw.js";import"./chunk-5MKCW436-BrFvw1lA.js";import"./chunk-G72KV6MB-CFzf8KEx.js";import"./chunk-V7PAE35Z-ArVLID_a.js";import"./chunk-SPIKMR6I-D8fXho7g.js";import"./chunk-NABYTFTG-CWJEsaVk.js";import"./tslib.es6-DjSP9Sqm.js";const te=({auth:p,sessions:k,destinationVoucher:r})=>{const{data:o,setData:l,put:E,processing:g,errors:t}=v({kode:r.kode,deskripsi:r.deskripsi,diskon:r.diskon,kuota:r.kuota,tanggal_kadaluarsa:r.tanggal_kadaluarsa,status:r.status}),f=a=>{a.preventDefault(),E(`/destination-voucher/${r.uuid}`)};return e.createElement(F,{auth:p,sessions:k},e.createElement(S,{title:"Edit Voucher Destinasi"}),e.createElement(x,{maxW:"xl",w:"full",p:2,h:"auto"},e.createElement(z,{pb:0},e.createElement(I,{size:"md",fontWeight:"bold"},"Edit Voucher Destinasi")),e.createElement("form",{onSubmit:f},e.createElement(C,{pb:0},e.createElement(i,{mb:3,isInvalid:t.kode},e.createElement(n,{htmlFor:"kode",fontSize:"sm"},"Kode",e.createElement(m,{display:"inline",color:"red"},"*")),e.createElement(d,{type:"text",id:"kode",value:o.kode,onChange:a=>l("kode",a.target.value)}),t.kode&&e.createElement(s,{fontSize:"xs"},t.kode)),e.createElement(i,{mb:3,isInvalid:t.deskripsi},e.createElement(n,{htmlFor:"deskripsi",fontSize:"sm"},"Deskripsi",e.createElement(m,{display:"inline",color:"red"},"*")),e.createElement(D,{type:"text",id:"deskripsi",value:o.deskripsi,onChange:a=>l("deskripsi",a.target.value)}),t.deskripsi&&e.createElement(s,{fontSize:"xs"},t.deskripsi)),e.createElement(i,{mb:3,isInvalid:t.diskon},e.createElement(n,{htmlFor:"diskon",fontSize:"sm"},"Diskon",e.createElement(m,{display:"inline",color:"red"},"*")),e.createElement(d,{type:"number",id:"diskon",value:o.diskon,onChange:a=>l("diskon",a.target.value)}),t.diskon&&e.createElement(s,{fontSize:"xs"},t.diskon)),e.createElement(i,{mb:3,isInvalid:t.kuota},e.createElement(n,{htmlFor:"kuota",fontSize:"sm"},"Kuota",e.createElement(m,{display:"inline",color:"red"},"*")),e.createElement(d,{type:"number",id:"kuota",value:o.kuota,onChange:a=>l("kuota",a.target.value)}),t.kuota&&e.createElement(s,{fontSize:"xs"},t.kuota)),e.createElement(i,{mb:3,isInvalid:t.tanggal_kadaluarsa},e.createElement(n,{htmlFor:"tanggal_kadaluarsa",fontSize:"sm"},"Tanggal Kadaluarsa",e.createElement(m,{display:"inline",color:"red"},"*")),e.createElement(d,{type:"date",id:"tanggal_kadaluarsa",value:o.tanggal_kadaluarsa,onChange:a=>l("tanggal_kadaluarsa",a.target.value)}),t.tanggal_kadaluarsa&&e.createElement(s,{fontSize:"xs"},t.tanggal_kadaluarsa)),e.createElement(i,{mb:3,isInvalid:t.status},e.createElement(n,{htmlFor:"status",fontSize:"sm"},"Status",e.createElement(m,{display:"inline",color:"red"},"*")),e.createElement(T,{id:"status",value:o.status,onChange:a=>l("status",a.target.value)},e.createElement("option",{value:""},"Pilih Status"),e.createElement("option",{value:"1"},"Aktif"),e.createElement("option",{value:"0"},"Tidak Aktif")),t.status&&e.createElement(s,{fontSize:"xs"},t.status))),e.createElement(_,null,e.createElement(c,{type:"submit",colorScheme:"blue",isLoading:g,loadingText:"Simpan"},e.createElement(u,{as:h,mr:2}),"Simpan"),e.createElement(c,{as:b,href:"/destination/"+r.destination_uuid,colorScheme:"gray",ml:3},e.createElement(u,{as:y,mr:2}),"Kembali")))))};export{te as default};
