(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[3,8],{142:function(e,t,a){"use strict";var c=a(10),n=a(2),s=a(3),r=a(4),o=a.n(r),i=a(0),l=a(7),u=a(1),f=["as","bsPrefix","className"],j=["className"],b=["xxl","xl","lg","md","sm","xs"];var d=i.forwardRef((function(e,t){var a=function(e){var t=e.as,a=e.bsPrefix,c=e.className,r=Object(s.a)(e,f);a=Object(l.a)(a,"col");var i=[],u=[];return b.forEach((function(e){var t,c,n,s=r[e];delete r[e],"object"===typeof s&&null!=s?(t=s.span,c=s.offset,n=s.order):t=s;var o="xs"!==e?"-".concat(e):"";t&&i.push(!0===t?"".concat(a).concat(o):"".concat(a).concat(o,"-").concat(t)),null!=n&&u.push("order".concat(o,"-").concat(n)),null!=c&&u.push("offset".concat(o,"-").concat(c))})),[Object(n.a)(Object(n.a)({},r),{},{className:o.a.apply(void 0,[c].concat(i,u))}),{as:t,bsPrefix:a,spans:i}]}(e),r=Object(c.a)(a,2),i=r[0],d=i.className,x=Object(s.a)(i,j),m=r[1],p=m.as,O=void 0===p?"div":p,h=m.bsPrefix,v=m.spans;return Object(u.jsx)(O,Object(n.a)(Object(n.a)({},x),{},{ref:t,className:o()(d,!v.length&&h)}))}));d.displayName="Col",t.a=d},148:function(e,t,a){"use strict";var c=a(2),n=a(3),s=a(4),r=a.n(s),o=a(0),i=a(7),l=a(1),u=["bsPrefix","className","as"],f=["xxl","xl","lg","md","sm","xs"],j=o.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,o=e.as,j=void 0===o?"div":o,b=Object(n.a)(e,u),d=Object(i.a)(a,"row"),x="".concat(d,"-cols"),m=[];return f.forEach((function(e){var t,a=b[e];delete b[e],t=null!=a&&"object"===typeof a?a.cols:a;var c="xs"!==e?"-".concat(e):"";null!=t&&m.push("".concat(x).concat(c,"-").concat(t))})),Object(l.jsx)(j,Object(c.a)(Object(c.a)({ref:t},b),{},{className:r.a.apply(void 0,[s,d].concat(m))}))}));j.displayName="Row",t.a=j},87:function(e,t,a){"use strict";a.r(t);a(0),a(89);var c=a(1);t.default=function(e){var t=e.title;return Object(c.jsx)("div",{className:"header",children:t})}},91:function(e,t,a){"use strict";a.r(t);var c=a(10),n=a(0),s=a(162),r=a(137),o=a(148),i=a(142),l=a(62),u=a.n(l),f=a(87),j=a(24),b=a(29),d=a(1),x={introTextContainer:{margin:10,flexDirection:"column",whiteSpace:"pre-wrap",textAlign:"left",fontSize:"1.2em",fontWeight:500},introImageContainer:{margin:10,justifyContent:"center",alignItems:"center",display:"flex",borderRadius:"1rem"},Image:{borderRadius:"1rem"}};t.default=function(e){var t,a=e.header,l=Object(n.useState)(null),m=Object(c.a)(l,2),p=m[0],O=m[1];return Object(n.useEffect)((function(){fetch(j.a.about,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return O(e)})).catch((function(e){return e}))}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(f.default,{title:a}),Object(d.jsx)("div",{className:"section-content-container",children:Object(d.jsx)(r.a,{children:p?Object(d.jsx)(u.a,{children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(i.a,{style:x.introTextContainer,children:(t=p.about,Object(d.jsx)(s.a,{children:t}))}),Object(d.jsx)(i.a,{style:x.introImageContainer,children:Object(d.jsx)("img",{style:x.Image,src:null===p||void 0===p?void 0:p.imageSource,alt:"profile"})})]})}):Object(d.jsx)(b.default,{})})})]})}}}]);
//# sourceMappingURL=3.65bde3e3.chunk.js.map