"use strict";(self.webpackChunkclothing_store=self.webpackChunkclothing_store||[]).push([[446],{3446:function(n,e,i){i.r(e),i.d(e,{default:function(){return O}});i(2791);var t,r,s,d,a,c,o,l,p,h,x=i(364),u=i(4569),m=i.n(u),f=i(8210),j=i(184),g=function(n){var e=n.price,i=100*e;return(0,j.jsx)(f.Z,{Label:"Pay Now",name:"Clothing Brand",billingAddress:!0,shippingAddress:!0,image:"",description:"Your total is $".concat(e),amount:i,panelLabel:"Pay Now",token:function(n){m()({url:"payment",method:"post",data:{amount:i,token:n}}).then((function(n){alert("Payment successful"),console.log("payment successful")})).catch((function(n){console.log("Payment error: ",JSON.parse(n)),alert("There was an issue with your payment.  Please make Sure you used the provided credentials")}))},stripeKey:"pk_test_51KM6YxGwVpK4Qm1eQ3TXszmzGO0EMXC5tyamsS9r6QQ4t0QeUde15F9hxa7pRLSiXZpZev0pGS8aVFCn780cO6lL00i43WbLmr"})},w=i(3026),v=i(168),Z=i(5751),y=Z.ZP.div(t||(t=(0,v.Z)(["\n  width: 100%;\n  display: flex;\n  min-height: 100px;\n  border-bottom: 1px solid darkgrey;\n  padding: 15px 0;\n  font-size: 20px;\n  align-items: center;\n  @media screen and (max-width: 800px) {\n    font-size: 18px;\n  }\n"]))),P=Z.ZP.div(r||(r=(0,v.Z)(["\n  width: 23%;\n  padding-right: 15px;\n  img {\n    width: 100%;\n    height: 100%;\n  }\n"]))),b=Z.ZP.span(s||(s=(0,v.Z)(["\n  width: 23%;\n  @media screen and (max-width: 800px) {\n    width: 22%;\n  }\n"]))),k=(0,Z.ZP)(b)(d||(d=(0,v.Z)(["\n  display: flex;\n  span {\n    margin: 0 10px;\n  }\n  div {\n    cursor: pointer;\n  }\n"]))),C=Z.ZP.div(a||(a=(0,v.Z)(["\n  padding-left: 12px;\n  cursor: pointer;\n"]))),I=(0,x.$j)(null,(function(n){return{deleteItem:function(e){return n((0,w.wz)(e))},addItem:function(e){return n((0,w.jX)(e))},removeItemArrow:function(e){return n((0,w.qf)(e))}}}))((function(n){var e=n.cartItem,i=n.deleteItem,t=n.addItem,r=n.removeItemArrow,s=e.name,d=e.imageUrl,a=e.price,c=e.quantity;return(0,j.jsxs)(y,{children:[(0,j.jsx)(P,{children:(0,j.jsx)("img",{src:d,alt:"item"})}),(0,j.jsx)(b,{children:s}),(0,j.jsxs)(k,{children:[(0,j.jsx)("div",{onClick:function(){return r(e)},children:"\u276e"}),(0,j.jsx)("span",{children:c}),(0,j.jsx)("div",{onClick:function(){return t(e)},children:"\u276f"})]}),(0,j.jsx)(b,{children:a}),(0,j.jsx)(C,{onClick:function(){return i(e)},children:"\u2715"})]})})),E=i(6834),S=Z.ZP.div(c||(c=(0,v.Z)(["\n  width: 55%;\n  min-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 50px auto 0;\n  button {\n    margin-left: auto;\n    margin-top: 50px;\n  }\n  @media screen and (max-width: 800px) {\n    width: 90%;\n  }\n"]))),z=Z.ZP.div(o||(o=(0,v.Z)(["\n  width: 100%;\n  height: 40px;\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid darkgrey;\n"]))),L=Z.ZP.div(l||(l=(0,v.Z)(["\n  text-transform: capitalize;\n  width: 23%;\n  &:last-child {\n    width: 8%;\n  }\n  @media screen and (max-width: 800px) {\n    width: 22%;\n    &:last-child {\n      width: 12%;\n    }\n  }\n"]))),T=Z.ZP.div(p||(p=(0,v.Z)(["\n  margin-top: 30px;\n  margin-left: auto;\n  font-size: 36px;\n"]))),A=Z.ZP.div(h||(h=(0,v.Z)(["\n  text-align: center;\n  margin-top: 40px;\n  font-size: 24px;\n  color: red;\n"]))),O=function(){var n=(0,x.v9)(E.D1),e=(0,x.v9)(E.ej);return(0,j.jsxs)(S,{children:[(0,j.jsxs)(z,{children:[(0,j.jsx)(L,{children:(0,j.jsx)("span",{children:"Product"})}),(0,j.jsx)(L,{children:(0,j.jsx)("span",{children:"Description"})}),(0,j.jsx)(L,{children:(0,j.jsx)("span",{children:"Quantity"})}),(0,j.jsx)(L,{children:(0,j.jsx)("span",{children:"Price"})}),(0,j.jsx)(L,{children:(0,j.jsx)("span",{children:"Remove"})})]}),n.map((function(n){return(0,j.jsx)(I,{cartItem:n},n.id)})),(0,j.jsx)(T,{children:(0,j.jsxs)("span",{children:["Total: $",e]})}),(0,j.jsx)("br",{}),(0,j.jsxs)(A,{children:["*PLEASE USE THE FOLLOWING TEST CREDIT CARD FOR PAYMENTS*",(0,j.jsx)("br",{}),"4242 4242 4242 4242 - Exp: 01/25 - CVV: 123"]}),(0,j.jsx)("br",{}),(0,j.jsx)(g,{price:e})]})}}}]);
//# sourceMappingURL=446.87273a91.chunk.js.map