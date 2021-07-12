(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[50772],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return m},kt:function(){return l}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(r),l=a,k=d["".concat(c,".").concat(l)]||d[l]||u[l]||s;return r?n.createElement(k,i(i({ref:t},m),{},{components:r})):n.createElement(k,i({ref:t},m))}));function l(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},37398:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return c},default:function(){return m}});var n=r(22122),a=r(19756),s=(r(67294),r(3905)),i={id:"script-tasks",title:"Script tasks"},o={unversionedId:"reference/bpmn-processes/script-tasks/script-tasks",id:"reference/bpmn-processes/script-tasks/script-tasks",isDocsHomePage:!1,title:"Script tasks",description:"A script task is used to model the evaluation of a script, for example, a script written in Groovy,",source:"@site/docs/reference/bpmn-processes/script-tasks/script-tasks.md",sourceDirName:"reference/bpmn-processes/script-tasks",slug:"/reference/bpmn-processes/script-tasks/script-tasks",permalink:"/docs/reference/bpmn-processes/script-tasks/script-tasks",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/reference/bpmn-processes/script-tasks/script-tasks.md",version:"current",frontMatter:{id:"script-tasks",title:"Script tasks"},sidebar:"Reference",previous:{title:"Business rule tasks",permalink:"/docs/reference/bpmn-processes/business-rule-tasks/business-rule-tasks"},next:{title:"Send tasks",permalink:"/docs/reference/bpmn-processes/send-tasks/send-tasks"}},c=[{value:"Defining a task",id:"defining-a-task",children:[]},{value:"Additional resources",id:"additional-resources",children:[{value:"XML Representation",id:"xml-representation",children:[]},{value:"References",id:"references",children:[]}]}],p={toc:c};function m(e){var t=e.components,i=(0,a.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"A script task is used to model the evaluation of a script, for example, a script written in Groovy,\nJavaScript, or Python."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"task",src:r(32838).Z})),(0,s.kt)("p",null,"Script tasks behave ",(0,s.kt)("strong",{parentName:"p"},"exactly")," like ",(0,s.kt)("a",{parentName:"p",href:"/docs/reference/bpmn-processes/service-tasks/service-tasks"},"service tasks"),". Both task\ntypes are based on jobs and ",(0,s.kt)("a",{parentName:"p",href:"/docs/product-manuals/concepts/job-workers"},"job workers"),". The\ndifferences between these task types are the visual representation (i.e. the task marker) and the\nsemantics for the model."),(0,s.kt)("p",null,"When a process instance enters a script task then it creates a corresponding job and wait for its\ncompletion. A job worker should request jobs of this job type and process them. When the job is\ncompleted then the process instance continues."),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Jobs for script tasks are not processed by Zeebe itself. In order to process them, you need to\nprovide a job worker."))),(0,s.kt)("h2",{id:"defining-a-task"},"Defining a task"),(0,s.kt)("p",null,"A script task must define a ",(0,s.kt)("a",{parentName:"p",href:"../service-tasks/service-tasks#task-definition"},"job type"),". It specifies\nthe type of job that workers should subscribe to (e.g. ",(0,s.kt)("inlineCode",{parentName:"p"},"script"),")."),(0,s.kt)("p",null,"Use ",(0,s.kt)("a",{parentName:"p",href:"../service-tasks/service-tasks#task-headers"},"task headers")," to pass static parameters to the job\nworker (e.g. the script to evaluate)."),(0,s.kt)("p",null,"Define ",(0,s.kt)("a",{parentName:"p",href:"../service-tasks/service-tasks#variable-mappings"},"variable mappings")," to transform the\nvariables that are passed to the job worker, or to customize how the variables of the job are merged\nin the process instance."),(0,s.kt)("h2",{id:"additional-resources"},"Additional resources"),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Community Extension")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Have a look at\nthe ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/camunda-community-hub/zeebe-script-worker"},"Zeebe Script Worker"),". It's a\ncommunity extension that provides a job worker to evaluate scripts. You can run it, or use it as a\nblueprint for your own job worker."))),(0,s.kt)("h3",{id:"xml-representation"},"XML Representation"),(0,s.kt)("p",null,"A script task with a custom header:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},'<bpmn:scriptTask id="calculate-sum" name="Calculate sum">\n  <bpmn:extensionElements>\n    <zeebe:taskDefinition type="script" />\n    <zeebe:taskHeaders>\n      <zeebe:header key="language" value="javascript" />\n      <zeebe:header key="script" value="a + b" />\n    </zeebe:taskHeaders>\n  </bpmn:extensionElements>\n</bpmn:scriptTask>\n')),(0,s.kt)("h3",{id:"references"},"References"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/product-manuals/concepts/job-workers"},"Job handling")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/product-manuals/concepts/variables#inputoutput-variable-mappings"},"Variable mappings"))))}m.isMDXComponent=!0},32838:function(e,t){"use strict";t.Z="data:image/png;base64,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"}}]);