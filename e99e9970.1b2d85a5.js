(window.webpackJsonp=window.webpackJsonp||[]).push([[734],{801:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return o})),r.d(t,"Tag",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),i=(r(0),r(874)),s={id:"tasks",title:"tasks"},c={unversionedId:"reference/tasklist-api/queries/tasks",id:"version-1.0/reference/tasklist-api/queries/tasks",isDocsHomePage:!1,title:"tasks",description:"<span",source:"@site/versioned_docs/version-1.0/reference/tasklist-api/queries/tasks.mdx",slug:"/reference/tasklist-api/queries/tasks",permalink:"/docs/1.0/reference/tasklist-api/queries/tasks",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-1.0/reference/tasklist-api/queries/tasks.mdx",version:"1.0",sidebar:"version-1.0/Reference",previous:{title:"task",permalink:"/docs/1.0/reference/tasklist-api/queries/task"},next:{title:"variables",permalink:"/docs/1.0/reference/tasklist-api/queries/variables"}},o=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],u=function(e){var t=e.children,r=e.color;return Object(i.b)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},p={rightToc:o,Tag:u};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Get list of tasks based on ",Object(i.b)("inlineCode",{parentName:"p"},"TaskQuery"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),"tasks(\n  query: TaskQuery!\n): [Task!]!\n\n")),Object(i.b)("h3",{id:"arguments"},"Arguments"),Object(i.b)("h4",{id:"query-taskquery"},Object(i.b)("inlineCode",{parentName:"h4"},"query")," (",Object(i.b)("a",Object(n.a)({parentName:"h4"},{href:"/docs/reference/tasklist-api/inputs/task-query"}),Object(i.b)("inlineCode",{parentName:"a"},"TaskQuery!")),")"),Object(i.b)("h3",{id:"type"},"Type"),Object(i.b)("h4",{id:"task"},Object(i.b)("a",Object(n.a)({parentName:"h4"},{href:"/docs/reference/tasklist-api/objects/task"}),Object(i.b)("inlineCode",{parentName:"a"},"Task"))),Object(i.b)("p",null,"Describes the User task."))}l.isMDXComponent=!0},874:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),l=p(r),d=n,f=l["".concat(s,".").concat(d)]||l[d]||b[d]||i;return r?a.a.createElement(f,c(c({ref:t},u),{},{components:r})):a.a.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var u=2;u<i;u++)s[u]=r[u];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);