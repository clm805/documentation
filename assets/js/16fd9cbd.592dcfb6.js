"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6180],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},970:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7294),r="alert_19nB",i="alertWarning_1tiz",o="alertInfo_1EfW",s="alertTip_1W6d",l="alertSuccess_7EZp",p=function(e){var t=e.children,n=e.alertType;return"warning"===n?a.createElement("div",{className:"alert "+r+" "+i,role:"alert"},t):"info"===n?a.createElement("div",{className:"alert "+r+" "+o,role:"alert"},t):"tip"===n?a.createElement("div",{className:"alert "+r+" "+s,role:"alert"},t):"success"===n?a.createElement("div",{className:"alert "+r+" "+l,role:"alert"},t):null}},5782:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=n(970),s={sidebar_label:"React Native",title:"React Native SDK",description:"Documentation for React Native SDK"},l=void 0,p={unversionedId:"sdk/react-native",id:"sdk/react-native",isDocsHomePage:!1,title:"React Native SDK",description:"Documentation for React Native SDK",source:"@site/docs/sdk/react-native.mdx",sourceDirName:"sdk",slug:"/sdk/react-native",permalink:"/documentation/sdk/react-native",editUrl:"https://github.com/radarlabs/docs/edit/main/docs/sdk/react-native.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"React Native",title:"React Native SDK",description:"Documentation for React Native SDK"},sidebar:"defaultSidebar",previous:{title:"Android",permalink:"/documentation/sdk/android"},next:{title:"Web",permalink:"/documentation/sdk/web"}},d=[{value:"Install",id:"install",children:[{value:"iOS",id:"ios",children:[]},{value:"Android",id:"android",children:[]}]},{value:"Integrate",id:"integrate",children:[{value:"Import module",id:"import-module",children:[]},{value:"Initialize",id:"initialize",children:[]},{value:"Identify user",id:"identify-user",children:[]},{value:"Request permissions",id:"request-permissions",children:[]},{value:"Foreground tracking",id:"foreground-tracking",children:[]},{value:"Background tracking",id:"background-tracking",children:[]},{value:"Battery usage",id:"battery-usage",children:[]},{value:"Trip tracking",id:"trip-tracking",children:[]},{value:"Manual tracking",id:"manual-tracking",children:[]},{value:"Other APIs",id:"other-apis",children:[]}]},{value:"Support",id:"support",children:[]}],c={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This is the documentation for the React Native module. Before integrating, read the ",(0,i.kt)("a",{parentName:"p",href:"/sdk"},"native SDK documentation")," to familiarize yourself with the platform."),(0,i.kt)("p",null,"See the source on GitHub ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/radarlabs/react-native-radar"},"here"),". Or, see the ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native-radar")," package on npm ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/react-native-radar"},"here"),"."),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)("p",null,"Install the package from npm:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save react-native-radar\n")),(0,i.kt)("p",null,"If you are using Expo, you must eject:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"expo eject\n")),(0,i.kt)("p",null,"Then, install the ",(0,i.kt)("a",{parentName:"p",href:"/sdk/ios"},"iOS SDK"),". Change to the ",(0,i.kt)("inlineCode",{parentName:"p"},"ios/")," directory. In the ",(0,i.kt)("inlineCode",{parentName:"p"},"Podfile"),", update ",(0,i.kt)("inlineCode",{parentName:"p"},"platform :ios")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"10.0")," or higher. Then, run ",(0,i.kt)("inlineCode",{parentName:"p"},"pod install"),". Learn about ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/cli/blob/master/docs/autolinking.md"},"autolinking"),"."),(0,i.kt)("p",null,"Finally, before writing any JavaScript, you must integrate the Radar SDK with your iOS and Android apps by following the ",(0,i.kt)("em",{parentName:"p"},"Configure project")," and ",(0,i.kt)("em",{parentName:"p"},"Add SDK to project")," steps in the ",(0,i.kt)("a",{parentName:"p",href:"/sdk/ios"},"iOS SDK documentation")," and ",(0,i.kt)("a",{parentName:"p",href:"/sdk/android"},"Android SDK documentation"),"."),(0,i.kt)("h3",{id:"ios"},"iOS"),(0,i.kt)("p",null,"You must add location usage descriptions and background modes to your ",(0,i.kt)("inlineCode",{parentName:"p"},"Info.plist"),". For foreground permissions, you must add a value for  ",(0,i.kt)("inlineCode",{parentName:"p"},"NSLocationWhenInUseUsageDescription")," ",(0,i.kt)("em",{parentName:"p"},"(Privacy - Location When In Use Usage Description)"),". For background permissions, you must add a value for ",(0,i.kt)("inlineCode",{parentName:"p"},"NSLocationAlwaysAndWhenInUseUsageDescription")," ",(0,i.kt)("em",{parentName:"p"},"(Privacy - Location Always and When In Use Usage Description)"),". These strings are displayed in permissions prompts."),(0,i.kt)("img",{className:"large",src:"https://images.ctfassets.net/f2vbu16fzuly/66LUD7W9uTt7f2H5pMmpBp/1e5a2bb2baaf79328e88c3ea47a7f6ff/permissions.png"}),(0,i.kt)("p",null,"If you are planning to leverage background tracking, such as responsive or continuous mode, in your project settings, go to ",(0,i.kt)("em",{parentName:"p"},"Signing & Capabilities"),", add ",(0,i.kt)("em",{parentName:"p"},"Background Modes"),", and turn on ",(0,i.kt)("em",{parentName:"p"},"Background fetch")," and ",(0,i.kt)("em",{parentName:"p"},"Location updates"),". Note that this requires additional justification during App Store review. ",(0,i.kt)("a",{parentName:"p",href:"/sdk/ios#submit-to-app-store"},"Learn more"),"."),(0,i.kt)("img",{className:"large",src:"https://images.ctfassets.net/f2vbu16fzuly/UUjdS7HyuFgu5bzGzuOYd/3eb568125cea0d6c4cf9384327446f08/modes.png"}),(0,i.kt)("p",null,"Add the SDK to your project, preferably using CocoaPods. Finally, initialize the SDK in ",(0,i.kt)("inlineCode",{parentName:"p"},"application:didFinishLaunchingWithOptions:")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"AppDelegate.m"),", passing in your Radar publishable API key:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-objc"},"#import <RadarSDK/RadarSDK.h>\n\n@implementation AppDelegate\n\n- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {\n  [Radar initializeWithPublishableKey:publishableKey];\n  // ...\n}\n")),(0,i.kt)("h3",{id:"android"},"Android"),(0,i.kt)("p",null,"You must add Google Play Services Location to your project ",(0,i.kt)("em",{parentName:"p"},"(use version 21.0.1 or higher)"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'implementation "com.google.android.gms:play-services-location:21.0.1"')),(0,i.kt)("p",null,"Then add the SDK to your project and initialize the SDK in ",(0,i.kt)("inlineCode",{parentName:"p"},"onCreate()")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"MainApplication.java"),", passing in your Radar publishable API key:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"import io.radar.sdk.Radar;\n\npublic class MainApplication extends Application implements ReactApplication {\n\n  @Override\n  public void onCreate() {\n    super.onCreate();\n    Radar.initialize(this, publishableKey);\n    // ...\n  }\n\n}\n")),(0,i.kt)("p",null,"For background tracking without a foreground service, and if targeting API level ",(0,i.kt)("inlineCode",{parentName:"p"},"29")," or higher, Radar also requires the ",(0,i.kt)("inlineCode",{parentName:"p"},"ACCESS_BACKGROUND_LOCATION")," permission. You must add the ",(0,i.kt)("inlineCode",{parentName:"p"},"ACCESS_BACKGROUND_LOCATION")," permission to your manifest manually:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<manifest xmlns:android="http://schemas.android.com/apk/res/android">\n\n    <uses-permission android:name="android.permission.ACCESS_BACKGROUND_LOCATION" />\n\n</manifest>\n')),(0,i.kt)("h2",{id:"integrate"},"Integrate"),(0,i.kt)("h3",{id:"import-module"},"Import module"),(0,i.kt)("p",null,"First, import the module:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import Radar from 'react-native-radar';\n")),(0,i.kt)("h3",{id:"initialize"},"Initialize"),(0,i.kt)("p",null,"When your app starts, initialize the SDK with your publishable key."),(0,i.kt)("p",null,"Use your ",(0,i.kt)("inlineCode",{parentName:"p"},"Test Publishable")," key for testing and non-production environments. Use your ",(0,i.kt)("inlineCode",{parentName:"p"},"Live Publishable")," key for production environments."),(0,i.kt)(o.Z,{alertType:"warning",mdxType:"Alert"},"Note that you should always use your publishable API keys, which are restricted in scope, in the SDK. Do not use your secret API keys, which are unrestricted in scope, in any client-side code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.initialize(publishableKey);\n")),(0,i.kt)("h3",{id:"identify-user"},"Identify user"),(0,i.kt)("p",null,"To identify the user when logged in, call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.setUserId(userId);\n")),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"userId")," is a stable unique ID for the user."),(0,i.kt)("p",null,"To set an optional dictionary of custom metadata for the user, call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.setMetadata(metadata);\n")),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata")," is a JSON object with up to 16 keys and values of type string, boolean, or number."),(0,i.kt)("p",null,"Finally, to set an optional description for the user, displayed in the dashboard, call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.setDescription(description);\n")),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"description")," is a string."),(0,i.kt)("p",null,"You only need to call these functions once, as these settings will be persisted across app sessions."),(0,i.kt)("p",null,"Learn about platform-specific implementations of these functions in the ",(0,i.kt)("a",{parentName:"p",href:"/sdk/ios"},"iOS SDK documentation")," and ",(0,i.kt)("a",{parentName:"p",href:"/sdk/android"},"Android SDK documentation"),"."),(0,i.kt)("h3",{id:"request-permissions"},"Request permissions"),(0,i.kt)("p",null,"Before tracking the user's location, the user must have granted location permissions for the app."),(0,i.kt)("p",null,"To determine the whether user has granted location permissions for the app, call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.getPermissionsStatus().then((status) => {\n  // do something with status\n});\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"status")," will be a string, one of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"GRANTED_BACKGROUND"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"GRANTED_FOREGROUND"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"NOT_DETERMINED"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"DENIED")))),(0,i.kt)("p",null,"To request location permissions for the app, call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.requestPermissions(background).then((status) => {\n  // do something with status\n});\n")),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"background")," is a boolean indicating whether to request background location permissions or foreground location permissions."),(0,i.kt)("p",null,"Learn about platform-specific permissions in the ",(0,i.kt)("a",{parentName:"p",href:"/sdk/ios"},"iOS SDK documentation")," and ",(0,i.kt)("a",{parentName:"p",href:"/sdk/android"},"Android SDK documentation"),"."),(0,i.kt)(o.Z,{alertType:"info",mdxType:"Alert"},"Build and run the app to make sure permissions prompts are displayed!"),(0,i.kt)("h3",{id:"foreground-tracking"},"Foreground tracking"),(0,i.kt)("p",null,"Once you have initialized the SDK and the user has granted permissions, you can track the user's location."),(0,i.kt)("p",null,"To track the user's location in the foreground, call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.trackOnce().then((result) => {\n  // do something with result.location, result.events, result.user\n}).catch((err) => {\n  // optionally, do something with err\n});\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"err")," will be a string, one of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"ERROR_PUBLISHABLE_KEY")),": SDK not initialized"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"ERROR_PERMISSIONS")),": location permissions not granted"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"ERROR_LOCATION")),": location services error or timeout (10 seconds)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"ERROR_NETWORK")),": network error or timeout (10 seconds)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"ERROR_BAD_REQUEST")),": bad request (missing or invalid params)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"ERROR_UNAUTHORIZED")),": unauthorized (invalid API key)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"ERROR_PAYMENT_REQUIRED")),": payment required (organization disabled or usage exceeded)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"ERROR_FORBIDDEN")),": forbidden (insufficient permissions or no beta access)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"ERROR_NOT_FOUND")),": not found"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"ERROR_RATE_LIMIT")),": too many requests (",(0,i.kt)("a",{parentName:"li",href:"/api#track"},"rate limit")," exceeded)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"ERROR_SERVER")),": internal server error"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"ERROR_UNKNOWN")),": unknown error")),(0,i.kt)("p",null,"Learn about platform-specific implementations of this function in the ",(0,i.kt)("a",{parentName:"p",href:"/sdk/ios"},"iOS SDK documentation")," and ",(0,i.kt)("a",{parentName:"p",href:"/sdk/android"},"Android SDK documentation"),"."),(0,i.kt)("h3",{id:"background-tracking"},"Background tracking"),(0,i.kt)("p",null,"Once you have initialized the SDK and the user has granted permissions, you can start tracking the user's location in the background."),(0,i.kt)("p",null,"For background tracking, the SDK supports custom tracking options as well as three presets:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"EFFICIENT")),": A low frequency of location updates and lowest battery usage. On Android, avoids Android vitals bad behavior thresholds."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"RESPONSIVE")),": A medium frequency of location updates and low battery usage. Suitable for most consumer use cases."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"CONTINUOUS")),': A high frequency of location updates and higher battery usage. Suitable for on-demand use cases (e.g., delivery tracking) and some consumer use cases (e.g., order ahead, "mall mode").')),(0,i.kt)("p",null,"Learn about platform-specific implementations of these presets in the ",(0,i.kt)("a",{parentName:"p",href:"/sdk/ios"},"iOS SDK documentation")," and ",(0,i.kt)("a",{parentName:"p",href:"/sdk/android"},"Android SDK documentation"),"."),(0,i.kt)("p",null,"To start tracking the user's location in the background, call one of:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.startTrackingEfficient();\n\nRadar.startTrackingResponsive();\n\nRadar.startTrackingContinuous();\n")),(0,i.kt)("p",null,"You only need to call these methods once, as these settings will be persisted across app sessions."),(0,i.kt)("p",null,"Though we recommend using presets for most use cases, you can customize the tracking options. See the ",(0,i.kt)("a",{parentName:"p",href:"/sdk/tracking"},"tracking options reference"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// optionally adjust foreground service options for android\nRadar.setForegroundServiceOptions({\n  options: {\n    text: \"Location tracking started\",\n    title: \"Location updates\",\n    updatesOnly: false,\n    importance: 2,\n    activity: 'com.yourapp.MainActivity'\n  }\n});\n\nRadar.startTrackingCustom({\n  desiredStoppedUpdateInterval: 180,\n  fastestStoppedUpdateInterval: 15,\n  desiredMovingUpdateInterval: 60,\n  fastestMovingUpdateInterval: 15,\n  desiredSyncInterval: 10,\n  desiredAccuracy: 'high',\n  stopDuration: 140,\n  stopDistance: 70,\n  sync: 'all',\n  replay: 'none',\n  useStoppedGeofence: true,\n  showBlueBar: true,\n  foregroundServiceEnabled: true\n});\n")),(0,i.kt)("p",null,"To stop tracking the user's location in the background (e.g., when the user logs out), call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.stopTracking();\n")),(0,i.kt)("p",null,"Learn about platform-specific implementations of these functions in the ",(0,i.kt)("a",{parentName:"p",href:"/sdk/ios"},"iOS SDK documentation")," and ",(0,i.kt)("a",{parentName:"p",href:"/sdk/android"},"Android SDK documentation"),"."),(0,i.kt)("p",null,"To listen for events, location updates, and errors, you can add event listeners:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.on('clientLocation', (result) => {\n  // do something with result.location\n});\n\nRadar.on('location', (result) => {\n  // do something with result.location, result.user\n});\n\nRadar.on('events', (result) => {\n  // do something with result.events, result.user\n});\n\nRadar.on('error', (err) => {\n  // do something with err\n});\n")),(0,i.kt)(o.Z,{alertType:"warning",mdxType:"Alert"},"Listeners should be set only once and before tracking begins."),(0,i.kt)("p",null,"Add event listeners outside of your component lifecycle (e.g., outside of ",(0,i.kt)("inlineCode",{parentName:"p"},"componentDidMount"),") if you want them to work when the app is in the background."),(0,i.kt)("p",null,"You can also remove event listeners:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.off('clientLocation');\n\nRadar.off('location');\n\nRadar.off('events');\n\nRadar.off('error');\n")),(0,i.kt)("h3",{id:"battery-usage"},"Battery usage"),(0,i.kt)("p",null,"Because React Native loads and parses your JavaScript bundle on each app launch, and because background tracking may launch the app in the background, background tracking with the React Native module can increase battery usage."),(0,i.kt)("p",null,"On iOS, the app loads and parses the JavaScript bundle when the app is launched. If you do not want to receive events in JavaScript and you want to disable this in the background, check ",(0,i.kt)("inlineCode",{parentName:"p"},"launchOptions")," for the ",(0,i.kt)("inlineCode",{parentName:"p"},"UIApplicationLaunchOptionsLocationKey")," to conditionally parse and load the JavaScript bundle. Learn more about this key ",(0,i.kt)("a",{parentName:"p",href:"https://developer.apple.com/uikit/uiapplicationlaunchoptionslocationkey"},"here"),"."),(0,i.kt)("p",null,"On Android, a receiver in the React Native module loads and parses the JavaScript bundle when the app is launched in the background. If you do not want to receive events in JavaScript and you want to disable this, add an override to your manifest:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<receiver\n  tools:replace="android:enabled"\n  android:name="io.radar.react.RNRadarReceiver"\n  android:enabled="false"\n  android:exported="false" />\n')),(0,i.kt)("h3",{id:"trip-tracking"},"Trip tracking"),(0,i.kt)("p",null,"To start a trip to a destination, call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.startTrip({\n  tripOptions: {\n    externalId: '299',\n    destinationGeofenceTag: 'store',\n    destinationGeofenceExternalId: '123',\n    mode: 'car'\n  },\n  trackingOptions:{\n    desiredStoppedUpdateInterval: 30,\n    fastestStoppedUpdateInterval: 30,\n    desiredMovingUpdateInterval: 30,\n    fastestMovingUpdateInterval: 30,\n    desiredSyncInterval: 20,\n    desiredAccuracy: \"high\",\n    stopDuration: 0,\n    stopDistance: 0,\n    replay: \"none\",\n    sync: \"all\",\n    showBlueBar: true,\n    syncGeofences: false,\n    syncGeofencesLimit: 0,\n    beacons: false,\n    foregroundServiceEnabled: true\n  }\n}).then((result) => {\n  // do something with result.status\n});\n")),(0,i.kt)("p",null,"Update information about the trip. Status can be set to 'unknown' to leave the status unchanged as it will update via location tracking."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.updateTrip({\n  status:'arrived',\n  options: {\n    externalId: '299',\n    metadata: {\n      parkingSpot: '5'\n    }\n  }\n}).then((result) => {\n  // do something with result.status\n});\n")),(0,i.kt)("p",null,"Later, complete the trip by calling:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.completeTrip().then((result) => {\n  // do something with result.status\n});\n")),(0,i.kt)("p",null,"Or, cancel the trip by calling:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.cancelTrip().then((result) => {\n  // do something with result.status\n});\n")),(0,i.kt)("p",null,"If tracking was disabled before the trip started, it will stop after the trip ends. Otherwise, it will revert to the tracking options in use before the trip started."),(0,i.kt)("p",null,"Learn more about ",(0,i.kt)("a",{parentName:"p",href:"/trip-tracking"},"trip tracking"),"."),(0,i.kt)("h3",{id:"manual-tracking"},"Manual tracking"),(0,i.kt)("p",null,"You can manually update the user's location by calling:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.trackOnce({\n  latitude: 39.2904,\n  longitude: -76.6122,\n  accuracy: 65\n}).then((result) => {\n  // do something with result.events, result.user\n}).catch((err) => {\n  // optionally, do something with err\n});\n")),(0,i.kt)("p",null,"Learn about platform-specific implementation of this function in the ",(0,i.kt)("a",{parentName:"p",href:"/sdk/ios"},"iOS SDK documentation")," and ",(0,i.kt)("a",{parentName:"p",href:"/sdk/android"},"Android SDK documentation"),"."),(0,i.kt)("h3",{id:"other-apis"},"Other APIs"),(0,i.kt)("p",null,"The React Native module also exposes APIs for anonymous context, geocoding, search, and distance."),(0,i.kt)("h4",{id:"get-location"},"Get location"),(0,i.kt)("p",null,"Get a single location update without sending it to the server:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.getLocation().then((result) => {\n  // do something with result.location\n}).catch((err) => {\n  // optionally, do something with err\n});\n")),(0,i.kt)("h4",{id:"context"},"Context"),(0,i.kt)("p",null,"With the ",(0,i.kt)("a",{parentName:"p",href:"/api#context"},"context API"),", get context for a location without sending device or user identifiers to the server:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.getContext({\n  latitude: 40.783826,\n  longitude: -73.975363,\n  accuracy: 65\n}).then((result) => {\n  // do something with result.context\n}).catch((err) => {\n  // optionally, do something with err\n});\n")),(0,i.kt)("h4",{id:"geocoding"},"Geocoding"),(0,i.kt)("p",null,"With the ",(0,i.kt)("a",{parentName:"p",href:"/api#forward-geocode"},"forward geocoding API"),", geocode an address, converting address to coordinates:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.geocode('20 jay st brooklyn ny').then((result) => {\n  // do something with result.addresses\n}).catch((err) => {\n  // optionally, do something with err\n});\n")),(0,i.kt)("p",null,"With the ",(0,i.kt)("a",{parentName:"p",href:"/api#reverse-geocode"},"reverse geocoding API"),", reverse geocode a location, converting coordinates to address:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.reverseGeocode({\n  latitude: 40.783826,\n  longitude: -73.975363\n}).then((result) => {\n  // do something with result.addresses\n}).catch((err) => {\n  // optionally, do something with err\n});\n")),(0,i.kt)("p",null,"With the ",(0,i.kt)("a",{parentName:"p",href:"/api#ip-geocode"},"IP geocoding API"),", geocode the device's current IP address, converting IP address to city, state, and country:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.ipGeocode().then((result) => {\n  // do something with result.address\n}).catch((err) => {\n  // optionally, do something with err\n});\n")),(0,i.kt)("h4",{id:"search"},"Search"),(0,i.kt)("p",null,"With the ",(0,i.kt)("a",{parentName:"p",href:"/api#autocomplete"},"autocomplete API"),", autocomplete partial addresses and place names, sorted by relevance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.autocomplete({\n  query: 'brooklyn roasting',\n  near: {\n    latitude: 40.783826,\n    longitude: -73.975363\n  },\n  limit: 10\n}).then((result) => {\n  // do something with result.addresses\n}).catch((err) => {\n  // optionally, do something with err\n});\n")),(0,i.kt)("p",null,"With the ",(0,i.kt)("a",{parentName:"p",href:"/api#search-geofences"},"geofence search API"),", search for geofences near a location, sorted by distance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.searchGeofences({\n  radius: 1000,\n  tags: ['venue'],\n  limit: 10\n}).then((result) => {\n  // do something with result.geofences\n}).catch((err) => {\n  // optionally, do something with err\n});\n")),(0,i.kt)("p",null,"With the ",(0,i.kt)("a",{parentName:"p",href:"/api#search-places"},"places search API"),", search for places near a location, sorted by distance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.searchPlaces({\n  near: {\n    latitude: 40.783826,\n    longitude: -73.975363\n  },\n  radius: 1000,\n  chains: ['starbucks'],\n  limit: 10\n}).then((result) => {\n  // do something with result.places\n}).catch((err) => {\n  // optionally, do something with err\n});\n")),(0,i.kt)("h4",{id:"distance"},"Distance"),(0,i.kt)("p",null,"With the ",(0,i.kt)("a",{parentName:"p",href:"/api#distance"},"distance API"),", calculate the travel distance and duration from an origin to a destination:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.getDistance({\n  origin: {\n    latitude: 40.78382,\n    longitude: -73.97536\n  },\n  destination: {\n    latitude: 40.70390,\n    longitude: -73.98670\n  },\n  modes: [\n    'foot',\n    'car'\n  ],\n  units: 'imperial'\n}).then((result) => {\n  // do something with result.routes\n}).catch((err) => {\n  // optionally, do something with err\n});\n")),(0,i.kt)("h4",{id:"matrix"},"Matrix"),(0,i.kt)("p",null,"With the ",(0,i.kt)("a",{parentName:"p",href:"/api#matrix"},"matrix API"),", calculate the travel distance and duration between multiple origins and destinations for up to 25 routes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.getMatrix({\n  origins: [\n    {\n      latitude: 40.78382,\n      longitude: -73.97536\n    },\n    {\n      latitude: 40.70390,\n      longitude: -73.98670\n    }\n  ],\n  destinations: [\n    {\n      latitude: 40.64189,\n      longitude: -73.78779\n    },\n    {\n      latitude: 35.99801,\n      longitude: -78.94294\n    }\n  ],\n  mode: 'car',\n  units: 'imperial'\n}).then((result) => {\n  // do something with result.matrix\n}).catch((err) => {\n  // optionally, do something with err\n});\n")),(0,i.kt)("h4",{id:"conversions"},"Conversions"),(0,i.kt)("p",null,"With the ",(0,i.kt)("a",{parentName:"p",href:"/api#log-a-conversion"},"conversions API"),", log a conversion, such as a purchase or signup, to analyze alongside your app's location activity:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Radar.logConversion(\n  name,\n  metadata\n).then((result) => {\n  // do something with result.event\n}).catch((err) => {\n  // optionally, do something with err\n});\n\n// conversion with revenue\nRadar.logConversion(\n  name,\n  revenue,\n  metadata\n).then((result) => {\n  // do something with result.event\n}).catch((err) => {\n  // optionally, do something with err\n});\n")),(0,i.kt)("h2",{id:"support"},"Support"),(0,i.kt)("p",null,"Have questions? We're here to help! Email us at ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@radar.com"},"support@radar.com"),"."))}u.isMDXComponent=!0}}]);