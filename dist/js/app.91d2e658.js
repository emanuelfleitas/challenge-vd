(function(e){function t(t){for(var c,o,s=t[0],u=t[1],i=t[2],f=0,b=[];f<s.length;f++)o=s[f],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&b.push(r[o][0]),r[o]=0;for(c in u)Object.prototype.hasOwnProperty.call(u,c)&&(e[c]=u[c]);l&&l(t);while(b.length)b.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],c=!0,s=1;s<n.length;s++){var u=n[s];0!==r[u]&&(c=!1)}c&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var c={},r={app:0},a=[];function o(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=c,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(n,c,function(t){return e[t]}.bind(null,c));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"062f":function(e,t,n){e.exports=n.p+"img/logo_rick_and_morty.622fdce8.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function r(e,t,n,r,a,o){var s=Object(c["x"])("Header"),u=Object(c["x"])("router-view");return Object(c["q"])(),Object(c["e"])(c["a"],null,[Object(c["h"])(s),Object(c["h"])(u)],64)}var a=n("062f"),o=n.n(a),s=function(e){return Object(c["t"])("data-v-b1a1e828"),e=e(),Object(c["r"])(),e},u={class:"header"},i={class:"btn-img"},l=s((function(){return Object(c["f"])("img",{src:o.a,alt:"logo"},null,-1)})),f=Object(c["g"])("Vida Digital R&M");function b(e,t,n,r,a,o){var s=Object(c["x"])("router-link");return Object(c["q"])(),Object(c["e"])("div",u,[Object(c["f"])("div",i,[l,Object(c["h"])(s,{to:"/"},{default:Object(c["D"])((function(){return[f]})),_:1})])])}var d={name:"header"},O=(n("ff8f"),n("6b0d")),j=n.n(O);const p=j()(d,[["render",b],["__scopeId","data-v-b1a1e828"]]);var h=p;function v(e,t,n,r,a,o){var s=Object(c["x"])("CharactersTable");return Object(c["q"])(),Object(c["d"])(s)}n("b0c0");var m=function(e){return Object(c["t"])("data-v-8c644264"),e=e(),Object(c["r"])(),e},g={class:"over-table"},y={class:"centrar",style:{"text-align":"center"}},w=m((function(){return Object(c["f"])("th",null,"Status",-1)})),C=m((function(){return Object(c["f"])("th",null,"Species",-1)})),_=m((function(){return Object(c["f"])("th",null,"Gender",-1)})),x=["onClick"];function k(e,t,n,r,a,o){return Object(c["q"])(),Object(c["e"])("div",g,[Object(c["f"])("table",y,[Object(c["f"])("thead",null,[Object(c["f"])("tr",null,[Object(c["f"])("th",null,[Object(c["f"])("button",{class:"btn-orden",onClick:t[0]||(t[0]=function(e){return o.ordenar()})},"Name")]),w,C,_,Object(c["f"])("th",null,[Object(c["E"])(Object(c["f"])("input",{placeholder:"Buscar",type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.palabra=e})},null,512),[[c["B"],a.palabra]])])])]),Object(c["f"])("tbody",null,[(Object(c["q"])(!0),Object(c["e"])(c["a"],null,Object(c["w"])(o.buscar(),(function(e){return Object(c["q"])(),Object(c["e"])("tr",{key:e.id},[Object(c["f"])("td",null,Object(c["z"])(e.name),1),Object(c["f"])("td",null,Object(c["z"])(e.status),1),Object(c["f"])("td",null,Object(c["z"])(e.species),1),Object(c["f"])("td",null,Object(c["z"])(e.gender),1),Object(c["f"])("td",null,[Object(c["f"])("button",{onClick:function(t){return r.seeFeatures(e)},class:"btn-style"},"Detalles",8,x)])])})),128))])])])}n("4de4"),n("d3b7"),n("caad"),n("2532");var z=n("5502"),q=Object(z["a"])({state:{url:"https://rickandmortyapi.com/api"},mutations:{},actions:{},modules:{}}),S=n("bc3a"),T=n.n(S),L=n("6c02"),F={name:"CharactersTable",data:function(){return{palabra:"",characters:[],url:q.state.url}},mounted:function(){var e=this;T.a.get(q.state.url+"/character").then((function(t){var n=t.data.results;e.characters=n}))},methods:{ordenar:function(){console.log(this.characters),this.characters.reverse()},buscar:function(){var e=this,t=this.characters,n=t.filter((function(t){return t.name.toLowerCase().includes(e.palabra.toLowerCase())||t.status.toLowerCase().includes(e.palabra.toLowerCase())||t.species.toLowerCase().includes(e.palabra.toLowerCase())||t.gender.toLowerCase().includes(e.palabra.toLowerCase())}));return""!=this.palabra?n:t}},setup:function(){var e=Object(L["c"])(),t=function(t){console.log(t),e.push({name:"FeaturesCharacter",params:{id:t.id}})};return{seeFeatures:t}}};n("6e9c");const P=j()(F,[["render",k],["__scopeId","data-v-8c644264"]]);var H=P,N={name:"Home",components:{CharactersTable:H,Header:h}};const M=j()(N,[["render",v]]);var E=M,A={components:{Header:h,Home:E}};n("c89a");const B=j()(A,[["render",r]]);var D=B,I=n("9483");Object(I["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var G={class:"about"},J=Object(c["f"])("h1",null,"This is an about page",-1),R=[J];function V(e,t){return Object(c["q"])(),Object(c["e"])("div",G,R)}const U={},K=j()(U,[["render",V]]);var Q=K,W=function(e){return Object(c["t"])("data-v-527fb952"),e=e(),Object(c["r"])(),e},X=W((function(){return Object(c["f"])("div",{class:"h1"},[Object(c["f"])("h1",null,"Features Charactersssss")],-1)})),Y={class:"box"},Z={class:"box-features"},$=["src"],ee={class:"box-features"},te={class:"tam"},ne=W((function(){return Object(c["f"])("div",{class:"uno"},"Name:",-1)})),ce={class:"dos"},re={class:"tam"},ae=W((function(){return Object(c["f"])("div",{class:"uno"},"Status:",-1)})),oe={class:"dos"},se={class:"tam"},ue=W((function(){return Object(c["f"])("div",{class:"uno"},"Species:",-1)})),ie={class:"dos"},le={class:"tam"},fe=W((function(){return Object(c["f"])("div",{class:"uno"},"Type:",-1)})),be={class:"dos"},de={class:"tam"},Oe=W((function(){return Object(c["f"])("div",{class:"uno"},"Gender:",-1)})),je={class:"dos"},pe={class:"tam"},he=W((function(){return Object(c["f"])("div",{class:"uno"},"Origin name:",-1)})),ve={class:"dos"},me={class:"over-table"},ge={class:"centrar",style:{"text-align":"center"}},ye=W((function(){return Object(c["f"])("thead",null,[Object(c["f"])("tr",null,[Object(c["f"])("th",null,"Name"),Object(c["f"])("th",null,"Release"),Object(c["f"])("th",null,"Episode"),Object(c["f"])("th",null,"Characters")])],-1)}));function we(e,t,n,r,a,o){return Object(c["q"])(),Object(c["e"])(c["a"],null,[X,Object(c["f"])("div",Y,[Object(c["f"])("div",Z,[Object(c["f"])("img",{src:a.feature.image,alt:"img"},null,8,$)]),Object(c["f"])("div",ee,[Object(c["f"])("div",te,[ne,Object(c["f"])("div",ce,Object(c["z"])(a.feature.name),1)]),Object(c["f"])("div",re,[ae,Object(c["f"])("div",oe,Object(c["z"])(a.feature.status),1)]),Object(c["f"])("div",se,[ue,Object(c["f"])("div",ie,Object(c["z"])(a.feature.species),1)]),Object(c["f"])("div",le,[fe,Object(c["f"])("div",be,Object(c["z"])(a.feature.type),1)]),Object(c["f"])("div",de,[Oe,Object(c["f"])("div",je,Object(c["z"])(a.feature.gender),1)]),Object(c["f"])("div",pe,[he,Object(c["f"])("div",ve,Object(c["z"])(a.origin.name),1)])])]),Object(c["f"])("div",me,[Object(c["f"])("table",ge,[ye,Object(c["f"])("tbody",null,[(Object(c["q"])(!0),Object(c["e"])(c["a"],null,Object(c["w"])(a.episode,(function(e){return Object(c["q"])(),Object(c["e"])("tr",{key:e.id},[Object(c["f"])("td",null,Object(c["z"])(e.name),1),Object(c["f"])("td",null,Object(c["z"])(e.air_date),1),Object(c["f"])("td",null,Object(c["z"])(e.episode),1),Object(c["f"])("td",null,Object(c["z"])(e.characters),1)])})),128))])])])],64)}n("159b");var Ce={props:["id"],data:function(){return{feature:[],episodes:{},episode:[],origin:[],url:q.state.url}},mounted:function(){var e=this;T.a.get(q.state.url+"/character/"+this.id).then((function(t){var n=t.data;console.log(n),e.origin=n.origin,e.feature=n;var c=t.data.episode;c.forEach((function(t){T.a.get(t).then((function(t){e.episode.push({name:t.data.name,air_date:t.data.air_date,episode:t.data.episode,characters:t.data.characters.length})}))}))}))}};n("8061");const _e=j()(Ce,[["render",we],["__scopeId","data-v-527fb952"]]);var xe=_e,ke=[{path:"/",name:"Home",component:E},{path:"/CharactersTable",name:"CharactersTable",component:H},{path:"/CharactersTable/:id",name:"FeaturesCharacter",component:xe,props:!0},{path:"/about",component:Q}],ze=Object(L["a"])({history:Object(L["b"])("/"),routes:ke}),qe=ze,Se=n("130e");Object(c["c"])(D).use(q).use(qe).use(Se["a"],T.a).mount("#app")},"6e9c":function(e,t,n){"use strict";n("8f10")},"7c13":function(e,t,n){},8061:function(e,t,n){"use strict";n("7c13")},"8f10":function(e,t,n){},c34a:function(e,t,n){},c89a:function(e,t,n){"use strict";n("c34a")},e946:function(e,t,n){},ff8f:function(e,t,n){"use strict";n("e946")}});
//# sourceMappingURL=app.91d2e658.js.map