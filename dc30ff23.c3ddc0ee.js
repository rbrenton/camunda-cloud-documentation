(window.webpackJsonp=window.webpackJsonp||[]).push([[686],{753:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(874)),l={id:"importer-and-archiver",title:"Importer and archiver"},i={unversionedId:"product-manuals/operate/deployment/importer-and-archiver",id:"version-1.0/product-manuals/operate/deployment/importer-and-archiver",isDocsHomePage:!1,title:"Importer and archiver",description:"Operate consists of three modules:",source:"@site/versioned_docs/version-1.0/product-manuals/operate/deployment/importer-and-archiver.md",slug:"/product-manuals/operate/deployment/importer-and-archiver",permalink:"/docs/1.0/product-manuals/operate/deployment/importer-and-archiver",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-1.0/product-manuals/operate/deployment/importer-and-archiver.md",version:"1.0",sidebar:"version-1.0/Product Manuals",previous:{title:"Schema and migration",permalink:"/docs/1.0/product-manuals/operate/deployment/schema-and-migration"},next:{title:"Authentication",permalink:"/docs/1.0/product-manuals/operate/deployment/authentication"}},c=[],b={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Operate consists of three modules:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Webapp")," - contains the UI and operation executor functionality"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Importer")," - is responsible for importing data from Zeebe "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Archiver"),' - is responsible for archiving "old" data (finished process instances and user operations) (see ',Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.0/product-manuals/operate/deployment/data-retention"}),"Data retention"),").")),Object(o.b)("p",null,"Modules can be run together or separately in any combination and can be scaled. When you run Operate instance, by default, all modules are enabled.\nTo disable them you can use following configuration parameters:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Configuration parameter"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default value"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"camunda.operate.importerEnabled"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"When true, Importer module is enabled"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"true")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"camunda.operate.archiverEnabled"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"When true, Archiver module is enabled"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"true")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"camunda.operate.webappEnabled"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"When true, Webapp module is enabled"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"true")))),Object(o.b)("p",null,"Additionally you can have several importer and archiver nodes to increase throughput. Internally they will spread their work based on Zeebe partitions."),Object(o.b)("p",null,"E.g. if your Zeebe runs 10 partitions and you configure 2 importer nodes, they will import data from 5 partitions each.\nEach single importer/archiver node must be configured with the use of following configuration parameters:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Configuration parameter"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default value"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"camunda.operate.clusterNode.partitionIds"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Array of Zeebe partition ids, this Importer (or Archiver) node must be responsible for"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"empty array, meaning all partitions data is loaded")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"camunda.operate.clusterNode.nodeCount"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Total amount of Importer (or Archiver) nodes in the cluster"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"camunda.operate.clusterNode.currentNodeId"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Id of current Importer (or Archiver) node, starting from 0"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0")))),Object(o.b)("p",null,"It's enough to configure either ",Object(o.b)("inlineCode",{parentName:"p"},"partitionIds")," or pair of ",Object(o.b)("inlineCode",{parentName:"p"},"nodeCount")," and ",Object(o.b)("inlineCode",{parentName:"p"},"currentNodeId"),". In case you provide ",Object(o.b)("inlineCode",{parentName:"p"},"nodeCount")," and ",Object(o.b)("inlineCode",{parentName:"p"},"currentNodeId"),",\neach node will automatically guess Zeebe partitions it is responsible for."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note")," ",Object(o.b)("inlineCode",{parentName:"p"},"nodeCount")," always represents the number of nodes of one specific type.")),Object(o.b)("p",null,"E.g. configuration of the cluster with 1 Webapp node, 2 Importer nodes and 1 Archiver node could look like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"Webapp node\n\ncamunda.operate:\n  archiverEnabled: false\n  importerEnabled: false\n  #other configuration...\n\nImporter node #1\n\ncamunda.operate:\n  archiverEnabled: false\n  webappEnabled: false\n  clusterNode:\n    nodeCount: 2\n    currentNodeId: 0\n  #other configuration...\n  \nImporter node #2\n\ncamunda.operate:\n  archiverEnabled: false\n  webappEnabled: false\n  clusterNode:\n    nodeCount: 2\n    currentNodeId: 1\n  #other configuration...\n  \nArchiver node\n\ncamunda.operate:\n  webappEnabled: false\n  importerEnabled: false\n  \n")),Object(o.b)("p",null,"You can further parallelize archiver and(or) importer within one node by using following configuration parameters:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Configuration parameter"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default value"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"camunda.operate.archiver.threadsCount"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Number of threads, in which data will be archived"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"1")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"camunda.operate.importer.threadsCount"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Number of threads, in which data will be importe"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"3")))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note")," Parallelization of import and archiving within one node will also happen based on Zeebe partitions, meaning that only configurations with\n(number of nodes) * (threadsCount) <= (total number of Zeebe partitions) will make sense. Too many threads and nodes will still work, but some of them will be idle.")))}p.isMDXComponent=!0},874:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,s=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.a.createElement(s,i(i({ref:t},b),{},{components:n})):r.a.createElement(s,i({ref:t},b))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var b=2;b<o;b++)l[b]=n[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);