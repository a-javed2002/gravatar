!function(){var e={107:function(){document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#unified-header"),t=document.querySelector(".g-mobile-menu");e&&t&&t.addEventListener("click",(function(){e.classList.contains("is-open")?(e.classList.remove("is-open"),document.body.style.overflow="auto"):(e.classList.add("is-open"),document.body.style.overflow="hidden")}))}))}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}!function(){"use strict";var e,t=window.cookieLib={getItem:function(e){return e&&decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null},setItem:function(e,t,n,o,i){var a=arguments.length>5&&void 0!==arguments[5]&&arguments[5];if(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))return!1;var r="";if(n)switch(n.constructor){case Number:r=n===1/0?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+n;break;case String:r="; expires="+n;break;case Date:r="; expires="+n.toUTCString()}return"rootDomain"!==i&&".rootDomain"!==i||(i=(".rootDomain"===i?".":"")+document.location.hostname.split(".").slice(-2).join(".")),document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+r+(i?"; domain="+i:"")+(o?"; path="+o:"")+(a?"; secure":""),!0}};function o(e,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=".wordpress.com"===location.hostname.slice(-14)?".rootDomain":location.hostname;t.setItem(e,n,86400*o,"/",i)}function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function a(e){var t=function(e,t){if("object"!==i(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===i(t)?t:String(t)}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,a(o.key),o)}}window.ccpaSetup=function(){document.querySelector(".g-footer__links ul, .g-profile-footer__links")&&document.addEventListener("a8c-analytics:loaded-is-ccpa",(function(n){var i=n.detail&&n.detail.isCCPA,a=window.a8cAnalytics.cb.getRegion().toLowerCase();(function(e,n){var i,a=t.getItem("ccpa_applies"),r=e||"true"===a||["california"].indexOf(n)>=0;null===a&&o("ccpa_applies",r),r&&(i=document.querySelector("#ca-privacy-notice"))&&(i.style.display="block")})(i,a),function(n){var i;if(!(((null===(i=window.a8cAnalytics)||void 0===i||null===(i=i.kit)||void 0===i?void 0:i.CCPARegions)||[]).indexOf(n)<0)){var a=document.getElementById("ccpa-donotsell");if(a){var r=a.getElementsByTagName("a");if(r.length){var c=r[0],s=function(){var t,n,o=document.createElement("div");o.id="ccpa-modal",o.className="cleanslate",o.innerHTML=String.raw(e||(t=['\n<div class="components-modal__screen-overlay">\n<div role="dialog" aria-labelledby="dialog_label" aria-modal="true" class="components-modal__frame">\n<div class="components-modal__content ccpa-settings">\n<div class="components-modal__header">\n\t<div class="components-modal__header-heading-container">\n\t\t<h1 id="dialog_label" class="components-modal__header-heading">Do Not Sell Or Share My Personal Information</h1>\n\t</div>\n\t<button type="button" aria-label="Close dialog" class="components-button components-icon-button ccpa-close-dialog">\n\t\t<svg aria-hidden="true" role="img" focusable="false" class="dashicon dashicons-no-alt" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">\n\t\t\t<path d="M14.95 6.46L11.41 10l3.54 3.54-1.41 1.41L10 11.42l-3.53 3.53-1.42-1.42L8.58 10 5.05 6.47l1.42-1.42L10 8.58l3.54-3.53z"></path>\n\t\t</svg>\n\t</button>\n</div>\n<div class="ccpa-settings__intro-txt">\n<p>We take your privacy and trust in us seriously. We are committed to protecting the privacy and security of the information that you share with us. You can read more about our privacy practices in our Privacy Policy.</p>\n<p>Certain U.S. residents have the right to opt out of the sale or sharing of their personal information.</p>\n<p>This opt-out is managed through cookies, so if you delete cookies, your browser is set to delete cookies automatically after a certain length of time, or if you visit sites in a different browser, you\'ll need to make this selection again.</p>\n<p>After you opt-out you may still see ads, but they may just not be personalized.</p>\n</div>\n<div class="components-modal__footer">\n\t<div role="form" class="ccpa-setting">\n\t\t<label>\n\t\t\t<input id="ccpa-opt-out" class="components-form-toggle__input opt-out" type="checkbox" value="false" autofocus />\n\t\t\t<span class="ccpa-setting__header">Do Not Sell Or Share My Personal Information</span>\n\t\t</label>\n\t</div>\n\t<div class="components-modal__footer-bottom g-is-style-white">\n\t\t<button class="g-button components-button is-button is-primary ccpa-close-dialog">Close</button>\n\t</div>\n</div>\n</div>\n</div>\n</div>\n'],n||(n=t.slice(0)),e=Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))));for(var i=function(){return document.body===o.parentElement&&document.body.removeChild(o),!1},a=o.getElementsByClassName("ccpa-close-dialog"),r=0;r<a.length;++r)a[r].onclick=i;var c=o.getElementsByClassName("components-modal__screen-overlay")[0];return o.onclick=function(e){var t=c.getBoundingClientRect(),n=e.x,o=e.y;(n<t.x||n>t.x+t.width||o<t.y||o>t.y+t.height)&&i()},o}();c.onclick=function(){var e="ccpa_do_not_sell",n=t.getItem(e);document.body.appendChild(s);var i=document.getElementById("ccpa-opt-out");return i.checked="true"===n,i.onchange=function(){o(e,i.checked?"true":"false",365)},!1},a.style.display="block"}}}}(a)}))},window.ccpaTrigger=function(){window.a8cAnalytics={cb:{getRegion:function(){return"california"}}},document.dispatchEvent(new CustomEvent("a8c-analytics:loaded-is-ccpa",{detail:{isCCPA:!0}}))},n(107);var c=function(){function e(){var t,n,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t=this,(n=a(n="consentGiven"))in t?Object.defineProperty(t,n,{value:false,enumerable:!0,configurable:!0,writable:!0}):t[n]=false,this.deferredTracksEvents=o}var t,n;return t=e,(n=[{key:"init",value:function(){var e=this;document.addEventListener("a8c-analytics:loaded",(function(){var t=window.a8cAnalytics.cb;window.a8cAnalytics.kit.doNotTrack()||t.addTracker("analytics",!1,(function(){e.consentGiven=!0,e.sendAll()}))}))}},{key:"push",value:function(e){this.consentGiven?this.send(e):this.deferredTracksEvents.push(e)}},{key:"sendAll",value:function(){for(;this.deferredTracksEvents.length;){var e=this.deferredTracksEvents.shift();this.send(e)}}},{key:"send",value:function(e){window._tkq=window._tkq||[],window._tkq.push(e)}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();window._deferredTracksEvents=new c(Array.isArray(window._deferredTracksEvents)?window._deferredTracksEvents:[]),window._deferredTracksEvents.init()}()}();