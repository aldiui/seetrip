import{r as n,R as e,a as d,I as E}from"./app-DCVUtIqw.js";import{a as h,D as f}from"./DeleteButton-C2gVDMtl.js";import{T as g}from"./chunk-OA6OURRG-C2SSpgxl.js";import{T as b,a as v,b as m,c as x,d as y,e as i}from"./chunk-MGVPL3OH-C5JrAIlD.js";import{S as A}from"./Pagination-DPgUmiQw.js";import{F as T}from"./chunk-KRPLQIP4-Gdrq63o7.js";import{B as u}from"./chunk-UVUR7MCU-87Ltadkx.js";import{I as $}from"./chunk-QINAG4RG-CJmaY4ZB.js";import{A as S}from"./chunk-V7PAE35Z-BEXAZOsh.js";function R({title:r,titleId:l,...s},c){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:c,"aria-labelledby":l},s),r?n.createElement("title",{id:l},r):null,n.createElement("path",{d:"M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"}),n.createElement("path",{fillRule:"evenodd",d:"M1.38 8.28a.87.87 0 0 1 0-.566 7.003 7.003 0 0 1 13.238.006.87.87 0 0 1 0 .566A7.003 7.003 0 0 1 1.379 8.28ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",clipRule:"evenodd"}))}const w=n.forwardRef(R),W=({columns:r,data:l,isLoading:s,calculateIndex:c})=>e.createElement(g,null,e.createElement(b,{variant:"striped",colorScheme:"gray",width:"full"},e.createElement(v,null,e.createElement(m,{borderBottom:"2px",borderColor:"blue.500",bg:"blue.500"},r.map((a,o)=>e.createElement(x,{key:o,fontWeight:"extrabold",fontSize:"md",color:"white",w:a.width||"auto"},a.header)))),e.createElement(y,{verticalAlign:"top"},s?e.createElement(m,null,e.createElement(i,{colSpan:r.length,textAlign:"center"},e.createElement(A,{bg:"blue.500",height:"20px",width:"100%"}))):l.length===0?e.createElement(m,null,e.createElement(i,{colSpan:r.length,textAlign:"center"},"No data found")):l.map((a,o)=>e.createElement(m,{key:a.uuid,borderBottomWidth:"1px"},r.map((t,p)=>e.createElement(i,{key:p},t.accessor==="Aksi"?e.createElement(T,null,t.show?e.createElement(u,{colorScheme:"blue",size:"sm",mr:2,as:d,href:`${t.uri}/${a.uuid}`},e.createElement(E,{as:w,mr:2}),"Detail"):null,e.createElement(u,{colorScheme:"yellow",size:"sm",mr:2,as:d,href:`${t.uri}/${a.uuid}/edit`},e.createElement(E,{as:h,mr:2}),"Edit"),e.createElement(f,{uri:`${t.uri}/${a.uuid}`})):t.accessor==="AvatarCategory"?e.createElement(e.Fragment,null,e.createElement($,{size:"md",src:`${a.avatar}`,alt:"Avatar",w:"60"})):t.accessor==="AvatarUser"?e.createElement(e.Fragment,null,e.createElement(S,{size:"lg",name:a.nama,src:a.avatar?`${a.avatar}`:null,alt:"avatar"})):t.accessor==="user.nama"?a.user.nama:t.accessor==="category.nama"?a.category.nama:t.accessor?a[t.accessor]:c(o))))))));export{W as D};
