import{W as g,j as i,Y as _,I as m,a as f}from"./app-JHr847d-.js";import{A as b}from"./AdminLayout -Bc3andDT.js";import{F as y}from"./BookmarkIcon-Bmpjnh4y.js";import{F as v}from"./ArrowLeftIcon-BQViQJlt.js";import{C as S,a as z}from"./chunk-YQO7BFFX-DSZLBsX_.js";import{C as F}from"./chunk-2EW3JUUD-BnP4_yfU.js";import{H as C}from"./chunk-7OLJDQMT-AfpAcD5m.js";import{F as o}from"./chunk-56K2BSAJ-B5oYsPph.js";import{F as a,a as r}from"./chunk-H46NUPBZ-BOPC4Oho.js";import{T as d}from"./chunk-2OOHT3W5-CSJh4K3n.js";import{I as l}from"./chunk-6CVSDS6C-DYEn1HBN.js";import{T as I}from"./chunk-4IH3O7BJ-DsWNF1-b.js";import{S as L}from"./chunk-3RSXBRAN-DMxxMGji.js";import{C as T}from"./chunk-BDSTZZXD-CYaIS77w.js";import{B as k}from"./chunk-UVUR7MCU-xK3lE66g.js";import"./chunk-KRPLQIP4-D2gzZcl_.js";import"./chunk-PULVB27S-H6C7mPE7.js";import"./ChevronDownIcon-vE-s4u4y.js";import"./chunk-7JBTTEVG-Dz6D23Ef.js";import"./chunk-3ASUQ6PA-DZHSwCkz.js";import"./chunk-5MKCW436-CDR3RVuy.js";import"./chunk-G72KV6MB-CldgvVEv.js";import"./chunk-V7PAE35Z-D4m-ilcb.js";import"./chunk-SPIKMR6I-BlSDUyza.js";import"./chunk-NABYTFTG-B-MaHP8x.js";import"./tslib.es6-DjSP9Sqm.js";import"./MapPinIcon-CNmZlcmu.js";import"./chunk-6RSEZNRH-Bc2GE4v1.js";const oi=({auth:x,sessions:c,categories:u})=>{const{data:n,setData:s,post:h,processing:p,errors:e}=g({category_id:"",nama:"",deskripsi:"",link_video_youtube:"",link_youtube:"",link_facebook:"",link_instagram:"",link_tiktok:"",lokasi:"",rating:""}),j=t=>{t.preventDefault(),h("/user/destination")};return i.jsxs(b,{auth:x,sessions:c,children:[i.jsx(_,{title:"Tambah Destinasi"}),i.jsxs(S,{maxW:"xl",w:"full",p:2,h:"auto",children:[i.jsx(F,{pb:0,children:i.jsx(C,{size:"md",fontWeight:"bold",children:"Tambah Destinasi"})}),i.jsxs("form",{onSubmit:j,children:[i.jsxs(z,{pb:0,children:[i.jsxs(o,{mb:3,isInvalid:e.nama,children:[i.jsxs(a,{htmlFor:"nama",fontSize:"sm",children:["Nama",i.jsx(d,{display:"inline",color:"red",children:"*"})]}),i.jsx(l,{type:"text",id:"nama",value:n.nama,onChange:t=>s("nama",t.target.value)}),e.nama&&i.jsx(r,{fontSize:"xs",children:e.nama})]}),i.jsxs(o,{mb:3,isInvalid:e.deskripsi,children:[i.jsxs(a,{htmlFor:"deskripsi",fontSize:"sm",children:["Deskripsi",i.jsx(d,{display:"inline",color:"red",children:"*"})]}),i.jsx(I,{type:"text",id:"deskripsi",value:n.deskripsi,onChange:t=>s("deskripsi",t.target.value)}),e.deskripsi&&i.jsx(r,{fontSize:"xs",children:e.deskripsi})]}),i.jsxs(o,{mb:3,isInvalid:e.category_id,children:[i.jsxs(a,{htmlFor:"category_id",fontSize:"sm",children:["Kategori",i.jsx(d,{display:"inline",color:"red",children:"*"})]}),i.jsxs(L,{type:"text",id:"category_id",value:n.category_id,onChange:t=>s("category_id",t.target.value),children:[i.jsx("option",{value:"",children:"Pilih Kategori"}),u.map(t=>i.jsx("option",{value:t.uuid,children:t.nama},t.uuid))]}),e.category_id&&i.jsx(r,{fontSize:"xs",children:e.category_id})]}),i.jsxs(o,{mb:3,isInvalid:e.lokasi,children:[i.jsxs(a,{htmlFor:"lokasi",fontSize:"sm",children:["Lokasi",i.jsx(d,{display:"inline",color:"red",children:"*"})]}),i.jsx(l,{type:"text",id:"lokasi",value:n.lokasi,onChange:t=>s("lokasi",t.target.value)}),e.lokasi&&i.jsx(r,{fontSize:"xs",children:e.lokasi})]}),i.jsxs(o,{mb:3,isInvalid:e.link_video_youtube,children:[i.jsx(a,{htmlFor:"link_video_youtube",fontSize:"sm",children:"Link Video Youtube"}),i.jsx(l,{type:"text",id:"link_video_youtube",value:n.link_video_youtube,onChange:t=>s("link_video_youtube",t.target.value)}),e.link_video_youtube&&i.jsx(r,{fontSize:"xs",children:e.link_video_youtube})]}),i.jsxs(o,{mb:3,isInvalid:e.link_youtube,children:[i.jsx(a,{htmlFor:"link_youtube",fontSize:"sm",children:"Link Youtube"}),i.jsx(l,{type:"text",id:"link_youtube",value:n.link_youtube,onChange:t=>s("link_youtube",t.target.value)}),e.link_youtube&&i.jsx(r,{fontSize:"xs",children:e.link_youtube})]}),i.jsxs(o,{mb:3,isInvalid:e.link_facebook,children:[i.jsx(a,{htmlFor:"link_facebook",fontSize:"sm",children:"Link Facebook"}),i.jsx(l,{type:"text",id:"link_facebook",value:n.link_facebook,onChange:t=>s("link_facebook",t.target.value)}),e.link_facebook&&i.jsx(r,{fontSize:"xs",children:e.link_facebook})]}),i.jsxs(o,{mb:3,isInvalid:e.link_instagram,children:[i.jsx(a,{htmlFor:"link_instagram",fontSize:"sm",children:"Link Instagram"}),i.jsx(l,{type:"text",id:"link_instagram",value:n.link_instagram,onChange:t=>s("link_instagram",t.target.value)}),e.link_instagram&&i.jsx(r,{fontSize:"xs",children:e.link_instagram})]}),i.jsxs(o,{mb:3,isInvalid:e.link_instagram,children:[i.jsx(a,{htmlFor:"link_tiktok",fontSize:"sm",children:"Link Tiktok"}),i.jsx(l,{type:"text",id:"link_tiktok",value:n.link_tiktok,onChange:t=>s("link_tiktok",t.target.value)}),e.link_tiktok&&i.jsx(r,{fontSize:"xs",children:e.link_tiktok})]}),i.jsxs(o,{mb:3,isInvalid:e.rating,children:[i.jsxs(a,{htmlFor:"rating",fontSize:"sm",children:["Rating",i.jsx(d,{display:"inline",color:"red",children:"*"})]}),i.jsx(l,{type:"number",id:"rating",value:n.rating,onChange:t=>s("rating",t.target.value)}),e.rating&&i.jsx(r,{fontSize:"xs",children:e.rating})]})]}),i.jsxs(T,{children:[i.jsxs(k,{type:"submit",colorScheme:"blue",isLoading:p,loadingText:"Simpan",children:[i.jsx(m,{as:y,mr:2}),"Simpan"]}),i.jsxs(k,{as:f,href:"/user/destination",colorScheme:"gray",ml:3,children:[i.jsx(m,{as:v,mr:2}),"Kembali"]})]})]})]})]})};export{oi as default};