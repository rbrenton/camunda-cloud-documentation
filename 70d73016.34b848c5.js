(window.webpackJsonp=window.webpackJsonp||[]).push([[365],{1346:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/zeebe-helm-charts-43df4319116d6e818cbc575c46eb879e.png"},1347:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/files/kind-values-4ec599fe985333842b803a49d8e4efe8.yaml"},434:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),o=(n(0),n(874)),l={id:"installing-helm",title:"Zeebe Helm Charts"},c={unversionedId:"product-manuals/zeebe/deployment-guide/kubernetes/helm/installing-helm",id:"version-1.0/product-manuals/zeebe/deployment-guide/kubernetes/helm/installing-helm",isDocsHomePage:!1,title:"Zeebe Helm Charts",description:"Helm is a package manager for Kubernetes resources. Helm allows us to install a set of components by just referencing a package name and it allows us to override configurations to accommodate these packages to different scenarios. Helm also provide dependency management between charts, meaning that charts can depend on other charts allowing us to aggregate a set of components together that can be installed with a single command.",source:"@site/versioned_docs/version-1.0/product-manuals/zeebe/deployment-guide/kubernetes/helm/installing-helm.md",slug:"/product-manuals/zeebe/deployment-guide/kubernetes/helm/installing-helm",permalink:"/docs/1.0/product-manuals/zeebe/deployment-guide/kubernetes/helm/installing-helm",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-1.0/product-manuals/zeebe/deployment-guide/kubernetes/helm/installing-helm.md",version:"1.0",sidebar:"version-1.0/Product Manuals",previous:{title:"Prerequisites",permalink:"/docs/1.0/product-manuals/zeebe/deployment-guide/kubernetes/helm/prerequisites"},next:{title:"Accessing Operate from outside the cluster",permalink:"/docs/1.0/product-manuals/zeebe/deployment-guide/kubernetes/helm/accessing-operate"}},i=[{value:"Add Zeebe Helm Repository",id:"add-zeebe-helm-repository",children:[]},{value:"Install Zeebe Full Helm Chart (Zeebe Cluster + Operate + Ingress Controller)",id:"install-zeebe-full-helm-chart-zeebe-cluster--operate--ingress-controller",children:[]}],s={rightToc:i};function b(e){var t=e.components,l=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,l,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/helm/helm"}),"Helm")," is a package manager for Kubernetes resources. Helm allows us to install a set of components by just referencing a package name and it allows us to override configurations to accommodate these packages to different scenarios. Helm also provide dependency management between charts, meaning that charts can depend on other charts allowing us to aggregate a set of components together that can be installed with a single command. "),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note that all the Helm Charts are provided as a Community effort, these charts are not part of the Zeebe or Camunda Cloud release process, hence not updated as regularly as other artifacts. You are encouraged to get involved, submit fixes and report issues if you find them. ")),Object(o.b)("p",null,"The following Zeebe Helm Charts are currently available: "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Zeebe Cluster Helm (zeebe-cluster-helm)")," : Deploys a Zeebe Cluster with 3 brokers using the ",Object(o.b)("inlineCode",{parentName:"p"},"camunda/zeebe")," docker image. This Chart depends on ElasticSearch Helm Chart and optionally on Kibana Helm Chart. This chart is hosted in the following repository, where you can find more information about its configuration: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://github.com/camunda-community-hub/zeebe-cluster-helm/"}),"http://github.com/camunda-community-hub/zeebe-cluster-helm/"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Zeebe Operate Helm (zeebe-operate-helm)"),": Deploys Zeebe Operate which connects to an existing ElasticSearch. This chart source code can be located here: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://github.com/camunda-community-hub/zeebe-operate-helm/"}),"http://github.com/camunda-community-hub/zeebe-operate-helm/"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Zeebe Full Helm (zeebe-full-helm)")," (Parent): Deploys a Zeebe Cluster + Operate + Ingress Controller. This parent chart can be located here: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://github.com/camunda-community-hub/zeebe-full-helm/"}),"http://github.com/camunda-community-hub/zeebe-full-helm/"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Zeebe TaskList Helm (zeebe-tasklist-helm)")," (Experimental): Deploys a Task List component to deal with User Tasks. This chart source code can be located here: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://github.com/camunda-community-hub/zeebe-tasklist-helm/"}),"http://github.com/camunda-community-hub/zeebe-tasklist-helm/"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Zeebe ZeeQS Helm (zeebe-zeeqs-helm)")," (Experimental) Deploys a ZeeQS component that provides a Graphql interface to consume Zeebe Process data. This component requires the Hazelcast Exporter configured in the Zeebe Brokers. This chart source code can be located here: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://github.com/camunda-community-hub/zeebe-zeeqs-helm/"}),"http://github.com/camunda-community-hub/zeebe-zeeqs-helm/"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Zeebe Kubernetes Operator Helm (zeebe-operator)")," (Experimental) Deploys the Zeebe Kubernetes Operator. The Zeebe Operator allows you to declarative provision Zeebe Clusters by interacting with the ",Object(o.b)("inlineCode",{parentName:"p"},"kubectl")," command-line. This chart source code can be located here: ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://github.com/camunda-community-hub/zeebe-operator/"}),"http://github.com/camunda-community-hub/zeebe-operator/"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Zeebe CloudEvents Router Helm (zeebe-cloud-events-router)")," (Experimental) Deploys the Zeebe CloudEvents Router. This component provides ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://cloudevents.io"}),"CloudEvents")," Router to emit and consume CloudEvents from your processes running in Zeebe."))),Object(o.b)("p",null,Object(o.b)("img",{alt:"Charts",src:n(1346).default})),Object(o.b)("p",null,"When installing the ",Object(o.b)("inlineCode",{parentName:"p"},"zeebe-full-helm")," chart all the components marked in green are installed, the remaining components can be enabled by using the flags provided in the ",Object(o.b)("inlineCode",{parentName:"p"},"zeebe-full-helm")," chart documentation. "),Object(o.b)("h3",{id:"add-zeebe-helm-repository"},"Add Zeebe Helm Repository"),Object(o.b)("p",null,"The next step is to add the Zeebe official Helm Chart repository to your installation. Once this is done, Helm will be able to fetch and install Charts hosted in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://helm.camunda.io"}),"http://helm.camunda.io"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"> helm repo add zeebe https://helm.camunda.io\n> helm repo update\n")),Object(o.b)("p",null,"Once this is done, we are ready to install any of the Helm Charts hosted in the official Zeebe Helm Chart repo. "),Object(o.b)("h3",{id:"install-zeebe-full-helm-chart-zeebe-cluster--operate--ingress-controller"},"Install Zeebe Full Helm Chart (Zeebe Cluster + Operate + Ingress Controller)"),Object(o.b)("p",null,"In this section we are going to install all the available Zeebe components inside a Kubernetes Cluster. Notice that this Kubernetes cluster can have already running services and Zeebe is going to installed just as another set of services. "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"> helm install <RELEASE NAME> zeebe/zeebe-full-helm\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: change ",">","RELEASE NAME","<"," with a name of your choice\nNotice that you can add the ",Object(o.b)("inlineCode",{parentName:"p"},"-n")," flag to specify in which Kubernetes namespace the components should be installed.")),Object(o.b)("p",null,"Installing all the components in a cluster requires all the Docker images to be downloaded to the remote cluster, depending on which Cloud Provider you are using, the amount of time that it will take to fetch all the images will vary. "),Object(o.b)("p",null,"If you are using ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/kubernetes-sigs/kind"}),"Kubernetes KIND")," add ",Object(o.b)("inlineCode",{parentName:"p"},"-f kind-values.yaml")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The ",Object(o.b)("inlineCode",{parentName:"p"},"kind-values.yaml")," file can be ",Object(o.b)("a",{target:"_blank",href:n(1347).default},"downloaded here"),"."),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"helm install --name <RELEASE NAME> zeebe/zeebe-full-helm -f kind-values.yaml\n"))),Object(o.b)("p",null,"This will deploy the same components but with a set of parameters tailored to a local environment setup. "),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note that all the Docker images will be downloaded to your local KIND cluster, so it might take some time for the services to get started. ")),Object(o.b)("p",null,"You can check the progress of your deployment by checking if the Kubernetes PODs are up and running with:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"> kubectl get pods\n")),Object(o.b)("p",null,"which returns something like: "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"NAME                                                   READY   STATUS    RESTARTS   AGE\nelasticsearch-master-0                                 1/1     Running   0          4m6s\nelasticsearch-master-1                                 1/1     Running   0          4m6s\nelasticsearch-master-2                                 1/1     Running   0          4m6s\n<RELEASE NAME>-nginx-ingress-controller-5cf6dd7894-kc25s      1/1     Running   0          4m6s\n<RELEASE NAME>-nginx-ingress-default-backend-f5454db5-j9vh6   1/1     Running   0          4m6s\n<RELEASE NAME>-operate-5d4867d6d-h9zqw                        1/1     Running   0          4m6s\n<RELEASE NAME>-zeebe-0                                        1/1     Running   0          4m6s\n<RELEASE NAME>-zeebe-1                                        1/1     Running   0          4m6s\n<RELEASE NAME>-zeebe-2                                        1/1     Running   0          4m6s\n")),Object(o.b)("p",null,"Check that each Pod has at least 1/1 running instances. You can always tail the logs of these pods by running:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"> kubectl logs -f <POD NAME> \n")),Object(o.b)("p",null,"In order to interact with the services inside the cluster you need to use ",Object(o.b)("inlineCode",{parentName:"p"},"port-forward")," to route traffic from your environment to the cluster. "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"> kubectl port-forward svc/<RELEASE NAME>-zeebe 26500:26500\n")),Object(o.b)("p",null,"Now you can connect and execute operations against your newly created Zeebe cluster. "),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Notice that you need to keep ",Object(o.b)("inlineCode",{parentName:"p"},"port-forward")," running to be able to communicate with the remote cluster.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Notice that accessing directly to the Zeebe Cluster using ",Object(o.b)("inlineCode",{parentName:"p"},"kubectl port-forward")," is recommended for development purposes. By default the Zeebe Helm Charts are not exposing the Zeebe Cluster via Ingress. If you want to use ",Object(o.b)("inlineCode",{parentName:"p"},"zbctl")," or a local client/worker from outside the Kubernetes Cluster, you rely on ",Object(o.b)("inlineCode",{parentName:"p"},"kubectl port-forward")," to the Zeebe Cluster to communicate.")))}b.isMDXComponent=!0},874:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=b(n),p=a,h=u["".concat(l,".").concat(p)]||u[p]||m[p]||o;return n?r.a.createElement(h,c(c({ref:t},s),{},{components:n})):r.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);