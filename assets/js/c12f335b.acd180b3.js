"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9590],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(a),h=r,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||i;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},970:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(7294),r="alert_19nB",i="alertWarning_1tiz",o="alertInfo_1EfW",s="alertTip_1W6d",l="alertSuccess_7EZp",d=function(e){var t=e.children,a=e.alertType;return"warning"===a?n.createElement("div",{className:"alert "+r+" "+i,role:"alert"},t):"info"===a?n.createElement("div",{className:"alert "+r+" "+o,role:"alert"},t):"tip"===a?n.createElement("div",{className:"alert "+r+" "+s,role:"alert"},t):"success"===a?n.createElement("div",{className:"alert "+r+" "+l,role:"alert"},t):null}},9159:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=a(970),s={title:"FAQs"},l=void 0,d={unversionedId:"faqs",id:"faqs",isDocsHomePage:!1,title:"FAQs",description:"Testing",source:"@site/docs/faqs.mdx",sourceDirName:".",slug:"/faqs",permalink:"/documentation/faqs",editUrl:"https://github.com/radarlabs/docs/edit/main/docs/faqs.mdx",tags:[],version:"current",frontMatter:{title:"FAQs"},sidebar:"defaultSidebar",previous:{title:"Dashboard",permalink:"/documentation/dashboard"}},c=[{value:"Testing",id:"testing",children:[{value:"How should I test Radar battery drain?",id:"how-should-i-test-radar-battery-drain",children:[]},{value:"Can I test Radar side-by-side with another location SDK?",id:"can-i-test-radar-side-by-side-with-another-location-sdk",children:[]}]},{value:"Product",id:"product",children:[{value:"Is Radar still able to track location in the background if the app is killed?",id:"is-radar-still-able-to-track-location-in-the-background-if-the-app-is-killed",children:[]},{value:"If a user backgrounds my app, do I need to request background location permissions to access location?",id:"if-a-user-backgrounds-my-app-do-i-need-to-request-background-location-permissions-to-access-location",children:[]},{value:"What are the different event listeners and how should I use them?",id:"what-are-the-different-event-listeners-and-how-should-i-use-them",children:[]},{value:"What is the latency of Radar APIs?",id:"what-is-the-latency-of-radar-apis",children:[]}]},{value:"Privacy",id:"privacy",children:[{value:"What data does the Radar SDK collect?",id:"what-data-does-the-radar-sdk-collect",children:[]},{value:"What are privacy best practices for Radar?",id:"what-are-privacy-best-practices-for-radar",children:[]},{value:"What are location permission prompt best practices?",id:"what-are-location-permission-prompt-best-practices",children:[]},{value:"What is Radar&#39;s data retention policy?",id:"what-is-radars-data-retention-policy",children:[]},{value:"Is Radar CCPA-compliant and GDPR-compliant?",id:"is-radar-ccpa-compliant-and-gdpr-compliant",children:[]}]},{value:"Security",id:"security",children:[{value:"How do Radar account roles work?",id:"how-do-radar-account-roles-work",children:[]},{value:"How do data access controls work?",id:"how-do-data-access-controls-work",children:[]},{value:"Does Radar have a bug bounty or responsible disclosure program?",id:"does-radar-have-a-bug-bounty-or-responsible-disclosure-program",children:[]},{value:"What are security best practices for Radar?",id:"what-are-security-best-practices-for-radar",children:[]},{value:"Does Radar support audit logs?",id:"does-radar-support-audit-logs",children:[]},{value:"How do I set up single sign-on (SSO) in Radar?",id:"how-do-i-set-up-single-sign-on-sso-in-radar",children:[]},{value:"Is Radar SOC 2 type II-certified?",id:"is-radar-soc-2-type-ii-certified",children:[]},{value:"Is the Radar SDK secure?",id:"is-the-radar-sdk-secure",children:[]}]},{value:"Location permissions",id:"location-permissions",children:[{value:"How do I get statistics for location permissions?",id:"how-do-i-get-statistics-for-location-permissions",children:[]},{value:"What do the states in the location permissions graph represent?",id:"what-do-the-states-in-the-location-permissions-graph-represent",children:[]},{value:"What is a tracked user?",id:"what-is-a-tracked-user",children:[]},{value:"What is an active user?",id:"what-is-an-active-user",children:[]},{value:"What qualifies as an app session?",id:"what-qualifies-as-an-app-session",children:[]},{value:"Why are counts of active users different from counts tracked users?",id:"why-are-counts-of-active-users-different-from-counts-tracked-users",children:[]}]}],p={toc:c};function u(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"testing"},"Testing"),(0,i.kt)("h3",{id:"how-should-i-test-radar-battery-drain"},"How should I test Radar battery drain?"),(0,i.kt)("p",null,"To test battery drain attributable to Radar background tracking in your iOS or Android app, you must isolate battery drain attributable Radar's usage of location services."),(0,i.kt)("p",null,"This means that you must control for confounding variables:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In the context of your app, you must control for battery drain attributable to other code and other SDKs running in your app, having the app foregrounded, and notifications."),(0,i.kt)("li",{parentName:"ul"},"In the context of your device, you must control for battery drain attributable to other apps, the OS, and your device state, including having the screen turned on.")),(0,i.kt)("p",null,"Often, having the screen turned on and the app foregrounded are bigger sources of battery drain than usage of location services."),(0,i.kt)("p",null,"To isolate battery drain attributable Radar's usage of location services in your app, there are two ways to test:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install two builds of your app, one with Radar running background tracking and one without. Use your phone for a period of time, ideally a full day, and avoid opening either app (to avoid the confounding variables described above). At the end of the period, compare battery blame for each app on the Battery screen in the device settings."),(0,i.kt)("li",{parentName:"ol"},"Install the ",(0,i.kt)("a",{parentName:"li",href:"/toolkit"},"Radar Toolkit app"),", a sample app that does nothing but run Radar. Use your phone for a period of time, ideally a full day, and avoid opening the app (to avoid the confounding variables described above). At the end of the period, inspect battery blame for the app on the Battery screen in the device settings.")),(0,i.kt)("p",null,"Note that the Battery screen on iOS and Android shows battery drain attributable to each app not as an absolute percentage, but as a percentage of the absolute battery drain in the battery session."),(0,i.kt)("p",null,"For example, if the iOS Battery screen shows 2% battery blame attributable to your app and shows that your phone has drained 50% of its battery in the battery session, the absolute percentage attributable to your app is actually 2% * 50% = 1%."),(0,i.kt)("p",null,"When using the efficient and responsive tracking presets, the SDK will wake up while the user is moving (usually every few minutes), then shut down when the user stops. To save battery, the SDK will not wake up when stopped. For most users, background tracking with these presets uses only 1-2% battery per day (measured in absolute percentage)."),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"/sdk"},"SDK documentation")," and ",(0,i.kt)("a",{parentName:"p",href:"https://radar.com/blog/navigating-location-services-tradeoffs-between-accuracy-frequency-battery-efficiency"},"Navigating location services tradeoffs between accuracy, frequency, and battery efficiency")," for more information."),(0,i.kt)("h3",{id:"can-i-test-radar-side-by-side-with-another-location-sdk"},"Can I test Radar side-by-side with another location SDK?"),(0,i.kt)("p",null,"Many developers switch to Radar from other location SDKs. You can test Radar side-by-side with another location SDK, but keep in mind that there may be side effects on iOS."),(0,i.kt)("p",null,"On iOS, significant location change events, ",(0,i.kt)("inlineCode",{parentName:"p"},"CLRegion")," events, and ",(0,i.kt)("inlineCode",{parentName:"p"},"CLVisit")," events may be sent to all ",(0,i.kt)("inlineCode",{parentName:"p"},"CLLocationManager")," instances in the app. This may cause the Radar SDK to receive client-side location updates triggered by other SDKs even if you have not called ",(0,i.kt)("inlineCode",{parentName:"p"},"Radar.trackOnce()")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Radar.startTracking()"),"."),(0,i.kt)("p",null,"On Android, this is not an issue."),(0,i.kt)("h2",{id:"product"},"Product"),(0,i.kt)("h3",{id:"is-radar-still-able-to-track-location-in-the-background-if-the-app-is-killed"},"Is Radar still able to track location in the background if the app is killed?"),(0,i.kt)("p",null,"Yes, if background location permissions have been granted."),(0,i.kt)("p",null,"On iOS, if the app is killed (e.g., swiped up from the App Switcher), the SDK is able to wake up and start collecting locations again if it receives certain types of location updates from the OS. These services can be activated on iOS by enabling the ",(0,i.kt)("a",{parentName:"p",href:"/sdk/ios#background-modes"},"location updates background mode")," and using at least one of following ",(0,i.kt)("a",{parentName:"p",href:"/sdk/tracking#ios-options"},"tracking options"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"syncGeofences")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"useStoppedGeofence")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"useMovingGeofence")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"useSignificantLocationChanges")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"useVisits"))),(0,i.kt)("p",null,"On Android, Radar will continue to receive location updates if the app is swiped out of the Recent Apps list. Radar will not receive location updates if the phone manufacturer aggressively kills background services or the user presses ",(0,i.kt)("em",{parentName:"p"},"Force stop"),"."),(0,i.kt)("h3",{id:"if-a-user-backgrounds-my-app-do-i-need-to-request-background-location-permissions-to-access-location"},"If a user backgrounds my app, do I need to request background location permissions to access location?"),(0,i.kt)("p",null,"With just foreground location permissions, you can leverage the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/corelocation/cllocationmanager/2923541-showsbackgroundlocationindicator"},"background location indicator")," on iOS or a ",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/guide/components/foreground-services"},"foreground service")," on Android to continue to receive location updates in the background. These are activated via the ",(0,i.kt)("inlineCode",{parentName:"p"},"showBlueBar")," ",(0,i.kt)("a",{parentName:"p",href:"/sdk/tracking#ios-options"},"tracking option")," on iOS or the ",(0,i.kt)("inlineCode",{parentName:"p"},"foregroundService")," ",(0,i.kt)("a",{parentName:"p",href:"/sdk/tracking#android-options"},"tracking option")," on Android. iOS devices will display a blue location icon when activated, and Android devices will display a persistent notification. Use of these visual indicators is common for operational use cases such as fleet tracking and delivery."),(0,i.kt)("h3",{id:"what-are-the-different-event-listeners-and-how-should-i-use-them"},"What are the different event listeners and how should I use them?"),(0,i.kt)("p",null,"Each listener can support different use cases and exposes different data to take actions. The client location listener (",(0,i.kt)("inlineCode",{parentName:"p"},"onClientLocationUpdated")," on Android, ",(0,i.kt)("inlineCode",{parentName:"p"},"didUpdateClientLocation")," on iOS) is fired whenever the Radar SDK receives a location update from the device. It can be used to collect a stream of location updates before they hit Radar servers. The location updated listener (",(0,i.kt)("inlineCode",{parentName:"p"},"onLocationUpdated")," on Android, ",(0,i.kt)("inlineCode",{parentName:"p"},"didUpdateLocation")," on iOS) delivers location updates processed by Radar servers and will return refreshed user context. This listener can be used to deliver in-app experiences based on user context, including when ",(0,i.kt)("inlineCode",{parentName:"p"},"Radar.trackOnce()")," is called on application launch. The Radar events listener (",(0,i.kt)("inlineCode",{parentName:"p"},"didReceiveEvents")," on Android and iOS) can be used to listen for Radar events and trigger workflows."),(0,i.kt)("h3",{id:"what-is-the-latency-of-radar-apis"},"What is the latency of Radar APIs?"),(0,i.kt)("p",null,"Radar APIs have a p50 latency of 50ms and a p90 of 150ms.  The ",(0,i.kt)("inlineCode",{parentName:"p"},"/route/matrix")," API increases in latency as additional ",(0,i.kt)("inlineCode",{parentName:"p"},"origin")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"destination")," points are added, or as the distance between points increases."),(0,i.kt)("h2",{id:"privacy"},"Privacy"),(0,i.kt)("h3",{id:"what-data-does-the-radar-sdk-collect"},"What data does the Radar SDK collect?"),(0,i.kt)("p",null,"The Radar SDK collects location data (latitude, longitude), device IDs, IP addresses, and device info by default. We also collect any other user IDs (e.g., user IDs) or metadata that you choose to send us. Radar does not collect personally identifiable information like name or email by default."),(0,i.kt)("p",null,"For more information, see our ",(0,i.kt)("a",{parentName:"p",href:"https://radar.com/privacy"},"privacy policy"),", our ",(0,i.kt)("a",{parentName:"p",href:"https://radar.com/blog/our-commitment-to-privacy"},"commitment to privacy"),", and our ",(0,i.kt)("a",{parentName:"p",href:"https://radar.com/blog/location-data-privacy-checklist"},"location data privacy checklist"),"."),(0,i.kt)("h3",{id:"what-are-privacy-best-practices-for-radar"},"What are privacy best practices for Radar?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Do not send any PII, like names, email addresses, or publicly available IDs, to the Radar SDK or API."),(0,i.kt)("li",{parentName:"ul"},"Minimize the data you collect with Radar, turning on only the context types relevant to your use case (store visits for shopping apps, airport visits for travel apps, and so on)."),(0,i.kt)("li",{parentName:"ul"},"Clearly explain to end users what data will be collected and how it will be used in your apps, in permissions prompts, and in your privacy policy.")),(0,i.kt)("p",null,"For more information, see our ",(0,i.kt)("a",{parentName:"p",href:"https://radar.com/blog/location-data-privacy-checklist"},"location data privacy checklist"),"."),(0,i.kt)("h3",{id:"what-are-location-permission-prompt-best-practices"},"What are location permission prompt best practices?"),(0,i.kt)("p",null,"The best location permission prompts are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Transparent: The prompt explains what data will be collected from the end user and how it will be used, with a link to your privacy policy."),(0,i.kt)("li",{parentName:"ul"},"Valuable: The prompt explains why the user should grant location permissions, like enabling a location-based feature or unlocking an offer."),(0,i.kt)("li",{parentName:"ul"},"Timely: The prompt is shown when the user is engaged, like in an onboarding, when accessing a location-based feature, or after a transaction. Background permission prompts are shown after and incremental to foreground permission prompts.")),(0,i.kt)("p",null,'Opt-in rates vary from app to app, but apps that follow best practices can expect 70-80% of users to grant location permissions, with 40-50% of users granting background ("always") location permissions on iOS.'),(0,i.kt)("p",null,"For more information, see our ",(0,i.kt)("a",{parentName:"p",href:"https://radar.com/blog/location-data-privacy-checklist"},"location data privacy checklist"),"."),(0,i.kt)("h3",{id:"what-is-radars-data-retention-policy"},"What is Radar's data retention policy?"),(0,i.kt)("p",null,"By default, users and events are retained for 1 year, trips are retained for 90 days, and location updates are retained for 7 days."),(0,i.kt)("p",null,"Radar supports custom data retention settings. Admins can adjust these settings in the Radar dashboard under the Privacy section."),(0,i.kt)("h3",{id:"is-radar-ccpa-compliant-and-gdpr-compliant"},"Is Radar CCPA-compliant and GDPR-compliant?"),(0,i.kt)("p",null,"Yes, Radar is CCPA-compliant and GDPR-compliant. For more information, see our ",(0,i.kt)("a",{parentName:"p",href:"https://radar.com/blog/our-commitment-to-privacy"},"commitment to privacy"),"."),(0,i.kt)("p",null,"For data deletion requests, you can delete a user manually from the user detail page in the dashboard or ",(0,i.kt)("a",{parentName:"p",href:"/api#delete-a-user"},"delete a user programmatically")," using the API. Deletions are immediate."),(0,i.kt)("p",null,"For data access requests, you can export a user and all of their events and locations manually from the user detail page in the dashboard."),(0,i.kt)("p",null,"If you need assistance, you can also forward requests to your customer success manager."),(0,i.kt)("h2",{id:"security"},"Security"),(0,i.kt)("h3",{id:"how-do-radar-account-roles-work"},"How do Radar account roles work?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Read accounts can read user, geofence, and event data."),(0,i.kt)("li",{parentName:"ul"},"Write accounts can also create, update, and delete user, geofence, and event data."),(0,i.kt)("li",{parentName:"ul"},"Admin accounts can also invite new accounts and update project settings, including API keys and integrations."),(0,i.kt)("li",{parentName:"ul"},"Owner accounts can also edit account roles and project access.")),(0,i.kt)("p",null,"Use the appropriate role (owner, admin, write, or read) for each co-worker's account. See ",(0,i.kt)("a",{parentName:"p",href:"#what-are-security-best-practices-for-radar"},"Radar security best practices"),"."),(0,i.kt)("h3",{id:"how-do-data-access-controls-work"},"How do data access controls work?"),(0,i.kt)(o.Z,{alertType:"info",mdxType:"Alert"},"Data access controls are available on the "," ",(0,i.kt)("a",{href:"https://radar.com/pricing",target:"_blank"},"Enterprise plan"),"."),(0,i.kt)("p",null,"In addition to the account roles above, owners can also control:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Project access"),": Access to specific projects in an organization"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Environment access"),": Access to test or live data across projects in an organization"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Data access"),": Access to specific data and pages across projects in an organization",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"User locations"),": Access to data on the user details page (map and location information) and access to the user locations page"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Trip locations"),": Access to data on the trip details page (map and location information) and access to the ",(0,i.kt)("a",{parentName:"li",href:"/trip-tracking#in-the-radar-trip-tracking-dashboard"},"trip tracking dashboard"))))),(0,i.kt)("h3",{id:"does-radar-have-a-bug-bounty-or-responsible-disclosure-program"},"Does Radar have a bug bounty or responsible disclosure program?"),(0,i.kt)("p",null,"Yes. For more information, see the ",(0,i.kt)("a",{parentName:"p",href:"/vulnerability-disclosure-policy"},"Vulnerability Disclosure Policy"),"."),(0,i.kt)("h3",{id:"what-are-security-best-practices-for-radar"},"What are security best practices for Radar?"),(0,i.kt)("h4",{id:"account-management"},"Account management"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use a strong password (at least 10 characters, at least 1 lowercase letter, at least 1 uppercase letter, at least 1 number, and at least 1 symbol)."),(0,i.kt)("li",{parentName:"ul"},"Use a password manager like 1Password or LastPass to generate and store passwords, and use a different password for each website."),(0,i.kt)("li",{parentName:"ul"},"Use app- or SMS-based multi-factor authentication (MFA). Enable MFA on the Account page."),(0,i.kt)("li",{parentName:"ul"},"Do not share your account with co-workers."),(0,i.kt)("li",{parentName:"ul"},"Use the appropriate role (owner, admin, write, or read) for each co-worker's account."),(0,i.kt)("li",{parentName:"ul"},"When a co-worker is terminated, delete their account."),(0,i.kt)("li",{parentName:"ul"},"Use single sign-on (SSO) if supported by your organization."),(0,i.kt)("li",{parentName:"ul"},"Use a password protected lock screen on employee workstations set to a short timeout, e.g., 5 minutes.")),(0,i.kt)("h4",{id:"authentication"},"Authentication"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use Test keys for development and Live keys for production."),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("a",{parentName:"li",href:"/sdk#authentication"},"Publishable keys"),", which are restricted in scope in client-side code. Never use ",(0,i.kt)("a",{parentName:"li",href:"/api#authentication"},"Secret keys"),", which can read or write any data.")),(0,i.kt)("h4",{id:"website-restrictions"},"Website Restrictions"),(0,i.kt)("p",null,"Additionally, you can restrict which websites can use your publishable API keys. You can add or modify available domains on the ",(0,i.kt)("a",{parentName:"p",href:"https://radar.com/dashboard/settings/#website-restrictions"},"settings")," page."),(0,i.kt)("p",null,"Examples of valid rules:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A host with a single domain: ",(0,i.kt)("strong",{parentName:"li"},"example.com")),(0,i.kt)("li",{parentName:"ul"},"A host with sub domains: ",(0,i.kt)("strong",{parentName:"li"},"sub.example.com")," or ",(0,i.kt)("strong",{parentName:"li"},"sub1.sub2.example.com")),(0,i.kt)("li",{parentName:"ul"},"A domain and all its subdomain(s), using a wildcard (","*",") asterisk: ",(0,i.kt)("strong",{parentName:"li"},"example.com")," and ",(0,i.kt)("strong",{parentName:"li"},"*.example.com")),(0,i.kt)("li",{parentName:"ul"},"A host with a non-standard port: ",(0,i.kt)("strong",{parentName:"li"},"example.com:8000")),(0,i.kt)("li",{parentName:"ul"},"Using localhost with port: ",(0,i.kt)("strong",{parentName:"li"},"localhost:8080"))),(0,i.kt)("h4",{id:"data-management"},"Data management"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Encrypt data stored outside of Radar (e.g., data sent to integrations or sent to webhooks and stored in a data warehouse)."),(0,i.kt)("li",{parentName:"ul"},"Do not send any PII, like names, email addresses, or publicly available IDs, to the Radar SDK or API. See also ",(0,i.kt)("a",{parentName:"li",href:"#what-are-privacy-best-practices-for-radar"},"Radar privacy best practices"),".")),(0,i.kt)("h3",{id:"does-radar-support-audit-logs"},"Does Radar support audit logs?"),(0,i.kt)("p",null,"Yes, Radar supports audit logs for enterprise customers. Audit logs include all requests made from the dashboard with the account, project, environment, IP address, and timestamp of each request. The 100 most recent audit logs can be viewed from the dashboard, and full audit logs can be exported to CSV."),(0,i.kt)("h3",{id:"how-do-i-set-up-single-sign-on-sso-in-radar"},"How do I set up single sign-on (SSO) in Radar?"),(0,i.kt)("p",null,"Radar supports single sign-on (SSO) via SAML, LDAP, Open ID, and other identity providers."),(0,i.kt)("p",null,"SSO is an enterprise-only feature. Contact your customer success manager to enable this feature."),(0,i.kt)("h4",{id:"saml"},"SAML"),(0,i.kt)("p",null,"To set up your SAML identity provider, reach out to your customer success manager who will provide the assertion consumer service URL\nand application callback URL. They will need the following information in return:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SAML protocol URL"),(0,i.kt)("li",{parentName:"ul"},"Sign-in URL"),(0,i.kt)("li",{parentName:"ul"},"Sign-out URL (optional)"),(0,i.kt)("li",{parentName:"ul"},"X509 Signing Certificate (.pem file)"),(0,i.kt)("li",{parentName:"ul"},"User ID attribute (defaults to ",(0,i.kt)("a",{parentName:"li",href:"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"},"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier")," then ",(0,i.kt)("a",{parentName:"li",href:"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/upn"},"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/upn")," then ",(0,i.kt)("a",{parentName:"li",href:"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"},"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"),")")),(0,i.kt)("h3",{id:"is-radar-soc-2-type-ii-certified"},"Is Radar SOC 2 type II-certified?"),(0,i.kt)("p",null,"Yes, Radar is SOC 2 type II-certified. For more information, please ask your account executive for a copy of our attestation report."),(0,i.kt)("h3",{id:"is-the-radar-sdk-secure"},"Is the Radar SDK secure?"),(0,i.kt)("p",null,"Yes. The Radar SDK calls the Radar API over HTTPS using TLS version 1.2 or higher, so all data is encrypted in transit. API calls are authenticated using your ",(0,i.kt)("a",{parentName:"p",href:"/sdk#authentication"},"Publishable keys"),", which are restricted in scope."),(0,i.kt)("h2",{id:"location-permissions"},"Location permissions"),(0,i.kt)("h3",{id:"how-do-i-get-statistics-for-location-permissions"},"How do I get statistics for location permissions?"),(0,i.kt)("p",null,"Statistics for location permissions are available for customers who have installed SDK 3.1 or later."),(0,i.kt)("h3",{id:"what-do-the-states-in-the-location-permissions-graph-represent"},"What do the states in the location permissions graph represent?"),(0,i.kt)("p",null,"On iOS, the SDK checks ",(0,i.kt)("inlineCode",{parentName:"p"},"authorizationStatus")," on ",(0,i.kt)("inlineCode",{parentName:"p"},"CLLocationManager")," to determine authorization status:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Granted Background")),": ",(0,i.kt)("inlineCode",{parentName:"li"},"authorizationStatus")," is ",(0,i.kt)("inlineCode",{parentName:"li"},".authorizedAlways"),", meaning that the user has granted background location permissions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Granted Foreground")),": ",(0,i.kt)("inlineCode",{parentName:"li"},"authorizationStatus")," is ",(0,i.kt)("inlineCode",{parentName:"li"},".authorizedWhenInUse"),", meaning that the user has granted foreground location permissions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Denied")),": ",(0,i.kt)("inlineCode",{parentName:"li"},"authorizationStatus")," is ",(0,i.kt)("inlineCode",{parentName:"li"},".denied")," or ",(0,i.kt)("inlineCode",{parentName:"li"},".restricted"),", meaning that the user has denied location permissions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Not Determined")),": ",(0,i.kt)("inlineCode",{parentName:"li"},"authorizationStatus")," is ",(0,i.kt)("inlineCode",{parentName:"li"},".notDetermined"),", meaning that the user has not yet been prompted for location permissions.")),(0,i.kt)("p",null,"On Android, the SDK checks the ",(0,i.kt)("inlineCode",{parentName:"p"},"ACCESS_FINE_LOCATION")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ACCESS_BACKGROUND_LOCATION")," permissions to determine authorization status:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Granted Background")),": The ",(0,i.kt)("inlineCode",{parentName:"li"},"ACCESS_BACKGROUND_LOCATION")," permission is granted, meaning that the user has granted background location permissions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Granted Foreground")),": The ",(0,i.kt)("inlineCode",{parentName:"li"},"ACCESS_FINE_LOCATION")," permission is granted, meaning that the user has granted foreground location permissions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Denied")),": The ",(0,i.kt)("inlineCode",{parentName:"li"},"ACCESS_FINE_LOCATION")," permission is denied and ",(0,i.kt)("inlineCode",{parentName:"li"},"shouldShowRequestPermissionRationale()")," returns ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),', meaning that the user has denied location permissions and checked "Never ask again."'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Not Determined")),": None of the above criteria are true, meaning that the user has not yet been prompted for location permissions.")),(0,i.kt)("h3",{id:"what-is-a-tracked-user"},"What is a tracked user?"),(0,i.kt)("p",null,"A tracked user is a unique user that sends one or more location events to Radar in a given time period."),(0,i.kt)("h3",{id:"what-is-an-active-user"},"What is an active user?"),(0,i.kt)("p",null,"An active user is a unique user that has an ",(0,i.kt)("a",{parentName:"p",href:"#what-qualifies-as-an-app-session"},"app session")," in a given time period."),(0,i.kt)("h3",{id:"what-qualifies-as-an-app-session"},"What qualifies as an app session?"),(0,i.kt)("p",null,"An app session is a period of user activity in your app. A new app session is started whenever the app is opened, assuming at least 5 minutes have elapsed since the last app session started."),(0,i.kt)("h3",{id:"why-are-counts-of-active-users-different-from-counts-tracked-users"},"Why are counts of active users different from counts tracked users?"),(0,i.kt)("p",null,"Depending on your Radar SDK implementation, a user may have an ",(0,i.kt)("a",{parentName:"p",href:"#what-qualifies-as-an-app-session"},"app session")," without sending a location event to Radar. Conversely, a user may send a location event to Radar in the background (assuming they have granted background location permissions) without opening the app."))}u.isMDXComponent=!0}}]);