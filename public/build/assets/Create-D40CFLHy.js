import{q as C,r as v,W as R,R as e,Y as w,I as d,a as y}from"./app-DPnmQNMl.js";import{u as z}from"./index-j8_y5uf1.js";import{A}from"./AdminLayout -B5LiPOup.js";import{F as B}from"./BookmarkIcon-B-jtLz3k.js";import{F as L}from"./ArrowLeftIcon-DUbXo-N_.js";import{C as P,a as T}from"./chunk-YQO7BFFX-DjfJuZn_.js";import{C as k}from"./chunk-2EW3JUUD-BRdUR3w7.js";import{H}from"./chunk-7OLJDQMT-CJSwRjv4.js";import{F as W,I as j}from"./chunk-6CVSDS6C-ChT1bA7_.js";import{F as G,a as U,C as q}from"./chunk-H46NUPBZ-M_mnBLCq.js";import{T as m}from"./chunk-2OOHT3W5-ChCwLuug.js";import{B as K}from"./chunk-PULVB27S-BmB31oiW.js";import{I as M}from"./chunk-QINAG4RG-TnUMVetF.js";import{B as f}from"./chunk-UVUR7MCU-CmIpkDyX.js";import"./tslib.es6-DjSP9Sqm.js";import"./chunk-KRPLQIP4-CwPIyTBq.js";import"./MapPinIcon-CIgvDU8k.js";import"./chunk-7JBTTEVG-CIlxP4pX.js";import"./chunk-3ASUQ6PA-DrJ3xbiw.js";import"./chunk-5MKCW436-BrFvw1lA.js";import"./chunk-G72KV6MB-CFzf8KEx.js";import"./chunk-V7PAE35Z-ArVLID_a.js";import"./chunk-SPIKMR6I-D8fXho7g.js";import"./chunk-NABYTFTG-CWJEsaVk.js";import"./chunk-X3PS6RUF-DTGnK-xB.js";const Ee=({auth:g,sessions:u})=>{const{url:E}=C(),[i,s]=v.useState(null),n=new URLSearchParams(E.split("?")[1]).get("kode"),{data:Y,setData:b,post:h,processing:F,errors:t}=R({image:"",destination_id:n}),x=(a,p)=>{if(p.length>0){p.forEach(r=>{r.errors.forEach(c=>{c.code==="file-too-large"?console.error("File is too large"):c.code==="file-invalid-type"&&console.error("Invalid file type")})}),s(null);return}const o=a[0];if(o){b("image",o);const r=new FileReader;r.onloadend=()=>{s(r.result)},r.readAsDataURL(o)}},{getRootProps:D,getInputProps:I,isDragActive:l}=z({onDrop:x,accept:"image/jpg,image/jpeg,image/png",maxSize:2*1024*1024,multiple:!1}),S=a=>{a.preventDefault(),h("/destination-image")};return e.createElement(A,{auth:g,sessions:u},e.createElement(w,{title:"Tambah Gambar Destinasi"}),e.createElement(P,{maxW:"xl",w:"full",p:2,h:"auto"},e.createElement(k,{pb:0},e.createElement(H,{size:"md",fontWeight:"bold"},"Tambah Gambar Destinasi")),e.createElement("form",{onSubmit:S},e.createElement(T,{pb:0},e.createElement(W,{mb:3,isInvalid:t.image},e.createElement(G,{htmlFor:"image",fontSize:"sm"},"Image"," ",e.createElement(m,{display:"inline",color:"red"},"*")),e.createElement(K,{...D(),border:"2px dashed",borderColor:l?"blue.300":"gray.300",borderRadius:"md",p:10,textAlign:"center"},e.createElement(j,{...I()}),l?e.createElement(m,null,"Drop the files here ..."):e.createElement(m,null,"Drag 'n' drop some files here, or click to select files"),i&&e.createElement(M,{src:i,alt:"Preview",mt:4,borderRadius:"md",boxSize:"200px",objectFit:"cover"})),t.image&&e.createElement(U,{fontSize:"xs"},t.image))),e.createElement(q,null,e.createElement(f,{type:"submit",colorScheme:"blue",isLoading:F,loadingText:"Simpan"},e.createElement(d,{as:B,mr:2}),"Simpan"),e.createElement(f,{as:y,href:"/destination/"+n,colorScheme:"gray",ml:3},e.createElement(d,{as:L,mr:2}),"Kembali")))))};export{Ee as default};