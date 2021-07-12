(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[31854],{3905:function(e,t,s){"use strict";s.d(t,{Zo:function(){return l},kt:function(){return m}});var n=s(67294);function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function a(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function o(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?a(Object(s),!0).forEach((function(t){r(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function i(e,t){if(null==e)return{};var s,n,r=function(e,t){if(null==e)return{};var s,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)s=a[n],t.indexOf(s)>=0||(r[s]=e[s]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)s=a[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}var c=n.createContext({}),u=function(e){var t=n.useContext(c),s=t;return e&&(s="function"==typeof e?e(t):o(o({},t),e)),s},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var s=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(s),m=r,k=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return s?n.createElement(k,o(o({ref:t},l),{},{components:s})):n.createElement(k,o({ref:t},l))}));function m(e,t){var s=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=s.length,o=new Array(a);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<a;u++)o[u]=s[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,s)}d.displayName="MDXCreateElement"},65448:function(e,t,s){"use strict";s.r(t),s.d(t,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return c},default:function(){return l}});var n=s(22122),r=s(19756),a=(s(67294),s(3905)),o={id:"business-rule-tasks",title:"Business rule tasks"},i={unversionedId:"reference/bpmn-processes/business-rule-tasks/business-rule-tasks",id:"reference/bpmn-processes/business-rule-tasks/business-rule-tasks",isDocsHomePage:!1,title:"Business rule tasks",description:"A business rule task is used to model the evaluation of a business rule, for example, a decision",source:"@site/docs/reference/bpmn-processes/business-rule-tasks/business-rule-tasks.md",sourceDirName:"reference/bpmn-processes/business-rule-tasks",slug:"/reference/bpmn-processes/business-rule-tasks/business-rule-tasks",permalink:"/docs/reference/bpmn-processes/business-rule-tasks/business-rule-tasks",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/reference/bpmn-processes/business-rule-tasks/business-rule-tasks.md",version:"current",frontMatter:{id:"business-rule-tasks",title:"Business rule tasks"},sidebar:"Reference",previous:{title:"Receive tasks",permalink:"/docs/reference/bpmn-processes/receive-tasks/receive-tasks"},next:{title:"Script tasks",permalink:"/docs/reference/bpmn-processes/script-tasks/script-tasks"}},c=[{value:"Defining a task",id:"defining-a-task",children:[]},{value:"Additional resources",id:"additional-resources",children:[{value:"XML Representation",id:"xml-representation",children:[]},{value:"References",id:"references",children:[]}]}],u={toc:c};function l(e){var t=e.components,o=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A business rule task is used to model the evaluation of a business rule, for example, a decision\nmodeled in ",(0,a.kt)("a",{parentName:"p",href:"https://www.omg.org/dmn/"},"DMN")," (Decision Model and Notation)."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"task",src:s(47829).Z})),(0,a.kt)("p",null,"Business rule tasks behave ",(0,a.kt)("strong",{parentName:"p"},"exactly")," like ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/bpmn-processes/service-tasks/service-tasks"},"service tasks"),". Both\ntask types are based on jobs and ",(0,a.kt)("a",{parentName:"p",href:"/docs/product-manuals/concepts/job-workers"},"job workers"),".\nThe differences between these task types are the visual representation (i.e. the task marker) and\nthe semantics for the model."),(0,a.kt)("p",null,"When a process instance enters a business rule task then it creates a corresponding job and wait for\nits completion. A job worker should request jobs of this job type and process them. When the job is\ncompleted then the process instance continues."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Jobs for business rule tasks are not processed by Zeebe itself. In order to process them, you need\nto provide a job worker."))),(0,a.kt)("h2",{id:"defining-a-task"},"Defining a task"),(0,a.kt)("p",null,"A business rule task must define a ",(0,a.kt)("a",{parentName:"p",href:"../service-tasks/service-tasks#task-definition"},"job type"),". It\nspecifies the type of job that workers should subscribe to (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"DMN"),")."),(0,a.kt)("p",null,"Use ",(0,a.kt)("a",{parentName:"p",href:"../service-tasks/service-tasks#task-headers"},"task headers")," to pass static parameters to the job\nworker (e.g. the key of the decision to evaluate)."),(0,a.kt)("p",null,"Define ",(0,a.kt)("a",{parentName:"p",href:"../service-tasks/service-tasks#variable-mappings"},"variable mappings")," to transform the\nvariables that are passed to the job worker, or to customize how the variables of the job are merged\nin the process instance."),(0,a.kt)("h2",{id:"additional-resources"},"Additional resources"),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Community Extension")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Have a look at the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/camunda-community-hub/zeebe-dmn-worker"},"Zeebe DMN Worker"),".\nIt's a community extension that provides a job worker to evaluate DMN decisions. You can run it, or\nuse it as a blueprint for your own job worker."))),(0,a.kt)("h3",{id:"xml-representation"},"XML Representation"),(0,a.kt)("p",null,"A business rule task with a custom header:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<bpmn:businessRuleTask id="calculate-risk" name="Calculate risk">\n  <bpmn:extensionElements>\n    <zeebe:taskDefinition type="DMN" />\n    <zeebe:taskHeaders>\n      <zeebe:header key="decisionRef" value="risk" />\n    </zeebe:taskHeaders>\n  </bpmn:extensionElements>\n</bpmn:businessRuleTask>\n')),(0,a.kt)("h3",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/product-manuals/concepts/job-workers"},"Job handling")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/product-manuals/concepts/variables#inputoutput-variable-mappings"},"Variable mappings"))))}l.isMDXComponent=!0},47829:function(e,t){"use strict";t.Z="data:image/png;base64,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"}}]);