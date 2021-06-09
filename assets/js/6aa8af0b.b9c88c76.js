(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1745],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4558:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i={sidebar_position:5,title:"Building a store locator on iOS"},l={unversionedId:"tutorials/building-a-store-locator-on-ios",id:"tutorials/building-a-store-locator-on-ios",isDocsHomePage:!1,title:"Building a store locator on iOS",description:"In this tutorial, we show you how to use the Radar iOS SDK, forward geocode API, and geofence search API to build a store locator with a map.",source:"@site/docs/tutorials/building-a-store-locator-on-ios.mdx",sourceDirName:"tutorials",slug:"/tutorials/building-a-store-locator-on-ios",permalink:"/documentation/tutorials/building-a-store-locator-on-ios",editUrl:"https://github.com/radarlabs/docs/edit/main/docs/tutorials/building-a-store-locator-on-ios.mdx",version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Building a store locator on iOS"},sidebar:"defaultSidebar",previous:{title:"Building a delivery tracker app with live location and ETAs",permalink:"/documentation/tutorials/building-a-delivery-tracker-with-live-location-and-etas"},next:{title:"Building an app experience that changes based on location (e.g., in-store mode)",permalink:"/documentation/tutorials/building-an-app-experience-that-changes-based-on-location-in-store-mode"}},s=[{value:"Languages used",id:"languages-used",children:[]},{value:"Features used",id:"features-used",children:[]},{value:"Steps",id:"steps",children:[{value:"Step 1: Sign up for Radar",id:"step-1-sign-up-for-radar",children:[]},{value:"Step 2: Import geofences",id:"step-2-import-geofences",children:[]},{value:"Step 3: Install the Radar iOS SDK",id:"step-3-install-the-radar-ios-sdk",children:[]},{value:"Step 4: Build the store locator UI",id:"step-4-build-the-store-locator-ui",children:[]},{value:"Step 5: Call the forward geocode API",id:"step-5-call-the-forward-geocode-api",children:[]},{value:"Step 6: Call the geofence search API",id:"step-6-call-the-geofence-search-api",children:[]}]},{value:"Sample code",id:"sample-code",children:[]},{value:"Support",id:"support",children:[]}],p={toc:s};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this tutorial, we show you how to use the Radar ",(0,o.kt)("a",{parentName:"p",href:"/sdk"},"iOS SDK"),", ",(0,o.kt)("a",{parentName:"p",href:"/api#forward-geocode"},"forward geocode API"),", and ",(0,o.kt)("a",{parentName:"p",href:"/api#search-geofences"},"geofence search API")," to build a store locator with a map."),(0,o.kt)("h2",{id:"languages-used"},"Languages used"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Swift")),(0,o.kt)("h2",{id:"features-used"},"Features used"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/sdk/ios"},"iOS SDK")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/api#autocomplete"},"Forward geocode API")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/api#autocomplete"},"Geofence search API"))),(0,o.kt)("h2",{id:"steps"},"Steps"),(0,o.kt)("h3",{id:"step-1-sign-up-for-radar"},"Step 1: Sign up for Radar"),(0,o.kt)("p",null,"If you haven't already, sign up for Radar to get your API key. You can create up to 1,000 geofences and make up to 100,000 API requests per month for free."),(0,o.kt)("a",{className:"btn btn-large btn-primary",href:"https://radar.io/signup"},"Get API Keys"),(0,o.kt)("h3",{id:"step-2-import-geofences"},"Step 2: Import geofences"),(0,o.kt)("p",null,"On the ",(0,o.kt)("a",{parentName:"p",href:"https://radar.io/dashboard"},"Geofences page"),", import geofences for each store."),(0,o.kt)("p",null,"The CSV should include 8 columns:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"description")),": A display name for the geofence. In this case, the store name."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"tag")),": A group for the geofence. In this case, ",(0,o.kt)("inlineCode",{parentName:"li"},"store"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"externalId")),": An external ID for the geofence that maps to your internal database. In this case, the store ID."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"type")),": The type of geofence geometry. In this case, ",(0,o.kt)("inlineCode",{parentName:"li"},"circle"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"radius")),": The radius in meters for type circle. In this case, ",(0,o.kt)("inlineCode",{parentName:"li"},"100"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"coordinates")),": A JSON string representing a center in the format ","[longitude,latitude]"," for type circle. Note that longitude comes before latitude, a GeoJSON convention."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"enabled")),": In this case, ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"metadata")),": A set of custom key-value pairs for the geofence. A JSON string representing a dictionary with up to 16 keys and values of type string, boolean, or number. In this case, ",(0,o.kt)("inlineCode",{parentName:"li"},'{"parking": true}')," or ",(0,o.kt)("inlineCode",{parentName:"li"},'{"parking": false}'),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csv"},'McRadar\'s #1,store,1,circle,100,"[-73.986752,40.703919]",true,"{""parking"":true}"\nMcRadar\'s #2,store,2,circle,100,"[-73.993156,40.700554]",true,"{""parking"":false}"\nMcRadar\'s #3,store,3,circle,100,"[-73.983295,40.697693]",true,"{""parking"":false}"\n')),(0,o.kt)("h3",{id:"step-3-install-the-radar-ios-sdk"},"Step 3: Install the Radar iOS SDK"),(0,o.kt)("p",null,"If you're starting from scratch, create a new Xcode project of type Single View App."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/sdk"},"Install the Radar SDK")," using CocoaPods or Carthage (recommended) or by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/radarlabs/radar-sdk-ios/releases"},"downloading the framework")," and dragging it into your project."),(0,o.kt)("p",null,"Initialize the SDK in your ",(0,o.kt)("inlineCode",{parentName:"p"},"AppDelegate")," class with your publishable API key."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'import UIKit\nimport RadarSDK\n\n@UIApplicationMain\nclass AppDelegate: UIResponder, UIApplicationDelegate {\n\n    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {\n        Radar.initialize(publishableKey: "prj_test_pk_...")\n\n        return true\n    }\n\n}\n')),(0,o.kt)("h3",{id:"step-4-build-the-store-locator-ui"},"Step 4: Build the store locator UI"),(0,o.kt)("p",null,"Import ",(0,o.kt)("inlineCode",{parentName:"p"},"MapKit")," and add a ",(0,o.kt)("inlineCode",{parentName:"p"},"UISearchBar")," (for the address input) and ",(0,o.kt)("inlineCode",{parentName:"p"},"MKMapView")," (for the map) to your ",(0,o.kt)("inlineCode",{parentName:"p"},"ViewController"),"."),(0,o.kt)("p",null,"Make your search bar a ",(0,o.kt)("inlineCode",{parentName:"p"},"UISearchBarDelegate"),". Connect the search bar and map to the ",(0,o.kt)("inlineCode",{parentName:"p"},"ViewController")," and set the ",(0,o.kt)("inlineCode",{parentName:"p"},"ViewController")," as the ",(0,o.kt)("inlineCode",{parentName:"p"},"delegate")," for the search bar."),(0,o.kt)("p",null,"Alternatively, we could display the results in a ",(0,o.kt)("inlineCode",{parentName:"p"},"UITableView"),"."),(0,o.kt)("h3",{id:"step-5-call-the-forward-geocode-api"},"Step 5: Call the forward geocode API"),(0,o.kt)("p",null,"Implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"searchBarSearchButtonClicked:")," method of the ",(0,o.kt)("inlineCode",{parentName:"p"},"UISearchBarDelegate")," to call the ",(0,o.kt)("a",{parentName:"p",href:"/api#forward-geocode"},"forward geocode API")," when a user enters an address into the search bar, then move the map to the coordinate of the address."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"func searchBarSearchButtonClicked(_ searchBar: UISearchBar) {\n  guard let text = searchBar.text else {\n      return\n  }\n\n  Radar.geocode(address: text) { (status, addresses) in\n      if let coordinate = addresses?.first?.coordinate {\n          DispatchQueue.main.async {\n              let region = MKCoordinateRegion(center: coordinate, latitudinalMeters: 10000, longitudinalMeters: 10000)\n              self.map?.setRegion(region, animated: true)\n          }\n      }\n  }\n}\n")),(0,o.kt)("p",null,"Alternatively, we could call the ",(0,o.kt)("a",{parentName:"p",href:"/api#autocomplete"},"autocomplete API")," to autocomplete partial addresses as the user types."),(0,o.kt)("h3",{id:"step-6-call-the-geofence-search-api"},"Step 6: Call the geofence search API"),(0,o.kt)("p",null,"Finally, pass the coordinate to the ",(0,o.kt)("a",{parentName:"p",href:"/api#search-geofences"},"geofence search API")," to retrieve stores, convert the stores to map annotations, and add the annotations to the map."),(0,o.kt)("p",null,"In this case, we pass ",(0,o.kt)("inlineCode",{parentName:"p"},"radius: 10000")," to retrieve stores within 10 kilometers, ",(0,o.kt)("inlineCode",{parentName:"p"},'tag: "store"')," to retrieve only geofences with tag store, and ",(0,o.kt)("inlineCode",{parentName:"p"},"limit: 10")," to retrieve up to 10 stores at a time. Optionally, we could pass ",(0,o.kt)("inlineCode",{parentName:"p"},'metadata: ["parking": true]')," to retrieve only stores with parking."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'let near = CLLocation(latitude: coordinate.latitude, longitude: coordinate.longitude)\n\nRadar.searchGeofences(near: near, radius: 1000, tags: ["store"], metadata: nil, limit: 10) { (status, location, geofences) in\n  guard status != .success, let geofences = geofences else {\n      return\n  }\n\n  let annotations = geofences.map { (geofence) -> MKAnnotation in\n      let annotation = MKPointAnnotation()\n      let geometry = geofence.geometry as! RadarCircleGeometry\n      annotation.coordinate = geometry.center.coordinate\n      annotation.title = geofence._description\n      return annotation\n  }\n\n  DispatchQueue.main.async {\n      self.map?.addAnnotations(annotations)\n  }\n}\n')),(0,o.kt)("p",null,"Alternatively, we could call the ",(0,o.kt)("a",{parentName:"p",href:"/api#search-places"},"place search API")," retrieve places from Radar's place database, rather than custom geofences."),(0,o.kt)("h2",{id:"sample-code"},"Sample code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'// AppDelegate.swift\n\nimport UIKit\nimport RadarSDK\n\n@UIApplicationMain\nclass AppDelegate: UIResponder, UIApplicationDelegate {\n\n    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {\n        Radar.initialize(publishableKey: "prj_test_pk_...")\n\n        return true\n    }\n\n}\n\n// ViewController.swift\n\nimport UIKit\nimport MapKit\nimport RadarSDK\n\nclass ViewController: UIViewController, UISearchBarDelegate {\n\n    @IBOutlet var searchBar: UISearchBar?\n    @IBOutlet var map: MKMapView?\n\n    override func viewDidLoad() {\n        super.viewDidLoad()\n    }\n\n    func searchBarSearchButtonClicked(_ searchBar: UISearchBar) {\n        guard let text = searchBar.text else {\n            return\n        }\n\n        Radar.geocode(address: text) { (status, addresses) in\n            if let coordinate = addresses?.first?.coordinate {\n                DispatchQueue.main.async {\n                    let region = MKCoordinateRegion(center: coordinate, latitudinalMeters: 1000, longitudinalMeters: 1000)\n                    self.map?.setRegion(region, animated: true)\n                }\n\n                let near = CLLocation(latitude: coordinate.latitude, longitude: coordinate.longitude)\n\n                Radar.searchGeofences(near: near, radius: 1000, tags: ["store"], metadata: nil, limit: 10) { (status, location, geofences) in\n                    guard status != .success, let geofences = geofences else {\n                        return\n                    }\n\n                    let annotations = geofences.map { (geofence) -> MKAnnotation in\n                        let annotation = MKPointAnnotation()\n                        let geometry = geofence.geometry as! RadarCircleGeometry\n                        annotation.coordinate = geometry.center.coordinate\n                        annotation.title = geofence._description\n                        return annotation\n                    }\n\n                    DispatchQueue.main.async {\n                        self.map?.addAnnotations(annotations)\n                    }\n                }\n            }\n        }\n    }\n\n}\n')),(0,o.kt)("h2",{id:"support"},"Support"),(0,o.kt)("p",null,"Have questions or feedback on this documentation? Let us know! Email us at ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@radar.io"},"support@radar.io"),"."))}c.isMDXComponent=!0}}]);