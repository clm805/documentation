"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[951],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,k=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5329:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i={sidebar_position:10,title:"Toolkit",id:"toolkit"},p=void 0,s={unversionedId:"toolkit",id:"toolkit",isDocsHomePage:!1,title:"Toolkit",description:"You can use our Radar Toolkit apps for iOS and Android to test Radar before integrating the SDK, or to test your implementation of Radar side-by-side with a complete implementation.",source:"@site/docs/toolkit.mdx",sourceDirName:".",slug:"/toolkit",permalink:"/documentation/toolkit",editUrl:"https://github.com/radarlabs/docs/edit/main/docs/toolkit.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Toolkit",id:"toolkit"},sidebar:"defaultSidebar",previous:{title:"Yext",permalink:"/documentation/integrations/yext"},next:{title:"Tutorials",permalink:"/documentation/tutorials"}},l=[{value:"Instructions",id:"instructions",children:[]}],c={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can use our Radar Toolkit apps for iOS and Android to test Radar before integrating the ",(0,o.kt)("a",{parentName:"p",href:"/sdk"},"SDK"),", or to test your implementation of Radar side-by-side with a complete implementation."),(0,o.kt)("a",{href:"https://itunes.apple.com/us/app/radar-toolkit/id1179413551?mt=8",target:"_blank"},(0,o.kt)("img",{src:"https://s3.amazonaws.com/com.onradar.www/images/download_ios.svg",style:{display:"inline-block",height:"60px",marginRight:"30px",marginBottom:"20px",marginTop:"10px",width:"180px"}})),(0,o.kt)("a",{href:"https://play.google.com/store/apps/details?id=com.onradar.app",target:"_blank"},(0,o.kt)("img",{src:"https://s3.amazonaws.com/com.onradar.www/images/download_android.svg",style:{display:"inline-block",height:"60px",marginBottom:"20px",marginTop:"10px",width:"202.5px"}})),(0,o.kt)("h2",{id:"instructions"},"Instructions"),(0,o.kt)("p",null,"To get started, you'll need a Radar account. Don't have a Radar account yet? ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/signup"},"Sign up")," first."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download the app from the ",(0,o.kt)("a",{href:"https://itunes.apple.com/us/app/radar-toolkit/id1179413551?mt=8",target:"_blank"},"App Store (iOS)")," or ",(0,o.kt)("a",{href:"https://play.google.com/store/apps/details?id=com.onradar.app",target:"_blank"},"Play Store (Android)"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the app and grant notification permissions and location permissions.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy your ",(0,o.kt)("inlineCode",{parentName:"p"},"Test Publishable")," key from the ",(0,o.kt)("em",{parentName:"p"},"Keys")," section of the ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/settings"},"Settings page")," and paste it into the app.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To track in the background, turn on ",(0,o.kt)("em",{parentName:"p"},"Tracking")," (it is on by default). Then, select the ",(0,o.kt)("em",{parentName:"p"},"Tracking Options")," preset to use, one of ",(0,o.kt)("em",{parentName:"p"},"Efficient"),", ",(0,o.kt)("em",{parentName:"p"},"Responsive"),", or ",(0,o.kt)("em",{parentName:"p"},"Continuous"),". Learn about ",(0,o.kt)("a",{parentName:"p",href:"/sdk/tracking#ios-presets"},"iOS tracking presets")," and ",(0,o.kt)("a",{parentName:"p",href:"//sdk/tracking#android-presets"},"Android tracking presets"),". Finally, on the notifications you want to receive, including ",(0,o.kt)("em",{parentName:"p"},"Events")," (events received from Radar), ",(0,o.kt)("em",{parentName:"p"},"Locations")," (location updates sent to Radar), and ",(0,o.kt)("em",{parentName:"p"},"Errors")," (network, location, and permissions errors).")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Close the ",(0,o.kt)("em",{parentName:"p"},"Settings")," screen.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To track once in the foreground, tap the refresh button! ",(0,o.kt)("strong",{parentName:"p"},"If you correctly granted permissions and pasted your API key, and if you have connectivity, you will see your current state in the app and see your user on the ",(0,o.kt)("a",{parentName:"strong",href:"https://radar.com/users"},"Users page")," in the dashboard.")," If you are in a geofence or at a place, you will see events in the app and see events on the ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/events"},"Events page")," in the dashboard.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To track in the background, move more than 100 meters! Depending on the ",(0,o.kt)("em",{parentName:"p"},"Tracking Options")," preset you selected, your location will update in the background. ",(0,o.kt)("strong",{parentName:"p"},"Note that location updates may be delayed significantly by Android ",(0,o.kt)("a",{parentName:"strong",href:"https://developer.android.com/training/monitoring-device-state/doze-standby.html"},"Doze Mode and App Standby"),", iOS ",(0,o.kt)("a",{parentName:"strong",href:"https://support.apple.com/en-us/HT205234"},"Low Power Mode"),", or if the device has connectivity issues, low battery, or wi-fi disabled.")))),(0,o.kt)("img",{src:"https://s3.amazonaws.com/com.onradar.www/images/toolkit_small.png",className:"large"}))}d.isMDXComponent=!0}}]);