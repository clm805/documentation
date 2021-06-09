(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4346],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,g=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2365:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i={sidebar_position:2,title:"Building an app experience that changes based on location (e.g., in-store mode)"},l={unversionedId:"tutorials/building-an-app-experience-that-changes-based-on-location-in-store-mode",id:"tutorials/building-an-app-experience-that-changes-based-on-location-in-store-mode",isDocsHomePage:!1,title:"Building an app experience that changes based on location (e.g., in-store mode)",description:'In this tutorial, we show you how to use the Radar iOS SDK and geofences to build a "RadarMart" app that defaults to an in-store mode when the user is in a store geofence.',source:"@site/docs/tutorials/building-an-app-experience-that-changes-based-on-location-in-store-mode.mdx",sourceDirName:"tutorials",slug:"/tutorials/building-an-app-experience-that-changes-based-on-location-in-store-mode",permalink:"/documentation/tutorials/building-an-app-experience-that-changes-based-on-location-in-store-mode",editUrl:"https://github.com/radarlabs/docs/edit/main/docs/tutorials/building-an-app-experience-that-changes-based-on-location-in-store-mode.mdx",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Building an app experience that changes based on location (e.g., in-store mode)"},sidebar:"defaultSidebar",previous:{title:"Building a store locator on iOS",permalink:"/documentation/tutorials/building-a-store-locator-on-ios"},next:{title:"Building an app with location-enabled curbside pickup",permalink:"/documentation/tutorials/building-an-app-with-location-enabled-curbside-pickup"}},s=[{value:"Languages used",id:"languages-used",children:[]},{value:"Features used",id:"features-used",children:[]},{value:"Steps",id:"steps",children:[{value:"Step 1: Sign up for Radar",id:"step-1-sign-up-for-radar",children:[]},{value:"Step 2: Import geofences",id:"step-2-import-geofences",children:[]},{value:"Step 3: Install the Radar iOS SDK",id:"step-3-install-the-radar-ios-sdk",children:[]},{value:"Step 4: Check if the user is in a geofence, then change the UI",id:"step-4-check-if-the-user-is-in-a-geofence-then-change-the-ui",children:[]}]},{value:"Sample code",id:"sample-code",children:[]},{value:"Support",id:"support",children:[]}],p={toc:s};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this tutorial, we show you how to use the Radar ",(0,o.kt)("a",{parentName:"p",href:"/sdk"},"iOS SDK")," and ",(0,o.kt)("a",{parentName:"p",href:"/geofences"},"geofences"),' to build a "RadarMart" app that defaults to an in-store mode when the user is in a store geofence.'),(0,o.kt)("p",null,"We could also build a travel app that defaults to an on-trip mode when the user is in an airport, a real estate app that defaults to a self-tour mode when the user is at a home, and so on."),(0,o.kt)("h2",{id:"languages-used"},"Languages used"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Swift")),(0,o.kt)("h2",{id:"features-used"},"Features used"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/sdk/ios"},"iOS SDK")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/geofences"},"Geofences"))),(0,o.kt)("h2",{id:"steps"},"Steps"),(0,o.kt)("h3",{id:"step-1-sign-up-for-radar"},"Step 1: Sign up for Radar"),(0,o.kt)("p",null,"If you haven't already, sign up for Radar to get your API key. You can create up to 1,000 geofences and make up to 100,000 API requests per month for free."),(0,o.kt)("a",{className:"btn btn-large btn-primary",href:"https://radar.io/signup"},"Get API Keys"),(0,o.kt)("h3",{id:"step-2-import-geofences"},"Step 2: Import geofences"),(0,o.kt)("p",null,"On the ",(0,o.kt)("a",{parentName:"p",href:"https://radar.io/dashboard"},"Geofences page"),", import geofences for RadarMart locations."),(0,o.kt)("p",null,"The CSV should include 8 columns:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"description")),": A display name for the geofence. In this case, the store name."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"tag")),": A group for the geofence. In this case, ",(0,o.kt)("inlineCode",{parentName:"li"},"store"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"externalId")),": An external ID for the geofence that maps to your internal database. In this case, the store ID."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"type")),": The type of geofence geometry. In this case, ",(0,o.kt)("inlineCode",{parentName:"li"},"circle"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"radius")),": The radius in meters for type circle. In this case, ",(0,o.kt)("inlineCode",{parentName:"li"},"100"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"coordinates")),": A JSON string representing a center in the format ","[longitude,latitude]"," for type circle. Note that longitude comes before latitude, a GeoJSON convention."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"enabled")),": In this case, ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"metadata")),": A set of custom key-value pairs for the geofence. A JSON string representing a dictionary with up to 16 keys and values of type string, boolean, or number. In this case, ",(0,o.kt)("inlineCode",{parentName:"li"},'{"parking": true}')," or ",(0,o.kt)("inlineCode",{parentName:"li"},'{"parking": false}'),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csv"},'RadarMart #1,store,1,circle,100,"[-73.986752,40.703919]",true,"{""parking"":true}"\nRadarMart #2,store,2,circle,100,"[-73.993156,40.700554]",true,"{""parking"":false}"\nRadarMart #3,store,3,circle,100,"[-73.983295,40.697693]",true,"{""parking"":false}"\n')),(0,o.kt)("h3",{id:"step-3-install-the-radar-ios-sdk"},"Step 3: Install the Radar iOS SDK"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/sdk"},"Install the Radar SDK")," using CocoaPods or Carthage (recommended) or by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/radarlabs/radar-sdk-ios/releases"},"downloading the framework")," and dragging it into your project."),(0,o.kt)("p",null,"Initialize the SDK in your ",(0,o.kt)("inlineCode",{parentName:"p"},"AppDelegate")," class with your publishable API key."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'import UIKit\nimport RadarSDK\n\n@UIApplicationMain\nclass AppDelegate: UIResponder, UIApplicationDelegate {\n\n    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {\n        Radar.initialize(publishableKey: "prj_test_pk_...")\n\n        return true\n    }\n\n}\n')),(0,o.kt)("h3",{id:"step-4-check-if-the-user-is-in-a-geofence-then-change-the-ui"},"Step 4: Check if the user is in a geofence, then change the UI"),(0,o.kt)("p",null,"Call ",(0,o.kt)("inlineCode",{parentName:"p"},"Radar.trackOnce()")," to track the user's location in the foreground. In the callback, check ",(0,o.kt)("inlineCode",{parentName:"p"},"user.geofences")," to determine if the user is in a geofence, then show a message and default to the in-store tab."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'Radar.trackOnce { (status, location, events, user) in\n    let isInStore = user?.geofences?.contains { $0.tag == "store" }\n    if isInStore {\n        showInStoreMode()\n    }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'@IBOutlet var tabBarController: UITabBarController?\n\nfunc showInStoreMode() {\n    tabBarController?.selectedIndex = 1 // in-store tab\n\n    let alertController = UIAlertController(title: "Welcome to RadarMart!", message: nil, preferredStyle: .alert)\n    alertController.addAction(UIAlertAction(title: "OK", style: .default, handler: nil))\n    if let viewController = tabBarController?.viewControllers?[1] {\n        alertController.show(viewController, sender: self)\n    }\n}\n')),(0,o.kt)("h2",{id:"sample-code"},"Sample code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'// AppDelegate.swift\n\nimport UIKit\nimport RadarSDK\n\n@UIApplicationMain\nclass AppDelegate: UIResponder, UIApplicationDelegate {\n\n    @IBOutlet var tabBarController: UITabBarController?\n\n    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {\n        Radar.initialize(publishableKey: "prj_test_pk_...")\n\n        Radar.trackOnce { (status, location, events, user) in\n            let isInStore = user?.geofences?.contains { $0.tag == "store" }\n            if isInStore {\n                showInStoreMode()\n            }\n        }\n\n        return true\n    }\n\n    func showInStoreMode() {\n        tabBarController?.selectedIndex = 1\n\n        let alertController = UIAlertController(title: "Welcome to RadarMart!", message: nil, preferredStyle: .alert)\n        alertController.addAction(UIAlertAction(title: "OK", style: .default, handler: nil))\n        if let viewController = tabBarController?.viewControllers?[1] {\n            alertController.show(viewController, sender: self)\n        }\n    }\n\n}\n')),(0,o.kt)("h2",{id:"support"},"Support"),(0,o.kt)("p",null,"Have questions or feedback on this documentation? Let us know! Email us at ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@radar.io"},"support@radar.io"),"."))}c.isMDXComponent=!0}}]);