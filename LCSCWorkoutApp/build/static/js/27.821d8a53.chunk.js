(this.webpackJsonpLCSCWorkoutApp=this.webpackJsonpLCSCWorkoutApp||[]).push([[27],{130:function(t,e,n){"use strict";n.r(e),n.d(e,"ion_loading",(function(){return f}));var i=n(1),r=n(25),o=n(4),a=(n(19),n(16)),s=n(20),d=n(178),c=n(179),l=function(t){var e=Object(a.a)(),n=Object(a.a)(),i=Object(a.a)();return n.addElement(t.querySelector("ion-backdrop")).fromTo("opacity",.01,.3),i.addElement(t.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),e.addElement(t).easing("ease-in-out").duration(200).addAnimation([n,i])},u=function(t){var e=Object(a.a)(),n=Object(a.a)(),i=Object(a.a)();return n.addElement(t.querySelector("ion-backdrop")).fromTo("opacity",.3,0),i.addElement(t.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),e.addElement(t).easing("ease-in-out").duration(200).addAnimation([n,i])},p=function(t){var e=Object(a.a)(),n=Object(a.a)(),i=Object(a.a)();return n.addElement(t.querySelector("ion-backdrop")).fromTo("opacity",.01,.32),i.addElement(t.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),e.addElement(t).easing("ease-in-out").duration(200).addAnimation([n,i])},m=function(t){var e=Object(a.a)(),n=Object(a.a)(),i=Object(a.a)();return n.addElement(t.querySelector("ion-backdrop")).fromTo("opacity",.32,0),i.addElement(t.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),e.addElement(t).easing("ease-in-out").duration(200).addAnimation([n,i])},f=function(){function t(t){var e=this;Object(r.l)(this,t),this.presented=!1,this.mode=Object(r.e)(this),this.keyboardClose=!0,this.duration=0,this.backdropDismiss=!1,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onBackdropTap=function(){e.dismiss(void 0,s.a)},Object(s.e)(this.el),this.didPresent=Object(r.d)(this,"ionLoadingDidPresent",7),this.willPresent=Object(r.d)(this,"ionLoadingWillPresent",7),this.willDismiss=Object(r.d)(this,"ionLoadingWillDismiss",7),this.didDismiss=Object(r.d)(this,"ionLoadingDidDismiss",7)}return t.prototype.componentWillLoad=function(){if(void 0===this.spinner){var t=Object(r.e)(this);this.spinner=o.b.get("loadingSpinner",o.b.get("spinner","ios"===t?"lines":"crescent"))}},t.prototype.present=function(){return Object(i.a)(this,void 0,void 0,(function(){var t=this;return Object(i.c)(this,(function(e){switch(e.label){case 0:return[4,Object(s.f)(this,"loadingEnter",l,p,void 0)];case 1:return e.sent(),this.duration>0&&(this.durationTimeout=setTimeout((function(){return t.dismiss()}),this.duration+10)),[2]}}))}))},t.prototype.dismiss=function(t,e){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(s.g)(this,t,e,"loadingLeave",u,m)},t.prototype.onDidDismiss=function(){return Object(s.h)(this.el,"ionLoadingDidDismiss")},t.prototype.onWillDismiss=function(){return Object(s.h)(this.el,"ionLoadingWillDismiss")},t.prototype.render=function(){var t,e=this.message,n=this.spinner,i=Object(r.e)(this);return Object(r.i)(r.a,{onIonBackdropTap:this.onBackdropTap,style:{zIndex:""+(4e4+this.overlayIndex)},class:Object.assign(Object.assign({},Object(d.b)(this.cssClass)),(t={},t[i]=!0,t["loading-translucent"]=this.translucent,t))},Object(r.i)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),Object(r.i)("div",{class:"loading-wrapper",role:"dialog"},n&&Object(r.i)("div",{class:"loading-spinner"},Object(r.i)("ion-spinner",{name:n})),e&&Object(r.i)("div",{class:"loading-content",innerHTML:Object(c.a)(e)})))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(r.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-loading-md-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family,inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-md-h{display:none}.loading-wrapper.sc-ion-loading-md{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-bubbles.sc-ion-loading-md, .spinner-circles.sc-ion-loading-md, .spinner-crescent.sc-ion-loading-md, .spinner-dots.sc-ion-loading-md, .spinner-lines.sc-ion-loading-md, .spinner-lines-small.sc-ion-loading-md{color:var(--spinner-color)}.sc-ion-loading-md-h{--background:var(--ion-color-step-50,#f2f2f2);--max-width:280px;--max-height:90%;--spinner-color:var(--ion-color-primary,#3880ff);color:var(--ion-color-step-850,#262626);font-size:14px}.loading-wrapper.sc-ion-loading-md{border-radius:2px;padding-left:24px;padding-right:24px;padding-top:24px;padding-bottom:24px;-webkit-box-shadow:0 16px 20px rgba(0,0,0,.4);box-shadow:0 16px 20px rgba(0,0,0,.4)}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-wrapper.sc-ion-loading-md{padding-left:unset;padding-right:unset;-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px}}.loading-spinner.sc-ion-loading-md + .loading-content.sc-ion-loading-md{margin-left:16px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-spinner.sc-ion-loading-md + .loading-content.sc-ion-loading-md{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}"},enumerable:!0,configurable:!0}),t}()},178:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return d}));var i=n(1),r=function(t,e){return null!==e.closest(t)},o=function(t){var e;return"string"===typeof t&&t.length>0?((e={"ion-color":!0})["ion-color-"+t]=!0,e):void 0},a=function(t){var e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return e[t]=!0})),e},s=/^[a-z][a-z0-9+\-.]*:/,d=function(t,e,n){return Object(i.a)(void 0,void 0,void 0,(function(){var r;return Object(i.c)(this,(function(i){return null!=t&&"#"!==t[0]&&!s.test(t)&&(r=document.querySelector("ion-router"))?(null!=e&&e.preventDefault(),[2,r.push(t,n)]):[2,!1]}))}))}},179:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var i=function(t){try{if("string"!==typeof t||""===t)return t;var e=document.createDocumentFragment(),n=document.createElement("div");e.appendChild(n),n.innerHTML=t,s.forEach((function(t){for(var n=e.querySelectorAll(t),i=n.length-1;i>=0;i--){var a=n[i];a.parentNode?a.parentNode.removeChild(a):e.removeChild(a);for(var s=o(a),d=0;d<s.length;d++)r(s[d])}}));for(var i=o(e),a=0;a<i.length;a++)r(i[a]);var d=document.createElement("div");d.appendChild(e);var c=d.querySelector("div");return null!==c?c.innerHTML:d.innerHTML}catch(l){return console.error(l),""}},r=function t(e){if(!e.nodeType||1===e.nodeType){for(var n=e.attributes.length-1;n>=0;n--){var i=e.attributes.item(n),r=i.name;if(a.includes(r.toLowerCase())){var s=i.value;null!=s&&s.toLowerCase().includes("javascript:")&&e.removeAttribute(r)}else e.removeAttribute(r)}var d=o(e);for(n=0;n<d.length;n++)t(d[n])}},o=function(t){return null!=t.children?t.children:t.childNodes},a=["class","id","href","src","name","slot"],s=["script","style","iframe","meta","link","object","embed"]}}]);
//# sourceMappingURL=27.821d8a53.chunk.js.map