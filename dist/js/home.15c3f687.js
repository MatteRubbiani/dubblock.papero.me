(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{b9aa:function(e,t,n){},bb51:function(e,t,n){"use strict";n.r(t);var a=n("7a23"),o=Object(a["E"])("data-v-1d674c54");Object(a["s"])("data-v-1d674c54");var c={class:"home_wrapper"},r=Object(a["g"])("div",{class:"home-header_wrapper"},[Object(a["g"])("div",{class:"home-header-title_wrapper"}," Dubblock ")],-1),u={class:"home-content_wrapper"},s=Object(a["g"])("input",{placeholder:"insert lobby name",id:"input"},null,-1);Object(a["q"])();var d=o((function(e,t,o,d,i,l){var g=Object(a["w"])("UserHamburgerMenu");return Object(a["p"])(),Object(a["d"])("div",c,[Object(a["g"])(g,{show:i.showHamburgerMenu,src:n("c749"),onToggleShow:t[1]||(t[1]=function(e){return i.showHamburgerMenu=e})},null,8,["show","src"]),r,Object(a["g"])("div",u,[s,Object(a["g"])("button",{class:"go-button",onClick:t[2]||(t[2]=function(){return l.letsGo&&l.letsGo.apply(l,arguments)}),id:"go-button"},"Let's go")])])})),i=n("e6fd"),l=n("bc3a"),g=n.n(l),b=n("4360"),p=n("5d86"),m={name:"Home",components:{UserHamburgerMenu:p["a"]},data:function(){return{showHamburgerMenu:!1}},methods:{letsGo:function(){var e=document.getElementById("input").value;e||(e=null),e?window.location.href=e:g.a.get(i["urls"].newId).then((function(e){e.data&&(window.location.href=e.data)}))}},mounted:function(){var e=document.getElementById("input");e.addEventListener("keyup",(function(e){13===e.keyCode&&(e.preventDefault(),document.getElementById("go-button").click())}))},beforeRouteEnter:function(e,t,n){-1===b["a"].state.logged||""===b["a"].state.username?g.a.get(i["urls"].getLoginInfoUrl).then((function(e){e.data?(b["a"].dispatch("setLogged",e.data.google_signed_in),b["a"].dispatch("setUsername",e.data.username),n()):(b["a"].dispatch("setLogged",!1),b["a"].dispatch("setUsername",null),n())})).catch((function(){location.href=location.origin+"/error?from="+location.pathname})):n()}};n("f421");m.render=d,m.__scopeId="data-v-1d674c54";t["default"]=m},f421:function(e,t,n){"use strict";n("b9aa")}}]);
//# sourceMappingURL=home.15c3f687.js.map