import{r as o,R as e,Y as y,a as v,I as C,y as b}from"./app-CRUbJu4Z.js";import{P as w,l as S}from"./Pagination-Qe3AefPX.js";import{D as x}from"./Datatable-1F5z-Rsy.js";import{A as I}from"./AdminLayout -CAyLJs5J.js";import{F as D}from"./PlusIcon-Be_CjcVG.js";import{S as z}from"./chunk-3RSXBRAN-CknXJn70.js";import{C as A,a as k}from"./chunk-YQO7BFFX-BCfAnfk7.js";import{C as F}from"./chunk-2EW3JUUD-BRnsAHIO.js";import{H as T}from"./chunk-7OLJDQMT-CSaLqb1Z.js";import{B as p}from"./chunk-UVUR7MCU-eTSeZI0_.js";import{F as m}from"./chunk-KRPLQIP4-DNxTn6Yp.js";import{I as B}from"./chunk-6CVSDS6C-D73OriWR.js";import{T as P}from"./chunk-2OOHT3W5-DdxI42KR.js";import"./chunk-3ASUQ6PA-BN5Hmi5c.js";import"./chunk-5MKCW436-D1mH52k9.js";import"./chunk-G72KV6MB-CD-aFYuC.js";import"./DeleteButton-CeOy9MW8.js";import"./chunk-NABYTFTG-D5F2i9a3.js";import"./tslib.es6-DjSP9Sqm.js";import"./chunk-7JBTTEVG-ClGgynL9.js";import"./chunk-4FCEGNGT-Br3X-nmv.js";import"./XMarkIcon-CwxvaQ7T.js";import"./chunk-OA6OURRG-C0gdfQ-z.js";import"./chunk-MGVPL3OH-DxrYEuko.js";import"./chunk-QINAG4RG-BbSWCnMv.js";import"./chunk-X3PS6RUF-DrYU6TQ6.js";import"./chunk-SPIKMR6I-Dljxbnrn.js";import"./chunk-V7PAE35Z-bcQCC_dJ.js";import"./chunk-PULVB27S-B9ln4okT.js";import"./ChevronDownIcon-Aa-CVtjH.js";import"./MapPinIcon-D2415P5-.js";import"./UserCircleIcon-COBS2074.js";import"./chunk-6RSEZNRH-CW-Q5ZHl.js";import"./chunk-56K2BSAJ-B_XMpqjX.js";const fe=({auth:c,sessions:u,categories:t})=>{const r=o.useRef(t.per_page),[n,i]=o.useState(!1),[s,d]=o.useState(""),f=a=>{r.current=parseInt(a.target.value),l()},g=a=>{a.preventDefault(),l()},l=()=>{i(!0),b.get("/admin/category",S.pickBy({perpage:r.current,search:s}),{onFinish:()=>i(!1),preserveScroll:!0,preserveState:!0})},h=a=>t.from+a,E=[{header:"#",accessor:null,width:"5"},{header:"Avatar",accessor:"AvatarCategory",width:"20"},{header:"Nama",accessor:"nama"},{header:"Aksi",accessor:"Aksi",width:"10",uri:"/admin/category"}];return e.createElement(I,{auth:c,sessions:u},e.createElement(y,{title:"Kategori"}),e.createElement(A,{p:2,w:"full",h:["auto","full"]},e.createElement(F,{display:"flex",justifyContent:"space-between",alignItems:"center"},e.createElement(T,{size:"md",fontWeight:"bold"},"Data Kategori"),e.createElement(p,{as:v,href:"/admin/category/create",colorScheme:"green",size:"sm"},e.createElement(C,{as:D,name:"plus",mr:2})," Tambah")),e.createElement(k,null,e.createElement(m,{flexDir:{base:"column",md:"row"},justifyContent:"space-between",alignItems:"center",gap:4,mb:4},e.createElement(z,{id:"perpage",size:"sm",name:"perpage",width:"auto",value:r.current,onChange:f},e.createElement("option",{value:"25"},"25"),e.createElement("option",{value:"50"},"50"),e.createElement("option",{value:"100"},"100"),e.createElement("option",{value:"250"},"250"),e.createElement("option",{value:"500"},"500")),e.createElement(m,{as:"form",gap:2,onSubmit:g},e.createElement(B,{size:"sm",id:"search",name:"search",type:"text",width:"auto",value:s,onChange:a=>d(a.target.value)}),e.createElement(p,{type:"submit",colorScheme:"blue",variant:"outline",size:"sm",isLoading:n,loadingText:"Cari"},"Cari"))),e.createElement(x,{columns:E,data:t.data,isLoading:n,calculateIndex:h}),e.createElement(m,{gap:4,flexDir:{base:"column",md:"row"},justifyContent:{base:"center",md:"space-between"},alignItems:"center",mt:4},e.createElement(P,{color:"gray.500",fontSize:"sm"},"Showing ",t.from??0," to"," ",t.to??0," of ",t.total??0),e.createElement(w,{links:t.links??[]})))))};export{fe as default};