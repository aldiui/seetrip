import{R as e,a as m,I as i}from"./app-3Odire-T.js";import{F as d,a as E,D as u}from"./DeleteButton-hAJt4PGj.js";import{F as c}from"./chunk-KRPLQIP4-CquhG98t.js";import{H as f}from"./chunk-7OLJDQMT-kbg6kqT2.js";import{B as s}from"./chunk-UVUR7MCU-Borvcg8V.js";import{T as p}from"./chunk-OA6OURRG-DcObeycN.js";import{T as h,a as b,b as l,c as r,d as g,e as t}from"./chunk-MGVPL3OH-CQLf2DPg.js";import"./chunk-NABYTFTG-B_RNDpTh.js";import"./tslib.es6-DjSP9Sqm.js";import"./chunk-7JBTTEVG-kwzy4p7W.js";import"./chunk-4FCEGNGT-DhjMXyoH.js";import"./XMarkIcon-BNejivUW.js";const H=({destination:n})=>e.createElement(e.Fragment,null,e.createElement(c,{justifyContent:"space-between",alignItems:"center",mb:4},e.createElement(f,{size:"md",fontWeight:"bold"},"Data Harga"),e.createElement(s,{as:m,href:"/admin/destination-price/create?kode="+n.uuid,colorScheme:"green",size:"sm"},e.createElement(i,{as:d,name:"plus",mr:2})," Tambah")),e.createElement(p,null,e.createElement(h,{variant:"striped",colorScheme:"gray",width:"full"},e.createElement(b,null,e.createElement(l,{borderBottom:"2px",borderColor:"blue.500",bg:"blue.500"},e.createElement(r,{fontWeight:"extrabold",fontSize:"md",color:"white",w:5},"#"),e.createElement(r,{fontWeight:"extrabold",fontSize:"md",color:"white"},"Nama"),e.createElement(r,{fontWeight:"extrabold",fontSize:"md",color:"white"},"Deskripsi"),e.createElement(r,{fontWeight:"extrabold",fontSize:"md",color:"white"},"Harga"),e.createElement(r,{fontWeight:"extrabold",fontSize:"md",color:"white",w:10},"Aksi"))),e.createElement(g,{verticalAlign:"top"},!n.destination_prices||n.destination_prices.length===0?e.createElement(l,null,e.createElement(t,{colSpan:5,textAlign:"center"},"No data found")):n.destination_prices.map((a,o)=>e.createElement(l,{key:o},e.createElement(t,null,o+1),e.createElement(t,null,a.nama),e.createElement(t,null,a.deskripsi),e.createElement(t,null,a.harga_custom),e.createElement(t,null,e.createElement(c,{justifyContent:"space-between",alignItems:"center"},e.createElement(m,{href:"/admin/destination-price/"+a.uuid+"/edit"},e.createElement(s,{colorScheme:"yellow",size:"sm",mr:3},e.createElement(i,{as:E,mr:2}),"Edit")),e.createElement(u,{uri:"/admin/destination-price/"+a.uuid})))))))));export{H as default};
