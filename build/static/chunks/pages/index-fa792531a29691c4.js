(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(8430)}])},3325:function(c,b,a){"use strict";a.d(b,{A:function(){return k}});var d=a(5893),e=a(7948),f=a(9008),g=a(2293),h=a(155),i=a(1664);a(7294);var j=function(){return(0,d.jsx)(g.Z,{position:"static",children:(0,d.jsx)(e.Z,{maxWidth:"xl",children:(0,d.jsx)(h.Z,{disableGutters:!0,children:(0,d.jsx)(i.default,{href:"/",children:(0,d.jsx)("a",{children:"Bear Test App - Punk API"})})})})})},k=function(a){var b=a.children,c=a.title;return(0,d.jsxs)("div",{children:[(0,d.jsx)(f.default,{children:(0,d.jsx)("title",{children:c})}),(0,d.jsx)("header",{children:(0,d.jsx)(j,{})}),(0,d.jsx)("main",{children:(0,d.jsx)(e.Z,{maxWidth:"lg",children:(0,d.jsx)("div",{children:b})})}),(0,d.jsxs)("footer",{children:[(0,d.jsx)("br",{}),(0,d.jsx)("hr",{}),(0,d.jsx)("br",{})]})]})}},8430:function(h,b,a){"use strict";a.r(b),a.d(b,{"default":function(){return G}});var i=a(5893),j=a(6886),k=a(3471),l=a(1163),m=a(7294),n=a(6242),o=a(8445),p=a(3965),q=a(4267),r=a(5861),s=a(5675),t=a(1664),u=function(c){var b,a=c.beer;return a.image_url||(a.image_url="https://www.carlsberg.com/media/1298/card_regular_1883.jpg?anchor=center&mode=crop&width=480&height=630"),(0,i.jsx)("div",{children:(0,i.jsx)(t.default,{href:"/details/[id]",as:"/details/".concat(a.id),children:(0,i.jsx)("a",{children:(0,i.jsxs)(n.Z,{elevation:1,sx:{height:"550px"},children:[(0,i.jsx)(o.Z,{title:"".concat(a.name),subheader:a.name}),(0,i.jsx)(p.Z,{title:a.name,children:(0,i.jsx)(s.default,{src:a.image_url,width:200,height:200,objectFit:"contain",alt:a.name})}),(0,i.jsxs)(q.Z,{children:[(0,i.jsxs)(r.Z,{variant:"body2",color:"textSecondary",component:"p",children:["Name: ",(0,i.jsx)("strong",{children:a.name})]}),(0,i.jsxs)(r.Z,{variant:"body2",color:"textSecondary",component:"p",children:["Description: ",(b=a.description).length>=140?"".concat(b.slice(0,140),"..."):b]})]})]})})})})},v=a(913),w=a(3449),x=a(3321),c=a(1421),y=a.n(c),z=function(b){var d=b.handleSearch,a=(0,m.useState)(""),c=a[0],e=a[1];return(0,i.jsxs)("div",{className:y().root,children:[(0,i.jsx)(v.Z,{sx:{minWidth:"80%"},children:(0,i.jsx)(w.Z,{fullWidth:!0,placeholder:"Search...",value:c,onChange:function(a){e(a.target.value)}})}),(0,i.jsx)(x.Z,{variant:"outlined",className:y().btn,onClick:function(){d(c),e("")},children:"Search"})]})},A=a(3325),B=a(5054),C=function(a){var b=a.totalPages,c=a.page,d=a.handlePaginationChange;return(0,i.jsx)("div",{children:(0,i.jsx)(B.Z,{count:b,variant:"outlined",color:"primary",className:"pagination",page:c,onChange:d})})},D=function(a){return void 0===a?"":Array.isArray(a)?a[0]:a},d=a(4051),e=a.n(d);function E(c,d,e,f,g,h,i){try{var a=c[h](i),b=a.value}catch(j){e(j);return}a.done?d(b):Promise.resolve(b).then(f,g)}var f,g,F=(f=e().mark(function a(b,c){var d,f;return e().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d="https://api.punkapi.com/v2/beers?"+(c?"page=".concat(b,"&beer_name=").concat(c):"page=".concat(b)),a.next=3,fetch(d);case 3:return f=a.sent,a.abrupt("return",f.json());case 5:case"end":return a.stop()}},a)}),g=function(){var a=this,b=arguments;return new Promise(function(d,e){var g=f.apply(a,b);function c(a){E(g,d,e,c,h,"next",a)}function h(a){E(g,d,e,c,h,"throw",a)}c(void 0)})},function(a,b){return g.apply(this,arguments)}),G=function(){var c=(0,l.useRouter)(),d=(0,m.useState)(parseInt(D(c.query.page))||1),b=d[0],o=d[1],e=(0,m.useState)(""),n=e[0],p=e[1],f=(0,m.useState)(13),g=f[0],q=f[1],a=(0,k.useQuery)(["beers",b,n],function(){return F(b,n)},{keepPreviousData:!0}).data;(0,m.useEffect)(function(){c.query.page&&o(parseInt(D(c.query.page)))},[c.query.page]),(0,m.useEffect)(function(){a&&a.length<25?q(1):q(13)},[a]);var h=function(b,a){o(a),c.push("?page=".concat(a),void 0,{shallow:!0})};return(0,i.jsx)("div",{children:(0,i.jsx)(A.A,{title:"Bear Test App",children:(0,i.jsx)(j.ZP,{container:!0,spacing:2,children:(0,i.jsxs)(j.ZP,{container:!0,item:!0,xs:12,sm:8,spacing:2,children:[(0,i.jsx)(j.ZP,{item:!0,xs:12,children:(0,i.jsx)(z,{handleSearch:function(a){p(a)}})}),(0,i.jsx)(j.ZP,{item:!0,xs:12,children:(0,i.jsx)(C,{totalPages:g,page:b,handlePaginationChange:h})}),a&&(null==a?void 0:a.map(function(a){return(0,i.jsx)(j.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,i.jsx)(u,{beer:a})},a.id)})),(0,i.jsx)(j.ZP,{item:!0,xs:12,children:(0,i.jsx)(C,{totalPages:g,page:b,handlePaginationChange:h})})]})})})})}},1421:function(a){a.exports={root:"Search_root__I08oe",btn:"Search_btn__Bq12F"}}},function(a){a.O(0,[528,673,774,888,179],function(){return a(a.s=5301)}),_N_E=a.O()}])