"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9977],{1063:function(t,e,a){a.r(e),a.d(e,{contentTitle:function(){return u},default:function(){return N},frontMatter:function(){return m},metadata:function(){return s},toc:function(){return k}});var n=a(7462),l=a(3366),r=a(7294),i=a(3905),o=a(1721),d=a(8621),p=function(t){function e(){return t.apply(this,arguments)||this}(0,o.Z)(e,t);var a=e.prototype;return a.componentDidMount=function(){d.Z.initialize("org_test_pk_7e1e22718af02cb9ed4a01233556999c2c02c947"),new d.Z.ui.autocomplete({container:"autocomplete",width:"600px"})},a.render=function(){return r.createElement("div",{id:"autocomplete",style:{marginBottom:"1.25rem"}})},e}(r.Component),m={title:"Autocomplete"},u=void 0,s={unversionedId:"maps/autocomplete",id:"maps/autocomplete",isDocsHomePage:!1,title:"Autocomplete",description:"Use Radar's autocomplete component to add address autocomplete to your websites and apps with just a few lines of code.",source:"@site/docs/maps/autocomplete.mdx",sourceDirName:"maps",slug:"/maps/autocomplete",permalink:"/documentation/maps/autocomplete",editUrl:"https://github.com/radarlabs/docs/edit/main/docs/maps/autocomplete.mdx",tags:[],version:"current",frontMatter:{title:"Autocomplete"},sidebar:"defaultSidebar",previous:{title:"Static Maps",permalink:"/documentation/maps/static-maps"},next:{title:"Overview",permalink:"/documentation/sdk"}},k=[{value:"How it works",id:"how-it-works",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Quickstart",id:"quickstart",children:[{value:"JavaScript",id:"javascript",children:[]},{value:"React Native",id:"react-native",children:[]}]}],c={toc:k};function N(t){var e=t.components,a=(0,l.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Use Radar's autocomplete component to add address autocomplete to your websites and apps with just a few lines of code."),(0,i.kt)(p,{mdxType:"AutocompleteInput"}),(0,i.kt)("p",null,"You can also check out the ",(0,i.kt)("a",{parentName:"p",href:"https://radar.com/dashboard/maps/maps-explorer/autocomplete"},"autocomplete explorer")," in the dashboard, or check out a full-page ",(0,i.kt)("a",{parentName:"p",href:"https://radar.com/demo/maps"},"maps demo")," and ",(0,i.kt)("a",{parentName:"p",href:"https://radar.com/demo/locator"},"store locator demo")," with an autocomplete component."),(0,i.kt)("h2",{id:"how-it-works"},"How it works"),(0,i.kt)("p",null,"To use the autocomplete component, simply initialize the Radar SDK with your publishable key and specify the container to render the input into."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"When creating the autocomplete component, you can provide options to customize the autocomplete behavior, as well as the size and style of the input."),(0,i.kt)("p",null,"Available options include:"),(0,i.kt)("div",{className:"full-width-table"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Possible values"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"SDK availability"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"container")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"autocomplete")),(0,i.kt)("td",{parentName:"tr",align:null},"string ","|"," HTMLElement"),(0,i.kt)("td",{parentName:"tr",align:null},"The container to render the autocomplete into. You can specify an ",(0,i.kt)("inlineCode",{parentName:"td"},"id")," of an HTML element or a DOM element. If an ",(0,i.kt)("inlineCode",{parentName:"td"},"<input>")," is provided as a container, the style of the input will not be modified."),(0,i.kt)("td",{parentName:"tr",align:null},"Web")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"width")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"400")),(0,i.kt)("td",{parentName:"tr",align:null},"number ","|"," string"),(0,i.kt)("td",{parentName:"tr",align:null},"The width of the input, a number (in pixels) or any valid CSS width."),(0,i.kt)("td",{parentName:"tr",align:null},"Web")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"maxHeight")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"null")),(0,i.kt)("td",{parentName:"tr",align:null},"number ","|"," string"),(0,i.kt)("td",{parentName:"tr",align:null},"The max height of the results list, a number (in pixels) or any valid CSS height."),(0,i.kt)("td",{parentName:"tr",align:null},"Web")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"near")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"null")),(0,i.kt)("td",{parentName:"tr",align:null},"string ","|"," Location"),(0,i.kt)("td",{parentName:"tr",align:null},"The location to search near, in the format ",(0,i.kt)("inlineCode",{parentName:"td"},'"latitude,longitude"')," or ",(0,i.kt)("inlineCode",{parentName:"td"},"{ latitude, longitude }"),". If not specified, the search will automatically be biased based on the client's ",(0,i.kt)("a",{parentName:"td",href:"/documentation/api#ip-geocode"},"IP geolocation"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"Web, React Native")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"debounceMS")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"200")),(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null},"The number of milliseconds to wait after typing is complete to refresh the results list."),(0,i.kt)("td",{parentName:"tr",align:null},"Web, React Native")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"minCharacters")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"3")),(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null},"The minimum number of characters that need to be typed before fetching results."),(0,i.kt)("td",{parentName:"tr",align:null},"Web, React Native")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"limit")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"8")),(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null},"The maximum number of results to show in the results list."),(0,i.kt)("td",{parentName:"tr",align:null},"Web, React Native")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"onSelection")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"null")),(0,i.kt)("td",{parentName:"tr",align:null},"function ",(0,i.kt)("inlineCode",{parentName:"td"},"(address) => {}")),(0,i.kt)("td",{parentName:"tr",align:null},"A function called when a result is selected from the results list."),(0,i.kt)("td",{parentName:"tr",align:null},"Web, React Native")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"onResults")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"null")),(0,i.kt)("td",{parentName:"tr",align:null},"function ",(0,i.kt)("inlineCode",{parentName:"td"},"(addresses) => {}")),(0,i.kt)("td",{parentName:"tr",align:null},"A function called when the results list is refreshed."),(0,i.kt)("td",{parentName:"tr",align:null},"Web, React Native")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"onError")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"null")),(0,i.kt)("td",{parentName:"tr",align:null},"function ",(0,i.kt)("inlineCode",{parentName:"td"},"(error) => {}")),(0,i.kt)("td",{parentName:"tr",align:null},"A function called if any errors occur."),(0,i.kt)("td",{parentName:"tr",align:null},"Web, React Native")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"placeholder")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Search address")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The placeholder string for the input."),(0,i.kt)("td",{parentName:"tr",align:null},"Web, React Native")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"responsive")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"A boolean that indicates whether the input should expand to fill the parent container. If ",(0,i.kt)("inlineCode",{parentName:"td"},"responsive = true")," and a ",(0,i.kt)("inlineCode",{parentName:"td"},"width")," is specified, ",(0,i.kt)("inlineCode",{parentName:"td"},"width")," will be treated as a ",(0,i.kt)("inlineCode",{parentName:"td"},"max-width"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"Web")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"disabled")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"A boolean that indicates whether the input should be disabled."),(0,i.kt)("td",{parentName:"tr",align:null},"Web, React Native")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"layers")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"null")),(0,i.kt)("td",{parentName:"tr",align:null},"array"),(0,i.kt)("td",{parentName:"tr",align:null},"Optional layer filters. An array including one or more of ",(0,i.kt)("inlineCode",{parentName:"td"},"place"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"address"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"intersection"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"street"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"neighborhood"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"postalCode"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"locality"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"county"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"state"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"country"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"coarse"),", and ",(0,i.kt)("inlineCode",{parentName:"td"},"fine"),". See the ",(0,i.kt)("a",{parentName:"td",href:"https://radar.com/documentation/api#autocomplete"},"autocomplete API documentation")," for more info."),(0,i.kt)("td",{parentName:"tr",align:null},"Web, React Native")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"countryCode")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"null")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"An optional 2-letter ",(0,i.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes"},"ISO 3166")," country code. If set, results will only be fetched from the specified country."),(0,i.kt)("td",{parentName:"tr",align:null},"Web, React Native")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"expandUnits")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"A boolean that indicates whether to include unit numbers in the results."),(0,i.kt)("td",{parentName:"tr",align:null},"Web")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"showMarkers")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"A boolean that indicates whether to show marker icons in the results list."),(0,i.kt)("td",{parentName:"tr",align:null},"Web, React Native")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"markerColor")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"#acbdc8")),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The CSS color of marker icons in the results list."),(0,i.kt)("td",{parentName:"tr",align:null},"Web")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"style")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"null")),(0,i.kt)("td",{parentName:"tr",align:null},"React Native style object"),(0,i.kt)("td",{parentName:"tr",align:null},"Styles for the element. See the ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/radarlabs/react-native-radar/blob/master/js/ui/autocomplete.jsx"},"code")," for more info."),(0,i.kt)("td",{parentName:"tr",align:null},"React Native"))))),(0,i.kt)("h2",{id:"quickstart"},"Quickstart"),(0,i.kt)("p",null,"First, ",(0,i.kt)("a",{parentName:"p",href:"https://radar.com/signup"},"sign up")," for Radar and get an API key."),(0,i.kt)("p",null,"Then, get started with the sample code below."),(0,i.kt)("h3",{id:"javascript"},"JavaScript"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8" />\n    <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />\n    <link href="https://js.radar.com/v4.1.6/radar.css" rel="stylesheet">\n    <script src="https://js.radar.com/v4.1.6/radar.min.js"><\/script>\n  </head>\n\n  <body>\n    <div id="autocomplete" />\n\n    <script type="text/javascript">\n      Radar.initialize(\'prj_live_pk_...\');\n\n      Radar.ui.autocomplete({\n        container: \'autocomplete\',\n        width: \'600px\',\n        onSelection: (address) => {\n          // do something with selected address\n        },\n      });\n    <\/script>\n  </body>\n</html>\n')),(0,i.kt)("h3",{id:"react-native"},"React Native"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { View } from 'react-native';\nimport { useState, useEffect } from 'react';\nimport Radar, { Autocomplete } from 'react-native-radar';\n\nRadar.initialize('prj_live_pk_...');\n\nexport const App = () => (\n  <View>\n    <Autocomplete options={\n      onSelection: (address) => {\n        // do something with selected address\n      },\n    } />\n  </View>\n);\n")))}N.isMDXComponent=!0}}]);