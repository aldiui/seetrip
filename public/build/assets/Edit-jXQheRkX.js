import{r as f,W as y,R as e,Y as R,I as u,a as w}from"./app-DCVUtIqw.js";import{A as z}from"./AdminLayout -CAXSqyn7.js";import{u as A}from"./index-x-flaPXv.js";import{F as B}from"./BookmarkIcon-mAFX88TI.js";import{F as I}from"./ArrowLeftIcon-CAl_QhjE.js";import{u as L}from"./chunk-6RSEZNRH-DWTnfycA.js";import{C as P,a as T}from"./chunk-YQO7BFFX-DXVB8yjZ.js";import{C as G}from"./chunk-2EW3JUUD-D0SPJ-En.js";import{H}from"./chunk-7OLJDQMT-Cv4BbNAv.js";import{F as W}from"./chunk-56K2BSAJ-3Mdre515.js";import{F as j,a as _}from"./chunk-H46NUPBZ-CO9d4yfX.js";import{T as s}from"./chunk-2OOHT3W5-BlFa8Fv_.js";import{B as $}from"./chunk-PULVB27S-DupAKUVl.js";import{I as k}from"./chunk-6CVSDS6C-DslWv91l.js";import{I as K}from"./chunk-QINAG4RG-CJmaY4ZB.js";import{C as M}from"./chunk-BDSTZZXD-ldmz08Vi.js";import{B as g}from"./chunk-UVUR7MCU-87Ltadkx.js";import"./chunk-KRPLQIP4-Gdrq63o7.js";import"./ChevronDownIcon-4oo1iQ45.js";import"./chunk-7JBTTEVG-AZ8puJBW.js";import"./chunk-3ASUQ6PA-Cs92Ss6H.js";import"./chunk-5MKCW436-CnR9LSu-.js";import"./chunk-G72KV6MB-ClQoAU4d.js";import"./chunk-V7PAE35Z-BEXAZOsh.js";import"./chunk-SPIKMR6I-DpZJN6Nr.js";import"./chunk-NABYTFTG-DSNTBKXV.js";import"./tslib.es6-DjSP9Sqm.js";import"./MapPinIcon-DvMUsgFM.js";import"./index-BJ-EYT7Z.js";import"./chunk-X3PS6RUF-DEDFK66O.js";const Ce=({auth:E,sessions:b,destinationImage:t})=>{const l=L(),[n,o]=f.useState(null),{data:U,setData:h,post:F,processing:x,errors:a}=y({_method:"put",image:""});f.useEffect(()=>{t.image&&o(t.image)},[t.image]);const C=i=>{i.preventDefault(),F(`/admin/destination-image/${t.uuid}`)},D=(i,c)=>{if(c.length>0){c.forEach(r=>{r.errors.forEach(d=>{d.code==="file-too-large"?l({title:"Error",status:"error",description:"File is too large",duration:3e3,isClosable:!0,position:"top-right"}):d.code==="file-invalid-type"&&l({title:"Error",status:"error",description:"File is invalid type",duration:3e3,isClosable:!0,position:"top-right"})})}),o(null);return}const m=i[0];if(m){h("image",m);const r=new FileReader;r.onloadend=()=>{o(r.result)},r.readAsDataURL(m)}},{getRootProps:S,getInputProps:v,isDragActive:p}=A({onDrop:D,accept:"image/jpg,image/jpeg,image/png",maxSize:10*1024*1024,multiple:!1});return e.createElement(z,{auth:E,sessions:b},e.createElement(R,{title:"Edit Gambar Destinasi"}),e.createElement(P,{maxW:"xl",w:"full",p:2,h:"auto"},e.createElement(G,{pb:0},e.createElement(H,{size:"md",fontWeight:"bold"},"Edit Gambar Destinasi")),e.createElement("form",{onSubmit:C},e.createElement(T,{pb:0},e.createElement(W,{mb:3,isInvalid:a.image},e.createElement(j,{htmlFor:"image",fontSize:"sm"},"Gambar"," ",e.createElement(s,{display:"inline",color:"red"},"*")),e.createElement($,{...S(),border:"2px dashed",borderColor:p?"blue.300":"gray.300",borderRadius:"md",p:10,textAlign:"center"},e.createElement(k,{...v()}),p?e.createElement(s,null,"Drop the files here ..."):e.createElement(s,null,"Drag 'n' drop some files here, or click to select files"),n&&e.createElement(K,{src:n,alt:"Preview",mt:4,borderRadius:"md",boxSize:"200px",objectFit:"cover"})),a.image&&e.createElement(_,{fontSize:"xs"},a.image))),e.createElement(M,null,e.createElement(g,{type:"submit",colorScheme:"blue",isLoading:x,loadingText:"Simpan"},e.createElement(u,{as:B,mr:2}),"Simpan"),e.createElement(g,{as:w,href:"/admin/destination/"+t.destination_uuid,colorScheme:"gray",ml:3},e.createElement(u,{as:I,mr:2}),"Kembali")))))};export{Ce as default};