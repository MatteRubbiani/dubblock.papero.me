(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{7797:function(e,t,n){},bb51:function(e,t,n){"use strict";n.r(t);var o=n("7a23"),a=Object(o["E"])("data-v-68ccec01");Object(o["s"])("data-v-68ccec01");var c={class:"home_wrapper"},r=Object(o["g"])("div",{class:"home-header_wrapper"},[Object(o["g"])("div",{class:"home-header-title_wrapper"}," Dubblock ")],-1),u={class:"home-content_wrapper"},s=Object(o["g"])("input",{placeholder:"insert lobby name",id:"input"},null,-1);Object(o["q"])();var i=a((function(e,t,a,i,d,l){var g=Object(o["w"])("UserHamburgerMenu");return Object(o["p"])(),Object(o["d"])("div",c,[Object(o["g"])(g,{show:d.showHamburgerMenu,src:n("c749"),onToggleShow:t[1]||(t[1]=function(e){return d.showHamburgerMenu=e})},null,8,["show","src"]),r,Object(o["g"])("div",u,[s,Object(o["g"])("button",{class:"go-button",onClick:t[2]||(t[2]=function(){return l.letsGo&&l.letsGo.apply(l,arguments)}),id:"go-button"},"Let's go")])])})),d=n("e6fd"),l=n("bc3a"),g=n.n(l),b=n("4360"),p=n("5d86"),m={name:"Home",components:{UserHamburgerMenu:p["a"]},data:function(){return{showHamburgerMenu:!1}},methods:{letsGo:function(){var e=document.getElementById("input").value;e||(e=null),e&&(window.location.href=e)}},mounted:function(){var e=document.getElementById("input");e.addEventListener("keyup",(function(e){13===e.keyCode&&(e.preventDefault(),document.getElementById("go-button").click())}))},beforeRouteEnter:function(e,t,n){-1===b["a"].state.logged||""===b["a"].state.username?g.a.get(d["urls"].getLoginInfoUrl).then((function(e){e.data?(b["a"].dispatch("setLogged",e.data.google_signed_in),b["a"].dispatch("setUsername",e.data.username),n()):(b["a"].dispatch("setLogged",!1),b["a"].dispatch("setUsername",null),n())})).catch((function(){location.href=location.origin+"/error?from="+location.pathname})):n()}};n("e920");m.render=i,m.__scopeId="data-v-68ccec01";t["default"]=m},e920:function(e,t,n){"use strict";n("7797")}}]);
//# sourceMappingURL=home.d9e484ab.js.map