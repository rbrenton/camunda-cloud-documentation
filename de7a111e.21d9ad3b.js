(window.webpackJsonp=window.webpackJsonp||[]).push([[698],{1642:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/zeebe-operator-video-fc03be1f3cf70db51a4a326f94c23478.png"},1643:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/zeebe-operator-flow-5f24067ff314ccbe50f89d6bc1c518cb.png"},765:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(874)),i={id:"zeebe-operator",title:"Zeebe Operator (Experimental)"},s={unversionedId:"product-manuals/zeebe/deployment-guide/kubernetes/operator/zeebe-operator",id:"version-1.0/product-manuals/zeebe/deployment-guide/kubernetes/operator/zeebe-operator",isDocsHomePage:!1,title:"Zeebe Operator (Experimental)",description:"The Zeebe Kubernetes Operator was born out of the need to manage more than one single Zeebe cluster running inside Kubernetes clusters. Zeebe clusters have their own lifecycle and in real implementations, the need to update, monitor, and manage some of these cluster components while applications are running becomes challenging. The objective of the Zeebe Kubernetes Operator is to simplify and natively integrate Zeebe with Kubernetes, to solve operational burden and facilitate the creation and maintenance of a set of clusters.",source:"@site/versioned_docs/version-1.0/product-manuals/zeebe/deployment-guide/kubernetes/operator/zeebe-operator.md",slug:"/product-manuals/zeebe/deployment-guide/kubernetes/operator/zeebe-operator",permalink:"/docs/1.0/product-manuals/zeebe/deployment-guide/kubernetes/operator/zeebe-operator",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-1.0/product-manuals/zeebe/deployment-guide/kubernetes/operator/zeebe-operator.md",version:"1.0",sidebar:"version-1.0/Product Manuals",previous:{title:"Accessing Operate from outside the cluster",permalink:"/docs/1.0/product-manuals/zeebe/deployment-guide/kubernetes/helm/accessing-operate"},next:{title:"Getting started tutorial",permalink:"/docs/1.0/product-manuals/zeebe/deployment-guide/getting-started/index"}},l=[{value:"Getting started",id:"getting-started",children:[]},{value:"Technical details and dependencies",id:"technical-details-and-dependencies",children:[]}],c={rightToc:l};function u(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The Zeebe Kubernetes Operator was born out of the need to manage more than one single Zeebe cluster running inside Kubernetes clusters. Zeebe clusters have their own lifecycle and in real implementations, the need to update, monitor, and manage some of these cluster components while applications are running becomes challenging. The objective of the Zeebe Kubernetes Operator is to simplify and natively integrate Zeebe with Kubernetes, to solve operational burden and facilitate the creation and maintenance of a set of clusters. "),Object(o.b)("p",null,"This operator has been built with Kubernetes Helm in mind, meaning that at the end of the day, this operator will be in charge of managing ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/helm/helm"}),"Helm charts"),". If you are not familiar with Helm, Helm is a package manager for Kubernetes, which help us to package and distribute Kubernetes manifest. Helm also deals with installing, labeling and dependency management between packages (charts). Because we have Zeebe Helm packages already here: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://helm.camunda.io"}),"http://helm.camunda.io")," which are automatically versioned and released, the Zeebe Kubernetes Operator will use these charts to create and manage new clusters and other related components. "),Object(o.b)("p",null,"Because we are in Kubernetes realms we need to provide a declarative way of stating that we want a new Zeebe cluster to be provisioned. For this reason, the ZeebeCluster Custom Resource Definition (CRD) is introduced. This resource contains all the information needed to provision a cluster and it will also reflect the current cluster status. The Zeebe Kubernetes Operator is built to monitor ZeebeCluster resources and interact with the Kubernetes APIs under the hood to make sure that the Zeebe cluster is provisioned, upgraded or deleted correctly."),Object(o.b)("h2",{id:"getting-started"},"Getting started"),Object(o.b)("p",null,"The Zeebe Kubernetes Operator can be installed using Helm, as it is provided as a Helm chart as well. In contrast with ",Object(o.b)("inlineCode",{parentName:"p"},"zeebe-cluster"),", ",Object(o.b)("inlineCode",{parentName:"p"},"zeebe-operate")," and ",Object(o.b)("inlineCode",{parentName:"p"},"zeebe-full")," charts, the operator chart installation by itself doesn\u2019t install any Zeebe cluster, but allows you to do that by creating ZeebeCluster CRD resources. "),Object(o.b)("p",null,"The following steps will guide you to install the Operator with Helm3  (which is the default version now)"),Object(o.b)("p",null,"Add the Zeebe Helm repository:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"helm repo add zeebe https://helm.camunda.io\nhelm repo update\n")),Object(o.b)("p",null,"Now you are ready to install the Zeebe Kubernetes Operator:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"helm install zeebe-operator zeebe/zeebe-operator\n")),Object(o.b)("p",null,"Create my-zeebe-cluster.yaml"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"apiVersion: zeebe.zeebe.io/v1\nkind: ZeebeCluster\nmetadata:\n  name: my-zeebe-cluster\n")),Object(o.b)("p",null,"Create the resource within the Kubernetes cluster with:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"kubectl apply -f my-zeebe-cluster.yaml\n")),Object(o.b)("p",null,"This will create a new namespace with the name stated in the ZeebeCluster resource ( ",Object(o.b)("inlineCode",{parentName:"p"},"ZeebeCluster.metadata.name")," ) and provision a new Zeebe Cluster plus ElasticSearch by default."),Object(o.b)("p",null,"Future versions will allow you to specify in the ZeebeCluster resource which ElasticSearch instance to use. "),Object(o.b)("p",null,"Notice that the first time provisioning a cluster, docker images will  be downloaded to the Kubernetes Docker registry so the first cluster might take more time to be provisioned. "),Object(o.b)("p",null,"You can now query for your Zeebe clusters using the ",Object(o.b)("inlineCode",{parentName:"p"},"kubectl")," CLI:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"kubectl get zb\n")),Object(o.b)("p",null,"If you delete the ZeebeCluster resource the actual ZeebeCluster will be automatically removed from your cluster.\nNow you can check that there is a new \u201cNamespace\u201d created with:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"kubectl get ns\n")),Object(o.b)("p",null,"And also check that the cluster is correctly provisioned by looking at the Pods created inside the newly created namespace with"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"kubectl get pods -n <Zeebe_Cluster_Name> -w\n")),Object(o.b)("p",null,"The next video show these commands in action along with the installation of the Zeebe Kubernetes Operator:"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=U-crhMfuJgY"}),Object(o.b)("img",{src:r(1642).default}))),Object(o.b)("h2",{id:"technical-details-and-dependencies"},"Technical details and dependencies"),Object(o.b)("p",null,"This Kubernetes Operator was built using KubeBuilder V2.1+, Tekton 0.8.0+ and Helm 3."),Object(o.b)("p",null,"The Operator defines currently 1 CRD (Custom Resource Definition): ",Object(o.b)("inlineCode",{parentName:"p"},"ZeebeCluster"),", but in future versions, new types will be defined for other components such as Zeebe Operate and workers.  The ZeebeCluster resource represent a low-level resource which will instantiate a Zeebe cluster based on predefined parameters. This low-level resource definition can be used to define the cluster topology and HA configurations."),Object(o.b)("p",null,"The Zeebe Kubernetes Operator was built using the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/kubernetes-sigs/kubebuilder"}),"kubebuilder framework")," for writing the controller\u2019s logic and scaffolding the CRD type. Internally it does interact with ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/tektoncd/pipeline"}),"Tekton Pipelines")," in order to install and manage Zeebe Helm charts.  The project itself is being built, released and tested using ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://jenkins-x.io/"}),"Jenkins X"),". This leads to some changes in how KubeBuilder\u2019s project is structured, as in its current shape the project is not organised in a way that is easy to create a Helm chart out of it."),Object(o.b)("p",null,"The main flow of the Operator works like this:\n",Object(o.b)("img",{alt:"Flow",src:r(1643).default})),Object(o.b)("p",null,"First, the Operator will be constantly looking for ZeebeCluster resources. When one is found a new Namespace is created and a Tekton Task and TaskRun are created to \u201cupgrade\u201d the Helm charts defined inside the Version Stream repository (hosted here: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/zeebe-io/zeebe-version-stream-helm"}),"https://github.com/zeebe-io/zeebe-version-stream-helm")," )."),Object(o.b)("p",null,"This repository (referred as Version Stream Repository) contains a list of blessed versions that will be installed when a new ZeebeCluster resource is detected by the operator. Using a Version Stream repository provides us with the flexibility to evolve the operator code and the charts that define what needs to be provisioned independently. This allows for a simple upgrade path to future versions by using a Git repository as central reference to a stable version."),Object(o.b)("p",null,"In future versions, the option to choose a version stream repository will be provided, allowing different streams."),Object(o.b)("p",null,"The Task created in Tekton Pipelines execute two basic operations:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"First, clone Version Stream repository (using simple git clone)\nRun Helm Upgrade of the chart defined in the Version Stream Repository (it will automatically upgrade/install if it doesn\u2019t exist)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Then, running Helm upgrade/install will create a Helm release which can be upgraded if new versions of the charts are available. These releases can be queried using the Helm cli tool: ",Object(o.b)("inlineCode",{parentName:"p"}," helm list --all-namespaces"),"."))),Object(o.b)("p",null,"Once the task is created an execution is triggered by the creation of a TaskRun (an actual instance of the task) and the operator will monitor for this task to be completed. Once the task is completed, the Operator watches for the Zeebe Cluster to be provisioned. In a more detailed look, the Operator will look for a StatefulSet (Zeebe broker nodes) with a set of labels matching the ZeebeCluster name, inside the created namespace."),Object(o.b)("p",null,"Once the StatefulSet is located, the Operator assigns the ZeebeCluster resource as the Owner of this StatefulSet, hence it will be notified about the changes emitted by the resources associated to the StatefulSet. This allows the Operator to externalise a health status of the Zeebe cluster at any given point, understanding the actual state of the cluster itself."))}u.isMDXComponent=!0},874:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=u(r),d=n,h=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return r?a.a.createElement(h,s(s({ref:t},c),{},{components:r})):a.a.createElement(h,s({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);