(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"870a":function(e,t,n){"use strict";n("9812")},9812:function(e,t,n){},bb51:function(e,t,n){"use strict";n.r(t);var a=n("7a23"),o=n("f773"),c=n.n(o),r=Object(a["F"])("data-v-27c508d4");Object(a["t"])("data-v-27c508d4");var u={class:"home_wrapper"},s=Object(a["h"])("div",{class:"home-header_wrapper"},[Object(a["h"])("div",{class:"home-header-title_wrapper"},[Object(a["h"])("img",{src:c.a,alt:""})])],-1),d={class:"home-content_wrapper"},i=Object(a["h"])("input",{placeholder:"insert lobby name",id:"input"},null,-1);Object(a["r"])();var l=r((function(e,t,o,c,r,l){var h=Object(a["x"])("UserHamburgerMenu");return Object(a["q"])(),Object(a["e"])("div",u,[Object(a["h"])(h,{show:r.showHamburgerMenu,src:n("c749"),onToggleShow:t[1]||(t[1]=function(e){return r.showHamburgerMenu=e})},null,8,["show","src"]),s,Object(a["h"])("div",d,[i,Object(a["h"])("button",{class:"go-button",onClick:t[2]||(t[2]=function(){return l.letsGo&&l.letsGo.apply(l,arguments)}),id:"go-button"},"Let's go")])])})),h=n("e6fd"),b=n("bc3a"),g=n.n(b),p=n("4360"),m=n("5d86"),f={name:"Home",components:{UserHamburgerMenu:m["a"]},data:function(){return{showHamburgerMenu:!1}},methods:{letsGo:function(){var e=document.getElementById("input").value;e||(e=null),e?window.location.href=e:g.a.get(h["urls"].newId).then((function(e){e.data&&(window.location.href=e.data)}))}},mounted:function(){var e=document.getElementById("input");e.addEventListener("keyup",(function(e){13===e.keyCode&&(e.preventDefault(),document.getElementById("go-button").click())}))},beforeRouteEnter:function(e,t,n){-1===p["a"].state.logged||""===p["a"].state.username?g.a.get(h["urls"].getLoginInfoUrl).then((function(e){e.data?(p["a"].dispatch("setLogged",e.data.google_signed_in),p["a"].dispatch("setUsername",e.data.username),n()):(p["a"].dispatch("setLogged",!1),p["a"].dispatch("setUsername",null),n())})).catch((function(){})):n()}};n("870a");f.render=l,f.__scopeId="data-v-27c508d4";t["default"]=f}}]);
//# sourceMappingURL=home.b3c35926.js.map