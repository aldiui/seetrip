import{R as e,a as o,I as m}from"./app-DPnmQNMl.js";import{F as d,T as f,a as E,D as u}from"./DeleteButton-GisBuC9l.js";import{F as c}from"./chunk-KRPLQIP4-CwPIyTBq.js";import{H as p}from"./chunk-7OLJDQMT-CJSwRjv4.js";import{B as s}from"./chunk-UVUR7MCU-CmIpkDyX.js";import{T as h,a as b,b as l,c as n,d as g,e as t}from"./chunk-MGVPL3OH-DWoBVmsh.js";import"./chunk-NABYTFTG-CWJEsaVk.js";import"./tslib.es6-DjSP9Sqm.js";import"./chunk-7JBTTEVG-CIlxP4pX.js";import"./XMarkIcon-CYqDitgq.js";const D=({destination:a})=>e.createElement(e.Fragment,null,e.createElement(c,{justifyContent:"space-between",alignItems:"center",mb:4},e.createElement(p,{size:"md",fontWeight:"bold"},"Data Fasilitas"),e.createElement(s,{as:o,href:"/admin/destination-facility/create?kode="+a.uuid,colorScheme:"green",size:"sm"},e.createElement(m,{as:d,name:"plus",mr:2})," Tambah")),e.createElement(f,null,e.createElement(h,{variant:"striped",colorScheme:"gray",width:"full"},e.createElement(b,null,e.createElement(l,{borderBottom:"2px",borderColor:"blue.500",bg:"blue.500"},e.createElement(n,{fontWeight:"extrabold",fontSize:"md",color:"white",w:5},"#"),e.createElement(n,{fontWeight:"extrabold",fontSize:"md",color:"white"},"Fasilitas"),e.createElement(n,{fontWeight:"extrabold",fontSize:"md",color:"white"},"Tipe"),e.createElement(n,{fontWeight:"extrabold",fontSize:"md",color:"white",w:10},"Aksi"))),e.createElement(g,{verticalAlign:"top"},!a.destination_facilities||a.destination_facilities.length===0?e.createElement(l,null,e.createElement(t,{colSpan:4,textAlign:"center"},"No data found")):a.destination_facilities.map((r,i)=>e.createElement(l,{key:i},e.createElement(t,null,i+1),e.createElement(t,null,r.nama),e.createElement(t,null,r.tipe),e.createElement(t,null,e.createElement(c,{justifyContent:"space-between",alignItems:"center"},e.createElement(o,{href:"/admin/destination-facility/"+r.uuid+"/edit"},e.createElement(s,{colorScheme:"yellow",size:"sm",mr:3},e.createElement(m,{as:E,mr:2}),"Edit")),e.createElement(u,{uri:"/admin/destination-facility/"+r.uuid})))))))));export{D as default};
