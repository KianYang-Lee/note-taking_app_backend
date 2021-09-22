(this.webpackJsonppart_c_getting_data_from_server=this.webpackJsonppart_c_getting_data_from_server||[]).push([[0],{41:function(t,e,n){},42:function(t,e,n){"use strict";n.r(e);var c=n(2),r=n(16),o=n.n(r),i=n(7),a=n(3),u=n(0),s=function(t){var e=t.note,n=t.toggleImportance,c=e.important?"make not important":"make important";return Object(u.jsxs)("li",{className:"note",children:[e.content,Object(u.jsx)("button",{onClick:n,children:c})]})},j=n(4),l=n.n(j),f="http://localhost:3001/api/notes",b=function(){return l.a.get(f).then((function(t){return t.data}))},d=function(t){return l.a.post(f,t).then((function(t){return t.data}))},m=function(t,e){return l.a.put("".concat(f,"/").concat(t),e).then((function(t){return t.data}))},p=function(t){var e=t.message;return null===e?null:Object(u.jsx)("div",{className:"error",children:e})},O=function(){return Object(u.jsxs)("div",{style:{color:"green",fontStyle:"italic",fontSize:16},children:[Object(u.jsx)("br",{}),Object(u.jsx)("em",{children:"Note app, Department of Computer Science, University of Helsinki 2021"})]})},h=function(){var t=Object(c.useState)([]),e=Object(a.a)(t,2),n=e[0],r=e[1],o=Object(c.useState)(""),j=Object(a.a)(o,2),l=j[0],f=j[1],h=Object(c.useState)(!1),v=Object(a.a)(h,2),g=v[0],x=v[1],S=Object(c.useState)(null),_=Object(a.a)(S,2),k=_[0],y=_[1];Object(c.useEffect)((function(){b().then((function(t){r(t)}))}),[]);var w=g?n:n.filter((function(t){return t.important}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Notes"}),Object(u.jsx)(p,{message:k}),Object(u.jsx)("div",{children:Object(u.jsxs)("button",{onClick:function(){return x(!g)},children:["show ",g?"important":"all"]})}),Object(u.jsx)("ul",{children:w.map((function(t){return Object(u.jsx)(s,{note:t,toggleImportance:function(){return function(t){var e=n.find((function(e){return e.id===t})),c=Object(i.a)(Object(i.a)({},e),{},{important:!e.important});m(t,c).then((function(e){r(n.map((function(n){return n.id!==t?n:e})))})).catch((function(c){y("Note '".concat(e.content,"' was already removed from server")),setTimeout((function(){y(null)}),5e3),r(n.filter((function(e){return e.id!==t})))}))}(t.id)}},t.id)}))}),Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e={content:l,date:(new Date).toISOString(),important:Math.random()>.5};d(e).then((function(t){r(n.concat(t)),f("")}))},children:[Object(u.jsx)("input",{value:l,onChange:function(t){console.log(t.target.value),f(t.target.value)}}),Object(u.jsx)("button",{type:"submit",children:"save"})]}),Object(u.jsx)(O,{})]})};n(41);o.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.63d9fea6.chunk.js.map