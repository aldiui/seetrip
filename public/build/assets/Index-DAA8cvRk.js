import{r as o,R as e,Y as v,a as b,I as w,y as C}from"./app-DCVUtIqw.js";import{P as S,l as y}from"./Pagination-DPgUmiQw.js";import{D as x}from"./Datatable-rl84GdqW.js";import{A as I}from"./AdminLayout -CAXSqyn7.js";import{F as D}from"./DeleteButton-C2gVDMtl.js";import{C as z,a as A}from"./chunk-YQO7BFFX-DXVB8yjZ.js";import{C as k}from"./chunk-2EW3JUUD-D0SPJ-En.js";import{H as F}from"./chunk-7OLJDQMT-Cv4BbNAv.js";import{B as c}from"./chunk-UVUR7MCU-87Ltadkx.js";import{F as m}from"./chunk-KRPLQIP4-Gdrq63o7.js";import{S as R}from"./chunk-3RSXBRAN-aOto4z4c.js";import{I as T}from"./chunk-6CVSDS6C-DslWv91l.js";import{T as B}from"./chunk-2OOHT3W5-BlFa8Fv_.js";import"./chunk-3ASUQ6PA-Cs92Ss6H.js";import"./chunk-5MKCW436-CnR9LSu-.js";import"./chunk-G72KV6MB-ClQoAU4d.js";import"./chunk-OA6OURRG-C2SSpgxl.js";import"./chunk-MGVPL3OH-C5JrAIlD.js";import"./chunk-QINAG4RG-CJmaY4ZB.js";import"./chunk-X3PS6RUF-DEDFK66O.js";import"./chunk-SPIKMR6I-DpZJN6Nr.js";import"./chunk-V7PAE35Z-BEXAZOsh.js";import"./chunk-PULVB27S-DupAKUVl.js";import"./ChevronDownIcon-4oo1iQ45.js";import"./chunk-7JBTTEVG-AZ8puJBW.js";import"./chunk-NABYTFTG-DSNTBKXV.js";import"./tslib.es6-DjSP9Sqm.js";import"./MapPinIcon-DvMUsgFM.js";import"./chunk-6RSEZNRH-DWTnfycA.js";import"./chunk-4FCEGNGT-DPpDXOLV.js";import"./XMarkIcon-DOhEOGCN.js";import"./chunk-56K2BSAJ-3Mdre515.js";const ue=({auth:p,sessions:u,users:t})=>{const r=o.useRef(t.per_page),[n,i]=o.useState(!1),[s,d]=o.useState(""),f=a=>{r.current=parseInt(a.target.value),l()},h=a=>{a.preventDefault(),l()},l=()=>{i(!0),C.get("/admin/user",y.pickBy({perpage:r.current,search:s}),{onFinish:()=>i(!1),preserveScroll:!0,preserveState:!0})},g=a=>t.from+a,E=[{header:"#",accessor:null,width:"5"},{header:"Avatar",accessor:"AvatarUser",width:"15"},{header:"Nama",accessor:"nama"},{header:"Email",accessor:"email"},{header:"Role",accessor:"role"},{header:"Aksi",accessor:"Aksi",width:"10",uri:"/admin/user"}];return e.createElement(I,{auth:p,sessions:u},e.createElement(v,{title:"User"}),e.createElement(z,{p:2,w:"full",h:["auto","full"]},e.createElement(k,{display:"flex",justifyContent:"space-between",alignItems:"center"},e.createElement(F,{size:"md",fontWeight:"bold"},"Data User"),e.createElement(c,{as:b,href:"/admin/user/create",colorScheme:"green",size:"sm"},e.createElement(w,{as:D,name:"plus",mr:2})," Tambah")),e.createElement(A,null,e.createElement(m,{flexDir:{base:"column",md:"row"},justifyContent:"space-between",alignItems:"center",gap:4,mb:4},e.createElement(R,{id:"perpage",size:"sm",name:"perpage",width:"auto",value:r.current,onChange:f},e.createElement("option",{value:"25"},"25"),e.createElement("option",{value:"50"},"50"),e.createElement("option",{value:"100"},"100"),e.createElement("option",{value:"250"},"250"),e.createElement("option",{value:"500"},"500")),e.createElement(m,{as:"form",gap:2,onSubmit:h},e.createElement(T,{size:"sm",id:"search",name:"search",type:"text",width:"auto",value:s,onChange:a=>d(a.target.value)}),e.createElement(c,{type:"submit",colorScheme:"blue",variant:"outline",size:"sm",isLoading:n,loadingText:"Cari"},"Cari"))),e.createElement(x,{columns:E,data:t.data,isLoading:n,calculateIndex:g}),e.createElement(m,{gap:4,flexDir:{base:"column",md:"row"},justifyContent:{base:"center",md:"space-between"},alignItems:"center",mt:4},e.createElement(B,{color:"gray.500",fontSize:"sm"},"Showing ",t.from??0," to ",t.to??0," of"," ",t.total??0),e.createElement(S,{links:t.links??[]})))))};export{ue as default};