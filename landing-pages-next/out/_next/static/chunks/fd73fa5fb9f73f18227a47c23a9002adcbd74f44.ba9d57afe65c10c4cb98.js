(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(i.default.useContext(o.AmpStateContext))};var r,i=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,i=void 0!==r&&r,o=e.hasQuery,c=void 0!==o&&o;return n||i&&c}},"03Hb":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("nKUr"),i=n("qYZg"),o=function(e){var t=e.children;return Object(r.jsx)(i.a,{dangerouslySetInnerHTML:{__html:t}})}},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"7eNJ":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("nKUr"),i=n("KrlL"),o=n("vOnD"),c=o.d.div.withConfig({displayName:"styles__Container",componentId:"sc-48zwta-0"})(["",""],(function(e){var t=e.theme,n=e.background;return Object(o.c)(["background:",";color:",";",";min-height:calc(100vh - 4rem);display:flex;align-items:center;"],t.colors.white,t.colors.primaryColor,!!n&&function(e){return Object(o.c)(["background:",";color:",";"],e.colors.primaryColor,e.colors.white)}(t))})),a=function(e){var t=e.children,n=e.background,o=void 0!==n&&n,a=e.sectionId,s=void 0===a?"":a;return Object(r.jsx)(c,{background:o,id:s,children:Object(r.jsx)(i.a,{children:t})})}},"8Kt/":function(e,t,n){"use strict";n("oI91");t.__esModule=!0,t.defaultHead=d,t.default=void 0;var r,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=r?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(n,i,o):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},c=n("lwAK"),a=n("FYa8"),s=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(u,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(i){var o=!0,c=!1;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){c=!0;var a=i.key.slice(i.key.indexOf("$")+1);e.has(a)?o=!1:e.add(a)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(var s=0,l=f.length;s<l;s++){var d=f[s];if(i.props.hasOwnProperty(d))if("charSet"===d)n.has(d)?o=!1:n.add(d);else{var u=i.props[d],p=r[d]||new Set;"name"===d&&c||!p.has(u)?(p.add(u),r[d]=p):o=!1}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return i.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,i.useContext)(c.AmpStateContext),r=(0,i.useContext)(a.HeadManagerContext);return i.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)}m.rewind=function(){};var v=m;t.default=v},"8OQS":function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i},e.exports.__esModule=!0,e.exports.default=e.exports},"8SHQ":function(e,t,n){"use strict";t.a={url:"https://landing-pages-berchez.herokuapp.com",siteName:"Walter Berchez",defaultSlug:"landing-pages"}},D6Cf:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("vOnD"),i={small:function(e){return Object(r.c)(["font-size:",";"],e.font.sizes.medium)},medium:function(e){return Object(r.c)(["font-size:",";"],e.font.sizes.large)},big:function(e){return Object(r.c)(["font-size:",";"],e.font.sizes.xlarge)},huge:function(e){return Object(r.c)(["font-size:",";",";"],e.font.sizes.xhuge,o(e))}},o=function(e){return Object(r.c)(["@media ","{font-size:",";}"],e.media.lteMedium,e.font.sizes.xlarge)},c=r.d.h1.withConfig({displayName:"styles__Title",componentId:"sc-1kmrmur-0"})(["",""],(function(e){var t=e.theme,n=e.colorDark,o=e.size,c=e.uppercase;return Object(r.c)(["color:",";",";",""],n?t.colors.primaryColor:t.colors.white,i[o](t),function(e){return Object(r.c)(["text-transform:",";"],e?"uppercase":"none")}(c))}))},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var i=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=i},HCWB:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("nKUr"),i=n("D6Cf"),o=function(e){var t=e.children,n=e.colorDark,o=void 0===n||n,c=e.as,a=void 0===c?"h1":c,s=e.size,l=void 0===s?"huge":s,d=e.uppercase,u=void 0!==d&&d;return Object(r.jsx)(i.a,{colorDark:o,as:a,size:l,uppercase:u,children:t})}},KrlL:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("nKUr"),i=n("OYkR"),o=function(e){var t=e.children;return Object(r.jsx)(i.a,{children:t})}},OYkR:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("vOnD"),i=r.d.div.withConfig({displayName:"styles__Container",componentId:"sc-15h2yl4-0"})(["",""],(function(e){var t=e.theme;return Object(r.c)(["max-width:120rem;margin:0 auto;padding:",";width:100%;"],t.spacings.large)}))},OwR4:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("nKUr"),i=n("vOnD"),o=i.d.div.withConfig({displayName:"styles__Container",componentId:"sc-sqefe-0"})(["",""],(function(){return Object(i.c)(["text-align:center;max-width:58rem;margin:0 auto;"])})),c=(i.d.div.withConfig({displayName:"styles__Html",componentId:"sc-sqefe-1"})(["",""],(function(e){var t=e.theme;return Object(i.c)(["margin:"," 0;"],t.spacings.xhuge)})),n("7eNJ")),a=n("HCWB"),s=n("03Hb"),l=function(e){var t=e.title,n=e.html,i=e.background,l=void 0!==i&&i,d=e.sectionId,u=void 0===d?"":d;return Object(r.jsx)(c.a,{background:l,sectionId:u,children:Object(r.jsxs)(o,{children:[Object(r.jsx)(a.a,{uppercase:!0,colorDark:!l,as:"h2",children:t}),Object(r.jsx)(s.a,{children:n})]})})}},QILm:function(e,t,n){var r=n("8OQS");e.exports=function(e,t){if(null==e)return{};var n,i,o=r(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(i=0;i<c.length;i++)n=c[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o},e.exports.__esModule=!0,e.exports.default=e.exports},Xuae:function(e,t,n){"use strict";var r=n("mPvQ"),i=n("/GRZ"),o=n("i2R6"),c=(n("qXWd"),n("48fX")),a=n("tCBg"),s=n("T0f4");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var i=s(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return a(this,n)}}t.__esModule=!0,t.default=void 0;var d=n("q1tI"),u=function(e){c(n,e);var t=l(n);function n(e){var o;return i(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=u},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("zoAU"),i=n("7KCV");t.__esModule=!0,t.default=void 0;var o=i(n("q1tI")),c=n("elyg"),a=n("nOHt"),s=n("vNVm"),l={};function d(e,t,n,r){if(e&&(0,c.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(i?"%"+i:"")]=!0}}var u=function(e){var t=!1!==e.prefetch,n=(0,a.useRouter)(),i=n&&n.pathname||"/",u=o.default.useMemo((function(){var t=(0,c.resolveHref)(i,e.href,!0),n=r(t,2),o=n[0],a=n[1];return{href:o,as:e.as?(0,c.resolveHref)(i,e.as):a||o}}),[i,e.href,e.as]),f=u.href,p=u.as,m=e.children,v=e.replace,h=e.shallow,g=e.scroll,b=e.locale;"string"===typeof m&&(m=o.default.createElement("a",null,m));var j=o.Children.only(m),O=j&&"object"===typeof j&&j.ref,y=(0,s.useIntersection)({rootMargin:"200px"}),x=r(y,2),w=x[0],_=x[1],k=o.default.useCallback((function(e){w(e),O&&("function"===typeof O?O(e):"object"===typeof O&&(O.current=e))}),[O,w]);(0,o.useEffect)((function(){var e=_&&t&&(0,c.isLocalURL)(f),r="undefined"!==typeof b?b:n&&n.locale,i=l[f+"%"+p+(r?"%"+r:"")];e&&!i&&d(n,f,p,{locale:r})}),[p,f,_,b,t,n]);var C={ref:k,onClick:function(e){j.props&&"function"===typeof j.props.onClick&&j.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,o,a,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==a&&(a=r.indexOf("#")<0),t[i?"replace":"push"](n,r,{shallow:o,locale:s,scroll:a}).then((function(e){e&&a&&document.body.focus()})))}(e,n,f,p,v,h,g,b)},onMouseEnter:function(e){(0,c.isLocalURL)(f)&&(j.props&&"function"===typeof j.props.onMouseEnter&&j.props.onMouseEnter(e),d(n,f,p,{priority:!0}))}};if(e.passHref||"a"===j.type&&!("href"in j.props)){var I="undefined"!==typeof b?b:n&&n.locale,M=n&&n.isLocaleDomain&&(0,c.getDomainLocale)(p,I,n&&n.locales,n&&n.domainLocales);C.href=M||(0,c.addBasePath)((0,c.addLocale)(p,I,n&&n.defaultLocale))}return o.default.cloneElement(j,C)};t.default=u},cpVT:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},g4pe:function(e,t,n){e.exports=n("8Kt/")},iWEr:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=function(){var e,t,n,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=r.open_in_new_tab,c=void 0!==o&&o,a=r.logo_text,s=void 0===a?"":a,l=r.logo_link,d=void 0===l?"":l,u=r.links||r.menu_links||r.menu||[],f=(null===r||void 0===r||null===(e=r.logo)||void 0===e||null===(t=e.data)||void 0===t||null===(n=t.attributes)||void 0===n?void 0:n.url)||"";return{newTab:c,text:s,link:d,srcImg:f,links:i(u)}},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){var t=e.open_in_new_tab,n=void 0!==t&&t,r=e.link_text,i=void 0===r?"":r,o=e.url;return{newTab:n,children:i,link:void 0===o?"":o}}))},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){if("section.section-two-columns"===e.__component)return c(e);if("section.section-content"===e.__component)return a(e);if("section.section-grid"===e.__component){var t=e.text_grid,n=void 0===t?[]:t,r=e.image_grid,i=void 0===r?[]:r;if(n.length>0)return s(e);if(i.length>0)return l(e)}return e}))},c=function(){var e,t,n,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=r.__component,o=void 0===i?"":i,c=r.title,a=void 0===c?"":c,s=r.description,l=void 0===s?"":s,d=r.metadata,u=(d=void 0!==d&&d).background,f=void 0!==u&&u,p=d.section_id,m=void 0===p?"":p,v=(null===r||void 0===r||null===(e=r.image)||void 0===e||null===(t=e.data)||void 0===t||null===(n=t.attributes)||void 0===n?void 0:n.url)||"";return{component:o,title:a,text:l,srcImg:v,background:f,sectionId:m}},a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.__component,n=void 0===t?"":t,r=e.title,i=void 0===r?"":r,o=e.content,c=void 0===o?"":o,a=e.metadata,s=(a=void 0!==a&&a).background,l=void 0!==s&&s,d=a.section_id,u=void 0===d?"":d;return{component:n,title:i,html:c,background:l,sectionId:u}},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.title,n=void 0===t?"":t,r=e.description,i=void 0===r?"":r,o=e.metadata,c=(o=void 0!==o&&o).background,a=void 0!==c&&c,s=o.section_id,l=void 0===s?"":s,d=e.text_grid,u=void 0===d?[]:d;return{component:"section.section-grid-text",title:n,background:a,sectionId:l,description:i,grid:u.map((function(e){var t=e.title,n=void 0===t?"":t,r=e.description;return{title:n,description:void 0===r?"":r}}))}},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.title,n=void 0===t?"":t,r=e.description,i=void 0===r?"":r,o=e.metadata,c=(o=void 0!==o&&o).background,a=void 0!==c&&c,s=o.section_id,l=void 0===s?"":s,d=e.image_grid,u=void 0===d?[]:d;return{component:"section.section-grid-image",title:n,background:a,sectionId:l,description:i,grid:u.map((function(e){var t=e.image,n=(t=void 0===t?"":t).data,r=((void 0===n?[]:n)[0]||{}).attributes,i=(r=void 0===r?{}:r).url,o=void 0===i?"":i,c=r.alternativeText;return{srcImg:o,altText:void 0===c?"":c}}))}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[{}];return e.map((function(e){var t=e.footer_text,n=void 0===t?"":t,i=e.slug,c=void 0===i?"":i,a=e.title,s=void 0===a?"":a,l=e.sections,d=void 0===l?[]:l,u=e.menu,f=void 0===u?{}:u;return{footerHtml:n,slug:c,title:s,sections:o(d),menu:r(f)}}))}},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.__esModule=!0,e.exports.default=e.exports},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var i=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=i},mPvQ:function(e,t,n){var r=n("5fIB"),i=n("rlHP"),o=n("KckH"),c=n("kG2m");e.exports=function(e){return r(e)||i(e)||o(e)||c()}},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},pVnL:function(e,t){function n(){return e.exports=n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,n.apply(this,arguments)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports},qYZg:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("vOnD"),i=r.d.div.withConfig({displayName:"styles__Container",componentId:"sc-17jlbfc-0"})(["",""],(function(e){var t=e.theme;return Object(r.c)(["font-size:",";"],t.font.sizes.medium)}))},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},vNVm:function(e,t,n){"use strict";var r=n("zoAU");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,s=(0,i.useRef)(),l=(0,i.useState)(!1),d=r(l,2),u=d[0],f=d[1],p=(0,i.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),n||u||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=a.get(t);if(n)return n;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return a.set(t,n={id:t,observer:i,elements:r}),n}(n),i=r.id,o=r.observer,c=r.elements;return c.set(e,t),o.observe(e),function(){c.delete(e),o.unobserve(e),0===c.size&&(o.disconnect(),a.delete(i))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,u]);return(0,i.useEffect)((function(){if(!c&&!u){var e=(0,o.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[u]),[p,u]};var i=n("q1tI"),o=n("0G5g"),c="undefined"!==typeof IntersectionObserver;var a=new Map},x66I:function(e,t,n){"use strict";var r=n("cpVT"),i=n("nKUr"),o=n("g4pe"),c=n.n(o),a=n("vOnD"),s=(a.d.div.withConfig({displayName:"styles__Wrapper",componentId:"sc-1yk63u3-0"})([""]),n("HCWB")),l=n("D6Cf"),d=a.d.div.withConfig({displayName:"styles__Container",componentId:"sc-6fp9h2-0"})(["",""],(function(e){var t=e.theme;return Object(a.c)(["display:grid;grid-template-columns:1fr 1.2fr;align-items:center;gap:",";@media ","{grid-template-columns:1fr;text-align:center;}","{margin-bottom:",";}"],t.spacings.large,t.media.lteMedium,l.a,t.spacings.xlarge)})),u=a.d.div.withConfig({displayName:"styles__TextContainer",componentId:"sc-6fp9h2-1"})(["",""],(function(e){var t=e.theme;return Object(a.c)(["@media ","{margin-bottom:",";}"],t.media.lteMedium,t.spacings.large)})),f=a.d.div.withConfig({displayName:"styles__ImageContainer",componentId:"sc-6fp9h2-2"})(["",""],(function(){return Object(a.c)([""])})),p=a.d.img.withConfig({displayName:"styles__Image",componentId:"sc-6fp9h2-3"})(["",""],(function(){return Object(a.c)(["width:100%;height:100%;"])})),m=n("03Hb"),v=n("7eNJ"),h=function(e){var t=e.title,n=e.text,r=e.srcImg,o=e.background,c=void 0!==o&&o,a=e.sectionId,l=void 0===a?"":a;return Object(i.jsx)(v.a,{background:c,sectionId:l,children:Object(i.jsxs)(d,{background:c,children:[Object(i.jsxs)(u,{children:[Object(i.jsx)(s.a,{uppercase:!0,colorDark:!c,as:"h2",children:t}),Object(i.jsx)(m.a,{children:n})]}),Object(i.jsx)(f,{children:Object(i.jsx)(p,{src:r,alt:t})})]})})},g=n("OwR4"),b=n("qYZg"),j=a.d.div.withConfig({displayName:"styles__Container",componentId:"sc-tz5zoe-0"})(["",""],(function(e){var t=e.theme;return Object(a.c)(["","{margin-bottom:",";}"],b.a,t.spacings.xhuge)})),O=a.d.div.withConfig({displayName:"styles__Grid",componentId:"sc-tz5zoe-1"})(["",""],(function(e){var t=e.theme;return Object(a.c)(["counter-reset:grid-counter;display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,2fr));gap:",";"],t.spacings.large)})),y=a.d.div.withConfig({displayName:"styles__GridElement",componentId:"sc-tz5zoe-2"})(["",""],(function(){return Object(a.c)(["","{position:relative;left:5rem;}","::before{counter-increment:grid-counter;content:counter(grid-counter);position:absolute;font-size:7rem;top:-3rem;left:-5rem;transform:rotate(5deg);}width:100%;overflow:hidden;"],l.a,l.a)})),x=function(e){var t=e.title,n=e.description,r=e.grid,o=e.background,c=void 0!==o&&o,a=e.sectionId,l=void 0===a?"":a;return Object(i.jsx)(v.a,{background:c,sectionId:l,children:Object(i.jsxs)(j,{children:[Object(i.jsx)(s.a,{size:"huge",uppercase:!0,colorDark:!c,as:"h2",children:t}),Object(i.jsx)(m.a,{children:n}),Object(i.jsx)(O,{children:r.map((function(e){return Object(i.jsxs)(y,{children:[Object(i.jsx)(s.a,{size:"medium",colorDark:!c,as:"h3",children:e.title}),Object(i.jsx)(m.a,{children:e.description})]},e.title)}))})]})})},w=a.d.div.withConfig({displayName:"styles__Container",componentId:"sc-13r0lob-0"})(["",""],(function(e){var t=e.theme;return Object(a.c)(["> ","{margin-bottom:",";}"],b.a,t.spacings.xhuge)})),_=a.d.div.withConfig({displayName:"styles__Grid",componentId:"sc-13r0lob-1"})(["",""],(function(e){var t=e.theme;return Object(a.c)(["display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,2fr));gap:",";@media ","{grid-template-columns:1fr;}"],t.spacings.large,t.media.lteMedium)})),k=a.d.div.withConfig({displayName:"styles__GridElement",componentId:"sc-13r0lob-2"})(["",""],(function(){return Object(a.c)(["overflow:hidden;"])})),C=a.d.img.withConfig({displayName:"styles__Image",componentId:"sc-13r0lob-3"})(["",""],(function(){return Object(a.c)(["width:100%;transition:all 300ms ease-in-out;aspect-ratio:1/1;object-fit:cover;&:hover{transform:scale(1.2) rotate(10deg);}"])})),I=function(e){var t=e.title,n=e.description,r=e.grid,o=e.background,c=void 0!==o&&o,a=e.sectionId,l=void 0===a?"":a;return Object(i.jsx)(w,{children:Object(i.jsx)(v.a,{background:c,sectionId:l,children:Object(i.jsxs)(w,{children:[Object(i.jsx)(s.a,{size:"huge",uppercase:!0,colorDark:!c,as:"h2",children:t}),Object(i.jsx)(m.a,{children:n}),Object(i.jsx)(_,{children:r.map((function(e){return Object(i.jsx)(k,{children:Object(i.jsx)(C,{src:e.srcImg,alt:e.altText})},e.srcImg)}))})]})})})},M=a.d.div.withConfig({displayName:"styles__Container",componentId:"sc-1avjuxh-0"})(["",""],(function(e){var t=e.theme;return Object(a.c)(["padding-top:5.4rem;@media ","{padding-top:0;}"],t.media.lteMedium)})),z=n("OYkR"),P=a.d.div.withConfig({displayName:"styles__Container",componentId:"sc-187emkg-0"})(["",""],(function(e){var t=e.theme,n=e.visible;return Object(a.c)(["position:fixed;z-index:5;top:0;left:0;right:0;width:100%;background:",";border-bottom:",";transition:all 300ms ease-in-out;> ","{padding-top:0;padding-bottom:0;}& ","{margin-top:0;margin-bottom:0;}@media ","{height:100vh;visibility:hidden;opacity:0;"," > ","{display:grid;grid-template-columns:1fr;grid-template-rows:1fr;height:100vh;align-items:center;overflow-y:auto;}& ","{padding-bottom:",";display:flex;justify-content:center;}}"],t.colors.white,t.colors.mediumGray,z.a,l.a,t.media.lteMedium,n&&Object(a.c)(["visibility:visible;opacity:1;"]),z.a,l.a,t.spacings.large)})),D=a.d.div.withConfig({displayName:"styles__MenuContainer",componentId:"sc-187emkg-1"})(["",""],(function(e){var t=e.theme;return Object(a.c)(["display:flex;justify-content:space-between;align-items:center;@media ","{display:block;text-align:center;padding:"," 0;}"],t.media.lteMedium,t.spacings.xxlarge)})),N=a.d.button.withConfig({displayName:"styles__Button",componentId:"sc-187emkg-2"})(["",""],(function(e){var t=e.theme,n=e.visible;return Object(a.c)(["z-index:6;position:fixed;top:2rem;right:2rem;width:4rem;height:4rem;background:",";color:",";border:none;display:none;pointer-events:",";@media ","{display:flex;align-items:center;justify-content:center;}> svg{width:2.5rem;height:2.5rem;}"],t.colors.primaryColor,t.colors.white,n?"none":"all",t.media.lteMedium)})),H=n("KrlL"),E=a.d.a.withConfig({displayName:"styles__Container",componentId:"sc-4egcax-0"})(["",""],(function(e){e.theme;return Object(a.c)(["display:flex;align-items:center;text-decoration:none;color:inherit;>img{height:3rem;}"])})),S=n("YFqc"),A=n.n(S),R=function(e){var t=e.text,n=e.srcImg,r=void 0===n?"":n,o=e.link;return!!o.match(/^\//)?Object(i.jsx)(s.a,{size:"small",uppercase:!0,children:Object(i.jsx)(A.a,{href:o,passHref:!0,children:Object(i.jsxs)(E,{children:[!!r&&Object(i.jsx)("img",{src:r,alt:t}),!r&&t]})})}):Object(i.jsx)(s.a,{size:"small",uppercase:!0,children:Object(i.jsxs)(E,{href:o,children:[!!r&&Object(i.jsx)("img",{src:r,alt:t}),!r&&t]})})},K=a.d.nav.withConfig({displayName:"styles__Container",componentId:"sc-b7lg1k-0"})(["",""],(function(e){var t=e.theme;return Object(a.c)(["display:flex;flex-flow:row wrap;@media ","{flex-flow:column wrap;align-content:center;}"],t.media.lteMedium)})),L=a.d.a.withConfig({displayName:"styles__Container",componentId:"sc-ey1ulq-0"})(["",""],(function(e){var t=e.theme;return Object(a.c)(["display:block;text-decoration:none;font-size:",";padding:",";color:",";position:relative;&::after{content:'';position:absolute;bottom:0.76rem;left:50%;width:0;height:0.2rem;background:",";transition:all 200ms ease-in-out;}&:hover::after{left:25%;width:50%;}"],t.font.sizes.small,t.spacings.small,t.colors.primaryColor,t.colors.secondaryColor)})),V=function(e){var t=e.children,n=e.link,r=e.newTab,o=void 0!==r&&r?"_blank":"_self";return!!n.match(/^\//)?Object(i.jsx)(A.a,{href:n,passHref:!0,children:Object(i.jsx)(L,{target:o,children:t})}):Object(i.jsx)(L,{href:n,target:o,children:t})};function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var T=function(e){var t=e.links,n=void 0===t?[]:t;return Object(i.jsx)(K,{"aria-label":"Main menu",children:n.map((function(e){return Object(i.jsx)(V,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e),e.link)}))})},B=n("pVnL"),U=n.n(B),G=n("q1tI"),W=n("lSNA"),Y=n.n(W),Q=n("QILm"),F=n.n(Q),J=["children","iconAttrs","iconVerticalAlign","iconViewBox","size","title"];function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?X(Object(n),!0).forEach((function(t){Y()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var $=G.forwardRef((function(e,t){var n=e.children,r=e.iconAttrs,i=(e.iconVerticalAlign,e.iconViewBox),o=e.size,c=e.title,a=F()(e,J),s=Z(Z({viewBox:i,height:void 0!==e.height?e.height:o,width:void 0!==e.width?e.width:o,"aria-hidden":null==c?"true":void 0,focusable:"false",role:null!=c?"img":void 0},r),a);return G.createElement("svg",U()({},s,{ref:t}),c&&G.createElement("title",{key:"icon-title"},c),n)})),ee=Object(a.d)($).withConfig({displayName:"StyledIconBase",componentId:"sc-ea9ulj-0"})(["display:inline-block;vertical-align:",";overflow:hidden;"],(function(e){return e.iconVerticalAlign})),te=G.forwardRef((function(e,t){return G.createElement(ee,U()({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},e,{ref:t}),G.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),G.createElement("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}))}));te.displayName="Menu";var ne=G.forwardRef((function(e,t){return G.createElement(ee,U()({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},e,{ref:t}),G.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),G.createElement("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"}))}));ne.displayName="Close";function re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ie(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?re(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):re(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var oe=function(e){var t=e.links,n=void 0===t?[]:t,r=e.logoData,o=Object(G.useState)(!1),c=o[0],a=o[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(N,{visible:c,onClick:function(){return a(!0)},"aria-label":"Open/Close menu",children:c?Object(i.jsx)(ne,{"aria-label":"Close menu"}):Object(i.jsx)(te,{"aria-label":"Open menu"})}),Object(i.jsx)(P,{visible:c,onClick:function(){return a(!1)},children:Object(i.jsx)(H.a,{children:Object(i.jsxs)(D,{children:[Object(i.jsx)(R,ie({},r)),Object(i.jsx)(T,{links:n})]})})})]})},ce=a.d.footer.withConfig({displayName:"styles__Container",componentId:"sc-1mws7vi-0"})(["",""],(function(e){var t=e.theme;return Object(a.c)(["text-align:center;border-top:0.1rem solid ",";a{color:inherit;text-decoration:none;font-size:",";}& ","{font-size:",";}& ","{padding-top:1rem;padding-bottom:1rem;}"],t.colors.mediumGray,t.font.sizes.small,b.a,t.font.sizes.small,z.a)})),ae=function(e){var t=e.footerHtml;return Object(i.jsx)(ce,{children:Object(i.jsx)(H.a,{children:Object(i.jsx)(m.a,{children:t})})})},se=a.d.a.withConfig({displayName:"styles__Container",componentId:"sc-1njy7ca-0"})(["",""],(function(e){var t=e.theme;return Object(a.c)(["position:fixed;background:",";color:",";display:flex;align-items:center;justify-content:center;width:4rem;height:4rem;bottom:4rem;right:2rem;z-index:6;"],t.colors.primaryColor,t.colors.white)})),le=G.forwardRef((function(e,t){return G.createElement(ee,U()({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},e,{ref:t}),G.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),G.createElement("path",{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"}))}));le.displayName="KeyboardArrowUp";var de=function(){return Object(i.jsx)(se,{href:"#","aria-label":"Go to top",title:"Go to top",children:Object(i.jsx)(le,{})})};n("vJKn");var ue=n("8SHQ"),fe=(n("iWEr"),function(e){var t=e.links,n=e.logoData,r=e.footerHtml,o=e.children;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(oe,{links:t,logoData:n}),Object(i.jsxs)(M,{children:[o,Object(i.jsx)(ae,{footerHtml:r})]}),Object(i.jsx)(de,{onClick:console.log("".concat(ue.a.url,"/api/pages?&populate=deep"))})]})});function pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function me(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pe(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t=e.data[0],n=t.menu,r=t.sections,o=t.footerHtml,a=t.slug,s=t.title,l=n.links,d=n.text,u=n.link,f=n.srcImg;return Object(i.jsxs)(fe,{links:l,footerHtml:o,logoData:{text:d,link:u,srcImg:f},children:[Object(i.jsx)(c.a,{children:Object(i.jsxs)("title",{children:[s," | ",ue.a.siteName]})}),r.map((function(e,t){var n=e.component,r="".concat(a,"-").concat(t);return"section.section-two-columns"===n?Object(i.jsx)(h,me({},e),r):"section.section-content"===n?Object(i.jsx)(g.a,me({},e),r):"section.section-grid-text"===n?Object(i.jsx)(x,me({},e),r):"section.section-grid-image"===n?Object(i.jsx)(I,me({},e),r):void 0}))]})}}}]);