import{q as I,r as R,W as w,R as e,Y as y,I as f,a as z}from"./app-DCVUtIqw.js";import{u as T}from"./index-x-flaPXv.js";import{A}from"./AdminLayout -CAXSqyn7.js";import{F as B}from"./BookmarkIcon-mAFX88TI.js";import{F as L}from"./ArrowLeftIcon-CAl_QhjE.js";import{u as P}from"./chunk-6RSEZNRH-DWTnfycA.js";import{C as k,a as G}from"./chunk-YQO7BFFX-DXVB8yjZ.js";import{C as H}from"./chunk-2EW3JUUD-D0SPJ-En.js";import{H as W}from"./chunk-7OLJDQMT-Cv4BbNAv.js";import{F as j}from"./chunk-56K2BSAJ-3Mdre515.js";import{F as U,a as q}from"./chunk-H46NUPBZ-CO9d4yfX.js";import{T as i}from"./chunk-2OOHT3W5-BlFa8Fv_.js";import{B as K}from"./chunk-PULVB27S-DupAKUVl.js";import{I as M}from"./chunk-6CVSDS6C-DslWv91l.js";import{I as Y}from"./chunk-QINAG4RG-CJmaY4ZB.js";import{C as _}from"./chunk-BDSTZZXD-ldmz08Vi.js";import{B as u}from"./chunk-UVUR7MCU-87Ltadkx.js";import"./index-BJ-EYT7Z.js";import"./tslib.es6-DjSP9Sqm.js";import"./chunk-KRPLQIP4-Gdrq63o7.js";import"./ChevronDownIcon-4oo1iQ45.js";import"./chunk-7JBTTEVG-AZ8puJBW.js";import"./chunk-3ASUQ6PA-Cs92Ss6H.js";import"./chunk-5MKCW436-CnR9LSu-.js";import"./chunk-G72KV6MB-ClQoAU4d.js";import"./chunk-V7PAE35Z-BEXAZOsh.js";import"./chunk-SPIKMR6I-DpZJN6Nr.js";import"./chunk-NABYTFTG-DSNTBKXV.js";import"./MapPinIcon-DvMUsgFM.js";import"./chunk-X3PS6RUF-DEDFK66O.js";const Se=({auth:g,sessions:E})=>{const m=P(),{url:b}=I(),[s,n]=R.useState(null),l=new URLSearchParams(b.split("?")[1]).get("kode"),{data:$,setData:h,post:F,processing:x,errors:r}=w({image:"",destination_id:l}),C=(o,c)=>{if(c.length>0){c.forEach(t=>{t.errors.forEach(d=>{d.code==="file-too-large"?m({title:"Error",status:"error",description:"File is too large",duration:3e3,isClosable:!0,position:"top-right"}):d.code==="file-invalid-type"&&m({title:"Error",status:"error",description:"File is invalid type",duration:3e3,isClosable:!0,position:"top-right"})})}),n(null);return}const a=o[0];if(a){h("image",a);const t=new FileReader;t.onloadend=()=>{n(t.result)},t.readAsDataURL(a)}},{getRootProps:D,getInputProps:S,isDragActive:p}=T({onDrop:C,accept:"image/jpg,image/jpeg,image/png",maxSize:10*1024*1024,multiple:!1}),v=o=>{o.preventDefault(),F("/admin/destination-image")};return e.createElement(A,{auth:g,sessions:E},e.createElement(y,{title:"Tambah Gambar Destinasi"}),e.createElement(k,{maxW:"xl",w:"full",p:2,h:"auto"},e.createElement(H,{pb:0},e.createElement(W,{size:"md",fontWeight:"bold"},"Tambah Gambar Destinasi")),e.createElement("form",{onSubmit:v},e.createElement(G,{pb:0},e.createElement(j,{mb:3,isInvalid:r.image},e.createElement(U,{htmlFor:"image",fontSize:"sm"},"Gambar"," ",e.createElement(i,{display:"inline",color:"red"},"*")),e.createElement(K,{...D(),border:"2px dashed",borderColor:p?"blue.300":"gray.300",borderRadius:"md",p:10,textAlign:"center"},e.createElement(M,{...S()}),p?e.createElement(i,null,"Drop the files here ..."):e.createElement(i,null,"Drag 'n' drop some files here, or click to select files"),s&&e.createElement(Y,{src:s,alt:"Preview",mt:4,borderRadius:"md",boxSize:"200px",objectFit:"cover"})),r.image&&e.createElement(q,{fontSize:"xs"},r.image))),e.createElement(_,null,e.createElement(u,{type:"submit",colorScheme:"blue",isLoading:x,loadingText:"Simpan"},e.createElement(f,{as:B,mr:2}),"Simpan"),e.createElement(u,{as:z,href:"/admin/destination/"+l,colorScheme:"gray",ml:3},e.createElement(f,{as:L,mr:2}),"Kembali")))))};export{Se as default};