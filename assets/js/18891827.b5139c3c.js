(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9081],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),f=a,m=p["".concat(c,".").concat(f)]||p[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return o},Z:function(){return i}});var r=n(2263),a=n(3919);function o(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,s=void 0!==i&&i,c=o.absolute,d=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(s)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return d?e+l:l}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},2204:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7294),a="Card_ShZN",o=function(e){var t=e.children,n=e.className;return r.createElement("div",{className:a+" "+n},t)}},708:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(7294),a="LinkCard_75d5",o=n(4996),i=function(e){var t=e.linkTo,n=e.children;e.title;return r.createElement("a",{href:(0,o.Z)(t),className:a},n)}},1821:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(7294),a="TileCard_3eEi",o="CardContent_2Ki1",i="CardTitle_1W1S",s=n(2204),c=function(e){var t=e.children,n=e.title;return r.createElement(s.Z,{className:a},r.createElement("div",{className:o},t),n&&r.createElement("div",{className:i},n))}},9334:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h},frontMatter:function(){return g},metadata:function(){return k},toc:function(){return b}});var r=n(2122),a=n(9756),o=n(7294),i=n(3905),s=n(708),c="IconCard_fzjg",d="icon_1qTl",l="content_240e",u="description_1JUI",p="CardTitle_3LAi",f=n(2204),m=function(e){var t=e.icon,n=e.children,r=e.title;return o.createElement(f.Z,{title:r,className:c},o.createElement("div",{className:d},t),o.createElement("div",{className:l},o.createElement("div",{className:p},r),o.createElement("p",{className:u},n)))},g=(n(1821),{sidebar_position:1,id:"documentation",title:"Documentation",slug:"/"}),k={unversionedId:"documentation",id:"documentation",isDocsHomePage:!1,title:"Documentation",description:"Radar is location data infrastructure. You can use our SDKs and APIs to build a wide range of location-based product and service experiences, including curbside pickup and delivery tracking, store locators, address autocomplete, location-based content and notifications, and more.",source:"@site/docs/overview.mdx",sourceDirName:".",slug:"/",permalink:"/documentation/",editUrl:"https://github.com/radarlabs/docs/edit/main/docs/overview.mdx",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"documentation",title:"Documentation",slug:"/"},sidebar:"defaultSidebar",next:{title:"Geofences",permalink:"/documentation/geofences"}},b=[{value:"Quickstart",id:"quickstart",children:[]},{value:"Geofencing",id:"geofencing",children:[]},{value:"Geo APIs",id:"geo-apis",children:[]},{value:"Trip tracking",id:"trip-tracking",children:[]},{value:"Developer tools",id:"developer-tools",children:[]}],v={toc:b};function h(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Radar is location data infrastructure. You can use our ",(0,i.kt)("a",{parentName:"p",href:"/sdk"},"SDKs")," and ",(0,i.kt)("a",{parentName:"p",href:"/api"},"APIs")," to build a wide range of location-based product and service experiences, including curbside pickup and delivery tracking, store locators, address autocomplete, location-based content and notifications, and more."),(0,i.kt)("h2",{id:"quickstart"},"Quickstart"),(0,i.kt)("p",null,"Want to get started quickly? Follow these three steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Configure geofencing.")," Create custom ",(0,i.kt)("a",{parentName:"p",href:"/geofences"},"geofences")," or enable out-of-the-box geofences for ",(0,i.kt)("a",{parentName:"p",href:"/places"},"Places")," (place, chain, and category detection) or ",(0,i.kt)("a",{parentName:"p",href:"/regions"},"Regions")," (country, state, DMA, and postal code detection).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Integrate the Radar SDK or API into your app or website.")," Integrate the ",(0,i.kt)("a",{parentName:"p",href:"/sdk"},"SDK")," or ",(0,i.kt)("a",{parentName:"p",href:"/api"},"API"),". Or, before integrating, test geofencing with our ",(0,i.kt)("a",{parentName:"p",href:"/toolkit"},"toolkit apps")," for iOS and Android.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Enable integrations.")," Create a ",(0,i.kt)("a",{parentName:"p",href:"/integrations#webhooks"},"webhook")," or enable server-side ",(0,i.kt)("a",{parentName:"p",href:"/integrations"},"integrations")," to send Radar events and user context to other systems."))),(0,i.kt)("h2",{id:"geofencing"},"Geofencing"),(0,i.kt)("p",null,"Geofencing turns location data into context and events to help you build contextual app experiences. Go beyond on-device limits with support for unlimited geofences, polygon geofences, isochrone geofences, out-of-the-box geofences for places and regions, and more."),(0,i.kt)("div",{className:"card-stack"},(0,i.kt)(s.Z,{linkTo:"/geofences",mdxType:"LinkCard"},(0,i.kt)(m,{title:"Geofences",icon:(0,i.kt)("img",{src:"https://images.ctfassets.net/f2vbu16fzuly/6rO181S83gFjPrFNmiUbXU/d6c81683a8ef4208fbca9ef1ceaaa24c/geofences.svg"}),mdxType:"IconCard"},"Radar geofencing is more powerful than native iOS or Android geofencing, with cross-platform support for unlimited geofences, polygon geofences, isochrone (time-based) geofences, temporary geofences, and stop detection.")),(0,i.kt)(s.Z,{linkTo:"/places",mdxType:"LinkCard"},(0,i.kt)(m,{title:"Places",icon:(0,i.kt)("img",{src:"https://images.ctfassets.net/f2vbu16fzuly/5CyKMbZMvP4o2FlljKGxrK/fe18f5ecd370bc861f77756277046f6b/places.svg"}),mdxType:"IconCard"},"Use our place database to detect when a user visits a place, chain, or category. Tap into best-in-class POI data from Yelp and other providers.")),(0,i.kt)(s.Z,{linkTo:"/regions",mdxType:"LinkCard"},(0,i.kt)(m,{title:"Regions",icon:(0,i.kt)("img",{src:"https://images.ctfassets.net/f2vbu16fzuly/1hDJzlo8jqh8mWNGmxlLrm/b68061f89a24c683d4c87d8525370144/regions.svg"}),mdxType:"IconCard"},"Detect a user's country, state, DMA (market area), and postal code. Change the app experience based on region, or blacklist location updates in specific countries or states for compliance reasons.")),(0,i.kt)(s.Z,{linkTo:"/beacons",mdxType:"LinkCard"},(0,i.kt)(m,{title:"Beacons",icon:(0,i.kt)("img",{src:"https://images.ctfassets.net/f2vbu16fzuly/1ENDk60lfUzCsqwR1qfaky/33e7325edb746e1f1dd3573fa3c58060/beacons.svg"}),mdxType:"IconCard"},"Detect nearby Bluetooth beacons. Beacons are like hardware-enabled micro-geofences, accurate down to a few meters. Compatible with any iBeacons."))),(0,i.kt)("h2",{id:"geo-apis"},"Geo APIs"),(0,i.kt)("p",null,"Use our APIs to build location-based app experiences. Search your own geofence data or tap into our best-in-class address and place data from Yelp, Pitney Bowes, and other providers."),(0,i.kt)("div",{className:"card-stack"},(0,i.kt)(s.Z,{linkTo:"/api#geocoding",mdxType:"LinkCard"},(0,i.kt)(m,{title:"Geocoding",icon:(0,i.kt)("img",{src:"https://images.ctfassets.net/f2vbu16fzuly/3s9QryJGkIPcIq90BFuOvp/d5e14589fd68c6ab6e7a128506d8b4c7/geocoding.svg"}),mdxType:"IconCard"},"Flexible and affordable forward, reverse, and IP geocoding APIs. Up to 10x cheaper than Google Maps geocoding APIs.")),(0,i.kt)(s.Z,{linkTo:"/api#search",mdxType:"LinkCard"},(0,i.kt)(m,{title:"Search APIs",icon:(0,i.kt)("img",{src:"https://images.ctfassets.net/f2vbu16fzuly/wQgRaU0OQvmLhRRjjnO37/f7925ac0a0feaf16197c141efddb762e/search.svg"}),mdxType:"IconCard"},"Autocomplete, place, and geofence search APIs. Search your own geofence data or tap into our best-in-class address and place data from Yelp, Pitney Bowes, and other providers.")),(0,i.kt)(s.Z,{linkTo:"/api#routing",mdxType:"LinkCard"},(0,i.kt)(m,{title:"Distance APIs",icon:(0,i.kt)("img",{src:"https://images.ctfassets.net/f2vbu16fzuly/73pNAAJXtWErBEruCVQLcB/c20397366642f637b2e819e50d84b8ac/routing.svg"}),mdxType:"IconCard"},"Distance and matrix APIs to calculate travel distance and duration by foot, bike, or car. Up to 10x cheaper than Google Maps routing APIs."))),(0,i.kt)("h2",{id:"trip-tracking"},"Trip tracking"),(0,i.kt)("p",null,"Use our industry-leading location ",(0,i.kt)("a",{parentName:"p",href:"/sdk"},"SDK")," to build experiences for curbside and in-store pickup, delivery tracking, and more."),(0,i.kt)("div",{className:"card-stack"},(0,i.kt)(s.Z,{linkTo:"/trip-tracking",mdxType:"LinkCard"},(0,i.kt)(m,{title:"Trip tracking",icon:(0,i.kt)("img",{src:"https://images.ctfassets.net/f2vbu16fzuly/42zLSPFObN3CbGsjT2Go4P/274c58a286b9fa1a9a31b61ebbd2458d/trips.svg"}),mdxType:"IconCard"},"Use our industry-leading location SDK to build experiences for curbside and in-store pickup, delivery tracking, and more. Display live ETAs on Radar's extensible trips dashboard or in your own UI."))),(0,i.kt)("h2",{id:"developer-tools"},"Developer tools"),(0,i.kt)("p",null,"Integrate Radar into your product or service using our best-in-class developer tools, including open-source ",(0,i.kt)("a",{parentName:"p",href:"/sdk"},"SDKs")," for iOS, Android, and web, simple and flexible ",(0,i.kt)("a",{parentName:"p",href:"/api"},"APIs"),", and ",(0,i.kt)("a",{parentName:"p",href:"/integrations"},"integrations")," with leading platforms like Segment, Amplitude, Braze, and more."),(0,i.kt)("div",{className:"card-stack"},(0,i.kt)(s.Z,{linkTo:"/sdk",mdxType:"LinkCard"},(0,i.kt)(m,{title:"SDK reference",icon:(0,i.kt)("img",{src:"https://images.ctfassets.net/f2vbu16fzuly/316liiuHbIwIoss2mFLRwI/803bc94cde2078bf6180c201b9ed48e3/sdk.svg"}),mdxType:"IconCard"},"Open-source SDKs for iOS, Android, and web that make location simple. Use the Radar SDK to add location context and tracking to your apps with just a few lines of code.")),(0,i.kt)(s.Z,{linkTo:"/api",mdxType:"LinkCard"},(0,i.kt)(m,{title:"API reference",icon:(0,i.kt)("img",{src:"https://images.ctfassets.net/f2vbu16fzuly/50bd5vIUh4cewCzl0obxW7/1b0a6efc36e9095a3985995eac41c523/api.svg"}),mdxType:"IconCard"},"Use the Radar APIs as building blocks for location-based products and services. Or, use Radar APIs to manage your Radar data, including users, trips, geofences, and events.")),(0,i.kt)(s.Z,{linkTo:"/integrations",mdxType:"LinkCard"},(0,i.kt)(m,{title:"Integrations",icon:(0,i.kt)("img",{src:"https://images.ctfassets.net/f2vbu16fzuly/7JzCleHIpXZ5lZuqIKLxa/844415e94b2194eb894cd8a9bebe859d/integrations.svg"}),mdxType:"IconCard"},"Event integrations like webhooks, Segment, Braze, and Amplitude allow you to send events from Radar to other systems. Geofence integrations like Yext allow you to sync geofences from other systems to Radar.")),(0,i.kt)(s.Z,{linkTo:"/toolkit",mdxType:"LinkCard"},(0,i.kt)(m,{title:"Toolkit",icon:(0,i.kt)("img",{src:"https://images.ctfassets.net/f2vbu16fzuly/19adrZaPnWzFowzDuoNS8y/bb798fd9055e0a8892e0555c17ec64d1/toolkit.svg"}),mdxType:"IconCard"},"Use our Radar Toolkit apps for iOS and Android to test Radar geofencing before integrating the SDK, or to test your implementation of Radar side-by-side with a complete implementation."))))}h.isMDXComponent=!0}}]);