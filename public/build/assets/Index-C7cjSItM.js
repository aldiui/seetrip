import{r as s,j as e,Y as j,a as b,I as v,y as w}from"./app-JHr847d-.js";import{P as y,l as C}from"./Pagination-B1vU9_RJ.js";import{D as S}from"./Datatable-DnKx9jJz.js";import{A as D}from"./AdminLayout -Bc3andDT.js";import{F as I}from"./PlusIcon-CWvcbNGd.js";import{C as k,a as z}from"./chunk-YQO7BFFX-DSZLBsX_.js";import{C as F}from"./chunk-2EW3JUUD-BnP4_yfU.js";import{H as T}from"./chunk-7OLJDQMT-AfpAcD5m.js";import{B as p}from"./chunk-UVUR7MCU-xK3lE66g.js";import{F as o}from"./chunk-KRPLQIP4-D2gzZcl_.js";import{S as A}from"./chunk-3RSXBRAN-DMxxMGji.js";import{I as B}from"./chunk-6CVSDS6C-DYEn1HBN.js";import{T as L}from"./chunk-2OOHT3W5-CSJh4K3n.js";import"./chunk-3ASUQ6PA-DZHSwCkz.js";import"./chunk-5MKCW436-CDR3RVuy.js";import"./chunk-G72KV6MB-CldgvVEv.js";import"./DeleteButton-CqurOhRN.js";import"./chunk-NABYTFTG-B-MaHP8x.js";import"./tslib.es6-DjSP9Sqm.js";import"./chunk-7JBTTEVG-Dz6D23Ef.js";import"./chunk-4FCEGNGT-BxbI6Gh6.js";import"./XMarkIcon-BXD5zn01.js";import"./chunk-OA6OURRG-CRp3hkC4.js";import"./chunk-MGVPL3OH-DGTYRztJ.js";import"./chunk-QINAG4RG-D-h7J8oK.js";import"./chunk-X3PS6RUF-VuPBMW7K.js";import"./chunk-SPIKMR6I-BlSDUyza.js";import"./chunk-V7PAE35Z-D4m-ilcb.js";import"./chunk-PULVB27S-H6C7mPE7.js";import"./ChevronDownIcon-vE-s4u4y.js";import"./MapPinIcon-CNmZlcmu.js";import"./chunk-6RSEZNRH-Bc2GE4v1.js";import"./chunk-56K2BSAJ-B5oYsPph.js";const ue=({auth:c,sessions:d,destinations:r})=>{const a=s.useRef(r.per_page),[i,n]=s.useState(!1),[m,u]=s.useState(""),h=t=>{a.current=parseInt(t.target.value),l()},x=t=>{t.preventDefault(),l()},l=()=>{n(!0),w.get("/user/destination",C.pickBy({perpage:a.current,search:m}),{onFinish:()=>n(!1),preserveScroll:!0,preserveState:!0})},f=t=>r.from+t,g=[{header:"#",accessor:null,width:"5"},{header:"Nama Destinasi",accessor:"nama"},{header:"Lokasi",accessor:"lokasi"},{header:"Kategori",accessor:"category.nama"},{header:"Aksi",accessor:"Aksi",width:"10",uri:"/user/destination",show:!0}];return e.jsxs(D,{auth:c,sessions:d,children:[e.jsx(j,{title:"Destinasi"}),e.jsxs(k,{p:2,w:"full",h:["auto","full"],children:[e.jsxs(F,{display:"flex",justifyContent:"space-between",alignItems:"center",children:[e.jsx(T,{size:"md",fontWeight:"bold",children:"Data Destinasi"}),e.jsxs(p,{as:b,href:"/user/destination/create",colorScheme:"green",size:"sm",children:[e.jsx(v,{as:I,name:"plus",mr:2})," Tambah"]})]}),e.jsxs(z,{children:[e.jsxs(o,{flexDir:{base:"column",md:"row"},justifyContent:"space-between",alignItems:"center",gap:4,mb:4,children:[e.jsxs(A,{id:"perpage",size:"sm",name:"perpage",width:"auto",value:a.current,onChange:h,children:[e.jsx("option",{value:"25",children:"25"}),e.jsx("option",{value:"50",children:"50"}),e.jsx("option",{value:"100",children:"100"}),e.jsx("option",{value:"250",children:"250"}),e.jsx("option",{value:"500",children:"500"})]}),e.jsxs(o,{as:"form",gap:2,onSubmit:x,children:[e.jsx(B,{size:"sm",id:"search",name:"search",type:"text",width:"auto",value:m,onChange:t=>u(t.target.value)}),e.jsx(p,{type:"submit",colorScheme:"blue",variant:"outline",size:"sm",isLoading:i,loadingText:"Cari",children:"Cari"})]})]}),e.jsx(S,{columns:g,data:r.data,isLoading:i,calculateIndex:f}),e.jsxs(o,{gap:4,flexDir:{base:"column",md:"row"},justifyContent:{base:"center",md:"space-between"},alignItems:"center",mt:4,children:[e.jsxs(L,{color:"gray.500",fontSize:"sm",children:["Showing ",r.from??0," to"," ",r.to??0," of ",r.total??0]}),e.jsx(y,{links:r.links??[]})]})]})]})]})};export{ue as default};
