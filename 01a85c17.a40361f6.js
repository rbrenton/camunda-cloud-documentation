(window.webpackJsonp=window.webpackJsonp||[]).push([[10,92,100,331],{77:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(887),c=t(881),s=t(895);a.default=function(e){var a=e.tags,t=e.sidebar,r={};Object.keys(a).forEach((function(e){var a=function(e){return e[0].toUpperCase()}(e);r[a]=r[a]||[],r[a].push(e)}));var i=Object.entries(r).sort((function(e,a){var t=e[0],r=a[0];return t===r?0:t>r?1:-1})).map((function(e){var t=e[0],r=e[1];return n.a.createElement("div",{key:t},n.a.createElement("h3",null,t),r.map((function(e){return n.a.createElement(c.a,{className:"padding-right--md",href:a[e].permalink,key:e},a[e].name," (",a[e].count,")")})),n.a.createElement("hr",null))})).filter((function(e){return null!=e}));return n.a.createElement(l.a,{title:"Tags",description:"Blog Tags",wrapperClassName:"blog-wrapper"},n.a.createElement("div",{className:"container margin-vert--lg"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--2"},n.a.createElement(s.a,{sidebar:t})),n.a.createElement("main",{className:"col col--8"},n.a.createElement("h1",null,"Tags"),n.a.createElement("div",{className:"margin-vert--lg"},i)))))}},888:function(e,a,t){"use strict";var r=t(3),n=t(7),l=t(0),c=t.n(l),s=t(875),i=t(23),o=t(881),m=t(880);var u=function(){if("undefined"!=typeof window){var e=function(){dataLayer.push(arguments)};window.dataLayer=window.dataLayer||[],e("js",new Date),e("config","G-G9VC5S5W87",{anonymize_ip:!0})}},f=t(882),d=t(54),p=t.n(d);function E(e){var a=e.to,t=e.href,l=e.label,s=e.prependBaseUrlToHref,i=Object(n.a)(e,["to","href","label","prependBaseUrlToHref"]),m=Object(f.a)(a),u=Object(f.a)(t,{forcePrependBaseUrl:!0});return c.a.createElement(o.a,Object(r.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:s?u:t}:{to:m},i),l)}var v=function(e){var a=e.url,t=e.alt;return c.a.createElement("img",{className:"footer__logo",alt:t,src:a})};a.a=function(){var e=Object(m.useThemeConfig)().footer,a=e||{},t=a.copyright,r=a.links,n=void 0===r?[]:r,l=a.logo,o=void 0===l?{}:l,d=Object(f.a)(o.src);return e?c.a.createElement("footer",{className:Object(s.a)("footer",{"footer--dark":"dark"===e.style})},c.a.createElement("div",{className:"container"},n&&n.length>0&&c.a.createElement("div",{className:"row footer__links"},n.map((function(e,a){return c.a.createElement("div",{key:a,className:"col footer__col"},null!=e.title?c.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?c.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,a){return e.html?c.a.createElement("li",{key:a,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):c.a.createElement("li",{key:e.href||e.to,className:"footer__item"},c.a.createElement(E,e))}))):null)}))),(o||t)&&c.a.createElement("div",{className:"text--center"},o&&o.src&&c.a.createElement("div",{className:"margin-bottom--sm"},o.href?c.a.createElement("a",{href:o.href,target:"_blank",rel:"noopener noreferrer",className:p.a.footerLogoLink},c.a.createElement(v,{alt:o.alt,url:d})):c.a.createElement(v,{alt:o.alt,url:d})),c.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}}))),c.a.createElement(i.a,null,c.a.createElement("script",{src:"https://cmp.osano.com/16CVvwSNKHi9t1grQ/2ce963c0-31c9-4b54-b052-d66a2a948ccc/osano.js"}),c.a.createElement("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-G9VC5S5W87"}),u())):null}},895:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var r=t(0),n=t.n(r),l=t(875),c=t(881),s=t(62),i=t.n(s);function o(e){var a=e.sidebar;return 0===a.items.length?null:n.a.createElement("div",{className:Object(l.a)(i.a.sidebar,"thin-scrollbar")},n.a.createElement("h3",{className:i.a.sidebarItemTitle},a.title),n.a.createElement("ul",{className:i.a.sidebarItemList},a.items.map((function(e){return n.a.createElement("li",{key:e.permalink,className:i.a.sidebarItem},n.a.createElement(c.a,{isNavLink:!0,to:e.permalink,className:i.a.sidebarItemLink,activeClassName:i.a.sidebarItemLinkActive},e.title))}))))}}}]);