import{j as e,Y as d}from"./app-JHr847d-.js";import{A as n}from"./AdminLayout -Bc3andDT.js";import{C as o,a as t}from"./chunk-YQO7BFFX-DSZLBsX_.js";import{C as x}from"./chunk-2EW3JUUD-BnP4_yfU.js";import{H as h}from"./chunk-7OLJDQMT-AfpAcD5m.js";import{S as s}from"./chunk-NEK3OOAM-CLGMhvnB.js";import{T as i}from"./chunk-2OOHT3W5-CSJh4K3n.js";import{I as j}from"./chunk-QINAG4RG-D-h7J8oK.js";import{B as l}from"./chunk-Z6RXEUPO-cZ0wX1Ud.js";import"./chunk-KRPLQIP4-D2gzZcl_.js";import"./chunk-PULVB27S-H6C7mPE7.js";import"./ChevronDownIcon-vE-s4u4y.js";import"./chunk-UVUR7MCU-xK3lE66g.js";import"./chunk-7JBTTEVG-Dz6D23Ef.js";import"./chunk-3ASUQ6PA-DZHSwCkz.js";import"./chunk-5MKCW436-CDR3RVuy.js";import"./chunk-G72KV6MB-CldgvVEv.js";import"./chunk-V7PAE35Z-D4m-ilcb.js";import"./chunk-SPIKMR6I-BlSDUyza.js";import"./chunk-NABYTFTG-B-MaHP8x.js";import"./tslib.es6-DjSP9Sqm.js";import"./MapPinIcon-CNmZlcmu.js";import"./chunk-6RSEZNRH-Bc2GE4v1.js";import"./chunk-JARCRF6W-DwqrX1J_.js";import"./chunk-X3PS6RUF-VuPBMW7K.js";const z=({auth:a,sessions:m,transaction:r})=>e.jsxs(n,{auth:a,sessions:m,children:[e.jsx(d,{title:"Detail Transaksi"}),e.jsxs(o,{maxW:"xl",w:"full",p:2,h:"auto",children:[e.jsx(x,{pb:0,children:e.jsx(h,{size:"md",fontWeight:"bold",children:"Detail Transaki"})}),e.jsxs(t,{children:[e.jsxs(s,{mb:2,gap:2,columns:2,children:[e.jsx(i,{children:"Nomor Pemesanan"}),e.jsx(i,{children:r.nomor_pemesanan}),e.jsx(i,{children:"Tanggal"}),e.jsx(i,{children:r.tanggal}),e.jsx(i,{children:"Destinasi Wisata"}),e.jsx(i,{children:r.destination_price.destination.nama}),e.jsx(i,{children:"Paket Wisata"}),e.jsx(i,{children:r.destination_price.nama}),e.jsx(i,{children:"Pemilik Wisata"}),e.jsx(i,{children:r.destination_price.destination.user.nama}),e.jsx(i,{children:"Kuantitas"}),e.jsxs(i,{children:[r.quantitas," Orang"]}),e.jsx(i,{children:"Total"}),e.jsxs(i,{children:[r.total_custom," "]})]}),r.wallet_id&&e.jsxs(e.Fragment,{children:[e.jsxs(s,{mb:2,gap:2,columns:2,children:[e.jsx(i,{children:"Nama Akun"}),e.jsx(i,{children:r.wallet.nama_akun}),e.jsx(i,{children:"Nomor Rekening"}),e.jsx(i,{children:r.wallet.nomor_rekening}),e.jsx(i,{children:"Nama Bank"}),e.jsx(i,{children:r.wallet.nama_bank}),e.jsx(i,{children:"Nama Pengirim"}),e.jsx(i,{children:r.nama_pengirim}),e.jsx(i,{children:"Bukti Bayar"})]}),e.jsx(j,{my:4,w:"full",src:r.bukti_bayar})]}),e.jsxs(s,{mb:2,gap:2,columns:2,children:[e.jsx(i,{children:"Status"}),e.jsxs(i,{children:[" ",e.jsxs("div",{children:[!r.wallet_id&&r.status==0&&e.jsx(l,{colorScheme:"red",variant:"solid",children:"Belum Bayar"}),r.wallet_id&&r.status==0&&e.jsx(l,{colorScheme:"yellow",variant:"solid",children:"Pending"}),r.wallet_id&&r.status==1&&e.jsx(l,{colorScheme:"green",variant:"solid",children:"Sukses"}),r.wallet_id&&r.status==2&&e.jsx(l,{colorScheme:"red",variant:"solid",children:"Gagal"})]})]})]})]})]})]});export{z as default};