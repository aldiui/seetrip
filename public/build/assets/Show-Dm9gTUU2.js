import{r as x,W as A,R as e,Y as N,I as W}from"./app-DCVUtIqw.js";import{A as T}from"./AppLayout-8IzEaxXT.js";import{u as L}from"./index-x-flaPXv.js";import{F as H}from"./BookmarkIcon-mAFX88TI.js";import{u as j}from"./chunk-6RSEZNRH-DWTnfycA.js";import{V as G}from"./chunk-5MKCW436-CnR9LSu-.js";import{C as U,a as V}from"./chunk-YQO7BFFX-DXVB8yjZ.js";import{C as q}from"./chunk-2EW3JUUD-D0SPJ-En.js";import{H as K}from"./chunk-7OLJDQMT-Cv4BbNAv.js";import{S as c}from"./chunk-NEK3OOAM-B-cdqXZ7.js";import{T as a}from"./chunk-2OOHT3W5-BlFa8Fv_.js";import{B as s}from"./chunk-Z6RXEUPO-Bc4zVw1C.js";import{F as u}from"./chunk-56K2BSAJ-3Mdre515.js";import{F as d,a as E}from"./chunk-H46NUPBZ-CO9d4yfX.js";import{S as M}from"./chunk-3RSXBRAN-aOto4z4c.js";import{B as Y}from"./chunk-PULVB27S-DupAKUVl.js";import{I as w}from"./chunk-6CVSDS6C-DslWv91l.js";import{I as $}from"./chunk-QINAG4RG-CJmaY4ZB.js";import{B as J}from"./chunk-UVUR7MCU-87Ltadkx.js";import"./chunk-KRPLQIP4-Gdrq63o7.js";import"./chunk-YF5BD7DN-DclRJROE.js";import"./chunk-X3PS6RUF-DEDFK66O.js";import"./ChevronDownIcon-4oo1iQ45.js";import"./chunk-7JBTTEVG-AZ8puJBW.js";import"./XMarkIcon-DOhEOGCN.js";import"./chunk-G72KV6MB-ClQoAU4d.js";import"./chunk-V7PAE35Z-BEXAZOsh.js";import"./chunk-SPIKMR6I-DpZJN6Nr.js";import"./index-BJ-EYT7Z.js";import"./tslib.es6-DjSP9Sqm.js";import"./chunk-JARCRF6W-ei9ziPk7.js";const Pe=({auth:C,sessions:F,checkOut:t,pembayaran:g})=>{const b=j(),[f,_]=x.useState(null),{data:y,setData:p,post:B,processing:P,errors:n}=A({_method:"put",pembayaran:"",bukti_bayar:"",nama_pengirim:""}),[i,h]=x.useState(null),k=r=>{const m=r.target.value;p("pembayaran",m);const o=g.find(l=>l.uuid===m);h(o)},D=r=>{r.preventDefault(),B(`/check-out/${t.nomor_pemesanan}`)},z=(r,m)=>{if(m.length>0){m.forEach(l=>{l.errors.forEach(v=>{v.code==="file-too-large"?b({title:"Error",status:"error",description:"File is too large",duration:3e3,isClosable:!0,position:"top-right"}):v.code==="file-invalid-type"&&b({title:"Error",status:"error",description:"File is invalid type",duration:3e3,isClosable:!0,position:"top-right"})})}),_(null);return}const o=r[0];if(o){p("bukti_bayar",o);const l=new FileReader;l.onloadend=()=>{_(l.result)},l.readAsDataURL(o)}},{getRootProps:I,getInputProps:R,isDragActive:S}=L({onDrop:z,accept:"image/jpg,image/jpeg,image/png",maxSize:10*1024*1024,multiple:!1});return e.createElement(T,{auth:C,sessions:F},e.createElement(N,{title:"Detail Check Out"}),e.createElement(G,{mt:"90px",maxW:"container.xl",w:"full"},e.createElement(U,{p:2,maxW:"xl",w:"full",shadow:"md"},e.createElement(q,null,e.createElement(K,{size:"md",fontWeight:"bold",textAlign:"center"},"Detail Check Out")),e.createElement(V,null,e.createElement(c,{mb:2,gap:2,columns:2},e.createElement(a,null,"Nomor Pemesanan"),e.createElement(a,null,t.nomor_pemesanan),e.createElement(a,null,"Destinasi Wisata"),e.createElement(a,null,t.destination_price.destination.nama),e.createElement(a,null,"Paket Wisata"),e.createElement(a,null,t.destination_price.nama),e.createElement(a,null,"Kuantitas"),e.createElement(a,null,t.quantitas," Orang"),e.createElement(a,null,"Total"),e.createElement(a,null,t.total_custom," ")),t.wallet_id&&e.createElement(c,{mb:5,gap:2,columns:2},e.createElement(a,null,"Nama Akun"),e.createElement(a,null,t.wallet.nama_akun),e.createElement(a,null,"Nomor Rekening"),e.createElement(a,null,t.wallet.nomor_rekening),e.createElement(a,null,"Nama Bank"),e.createElement(a,null,t.wallet.nama_bank),e.createElement(a,null,"Status"),e.createElement(a,null," ",e.createElement("div",null,!t.wallet_id&&t.status==0&&e.createElement(s,{colorScheme:"red",variant:"solid"},"Belum Bayar"),t.wallet_id&&t.status==0&&e.createElement(s,{colorScheme:"yellow",variant:"solid"},"Pending"),t.wallet_id&&t.status==1&&e.createElement(s,{colorScheme:"green",variant:"solid"},"Sukses"),t.wallet_id&&t.status==2&&e.createElement(s,{colorScheme:"red",variant:"solid"},"Gagal")))),!t.wallet_id&&e.createElement("form",{onSubmit:D},e.createElement(u,{mb:5,isInvalid:n.pembayaran},e.createElement(d,{htmlFor:"pembayaran",fontSize:"sm"},"Pembayaran",e.createElement(a,{display:"inline",color:"red"},"*")),e.createElement(M,{id:"pembayaran",value:y.pembayaran,onChange:k},e.createElement("option",{value:""},"Pilih pembayaran"),g.map(r=>e.createElement("option",{key:r.uuid,value:r.uuid},r.nama_bank," -"," ",r.nama_akun))),n.pembayaran&&e.createElement(E,{fontSize:"xs"},n.pembayaran)),i&&e.createElement(c,{mb:5,gap:2,columns:2},e.createElement(a,null,"Nama Akun"),e.createElement(a,null,i.nama_akun),e.createElement(a,null,"Nomor Rekening"),e.createElement(a,null,i.nomor_rekening),e.createElement(a,null,"Nama Bank"),e.createElement(a,null,i.nama_bank)),e.createElement(u,{mb:3,isInvalid:n.bukti_bayar},e.createElement(d,{htmlFor:"bukti_bayar",fontSize:"sm"},"Bukti Bayar",e.createElement(a,{display:"inline",color:"red"},"*")),e.createElement(Y,{...I(),border:"2px dashed",borderColor:S?"blue.300":"gray.300",borderRadius:"md",p:10,textAlign:"center"},e.createElement(w,{...R()}),S?e.createElement(a,null,"Drop the files here ..."):e.createElement(a,null,"Drag 'n' drop some files here, or click to select files"),f&&e.createElement($,{src:f,alt:"Preview",mt:4,borderRadius:"md",boxSize:"200px",objectFit:"cover"})),n.bukti_bayar&&e.createElement(E,{fontSize:"xs"},n.bukti_bayar)),e.createElement(u,{mb:3,isInvalid:n.nama_pengirim},e.createElement(d,{htmlFor:"nama_pengirim",fontSize:"sm"},"Nama Pengirim",e.createElement(a,{display:"inline",color:"red"},"*")),e.createElement(w,{type:"text",id:"nama_pengirim",value:y.nama_pengirim,onChange:r=>p("nama_pengirim",r.target.value)}),n.nama_pengirim&&e.createElement(E,{fontSize:"xs"},n.nama_pengirim)),e.createElement(J,{type:"submit",colorScheme:"blue",isLoading:P,loadingText:"Simpan"},e.createElement(W,{as:H,mr:2}),"Simpan"))))))};export{Pe as default};