import{R as e,a as m,I as i}from"./app-3Odire-T.js";import{F as u,a as E,D as f}from"./DeleteButton-hAJt4PGj.js";import{F as c}from"./chunk-KRPLQIP4-CquhG98t.js";import{H as h}from"./chunk-7OLJDQMT-kbg6kqT2.js";import{B as s}from"./chunk-UVUR7MCU-Borvcg8V.js";import{T as g}from"./chunk-OA6OURRG-DcObeycN.js";import{T as p,a as b,b as l,c as r,d as w,e as t}from"./chunk-MGVPL3OH-CQLf2DPg.js";import{B as d}from"./chunk-Z6RXEUPO-BJGD8G2y.js";import"./chunk-NABYTFTG-B_RNDpTh.js";import"./tslib.es6-DjSP9Sqm.js";import"./chunk-7JBTTEVG-kwzy4p7W.js";import"./chunk-4FCEGNGT-DhjMXyoH.js";import"./XMarkIcon-BNejivUW.js";const I=({destination:o})=>e.createElement(e.Fragment,null,e.createElement(c,{justifyContent:"space-between",alignItems:"center",mb:4},e.createElement(h,{size:"md",fontWeight:"bold"},"Data Voucher"),e.createElement(s,{as:m,href:"/user/destination-voucher/create?kode="+o.uuid,colorScheme:"green",size:"sm"},e.createElement(i,{as:u,name:"plus",mr:2})," Tambah")),e.createElement(g,null,e.createElement(p,{variant:"striped",colorScheme:"gray",width:"full"},e.createElement(b,null,e.createElement(l,{borderBottom:"2px",borderColor:"blue.500",bg:"blue.500"},e.createElement(r,{fontWeight:"extrabold",fontSize:"md",color:"white",w:5},"#"),e.createElement(r,{fontWeight:"extrabold",fontSize:"md",color:"white",w:5},"Kode"),e.createElement(r,{fontWeight:"extrabold",fontSize:"md",color:"white"},"Diskon"),e.createElement(r,{fontWeight:"extrabold",fontSize:"md",color:"white"},"Kuota"),e.createElement(r,{fontWeight:"extrabold",fontSize:"md",color:"white"},"Tanggal Kadaluarsa"),e.createElement(r,{fontWeight:"extrabold",fontSize:"md",color:"white"},"Status"),e.createElement(r,{fontWeight:"extrabold",fontSize:"md",color:"white",w:10},"Aksi"))),e.createElement(w,{verticalAlign:"top"},!o.destination_vouchers||o.destination_vouchers.length===0?e.createElement(l,null,e.createElement(t,{colSpan:7,textAlign:"center"},"No data found")):o.destination_vouchers.map((a,n)=>e.createElement(l,{key:n},e.createElement(t,null,n+1),e.createElement(t,null,a.kode),e.createElement(t,null,a.diskon_custom),e.createElement(t,null,a.kuota),e.createElement(t,null,a.tanggal_kadaluarsa_custom),e.createElement(t,null,a.status==1?e.createElement(d,{colorScheme:"green"},"Aktif"):e.createElement(d,{colorScheme:"red"},"Tidak Aktif")),e.createElement(t,null,e.createElement(c,{justifyContent:"space-between",alignItems:"center"},e.createElement(m,{href:"/user/destination-voucher/"+a.uuid+"/edit"},e.createElement(s,{colorScheme:"yellow",size:"sm",mr:3},e.createElement(i,{as:E,mr:2}),"Edit")),e.createElement(f,{uri:"/user/destination-voucher/"+a.uuid})))))))));export{I as default};