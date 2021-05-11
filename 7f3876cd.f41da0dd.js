(window.webpackJsonp=window.webpackJsonp||[]).push([[407],{476:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return d}));var a=t(3),r=t(7),i=(t(0),t(874)),o={id:"incidents",title:"Incidents"},c={unversionedId:"product-manuals/concepts/incidents",id:"version-1.0/product-manuals/concepts/incidents",isDocsHomePage:!1,title:"Incidents",description:"In Camunda Cloud, an incident represents a problem in a process execution. That means a process instance is stuck at some point and it needs a user interaction to resolve the problem.",source:"@site/versioned_docs/version-1.0/product-manuals/concepts/incidents.md",slug:"/product-manuals/concepts/incidents",permalink:"/docs/1.0/product-manuals/concepts/incidents",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-1.0/product-manuals/concepts/incidents.md",version:"1.0",sidebar:"version-1.0/Product Manuals",previous:{title:"Messages",permalink:"/docs/1.0/product-manuals/concepts/messages"},next:{title:"Variables",permalink:"/docs/1.0/product-manuals/concepts/variables"}},s=[{value:"Resolving",id:"resolving",children:[{value:"Resolving a job-related incident",id:"resolving-a-job-related-incident",children:[]},{value:"Resolving a process instance-related incident",id:"resolving-a-process-instance-related-incident",children:[]}]}],l={rightToc:s};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In Camunda Cloud, an incident represents a problem in a process execution. That means a process instance is stuck at some point and it needs a user interaction to resolve the problem."),Object(i.b)("p",null,"Incidents are created in different situations, for example, when"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"a job is failed and it has no more retries left"),Object(i.b)("li",{parentName:"ul"},"an input or output variable mapping can't be applied"),Object(i.b)("li",{parentName:"ul"},"a condition can't be evaluated")),Object(i.b)("p",null,"Note that incidents are not created when an unexpected exception (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"NullPointerException"),", ",Object(i.b)("inlineCode",{parentName:"p"},"OutOfMemoyError")," etc.) happens."),Object(i.b)("h2",{id:"resolving"},"Resolving"),Object(i.b)("p",null,"In order to resolve an incident, the user must identify and resolve the problem first. Then, the user marks the incident as resolved and thereby triggers to retry process execution. If the problem still exists then a new incident is created."),Object(i.b)("h3",{id:"resolving-a-job-related-incident"},"Resolving a job-related incident"),Object(i.b)("p",null,"If a job is failed and it has no more retries left then an incident is created. There can be different reasons why the job is failed, for example, the variables are not in the expected format, or a service is not available (e.g. a database)."),Object(i.b)("p",null,"In case that it is caused by the variables, the user needs to update the variables of the process instance first. Then, the user needs to increase the remaining retries of the job and mark the incident as resolved. It is recommended to do this in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.0/product-manuals/operate/index"}),"Operate"),"."),Object(i.b)("p",null,"However, it is also possible to do this through the client API. Using the Java client, this could look like:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"client.newSetVariablesCommand(incident.getElementInstanceKey())\n    .variables(NEW_PAYLOAD)\n    .send()\n    .join();\n\nclient.newUpdateRetriesCommand(incident.getJobKey())\n    .retries(3)\n    .send()\n    .join();\n\nclient.newResolveIncidentCommand(incident.getKey())\n    .send()\n    .join();\n")),Object(i.b)("p",null,"When the incident is resolved then the job can be activated by a worker again."),Object(i.b)("h3",{id:"resolving-a-process-instance-related-incident"},"Resolving a process instance-related incident"),Object(i.b)("p",null,"If an incident is created while process execution and it is not related to a job, then it is usually related to the variables of the process instance. For example, an input or output variable mapping can't be applied."),Object(i.b)("p",null,"To resolve the incident, the user needs to update the variables first and then mark the incident as resolved. It is recommended to do this in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.0/product-manuals/operate/index"}),"Operate"),"."),Object(i.b)("p",null,"Using the Java client, this could look like:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"client.newSetVariablesCommand(incident.getElementInstanceKey())\n    .variables(NEW_VARIABLES)\n    .send()\n    .join();\n\nclient.newResolveIncidentCommand(incident.getKey())\n    .send()\n    .join();\n")),Object(i.b)("p",null,"When the incident is resolved then the process instance continues."))}d.isMDXComponent=!0},874:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),d=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=d(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(t),b=a,m=p["".concat(o,".").concat(b)]||p[b]||u[b]||i;return t?r.a.createElement(m,c(c({ref:n},l),{},{components:t})):r.a.createElement(m,c({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=b;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);