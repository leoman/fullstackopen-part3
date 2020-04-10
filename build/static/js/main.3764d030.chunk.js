(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{19:function(e,t,n){e.exports=n(44)},24:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(17),u=n.n(c),o=(n(24),n(18)),i=n(1),l=n.n(i),s=n(3),f=n(4),m=n(6),p=n.n(m),d="/api/persons",h={getAllPersons:function(){var e=Object(s.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=p.a.get(d),e.next=3,t;case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),createPerson:function(){var e=Object(s.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=p.a.post(d,t),e.next=3,n;case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),deletePerson:function(){var e=Object(s.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(d,"/").concat(t),e.abrupt("return",p.a.delete(n));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),updatePerson:function(){var e=Object(s.a)(l.a.mark((function e(t,n){var r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=p.a.put("".concat(d,"/").concat(t),n),e.next=3,r;case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},v=function(e){var t=e.message;return null===t?null:a.a.createElement("div",{className:t.type},t.text)},b=function(e){var t=e.filter,n=e.handleFilter;return a.a.createElement("form",null,a.a.createElement("div",null,"filter shown with: ",a.a.createElement("input",{type:"text",value:t,onChange:function(e){return n(e.target.value)}})))},w=function(e){var t=e.name,n=e.number,r=e.handleNewName,c=e.handleNewNumber,u=e.handleNewPerson;return a.a.createElement("form",null,a.a.createElement("div",null,"name: ",a.a.createElement("input",{type:"text",value:t,onChange:function(e){return r(e.target.value)}})),a.a.createElement("div",null,"number: ",a.a.createElement("input",{type:"text",value:n,onChange:function(e){return c(e.target.value)}})),a.a.createElement("div",null,a.a.createElement("button",{type:"submit",onClick:function(e){return u(e)}},"add")))},E=function(e){var t=e.persons,n=e.handleDeleteNumber;return a.a.createElement("div",null,t.map((function(e){return a.a.createElement("p",{key:e.name},e.name," ",e.number," ",a.a.createElement("button",{onClick:function(){return n(e)}},"delete"))})))},x=(n(43),function(){var e=Object(r.useState)([]),t=Object(f.a)(e,2),n=t[0],c=t[1],u=Object(r.useState)(""),i=Object(f.a)(u,2),m=i[0],p=i[1],d=Object(r.useState)(""),x=Object(f.a)(d,2),y=x[0],k=x[1],j=Object(r.useState)(""),O=Object(f.a)(j,2),g=O[0],N=O[1],P=Object(r.useState)(null),C=Object(f.a)(P,2),S=C[0],A=C[1];Object(r.useEffect)((function(){function e(){return(e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.getAllPersons();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var D=function(e){A(e),setTimeout((function(){A(null)}),5e3)},L=function(){var e=Object(s.a)(l.a.mark((function e(t){var r,a,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.name,a=t.id,!window.confirm("Delete ".concat(r))){e.next=12;break}return e.prev=2,e.next=5,h.deletePerson(a);case 5:u=n.filter((function(e){return e.name!==r})),c(u),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),D({text:"Information of '".concat(r,"' has already been removed from the server"),type:"error"});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),I=g?n.filter((function(e){return e.name.toLowerCase().includes(g.toLowerCase())})):n;return a.a.createElement("div",null,a.a.createElement("h2",null,"Phonebook"),a.a.createElement(v,{message:S}),a.a.createElement(b,{filter:g,handleFilter:function(e){return N(e)}}),a.a.createElement("h3",null,"Add a new"),a.a.createElement(w,{name:m,number:y,handleNewName:function(e){return p(e)},handleNewNumber:function(e){return k(e)},handleNewPerson:function(e){e.preventDefault(),p(""),k("");var t,r=(t=m,n.reduce((function(e,n){return n.name.toLowerCase()===t.toLowerCase()?n:e}),!1)),a={name:m,number:y};if(r){if(window.confirm("".concat(m," is already added to the phonebook, replace the old number with a new one?"))){h.updatePerson(r.id,a);var u=n.findIndex((function(e){return e.id===r.id}));n.splice(u,1,a);try{c(n),D({text:"Updated '".concat(m,"'"),type:"notification"})}catch(e){D({text:"Error while updating '".concat(m,"'"),type:"error"})}}}else{var i={name:m,number:y};h.createPerson(i),c([].concat(Object(o.a)(n),[i])),D({text:"Added '".concat(m,"'"),type:"notification"})}}}),a.a.createElement("h3",null,"Numbers"),a.a.createElement(E,{persons:I,handleDeleteNumber:L}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.3764d030.chunk.js.map