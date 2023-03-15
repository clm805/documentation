"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5890],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,y=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9611:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i={sidebar_position:6,title:"Localizing a website based on current country or city"},l=void 0,c={unversionedId:"tutorials/localizing-a-website-based-on-current-country-or-city",id:"tutorials/localizing-a-website-based-on-current-country-or-city",isDocsHomePage:!1,title:"Localizing a website based on current country or city",description:"In this tutorial, we show you how to use the Radar web SDK and IP geocoding API to localize a website based on current country or city.",source:"@site/docs/tutorials/localizing-a-website-based-on-current-country-or-city.mdx",sourceDirName:"tutorials",slug:"/tutorials/localizing-a-website-based-on-current-country-or-city",permalink:"/documentation/tutorials/localizing-a-website-based-on-current-country-or-city",editUrl:"https://github.com/radarlabs/docs/edit/main/docs/tutorials/localizing-a-website-based-on-current-country-or-city.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Localizing a website based on current country or city"},sidebar:"defaultSidebar",previous:{title:"Building a store locator on iOS",permalink:"/documentation/tutorials/building-a-store-locator-on-ios"},next:{title:"Analyzing where key customer interactions occur",permalink:"/documentation/tutorials/analyzing-where-key-customer-interactions-occur"}},s=[{value:"Video",id:"video",children:[]},{value:"Languages used",id:"languages-used",children:[]},{value:"Features used",id:"features-used",children:[]},{value:"Steps",id:"steps",children:[{value:"Step 1: Sign up for Radar",id:"step-1-sign-up-for-radar",children:[]},{value:"Step 2: Install the Radar web SDK",id:"step-2-install-the-radar-web-sdk",children:[]},{value:"Step 3: Call the IP geocoding API",id:"step-3-call-the-ip-geocoding-api",children:[]}]},{value:"Sample code",id:"sample-code",children:[]},{value:"Support",id:"support",children:[]}],u={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this tutorial, we show you how to use the Radar ",(0,o.kt)("a",{parentName:"p",href:"/sdk/web"},"web SDK")," and ",(0,o.kt)("a",{parentName:"p",href:"/api#ip-geocode"},"IP geocoding API")," to localize a website based on current country or city."),(0,o.kt)("p",null,"For example, you may show a default language or currency based on current country. Or, you may show nearby content based on current city."),(0,o.kt)("h2",{id:"video"},"Video"),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/yIjPk4nddBA",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("h2",{id:"languages-used"},"Languages used"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"HTML"),(0,o.kt)("li",{parentName:"ul"},"JavaScript")),(0,o.kt)("h2",{id:"features-used"},"Features used"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/sdk/web"},"Web SDK")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/api#ip-geocode"},"IP geocoding API"))),(0,o.kt)("h2",{id:"steps"},"Steps"),(0,o.kt)("h3",{id:"step-1-sign-up-for-radar"},"Step 1: Sign up for Radar"),(0,o.kt)("p",null,"If you haven't already, sign up for Radar to get your API key. You can make up to 100,000 API requests per month for free."),(0,o.kt)("a",{className:"btn btn-large btn-primary",href:"https://radar.com/signup"},"Get API Keys"),(0,o.kt)("h3",{id:"step-2-install-the-radar-web-sdk"},"Step 2: Install the Radar web SDK"),(0,o.kt)("p",null,"In an HTML page, include the SDK using a ",(0,o.kt)("inlineCode",{parentName:"p"},"<script>")," tag:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'<script src="https://js.radar.com/v3/radar.min.js"><\/script>\n')),(0,o.kt)("p",null,"In a web app, install the package from npm, then import the library:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save radar-sdk-js\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import Radar from 'radar-sdk-js';\n")),(0,o.kt)("h3",{id:"step-3-call-the-ip-geocoding-api"},"Step 3: Call the IP geocoding API"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/api#ip-geocode"},"IP geocoding API")," converts IP address into city, state, and country."),(0,o.kt)("p",null,"Initialize the SDK with your publishable API key, then call the IP geocoding API."),(0,o.kt)("p",null,"In the callback, ",(0,o.kt)("inlineCode",{parentName:"p"},"result.address")," will include ",(0,o.kt)("inlineCode",{parentName:"p"},"countryCode"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"stateCode"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"city"),", coarse ",(0,o.kt)("inlineCode",{parentName:"p"},"latitude")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"longitude"),", and more."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'Radar.initialize("prj_test_pk_...");\n\nRadar.ipGeocode(function(err, result) {\n  if (err) {\n    console.error(err);\n\n    return;\n  }\n\n  if (result && result.address) {\n    // do something with result.address.countryCode\n  }\n});\n')),(0,o.kt)("h2",{id:"sample-code"},"Sample code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<html>\n  <head>\n    <title>Hello, world!</title>\n    <script src="https://js.radar.com/v3/radar.min.js"><\/script>\n  </head>\n  <body>\n    <div id="country">\n      Loading...\n    </div>\n\n    <script type="text/javascript">\n      Radar.initialize("prj_test_pk_...");\n\n      Radar.ipGeocode(function(err, result) {\n        if (err) {\n          console.error(err);\n\n          return;\n        }\n\n        if (result && result.address) {\n          console.log(result.address);\n\n          document.getElementById("country").innerHTML = "Your country is " +\n            result.address.countryFlag + " " + result.address.countryCode;\n        }\n      });\n    <\/script>\n  </body>\n</html>\n')),(0,o.kt)("h2",{id:"support"},"Support"),(0,o.kt)("p",null,"Have questions or feedback on this documentation? Let us know! Email us at ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@radar.com"},"support@radar.com"),"."))}d.isMDXComponent=!0}}]);