(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{1125:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/cloud-modeler-c4dc4edbeb833097301ec2c2fde40366.png"},1126:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/cloud-modeler-new-diagram-993e5771282764dc3be5ab4fd2678b45.png"},1127:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/cloud-modeler-new-diagram-with-name-c3dd2aa21443d401e71fe147b914e0b7.png"},1128:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/files/gettingstarted_quickstart-d4217a8991dcc5bac354926936a665d3.bpmn"},1129:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/zeebe-modeler-f05f41273c0bc159cf13a1fac6ca9476.png"},200:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(7),a=(n(0),n(874)),c=n(878),s=n(879),i={id:"model-your-first-process",title:"Model your first process"},l={unversionedId:"guides/getting-started/model-your-first-process",id:"version-0.26/guides/getting-started/model-your-first-process",isDocsHomePage:!1,title:"Model your first process",description:"In Camunda Cloud you have two options to design and deploy a workflow: the Console Modeler and the Zeebe Modeler.",source:"@site/versioned_docs/version-0.26/guides/getting-started/model-your-first-process.md",slug:"/guides/getting-started/model-your-first-process",permalink:"/docs/0.26/guides/getting-started/model-your-first-process",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.26/guides/getting-started/model-your-first-process.md",version:"0.26",sidebar:"version-0.26/Guides",previous:{title:"Connect to your cluster",permalink:"/docs/0.26/guides/getting-started/connect-to-your-cluster"},next:{title:"Deploy and start your process instance",permalink:"/docs/0.26/guides/getting-started/deploy-your-process-and-start-process-instance"}},u=[],d={rightToc:u};function b(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In Camunda Cloud you have two options to design and deploy a workflow: the Console Modeler and the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/zeebe-io/zeebe-modeler/releases"}),"Zeebe Modeler"),"."),Object(a.b)(c.a,{groupId:"modeler",defaultValue:"console",values:[{label:"Console Modeler",value:"console"},{label:"Zeebe Modeler",value:"desktop"}],mdxType:"Tabs"},Object(a.b)(s.a,{value:"console",mdxType:"TabItem"},Object(a.b)("p",null,"Using the Console Modeler, workflows can be designed and deployed, and new instances can be created directly from the console. "),Object(a.b)("p",null,"You can find all your saved models under the ",Object(a.b)("strong",{parentName:"p"},"BPMN Diagrams")," tab"),Object(a.b)("p",null,"Click ",Object(a.b)("strong",{parentName:"p"},"Create New Diagram"),"."),Object(a.b)("p",null,Object(a.b)("img",{alt:"console-modeler",src:n(1125).default})),Object(a.b)("p",null,"Give your diagram a name like ",Object(a.b)("inlineCode",{parentName:"p"},"Getting Started"),"."),Object(a.b)("p",null,Object(a.b)("img",{alt:"console-modeler-new-diagram",src:n(1126).default})),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"Save")," button should now appear for you to save your diagram."),Object(a.b)("p",null,Object(a.b)("img",{alt:"console-modeler-new-diagram",src:n(1127).default}))),Object(a.b)(s.a,{value:"desktop",mdxType:"TabItem"},Object(a.b)("p",null,"Using the Zeebe Modeler, workflows can be designed and deployed, and new instances can be created."),Object(a.b)("p",null,"Design a simple workflow with one start event and one end event or download this ",Object(a.b)("a",{target:"_blank",href:n(1128).default},"BPMN model"),"."),Object(a.b)("p",null,Object(a.b)("img",{alt:"zeebe-modeler",src:n(1129).default})))))}b.isMDXComponent=!0},874:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,f=d["".concat(c,".").concat(p)]||d[p]||b[p]||a;return n?o.a.createElement(f,s(s({ref:t},l),{},{components:n})):o.a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},875:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},876:function(e,t,n){"use strict";var r=n(0),o=n(877);t.a=function(){var e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},877:function(e,t,n){"use strict";var r=n(0),o=Object(r.createContext)(void 0);t.a=o},878:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(876),c=n(875),s=n(53),i=n.n(s),l=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,s=e.children,d=e.defaultValue,b=e.values,p=e.groupId,f=e.className,m=Object(a.a)(),g=m.tabGroupChoices,y=m.setTabGroupChoices,v=Object(r.useState)(d),O=v[0],j=v[1];if(null!=p){var h=g[p];null!=h&&h!==O&&b.some((function(e){return e.value===h}))&&j(h)}var w=function(e){j(e),null!=p&&y(p,e)},k=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},f)},b.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(c.a)("tabs__item",i.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(r.cloneElement)(s.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},s.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},879:function(e,t,n){"use strict";var r=n(3),o=n(0),a=n.n(o);t.a=function(e){var t=e.children,n=e.hidden,o=e.className;return a.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:o}),t)}}}]);