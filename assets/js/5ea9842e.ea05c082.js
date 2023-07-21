"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5338],{970:function(a,t,e){e.d(t,{Z:function(){return s}});var n=e(7294),r="alert_19nB",i="alertWarning_1tiz",l="alertInfo_1EfW",p="alertTip_1W6d",o="alertSuccess_7EZp",s=function(a){var t=a.children,e=a.alertType;return"warning"===e?n.createElement("div",{className:"alert "+r+" "+i,role:"alert"},t):"info"===e?n.createElement("div",{className:"alert "+r+" "+l,role:"alert"},t):"tip"===e?n.createElement("div",{className:"alert "+r+" "+p,role:"alert"},t):"success"===e?n.createElement("div",{className:"alert "+r+" "+o,role:"alert"},t):null}},817:function(a,t,e){e.r(t),e.d(t,{contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return m},metadata:function(){return u},toc:function(){return k}});var n=e(7462),r=e(3366),i=e(7294),l=e(3905),p=e(970),o=e(1721),s=e(8621),d=function(a){function t(){return a.apply(this,arguments)||this}(0,o.Z)(t,a);var e=t.prototype;return e.componentDidMount=function(){s.Z.initialize("org_test_pk_7e1e22718af02cb9ed4a01233556999c2c02c947");var a=new s.Z.ui.map({container:"map",center:[-73.9911,40.7342],zoom:14});s.Z.ui.marker({text:"Radar HQ"}).setLngLat([-73.9910078,40.7342465]).addTo(a)},e.render=function(){return i.createElement("div",{id:"map-container",style:{height:"20rem",margin:"1rem 0",position:"relative",width:"95%"}},i.createElement("div",{id:"map",style:{bottom:0,position:"absolute",top:0,width:"100%"}}))},t}(i.Component),m={title:"Maps"},c=void 0,u={unversionedId:"maps/maps",id:"maps/maps",isDocsHomePage:!1,title:"Maps",description:"Radar Maps is a cost-effective alternative to Google Maps Platform and Mapbox.",source:"@site/docs/maps/maps.mdx",sourceDirName:"maps",slug:"/maps/maps",permalink:"/documentation/maps/maps",editUrl:"https://github.com/radarlabs/docs/edit/main/docs/maps/maps.mdx",tags:[],version:"current",frontMatter:{title:"Maps"},sidebar:"defaultSidebar",previous:{title:"Routing APIs",permalink:"/documentation/maps/routing"},next:{title:"Autocomplete",permalink:"/documentation/maps/autocomplete"}},k=[{value:"How it works",id:"how-it-works",children:[]},{value:"Quickstart",id:"quickstart",children:[{value:"JavaScript",id:"javascript",children:[]},{value:"React",id:"react",children:[]},{value:"Vue",id:"vue",children:[]}]},{value:"Configuration",id:"configuration",children:[]},{value:"Coverage",id:"coverage",children:[]},{value:"Support",id:"support",children:[]}],h={toc:k};function g(a){var t=a.components,e=(0,r.Z)(a,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},h,e,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Radar Maps is a cost-effective alternative to Google Maps Platform and Mapbox."),(0,l.kt)("p",null,"For example, here's a Radar Map displaying a marker for Radar HQ:"),(0,l.kt)(d,{mdxType:"Map"}),(0,l.kt)("h2",{id:"how-it-works"},"How it works"),(0,l.kt)("p",null,"To use Radar Maps, simply initialize the Radar SDK with your publishable key, and specify the container to render the map into."),(0,l.kt)("p",null,"Radar Maps is an extension of the ",(0,l.kt)("a",{parentName:"p",href:"https://maplibre.org"},"Maplibre GL JS")," library. See their ",(0,l.kt)("a",{parentName:"p",href:"https://maplibre.org/maplibre-gl-js/docs/API/"},"docs")," for additional customization info."),(0,l.kt)("h2",{id:"quickstart"},"Quickstart"),(0,l.kt)("p",null,"First, ",(0,l.kt)("a",{parentName:"p",href:"https://radar.com/signup"},"sign up")," for Radar and get an API key."),(0,l.kt)("p",null,"Then, get started with the sample code below."),(0,l.kt)("p",null,"Happy mapping!"),(0,l.kt)("h3",{id:"javascript"},"JavaScript"),(0,l.kt)("p",null,"To create a simple web page with a map:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8" />\n    <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />\n    <link href="https://js.radar.com/v4.0.0/radar.css" rel="stylesheet">\n    <script src="https://js.radar.com/v4.0.0/radar.min.js"><\/script>\n  </head>\n\n  <body>\n    <div id="map" style="width: 100%; height: 500px;" />\n\n    <script type="text/javascript">\n      Radar.initialize(\'prj_live_pk_...\');\n\n      // create a new map\n      const map = Radar.ui.map({\n        container: \'map\',\n        center: [-73.9911, 40.7342], // NYC\n        zoom: 11\n      });\n\n      // create marker and add to map\n      const marker = Radar.ui.marker({ text: \'Radar HQ\' })\n        .setLngLat([-73.9910078, 40.7342465])\n        .addTo(map);\n    <\/script>\n  </body>\n</html>\n')),(0,l.kt)("h3",{id:"react"},"React"),(0,l.kt)("p",null,"To create a ",(0,l.kt)("a",{parentName:"p",href:"https://react.dev"},"React")," component with a map:"),(0,l.kt)(p.Z,{alertType:"info",mdxType:"Alert"},"The Radar SDK has a dependency on maplibre-gl for the map rendering."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save radar-sdk-js maplibre-gl\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Radar from 'radar-sdk-js';\n\nimport 'radar-sdk-js/dist/radar.css';\n\nclass RadarMap extends React.Component {\n  componentDidMount() {\n    Radar.initialize('prj_live_pk_...');\n\n    const map = new Radar.ui.map({\n      container: 'map',\n      center: [-73.9911, 40.7342], // NYC\n      zoom: 14,\n    });\n\n    Radar.ui.marker({ text: 'Radar HQ' })\n      .setLngLat([-73.9910078, 40.7342465])\n      .addTo(map);\n  }\n\n  render() {\n    return (\n      <div id=\"map-container\" style={{ height: '100%', position: 'absolute', width: '100%' }}>\n        <div id=\"map\" style={{ height: '100%', position: 'absolute', width: '100%' }} />\n      </div>\n    );\n  }\n};\n\nexport default RadarMap;\n")),(0,l.kt)("h3",{id:"vue"},"Vue"),(0,l.kt)("p",null,"To create a ",(0,l.kt)("a",{parentName:"p",href:"https://vuejs.org"},"Vue")," component with a map:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save radar-sdk-js maplibre-gl\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"<template>\n  <div id=\"map-container\">\n    <div id=\"map\" ref=\"mapRef\" />\n  </div>\n</template>\n\n<script>\nimport Radar from 'radar-sdk-js';\nimport { shallowRef, onMounted, onUnmounted, markRaw } from 'vue';\n\nexport default {\n  name: 'RadarMap',\n  setup () {\n    const mapRef = shallowRef(null);\n    const map = shallowRef(null);\n\n    onMounted(() => {\n      Radar.initialize('prj_live_pk_...');\n\n      map.value = markRaw(Radar.ui.map({\n        container: mapRef.value,\n        center: [-73.9911, 40.7342], // NYC\n        zoom: 11\n      }));\n\n      Radar.ui.Marker({ color: '#007aff' })\n        .setLngLat([-73.9911, 40.7342]) // Radar HQ\n        .addTo(map.value);\n    }),\n\n    onUnmounted(() => {\n      map.value?.remove();\n    })\n\n    return {\n      map, mapRef\n    };\n  }\n};\n<\/script>\n\n<style>\n@import 'radar-sdk-js/dist/radar.css';\n\nbody {\n  margin: 0;\n  padding: 0;\n}\n\n#map-container {\n  height: 100%;\n  position: absolute;\n  width: 100%;\n}\n\n#map {\n  height: 100%;\n  position: absolute;\n  width: 100%;\n}\n</style>\n")),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("p",null,"When creating a new Radar map, you can configure it with any of the ",(0,l.kt)("a",{parentName:"p",href:"https://maplibre.org/maplibre-gl-js/docs/API/types/maplibregl.MapOptions/"},"MapOptions")," available in MapLibre."),(0,l.kt)(p.Z,{alertType:"tip",mdxType:"Alert"},"The map will be automatically centered based on the user's IP Geolocation unless center and zoom properties are specified."),(0,l.kt)("h2",{id:"coverage"},"Coverage"),(0,l.kt)("p",null,"Radar map data comes from ",(0,l.kt)("a",{parentName:"p",href:"https://www.openstreetmap.org"},"OpenStreetMap"),"."),(0,l.kt)("p",null,"The following table describes data coverage for maps, by country, for consumer use cases (e.g., store locators) and logistics use cases (e.g., ride sharing, delivery)."),(0,l.kt)("h4",{id:"legend"},"Legend"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Icon"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u2b24"),(0,l.kt)("td",{parentName:"tr",align:null},"Great data quality and availability")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{style:{"font-size":"125%"}},"\u25d0")),(0,l.kt)("td",{parentName:"tr",align:null},"Good data quality and availability")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{style:{"font-size":"120%"}},"\u25ef")),(0,l.kt)("td",{parentName:"tr",align:null},"Approximate data quality and availability")))),(0,l.kt)("h4",{id:"coverage-1"},"Coverage"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\xa0"),(0,l.kt)("th",{parentName:"tr",align:null},"Maps"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\ud83c\uddfa\ud83c\uddf8 US (consumer)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2b24")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\ud83c\uddfa\ud83c\uddf8 US (logistics)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2b24")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\ud83c\udde8\ud83c\udde6 CA (consumer)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2b24")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\ud83c\udde8\ud83c\udde6 CA (logistics)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2b24")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\ud83c\uddec\ud83c\udde7 UK (consumer)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2b24")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\ud83c\uddec\ud83c\udde7 UK (logistics)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2b24")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\ud83c\udf0e Other (consumer)"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2b24")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\ud83c\udf0e Other (logistics)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{style:{"font-size":"125%"}},"\u25d0"))))),(0,l.kt)("h2",{id:"support"},"Support"),(0,l.kt)("p",null,"Have questions? We're here to help! Email us at ",(0,l.kt)("a",{parentName:"p",href:"mailto:support@radar.com"},"support@radar.com"),"."))}g.isMDXComponent=!0}}]);