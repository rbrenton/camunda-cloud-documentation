(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),o=n(7),r=(n(0),n(874)),i={id:"manage-cloud-management-api-clients",title:"Manage cloud management API clients"},c={unversionedId:"product-manuals/cloud-console/manage-organization/manage-cloud-management-api-clients",id:"version-1.0/product-manuals/cloud-console/manage-organization/manage-cloud-management-api-clients",isDocsHomePage:!1,title:"Manage cloud management API clients",description:"To interact with Camunda Cloud programmatically, without using the Camunda Cloud UI, you can create Cloud Management API clients.",source:"@site/versioned_docs/version-1.0/product-manuals/cloud-console/manage-organization/manage-cloud-management-api-clients.md",slug:"/product-manuals/cloud-console/manage-organization/manage-cloud-management-api-clients",permalink:"/docs/1.0/product-manuals/cloud-console/manage-organization/manage-cloud-management-api-clients",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-1.0/product-manuals/cloud-console/manage-organization/manage-cloud-management-api-clients.md",version:"1.0",sidebar:"version-1.0/Product Manuals",previous:{title:"View organization activity",permalink:"/docs/1.0/product-manuals/cloud-console/manage-organization/view-organization-activity"},next:{title:"Update billing reservations",permalink:"/docs/1.0/product-manuals/cloud-console/manage-organization/update-billing-reservations"}},l=[],s={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"To interact with Camunda Cloud programmatically, without using the Camunda Cloud UI, you can create Cloud Management API clients."),Object(r.b)("p",null,"Cloud Management API clients are created for an organization, and can access all Zeebe clusters of this organization."),Object(r.b)("p",null,"You can manage clients in the organization settings under the tab ",Object(r.b)("inlineCode",{parentName:"p"},"Cloud Management API"),"."),Object(r.b)("p",null,"A client can have one or multiple of the following permissions:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Get clusters")," - retrieve information of all clusters of the organization"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Create clusters")," - create a cluster for the organization"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Delete clusters")," - delete a cluster of the organization"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Get Zeebe clients")," - retrieve all Zeebe clients of the organization"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Create Zeebe clients")," - create a Zeebe client for a cluster of the organization"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Delete Zeebe clients")," - delete a Zeebe client of a cluster owned by the organization")),Object(r.b)("p",null,"After a Cloud Management API client is created, the ",Object(r.b)("inlineCode",{parentName:"p"},"Client Secret")," is only shown once! You can also download a script that requests an access roken with your credentials."),Object(r.b)("p",null,"To retrieve an access token for the Cloud Management API client:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'curl --header "Content-Type: application/json" \\\n    --request POST \\\n    --data \'{"grant_type":"client_credentials", "audience":"api.cloud.camunda.io", "client_id":"XXX", "client_secret":"YYY"}\' \\\n    https://login.cloud.camunda.io/oauth/token\n')),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Please note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"Access tokens have a validity period that can be found in the access token. After this time a new access token must be requested."),Object(r.b)("li",{parentName:"ul"},"The auth service has built-in rate limiting. If too many token requests are executed in a short time, the client is blocked for a certain time. Since the access tokens have a certain validity period, they must be cached on the client side.")))))}u.isMDXComponent=!0},874:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),p=a,b=m["".concat(i,".").concat(p)]||m[p]||d[p]||r;return n?o.a.createElement(b,c(c({ref:t},s),{},{components:n})):o.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);