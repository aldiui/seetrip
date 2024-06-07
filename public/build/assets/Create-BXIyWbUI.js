import{r as R,W as k,R as e,Y as D,I as g,a as P}from"./app-DCVUtIqw.js";import{A as _}from"./AdminLayout -CAXSqyn7.js";import{u as A}from"./index-x-flaPXv.js";import{F as T}from"./BookmarkIcon-mAFX88TI.js";import{F as B}from"./ArrowLeftIcon-CAl_QhjE.js";import{u as H}from"./chunk-6RSEZNRH-DWTnfycA.js";import{C as L,a as U}from"./chunk-YQO7BFFX-DXVB8yjZ.js";import{C as W}from"./chunk-2EW3JUUD-D0SPJ-En.js";import{H as j}from"./chunk-7OLJDQMT-Cv4BbNAv.js";import{F as l}from"./chunk-56K2BSAJ-3Mdre515.js";import{F as m,a as i}from"./chunk-H46NUPBZ-CO9d4yfX.js";import{B as K}from"./chunk-PULVB27S-DupAKUVl.js";import{I as s}from"./chunk-6CVSDS6C-DslWv91l.js";import{T as r}from"./chunk-2OOHT3W5-BlFa8Fv_.js";import{I as N}from"./chunk-QINAG4RG-CJmaY4ZB.js";import{S as M}from"./chunk-3RSXBRAN-aOto4z4c.js";import{C as Y}from"./chunk-BDSTZZXD-ldmz08Vi.js";import{B as b}from"./chunk-UVUR7MCU-87Ltadkx.js";import"./chunk-KRPLQIP4-Gdrq63o7.js";import"./ChevronDownIcon-4oo1iQ45.js";import"./chunk-7JBTTEVG-AZ8puJBW.js";import"./chunk-3ASUQ6PA-Cs92Ss6H.js";import"./chunk-5MKCW436-CnR9LSu-.js";import"./chunk-G72KV6MB-ClQoAU4d.js";import"./chunk-V7PAE35Z-BEXAZOsh.js";import"./chunk-SPIKMR6I-DpZJN6Nr.js";import"./chunk-NABYTFTG-DSNTBKXV.js";import"./tslib.es6-DjSP9Sqm.js";import"./MapPinIcon-DvMUsgFM.js";import"./index-BJ-EYT7Z.js";import"./chunk-X3PS6RUF-DEDFK66O.js";const xe=({auth:w,sessions:S})=>{const c=H(),[E,f]=R.useState(null),{data:n,setData:o,post:x,processing:F,errors:t}=k({nama:"",avatar:"",email:"",password:"",konfirmasi_password:"",role:"user",phone:"",saldo:"0"}),y=a=>{a.preventDefault(),x("/admin/user")},z=(a,h)=>{if(h.length>0){h.forEach(p=>{p.errors.forEach(v=>{v.code==="file-too-large"?c({title:"Error",status:"error",description:"File is too large",duration:3e3,isClosable:!0,position:"top-right"}):v.code==="file-invalid-type"&&c({title:"Error",status:"error",description:"File is invalid type",duration:3e3,isClosable:!0,position:"top-right"})})}),f(null);return}const d=a[0];if(d){o("avatar",d);const p=new FileReader;p.onloadend=()=>{f(p.result)},p.readAsDataURL(d)}},{getRootProps:C,getInputProps:I,isDragActive:u}=A({onDrop:z,accept:"image/jpg,image/jpeg,image/png",maxSize:10*1024*1024,multiple:!1});return e.createElement(_,{auth:w,sessions:S},e.createElement(D,{title:"Tambah User"}),e.createElement(L,{maxW:"xl",w:"full",p:2,h:"auto"},e.createElement(W,{pb:0},e.createElement(j,{size:"md",fontWeight:"bold"},"Tambah User")),e.createElement("form",{onSubmit:y},e.createElement(U,{pb:0},e.createElement(l,{mb:3,isInvalid:t.avatar},e.createElement(m,{htmlFor:"avatar",fontSize:"sm"},"Avatar"),e.createElement(K,{...C(),border:"2px dashed",borderColor:u?"blue.300":"gray.300",borderRadius:"md",p:10,textAlign:"center"},e.createElement(s,{...I()}),u?e.createElement(r,null,"Drop the files here ..."):e.createElement(r,null,"Drag 'n' drop some files here, or click to select files"),E&&e.createElement(N,{src:E,alt:"Preview",mt:4,borderRadius:"md",boxSize:"200px",objectFit:"cover"})),t.avatar&&e.createElement(i,{fontSize:"xs"},t.avatar)),e.createElement(l,{mb:3,isInvalid:t.nama},e.createElement(m,{htmlFor:"nama",fontSize:"sm"},"Nama",e.createElement(r,{display:"inline",color:"red"},"*")),e.createElement(s,{type:"text",id:"nama",value:n.nama,onChange:a=>o("nama",a.target.value)}),t.nama&&e.createElement(i,{fontSize:"xs"},t.nama)),e.createElement(l,{mb:3,isInvalid:t.email},e.createElement(m,{htmlFor:"email",fontSize:"sm"},"Email"," ",e.createElement(r,{display:"inline",color:"red"},"*")),e.createElement(s,{type:"email",id:"email",value:n.email,onChange:a=>o("email",a.target.value)}),t.email&&e.createElement(i,{fontSize:"xs"},t.email)),e.createElement(l,{mb:3,isInvalid:t.password},e.createElement(m,{htmlFor:"password",fontSize:"sm"},"Password"," ",e.createElement(r,{display:"inline",color:"red"},"*")),e.createElement(s,{type:"password",id:"password",value:n.password,onChange:a=>o("password",a.target.value)}),t.password&&e.createElement(i,{fontSize:"xs"},t.password)),e.createElement(l,{mb:3,isInvalid:t.konfirmasi_password},e.createElement(m,{htmlFor:"konfirmasi_password",fontSize:"sm"},"Konfirmasi Password"," ",e.createElement(r,{display:"inline",color:"red"},"*")),e.createElement(s,{type:"password",id:"konfirmasi_password",value:n.konfirmasi_password,onChange:a=>o("konfirmasi_password",a.target.value)}),t.konfirmasi_password&&e.createElement(i,{fontSize:"xs"},t.konfirmasi_password)),e.createElement(l,{mb:3,isInvalid:t.phone},e.createElement(m,{htmlFor:"phone",fontSize:"sm"},"No HP"," ",e.createElement(r,{display:"inline",color:"red"},"*")),e.createElement(s,{type:"text",id:"phone",value:n.phone,onChange:a=>o("phone",a.target.value)}),t.phone&&e.createElement(i,{fontSize:"xs"},t.phone)),e.createElement(l,{mb:3,isInvalid:t.saldo},e.createElement(m,{htmlFor:"saldo",fontSize:"sm"},"Saldo"," ",e.createElement(r,{display:"inline",color:"red"},"*")),e.createElement(s,{type:"numeric",id:"saldo",value:n.saldo,onChange:a=>o("saldo",a.target.value)}),t.saldo&&e.createElement(i,{fontSize:"xs"},t.saldo)),e.createElement(l,{mb:3,isInvalid:t.role},e.createElement(m,{htmlFor:"role",fontSize:"sm"},"Role"," ",e.createElement(r,{display:"inline",color:"red"},"*")),e.createElement(M,{type:"text",id:"role",value:n.role,onChange:a=>o("role",a.target.value)},e.createElement("option",{value:""},"Pilih Role"),e.createElement("option",{value:"user"},"user"),e.createElement("option",{value:"admin"},"admin")),t.role&&e.createElement(i,{fontSize:"xs"},t.role))),e.createElement(Y,null,e.createElement(b,{type:"submit",colorScheme:"blue",isLoading:F,loadingText:"Simpan"},e.createElement(g,{as:T,mr:2}),"Simpan"),e.createElement(b,{as:P,href:"/admin/user",colorScheme:"gray",ml:3},e.createElement(g,{as:B,mr:2}),"Kembali")))))};export{xe as default};
