(this.webpackJsonpcurrency=this.webpackJsonpcurrency||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(6),s=c.n(r),u=(c(12),c(7)),o=c(2),i=(c(13),c(0));function j(e){var t=e.currencyOption,c=e.selectedCurrency,n=e.selectCurrency,a=e.amount,r=e.changeAmount;return Object(i.jsxs)("div",{children:[Object(i.jsx)("input",{type:"number",value:a,onChange:r,className:"inp"}),Object(i.jsx)("select",{value:c,onChange:n,className:"sel",children:t.map((function(e,t){return Object(i.jsx)("option",{className:"op",value:e,children:e},t)}))})]})}var b="http://api.exchangeratesapi.io/v1/latest?access_key=b540c23e50dd9b7640727b8dcd40a15f&format=1";var l=function(){var e,t,c=Object(n.useState)([]),a=Object(o.a)(c,2),r=a[0],s=a[1],l=Object(n.useState)(),O=Object(o.a)(l,2),f=O[0],h=O[1],d=Object(n.useState)(),m=Object(o.a)(d,2),v=m[0],y=m[1],p=Object(n.useState)(),g=Object(o.a)(p,2),x=g[0],C=g[1],S=Object(n.useState)(1),N=Object(o.a)(S,2),k=N[0],A=N[1],F=Object(n.useState)(!0),E=Object(o.a)(F,2),w=E[0],B=E[1];return w?(e=k,t=k*x):(t=k,e=k/x),Object(n.useEffect)((function(){fetch(b).then((function(e){return e.json()})).then((function(e){var t=Object.keys(e.rates)[0];s([e.base].concat(Object(u.a)(Object.keys(e.rates)))),h(e.rates),y(t)}))}),[]),Object(n.useEffect)((function(){fetch("".concat(b,"$base=").concat(f,"$symbols=").concat(v)).then((function(e){return e.json()})).then((function(e){return C(e.rates[v])}))}),[f,v]),Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("h2",{className:"name",children:"Currency Converter"}),Object(i.jsx)("div",{className:"currency1",children:Object(i.jsx)(j,{currencyOption:r,selectedCurrency:f,selectCurrency:function(e){return h(e.target.value)},amount:e,changeAmount:function(e){A(e.target.value),B(!0)}})}),Object(i.jsx)("div",{className:"currency2",children:Object(i.jsx)(j,{currencyOption:r,selectedCurrency:v,selectCurrency:function(e){return y(e.target.value)},amount:t,changeAmount:function(e){A(e.target.value),B(!1)}})})]})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(l,{})}),document.getElementById("root")),O()}},[[15,1,2]]]);
//# sourceMappingURL=main.94b83a55.chunk.js.map