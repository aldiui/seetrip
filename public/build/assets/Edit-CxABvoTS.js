import{W as b,R as e,Y as v,I as d,a as S}from"./app-DPnmQNMl.js";import{A as h}from"./AdminLayout -B5LiPOup.js";import{F as _}from"./BookmarkIcon-B-jtLz3k.js";import{F as x}from"./ArrowLeftIcon-DUbXo-N_.js";import{C as F,a as C}from"./chunk-YQO7BFFX-DjfJuZn_.js";import{C as z}from"./chunk-2EW3JUUD-BRdUR3w7.js";import{H as I}from"./chunk-7OLJDQMT-CJSwRjv4.js";import{F as o,I as c}from"./chunk-6CVSDS6C-ChT1bA7_.js";import{F as m,a as l,C as D}from"./chunk-H46NUPBZ-M_mnBLCq.js";import{T as s}from"./chunk-2OOHT3W5-ChCwLuug.js";import{T as L}from"./chunk-4IH3O7BJ-CoCotj3E.js";import{S as R}from"./chunk-3RSXBRAN-BFlJOCeO.js";import{B as p}from"./chunk-UVUR7MCU-CmIpkDyX.js";import"./chunk-KRPLQIP4-CwPIyTBq.js";import"./chunk-PULVB27S-BmB31oiW.js";import"./MapPinIcon-CIgvDU8k.js";import"./chunk-7JBTTEVG-CIlxP4pX.js";import"./chunk-3ASUQ6PA-DrJ3xbiw.js";import"./chunk-5MKCW436-BrFvw1lA.js";import"./chunk-G72KV6MB-CFzf8KEx.js";import"./chunk-V7PAE35Z-ArVLID_a.js";import"./chunk-SPIKMR6I-D8fXho7g.js";import"./chunk-NABYTFTG-CWJEsaVk.js";import"./tslib.es6-DjSP9Sqm.js";const ae=({auth:u,sessions:E,destination:r,categories:g})=>{const{data:i,setData:n,put:y,processing:f,errors:t}=b({category_id:r.category_uuid,nama:r.nama,deskripsi:r.deskripsi,link_youtube:r.link_youtube,lokasi:r.lokasi,rating:r.rating}),k=a=>{a.preventDefault(),y(`/destination/${r.uuid}`)};return e.createElement(h,{auth:u,sessions:E},e.createElement(v,{title:"Edit Destinasi"}),e.createElement(F,{maxW:"xl",w:"full",p:2,h:"auto"},e.createElement(z,{pb:0},e.createElement(I,{size:"md",fontWeight:"bold"},"Edit Destinasi")),e.createElement("form",{onSubmit:k},e.createElement(C,{pb:0},e.createElement(o,{mb:3,isInvalid:t.nama},e.createElement(m,{htmlFor:"nama",fontSize:"sm"},"Nama",e.createElement(s,{display:"inline",color:"red"},"*")),e.createElement(c,{type:"text",id:"nama",value:i.nama,onChange:a=>n("nama",a.target.value)}),t.nama&&e.createElement(l,{fontSize:"xs"},t.nama)),e.createElement(o,{mb:3,isInvalid:t.deskripsi},e.createElement(m,{htmlFor:"deskripsi",fontSize:"sm"},"Deskripsi",e.createElement(s,{display:"inline",color:"red"},"*")),e.createElement(L,{type:"text",id:"deskripsi",value:i.deskripsi,onChange:a=>n("deskripsi",a.target.value)}),t.deskripsi&&e.createElement(l,{fontSize:"xs"},t.deskripsi)),e.createElement(o,{mb:3,isInvalid:t.category_id},e.createElement(m,{htmlFor:"category_id",fontSize:"sm"},"Kategori",e.createElement(s,{display:"inline",color:"red"},"*")),e.createElement(R,{type:"text",id:"category_id",value:i.category_id,onChange:a=>n("category_id",a.target.value)},e.createElement("option",{value:""},"Pilih Kategori"),g.map(a=>e.createElement("option",{key:a.uuid,value:a.uuid},a.nama))),t.category_id&&e.createElement(l,{fontSize:"xs"},t.category_id)),e.createElement(o,{mb:3,isInvalid:t.lokasi},e.createElement(m,{htmlFor:"lokasi",fontSize:"sm"},"Lokasi",e.createElement(s,{display:"inline",color:"red"},"*")),e.createElement(c,{type:"text",id:"lokasi",value:i.lokasi,onChange:a=>n("lokasi",a.target.value)}),t.lokasi&&e.createElement(l,{fontSize:"xs"},t.lokasi)),e.createElement(o,{mb:3,isInvalid:t.link_youtube},e.createElement(m,{htmlFor:"link_youtube",fontSize:"sm"},"Link Youtube",e.createElement(s,{display:"inline",color:"red"},"*")),e.createElement(c,{type:"text",id:"link_youtube",value:i.link_youtube,onChange:a=>n("link_youtube",a.target.value)}),t.link_youtube&&e.createElement(l,{fontSize:"xs"},t.link_youtube)),e.createElement(o,{mb:3,isInvalid:t.rating},e.createElement(m,{htmlFor:"rating",fontSize:"sm"},"Rating",e.createElement(s,{display:"inline",color:"red"},"*")),e.createElement(c,{type:"number",id:"rating",value:i.rating,onChange:a=>n("rating",a.target.value)}),t.rating&&e.createElement(l,{fontSize:"xs"},t.rating))),e.createElement(D,null,e.createElement(p,{type:"submit",colorScheme:"blue",isLoading:f,loadingText:"Simpan"},e.createElement(d,{as:_,mr:2}),"Simpan"),e.createElement(p,{as:S,href:"/destination",colorScheme:"gray",ml:3},e.createElement(d,{as:x,mr:2}),"Kembali")))))};export{ae as default};