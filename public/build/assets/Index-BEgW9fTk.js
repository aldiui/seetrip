import{f as E,h,o as g,j as b,e as p,g as w,R as e,a as i,I as c}from"./app-ejYvf9I6.js";import{F as S,T as k,a as x,b as T,c as o,d as n,e as y,f as a,g as z,D as B}from"./DeleteButton-CdnU30bv.js";import{H as W}from"./chunk-7OLJDQMT-BJ9HDscd.js";import{F as s}from"./chunk-KRPLQIP4-D64IDwbM.js";import{B as d}from"./chunk-UVUR7MCU-BjWsXQ7b.js";import"./chunk-NABYTFTG-C-PE8_xX.js";import"./tslib.es6-DjSP9Sqm.js";import"./chunk-7JBTTEVG-Dbobh0N6.js";import"./XMarkIcon-CbvqpJKJ.js";var m=E(function(t,l){const u=h("Badge",t),{className:_,...f}=g(t);return b.jsx(p.span,{ref:l,className:w("chakra-badge",t.className),...f,__css:{display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle",...u}})});m.displayName="Badge";const K=({destination:r})=>e.createElement(e.Fragment,null,e.createElement(s,{justifyContent:"space-between",alignItems:"center",mb:4},e.createElement(W,{size:"md",fontWeight:"bold"},"Data Voucher"),e.createElement(d,{as:i,href:"/admin/destination-voucher/create?kode="+r.uuid,colorScheme:"green",size:"sm"},e.createElement(c,{as:S,name:"plus",mr:2})," Tambah")),e.createElement(k,null,e.createElement(x,{variant:"striped",colorScheme:"gray",width:"full"},e.createElement(T,null,e.createElement(o,{borderBottom:"2px",borderColor:"blue.500",bg:"blue.500"},e.createElement(n,{fontWeight:"extrabold",fontSize:"md",color:"white",w:5},"#"),e.createElement(n,{fontWeight:"extrabold",fontSize:"md",color:"white",w:5},"Kode"),e.createElement(n,{fontWeight:"extrabold",fontSize:"md",color:"white"},"Diskon"),e.createElement(n,{fontWeight:"extrabold",fontSize:"md",color:"white"},"Kuota"),e.createElement(n,{fontWeight:"extrabold",fontSize:"md",color:"white"},"Tanggal Kadaluarsa"),e.createElement(n,{fontWeight:"extrabold",fontSize:"md",color:"white"},"Status"),e.createElement(n,{fontWeight:"extrabold",fontSize:"md",color:"white",w:10},"Aksi"))),e.createElement(y,{verticalAlign:"top"},!r.destination_vouchers||r.destination_vouchers.length===0?e.createElement(o,null,e.createElement(a,{colSpan:7,textAlign:"center"},"No data found")):r.destination_vouchers.map((t,l)=>e.createElement(o,{key:l},e.createElement(a,null,l+1),e.createElement(a,null,t.kode),e.createElement(a,null,t.diskon_custom),e.createElement(a,null,t.kuota),e.createElement(a,null,t.tanggal_kadaluarsa_custom),e.createElement(a,null,t.status==1?e.createElement(m,{colorScheme:"green"},"Aktif"):e.createElement(m,{colorScheme:"red"},"Tidak Aktif")),e.createElement(a,null,e.createElement(s,{justifyContent:"space-between",alignItems:"center"},e.createElement(i,{href:"/admin/destination-voucher/"+t.uuid+"/edit"},e.createElement(d,{colorScheme:"yellow",size:"sm",mr:3},e.createElement(c,{as:z,mr:2}),"Edit")),e.createElement(B,{uri:"/admin/destination-voucher/"+t.uuid})))))))));export{K as default};
