import{R as e,a as o,I as m}from"./app-ejYvf9I6.js";import{F as d,T as f,a as E,b as u,c as l,d as r,e as p,f as t,g as h,D as b}from"./DeleteButton-CdnU30bv.js";import{F as c}from"./chunk-KRPLQIP4-D64IDwbM.js";import{H as g}from"./chunk-7OLJDQMT-BJ9HDscd.js";import{B as s}from"./chunk-UVUR7MCU-BjWsXQ7b.js";import"./chunk-NABYTFTG-C-PE8_xX.js";import"./tslib.es6-DjSP9Sqm.js";import"./chunk-7JBTTEVG-Dbobh0N6.js";import"./XMarkIcon-CbvqpJKJ.js";const C=({destination:a})=>e.createElement(e.Fragment,null,e.createElement(c,{justifyContent:"space-between",alignItems:"center",mb:4},e.createElement(g,{size:"md",fontWeight:"bold"},"Data Fasilitas"),e.createElement(s,{as:o,href:"/admin/destination-facility/create?kode="+a.uuid,colorScheme:"green",size:"sm"},e.createElement(m,{as:d,name:"plus",mr:2})," Tambah")),e.createElement(f,null,e.createElement(E,{variant:"striped",colorScheme:"gray",width:"full"},e.createElement(u,null,e.createElement(l,{borderBottom:"2px",borderColor:"blue.500",bg:"blue.500"},e.createElement(r,{fontWeight:"extrabold",fontSize:"md",color:"white",w:5},"#"),e.createElement(r,{fontWeight:"extrabold",fontSize:"md",color:"white"},"Fasilitas"),e.createElement(r,{fontWeight:"extrabold",fontSize:"md",color:"white"},"Tipe"),e.createElement(r,{fontWeight:"extrabold",fontSize:"md",color:"white",w:10},"Aksi"))),e.createElement(p,{verticalAlign:"top"},!a.destination_facilities||a.destination_facilities.length===0?e.createElement(l,null,e.createElement(t,{colSpan:4,textAlign:"center"},"No data found")):a.destination_facilities.map((n,i)=>e.createElement(l,{key:i},e.createElement(t,null,i+1),e.createElement(t,null,n.nama),e.createElement(t,null,n.tipe),e.createElement(t,null,e.createElement(c,{justifyContent:"space-between",alignItems:"center"},e.createElement(o,{href:"/admin/destination-facility/"+n.uuid+"/edit"},e.createElement(s,{colorScheme:"yellow",size:"sm",mr:3},e.createElement(m,{as:h,mr:2}),"Edit")),e.createElement(b,{uri:"/admin/destination-facility/"+n.uuid})))))))));export{C as default};