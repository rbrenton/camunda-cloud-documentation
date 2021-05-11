(window.webpackJsonp=window.webpackJsonp||[]).push([[393],{462:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return d}));var r=t(3),a=t(7),o=(t(0),t(874)),l={id:"data-pojo",title:"Handle variables as POJO"},i={unversionedId:"product-manuals/clients/java-client-examples/data-pojo",id:"version-1.0/product-manuals/clients/java-client-examples/data-pojo",isDocsHomePage:!1,title:"Handle variables as POJO",description:"Related Resources",source:"@site/versioned_docs/version-1.0/product-manuals/clients/java-client-examples/data-pojo.md",slug:"/product-manuals/clients/java-client-examples/data-pojo",permalink:"/docs/1.0/product-manuals/clients/java-client-examples/data-pojo",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-1.0/product-manuals/clients/java-client-examples/data-pojo.md",version:"1.0",sidebar:"version-1.0/Product Manuals",previous:{title:"Open a job worker",permalink:"/docs/1.0/product-manuals/clients/java-client-examples/job-worker-open"},next:{title:"Request cluster topology",permalink:"/docs/1.0/product-manuals/clients/java-client-examples/cluster-topology-request"}},c=[{value:"Related Resources",id:"related-resources",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"HandleVariablesAsPojo.java",id:"handlevariablesaspojojava",children:[]}],s={rightToc:c};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"related-resources"},"Related Resources"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/1.0/reference/bpmn-processes/data-flow"}),"Data flow"))),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Running Zeebe broker with endpoint ",Object(o.b)("inlineCode",{parentName:"li"},"localhost:26500")," (default)"),Object(o.b)("li",{parentName:"ol"},"Run the ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/1.0/product-manuals/clients/java-client-examples/process-deploy"}),"deploy a process example"))),Object(o.b)("h2",{id:"handlevariablesaspojojava"},"HandleVariablesAsPojo.java"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/zeebe-io/zeebe/tree/develop/samples/src/main/java/io/zeebe/example/data/HandleVariablesAsPojo.java"}),"Source on github")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'    ...\n    try (final ZeebeClient client = clientBuilder.build()) {\n      final Order order = new Order();\n      order.setOrderId(31243);\n\n      client\n          .newCreateInstanceCommand()\n          .bpmnProcessId("demoProcess")\n          .latestVersion()\n          .variables(order)\n          .send()\n          .join();\n\n      client.newWorker().jobType("foo").handler(new DemoJobHandler()).open();\n\n      // run until System.in receives exit command\n      waitUntilSystemInput("exit");\n    }\n  }\n\n  public static class Order {\n    private long orderId;\n    private double totalPrice;\n\n    public long getOrderId() {\n      return orderId;\n    }\n\n    public void setOrderId(final long orderId) {\n      this.orderId = orderId;\n    }\n\n    public double getTotalPrice() {\n      return totalPrice;\n    }\n\n    public void setTotalPrice(final double totalPrice) {\n      this.totalPrice = totalPrice;\n    }\n  }\n\n  private static class DemoJobHandler implements JobHandler {\n    @Override\n    public void handle(final JobClient client, final ActivatedJob job) {\n      // read the variables of the job\n      final Order order = job.getVariablesAsType(Order.class);\n      System.out.println("new job with orderId: " + order.getOrderId());\n\n      // update the variables and complete the job\n      order.setTotalPrice(46.50);\n\n      client.newCompleteCommand(job.getKey()).variables(order).send();\n    }\n  }\n')))}d.isMDXComponent=!0},874:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),d=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=d(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(t),b=r,m=p["".concat(l,".").concat(b)]||p[b]||u[b]||o;return t?a.a.createElement(m,i(i({ref:n},s),{},{components:t})):a.a.createElement(m,i({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=b;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);