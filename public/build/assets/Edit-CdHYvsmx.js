import{r as f,W as y,R as e,Y as R,I as u,a as w}from"./app-CRUbJu4Z.js";import{u as z}from"./index-DPNewXnO.js";import{A}from"./AdminLayout -CAyLJs5J.js";import{F as B}from"./BookmarkIcon-CC9ky48A.js";import{F as I}from"./ArrowLeftIcon-pEpefhP8.js";import{u as L}from"./chunk-6RSEZNRH-CW-Q5ZHl.js";import{C as P,a as T}from"./chunk-YQO7BFFX-BCfAnfk7.js";import{C as G}from"./chunk-2EW3JUUD-BRnsAHIO.js";import{H}from"./chunk-7OLJDQMT-CSaLqb1Z.js";import{F as W}from"./chunk-56K2BSAJ-B_XMpqjX.js";import{F as j,a as _}from"./chunk-H46NUPBZ-B6kUYA5q.js";import{T as s}from"./chunk-2OOHT3W5-DdxI42KR.js";import{B as $}from"./chunk-PULVB27S-B9ln4okT.js";import{I as k}from"./chunk-6CVSDS6C-D73OriWR.js";import{I as K}from"./chunk-QINAG4RG-BbSWCnMv.js";import{C as M}from"./chunk-BDSTZZXD-UGsc0v3H.js";import{B as g}from"./chunk-UVUR7MCU-eTSeZI0_.js";import"./index-AkgZLzwr.js";import"./tslib.es6-DjSP9Sqm.js";import"./chunk-KRPLQIP4-DNxTn6Yp.js";import"./ChevronDownIcon-Aa-CVtjH.js";import"./chunk-7JBTTEVG-ClGgynL9.js";import"./chunk-3ASUQ6PA-BN5Hmi5c.js";import"./chunk-5MKCW436-D1mH52k9.js";import"./chunk-G72KV6MB-CD-aFYuC.js";import"./chunk-V7PAE35Z-bcQCC_dJ.js";import"./chunk-SPIKMR6I-Dljxbnrn.js";import"./chunk-NABYTFTG-D5F2i9a3.js";import"./MapPinIcon-D2415P5-.js";import"./UserCircleIcon-COBS2074.js";import"./chunk-X3PS6RUF-DrYU6TQ6.js";const De=({auth:E,sessions:b,destinationImage:t})=>{const l=L(),[n,o]=f.useState(null),{data:U,setData:h,post:F,processing:x,errors:a}=y({_method:"put",image:""});f.useEffect(()=>{t.image&&o(t.image)},[t.image]);const C=i=>{i.preventDefault(),F(`/destination-image/${t.uuid}`)},D=(i,c)=>{if(c.length>0){c.forEach(r=>{r.errors.forEach(d=>{d.code==="file-too-large"?l({title:"Error",status:"error",description:"File is too large",duration:3e3,isClosable:!0,position:"top-right"}):d.code==="file-invalid-type"&&l({title:"Error",status:"error",description:"File is invalid type",duration:3e3,isClosable:!0,position:"top-right"})})}),o(null);return}const m=i[0];if(m){h("image",m);const r=new FileReader;r.onloadend=()=>{o(r.result)},r.readAsDataURL(m)}},{getRootProps:S,getInputProps:v,isDragActive:p}=z({onDrop:D,accept:"image/jpg,image/jpeg,image/png",maxSize:2*1024*1024,multiple:!1});return e.createElement(A,{auth:E,sessions:b},e.createElement(R,{title:"Edit Gambar Destinasi"}),e.createElement(P,{maxW:"xl",w:"full",p:2,h:"auto"},e.createElement(G,{pb:0},e.createElement(H,{size:"md",fontWeight:"bold"},"Edit Gambar Destinasi")),e.createElement("form",{onSubmit:C},e.createElement(T,{pb:0},e.createElement(W,{mb:3,isInvalid:a.image},e.createElement(j,{htmlFor:"image",fontSize:"sm"},"Gambar"," ",e.createElement(s,{display:"inline",color:"red"},"*")),e.createElement($,{...S(),border:"2px dashed",borderColor:p?"blue.300":"gray.300",borderRadius:"md",p:10,textAlign:"center"},e.createElement(k,{...v()}),p?e.createElement(s,null,"Drop the files here ..."):e.createElement(s,null,"Drag 'n' drop some files here, or click to select files"),n&&e.createElement(K,{src:n,alt:"Preview",mt:4,borderRadius:"md",boxSize:"200px",objectFit:"cover"})),a.image&&e.createElement(_,{fontSize:"xs"},a.image))),e.createElement(M,null,e.createElement(g,{type:"submit",colorScheme:"blue",isLoading:x,loadingText:"Simpan"},e.createElement(u,{as:B,mr:2}),"Simpan"),e.createElement(g,{as:w,href:"/destination/"+t.destination_uuid,colorScheme:"gray",ml:3},e.createElement(u,{as:I,mr:2}),"Kembali")))))};export{De as default};
