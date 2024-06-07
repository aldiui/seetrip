import{r,R as e,Y as R,I as d}from"./app-DPnmQNMl.js";import{A as T,F as B,I as H,a as L,b as O}from"./AppLayout-CeJFSTxQ.js";import{F as N}from"./MapPinIcon-CIgvDU8k.js";import{I as Y}from"./chunk-6CVSDS6C-ChT1bA7_.js";import{u as j,V as G}from"./chunk-5MKCW436-BrFvw1lA.js";import{B as f}from"./chunk-PULVB27S-BmB31oiW.js";import{S as E}from"./chunk-NEK3OOAM-DHiupiIl.js";import{I as M}from"./chunk-QINAG4RG-TnUMVetF.js";import{B as c}from"./chunk-UVUR7MCU-CmIpkDyX.js";import{T as l}from"./chunk-2OOHT3W5-ChCwLuug.js";import{F as n}from"./chunk-KRPLQIP4-CwPIyTBq.js";import{B as w}from"./chunk-Z6RXEUPO-1acte09r.js";import{T as V,a as $,b as v,c as h,d as J,e as b}from"./chunk-MGVPL3OH-DWoBVmsh.js";import{S as Z}from"./chunk-3RSXBRAN-BFlJOCeO.js";import"./chunk-YF5BD7DN-II7Coxse.js";import"./chunk-X3PS6RUF-DTGnK-xB.js";import"./chunk-7JBTTEVG-CIlxP4pX.js";import"./XMarkIcon-CYqDitgq.js";import"./chunk-G72KV6MB-CFzf8KEx.js";import"./chunk-V7PAE35Z-ArVLID_a.js";import"./chunk-SPIKMR6I-D8fXho7g.js";import"./chunk-JARCRF6W-Bi0aPngd.js";function q({title:o,titleId:s,...a},m){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:m,"aria-labelledby":s},a),o?r.createElement("title",{id:s},o):null,r.createElement("path",{fillRule:"evenodd",d:"M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z",clipRule:"evenodd"}))}const K=r.forwardRef(q),xe=({auth:o,sessions:s,destination:a})=>{var I;const[m,x]=r.useState(0),[k,C]=r.useState(""),[i,p]=r.useState(1),y=j(),z=()=>{const t=(m+1)%a.destination_images.length;x(t)},A=()=>{const t=(m-1+a.destination_images.length)%a.destination_images.length;x(t)},u=a.destination_facilities.filter(t=>t.tipe==="Fasilitas"),g=a.destination_facilities.filter(t=>t.tipe==="Akomodasi"),S=a.destination_prices.find(t=>t.uuid===k),F=S?S.harga*i:0,P=t=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0}).format(t),W=()=>p(i+1),_=()=>p(i-1),D=()=>{o.user?console.log("Checkout process..."):y({title:"Error",status:"error",description:"Anda harus login terlebih dahulu.",duration:3e3,isClosable:!0,position:"top-right",variant:"left-accent"})};return e.createElement(T,{auth:o,sessions:s},e.createElement(R,{title:"Detail Wisata"}),e.createElement(f,{maxW:"container.xl",w:"full",px:6,py:10,minH:"100vh"},e.createElement(E,{mt:50,columns:{base:1,xl:2},spacing:8},e.createElement(f,{mb:6,position:"relative"},e.createElement(M,{src:(I=a.destination_images[m])==null?void 0:I.image,alt:a.nama,objectFit:"cover",w:"100%",h:"500px"}),e.createElement(c,{onClick:A,position:"absolute",top:"50%",left:"2%",transform:"translateY(-50%)",colorScheme:"blue",zIndex:"1"},e.createElement(d,{as:K})),e.createElement(c,{onClick:z,position:"absolute",top:"50%",right:"2%",transform:"translateY(-50%)",colorScheme:"blue",zIndex:"1"},e.createElement(d,{as:B}))),e.createElement(G,{spacing:2,align:"start"},e.createElement(l,{fontSize:"xl",fontWeight:"bold"},a.nama),e.createElement(l,{fontSize:"md"},a.category.nama),e.createElement(n,{gap:2},e.createElement(d,{as:N,color:"blue.500"}),e.createElement(l,null,a.lokasi)),e.createElement(f,{mb:5},e.createElement(w,{colorScheme:"green",mr:2},"Fasilitas: ",u.length),e.createElement(w,{colorScheme:"blue"},"Akomodasi: ",g.length)),e.createElement(n,{direction:"column",mb:5,gap:2,textAlign:"left"},e.createElement(l,{fontSize:"lg",fontWeight:"bold"},"Deskripsi"),e.createElement(l,null,a.deskripsi)),u.length>0&&e.createElement(n,{direction:"column",mb:5,gap:2,textAlign:"left"},e.createElement(l,{fontSize:"lg",fontWeight:"bold"},"Fasilitas"),e.createElement(E,{gap:2,columns:2},u.map(t=>e.createElement(l,{key:t.uuid,border:"1px",borderColor:"black",px:8,py:2,rounded:"lg"},t.nama)))),g.length>0&&e.createElement(n,{direction:"column",mb:5,gap:2,textAlign:"left"},e.createElement(l,{fontSize:"lg",fontWeight:"bold"},"Akomodasi"),e.createElement(E,{gap:2,columns:2},g.map(t=>e.createElement(l,{key:t.uuid,border:"1px",borderColor:"black",px:8,py:2,rounded:"lg"},t.nama)))),a.destination_prices.length>0&&e.createElement(n,{direction:"column",gap:2,textAlign:"left",w:"full"},e.createElement(l,{fontSize:"lg",fontWeight:"bold"},"Harga Paket"),e.createElement(V,{variant:"striped",colorScheme:"gray",w:"full",maxW:"full"},e.createElement($,null,e.createElement(v,{borderBottom:"2px",borderColor:"blue.500",bg:"blue.500"},e.createElement(h,{color:"white"},"Nama"),e.createElement(h,{color:"white"},"Deskripsi"),e.createElement(h,{color:"white"},"Harga"))),e.createElement(J,null,a.destination_prices.map(t=>e.createElement(v,{key:t.uuid},e.createElement(b,null,t.nama),e.createElement(b,null,t.deskripsi),e.createElement(b,null,t.harga_custom)))))),u.length===0&&g.length===0&&a.destination_prices.length===0&&e.createElement(l,{textAlign:"center",fontSize:"lg",fontWeight:"bold"},"Data tidak tersedia."),e.createElement(n,{direction:"column",gap:2,textAlign:"left",mt:5},e.createElement(l,{fontSize:"lg",fontWeight:"bold"},"Pilih Paket dan Jumlah Orang"),e.createElement(Z,{placeholder:"Pilih Paket",onChange:t=>C(t.target.value),value:k},a.destination_prices.map(t=>e.createElement("option",{key:t.uuid,value:t.uuid},t.nama))),e.createElement(H,{size:"md",mt:3},e.createElement(L,{width:"4.5rem"},e.createElement(c,{h:"1.75rem",size:"sm",onClick:_,isDisabled:i<=1},"-")),e.createElement(Y,{type:"number",value:i,onChange:t=>p(Math.max(1,parseInt(t.target.value))),textAlign:"center"}),e.createElement(O,{width:"4.5rem"},e.createElement(c,{h:"1.75rem",size:"sm",onClick:W},"+"))),e.createElement(l,{fontSize:"lg",fontWeight:"bold",mt:3},"Total Harga: ",P(F)),e.createElement(c,{colorScheme:"blue",mt:3,onClick:D},"Checkout"))))))};export{xe as default};
