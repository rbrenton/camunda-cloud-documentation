(window.webpackJsonp=window.webpackJsonp||[]).push([[355],{425:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return b}));var r=n(3),i=n(7),l=(n(0),n(452)),a={id:"feel-built-in-functions-context",title:"Context Functions"},c={unversionedId:"reference/feel/builtin-functions/feel-built-in-functions-context",id:"reference/feel/builtin-functions/feel-built-in-functions-context",isDocsHomePage:!1,title:"Context Functions",description:"get value()",source:"@site/docs/reference/feel/builtin-functions/feel-built-in-functions-context.md",slug:"/reference/feel/builtin-functions/feel-built-in-functions-context",permalink:"/docs/reference/feel/builtin-functions/feel-built-in-functions-context",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/reference/feel/builtin-functions/feel-built-in-functions-context.md",version:"current",sidebar:"Reference",previous:{title:"List Functions",permalink:"/docs/reference/feel/builtin-functions/feel-built-in-functions-list"},next:{title:"Temporal Functions",permalink:"/docs/reference/feel/builtin-functions/feel-built-in-functions-temporal"}},o=[{value:"get value()",id:"get-value",children:[]},{value:"get entries()",id:"get-entries",children:[]},{value:"put()",id:"put",children:[]},{value:"put all()",id:"put-all",children:[]}],u={rightToc:o};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"get-value"},"get value()"),Object(l.b)("p",null,"Returns the value of the context entry with the given key."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"parameters:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"context"),": context"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"key"),": string"))),Object(l.b)("li",{parentName:"ul"},"result: any")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'get value({foo: 123}, "foo") \n// 123\n')),Object(l.b)("h2",{id:"get-entries"},"get entries()"),Object(l.b)("p",null,"Returns the entries of the context as list of key-value-pairs."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"parameters:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"context"),": context"))),Object(l.b)("li",{parentName:"ul"},'result: list of context which contains two entries for "key" and "value"')),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'get entries({foo: 123})\n// [{key: "foo", value: 123}]\n')),Object(l.b)("h2",{id:"put"},"put()"),Object(l.b)("p",null,"Add the given key and value to a context. Returns a new context that includes the entry. It might override an existing entry of the context.  "),Object(l.b)("p",null,"Returns ",Object(l.b)("inlineCode",{parentName:"p"},"null")," if the value is not defined."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"parameters:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"context"),": context"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"key"),": string"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"value"),": any"))),Object(l.b)("li",{parentName:"ul"},"result: context  ")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'put({x:1}, "y", 2)\n// {x:1, y:2}\n')),Object(l.b)("h2",{id:"put-all"},"put all()"),Object(l.b)("p",null,"Union the given contexts (two or more). Returns a new context that includes all entries of the given contexts. It might override context entries if the keys are equal. The entries are overridden in the same order as the contexts are passed in the method.    "),Object(l.b)("p",null,"Returns ",Object(l.b)("inlineCode",{parentName:"p"},"null")," if one of the values is not a context."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"parameters:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"contexts"),": contexts as varargs"))),Object(l.b)("li",{parentName:"ul"},"result: context  ")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"put all({x:1}, {y:2})\n// {x:1, y:2}\n")))}b.isMDXComponent=!0},452:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),b=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=b(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,a=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=b(n),f=r,m=s["".concat(a,".").concat(f)]||s[f]||p[f]||l;return n?i.a.createElement(m,c(c({ref:t},u),{},{components:n})):i.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=f;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<l;u++)a[u]=n[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);