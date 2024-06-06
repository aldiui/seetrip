import{r as I,W as R,R as e,Y as k,I as h,a as D}from"./app-ejYvf9I6.js";import{A as P}from"./AdminLayout -DsdHsFTC.js";import{u as _}from"./index-D44hhnrd.js";import{F as A}from"./BookmarkIcon-B0US5lbf.js";import{F as B}from"./ArrowLeftIcon-Ce2Pljhj.js";import{C as T,a as H,b as L}from"./chunk-YQO7BFFX-BKgxr97c.js";import{H as U}from"./chunk-7OLJDQMT-BJ9HDscd.js";import{F as l,I as s}from"./chunk-6CVSDS6C-Bo-pWQ03.js";import{F as n,a as m,C as W}from"./chunk-H46NUPBZ-DmgQdsBx.js";import{B as j}from"./chunk-PULVB27S-DDjE-Xuc.js";import{T as r}from"./chunk-2OOHT3W5-DFNUYQAk.js";import{I as K}from"./chunk-QINAG4RG-DrTx8F4b.js";import{S as N}from"./chunk-3RSXBRAN-Cm2CTRoQ.js";import{B as g}from"./chunk-UVUR7MCU-BjWsXQ7b.js";import"./chunk-KRPLQIP4-D64IDwbM.js";import"./ChevronDownIcon-DZRVX3ZZ.js";import"./chunk-7JBTTEVG-Dbobh0N6.js";import"./chunk-5MKCW436-DEJ5ysAq.js";import"./chunk-G72KV6MB-zvdQHsNT.js";import"./chunk-V7PAE35Z-Bco8DSa1.js";import"./chunk-SPIKMR6I-DRedfjXK.js";import"./chunk-NABYTFTG-C-PE8_xX.js";import"./tslib.es6-DjSP9Sqm.js";import"./chunk-X3PS6RUF-DH-d2EX6.js";const Ee=({auth:b,sessions:w})=>{const[p,E]=I.useState(null),{data:i,setData:o,post:S,processing:x,errors:a}=R({nama:"",avatar:"",email:"",password:"",konfirmasi_password:"",role:"user",phone:"",saldo:"0"}),y=t=>{t.preventDefault(),S("/admin/user")},F=(t,u)=>{if(u.length>0){u.forEach(c=>{c.errors.forEach(v=>{v.code==="file-too-large"?console.error("File is too large"):v.code==="file-invalid-type"&&console.error("Invalid file type")})}),E(null);return}const d=t[0];if(d){o("avatar",d);const c=new FileReader;c.onloadend=()=>{E(c.result)},c.readAsDataURL(d)}},{getRootProps:z,getInputProps:C,isDragActive:f}=_({onDrop:F,accept:"image/jpg,image/jpeg,image/png",maxSize:2*1024*1024,multiple:!1});return e.createElement(P,{auth:b,sessions:w},e.createElement(k,{title:"Tambah User"}),e.createElement(T,{maxW:"xl",w:"full",p:2,h:"auto"},e.createElement(H,{pb:0},e.createElement(U,{size:"md",fontWeight:"bold"},"Tambah User")),e.createElement("form",{onSubmit:y},e.createElement(L,{pb:0},e.createElement(l,{mb:3,isInvalid:a.avatar},e.createElement(n,{htmlFor:"avatar",fontSize:"sm"},"Avatar"),e.createElement(j,{...z(),border:"2px dashed",borderColor:f?"blue.300":"gray.300",borderRadius:"md",p:10,textAlign:"center"},e.createElement(s,{...C()}),f?e.createElement(r,null,"Drop the files here ..."):e.createElement(r,null,"Drag 'n' drop some files here, or click to select files"),p&&e.createElement(K,{src:p,alt:"Preview",mt:4,borderRadius:"md",boxSize:"200px",objectFit:"cover"})),a.avatar&&e.createElement(m,{fontSize:"xs"},a.avatar)),e.createElement(l,{mb:3,isInvalid:a.nama},e.createElement(n,{htmlFor:"nama",fontSize:"sm"},"Nama",e.createElement(r,{display:"inline",color:"red"},"*")),e.createElement(s,{type:"text",id:"nama",value:i.nama,onChange:t=>o("nama",t.target.value)}),a.nama&&e.createElement(m,{fontSize:"xs"},a.nama)),e.createElement(l,{mb:3,isInvalid:a.email},e.createElement(n,{htmlFor:"email",fontSize:"sm"},"Email"," ",e.createElement(r,{display:"inline",color:"red"},"*")),e.createElement(s,{type:"email",id:"email",value:i.email,onChange:t=>o("email",t.target.value)}),a.email&&e.createElement(m,{fontSize:"xs"},a.email)),e.createElement(l,{mb:3,isInvalid:a.password},e.createElement(n,{htmlFor:"password",fontSize:"sm"},"Password"," ",e.createElement(r,{display:"inline",color:"red"},"*")),e.createElement(s,{type:"password",id:"password",value:i.password,onChange:t=>o("password",t.target.value)}),a.password&&e.createElement(m,{fontSize:"xs"},a.password)),e.createElement(l,{mb:3,isInvalid:a.konfirmasi_password},e.createElement(n,{htmlFor:"konfirmasi_password",fontSize:"sm"},"Konfirmasi Password"," ",e.createElement(r,{display:"inline",color:"red"},"*")),e.createElement(s,{type:"password",id:"konfirmasi_password",value:i.konfirmasi_password,onChange:t=>o("konfirmasi_password",t.target.value)}),a.konfirmasi_password&&e.createElement(m,{fontSize:"xs"},a.konfirmasi_password)),e.createElement(l,{mb:3,isInvalid:a.phone},e.createElement(n,{htmlFor:"phone",fontSize:"sm"},"No HP"," ",e.createElement(r,{display:"inline",color:"red"},"*")),e.createElement(s,{type:"text",id:"phone",value:i.phone,onChange:t=>o("phone",t.target.value)}),a.phone&&e.createElement(m,{fontSize:"xs"},a.phone)),e.createElement(l,{mb:3,isInvalid:a.saldo},e.createElement(n,{htmlFor:"saldo",fontSize:"sm"},"Saldo"," ",e.createElement(r,{display:"inline",color:"red"},"*")),e.createElement(s,{type:"numeric",id:"saldo",value:i.saldo,onChange:t=>o("saldo",t.target.value)}),a.saldo&&e.createElement(m,{fontSize:"xs"},a.saldo)),e.createElement(l,{mb:3,isInvalid:a.role},e.createElement(n,{htmlFor:"role",fontSize:"sm"},"Role"," ",e.createElement(r,{display:"inline",color:"red"},"*")),e.createElement(N,{type:"text",id:"role",value:i.role,onChange:t=>o("role",t.target.value)},e.createElement("option",{value:""},"Pilih Role"),e.createElement("option",{value:"user"},"user"),e.createElement("option",{value:"admin"},"admin")),a.role&&e.createElement(m,{fontSize:"xs"},a.role))),e.createElement(W,null,e.createElement(g,{type:"submit",colorScheme:"blue",isLoading:x,loadingText:"Simpan"},e.createElement(h,{as:A,mr:2}),"Simpan"),e.createElement(g,{as:D,href:"/admin/user",colorScheme:"gray",ml:3},e.createElement(h,{as:B,mr:2}),"Kembali")))))};export{Ee as default};