import{r as o,R as e,Y as b,a as v,I as S,y}from"./app-ejYvf9I6.js";import{D as C,P as k,l as x}from"./Datatable-CZkOyYiQ.js";import{A as I}from"./AdminLayout -DsdHsFTC.js";import{F as w}from"./DeleteButton-CdnU30bv.js";import{C as D,a as z,b as A}from"./chunk-YQO7BFFX-BKgxr97c.js";import{H as B}from"./chunk-7OLJDQMT-BJ9HDscd.js";import{B as c}from"./chunk-UVUR7MCU-BjWsXQ7b.js";import{F as n}from"./chunk-KRPLQIP4-D64IDwbM.js";import{S as F}from"./chunk-3RSXBRAN-Cm2CTRoQ.js";import{I as R}from"./chunk-6CVSDS6C-Bo-pWQ03.js";import{T}from"./chunk-2OOHT3W5-DFNUYQAk.js";import"./chunk-QINAG4RG-DrTx8F4b.js";import"./chunk-X3PS6RUF-DH-d2EX6.js";import"./chunk-SPIKMR6I-DRedfjXK.js";import"./chunk-V7PAE35Z-Bco8DSa1.js";import"./chunk-PULVB27S-DDjE-Xuc.js";import"./ChevronDownIcon-DZRVX3ZZ.js";import"./chunk-7JBTTEVG-Dbobh0N6.js";import"./chunk-5MKCW436-DEJ5ysAq.js";import"./chunk-G72KV6MB-zvdQHsNT.js";import"./chunk-NABYTFTG-C-PE8_xX.js";import"./tslib.es6-DjSP9Sqm.js";import"./XMarkIcon-CbvqpJKJ.js";const re=({auth:p,sessions:u,wallets:t})=>{const r=o.useRef(t.per_page),[m,s]=o.useState(!1),[i,d]=o.useState(""),f=a=>{r.current=parseInt(a.target.value),l()},g=a=>{a.preventDefault(),l()},l=()=>{s(!0),y.get("/wallet",x.pickBy({perpage:r.current,search:i}),{onFinish:()=>s(!1),preserveScroll:!0,preserveState:!0})},h=a=>t.from+a,E=[{header:"#",accessor:null,width:"5"},{header:"Nama Bank",accessor:"nama_bank"},{header:"Nama Akun",accessor:"nama_akun"},{header:"Nomor Rekening",accessor:"nomor_rekening"},{header:"Aksi",accessor:"Aksi",width:"10",uri:"/wallet"}];return e.createElement(I,{auth:p,sessions:u},e.createElement(b,{title:"Wallet"}),e.createElement(D,{p:2,w:"full",h:["auto","full"]},e.createElement(z,{display:"flex",justifyContent:"space-between",alignItems:"center"},e.createElement(B,{size:"md",fontWeight:"bold"},"Data Wallet"),e.createElement(c,{as:v,href:"/wallet/create",colorScheme:"green",size:"sm"},e.createElement(S,{as:w,name:"plus",mr:2})," Tambah")),e.createElement(A,null,e.createElement(n,{flexDir:{base:"column",md:"row"},justifyContent:"space-between",alignItems:"center",gap:4,mb:4},e.createElement(F,{id:"perpage",size:"sm",name:"perpage",width:"auto",value:r.current,onChange:f},e.createElement("option",{value:"25"},"25"),e.createElement("option",{value:"50"},"50"),e.createElement("option",{value:"100"},"100"),e.createElement("option",{value:"250"},"250"),e.createElement("option",{value:"500"},"500")),e.createElement(n,{as:"form",gap:2,onSubmit:g},e.createElement(R,{size:"sm",id:"search",name:"search",type:"text",width:"auto",value:i,onChange:a=>d(a.target.value)}),e.createElement(c,{type:"submit",colorScheme:"blue",variant:"outline",size:"sm",isLoading:m,loadingText:"Cari"},"Cari"))),e.createElement(C,{columns:E,data:t.data,isLoading:m,calculateIndex:h}),e.createElement(n,{gap:4,flexDir:{base:"column",md:"row"},justifyContent:{base:"center",md:"space-between"},alignItems:"center",mt:4},e.createElement(T,{color:"gray.500",fontSize:"sm"},"Showing ",t.from??0," to ",t.to??0," of"," ",t.total??0),e.createElement(k,{links:t.links??[]})))))};export{re as default};