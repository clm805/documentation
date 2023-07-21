"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8856],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return k}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),k=r,m=u["".concat(l,".").concat(k)]||u[k]||d[k]||i;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},970:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7294),r="alert_19nB",i="alertWarning_1tiz",o="alertInfo_1EfW",s="alertTip_1W6d",l="alertSuccess_7EZp",c=function(e){var t=e.children,a=e.alertType;return"warning"===a?n.createElement("div",{className:"alert "+r+" "+i,role:"alert"},t):"info"===a?n.createElement("div",{className:"alert "+r+" "+o,role:"alert"},t):"tip"===a?n.createElement("div",{className:"alert "+r+" "+s,role:"alert"},t):"success"===a?n.createElement("div",{className:"alert "+r+" "+l,role:"alert"},t):null}},6036:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=a(970),s={sidebar_label:"Xamarin",title:"Xamarin SDK",description:"Documentation for Xamarin SDK"},l=void 0,c={unversionedId:"sdk/xamarin",id:"sdk/xamarin",isDocsHomePage:!1,title:"Xamarin SDK",description:"Documentation for Xamarin SDK",source:"@site/docs/sdk/xamarin.mdx",sourceDirName:"sdk",slug:"/sdk/xamarin",permalink:"/documentation/sdk/xamarin",editUrl:"https://github.com/radarlabs/docs/edit/main/docs/sdk/xamarin.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Xamarin",title:"Xamarin SDK",description:"Documentation for Xamarin SDK"},sidebar:"defaultSidebar",previous:{title:"Flutter",permalink:"/documentation/sdk/flutter"},next:{title:"Tracking Options",permalink:"/documentation/sdk/tracking"}},p=[{value:"Install",id:"install",children:[]},{value:"Integrate",id:"integrate",children:[{value:"Initialize",id:"initialize",children:[]},{value:"Identify user",id:"identify-user",children:[]},{value:"Request permissions",id:"request-permissions",children:[]},{value:"Foreground tracking",id:"foreground-tracking",children:[]},{value:"Background tracking",id:"background-tracking",children:[]},{value:"Mock tracking",id:"mock-tracking",children:[]},{value:"Trip tracking",id:"trip-tracking",children:[]},{value:"Manual tracking",id:"manual-tracking",children:[]},{value:"Other APIs",id:"other-apis",children:[]}]},{value:"Support",id:"support",children:[]}],d={toc:p};function u(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This is the documentation for the Xamarin package. Before integrating, read the ",(0,i.kt)("a",{parentName:"p",href:"/sdk"},"native SDK documentation")," to familiarize yourself with the platform."),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)("p",null,"Install the package from ",(0,i.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/RadarIO.Xamarin/"},"NuGet"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Install-Package RadarIO.Xamarin\n")),(0,i.kt)("p",null,"If you have an iOS and an Android project, add the package to each project."),(0,i.kt)("h2",{id:"integrate"},"Integrate"),(0,i.kt)("h3",{id:"initialize"},"Initialize"),(0,i.kt)("p",null,"First, initialize the SDK:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"using RadarIO.Xamarin;\nusing static RadarIO.Xamarin.RadarSingleton;\n\nnamespace MyProject\n{\n    public class Example\n    {\n        void Example ()\n        {\n            RadarSingleton.Initialize(new RadarSDKImpl());\n            Radar.Initialize(publishableKey);\n        }\n    }\n}\n")),(0,i.kt)("h3",{id:"identify-user"},"Identify user"),(0,i.kt)("p",null,"To identify the user when logged in, call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"Radar.UserId = userId;\n")),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"userId")," is a stable unique ID for the user."),(0,i.kt)("p",null,"To set an optional dictionary of custom metadata for the user, call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"Radar.Metadata = metadata;\n")),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata")," is a ",(0,i.kt)("inlineCode",{parentName:"p"},"JSONObject")," with up to 16 keys and values of type string, boolean, or number."),(0,i.kt)("p",null,"Finally, to set an optional description for the user, displayed in the dashboard, call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"Radar.Description = description;\n")),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"description")," is a string."),(0,i.kt)("p",null,"You only need to call these functions once, as these settings will be persisted across app sessions."),(0,i.kt)("p",null,"Learn about platform-specific implementations of these functions in the ",(0,i.kt)("a",{parentName:"p",href:"/sdk/ios"},"iOS SDK documentation")," and ",(0,i.kt)("a",{parentName:"p",href:"/sdk/android"},"Android SDK documentation"),"."),(0,i.kt)("h3",{id:"request-permissions"},"Request permissions"),(0,i.kt)("p",null,"Before tracking the user's location, the user must have granted location permissions for the app."),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/xamarin/essentials/permissions"},"Xamarin Permissions docs")," to learn how to check and request permissions."),(0,i.kt)("h3",{id:"foreground-tracking"},"Foreground tracking"),(0,i.kt)("p",null,"Once you have initialized the SDK and the user has granted permissions, you can track the user's location."),(0,i.kt)("p",null,"To track the user's location in the foreground, call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"var (status, location, events, user) = await Radar.TrackOnce();\n")),(0,i.kt)("p",null,"Learn about platform-specific implementations of this function in the ",(0,i.kt)("a",{parentName:"p",href:"/sdk/ios"},"iOS SDK documentation")," and ",(0,i.kt)("a",{parentName:"p",href:"/sdk/android"},"Android SDK documentation"),"."),(0,i.kt)("h3",{id:"background-tracking"},"Background tracking"),(0,i.kt)("p",null,"On iOS and Android, once you have initialized the SDK and the user has granted permissions, you can start tracking the user's location in the background."),(0,i.kt)("p",null,"For background tracking, the SDK supports custom tracking options as well as three presets:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"TrackingOptionsEfficient")),": A low frequency of location updates and lowest battery usage. On Android, avoids Android vitals bad behavior thresholds."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"TrackingOptionsResponsive")),": A medium frequency of location updates and low battery usage. Suitable for most consumer use cases."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"TrackingOptionsContinuous")),': A high frequency of location updates and higher battery usage. Suitable for on-demand use cases (e.g., delivery tracking) and some consumer use cases (e.g., order ahead, "mall mode").')),(0,i.kt)("p",null,"Learn about platform-specific implementations of these presets in the ",(0,i.kt)("a",{parentName:"p",href:"/sdk/ios"},"iOS SDK documentation")," and ",(0,i.kt)("a",{parentName:"p",href:"/sdk/android"},"Android SDK documentation"),"."),(0,i.kt)("p",null,"To start tracking the user's location in the background, call one of:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"Radar.StartTracking(TrackingOptionsEfficient);\n\nRadar.StartTracking(TrackingOptionsResponsive);\n\nRadar.StartTracking(TrackingOptionsContinuous);\n")),(0,i.kt)("p",null,"You only need to call these methods once, as these settings will be persisted across app sessions."),(0,i.kt)("p",null,"Though we recommend using presets for most use cases, you can customize the tracking options. See the ",(0,i.kt)("a",{parentName:"p",href:"/sdk/tracking"},"tracking options reference"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"RadarTrackingOptions trackingOptions = TrackingOptionsContinuous;\ntrackingOptions.DesiredStoppedUpdateInterval = 180;\ntrackingOptions.DesiredStoppedUpdateInterval = 60;\ntrackingOptions.DesiredSyncUpdateInterval = 50;\ntrackingOptions.DesiredAccuracy = RadarTrackingOptionsDesiredAccuracy.High;\ntrackingOptions.StopDuration = 140;\ntrackingOptions.StopDistance = 70;\ntrackingOptions.Sync = RadarTrackingOptionsSync.All;\ntrackingOptions.Replay = RadarTrackingOptionsReplay.None;\n\nRadar.StartTracking(trackingOptions);\n")),(0,i.kt)("p",null,"To stop tracking the user's location in the background (e.g., when the user logs out), call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"Radar.StopTracking();\n")),(0,i.kt)("p",null,"Learn about platform-specific implementations of these functions in the ",(0,i.kt)("a",{parentName:"p",href:"/sdk/ios"},"iOS SDK documentation")," and ",(0,i.kt)("a",{parentName:"p",href:"/sdk/android"},"Android SDK documentation"),"."),(0,i.kt)("p",null,"To listen for events, location updates, and errors, you can add event listeners:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"Radar.ClientLocationUpdated += (result) =>\n{\n    // do something with result.location, result.stopped, result.source\n};\n\nRadar.LocationUpdated += (result) =>\n{\n    // do something with result.location, result.user\n};\n\nRadar.EventsReceived += (result) =>\n{\n    // do something with result.events, result.user\n};\n\nRadar.Error += (err) => {\n    // do something with err\n};\n")),(0,i.kt)(o.Z,{alertType:"warning",mdxType:"Alert"},"Listeners should be set only once and before tracking begins."),(0,i.kt)("h3",{id:"mock-tracking"},"Mock tracking"),(0,i.kt)("p",null,"On iOS and Android, you can simulate a sequence of location updates for testing. For example, to simulate a sequence of 10 location updates every 3 seconds by car from an ",(0,i.kt)("inlineCode",{parentName:"p"},"origin")," to a ",(0,i.kt)("inlineCode",{parentName:"p"},"destination"),", we can call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"Location origin = new Location(40.714708, -74.035807);\nLocation destination = new Location(40.717410, -74.053334);\n\nRadar.MockTracking(origin, destination, RadarRouteMode.Car, 10, 3);\n")),(0,i.kt)("h3",{id:"trip-tracking"},"Trip tracking"),(0,i.kt)("p",null,"On iOS and Android, to start a trip to a destination, call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'RadarTrackingOptions tripOptions = new RadarTripOptions();\ntripOptions.ExternalId = "299";\ntripOptions.DestinationGeofenceTag = "store";\ntripOptions.DestinationGeofenceExternalId = "123";\ntripOptions.Mode = RadarRouteMode.Car;\n\nRadar.StartTrip(tripOptions);\nRadar.StartTracking(TrackingOptionsContinuous);\n')),(0,i.kt)("p",null,"Later, to complete the trip and stop tracking, call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"Radar.CompleteTrip();\nRadar.StopTracking();\n")),(0,i.kt)("p",null,"Or, to cancel the trip and stop tracking, call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"Radar.CancelTrip();\nRadar.StopTracking();\n")),(0,i.kt)("p",null,"Learn more about ",(0,i.kt)("a",{parentName:"p",href:"/trip-tracking"},"trip tracking"),"."),(0,i.kt)("h3",{id:"manual-tracking"},"Manual tracking"),(0,i.kt)("p",null,"You can manually update the user's location by calling:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"Location location = new Location(40.714708, -74.035807);\nlocation.Accuracy = 65;\n\nvar (status, location, events, user) = await Radar.TrackOnce(location);\n\n")),(0,i.kt)("p",null,"Learn about platform-specific implementation of this function in the ",(0,i.kt)("a",{parentName:"p",href:"/sdk/ios"},"iOS SDK documentation")," and ",(0,i.kt)("a",{parentName:"p",href:"/sdk/android"},"Android SDK documentation"),"."),(0,i.kt)("h3",{id:"other-apis"},"Other APIs"),(0,i.kt)("p",null,"The Xamarin SDK also exposes APIs for anonymous context, geocoding, search, and distance."),(0,i.kt)("h4",{id:"get-location"},"Get location"),(0,i.kt)("p",null,"Get a single location update without sending it to the server:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"var (status, location) = await Radar.GetLocation();\n")),(0,i.kt)("h4",{id:"context"},"Context"),(0,i.kt)("p",null,"With the ",(0,i.kt)("a",{parentName:"p",href:"/api#context"},"context API"),", get context for a location without sending device or user identifiers to the server:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"var (status, context) = await Radar.GetContext();\n")),(0,i.kt)("h4",{id:"geocoding"},"Geocoding"),(0,i.kt)("p",null,"With the ",(0,i.kt)("a",{parentName:"p",href:"/api#forward-geocode"},"forward geocoding API"),", geocode an address, converting address to coordinates:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'var (status, addresses) = await Radar.Geocode("20 jay st brooklyn ny");\n')),(0,i.kt)("p",null,"With the ",(0,i.kt)("a",{parentName:"p",href:"/api#reverse-geocode"},"reverse geocoding API"),", reverse geocode a location, converting coordinates to address:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"Location location = new Location(40.714708, -74.035807);\n\nvar (status, addresses) = await Radar.ReverseGeocode(location);\n")),(0,i.kt)("p",null,"With the ",(0,i.kt)("a",{parentName:"p",href:"/api#ip-geocode"},"IP geocoding API"),", geocode the device's current IP address, converting IP address to city, state, and country:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"var (status, address, proxy) = await Radar.IpGeocode();\n")),(0,i.kt)("h4",{id:"search"},"Search"),(0,i.kt)("p",null,"With the ",(0,i.kt)("a",{parentName:"p",href:"/api#autocomplete"},"autocomplete API"),", autocomplete partial addresses and place names, sorted by relevance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'Location near = new Location(40.783826, -73.975363);\n\nvar (status, addresses) = await Radar.Autocomplete("brooklyn roasting", near, 10);\n')),(0,i.kt)("p",null,"With the ",(0,i.kt)("a",{parentName:"p",href:"/api#search-geofences"},"geofence search API"),", search for geofences near a location, sorted by distance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'Location near = new Location(40.783826, -73.975363);\n\nvar (status, geofences) = await Radar.SearchGeofences(near, 1000, new string[]{ "venue" }, 10);\n')),(0,i.kt)("p",null,"With the ",(0,i.kt)("a",{parentName:"p",href:"/api#search-places"},"places search API"),", search for places near a location, sorted by distance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'Location near = new Location(40.783826, -73.975363);\n\nvar (status, places) = await Radar.SearchPlaces(near, 1000, new string[]{ "starbucks" }, null, null, 10);\n')),(0,i.kt)("h4",{id:"distance"},"Distance"),(0,i.kt)("p",null,"With the ",(0,i.kt)("a",{parentName:"p",href:"/api#distance"},"distance API"),", calculate the travel distance and duration from an origin to a destination:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"Location origin = new Location(40.78382, -73.97536);\nLocation destination = new Location(40.70390, -73.98670);\n\nvar (status, routes) = await Radar.GetDistance(origin, destination, new[] { RadarRouteMode.Foot, RadarRouteMode.Car }, RadarRouteUnits.Imperial);\n")),(0,i.kt)("h4",{id:"matrix"},"Matrix"),(0,i.kt)("p",null,"With the ",(0,i.kt)("a",{parentName:"p",href:"/api#matrix"},"matrix API"),", calculate the travel distances and durations between multiple origins and destinations for up to 25 routes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"var (status, routes) = await Radar.GetDistance(origins, destinations, RadarRouteMode.Car, RadarRouteUnits.Imperial);\n")),(0,i.kt)("h2",{id:"support"},"Support"),(0,i.kt)("p",null,"Have questions? We're here to help! Email us at ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@radar.com"},"support@radar.com"),"."))}u.isMDXComponent=!0}}]);