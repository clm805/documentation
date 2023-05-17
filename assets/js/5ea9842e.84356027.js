"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5338],{970:function(M,L,j){j.d(L,{Z:function(){return T}});var N=j(7294),u="alert_19nB",t="alertWarning_1tiz",a="alertInfo_1EfW",S="alertSuccess_7EZp",T=function(M){var L=M.children,j=M.alertType;return"warning"===j?N.createElement("div",{className:"alert "+u+" "+t,role:"alert"},L):"info"===j?N.createElement("div",{className:"alert "+u+" "+a,role:"alert"},L):"success"===j?N.createElement("div",{className:"alert "+u+" "+S,role:"alert"},L):null}},817:function(M,L,j){j.r(L),j.d(L,{contentTitle:function(){return e},default:function(){return n},frontMatter:function(){return I},metadata:function(){return D},toc:function(){return z}});var N=j(7462),u=j(3366),t=j(7294),a=j(3905),S=(j(970),j(1721)),T=j(4613),y=j.n(T),i=function(M){function L(){return M.apply(this,arguments)||this}(0,S.Z)(L,M);var j=L.prototype;return j.componentDidMount=function(){var M=new(y().Map)({container:"map",style:"https://api.radar.io/maps/styles/radar-default-v1?publishableKey=org_test_pk_7e1e22718af02cb9ed4a01233556999c2c02c947",center:[-73.9911,40.7342],zoom:11});M.addControl(new(y().NavigationControl)),new(y().Marker)({color:"#007aff"}).setLngLat([-73.9911,40.7342]).addTo(M)},j.render=function(){return t.createElement("div",{id:"map-container",style:{height:"20rem",margin:"1rem 0",position:"relative",width:"95%"}},t.createElement("div",{id:"map",style:{bottom:0,position:"absolute",top:0,width:"100%"}}),t.createElement("a",{id:"map-watermark",href:"https://radar.com",target:"_blank",style:{bottom:0,height:"38px",left:"10px",position:"absolute",width:"80px"}},t.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI1IiBoZWlnaHQ9IjM4IiB2aWV3Qm94PSIwIDAgMTI1IDM4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0zNy4xMDYgMzAuNjgxdjFoOC4xMTFWMjQuMjlsMy45MTIgNi44ODYuMjg4LjUwNmg4Ljc4OGwtLjg3LTEuNS00LjU3NC03Ljg5NGMuODMtLjQ1NCAxLjU3NS0xLjA1NCAyLjE2MS0xLjgzNi44MzItMS4xMSAxLjI5LTIuNTE1IDEuMjktNC4yMjV2LS4xMmMwLTIuNTA4LS44ODItNC41MjItMi42NTEtNS44NzUtMS43MjQtMS4zMTgtNC4xNTUtMS45MDQtNy4wNjctMS45MDRoLTkuMzg4VjMwLjY4Wm0yNS42NjYgMS4zNTljMS41MjYgMCAyLjcyLS4zNDcgMy42NDQtLjg4OHYuNTNoNy4yMTNWMjAuNTU2YzAtMi4zMTYtLjc4Mi00LjExNS0yLjMwMi01LjMwMi0xLjQ3NS0xLjE1Mi0zLjUtMS42MTItNS43NjgtMS42MTItMi4yNyAwLTQuMzExLjQ4OS01Ljg0MyAxLjU4My0xLjU2NyAxLjExOC0yLjUwNyAyLjgwNi0yLjY0NSA0Ljk2OWwtLjA2OCAxLjA2M2gyLjc1NGMtLjE5OS4wOS0uMzkuMTg5LS41NzQuMjkzLS44NDYuNDg0LTEuNTM3IDEuMTI3LTIuMDEyIDEuOTU0LS40NzQuODI3LS43MDEgMS43ODMtLjcwMSAyLjg0NiAwIDEuOTM3Ljc0MiAzLjQxMyAxLjk4IDQuMzc3IDEuMjAzLjkzNSAyLjc3IDEuMzEyIDQuMzIyIDEuMzEyWm0zLjAyNi0xMS43OTZjLS41ODIgMC0xLjE0OC4wMTctMS42OTIuMDU0LjA1LS4zMTYuMTUxLS41MTYuMjY4LS42MzUuMTA2LS4xMDkuMzI5LS4yNTcuODU1LS4yNTcuNjU3IDAgLjgwMi4xNzguODU1LjI1NC4wNzIuMTAzLjEzOS4yODEuMTc3LjU4NGgtLjQ2M1pNODUuMzgzIDMwLjgzdi44NWg3LjM2M1Y3LjE5MmgtNy4zNjN2Ny41MTNhNS41MiA1LjUyIDAgMCAwLS4zMjMtLjIwNGMtLjk2NS0uNTYzLTIuMTI3LS44NTctMy41LS44NTctMi4xMjUgMC00LjA3LjgxOS01LjQ3MiAyLjQyNi0xLjM5MyAxLjU5OC0yLjE3OSAzLjg5LTIuMTc5IDYuNzI4di4yMzljMCAyLjg4Mi43OTMgNS4xNDUgMi4xOTQgNi42OTggMS40MDcgMS41NjEgMy4zMzcgMi4zMDYgNS4zOTcgMi4zMDYgMS41MjcgMCAyLjg0OC0uNDYzIDMuODgzLTEuMjFabTEzLjkzIDEuMjA5YzEuNTI2IDAgMi43Mi0uMzQ3IDMuNjQ0LS44ODh2LjUzaDcuMjEyVjIwLjU1NmMwLTIuMzE2LS43ODItNC4xMTUtMi4zMDEtNS4zMDItMS40NzYtMS4xNTItMy41LTEuNjEyLTUuNzY5LTEuNjEyLTIuMjcgMC00LjMxLjQ4OS01Ljg0MiAxLjU4My0xLjU2NyAxLjExOC0yLjUwOCAyLjgwNi0yLjY0NSA0Ljk2OWwtLjA2OCAxLjA2M2gyLjc1M2MtLjE5OC4wOS0uMzkuMTg5LS41NzMuMjkzLS44NDYuNDg0LTEuNTM4IDEuMTI3LTIuMDEzIDEuOTU0LS40NzQuODI3LS43IDEuNzgzLS43IDIuODQ2IDAgMS45MzcuNzQyIDMuNDEzIDEuOTggNC4zNzcgMS4yMDIuOTM1IDIuNzY5IDEuMzEyIDQuMzIyIDEuMzEyWm0zLjAyNi0xMS43OTZjLS41ODMgMC0xLjE0OC4wMTctMS42OTIuMDU0LjA0OS0uMzE2LjE1MS0uNTE2LjI2Ny0uNjM1LjEwNy0uMTA5LjMyOS0uMjU3Ljg1Ni0uMjU3LjY1NyAwIC44MDIuMTc4Ljg1NS4yNTQuMDcyLjEwMy4xMzkuMjgxLjE3Ny41ODRoLS40NjNabTguODkgMTAuNDM4djFoNy4zNjJ2LTguNDA3YzAtLjk4LjMyOC0xLjUxNC44NTEtMS44NTMuNjA0LS4zOTIgMS42MjQtLjYyNSAzLjE4NS0uNTgybDEuMDI3LjAyOHYtNy4wMDRsLS45ODgtLjAxMmMtMS4zNTYtLjAxNy0yLjU4MS4yNi0zLjYyNS45MzMtLjE1Ni4xLS4zMDYuMjA5LS40NS4zMjR2LTEuMDQ4aC03LjM2MlYzMC42ODFaTTQ1LjIxNyAxOC4wNjN2LTMuMTM3aDEuMDA3Yy45MDggMCAxLjQwOS4xNjUgMS42NjkuMzYuMi4xNS4zODcuNDE2LjM4NyAxLjA2di4xMTljMCAuNjY1LS4xODguOTk1LS40MTMgMS4xODUtLjI1OC4yMTctLjc1NC40MTMtMS42NzMuNDEzaC0uOTc3Wm0xOS40MTMgOC4zNjNjLS40OTcgMC0uNy0uMTE0LS43NjMtLjE2Ni0uMDM1LS4wMjktLjA5NC0uMDg3LS4wOTQtLjI5NyAwLS4xOTkuMDM2LS4yODYuMDU1LS4zMTguMDE0LS4wMjUuMDQ1LS4wNy4xNTUtLjEyOC4yNzctLjE0NC44NC0uMjU3IDEuOTA1LS4yNTdoLjQwN2MtLjAxLjM0LS4xNTIuNTk2LS4zODguNzg3LS4yNjMuMjE0LS42OTQuMzc5LTEuMjc3LjM3OVptMTguNzU3LS40NzhjLS42NjUgMC0xLjExNC0uMjI3LTEuNDI0LS42Mi0uMzM2LS40MjYtLjYwMS0xLjE2OC0uNjAxLTIuMzUydi0uMjM5YzAtMS4yNTIuMjUyLTIuMDEyLjU4Mi0yLjQ0LjI5NC0uMzgxLjc0My0uNjIyIDEuNTAzLS42MjIuNzI4IDAgMS4xODYuMjQ0IDEuNDkzLjY0MS4zMzguNDM5LjU5MyAxLjE5Ni41OTMgMi4zOTF2LjIzOWMwIDEuMTk2LS4yNzIgMS45NC0uNjE5IDIuMzY3LS4zMjIuMzk2LS44LjYzNS0xLjUyNy42MzVabTE3Ljc4NC40NzhjLS40OTcgMC0uNy0uMTE0LS43NjQtLjE2Ni0uMDM0LS4wMjktLjA5NC0uMDg3LS4wOTQtLjI5NyAwLS4xOTkuMDM3LS4yODYuMDU1LS4zMTguMDE0LS4wMjUuMDQ2LS4wNy4xNTYtLjEyOC4yNzctLjE0NC44NC0uMjU3IDEuOTA1LS4yNTdoLjQwN2MtLjAxMS4zNC0uMTUyLjU5Ni0uMzg4Ljc4Ny0uMjY0LjIxNC0uNjk1LjM3OS0xLjI3Ny4zNzlaTTE2LjM2OCA1LjYyMmwtLjkyNi0yLjI2NS0uOTI1IDIuMjY1LTExLjQ0MyAyOC0uOTEgMi4yMjcgMi4yMi0uOTI2IDExLjA1OC00LjYxIDExLjA1OCA0LjYxIDIuMjIuOTI2LS45MS0yLjIyNy0xMS40NDItMjhaIiBmaWxsPSIjMDYxQTJCIiBmaWxsLW9wYWNpdHk9IjAuNTUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIj48L3BhdGg+PC9zdmc+",height:"38",width:"80"})))},L}(t.Component),I={title:"Maps"},e=void 0,D={unversionedId:"maps/maps",id:"maps/maps",isDocsHomePage:!1,title:"Maps",description:"Radar Maps is a cost-effective alternative to Google Maps Platform and Mapbox.",source:"@site/docs/maps/maps.mdx",sourceDirName:"maps",slug:"/maps/maps",permalink:"/documentation/maps/maps",editUrl:"https://github.com/radarlabs/docs/edit/main/docs/maps/maps.mdx",tags:[],version:"current",frontMatter:{title:"Maps"},sidebar:"defaultSidebar",previous:{title:"Routing APIs",permalink:"/documentation/maps/routing"},next:{title:"Overview",permalink:"/documentation/sdk"}},z=[{value:"How it works",id:"how-it-works",children:[]},{value:"Quickstart",id:"quickstart",children:[{value:"JavaScript",id:"javascript",children:[]},{value:"React",id:"react",children:[]},{value:"Vue",id:"vue",children:[]}]},{value:"Support",id:"support",children:[]}],g={toc:z};function n(M){var L=M.components,j=(0,u.Z)(M,["components"]);return(0,a.kt)("wrapper",(0,N.Z)({},g,j,{components:L,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Radar Maps is a cost-effective alternative to Google Maps Platform and Mapbox."),(0,a.kt)("p",null,"For example, here's a Radar Map displaying a marker for Radar HQ:"),(0,a.kt)(i,{mdxType:"Map"}),(0,a.kt)("h2",{id:"how-it-works"},"How it works"),(0,a.kt)("p",null,"Radar Maps works with any renderer capable of rendering Mapbox Vector Tiles. We recommend ",(0,a.kt)("a",{parentName:"p",href:"https://maplibre.org/projects/maplibre-gl-js/"},"MapLibre GL JS"),", originally forked Mapbox GL JS v1 and now sponsored by companies including Amazon Web Services and Meta."),(0,a.kt)("p",null,"To use Radar Maps, you simply use MapLibre with Radar's tile server and map style, passing your Radar ",(0,a.kt)("a",{parentName:"p",href:"/documentation/api#authentication"},"publishable key"),"."),(0,a.kt)("h2",{id:"quickstart"},"Quickstart"),(0,a.kt)("p",null,"First, ",(0,a.kt)("a",{parentName:"p",href:"https://radar.com/signup"},"sign up")," for Radar and get an API key."),(0,a.kt)("p",null,"Then, get started with the sample code below. Note that you must pass your Radar publishable API key to the style URL."),(0,a.kt)("p",null,"From there, you can add map markers, controls, and much, much more. See the ",(0,a.kt)("a",{parentName:"p",href:"https://maplibre.org/projects/maplibre-gl-js/"},"MapLibre GL JS docs"),"."),(0,a.kt)("p",null,"Happy mapping!"),(0,a.kt)("h3",{id:"javascript"},"JavaScript"),(0,a.kt)("p",null,"To create a simple web page with a map:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8" />\n    <title>Radar Map</title>\n    <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />\n    <script type="text/javascript" src="https://unpkg.com/maplibre-gl@2.4.0/dist/maplibre-gl.js"><\/script>\n    <link href="https://unpkg.com/maplibre-gl@2.4.0/dist/maplibre-gl.css" rel="stylesheet" />\n    <style type="text/css">\n      body {\n        margin: 0;\n        padding: 0;\n      }\n\n      #map-container {\n        height: 100%;\n        position: absolute;\n        width: 100%;\n      }\n\n      #map {\n        height: 100%;\n        position: absolute;\n        width: 100%;\n      }\n\n      /* required */\n      #map-watermark {\n        bottom: 0;\n        height: 38px;\n        left: 10px;\n        position: absolute;\n        width: 80px;\n        z-index: 999;\n      }\n    </style>\n  </head>\n  <body>\n    <div id="map-container">\n      <div id="map" />\n      <a id="map-watermark" href="https://radar.com" target="_blank">\n        <img alt="Radar" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI1IiBoZWlnaHQ9IjM4IiB2aWV3Qm94PSIwIDAgMTI1IDM4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0zNy4xMDYgMzAuNjgxdjFoOC4xMTFWMjQuMjlsMy45MTIgNi44ODYuMjg4LjUwNmg4Ljc4OGwtLjg3LTEuNS00LjU3NC03Ljg5NGMuODMtLjQ1NCAxLjU3NS0xLjA1NCAyLjE2MS0xLjgzNi44MzItMS4xMSAxLjI5LTIuNTE1IDEuMjktNC4yMjV2LS4xMmMwLTIuNTA4LS44ODItNC41MjItMi42NTEtNS44NzUtMS43MjQtMS4zMTgtNC4xNTUtMS45MDQtNy4wNjctMS45MDRoLTkuMzg4VjMwLjY4Wm0yNS42NjYgMS4zNTljMS41MjYgMCAyLjcyLS4zNDcgMy42NDQtLjg4OHYuNTNoNy4yMTNWMjAuNTU2YzAtMi4zMTYtLjc4Mi00LjExNS0yLjMwMi01LjMwMi0xLjQ3NS0xLjE1Mi0zLjUtMS42MTItNS43NjgtMS42MTItMi4yNyAwLTQuMzExLjQ4OS01Ljg0MyAxLjU4My0xLjU2NyAxLjExOC0yLjUwNyAyLjgwNi0yLjY0NSA0Ljk2OWwtLjA2OCAxLjA2M2gyLjc1NGMtLjE5OS4wOS0uMzkuMTg5LS41NzQuMjkzLS44NDYuNDg0LTEuNTM3IDEuMTI3LTIuMDEyIDEuOTU0LS40NzQuODI3LS43MDEgMS43ODMtLjcwMSAyLjg0NiAwIDEuOTM3Ljc0MiAzLjQxMyAxLjk4IDQuMzc3IDEuMjAzLjkzNSAyLjc3IDEuMzEyIDQuMzIyIDEuMzEyWm0zLjAyNi0xMS43OTZjLS41ODIgMC0xLjE0OC4wMTctMS42OTIuMDU0LjA1LS4zMTYuMTUxLS41MTYuMjY4LS42MzUuMTA2LS4xMDkuMzI5LS4yNTcuODU1LS4yNTcuNjU3IDAgLjgwMi4xNzguODU1LjI1NC4wNzIuMTAzLjEzOS4yODEuMTc3LjU4NGgtLjQ2M1pNODUuMzgzIDMwLjgzdi44NWg3LjM2M1Y3LjE5MmgtNy4zNjN2Ny41MTNhNS41MiA1LjUyIDAgMCAwLS4zMjMtLjIwNGMtLjk2NS0uNTYzLTIuMTI3LS44NTctMy41LS44NTctMi4xMjUgMC00LjA3LjgxOS01LjQ3MiAyLjQyNi0xLjM5MyAxLjU5OC0yLjE3OSAzLjg5LTIuMTc5IDYuNzI4di4yMzljMCAyLjg4Mi43OTMgNS4xNDUgMi4xOTQgNi42OTggMS40MDcgMS41NjEgMy4zMzcgMi4zMDYgNS4zOTcgMi4zMDYgMS41MjcgMCAyLjg0OC0uNDYzIDMuODgzLTEuMjFabTEzLjkzIDEuMjA5YzEuNTI2IDAgMi43Mi0uMzQ3IDMuNjQ0LS44ODh2LjUzaDcuMjEyVjIwLjU1NmMwLTIuMzE2LS43ODItNC4xMTUtMi4zMDEtNS4zMDItMS40NzYtMS4xNTItMy41LTEuNjEyLTUuNzY5LTEuNjEyLTIuMjcgMC00LjMxLjQ4OS01Ljg0MiAxLjU4My0xLjU2NyAxLjExOC0yLjUwOCAyLjgwNi0yLjY0NSA0Ljk2OWwtLjA2OCAxLjA2M2gyLjc1M2MtLjE5OC4wOS0uMzkuMTg5LS41NzMuMjkzLS44NDYuNDg0LTEuNTM4IDEuMTI3LTIuMDEzIDEuOTU0LS40NzQuODI3LS43IDEuNzgzLS43IDIuODQ2IDAgMS45MzcuNzQyIDMuNDEzIDEuOTggNC4zNzcgMS4yMDIuOTM1IDIuNzY5IDEuMzEyIDQuMzIyIDEuMzEyWm0zLjAyNi0xMS43OTZjLS41ODMgMC0xLjE0OC4wMTctMS42OTIuMDU0LjA0OS0uMzE2LjE1MS0uNTE2LjI2Ny0uNjM1LjEwNy0uMTA5LjMyOS0uMjU3Ljg1Ni0uMjU3LjY1NyAwIC44MDIuMTc4Ljg1NS4yNTQuMDcyLjEwMy4xMzkuMjgxLjE3Ny41ODRoLS40NjNabTguODkgMTAuNDM4djFoNy4zNjJ2LTguNDA3YzAtLjk4LjMyOC0xLjUxNC44NTEtMS44NTMuNjA0LS4zOTIgMS42MjQtLjYyNSAzLjE4NS0uNTgybDEuMDI3LjAyOHYtNy4wMDRsLS45ODgtLjAxMmMtMS4zNTYtLjAxNy0yLjU4MS4yNi0zLjYyNS45MzMtLjE1Ni4xLS4zMDYuMjA5LS40NS4zMjR2LTEuMDQ4aC03LjM2MlYzMC42ODFaTTQ1LjIxNyAxOC4wNjN2LTMuMTM3aDEuMDA3Yy45MDggMCAxLjQwOS4xNjUgMS42NjkuMzYuMi4xNS4zODcuNDE2LjM4NyAxLjA2di4xMTljMCAuNjY1LS4xODguOTk1LS40MTMgMS4xODUtLjI1OC4yMTctLjc1NC40MTMtMS42NzMuNDEzaC0uOTc3Wm0xOS40MTMgOC4zNjNjLS40OTcgMC0uNy0uMTE0LS43NjMtLjE2Ni0uMDM1LS4wMjktLjA5NC0uMDg3LS4wOTQtLjI5NyAwLS4xOTkuMDM2LS4yODYuMDU1LS4zMTguMDE0LS4wMjUuMDQ1LS4wNy4xNTUtLjEyOC4yNzctLjE0NC44NC0uMjU3IDEuOTA1LS4yNTdoLjQwN2MtLjAxLjM0LS4xNTIuNTk2LS4zODguNzg3LS4yNjMuMjE0LS42OTQuMzc5LTEuMjc3LjM3OVptMTguNzU3LS40NzhjLS42NjUgMC0xLjExNC0uMjI3LTEuNDI0LS42Mi0uMzM2LS40MjYtLjYwMS0xLjE2OC0uNjAxLTIuMzUydi0uMjM5YzAtMS4yNTIuMjUyLTIuMDEyLjU4Mi0yLjQ0LjI5NC0uMzgxLjc0My0uNjIyIDEuNTAzLS42MjIuNzI4IDAgMS4xODYuMjQ0IDEuNDkzLjY0MS4zMzguNDM5LjU5MyAxLjE5Ni41OTMgMi4zOTF2LjIzOWMwIDEuMTk2LS4yNzIgMS45NC0uNjE5IDIuMzY3LS4zMjIuMzk2LS44LjYzNS0xLjUyNy42MzVabTE3Ljc4NC40NzhjLS40OTcgMC0uNy0uMTE0LS43NjQtLjE2Ni0uMDM0LS4wMjktLjA5NC0uMDg3LS4wOTQtLjI5NyAwLS4xOTkuMDM3LS4yODYuMDU1LS4zMTguMDE0LS4wMjUuMDQ2LS4wNy4xNTYtLjEyOC4yNzctLjE0NC44NC0uMjU3IDEuOTA1LS4yNTdoLjQwN2MtLjAxMS4zNC0uMTUyLjU5Ni0uMzg4Ljc4Ny0uMjY0LjIxNC0uNjk1LjM3OS0xLjI3Ny4zNzlaTTE2LjM2OCA1LjYyMmwtLjkyNi0yLjI2NS0uOTI1IDIuMjY1LTExLjQ0MyAyOC0uOTEgMi4yMjcgMi4yMi0uOTI2IDExLjA1OC00LjYxIDExLjA1OCA0LjYxIDIuMjIuOTI2LS45MS0yLjIyNy0xMS40NDItMjhaIiBmaWxsPSIjMDYxQTJCIiBmaWxsLW9wYWNpdHk9IjAuNTUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIj48L3BhdGg+PC9zdmc+" height="38" width="80" />\n      </a>\n    </div>\n    <script type="text/javascript">\n      var map = new maplibregl.Map({\n        container: \'map\',\n        style: \'https://api.radar.io/maps/styles/radar-default-v1?publishableKey=\' + PUBLISHABLE_KEY,\n        center: [-73.9911, 40.7342], // NYC\n        zoom: 11\n      });\n\n      map.addControl(new maplibregl.NavigationControl());\n\n      new maplibregl.Marker({ color: \'#007aff\' }).setLngLat([-73.9911, 40.7342]).addTo(map); // Radar HQ\n    <\/script>\n  </body>\n</html>\n')),(0,a.kt)("h3",{id:"react"},"React"),(0,a.kt)("p",null,"To create a ",(0,a.kt)("a",{parentName:"p",href:"https://react.dev"},"React")," component with a map:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save maplibre-gl\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport maplibregl from 'maplibre-gl';\n\nclass RadarMap extends React.Component {\n  componentDidMount() {\n    const map = new maplibregl.Map({\n      container: 'map',\n      style: `https://api.radar.io/maps/styles/radar-default-v1?publishableKey=${PUBLISHABLE_KEY}`,\n      center: [-73.9911, 40.7342], // NYC\n      zoom: 11\n    });\n\n    map.addControl(new maplibregl.NavigationControl());\n\n    new maplibregl.Marker({ color: '#007aff' }).setLngLat([-73.9911, 40.7342]).addTo(map); // Radar HQ\n  }\n\n  render() {\n    return (\n      <div id=\"map-container\" style={{ height: '100%', position: 'absolute', width: '100%' }}>\n        <div id=\"map\" style={{ height: '100%', position: 'absolute', width: '100%' }} />\n        <a id=\"map-watermark\" href=\"https://radar.com\" target=\"_blank\" style={{ bottom: 0, height: '38px', left: '10px', position: 'absolute', width: '80px' }}>\n          <img alt=\"Radar\" src=\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI1IiBoZWlnaHQ9IjM4IiB2aWV3Qm94PSIwIDAgMTI1IDM4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0zNy4xMDYgMzAuNjgxdjFoOC4xMTFWMjQuMjlsMy45MTIgNi44ODYuMjg4LjUwNmg4Ljc4OGwtLjg3LTEuNS00LjU3NC03Ljg5NGMuODMtLjQ1NCAxLjU3NS0xLjA1NCAyLjE2MS0xLjgzNi44MzItMS4xMSAxLjI5LTIuNTE1IDEuMjktNC4yMjV2LS4xMmMwLTIuNTA4LS44ODItNC41MjItMi42NTEtNS44NzUtMS43MjQtMS4zMTgtNC4xNTUtMS45MDQtNy4wNjctMS45MDRoLTkuMzg4VjMwLjY4Wm0yNS42NjYgMS4zNTljMS41MjYgMCAyLjcyLS4zNDcgMy42NDQtLjg4OHYuNTNoNy4yMTNWMjAuNTU2YzAtMi4zMTYtLjc4Mi00LjExNS0yLjMwMi01LjMwMi0xLjQ3NS0xLjE1Mi0zLjUtMS42MTItNS43NjgtMS42MTItMi4yNyAwLTQuMzExLjQ4OS01Ljg0MyAxLjU4My0xLjU2NyAxLjExOC0yLjUwNyAyLjgwNi0yLjY0NSA0Ljk2OWwtLjA2OCAxLjA2M2gyLjc1NGMtLjE5OS4wOS0uMzkuMTg5LS41NzQuMjkzLS44NDYuNDg0LTEuNTM3IDEuMTI3LTIuMDEyIDEuOTU0LS40NzQuODI3LS43MDEgMS43ODMtLjcwMSAyLjg0NiAwIDEuOTM3Ljc0MiAzLjQxMyAxLjk4IDQuMzc3IDEuMjAzLjkzNSAyLjc3IDEuMzEyIDQuMzIyIDEuMzEyWm0zLjAyNi0xMS43OTZjLS41ODIgMC0xLjE0OC4wMTctMS42OTIuMDU0LjA1LS4zMTYuMTUxLS41MTYuMjY4LS42MzUuMTA2LS4xMDkuMzI5LS4yNTcuODU1LS4yNTcuNjU3IDAgLjgwMi4xNzguODU1LjI1NC4wNzIuMTAzLjEzOS4yODEuMTc3LjU4NGgtLjQ2M1pNODUuMzgzIDMwLjgzdi44NWg3LjM2M1Y3LjE5MmgtNy4zNjN2Ny41MTNhNS41MiA1LjUyIDAgMCAwLS4zMjMtLjIwNGMtLjk2NS0uNTYzLTIuMTI3LS44NTctMy41LS44NTctMi4xMjUgMC00LjA3LjgxOS01LjQ3MiAyLjQyNi0xLjM5MyAxLjU5OC0yLjE3OSAzLjg5LTIuMTc5IDYuNzI4di4yMzljMCAyLjg4Mi43OTMgNS4xNDUgMi4xOTQgNi42OTggMS40MDcgMS41NjEgMy4zMzcgMi4zMDYgNS4zOTcgMi4zMDYgMS41MjcgMCAyLjg0OC0uNDYzIDMuODgzLTEuMjFabTEzLjkzIDEuMjA5YzEuNTI2IDAgMi43Mi0uMzQ3IDMuNjQ0LS44ODh2LjUzaDcuMjEyVjIwLjU1NmMwLTIuMzE2LS43ODItNC4xMTUtMi4zMDEtNS4zMDItMS40NzYtMS4xNTItMy41LTEuNjEyLTUuNzY5LTEuNjEyLTIuMjcgMC00LjMxLjQ4OS01Ljg0MiAxLjU4My0xLjU2NyAxLjExOC0yLjUwOCAyLjgwNi0yLjY0NSA0Ljk2OWwtLjA2OCAxLjA2M2gyLjc1M2MtLjE5OC4wOS0uMzkuMTg5LS41NzMuMjkzLS44NDYuNDg0LTEuNTM4IDEuMTI3LTIuMDEzIDEuOTU0LS40NzQuODI3LS43IDEuNzgzLS43IDIuODQ2IDAgMS45MzcuNzQyIDMuNDEzIDEuOTggNC4zNzcgMS4yMDIuOTM1IDIuNzY5IDEuMzEyIDQuMzIyIDEuMzEyWm0zLjAyNi0xMS43OTZjLS41ODMgMC0xLjE0OC4wMTctMS42OTIuMDU0LjA0OS0uMzE2LjE1MS0uNTE2LjI2Ny0uNjM1LjEwNy0uMTA5LjMyOS0uMjU3Ljg1Ni0uMjU3LjY1NyAwIC44MDIuMTc4Ljg1NS4yNTQuMDcyLjEwMy4xMzkuMjgxLjE3Ny41ODRoLS40NjNabTguODkgMTAuNDM4djFoNy4zNjJ2LTguNDA3YzAtLjk4LjMyOC0xLjUxNC44NTEtMS44NTMuNjA0LS4zOTIgMS42MjQtLjYyNSAzLjE4NS0uNTgybDEuMDI3LjAyOHYtNy4wMDRsLS45ODgtLjAxMmMtMS4zNTYtLjAxNy0yLjU4MS4yNi0zLjYyNS45MzMtLjE1Ni4xLS4zMDYuMjA5LS40NS4zMjR2LTEuMDQ4aC03LjM2MlYzMC42ODFaTTQ1LjIxNyAxOC4wNjN2LTMuMTM3aDEuMDA3Yy45MDggMCAxLjQwOS4xNjUgMS42NjkuMzYuMi4xNS4zODcuNDE2LjM4NyAxLjA2di4xMTljMCAuNjY1LS4xODguOTk1LS40MTMgMS4xODUtLjI1OC4yMTctLjc1NC40MTMtMS42NzMuNDEzaC0uOTc3Wm0xOS40MTMgOC4zNjNjLS40OTcgMC0uNy0uMTE0LS43NjMtLjE2Ni0uMDM1LS4wMjktLjA5NC0uMDg3LS4wOTQtLjI5NyAwLS4xOTkuMDM2LS4yODYuMDU1LS4zMTguMDE0LS4wMjUuMDQ1LS4wNy4xNTUtLjEyOC4yNzctLjE0NC44NC0uMjU3IDEuOTA1LS4yNTdoLjQwN2MtLjAxLjM0LS4xNTIuNTk2LS4zODguNzg3LS4yNjMuMjE0LS42OTQuMzc5LTEuMjc3LjM3OVptMTguNzU3LS40NzhjLS42NjUgMC0xLjExNC0uMjI3LTEuNDI0LS42Mi0uMzM2LS40MjYtLjYwMS0xLjE2OC0uNjAxLTIuMzUydi0uMjM5YzAtMS4yNTIuMjUyLTIuMDEyLjU4Mi0yLjQ0LjI5NC0uMzgxLjc0My0uNjIyIDEuNTAzLS42MjIuNzI4IDAgMS4xODYuMjQ0IDEuNDkzLjY0MS4zMzguNDM5LjU5MyAxLjE5Ni41OTMgMi4zOTF2LjIzOWMwIDEuMTk2LS4yNzIgMS45NC0uNjE5IDIuMzY3LS4zMjIuMzk2LS44LjYzNS0xLjUyNy42MzVabTE3Ljc4NC40NzhjLS40OTcgMC0uNy0uMTE0LS43NjQtLjE2Ni0uMDM0LS4wMjktLjA5NC0uMDg3LS4wOTQtLjI5NyAwLS4xOTkuMDM3LS4yODYuMDU1LS4zMTguMDE0LS4wMjUuMDQ2LS4wNy4xNTYtLjEyOC4yNzctLjE0NC44NC0uMjU3IDEuOTA1LS4yNTdoLjQwN2MtLjAxMS4zNC0uMTUyLjU5Ni0uMzg4Ljc4Ny0uMjY0LjIxNC0uNjk1LjM3OS0xLjI3Ny4zNzlaTTE2LjM2OCA1LjYyMmwtLjkyNi0yLjI2NS0uOTI1IDIuMjY1LTExLjQ0MyAyOC0uOTEgMi4yMjcgMi4yMi0uOTI2IDExLjA1OC00LjYxIDExLjA1OCA0LjYxIDIuMjIuOTI2LS45MS0yLjIyNy0xMS40NDItMjhaIiBmaWxsPSIjMDYxQTJCIiBmaWxsLW9wYWNpdHk9IjAuNTUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIj48L3BhdGg+PC9zdmc+\" height=\"38\" width=\"80\" />\n        </a>\n      </div>\n    );\n  }\n};\n\nexport default RadarMap;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sass"},"@import '~maplibre-gl/dist/maplibre-gl.css';\n")),(0,a.kt)("h3",{id:"vue"},"Vue"),(0,a.kt)("p",null,"To create a ",(0,a.kt)("a",{parentName:"p",href:"https://vuejs.org"},"Vue")," component with a map:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save maplibre-gl\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'<template>\n  <div id="map-container">\n    <div id="map" ref="mapRef" />\n    <a id="map-watermark" href="https://radar.com" target="_blank">\n      <img alt="Radar" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI1IiBoZWlnaHQ9IjM4IiB2aWV3Qm94PSIwIDAgMTI1IDM4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0zNy4xMDYgMzAuNjgxdjFoOC4xMTFWMjQuMjlsMy45MTIgNi44ODYuMjg4LjUwNmg4Ljc4OGwtLjg3LTEuNS00LjU3NC03Ljg5NGMuODMtLjQ1NCAxLjU3NS0xLjA1NCAyLjE2MS0xLjgzNi44MzItMS4xMSAxLjI5LTIuNTE1IDEuMjktNC4yMjV2LS4xMmMwLTIuNTA4LS44ODItNC41MjItMi42NTEtNS44NzUtMS43MjQtMS4zMTgtNC4xNTUtMS45MDQtNy4wNjctMS45MDRoLTkuMzg4VjMwLjY4Wm0yNS42NjYgMS4zNTljMS41MjYgMCAyLjcyLS4zNDcgMy42NDQtLjg4OHYuNTNoNy4yMTNWMjAuNTU2YzAtMi4zMTYtLjc4Mi00LjExNS0yLjMwMi01LjMwMi0xLjQ3NS0xLjE1Mi0zLjUtMS42MTItNS43NjgtMS42MTItMi4yNyAwLTQuMzExLjQ4OS01Ljg0MyAxLjU4My0xLjU2NyAxLjExOC0yLjUwNyAyLjgwNi0yLjY0NSA0Ljk2OWwtLjA2OCAxLjA2M2gyLjc1NGMtLjE5OS4wOS0uMzkuMTg5LS41NzQuMjkzLS44NDYuNDg0LTEuNTM3IDEuMTI3LTIuMDEyIDEuOTU0LS40NzQuODI3LS43MDEgMS43ODMtLjcwMSAyLjg0NiAwIDEuOTM3Ljc0MiAzLjQxMyAxLjk4IDQuMzc3IDEuMjAzLjkzNSAyLjc3IDEuMzEyIDQuMzIyIDEuMzEyWm0zLjAyNi0xMS43OTZjLS41ODIgMC0xLjE0OC4wMTctMS42OTIuMDU0LjA1LS4zMTYuMTUxLS41MTYuMjY4LS42MzUuMTA2LS4xMDkuMzI5LS4yNTcuODU1LS4yNTcuNjU3IDAgLjgwMi4xNzguODU1LjI1NC4wNzIuMTAzLjEzOS4yODEuMTc3LjU4NGgtLjQ2M1pNODUuMzgzIDMwLjgzdi44NWg3LjM2M1Y3LjE5MmgtNy4zNjN2Ny41MTNhNS41MiA1LjUyIDAgMCAwLS4zMjMtLjIwNGMtLjk2NS0uNTYzLTIuMTI3LS44NTctMy41LS44NTctMi4xMjUgMC00LjA3LjgxOS01LjQ3MiAyLjQyNi0xLjM5MyAxLjU5OC0yLjE3OSAzLjg5LTIuMTc5IDYuNzI4di4yMzljMCAyLjg4Mi43OTMgNS4xNDUgMi4xOTQgNi42OTggMS40MDcgMS41NjEgMy4zMzcgMi4zMDYgNS4zOTcgMi4zMDYgMS41MjcgMCAyLjg0OC0uNDYzIDMuODgzLTEuMjFabTEzLjkzIDEuMjA5YzEuNTI2IDAgMi43Mi0uMzQ3IDMuNjQ0LS44ODh2LjUzaDcuMjEyVjIwLjU1NmMwLTIuMzE2LS43ODItNC4xMTUtMi4zMDEtNS4zMDItMS40NzYtMS4xNTItMy41LTEuNjEyLTUuNzY5LTEuNjEyLTIuMjcgMC00LjMxLjQ4OS01Ljg0MiAxLjU4My0xLjU2NyAxLjExOC0yLjUwOCAyLjgwNi0yLjY0NSA0Ljk2OWwtLjA2OCAxLjA2M2gyLjc1M2MtLjE5OC4wOS0uMzkuMTg5LS41NzMuMjkzLS44NDYuNDg0LTEuNTM4IDEuMTI3LTIuMDEzIDEuOTU0LS40NzQuODI3LS43IDEuNzgzLS43IDIuODQ2IDAgMS45MzcuNzQyIDMuNDEzIDEuOTggNC4zNzcgMS4yMDIuOTM1IDIuNzY5IDEuMzEyIDQuMzIyIDEuMzEyWm0zLjAyNi0xMS43OTZjLS41ODMgMC0xLjE0OC4wMTctMS42OTIuMDU0LjA0OS0uMzE2LjE1MS0uNTE2LjI2Ny0uNjM1LjEwNy0uMTA5LjMyOS0uMjU3Ljg1Ni0uMjU3LjY1NyAwIC44MDIuMTc4Ljg1NS4yNTQuMDcyLjEwMy4xMzkuMjgxLjE3Ny41ODRoLS40NjNabTguODkgMTAuNDM4djFoNy4zNjJ2LTguNDA3YzAtLjk4LjMyOC0xLjUxNC44NTEtMS44NTMuNjA0LS4zOTIgMS42MjQtLjYyNSAzLjE4NS0uNTgybDEuMDI3LjAyOHYtNy4wMDRsLS45ODgtLjAxMmMtMS4zNTYtLjAxNy0yLjU4MS4yNi0zLjYyNS45MzMtLjE1Ni4xLS4zMDYuMjA5LS40NS4zMjR2LTEuMDQ4aC03LjM2MlYzMC42ODFaTTQ1LjIxNyAxOC4wNjN2LTMuMTM3aDEuMDA3Yy45MDggMCAxLjQwOS4xNjUgMS42NjkuMzYuMi4xNS4zODcuNDE2LjM4NyAxLjA2di4xMTljMCAuNjY1LS4xODguOTk1LS40MTMgMS4xODUtLjI1OC4yMTctLjc1NC40MTMtMS42NzMuNDEzaC0uOTc3Wm0xOS40MTMgOC4zNjNjLS40OTcgMC0uNy0uMTE0LS43NjMtLjE2Ni0uMDM1LS4wMjktLjA5NC0uMDg3LS4wOTQtLjI5NyAwLS4xOTkuMDM2LS4yODYuMDU1LS4zMTguMDE0LS4wMjUuMDQ1LS4wNy4xNTUtLjEyOC4yNzctLjE0NC44NC0uMjU3IDEuOTA1LS4yNTdoLjQwN2MtLjAxLjM0LS4xNTIuNTk2LS4zODguNzg3LS4yNjMuMjE0LS42OTQuMzc5LTEuMjc3LjM3OVptMTguNzU3LS40NzhjLS42NjUgMC0xLjExNC0uMjI3LTEuNDI0LS42Mi0uMzM2LS40MjYtLjYwMS0xLjE2OC0uNjAxLTIuMzUydi0uMjM5YzAtMS4yNTIuMjUyLTIuMDEyLjU4Mi0yLjQ0LjI5NC0uMzgxLjc0My0uNjIyIDEuNTAzLS42MjIuNzI4IDAgMS4xODYuMjQ0IDEuNDkzLjY0MS4zMzguNDM5LjU5MyAxLjE5Ni41OTMgMi4zOTF2LjIzOWMwIDEuMTk2LS4yNzIgMS45NC0uNjE5IDIuMzY3LS4zMjIuMzk2LS44LjYzNS0xLjUyNy42MzVabTE3Ljc4NC40NzhjLS40OTcgMC0uNy0uMTE0LS43NjQtLjE2Ni0uMDM0LS4wMjktLjA5NC0uMDg3LS4wOTQtLjI5NyAwLS4xOTkuMDM3LS4yODYuMDU1LS4zMTguMDE0LS4wMjUuMDQ2LS4wNy4xNTYtLjEyOC4yNzctLjE0NC44NC0uMjU3IDEuOTA1LS4yNTdoLjQwN2MtLjAxMS4zNC0uMTUyLjU5Ni0uMzg4Ljc4Ny0uMjY0LjIxNC0uNjk1LjM3OS0xLjI3Ny4zNzlaTTE2LjM2OCA1LjYyMmwtLjkyNi0yLjI2NS0uOTI1IDIuMjY1LTExLjQ0MyAyOC0uOTEgMi4yMjcgMi4yMi0uOTI2IDExLjA1OC00LjYxIDExLjA1OCA0LjYxIDIuMjIuOTI2LS45MS0yLjIyNy0xMS40NDItMjhaIiBmaWxsPSIjMDYxQTJCIiBmaWxsLW9wYWNpdHk9IjAuNTUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIj48L3BhdGg+PC9zdmc+" height="38" width="80" />\n    </a>\n  </div>\n</template>\n\n<script>\nimport maplibregl from \'maplibre-gl\';\nimport { shallowRef, onMounted, onUnmounted, markRaw } from \'vue\';\n\nexport default {\n  name: \'RadarMap\',\n  setup () {\n    const mapRef = shallowRef(null);\n    const map = shallowRef(null);\n\n    onMounted(() => {\n      map.value = markRaw(new maplibregl.Map({\n        container: mapRef.value,\n        style: `https://api.radar.io/maps/styles/radar-default-v1?publishableKey=${PUBLISHABLE_KEY}`,\n        center: [-73.9911, 40.7342], // NYC\n        zoom: 11\n      }));\n\n      map.value?.addControl(new maplibregl.NavigationControl());\n\n      new maplibregl.Marker({ color: \'#007aff\' }).setLngLat([-73.9911, 40.7342]).addTo(map.value); // Radar HQ\n    }),\n    onUnmounted(() => {\n      map.value?.remove();\n    })\n\n    return {\n      map, mapRef\n    };\n  }\n};\n<\/script>\n\n<style>\n@import \'~maplibre-gl/dist/maplibre-gl.css\';\n\nbody {\n  margin: 0;\n  padding: 0;\n}\n\n#map-container {\n  height: 100%;\n  position: absolute;\n  width: 100%;\n}\n\n#map {\n  height: 100%;\n  position: absolute;\n  width: 100%;\n}\n\n/* required */\n#map-watermark {\n  bottom: 0;\n  height: 38px;\n  position: absolute;\n  left: 10px;\n  width: 80px;\n  z-index: 999;\n}\n</style>\n')),(0,a.kt)("h2",{id:"support"},"Support"),(0,a.kt)("p",null,"Have questions? We're here to help! Email us at ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@radar.com"},"support@radar.com"),"."))}n.isMDXComponent=!0}}]);