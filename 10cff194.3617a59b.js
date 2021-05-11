(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{124:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(7),a=(r(0),r(874)),i={id:"job-worker",title:"Job worker"},c={unversionedId:"product-manuals/clients/java-client/job-worker",id:"version-1.0/product-manuals/clients/java-client/job-worker",isDocsHomePage:!1,title:"Job worker",description:"Related resources",source:"@site/versioned_docs/version-1.0/product-manuals/clients/java-client/job-worker.md",slug:"/product-manuals/clients/java-client/job-worker",permalink:"/docs/1.0/product-manuals/clients/java-client/job-worker",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-1.0/product-manuals/clients/java-client/job-worker.md",version:"1.0"},l=[{value:"Related resources",id:"related-resources",children:[]},{value:"The Java client&#39;s job worker",id:"the-java-clients-job-worker",children:[]},{value:"Example usage",id:"example-usage",children:[]},{value:"Backoff configuration",id:"backoff-configuration",children:[]}],b={rightToc:l};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"related-resources"},"Related resources"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.0/product-manuals/concepts/job-workers"}),"Job worker basics"))),Object(a.b)("h2",{id:"the-java-clients-job-worker"},"The Java client's job worker"),Object(a.b)("p",null,"The Java client provides a job worker that takes care of polling for available jobs and allows you to focus on writing code to handle the activated jobs."),Object(a.b)("p",null,"On ",Object(a.b)("inlineCode",{parentName:"p"},"open")," the job worker waits ",Object(a.b)("inlineCode",{parentName:"p"},"pollInterval")," milliseconds and then polls for ",Object(a.b)("inlineCode",{parentName:"p"},"maxJobsActive")," jobs.\nIt then continues with the following schedule:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"when a poll did not activate any jobs, it waits for ",Object(a.b)("inlineCode",{parentName:"li"},"pollInterval")," milliseconds and then polls for more jobs."),Object(a.b)("li",{parentName:"ul"},"when a poll activated jobs, the worker submits each job to the job handler.\nEvery time a job is handled, the worker checks whether the number of unhandled jobs have dropped below 30% of ",Object(a.b)("inlineCode",{parentName:"li"},"maxJobsActive"),".\nThe first time that happens, it will poll for more jobs."),Object(a.b)("li",{parentName:"ul"},"when a poll fails with an error response, a backoff strategy is applied.\nIt waits for the delay provided by the ",Object(a.b)("inlineCode",{parentName:"li"},"backoffSupplier")," and then polls for more jobs.")),Object(a.b)("h2",{id:"example-usage"},"Example usage"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.0/product-manuals/clients/java-client-examples/job-worker-open"}),"Open a job worker"))),Object(a.b)("h2",{id:"backoff-configuration"},"Backoff configuration"),Object(a.b)("p",null,"When a poll fails with an error response, the job worker applies a backoff strategy.\nIt waits for some time, after which it polls again for more jobs.\nThis gives a Zeebe cluster some time to recover from a failure.\nIn some cases, you may want to configure this backoff strategy to better fit your situation."),Object(a.b)("p",null,"The retry delay (i.e. the time the job worker waits after an error before the next poll for new jobs) is provided by the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/zeebe-io/zeebe/blob/develop/clients/java/src/main/java/io/zeebe/client/api/worker/BackoffSupplier.java"}),Object(a.b)("inlineCode",{parentName:"a"},"BackoffSupplier")),".\nYou can replace it using the ",Object(a.b)("inlineCode",{parentName:"p"},".backoffSupplier()")," method on the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/zeebe-io/zeebe/blob/develop/clients/java/src/main/java/io/zeebe/client/api/worker/JobWorkerBuilderStep1.java"}),Object(a.b)("inlineCode",{parentName:"a"},"JobWorkerBuilder")),".\nBy default, the job worker uses an exponential backoff implementation, which can you can configure using ",Object(a.b)("inlineCode",{parentName:"p"},"BackoffSupplier.newBackoffBuilder()"),"."),Object(a.b)("p",null,"The backoff strategy is especially useful for dealing with the ",Object(a.b)("inlineCode",{parentName:"p"},"GRPC_STATUS_RESOURCE_EXHAUSTED")," error response (see ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"../../../reference/grpc#technical-error-handling"}),"gRPC Technical Error Handling"),").\nThis error code indicates the Zeebe cluster is currently under too much load and has decided to reject this request.\nBy backing off, the job worker helps Zeebe by reducing the load.\nNote, that Zeebe's ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"../../zeebe/deployment-guide/operations/backpressure"}),"backpressure mechanism")," can also be configured."))}s.isMDXComponent=!0},874:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var b=o.a.createContext({}),s=function(e){var t=o.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(r),d=n,f=p["".concat(i,".").concat(d)]||p[d]||u[d]||a;return r?o.a.createElement(f,c(c({ref:t},b),{},{components:r})):o.a.createElement(f,c({ref:t},b))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var b=2;b<a;b++)i[b]=r[b];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);