import{r as o,R as e,Y as b,a as v,I as C,y as S}from"./app-DCVUtIqw.js";import{P as y,l as k}from"./Pagination-DPgUmiQw.js";import{D as x}from"./Datatable-rl84GdqW.js";import{A as I}from"./AdminLayout -CAXSqyn7.js";import{F as w}from"./DeleteButton-C2gVDMtl.js";import{C as D,a as z}from"./chunk-YQO7BFFX-DXVB8yjZ.js";import{C as A}from"./chunk-2EW3JUUD-D0SPJ-En.js";import{H as B}from"./chunk-7OLJDQMT-Cv4BbNAv.js";import{B as c}from"./chunk-UVUR7MCU-87Ltadkx.js";import{F as n}from"./chunk-KRPLQIP4-Gdrq63o7.js";import{S as F}from"./chunk-3RSXBRAN-aOto4z4c.js";import{I as R}from"./chunk-6CVSDS6C-DslWv91l.js";import{T}from"./chunk-2OOHT3W5-BlFa8Fv_.js";import"./chunk-3ASUQ6PA-Cs92Ss6H.js";import"./chunk-5MKCW436-CnR9LSu-.js";import"./chunk-G72KV6MB-ClQoAU4d.js";import"./chunk-OA6OURRG-C2SSpgxl.js";import"./chunk-MGVPL3OH-C5JrAIlD.js";import"./chunk-QINAG4RG-CJmaY4ZB.js";import"./chunk-X3PS6RUF-DEDFK66O.js";import"./chunk-SPIKMR6I-DpZJN6Nr.js";import"./chunk-V7PAE35Z-BEXAZOsh.js";import"./chunk-PULVB27S-DupAKUVl.js";import"./ChevronDownIcon-4oo1iQ45.js";import"./chunk-7JBTTEVG-AZ8puJBW.js";import"./chunk-NABYTFTG-DSNTBKXV.js";import"./tslib.es6-DjSP9Sqm.js";import"./MapPinIcon-DvMUsgFM.js";import"./chunk-6RSEZNRH-DWTnfycA.js";import"./chunk-4FCEGNGT-DPpDXOLV.js";import"./XMarkIcon-DOhEOGCN.js";import"./chunk-56K2BSAJ-3Mdre515.js";const ue=({auth:p,sessions:u,wallets:t})=>{const r=o.useRef(t.per_page),[m,i]=o.useState(!1),[s,d]=o.useState(""),f=a=>{r.current=parseInt(a.target.value),l()},g=a=>{a.preventDefault(),l()},l=()=>{i(!0),S.get("/admin/wallet",k.pickBy({perpage:r.current,search:s}),{onFinish:()=>i(!1),preserveScroll:!0,preserveState:!0})},h=a=>t.from+a,E=[{header:"#",accessor:null,width:"5"},{header:"Nama Bank",accessor:"nama_bank"},{header:"Nama Akun",accessor:"nama_akun"},{header:"Nomor Rekening",accessor:"nomor_rekening"},{header:"Aksi",accessor:"Aksi",width:"10",uri:"/admin/wallet"}];return e.createElement(I,{auth:p,sessions:u},e.createElement(b,{title:"Wallet"}),e.createElement(D,{p:2,w:"full",h:["auto","full"]},e.createElement(A,{display:"flex",justifyContent:"space-between",alignItems:"center"},e.createElement(B,{size:"md",fontWeight:"bold"},"Data Wallet"),e.createElement(c,{as:v,href:"/admin/wallet/create",colorScheme:"green",size:"sm"},e.createElement(C,{as:w,name:"plus",mr:2})," Tambah")),e.createElement(z,null,e.createElement(n,{flexDir:{base:"column",md:"row"},justifyContent:"space-between",alignItems:"center",gap:4,mb:4},e.createElement(F,{id:"perpage",size:"sm",name:"perpage",width:"auto",value:r.current,onChange:f},e.createElement("option",{value:"25"},"25"),e.createElement("option",{value:"50"},"50"),e.createElement("option",{value:"100"},"100"),e.createElement("option",{value:"250"},"250"),e.createElement("option",{value:"500"},"500")),e.createElement(n,{as:"form",gap:2,onSubmit:g},e.createElement(R,{size:"sm",id:"search",name:"search",type:"text",width:"auto",value:s,onChange:a=>d(a.target.value)}),e.createElement(c,{type:"submit",colorScheme:"blue",variant:"outline",size:"sm",isLoading:m,loadingText:"Cari"},"Cari"))),e.createElement(x,{columns:E,data:t.data,isLoading:m,calculateIndex:h}),e.createElement(n,{gap:4,flexDir:{base:"column",md:"row"},justifyContent:{base:"center",md:"space-between"},alignItems:"center",mt:4},e.createElement(T,{color:"gray.500",fontSize:"sm"},"Showing ",t.from??0," to ",t.to??0," of"," ",t.total??0),e.createElement(y,{links:t.links??[]})))))};export{ue as default};
