(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{189:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(3),o=t(7),i=(t(0),t(874)),a={id:"environment-variables",title:"Environment variables"},l={unversionedId:"product-manuals/zeebe/deployment-guide/configuration/environment-variables",id:"version-0.26/product-manuals/zeebe/deployment-guide/configuration/environment-variables",isDocsHomePage:!1,title:"Environment variables",description:"Environment variables for configuration",source:"@site/versioned_docs/version-0.26/product-manuals/zeebe/deployment-guide/configuration/environment-variables.md",slug:"/product-manuals/zeebe/deployment-guide/configuration/environment-variables",permalink:"/docs/0.26/product-manuals/zeebe/deployment-guide/configuration/environment-variables",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.26/product-manuals/zeebe/deployment-guide/configuration/environment-variables.md",version:"0.26",sidebar:"version-0.26/Product Manuals",previous:{title:"Gateway health probes",permalink:"/docs/0.26/product-manuals/zeebe/deployment-guide/configuration/gateway-health-probes"},next:{title:"Security",permalink:"/docs/0.26/product-manuals/zeebe/deployment-guide/security/security"}},c=[{value:"Environment variables for configuration",id:"environment-variables-for-configuration",children:[]},{value:"Environment variables for operators",id:"environment-variables-for-operators",children:[]},{value:"Environment variables for developers",id:"environment-variables-for-developers",children:[]}],u={rightToc:c};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"environment-variables-for-configuration"},"Environment variables for configuration"),Object(i.b)("p",null,"The configuration can be provided as a file or through environment variables. Mixing both sources is also possible. In that case environment variables have precedence over the configuration settings in the configuration file."),Object(i.b)("p",null,"All available environment variables are documented in the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"configuration/#configuration-file-templates"}),"configuration file templates"),"."),Object(i.b)("h2",{id:"environment-variables-for-operators"},"Environment variables for operators"),Object(i.b)("p",null,"The following environment variables are intended for operators:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ZEEBE_LOG_LEVEL"),": Sets the log level of the Zeebe Logger (default: ",Object(i.b)("inlineCode",{parentName:"li"},"info"),")."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ZEEBE_LOG_APPENDER"),": Sets the console log appender (default: ",Object(i.b)("inlineCode",{parentName:"li"},"Console"),"). We recommend using ",Object(i.b)("inlineCode",{parentName:"li"},"Stackdriver")," if Zeebe runs on Google Cloud Platform to output JSON formatted log messages")),Object(i.b)("h2",{id:"environment-variables-for-developers"},"Environment variables for developers"),Object(i.b)("p",null,"The following environment variables are intended for developers:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"SPRING_PROFILES_ACTIVE=dev"),": If this is set, the broker will start in a temporary folder and all data will be cleaned up upon exit"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ZEEBE_DEBUG=true/false"),": Activates a ",Object(i.b)("inlineCode",{parentName:"li"},"DebugLogExporter")," with default settings. The value of the environment variable toggles pretty printing")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note: It is not recommended to use these settings in production.")))}s.isMDXComponent=!0},874:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),s=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=s(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=s(t),d=r,m=b["".concat(a,".").concat(d)]||b[d]||p[d]||i;return t?o.a.createElement(m,l(l({ref:n},u),{},{components:t})):o.a.createElement(m,l({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=t[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);