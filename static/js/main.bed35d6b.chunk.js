(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(24),a=n(8),s=(n(33),n(34),n(0)),r=n(2),j=n(4),i=n(12),l=n.n(i),o=n(3),b=function(e){var t=e.name,n=e.hasParent;return Object(o.jsx)("td",{children:n?Object(o.jsx)(a.b,{to:"/people/".concat(n.slug),className:l()({"has-text-danger":"f"===n.sex}),children:n.name}):t})},d="https://mate-academy.github.io/react_people-table/api/people.json";function h(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch(d)})).then((function(e){return e.json()}));var e}n(36);var x=function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})},O=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(!0),i=Object(j.a)(a,2),d=i[0],O=i[1],u=Object(s.useState)(!1),m=Object(j.a)(u,2),p=m[0],v=m[1],f=Object(r.p)().slug,g=void 0===f?"":f,N=function(e){return g==="".concat(e.slug)};Object(s.useEffect)((function(){h().then((function(e){return t=e,O(!1),p&&v(!1),void c(t);var t})).catch((function(){return v(!0)})).finally((function(){return O(!1)}))}),[]);var y=function(e){return null===n||void 0===n?void 0:n.find((function(t){return t.name===e}))};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{className:"title",children:"People Page"}),Object(o.jsx)("div",{className:"block",children:Object(o.jsxs)("div",{className:"box table-container",children:[d&&Object(o.jsx)(x,{}),p&&Object(o.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),(null===n||void 0===n?void 0:n.length)&&!d&&Object(o.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Name"}),Object(o.jsx)("th",{children:"Sex"}),Object(o.jsx)("th",{children:"Born"}),Object(o.jsx)("th",{children:"Died"}),Object(o.jsx)("th",{children:"Mother"}),Object(o.jsx)("th",{children:"Father"})]})}),Object(o.jsx)("tbody",{children:null===n||void 0===n?void 0:n.map((function(e){return Object(o.jsxs)("tr",{"data-cy":"person",className:l()({"has-background-warning":N(e)}),children:[Object(o.jsx)(b,{hasParent:e}),Object(o.jsx)("td",{children:e.sex}),Object(o.jsx)("td",{children:e.born}),Object(o.jsx)("td",{children:e.died}),e.motherName?Object(o.jsx)(b,{name:e.motherName,hasParent:y(e.motherName)}):Object(o.jsx)("td",{children:"-"}),e.fatherName?Object(o.jsx)(b,{name:e.fatherName,hasParent:y(e.fatherName)}):Object(o.jsx)("td",{children:"-"})]},e.name)}))})]}),!(null!==n&&void 0!==n&&n.length)&&!d&&!p&&Object(o.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"})]})})]})},u=(n(37),function(e){var t=e.to,n=e.text;return Object(o.jsx)(a.c,{to:t,className:function(e){var t=e.isActive;return l()("navbar-item",{"has-background-grey-lighter":t})},end:!0,children:n})}),m=function(){return Object(o.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"navbar-brand",children:[Object(o.jsx)(u,{to:"/",text:"Home"}),Object(o.jsx)(u,{to:"people",text:"People"})]})})})},p=function(){return Object(o.jsxs)("div",{"data-cy":"app",children:[Object(o.jsx)(m,{}),Object(o.jsx)("main",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)(r.d,{children:[Object(o.jsx)(r.b,{path:"/",element:Object(o.jsx)("h1",{className:"title",children:"Home Page"})}),Object(o.jsx)(r.b,{path:"home",element:Object(o.jsx)(r.a,{to:"/",replace:!0})}),Object(o.jsxs)(r.b,{path:"people",children:[Object(o.jsx)(r.b,{index:!0,element:Object(o.jsx)(O,{})}),Object(o.jsx)(r.b,{path:":slug",element:Object(o.jsx)(O,{})})]}),Object(o.jsx)(r.b,{}),Object(o.jsx)(r.b,{path:"*",element:Object(o.jsx)("h1",{className:"title",children:"Page not found"})})]})})})]})};Object(c.createRoot)(document.getElementById("root")).render(Object(o.jsx)(a.a,{children:Object(o.jsx)(p,{})}))}},[[38,1,2]]]);
//# sourceMappingURL=main.bed35d6b.chunk.js.map