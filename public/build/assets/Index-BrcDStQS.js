import{r as o,R as e,Y as b,a as v,I as C,y as S}from"./app-DPnmQNMl.js";import{P as y,l as k}from"./Pagination-EcorHWML.js";import{D as x}from"./Datatable-C3d8kgBW.js";import{A as I}from"./AdminLayout -B5LiPOup.js";import{F as w}from"./DeleteButton-GisBuC9l.js";import{C as D,a as z}from"./chunk-YQO7BFFX-DjfJuZn_.js";import{C as A}from"./chunk-2EW3JUUD-BRdUR3w7.js";import{H as B}from"./chunk-7OLJDQMT-CJSwRjv4.js";import{B as c}from"./chunk-UVUR7MCU-CmIpkDyX.js";import{F as n}from"./chunk-KRPLQIP4-CwPIyTBq.js";import{S as F}from"./chunk-3RSXBRAN-BFlJOCeO.js";import{I as R}from"./chunk-6CVSDS6C-ChT1bA7_.js";import{T}from"./chunk-2OOHT3W5-ChCwLuug.js";import"./chunk-3ASUQ6PA-DrJ3xbiw.js";import"./chunk-5MKCW436-BrFvw1lA.js";import"./chunk-G72KV6MB-CFzf8KEx.js";import"./chunk-MGVPL3OH-DWoBVmsh.js";import"./chunk-QINAG4RG-TnUMVetF.js";import"./chunk-X3PS6RUF-DTGnK-xB.js";import"./chunk-SPIKMR6I-D8fXho7g.js";import"./chunk-V7PAE35Z-ArVLID_a.js";import"./chunk-PULVB27S-BmB31oiW.js";import"./MapPinIcon-CIgvDU8k.js";import"./chunk-7JBTTEVG-CIlxP4pX.js";import"./chunk-NABYTFTG-CWJEsaVk.js";import"./tslib.es6-DjSP9Sqm.js";import"./XMarkIcon-CYqDitgq.js";const se=({auth:p,sessions:u,wallets:t})=>{const r=o.useRef(t.per_page),[m,s]=o.useState(!1),[i,d]=o.useState(""),f=a=>{r.current=parseInt(a.target.value),l()},g=a=>{a.preventDefault(),l()},l=()=>{s(!0),S.get("/admin/wallet",k.pickBy({perpage:r.current,search:i}),{onFinish:()=>s(!1),preserveScroll:!0,preserveState:!0})},h=a=>t.from+a,E=[{header:"#",accessor:null,width:"5"},{header:"Nama Bank",accessor:"nama_bank"},{header:"Nama Akun",accessor:"nama_akun"},{header:"Nomor Rekening",accessor:"nomor_rekening"},{header:"Aksi",accessor:"Aksi",width:"10",uri:"/admin/wallet"}];return e.createElement(I,{auth:p,sessions:u},e.createElement(b,{title:"Wallet"}),e.createElement(D,{p:2,w:"full",h:["auto","full"]},e.createElement(A,{display:"flex",justifyContent:"space-between",alignItems:"center"},e.createElement(B,{size:"md",fontWeight:"bold"},"Data Wallet"),e.createElement(c,{as:v,href:"/admin/wallet/create",colorScheme:"green",size:"sm"},e.createElement(C,{as:w,name:"plus",mr:2})," Tambah")),e.createElement(z,null,e.createElement(n,{flexDir:{base:"column",md:"row"},justifyContent:"space-between",alignItems:"center",gap:4,mb:4},e.createElement(F,{id:"perpage",size:"sm",name:"perpage",width:"auto",value:r.current,onChange:f},e.createElement("option",{value:"25"},"25"),e.createElement("option",{value:"50"},"50"),e.createElement("option",{value:"100"},"100"),e.createElement("option",{value:"250"},"250"),e.createElement("option",{value:"500"},"500")),e.createElement(n,{as:"form",gap:2,onSubmit:g},e.createElement(R,{size:"sm",id:"search",name:"search",type:"text",width:"auto",value:i,onChange:a=>d(a.target.value)}),e.createElement(c,{type:"submit",colorScheme:"blue",variant:"outline",size:"sm",isLoading:m,loadingText:"Cari"},"Cari"))),e.createElement(x,{columns:E,data:t.data,isLoading:m,calculateIndex:h}),e.createElement(n,{gap:4,flexDir:{base:"column",md:"row"},justifyContent:{base:"center",md:"space-between"},alignItems:"center",mt:4},e.createElement(T,{color:"gray.500",fontSize:"sm"},"Showing ",t.from??0," to ",t.to??0," of"," ",t.total??0),e.createElement(y,{links:t.links??[]})))))};export{se as default};