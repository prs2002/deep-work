/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 8944:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5500);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2312);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#non_blocking_alert{margin:0;padding:0;position:fixed;width:520px;height:378px;background:#ff7020;right:20px;top:20px;z-index:9999999}#non_blocking_alert.more{height:525px}#non_blocking_alert__title{font-family:Inter;font-size:24px;font-weight:600;line-height:29px;letter-spacing:0;text-align:left;color:#cc4900;position:absolute;top:30px;left:32px;margin:0;padding:0}#non_blocking_alert__content{position:absolute;top:103px;left:32px;font-family:Inter;font-size:32px;font-weight:700;line-height:39px;letter-spacing:0;text-align:left}#non_blocking_alert__content p{margin:0;padding:0}#non_blocking_alert__content p:first-of-type{color:rgba(255,255,255,.6196078431)}#non_blocking_alert__content p:not(:first-of-type){color:#fff}#non_blocking_alert__button_quit{position:absolute;background:#fff;width:220px;height:56px;top:283px;left:32px;padding:9px 24px;border-radius:38px;border:none;cursor:pointer;font-family:Inter;font-size:16px;font-weight:400;line-height:19px;letter-spacing:0;color:#000}#non_blocking_alert__button_more{position:absolute;color:#fff;width:220px;height:56px;top:283px;left:268px;padding:9px 24px;border-radius:38px;border:2px solid #fff;background:rgba(0,0,0,0);cursor:pointer;font-family:Inter;font-size:16px;font-weight:400;line-height:19px;letter-spacing:0}#non_blocking_alert__more_phrase{position:absolute;top:249px;left:32px;font-family:Inter;font-size:16px;font-weight:400;line-height:19px;letter-spacing:0em;color:#fff}#non_blocking_alert__more_line{position:absolute;width:456px;top:372px;left:32px;border:1px solid #cc4900}#non_blocking_alert__more_input{margin:0;padding:0;position:absolute;width:388px;height:56px;top:284px;left:32px;border-radius:38px;background:rgba(0,0,0,0);border:2px solid #fff;text-align:center;font-size:30px;color:#fff}#non_blocking_alert__more_input:focus{outline:none}#non_blocking_alert__more_submit_button{position:absolute;width:56px;height:56px;top:284px;left:432px;border-radius:48px;background-color:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer}#non_blocking_alert__more_tick{font-size:30px;color:#ff7020}#non_blocking_alert__more_go_back{position:absolute;top:423px;left:148px;font-family:Inter;font-size:16px;font-weight:400;line-height:19px;letter-spacing:0em;color:rgba(255,255,255,.625)}#non_blocking_alert__more_go_back_btn{position:absolute;width:456px;height:56px;top:458px;left:32px;border-radius:38px;border:none}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 2312:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 5500:
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 9516:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(1504),ca=__webpack_require__(4712);function p(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var da=new Set,ea={};function fa(a,b){ha(a,b);ha(a+"Capture",b)}
function ha(a,b){ea[a]=b;for(a=0;a<b.length;a++)da.add(b[a])}
var ia=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ja=Object.prototype.hasOwnProperty,ka=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la=
{},ma={};function oa(a){if(ja.call(ma,a))return!0;if(ja.call(la,a))return!1;if(ka.test(a))return ma[a]=!0;la[a]=!0;return!1}function pa(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function qa(a,b,c,d){if(null===b||"undefined"===typeof b||pa(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function v(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g}var z={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){z[a]=new v(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];z[b]=new v(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){z[a]=new v(a,2,!1,a.toLowerCase(),null,!1,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){z[a]=new v(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){z[a]=new v(a,3,!1,a.toLowerCase(),null,!1,!1)});
["checked","multiple","muted","selected"].forEach(function(a){z[a]=new v(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){z[a]=new v(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){z[a]=new v(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){z[a]=new v(a,5,!1,a.toLowerCase(),null,!1,!1)});var ra=/[\-:]([a-z])/g;function sa(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(ra,
sa);z[b]=new v(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!1,!1)});
z.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!0,!0)});
function ta(a,b,c,d){var e=z.hasOwnProperty(b)?z[b]:null;if(null!==e?0!==e.type:d||!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1])qa(b,c,e,d)&&(c=null),d||null===e?oa(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c)))}
var ua=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),wa=Symbol.for("react.portal"),ya=Symbol.for("react.fragment"),za=Symbol.for("react.strict_mode"),Aa=Symbol.for("react.profiler"),Ba=Symbol.for("react.provider"),Ca=Symbol.for("react.context"),Da=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),Ga=Symbol.for("react.memo"),Ha=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");
var Ia=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var Ja=Symbol.iterator;function Ka(a){if(null===a||"object"!==typeof a)return null;a=Ja&&a[Ja]||a["@@iterator"];return"function"===typeof a?a:null}var A=Object.assign,La;function Ma(a){if(void 0===La)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);La=b&&b[1]||""}return"\n"+La+a}var Na=!1;
function Oa(a,b){if(!a||Na)return"";Na=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[])}catch(l){var d=l}Reflect.construct(a,[],b)}else{try{b.call()}catch(l){d=l}a.call(b.prototype)}else{try{throw Error();}catch(l){d=l}a()}}catch(l){if(l&&d&&"string"===typeof l.stack){for(var e=l.stack.split("\n"),
f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h]){var k="\n"+e[g].replace(" at new "," at ");a.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",a.displayName));return k}while(1<=g&&0<=h)}break}}}finally{Na=!1,Error.prepareStackTrace=c}return(a=a?a.displayName||a.name:"")?Ma(a):""}
function Pa(a){switch(a.tag){case 5:return Ma(a.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return a=Oa(a.type,!1),a;case 11:return a=Oa(a.type.render,!1),a;case 1:return a=Oa(a.type,!0),a;default:return""}}
function Qa(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ya:return"Fragment";case wa:return"Portal";case Aa:return"Profiler";case za:return"StrictMode";case Ea:return"Suspense";case Fa:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Ca:return(a.displayName||"Context")+".Consumer";case Ba:return(a._context.displayName||"Context")+".Provider";case Da:var b=a.render;a=a.displayName;a||(a=b.displayName||
b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case Ga:return b=a.displayName||null,null!==b?b:Qa(a.type)||"Memo";case Ha:b=a._payload;a=a._init;try{return Qa(a(b))}catch(c){}}return null}
function Ra(a){var b=a.type;switch(a.tag){case 24:return"Cache";case 9:return(b.displayName||"Context")+".Consumer";case 10:return(b._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return a=b.render,a=a.displayName||a.name||"",b.displayName||(""!==a?"ForwardRef("+a+")":"ForwardRef");case 7:return"Fragment";case 5:return b;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qa(b);case 8:return b===za?"StrictMode":"Mode";case 22:return"Offscreen";
case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof b)return b.displayName||b.name||null;if("string"===typeof b)return b}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "string":case "undefined":return a;case "object":return a;default:return""}}
function Ta(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a))}function Wa(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
function Ya(a,b){var c=b.checked;return A({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function ab(a,b){b=b.checked;null!=b&&ta(a,"checked",b,!1)}
function bb(a,b){ab(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?cb(a,b.type,c):b.hasOwnProperty("defaultValue")&&cb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function db(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function cb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}var eb=Array.isArray;
function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(p(91));return A({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(p(92));if(eb(c)){if(1<c.length)throw Error(p(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:Sa(c)}}
function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}function kb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}
function lb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?kb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var mb,nb=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if("http://www.w3.org/2000/svg"!==a.namespaceURI||"innerHTML"in a)a.innerHTML=b;else{mb=mb||document.createElement("div");mb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=mb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function ob(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var pb={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,
zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qb=["Webkit","ms","Moz","O"];Object.keys(pb).forEach(function(a){qb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);pb[b]=pb[a]})});function rb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||pb.hasOwnProperty(a)&&pb[a]?(""+b).trim():b+"px"}
function sb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=rb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var tb=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function ub(a,b){if(b){if(tb[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(p(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(p(60));if("object"!==typeof b.dangerouslySetInnerHTML||!("__html"in b.dangerouslySetInnerHTML))throw Error(p(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(p(62));}}
function vb(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}var wb=null;function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(p(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b))}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a])}}function Gb(a,b){return a(b)}function Hb(){}var Ib=!1;function Jb(a,b,c){if(Ib)return a(b,c);Ib=!0;try{return Gb(a,b,c)}finally{if(Ib=!1,null!==zb||null!==Ab)Hb(),Fb()}}
function Kb(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==
typeof c)throw Error(p(231,b,typeof c));return c}var Lb=!1;if(ia)try{var Mb={};Object.defineProperty(Mb,"passive",{get:function(){Lb=!0}});window.addEventListener("test",Mb,Mb);window.removeEventListener("test",Mb,Mb)}catch(a){Lb=!1}function Nb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(m){this.onError(m)}}var Ob=!1,Pb=null,Qb=!1,Rb=null,Sb={onError:function(a){Ob=!0;Pb=a}};function Tb(a,b,c,d,e,f,g,h,k){Ob=!1;Pb=null;Nb.apply(Sb,arguments)}
function Ub(a,b,c,d,e,f,g,h,k){Tb.apply(this,arguments);if(Ob){if(Ob){var l=Pb;Ob=!1;Pb=null}else throw Error(p(198));Qb||(Qb=!0,Rb=l)}}function Vb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.flags&4098)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function Wb(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function Xb(a){if(Vb(a)!==a)throw Error(p(188));}
function Yb(a){var b=a.alternate;if(!b){b=Vb(a);if(null===b)throw Error(p(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return Xb(e),a;if(f===d)return Xb(e),b;f=f.sibling}throw Error(p(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(p(189));}}if(c.alternate!==d)throw Error(p(190));}if(3!==c.tag)throw Error(p(188));return c.stateNode.current===c?a:b}function Zb(a){a=Yb(a);return null!==a?$b(a):null}function $b(a){if(5===a.tag||6===a.tag)return a;for(a=a.child;null!==a;){var b=$b(a);if(null!==b)return b;a=a.sibling}return null}
var ac=ca.unstable_scheduleCallback,bc=ca.unstable_cancelCallback,cc=ca.unstable_shouldYield,dc=ca.unstable_requestPaint,B=ca.unstable_now,ec=ca.unstable_getCurrentPriorityLevel,fc=ca.unstable_ImmediatePriority,gc=ca.unstable_UserBlockingPriority,hc=ca.unstable_NormalPriority,ic=ca.unstable_LowPriority,jc=ca.unstable_IdlePriority,kc=null,lc=null;function mc(a){if(lc&&"function"===typeof lc.onCommitFiberRoot)try{lc.onCommitFiberRoot(kc,a,void 0,128===(a.current.flags&128))}catch(b){}}
var oc=Math.clz32?Math.clz32:nc,pc=Math.log,qc=Math.LN2;function nc(a){a>>>=0;return 0===a?32:31-(pc(a)/qc|0)|0}var rc=64,sc=4194304;
function tc(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;
default:return a}}function uc(a,b){var c=a.pendingLanes;if(0===c)return 0;var d=0,e=a.suspendedLanes,f=a.pingedLanes,g=c&268435455;if(0!==g){var h=g&~e;0!==h?d=tc(h):(f&=g,0!==f&&(d=tc(f)))}else g=c&~e,0!==g?d=tc(g):0!==f&&(d=tc(f));if(0===d)return 0;if(0!==b&&b!==d&&0===(b&e)&&(e=d&-d,f=b&-b,e>=f||16===e&&0!==(f&4194240)))return b;0!==(d&4)&&(d|=c&16);b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-oc(b),e=1<<c,d|=a[c],b&=~e;return d}
function vc(a,b){switch(a){case 1:case 2:case 4:return b+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return b+5E3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}
function wc(a,b){for(var c=a.suspendedLanes,d=a.pingedLanes,e=a.expirationTimes,f=a.pendingLanes;0<f;){var g=31-oc(f),h=1<<g,k=e[g];if(-1===k){if(0===(h&c)||0!==(h&d))e[g]=vc(h,b)}else k<=b&&(a.expiredLanes|=h);f&=~h}}function xc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function yc(){var a=rc;rc<<=1;0===(rc&4194240)&&(rc=64);return a}function zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
function Ac(a,b,c){a.pendingLanes|=b;536870912!==b&&(a.suspendedLanes=0,a.pingedLanes=0);a=a.eventTimes;b=31-oc(b);a[b]=c}function Bc(a,b){var c=a.pendingLanes&~b;a.pendingLanes=b;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=b;a.mutableReadLanes&=b;a.entangledLanes&=b;b=a.entanglements;var d=a.eventTimes;for(a=a.expirationTimes;0<c;){var e=31-oc(c),f=1<<e;b[e]=0;d[e]=-1;a[e]=-1;c&=~f}}
function Cc(a,b){var c=a.entangledLanes|=b;for(a=a.entanglements;c;){var d=31-oc(c),e=1<<d;e&b|a[d]&b&&(a[d]|=b);c&=~e}}var C=0;function Dc(a){a&=-a;return 1<a?4<a?0!==(a&268435455)?16:536870912:4:1}var Ec,Fc,Gc,Hc,Ic,Jc=!1,Kc=[],Lc=null,Mc=null,Nc=null,Oc=new Map,Pc=new Map,Qc=[],Rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a,b){switch(a){case "focusin":case "focusout":Lc=null;break;case "dragenter":case "dragleave":Mc=null;break;case "mouseover":case "mouseout":Nc=null;break;case "pointerover":case "pointerout":Oc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Pc.delete(b.pointerId)}}
function Tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a={blockedOn:b,domEventName:c,eventSystemFlags:d,nativeEvent:f,targetContainers:[e]},null!==b&&(b=Cb(b),null!==b&&Fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
function Uc(a,b,c,d,e){switch(b){case "focusin":return Lc=Tc(Lc,a,b,c,d,e),!0;case "dragenter":return Mc=Tc(Mc,a,b,c,d,e),!0;case "mouseover":return Nc=Tc(Nc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;Oc.set(f,Tc(Oc.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,Pc.set(f,Tc(Pc.get(f)||null,a,b,c,d,e)),!0}return!1}
function Vc(a){var b=Wc(a.target);if(null!==b){var c=Vb(b);if(null!==c)if(b=c.tag,13===b){if(b=Wb(c),null!==b){a.blockedOn=b;Ic(a.priority,function(){Gc(c)});return}}else if(3===b&&c.stateNode.current.memoizedState.isDehydrated){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}
function Xc(a){if(null!==a.blockedOn)return!1;for(var b=a.targetContainers;0<b.length;){var c=Yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null===c){c=a.nativeEvent;var d=new c.constructor(c.type,c);wb=d;c.target.dispatchEvent(d);wb=null}else return b=Cb(c),null!==b&&Fc(b),a.blockedOn=c,!1;b.shift()}return!0}function Zc(a,b,c){Xc(a)&&c.delete(b)}function $c(){Jc=!1;null!==Lc&&Xc(Lc)&&(Lc=null);null!==Mc&&Xc(Mc)&&(Mc=null);null!==Nc&&Xc(Nc)&&(Nc=null);Oc.forEach(Zc);Pc.forEach(Zc)}
function ad(a,b){a.blockedOn===b&&(a.blockedOn=null,Jc||(Jc=!0,ca.unstable_scheduleCallback(ca.unstable_NormalPriority,$c)))}
function bd(a){function b(b){return ad(b,a)}if(0<Kc.length){ad(Kc[0],a);for(var c=1;c<Kc.length;c++){var d=Kc[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==Lc&&ad(Lc,a);null!==Mc&&ad(Mc,a);null!==Nc&&ad(Nc,a);Oc.forEach(b);Pc.forEach(b);for(c=0;c<Qc.length;c++)d=Qc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Qc.length&&(c=Qc[0],null===c.blockedOn);)Vc(c),null===c.blockedOn&&Qc.shift()}var cd=ua.ReactCurrentBatchConfig,dd=!0;
function ed(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=1,fd(a,b,c,d)}finally{C=e,cd.transition=f}}function gd(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=4,fd(a,b,c,d)}finally{C=e,cd.transition=f}}
function fd(a,b,c,d){if(dd){var e=Yc(a,b,c,d);if(null===e)hd(a,b,d,id,c),Sc(a,d);else if(Uc(e,a,b,c,d))d.stopPropagation();else if(Sc(a,d),b&4&&-1<Rc.indexOf(a)){for(;null!==e;){var f=Cb(e);null!==f&&Ec(f);f=Yc(a,b,c,d);null===f&&hd(a,b,d,id,c);if(f===e)break;e=f}null!==e&&d.stopPropagation()}else hd(a,b,d,null,c)}}var id=null;
function Yc(a,b,c,d){id=null;a=xb(d);a=Wc(a);if(null!==a)if(b=Vb(a),null===b)a=null;else if(c=b.tag,13===c){a=Wb(b);if(null!==a)return a;a=null}else if(3===c){if(b.stateNode.current.memoizedState.isDehydrated)return 3===b.tag?b.stateNode.containerInfo:null;a=null}else b!==a&&(a=null);id=a;return null}
function jd(a){switch(a){case "cancel":case "click":case "close":case "contextmenu":case "copy":case "cut":case "auxclick":case "dblclick":case "dragend":case "dragstart":case "drop":case "focusin":case "focusout":case "input":case "invalid":case "keydown":case "keypress":case "keyup":case "mousedown":case "mouseup":case "paste":case "pause":case "play":case "pointercancel":case "pointerdown":case "pointerup":case "ratechange":case "reset":case "resize":case "seeked":case "submit":case "touchcancel":case "touchend":case "touchstart":case "volumechange":case "change":case "selectionchange":case "textInput":case "compositionstart":case "compositionend":case "compositionupdate":case "beforeblur":case "afterblur":case "beforeinput":case "blur":case "fullscreenchange":case "focus":case "hashchange":case "popstate":case "select":case "selectstart":return 1;case "drag":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "mousemove":case "mouseout":case "mouseover":case "pointermove":case "pointerout":case "pointerover":case "scroll":case "toggle":case "touchmove":case "wheel":case "mouseenter":case "mouseleave":case "pointerenter":case "pointerleave":return 4;
case "message":switch(ec()){case fc:return 1;case gc:return 4;case hc:case ic:return 16;case jc:return 536870912;default:return 16}default:return 16}}var kd=null,ld=null,md=null;function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}
function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return!0}function qd(){return!1}
function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}A(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
(a.returnValue=!1),this.isDefaultPrevented=pd)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=pd)},persist:function(){},isPersistent:pd});return b}
var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=A({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=A({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return"movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=A({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=A({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=A({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=A({},sd,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=A({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1}function zd(){return Pd}
var Qd=A({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return"keypress"===a.type?od(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===
a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=A({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=A({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=A({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=A({},Ad,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=ia&&"CompositionEvent"in window,be=null;ia&&"documentMode"in document&&(be=document.documentMode);var ce=ia&&"TextEvent"in window&&!be,de=ia&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=!1;
function ge(a,b){switch(a){case "keyup":return-1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return!0;default:return!1}}function he(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var ie=!1;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=!0;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
function ke(a,b){if(ie)return"compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!le[a.type]:"textarea"===b?!0:!1}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}))}var pe=null,qe=null;function re(a){se(a,0)}function te(a){var b=ue(a);if(Wa(b))return a}
function ve(a,b){if("change"===a)return b}var we=!1;if(ia){var xe;if(ia){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput}xe=ye}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode)}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null)}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));Jb(re,b)}}
function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae()}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge;
function Ie(a,b){if(He(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++){var e=c[d];if(!ja.call(b,e)||!He(a[e],b[e]))return!1}return!0}function Je(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Ke(a,b){var c=Je(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Je(c)}}function Le(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Le(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Me(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=Xa(a.document)}return b}function Ne(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
function Oe(a){var b=Me(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&Le(c.ownerDocument.documentElement,c)){if(null!==d&&Ne(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=Ke(c,f);var g=Ke(c,
d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),a.addRange(b)))}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}
var Pe=ia&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;
function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Ne(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Ie(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)))}
function Ve(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var We={animationend:Ve("Animation","AnimationEnd"),animationiteration:Ve("Animation","AnimationIteration"),animationstart:Ve("Animation","AnimationStart"),transitionend:Ve("Transition","TransitionEnd")},Xe={},Ye={};
ia&&(Ye=document.createElement("div").style,"AnimationEvent"in window||(delete We.animationend.animation,delete We.animationiteration.animation,delete We.animationstart.animation),"TransitionEvent"in window||delete We.transitionend.transition);function Ze(a){if(Xe[a])return Xe[a];if(!We[a])return a;var b=We[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Ye)return Xe[a]=b[c];return a}var $e=Ze("animationend"),af=Ze("animationiteration"),bf=Ze("animationstart"),cf=Ze("transitionend"),df=new Map,ef="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a,b){df.set(a,b);fa(b,[a])}for(var gf=0;gf<ef.length;gf++){var hf=ef[gf],jf=hf.toLowerCase(),kf=hf[0].toUpperCase()+hf.slice(1);ff(jf,"on"+kf)}ff($e,"onAnimationEnd");ff(af,"onAnimationIteration");ff(bf,"onAnimationStart");ff("dblclick","onDoubleClick");ff("focusin","onFocus");ff("focusout","onBlur");ff(cf,"onTransitionEnd");ha("onMouseEnter",["mouseout","mouseover"]);ha("onMouseLeave",["mouseout","mouseover"]);ha("onPointerEnter",["pointerout","pointerover"]);
ha("onPointerLeave",["pointerout","pointerover"]);fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fa("onBeforeInput",["compositionend","keypress","textInput","paste"]);fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Ub(d,b,void 0,a);a.currentTarget=null}
function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k}}}if(Qb)throw a=Rb,Qb=!1,Rb=null,a;}
function D(a,b){var c=b[of];void 0===c&&(c=b[of]=new Set);var d=a+"__bubble";c.has(d)||(pf(b,a,2,!1),c.add(d))}function qf(a,b,c){var d=0;b&&(d|=4);pf(c,a,d,b)}var rf="_reactListening"+Math.random().toString(36).slice(2);function sf(a){if(!a[rf]){a[rf]=!0;da.forEach(function(b){"selectionchange"!==b&&(mf.has(b)||qf(b,!1,a),qf(b,!0,a))});var b=9===a.nodeType?a:a.ownerDocument;null===b||b[rf]||(b[rf]=!0,qf("selectionchange",!1,b))}}
function pf(a,b,c,d){switch(jd(b)){case 1:var e=ed;break;case 4:e=gd;break;default:e=fd}c=e.bind(null,b,c,a);e=void 0;!Lb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1)}
function hd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return}for(;null!==h;){g=Wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode}}d=d.return}Jb(function(){var d=f,e=xb(c),g=[];
a:{var h=df.get(a);if(void 0!==h){var k=td,n=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":n="focus";k=Fd;break;case "focusout":n="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case $e:case af:case bf:k=Hd;break;case cf:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td}var t=0!==(b&4),J=!t&&"scroll"===a,x=t?null!==h?h+"Capture":null:h;t=[];for(var w=d,u;null!==
w;){u=w;var F=u.stateNode;5===u.tag&&null!==F&&(u=F,null!==x&&(F=Kb(w,x),null!=F&&t.push(tf(w,F,u))));if(J)break;w=w.return}0<t.length&&(h=new k(h,n,null,c,e),g.push({event:h,listeners:t}))}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&c!==wb&&(n=c.relatedTarget||c.fromElement)&&(Wc(n)||n[uf]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(n=c.relatedTarget||c.toElement,k=d,n=n?Wc(n):null,null!==
n&&(J=Vb(n),n!==J||5!==n.tag&&6!==n.tag))n=null}else k=null,n=d;if(k!==n){t=Bd;F="onMouseLeave";x="onMouseEnter";w="mouse";if("pointerout"===a||"pointerover"===a)t=Td,F="onPointerLeave",x="onPointerEnter",w="pointer";J=null==k?h:ue(k);u=null==n?h:ue(n);h=new t(F,w+"leave",k,c,e);h.target=J;h.relatedTarget=u;F=null;Wc(e)===d&&(t=new t(x,w+"enter",n,c,e),t.target=u,t.relatedTarget=J,F=t);J=F;if(k&&n)b:{t=k;x=n;w=0;for(u=t;u;u=vf(u))w++;u=0;for(F=x;F;F=vf(F))u++;for(;0<w-u;)t=vf(t),w--;for(;0<u-w;)x=
vf(x),u--;for(;w--;){if(t===x||null!==x&&t===x.alternate)break b;t=vf(t);x=vf(x)}t=null}else t=null;null!==k&&wf(g,h,k,t,!1);null!==n&&null!==J&&wf(g,J,n,t,!0)}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var na=ve;else if(me(h))if(we)na=Fe;else{na=De;var xa=Ce}else(k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(na=Ee);if(na&&(na=na(a,d))){ne(g,na,c,e);break a}xa&&xa(a,h,d);"focusout"===a&&(xa=h._wrapperState)&&
xa.controlled&&"number"===h.type&&cb(h,"number",h.value)}xa=d?ue(d):window;switch(a){case "focusin":if(me(xa)||"true"===xa.contentEditable)Qe=xa,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=!0;break;case "contextmenu":case "mouseup":case "dragend":Te=!1;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e)}var $a;if(ae)b:{switch(a){case "compositionstart":var ba="onCompositionStart";break b;case "compositionend":ba="onCompositionEnd";
break b;case "compositionupdate":ba="onCompositionUpdate";break b}ba=void 0}else ie?ge(a,c)&&(ba="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(ba="onCompositionStart");ba&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==ba?"onCompositionEnd"===ba&&ie&&($a=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=!0)),xa=oe(d,ba),0<xa.length&&(ba=new Ld(ba,a,null,c,e),g.push({event:ba,listeners:xa}),$a?ba.data=$a:($a=he(c),null!==$a&&(ba.data=$a))));if($a=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),
0<d.length&&(e=new Ld("onBeforeInput","beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=$a)}se(g,b)})}function tf(a,b,c){return{instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Kb(a,c),null!=f&&d.unshift(tf(a,f,e)),f=Kb(a,b),null!=f&&d.push(tf(a,f,e)));a=a.return}return d}function vf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
function wf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Kb(c,f),null!=k&&g.unshift(tf(c,k,h))):e||(k=Kb(c,f),null!=k&&g.push(tf(c,k,h))));c=c.return}0!==g.length&&a.push({event:b,listeners:g})}var xf=/\r\n?/g,yf=/\u0000|\uFFFD/g;function zf(a){return("string"===typeof a?a:""+a).replace(xf,"\n").replace(yf,"")}function Af(a,b,c){b=zf(b);if(zf(a)!==b&&c)throw Error(p(425));}function Bf(){}
var Cf=null,Df=null;function Ef(a,b){return"textarea"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}
var Ff="function"===typeof setTimeout?setTimeout:void 0,Gf="function"===typeof clearTimeout?clearTimeout:void 0,Hf="function"===typeof Promise?Promise:void 0,Jf="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof Hf?function(a){return Hf.resolve(null).then(a).catch(If)}:Ff;function If(a){setTimeout(function(){throw a;})}
function Kf(a,b){var c=b,d=0;do{var e=c.nextSibling;a.removeChild(c);if(e&&8===e.nodeType)if(c=e.data,"/$"===c){if(0===d){a.removeChild(e);bd(b);return}d--}else"$"!==c&&"$?"!==c&&"$!"!==c||d++;c=e}while(c);bd(b)}function Lf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break;if(8===b){b=a.data;if("$"===b||"$!"===b||"$?"===b)break;if("/$"===b)return null}}return a}
function Mf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--}else"/$"===c&&b++}a=a.previousSibling}return null}var Nf=Math.random().toString(36).slice(2),Of="__reactFiber$"+Nf,Pf="__reactProps$"+Nf,uf="__reactContainer$"+Nf,of="__reactEvents$"+Nf,Qf="__reactListeners$"+Nf,Rf="__reactHandles$"+Nf;
function Wc(a){var b=a[Of];if(b)return b;for(var c=a.parentNode;c;){if(b=c[uf]||c[Of]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Mf(a);null!==a;){if(c=a[Of])return c;a=Mf(a)}return b}a=c;c=a.parentNode}return null}function Cb(a){a=a[Of]||a[uf];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(p(33));}function Db(a){return a[Pf]||null}var Sf=[],Tf=-1;function Uf(a){return{current:a}}
function E(a){0>Tf||(a.current=Sf[Tf],Sf[Tf]=null,Tf--)}function G(a,b){Tf++;Sf[Tf]=a.current;a.current=b}var Vf={},H=Uf(Vf),Wf=Uf(!1),Xf=Vf;function Yf(a,b){var c=a.type.contextTypes;if(!c)return Vf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}
function Zf(a){a=a.childContextTypes;return null!==a&&void 0!==a}function $f(){E(Wf);E(H)}function ag(a,b,c){if(H.current!==Vf)throw Error(p(168));G(H,b);G(Wf,c)}function bg(a,b,c){var d=a.stateNode;b=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in b))throw Error(p(108,Ra(a)||"Unknown",e));return A({},c,d)}
function cg(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Vf;Xf=H.current;G(H,a);G(Wf,Wf.current);return!0}function dg(a,b,c){var d=a.stateNode;if(!d)throw Error(p(169));c?(a=bg(a,b,Xf),d.__reactInternalMemoizedMergedChildContext=a,E(Wf),E(H),G(H,a)):E(Wf);G(Wf,c)}var eg=null,fg=!1,gg=!1;function hg(a){null===eg?eg=[a]:eg.push(a)}function ig(a){fg=!0;hg(a)}
function jg(){if(!gg&&null!==eg){gg=!0;var a=0,b=C;try{var c=eg;for(C=1;a<c.length;a++){var d=c[a];do d=d(!0);while(null!==d)}eg=null;fg=!1}catch(e){throw null!==eg&&(eg=eg.slice(a+1)),ac(fc,jg),e;}finally{C=b,gg=!1}}return null}var kg=[],lg=0,mg=null,ng=0,og=[],pg=0,qg=null,rg=1,sg="";function tg(a,b){kg[lg++]=ng;kg[lg++]=mg;mg=a;ng=b}
function ug(a,b,c){og[pg++]=rg;og[pg++]=sg;og[pg++]=qg;qg=a;var d=rg;a=sg;var e=32-oc(d)-1;d&=~(1<<e);c+=1;var f=32-oc(b)+e;if(30<f){var g=e-e%5;f=(d&(1<<g)-1).toString(32);d>>=g;e-=g;rg=1<<32-oc(b)+e|c<<e|d;sg=f+a}else rg=1<<f|c<<e|d,sg=a}function vg(a){null!==a.return&&(tg(a,1),ug(a,1,0))}function wg(a){for(;a===mg;)mg=kg[--lg],kg[lg]=null,ng=kg[--lg],kg[lg]=null;for(;a===qg;)qg=og[--pg],og[pg]=null,sg=og[--pg],og[pg]=null,rg=og[--pg],og[pg]=null}var xg=null,yg=null,I=!1,zg=null;
function Ag(a,b){var c=Bg(5,null,null,0);c.elementType="DELETED";c.stateNode=b;c.return=a;b=a.deletions;null===b?(a.deletions=[c],a.flags|=16):b.push(c)}
function Cg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,xg=a,yg=Lf(b.firstChild),!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,xg=a,yg=null,!0):!1;case 13:return b=8!==b.nodeType?null:b,null!==b?(c=null!==qg?{id:rg,overflow:sg}:null,a.memoizedState={dehydrated:b,treeContext:c,retryLane:1073741824},c=Bg(18,null,null,0),c.stateNode=b,c.return=a,a.child=c,xg=a,yg=
null,!0):!1;default:return!1}}function Dg(a){return 0!==(a.mode&1)&&0===(a.flags&128)}function Eg(a){if(I){var b=yg;if(b){var c=b;if(!Cg(a,b)){if(Dg(a))throw Error(p(418));b=Lf(c.nextSibling);var d=xg;b&&Cg(a,b)?Ag(d,c):(a.flags=a.flags&-4097|2,I=!1,xg=a)}}else{if(Dg(a))throw Error(p(418));a.flags=a.flags&-4097|2;I=!1;xg=a}}}function Fg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;xg=a}
function Gg(a){if(a!==xg)return!1;if(!I)return Fg(a),I=!0,!1;var b;(b=3!==a.tag)&&!(b=5!==a.tag)&&(b=a.type,b="head"!==b&&"body"!==b&&!Ef(a.type,a.memoizedProps));if(b&&(b=yg)){if(Dg(a))throw Hg(),Error(p(418));for(;b;)Ag(a,b),b=Lf(b.nextSibling)}Fg(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(p(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){yg=Lf(a.nextSibling);break a}b--}else"$"!==c&&"$!"!==c&&"$?"!==c||b++}a=a.nextSibling}yg=
null}}else yg=xg?Lf(a.stateNode.nextSibling):null;return!0}function Hg(){for(var a=yg;a;)a=Lf(a.nextSibling)}function Ig(){yg=xg=null;I=!1}function Jg(a){null===zg?zg=[a]:zg.push(a)}var Kg=ua.ReactCurrentBatchConfig;function Lg(a,b){if(a&&a.defaultProps){b=A({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}var Mg=Uf(null),Ng=null,Og=null,Pg=null;function Qg(){Pg=Og=Ng=null}function Rg(a){var b=Mg.current;E(Mg);a._currentValue=b}
function Sg(a,b,c){for(;null!==a;){var d=a.alternate;(a.childLanes&b)!==b?(a.childLanes|=b,null!==d&&(d.childLanes|=b)):null!==d&&(d.childLanes&b)!==b&&(d.childLanes|=b);if(a===c)break;a=a.return}}function Tg(a,b){Ng=a;Pg=Og=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(Ug=!0),a.firstContext=null)}
function Vg(a){var b=a._currentValue;if(Pg!==a)if(a={context:a,memoizedValue:b,next:null},null===Og){if(null===Ng)throw Error(p(308));Og=a;Ng.dependencies={lanes:0,firstContext:a}}else Og=Og.next=a;return b}var Wg=null;function Xg(a){null===Wg?Wg=[a]:Wg.push(a)}function Yg(a,b,c,d){var e=b.interleaved;null===e?(c.next=c,Xg(b)):(c.next=e.next,e.next=c);b.interleaved=c;return Zg(a,d)}
function Zg(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}var $g=!1;function ah(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}
function bh(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function ch(a,b){return{eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}
function dh(a,b,c){var d=a.updateQueue;if(null===d)return null;d=d.shared;if(0!==(K&2)){var e=d.pending;null===e?b.next=b:(b.next=e.next,e.next=b);d.pending=b;return Zg(a,c)}e=d.interleaved;null===e?(b.next=b,Xg(d)):(b.next=e.next,e.next=b);d.interleaved=b;return Zg(a,c)}function eh(a,b,c){b=b.updateQueue;if(null!==b&&(b=b.shared,0!==(c&4194240))){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c)}}
function fh(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next}while(null!==c);null===f?e=f=b:f=f.next=b}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
b;c.lastBaseUpdate=b}
function gh(a,b,c,d){var e=a.updateQueue;$g=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var m=a.alternate;null!==m&&(m=m.updateQueue,h=m.lastBaseUpdate,h!==g&&(null===h?m.firstBaseUpdate=l:h.next=l,m.lastBaseUpdate=k))}if(null!==f){var q=e.baseState;g=0;m=l=k=null;h=f;do{var r=h.lane,y=h.eventTime;if((d&r)===r){null!==m&&(m=m.next={eventTime:y,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,
next:null});a:{var n=a,t=h;r=b;y=c;switch(t.tag){case 1:n=t.payload;if("function"===typeof n){q=n.call(y,q,r);break a}q=n;break a;case 3:n.flags=n.flags&-65537|128;case 0:n=t.payload;r="function"===typeof n?n.call(y,q,r):n;if(null===r||void 0===r)break a;q=A({},q,r);break a;case 2:$g=!0}}null!==h.callback&&0!==h.lane&&(a.flags|=64,r=e.effects,null===r?e.effects=[h]:r.push(h))}else y={eventTime:y,lane:r,tag:h.tag,payload:h.payload,callback:h.callback,next:null},null===m?(l=m=y,k=q):m=m.next=y,g|=r;
h=h.next;if(null===h)if(h=e.shared.pending,null===h)break;else r=h,h=r.next,r.next=null,e.lastBaseUpdate=r,e.shared.pending=null}while(1);null===m&&(k=q);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=m;b=e.shared.interleaved;if(null!==b){e=b;do g|=e.lane,e=e.next;while(e!==b)}else null===f&&(e.shared.lanes=0);hh|=g;a.lanes=g;a.memoizedState=q}}
function ih(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(p(191,e));e.call(d)}}}var jh=(new aa.Component).refs;function kh(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:A({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c)}
var nh={isMounted:function(a){return(a=a._reactInternals)?Vb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=L(),e=lh(a),f=ch(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=dh(a,f,e);null!==b&&(mh(b,a,e,d),eh(b,a,e))},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=L(),e=lh(a),f=ch(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=dh(a,f,e);null!==b&&(mh(b,a,e,d),eh(b,a,e))},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=L(),d=
lh(a),e=ch(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=b);b=dh(a,e,d);null!==b&&(mh(b,a,d,c),eh(b,a,d))}};function oh(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Ie(c,d)||!Ie(e,f):!0}
function ph(a,b,c){var d=!1,e=Vf;var f=b.contextType;"object"===typeof f&&null!==f?f=Vg(f):(e=Zf(b)?Xf:H.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Yf(a,e):Vf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=nh;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function qh(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&nh.enqueueReplaceState(b,b.state,null)}
function rh(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=jh;ah(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=Vg(f):(f=Zf(b)?Xf:H.current,e.context=Yf(a,f));e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(kh(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,
"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&nh.enqueueReplaceState(e,e.state,null),gh(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4194308)}
function sh(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(p(309));var d=c.stateNode}if(!d)throw Error(p(147,a));var e=d,f=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===f)return b.ref;b=function(a){var b=e.refs;b===jh&&(b=e.refs={});null===a?delete b[f]:b[f]=a};b._stringRef=f;return b}if("string"!==typeof a)throw Error(p(284));if(!c._owner)throw Error(p(290,a));}return a}
function th(a,b){a=Object.prototype.toString.call(b);throw Error(p(31,"[object Object]"===a?"object with keys {"+Object.keys(b).join(", ")+"}":a));}function uh(a){var b=a._init;return b(a._payload)}
function vh(a){function b(b,c){if(a){var d=b.deletions;null===d?(b.deletions=[c],b.flags|=16):d.push(c)}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=wh(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return b.flags|=1048576,c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags|=2,c):d;b.flags|=2;return c}function g(b){a&&
null===b.alternate&&(b.flags|=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=xh(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){var f=c.type;if(f===ya)return m(a,b,c.props.children,d,c.key);if(null!==b&&(b.elementType===f||"object"===typeof f&&null!==f&&f.$$typeof===Ha&&uh(f)===b.type))return d=e(b,c.props),d.ref=sh(a,b,c),d.return=a,d;d=yh(c.type,c.key,c.props,null,a.mode,d);d.ref=sh(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||
b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=zh(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Ah(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function q(a,b,c){if("string"===typeof b&&""!==b||"number"===typeof b)return b=xh(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case va:return c=yh(b.type,b.key,b.props,null,a.mode,c),
c.ref=sh(a,null,b),c.return=a,c;case wa:return b=zh(b,a.mode,c),b.return=a,b;case Ha:var d=b._init;return q(a,d(b._payload),c)}if(eb(b)||Ka(b))return b=Ah(b,a.mode,c,null),b.return=a,b;th(a,b)}return null}function r(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c&&""!==c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case va:return c.key===e?k(a,b,c,d):null;case wa:return c.key===e?l(a,b,c,d):null;case Ha:return e=c._init,r(a,
b,e(c._payload),d)}if(eb(c)||Ka(c))return null!==e?null:m(a,b,c,d,null);th(a,c)}return null}function y(a,b,c,d,e){if("string"===typeof d&&""!==d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case va:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e);case wa:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e);case Ha:var f=d._init;return y(a,b,c,f(d._payload),e)}if(eb(d)||Ka(d))return a=a.get(c)||null,m(b,a,d,e,null);th(b,d)}return null}
function n(e,g,h,k){for(var l=null,m=null,u=g,w=g=0,x=null;null!==u&&w<h.length;w++){u.index>w?(x=u,u=null):x=u.sibling;var n=r(e,u,h[w],k);if(null===n){null===u&&(u=x);break}a&&u&&null===n.alternate&&b(e,u);g=f(n,g,w);null===m?l=n:m.sibling=n;m=n;u=x}if(w===h.length)return c(e,u),I&&tg(e,w),l;if(null===u){for(;w<h.length;w++)u=q(e,h[w],k),null!==u&&(g=f(u,g,w),null===m?l=u:m.sibling=u,m=u);I&&tg(e,w);return l}for(u=d(e,u);w<h.length;w++)x=y(u,e,w,h[w],k),null!==x&&(a&&null!==x.alternate&&u.delete(null===
x.key?w:x.key),g=f(x,g,w),null===m?l=x:m.sibling=x,m=x);a&&u.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function t(e,g,h,k){var l=Ka(h);if("function"!==typeof l)throw Error(p(150));h=l.call(h);if(null==h)throw Error(p(151));for(var u=l=null,m=g,w=g=0,x=null,n=h.next();null!==m&&!n.done;w++,n=h.next()){m.index>w?(x=m,m=null):x=m.sibling;var t=r(e,m,n.value,k);if(null===t){null===m&&(m=x);break}a&&m&&null===t.alternate&&b(e,m);g=f(t,g,w);null===u?l=t:u.sibling=t;u=t;m=x}if(n.done)return c(e,
m),I&&tg(e,w),l;if(null===m){for(;!n.done;w++,n=h.next())n=q(e,n.value,k),null!==n&&(g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);I&&tg(e,w);return l}for(m=d(e,m);!n.done;w++,n=h.next())n=y(m,e,w,n.value,k),null!==n&&(a&&null!==n.alternate&&m.delete(null===n.key?w:n.key),g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);a&&m.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function J(a,d,f,h){"object"===typeof f&&null!==f&&f.type===ya&&null===f.key&&(f=f.props.children);if("object"===typeof f&&null!==f){switch(f.$$typeof){case va:a:{for(var k=
f.key,l=d;null!==l;){if(l.key===k){k=f.type;if(k===ya){if(7===l.tag){c(a,l.sibling);d=e(l,f.props.children);d.return=a;a=d;break a}}else if(l.elementType===k||"object"===typeof k&&null!==k&&k.$$typeof===Ha&&uh(k)===l.type){c(a,l.sibling);d=e(l,f.props);d.ref=sh(a,l,f);d.return=a;a=d;break a}c(a,l);break}else b(a,l);l=l.sibling}f.type===ya?(d=Ah(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=yh(f.type,f.key,f.props,null,a.mode,h),h.ref=sh(a,d,f),h.return=a,a=h)}return g(a);case wa:a:{for(l=f.key;null!==
d;){if(d.key===l)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=zh(f,a.mode,h);d.return=a;a=d}return g(a);case Ha:return l=f._init,J(a,d,l(f._payload),h)}if(eb(f))return n(a,d,f,h);if(Ka(f))return t(a,d,f,h);th(a,f)}return"string"===typeof f&&""!==f||"number"===typeof f?(f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):
(c(a,d),d=xh(f,a.mode,h),d.return=a,a=d),g(a)):c(a,d)}return J}var Bh=vh(!0),Ch=vh(!1),Dh={},Eh=Uf(Dh),Fh=Uf(Dh),Gh=Uf(Dh);function Hh(a){if(a===Dh)throw Error(p(174));return a}function Ih(a,b){G(Gh,b);G(Fh,a);G(Eh,Dh);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:lb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=lb(b,a)}E(Eh);G(Eh,b)}function Jh(){E(Eh);E(Fh);E(Gh)}
function Kh(a){Hh(Gh.current);var b=Hh(Eh.current);var c=lb(b,a.type);b!==c&&(G(Fh,a),G(Eh,c))}function Lh(a){Fh.current===a&&(E(Eh),E(Fh))}var M=Uf(0);
function Mh(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&128))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}var Nh=[];
function Oh(){for(var a=0;a<Nh.length;a++)Nh[a]._workInProgressVersionPrimary=null;Nh.length=0}var Ph=ua.ReactCurrentDispatcher,Qh=ua.ReactCurrentBatchConfig,Rh=0,N=null,O=null,P=null,Sh=!1,Th=!1,Uh=0,Vh=0;function Q(){throw Error(p(321));}function Wh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return!1;return!0}
function Xh(a,b,c,d,e,f){Rh=f;N=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;Ph.current=null===a||null===a.memoizedState?Yh:Zh;a=c(d,e);if(Th){f=0;do{Th=!1;Uh=0;if(25<=f)throw Error(p(301));f+=1;P=O=null;b.updateQueue=null;Ph.current=$h;a=c(d,e)}while(Th)}Ph.current=ai;b=null!==O&&null!==O.next;Rh=0;P=O=N=null;Sh=!1;if(b)throw Error(p(300));return a}function bi(){var a=0!==Uh;Uh=0;return a}
function ci(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===P?N.memoizedState=P=a:P=P.next=a;return P}function di(){if(null===O){var a=N.alternate;a=null!==a?a.memoizedState:null}else a=O.next;var b=null===P?N.memoizedState:P.next;if(null!==b)P=b,O=a;else{if(null===a)throw Error(p(310));O=a;a={memoizedState:O.memoizedState,baseState:O.baseState,baseQueue:O.baseQueue,queue:O.queue,next:null};null===P?N.memoizedState=P=a:P=P.next=a}return P}
function ei(a,b){return"function"===typeof b?b(a):b}
function fi(a){var b=di(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=O,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){f=e.next;d=d.baseState;var h=g=null,k=null,l=f;do{var m=l.lane;if((Rh&m)===m)null!==k&&(k=k.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),d=l.hasEagerState?l.eagerState:a(d,l.action);else{var q={lane:m,action:l.action,hasEagerState:l.hasEagerState,
eagerState:l.eagerState,next:null};null===k?(h=k=q,g=d):k=k.next=q;N.lanes|=m;hh|=m}l=l.next}while(null!==l&&l!==f);null===k?g=d:k.next=h;He(d,b.memoizedState)||(Ug=!0);b.memoizedState=d;b.baseState=g;b.baseQueue=k;c.lastRenderedState=d}a=c.interleaved;if(null!==a){e=a;do f=e.lane,N.lanes|=f,hh|=f,e=e.next;while(e!==a)}else null===e&&(c.lanes=0);return[b.memoizedState,c.dispatch]}
function gi(a){var b=di(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(Ug=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}function hi(){}
function ii(a,b){var c=N,d=di(),e=b(),f=!He(d.memoizedState,e);f&&(d.memoizedState=e,Ug=!0);d=d.queue;ji(ki.bind(null,c,d,a),[a]);if(d.getSnapshot!==b||f||null!==P&&P.memoizedState.tag&1){c.flags|=2048;li(9,mi.bind(null,c,d,e,b),void 0,null);if(null===R)throw Error(p(349));0!==(Rh&30)||ni(c,b,e)}return e}function ni(a,b,c){a.flags|=16384;a={getSnapshot:b,value:c};b=N.updateQueue;null===b?(b={lastEffect:null,stores:null},N.updateQueue=b,b.stores=[a]):(c=b.stores,null===c?b.stores=[a]:c.push(a))}
function mi(a,b,c,d){b.value=c;b.getSnapshot=d;oi(b)&&pi(a)}function ki(a,b,c){return c(function(){oi(b)&&pi(a)})}function oi(a){var b=a.getSnapshot;a=a.value;try{var c=b();return!He(a,c)}catch(d){return!0}}function pi(a){var b=Zg(a,1);null!==b&&mh(b,a,1,-1)}
function qi(a){var b=ci();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ei,lastRenderedState:a};b.queue=a;a=a.dispatch=ri.bind(null,N,a);return[b.memoizedState,a]}
function li(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=N.updateQueue;null===b?(b={lastEffect:null,stores:null},N.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function si(){return di().memoizedState}function ti(a,b,c,d){var e=ci();N.flags|=a;e.memoizedState=li(1|b,c,void 0,void 0===d?null:d)}
function ui(a,b,c,d){var e=di();d=void 0===d?null:d;var f=void 0;if(null!==O){var g=O.memoizedState;f=g.destroy;if(null!==d&&Wh(d,g.deps)){e.memoizedState=li(b,c,f,d);return}}N.flags|=a;e.memoizedState=li(1|b,c,f,d)}function vi(a,b){return ti(8390656,8,a,b)}function ji(a,b){return ui(2048,8,a,b)}function wi(a,b){return ui(4,2,a,b)}function xi(a,b){return ui(4,4,a,b)}
function yi(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function zi(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ui(4,4,yi.bind(null,b,a),c)}function Ai(){}function Bi(a,b){var c=di();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Wh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
function Ci(a,b){var c=di();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Wh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function Di(a,b,c){if(0===(Rh&21))return a.baseState&&(a.baseState=!1,Ug=!0),a.memoizedState=c;He(c,b)||(c=yc(),N.lanes|=c,hh|=c,a.baseState=!0);return b}function Ei(a,b){var c=C;C=0!==c&&4>c?c:4;a(!0);var d=Qh.transition;Qh.transition={};try{a(!1),b()}finally{C=c,Qh.transition=d}}function Fi(){return di().memoizedState}
function Gi(a,b,c){var d=lh(a);c={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(Hi(a))Ii(b,c);else if(c=Yg(a,b,c,d),null!==c){var e=L();mh(c,a,d,e);Ji(c,b,d)}}
function ri(a,b,c){var d=lh(a),e={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(Hi(a))Ii(b,e);else{var f=a.alternate;if(0===a.lanes&&(null===f||0===f.lanes)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.hasEagerState=!0;e.eagerState=h;if(He(h,g)){var k=b.interleaved;null===k?(e.next=e,Xg(b)):(e.next=k.next,k.next=e);b.interleaved=e;return}}catch(l){}finally{}c=Yg(a,b,e,d);null!==c&&(e=L(),mh(c,a,d,e),Ji(c,b,d))}}
function Hi(a){var b=a.alternate;return a===N||null!==b&&b===N}function Ii(a,b){Th=Sh=!0;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}function Ji(a,b,c){if(0!==(c&4194240)){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c)}}
var ai={readContext:Vg,useCallback:Q,useContext:Q,useEffect:Q,useImperativeHandle:Q,useInsertionEffect:Q,useLayoutEffect:Q,useMemo:Q,useReducer:Q,useRef:Q,useState:Q,useDebugValue:Q,useDeferredValue:Q,useTransition:Q,useMutableSource:Q,useSyncExternalStore:Q,useId:Q,unstable_isNewReconciler:!1},Yh={readContext:Vg,useCallback:function(a,b){ci().memoizedState=[a,void 0===b?null:b];return a},useContext:Vg,useEffect:vi,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ti(4194308,
4,yi.bind(null,b,a),c)},useLayoutEffect:function(a,b){return ti(4194308,4,a,b)},useInsertionEffect:function(a,b){return ti(4,2,a,b)},useMemo:function(a,b){var c=ci();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=ci();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};d.queue=a;a=a.dispatch=Gi.bind(null,N,a);return[d.memoizedState,a]},useRef:function(a){var b=
ci();a={current:a};return b.memoizedState=a},useState:qi,useDebugValue:Ai,useDeferredValue:function(a){return ci().memoizedState=a},useTransition:function(){var a=qi(!1),b=a[0];a=Ei.bind(null,a[1]);ci().memoizedState=a;return[b,a]},useMutableSource:function(){},useSyncExternalStore:function(a,b,c){var d=N,e=ci();if(I){if(void 0===c)throw Error(p(407));c=c()}else{c=b();if(null===R)throw Error(p(349));0!==(Rh&30)||ni(d,b,c)}e.memoizedState=c;var f={value:c,getSnapshot:b};e.queue=f;vi(ki.bind(null,d,
f,a),[a]);d.flags|=2048;li(9,mi.bind(null,d,f,c,b),void 0,null);return c},useId:function(){var a=ci(),b=R.identifierPrefix;if(I){var c=sg;var d=rg;c=(d&~(1<<32-oc(d)-1)).toString(32)+c;b=":"+b+"R"+c;c=Uh++;0<c&&(b+="H"+c.toString(32));b+=":"}else c=Vh++,b=":"+b+"r"+c.toString(32)+":";return a.memoizedState=b},unstable_isNewReconciler:!1},Zh={readContext:Vg,useCallback:Bi,useContext:Vg,useEffect:ji,useImperativeHandle:zi,useInsertionEffect:wi,useLayoutEffect:xi,useMemo:Ci,useReducer:fi,useRef:si,useState:function(){return fi(ei)},
useDebugValue:Ai,useDeferredValue:function(a){var b=di();return Di(b,O.memoizedState,a)},useTransition:function(){var a=fi(ei)[0],b=di().memoizedState;return[a,b]},useMutableSource:hi,useSyncExternalStore:ii,useId:Fi,unstable_isNewReconciler:!1},$h={readContext:Vg,useCallback:Bi,useContext:Vg,useEffect:ji,useImperativeHandle:zi,useInsertionEffect:wi,useLayoutEffect:xi,useMemo:Ci,useReducer:gi,useRef:si,useState:function(){return gi(ei)},useDebugValue:Ai,useDeferredValue:function(a){var b=di();return null===
O?b.memoizedState=a:Di(b,O.memoizedState,a)},useTransition:function(){var a=gi(ei)[0],b=di().memoizedState;return[a,b]},useMutableSource:hi,useSyncExternalStore:ii,useId:Fi,unstable_isNewReconciler:!1};function Ki(a,b){try{var c="",d=b;do c+=Pa(d),d=d.return;while(d);var e=c}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack}return{value:a,source:b,stack:e,digest:null}}function Li(a,b,c){return{value:a,source:null,stack:null!=c?c:null,digest:null!=b?b:null}}
function Mi(a,b){try{console.error(b.value)}catch(c){setTimeout(function(){throw c;})}}var Ni="function"===typeof WeakMap?WeakMap:Map;function Oi(a,b,c){c=ch(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Pi||(Pi=!0,Qi=d);Mi(a,b)};return c}
function Ri(a,b,c){c=ch(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)};c.callback=function(){Mi(a,b)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){Mi(a,b);"function"!==typeof d&&(null===Si?Si=new Set([this]):Si.add(this));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}
function Ti(a,b,c){var d=a.pingCache;if(null===d){d=a.pingCache=new Ni;var e=new Set;d.set(b,e)}else e=d.get(b),void 0===e&&(e=new Set,d.set(b,e));e.has(c)||(e.add(c),a=Ui.bind(null,a,b,c),b.then(a,a))}function Vi(a){do{var b;if(b=13===a.tag)b=a.memoizedState,b=null!==b?null!==b.dehydrated?!0:!1:!0;if(b)return a;a=a.return}while(null!==a);return null}
function Wi(a,b,c,d,e){if(0===(a.mode&1))return a===b?a.flags|=65536:(a.flags|=128,c.flags|=131072,c.flags&=-52805,1===c.tag&&(null===c.alternate?c.tag=17:(b=ch(-1,1),b.tag=2,dh(c,b,1))),c.lanes|=1),a;a.flags|=65536;a.lanes=e;return a}var Xi=ua.ReactCurrentOwner,Ug=!1;function Yi(a,b,c,d){b.child=null===a?Ch(b,null,c,d):Bh(b,a.child,c,d)}
function Zi(a,b,c,d,e){c=c.render;var f=b.ref;Tg(b,e);d=Xh(a,b,c,d,f,e);c=bi();if(null!==a&&!Ug)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,$i(a,b,e);I&&c&&vg(b);b.flags|=1;Yi(a,b,d,e);return b.child}
function aj(a,b,c,d,e){if(null===a){var f=c.type;if("function"===typeof f&&!bj(f)&&void 0===f.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=f,cj(a,b,f,d,e);a=yh(c.type,null,d,b,b.mode,e);a.ref=b.ref;a.return=b;return b.child=a}f=a.child;if(0===(a.lanes&e)){var g=f.memoizedProps;c=c.compare;c=null!==c?c:Ie;if(c(g,d)&&a.ref===b.ref)return $i(a,b,e)}b.flags|=1;a=wh(f,d);a.ref=b.ref;a.return=b;return b.child=a}
function cj(a,b,c,d,e){if(null!==a){var f=a.memoizedProps;if(Ie(f,d)&&a.ref===b.ref)if(Ug=!1,b.pendingProps=d=f,0!==(a.lanes&e))0!==(a.flags&131072)&&(Ug=!0);else return b.lanes=a.lanes,$i(a,b,e)}return dj(a,b,c,d,e)}
function ej(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode)if(0===(b.mode&1))b.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(fj,gj),gj|=c;else{if(0===(c&1073741824))return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a,cachePool:null,transitions:null},b.updateQueue=null,G(fj,gj),gj|=a,null;b.memoizedState={baseLanes:0,cachePool:null,transitions:null};d=null!==f?f.baseLanes:c;G(fj,gj);gj|=d}else null!==
f?(d=f.baseLanes|c,b.memoizedState=null):d=c,G(fj,gj),gj|=d;Yi(a,b,e,c);return b.child}function hj(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=512,b.flags|=2097152}function dj(a,b,c,d,e){var f=Zf(c)?Xf:H.current;f=Yf(b,f);Tg(b,e);c=Xh(a,b,c,d,f,e);d=bi();if(null!==a&&!Ug)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,$i(a,b,e);I&&d&&vg(b);b.flags|=1;Yi(a,b,c,e);return b.child}
function ij(a,b,c,d,e){if(Zf(c)){var f=!0;cg(b)}else f=!1;Tg(b,e);if(null===b.stateNode)jj(a,b),ph(b,c,d),rh(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=Vg(l):(l=Zf(c)?Xf:H.current,l=Yf(b,l));var m=c.getDerivedStateFromProps,q="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;q||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||
(h!==d||k!==l)&&qh(b,g,d,l);$g=!1;var r=b.memoizedState;g.state=r;gh(b,d,g,e);k=b.memoizedState;h!==d||r!==k||Wf.current||$g?("function"===typeof m&&(kh(b,c,m,d),k=b.memoizedState),(h=$g||oh(b,c,h,d,r,k,l))?(q||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.flags|=4194308)):
("function"===typeof g.componentDidMount&&(b.flags|=4194308),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4194308),d=!1)}else{g=b.stateNode;bh(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:Lg(b.type,h);g.props=l;q=b.pendingProps;r=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=Vg(k):(k=Zf(c)?Xf:H.current,k=Yf(b,k));var y=c.getDerivedStateFromProps;(m="function"===typeof y||"function"===typeof g.getSnapshotBeforeUpdate)||
"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==q||r!==k)&&qh(b,g,d,k);$g=!1;r=b.memoizedState;g.state=r;gh(b,d,g,e);var n=b.memoizedState;h!==q||r!==n||Wf.current||$g?("function"===typeof y&&(kh(b,c,y,d),n=b.memoizedState),(l=$g||oh(b,c,l,d,r,n,k)||!1)?(m||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,n,k),"function"===typeof g.UNSAFE_componentWillUpdate&&
g.UNSAFE_componentWillUpdate(d,n,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=1024)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),b.memoizedProps=d,b.memoizedState=n),g.props=d,g.state=n,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===
a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),d=!1)}return kj(a,b,c,d,f,e)}
function kj(a,b,c,d,e,f){hj(a,b);var g=0!==(b.flags&128);if(!d&&!g)return e&&dg(b,c,!1),$i(a,b,f);d=b.stateNode;Xi.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Bh(b,a.child,null,f),b.child=Bh(b,null,h,f)):Yi(a,b,h,f);b.memoizedState=d.state;e&&dg(b,c,!0);return b.child}function lj(a){var b=a.stateNode;b.pendingContext?ag(a,b.pendingContext,b.pendingContext!==b.context):b.context&&ag(a,b.context,!1);Ih(a,b.containerInfo)}
function mj(a,b,c,d,e){Ig();Jg(e);b.flags|=256;Yi(a,b,c,d);return b.child}var nj={dehydrated:null,treeContext:null,retryLane:0};function oj(a){return{baseLanes:a,cachePool:null,transitions:null}}
function pj(a,b,c){var d=b.pendingProps,e=M.current,f=!1,g=0!==(b.flags&128),h;(h=g)||(h=null!==a&&null===a.memoizedState?!1:0!==(e&2));if(h)f=!0,b.flags&=-129;else if(null===a||null!==a.memoizedState)e|=1;G(M,e&1);if(null===a){Eg(b);a=b.memoizedState;if(null!==a&&(a=a.dehydrated,null!==a))return 0===(b.mode&1)?b.lanes=1:"$!"===a.data?b.lanes=8:b.lanes=1073741824,null;g=d.children;a=d.fallback;return f?(d=b.mode,f=b.child,g={mode:"hidden",children:g},0===(d&1)&&null!==f?(f.childLanes=0,f.pendingProps=
g):f=qj(g,d,0,null),a=Ah(a,d,c,null),f.return=b,a.return=b,f.sibling=a,b.child=f,b.child.memoizedState=oj(c),b.memoizedState=nj,a):rj(b,g)}e=a.memoizedState;if(null!==e&&(h=e.dehydrated,null!==h))return sj(a,b,g,d,h,e,c);if(f){f=d.fallback;g=b.mode;e=a.child;h=e.sibling;var k={mode:"hidden",children:d.children};0===(g&1)&&b.child!==e?(d=b.child,d.childLanes=0,d.pendingProps=k,b.deletions=null):(d=wh(e,k),d.subtreeFlags=e.subtreeFlags&14680064);null!==h?f=wh(h,f):(f=Ah(f,g,c,null),f.flags|=2);f.return=
b;d.return=b;d.sibling=f;b.child=d;d=f;f=b.child;g=a.child.memoizedState;g=null===g?oj(c):{baseLanes:g.baseLanes|c,cachePool:null,transitions:g.transitions};f.memoizedState=g;f.childLanes=a.childLanes&~c;b.memoizedState=nj;return d}f=a.child;a=f.sibling;d=wh(f,{mode:"visible",children:d.children});0===(b.mode&1)&&(d.lanes=c);d.return=b;d.sibling=null;null!==a&&(c=b.deletions,null===c?(b.deletions=[a],b.flags|=16):c.push(a));b.child=d;b.memoizedState=null;return d}
function rj(a,b){b=qj({mode:"visible",children:b},a.mode,0,null);b.return=a;return a.child=b}function tj(a,b,c,d){null!==d&&Jg(d);Bh(b,a.child,null,c);a=rj(b,b.pendingProps.children);a.flags|=2;b.memoizedState=null;return a}
function sj(a,b,c,d,e,f,g){if(c){if(b.flags&256)return b.flags&=-257,d=Li(Error(p(422))),tj(a,b,g,d);if(null!==b.memoizedState)return b.child=a.child,b.flags|=128,null;f=d.fallback;e=b.mode;d=qj({mode:"visible",children:d.children},e,0,null);f=Ah(f,e,g,null);f.flags|=2;d.return=b;f.return=b;d.sibling=f;b.child=d;0!==(b.mode&1)&&Bh(b,a.child,null,g);b.child.memoizedState=oj(g);b.memoizedState=nj;return f}if(0===(b.mode&1))return tj(a,b,g,null);if("$!"===e.data){d=e.nextSibling&&e.nextSibling.dataset;
if(d)var h=d.dgst;d=h;f=Error(p(419));d=Li(f,d,void 0);return tj(a,b,g,d)}h=0!==(g&a.childLanes);if(Ug||h){d=R;if(null!==d){switch(g&-g){case 4:e=2;break;case 16:e=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:e=32;break;case 536870912:e=268435456;break;default:e=0}e=0!==(e&(d.suspendedLanes|g))?0:e;
0!==e&&e!==f.retryLane&&(f.retryLane=e,Zg(a,e),mh(d,a,e,-1))}uj();d=Li(Error(p(421)));return tj(a,b,g,d)}if("$?"===e.data)return b.flags|=128,b.child=a.child,b=vj.bind(null,a),e._reactRetry=b,null;a=f.treeContext;yg=Lf(e.nextSibling);xg=b;I=!0;zg=null;null!==a&&(og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,rg=a.id,sg=a.overflow,qg=b);b=rj(b,d.children);b.flags|=4096;return b}function wj(a,b,c){a.lanes|=b;var d=a.alternate;null!==d&&(d.lanes|=b);Sg(a.return,b,c)}
function xj(a,b,c,d,e){var f=a.memoizedState;null===f?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e}:(f.isBackwards=b,f.rendering=null,f.renderingStartTime=0,f.last=d,f.tail=c,f.tailMode=e)}
function yj(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;Yi(a,b,d.children,c);d=M.current;if(0!==(d&2))d=d&1|2,b.flags|=128;else{if(null!==a&&0!==(a.flags&128))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&wj(a,c,b);else if(19===a.tag)wj(a,c,b);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}G(M,d);if(0===(b.mode&1))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===Mh(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);xj(b,!1,e,c,f);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===Mh(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}xj(b,!0,c,null,f);break;case "together":xj(b,!1,null,null,void 0);break;default:b.memoizedState=null}return b.child}
function jj(a,b){0===(b.mode&1)&&null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2)}function $i(a,b,c){null!==a&&(b.dependencies=a.dependencies);hh|=b.lanes;if(0===(c&b.childLanes))return null;if(null!==a&&b.child!==a.child)throw Error(p(153));if(null!==b.child){a=b.child;c=wh(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=wh(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}
function zj(a,b,c){switch(b.tag){case 3:lj(b);Ig();break;case 5:Kh(b);break;case 1:Zf(b.type)&&cg(b);break;case 4:Ih(b,b.stateNode.containerInfo);break;case 10:var d=b.type._context,e=b.memoizedProps.value;G(Mg,d._currentValue);d._currentValue=e;break;case 13:d=b.memoizedState;if(null!==d){if(null!==d.dehydrated)return G(M,M.current&1),b.flags|=128,null;if(0!==(c&b.child.childLanes))return pj(a,b,c);G(M,M.current&1);a=$i(a,b,c);return null!==a?a.sibling:null}G(M,M.current&1);break;case 19:d=0!==(c&
b.childLanes);if(0!==(a.flags&128)){if(d)return yj(a,b,c);b.flags|=128}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);G(M,M.current);if(d)break;else return null;case 22:case 23:return b.lanes=0,ej(a,b,c)}return $i(a,b,c)}var Aj,Bj,Cj,Dj;
Aj=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Bj=function(){};
Cj=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;Hh(Eh.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "select":e=A({},e,{value:void 0});d=A({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=Bf)}ub(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&
(c||(c={}),c[g]="")}else"dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ea.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||(c={}),c[g]=k[g])}else c||(f||(f=[]),f.push(l,
c)),c=k;else"dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ea.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&D("scroll",a),f||h===k||(f=[])):(f=f||[]).push(l,k))}c&&(f=f||[]).push("style",c);var l=f;if(b.updateQueue=l)b.flags|=4}};Dj=function(a,b,c,d){c!==d&&(b.flags|=4)};
function Ej(a,b){if(!I)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function S(a){var b=null!==a.alternate&&a.alternate.child===a.child,c=0,d=0;if(b)for(var e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags&14680064,d|=e.flags&14680064,e.return=a,e=e.sibling;else for(e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags,d|=e.flags,e.return=a,e=e.sibling;a.subtreeFlags|=d;a.childLanes=c;return b}
function Fj(a,b,c){var d=b.pendingProps;wg(b);switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return S(b),null;case 1:return Zf(b.type)&&$f(),S(b),null;case 3:d=b.stateNode;Jh();E(Wf);E(H);Oh();d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)Gg(b)?b.flags|=4:null===a||a.memoizedState.isDehydrated&&0===(b.flags&256)||(b.flags|=1024,null!==zg&&(Gj(zg),zg=null));Bj(a,b);S(b);return null;case 5:Lh(b);var e=Hh(Gh.current);
c=b.type;if(null!==a&&null!=b.stateNode)Cj(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=512,b.flags|=2097152);else{if(!d){if(null===b.stateNode)throw Error(p(166));S(b);return null}a=Hh(Eh.current);if(Gg(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[Of]=b;d[Pf]=f;a=0!==(b.mode&1);switch(c){case "dialog":D("cancel",d);D("close",d);break;case "iframe":case "object":case "embed":D("load",d);break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],d);break;case "source":D("error",d);break;case "img":case "image":case "link":D("error",
d);D("load",d);break;case "details":D("toggle",d);break;case "input":Za(d,f);D("invalid",d);break;case "select":d._wrapperState={wasMultiple:!!f.multiple};D("invalid",d);break;case "textarea":hb(d,f),D("invalid",d)}ub(c,f);e=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,h,a),e=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,
h,a),e=["children",""+h]):ea.hasOwnProperty(g)&&null!=h&&"onScroll"===g&&D("scroll",d)}switch(c){case "input":Va(d);db(d,f,!0);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=Bf)}d=e;b.updateQueue=d;null!==d&&(b.flags|=4)}else{g=9===e.nodeType?e:e.ownerDocument;"http://www.w3.org/1999/xhtml"===a&&(a=kb(c));"http://www.w3.org/1999/xhtml"===a?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):
"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[Of]=b;a[Pf]=d;Aj(a,b,!1,!1);b.stateNode=a;a:{g=vb(c,d);switch(c){case "dialog":D("cancel",a);D("close",a);e=d;break;case "iframe":case "object":case "embed":D("load",a);e=d;break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],a);e=d;break;case "source":D("error",a);e=d;break;case "img":case "image":case "link":D("error",
a);D("load",a);e=d;break;case "details":D("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);D("invalid",a);break;case "option":e=d;break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=A({},d,{value:void 0});D("invalid",a);break;case "textarea":hb(a,d);e=gb(a,d);D("invalid",a);break;default:e=d}ub(c,e);h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?sb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&nb(a,k)):"children"===f?"string"===typeof k?("textarea"!==
c||""!==k)&&ob(a,k):"number"===typeof k&&ob(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ea.hasOwnProperty(f)?null!=k&&"onScroll"===f&&D("scroll",a):null!=k&&ta(a,f,k,g))}switch(c){case "input":Va(a);db(a,d,!1);break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,
!0);break;default:"function"===typeof e.onClick&&(a.onclick=Bf)}switch(c){case "button":case "input":case "select":case "textarea":d=!!d.autoFocus;break a;case "img":d=!0;break a;default:d=!1}}d&&(b.flags|=4)}null!==b.ref&&(b.flags|=512,b.flags|=2097152)}S(b);return null;case 6:if(a&&null!=b.stateNode)Dj(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(p(166));c=Hh(Gh.current);Hh(Eh.current);if(Gg(b)){d=b.stateNode;c=b.memoizedProps;d[Of]=b;if(f=d.nodeValue!==c)if(a=
xg,null!==a)switch(a.tag){case 3:Af(d.nodeValue,c,0!==(a.mode&1));break;case 5:!0!==a.memoizedProps.suppressHydrationWarning&&Af(d.nodeValue,c,0!==(a.mode&1))}f&&(b.flags|=4)}else d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[Of]=b,b.stateNode=d}S(b);return null;case 13:E(M);d=b.memoizedState;if(null===a||null!==a.memoizedState&&null!==a.memoizedState.dehydrated){if(I&&null!==yg&&0!==(b.mode&1)&&0===(b.flags&128))Hg(),Ig(),b.flags|=98560,f=!1;else if(f=Gg(b),null!==d&&null!==d.dehydrated){if(null===
a){if(!f)throw Error(p(318));f=b.memoizedState;f=null!==f?f.dehydrated:null;if(!f)throw Error(p(317));f[Of]=b}else Ig(),0===(b.flags&128)&&(b.memoizedState=null),b.flags|=4;S(b);f=!1}else null!==zg&&(Gj(zg),zg=null),f=!0;if(!f)return b.flags&65536?b:null}if(0!==(b.flags&128))return b.lanes=c,b;d=null!==d;d!==(null!==a&&null!==a.memoizedState)&&d&&(b.child.flags|=8192,0!==(b.mode&1)&&(null===a||0!==(M.current&1)?0===T&&(T=3):uj()));null!==b.updateQueue&&(b.flags|=4);S(b);return null;case 4:return Jh(),
Bj(a,b),null===a&&sf(b.stateNode.containerInfo),S(b),null;case 10:return Rg(b.type._context),S(b),null;case 17:return Zf(b.type)&&$f(),S(b),null;case 19:E(M);f=b.memoizedState;if(null===f)return S(b),null;d=0!==(b.flags&128);g=f.rendering;if(null===g)if(d)Ej(f,!1);else{if(0!==T||null!==a&&0!==(a.flags&128))for(a=b.child;null!==a;){g=Mh(a);if(null!==g){b.flags|=128;Ej(f,!1);d=g.updateQueue;null!==d&&(b.updateQueue=d,b.flags|=4);b.subtreeFlags=0;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=14680066,
g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;G(M,M.current&1|2);return b.child}a=
a.sibling}null!==f.tail&&B()>Hj&&(b.flags|=128,d=!0,Ej(f,!1),b.lanes=4194304)}else{if(!d)if(a=Mh(g),null!==a){if(b.flags|=128,d=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Ej(f,!0),null===f.tail&&"hidden"===f.tailMode&&!g.alternate&&!I)return S(b),null}else 2*B()-f.renderingStartTime>Hj&&1073741824!==c&&(b.flags|=128,d=!0,Ej(f,!1),b.lanes=4194304);f.isBackwards?(g.sibling=b.child,b.child=g):(c=f.last,null!==c?c.sibling=g:b.child=g,f.last=g)}if(null!==f.tail)return b=f.tail,f.rendering=
b,f.tail=b.sibling,f.renderingStartTime=B(),b.sibling=null,c=M.current,G(M,d?c&1|2:c&1),b;S(b);return null;case 22:case 23:return Ij(),d=null!==b.memoizedState,null!==a&&null!==a.memoizedState!==d&&(b.flags|=8192),d&&0!==(b.mode&1)?0!==(gj&1073741824)&&(S(b),b.subtreeFlags&6&&(b.flags|=8192)):S(b),null;case 24:return null;case 25:return null}throw Error(p(156,b.tag));}
function Jj(a,b){wg(b);switch(b.tag){case 1:return Zf(b.type)&&$f(),a=b.flags,a&65536?(b.flags=a&-65537|128,b):null;case 3:return Jh(),E(Wf),E(H),Oh(),a=b.flags,0!==(a&65536)&&0===(a&128)?(b.flags=a&-65537|128,b):null;case 5:return Lh(b),null;case 13:E(M);a=b.memoizedState;if(null!==a&&null!==a.dehydrated){if(null===b.alternate)throw Error(p(340));Ig()}a=b.flags;return a&65536?(b.flags=a&-65537|128,b):null;case 19:return E(M),null;case 4:return Jh(),null;case 10:return Rg(b.type._context),null;case 22:case 23:return Ij(),
null;case 24:return null;default:return null}}var Kj=!1,U=!1,Lj="function"===typeof WeakSet?WeakSet:Set,V=null;function Mj(a,b){var c=a.ref;if(null!==c)if("function"===typeof c)try{c(null)}catch(d){W(a,b,d)}else c.current=null}function Nj(a,b,c){try{c()}catch(d){W(a,b,d)}}var Oj=!1;
function Pj(a,b){Cf=dd;a=Me();if(Ne(a)){if("selectionStart"in a)var c={start:a.selectionStart,end:a.selectionEnd};else a:{c=(c=a.ownerDocument)&&c.defaultView||window;var d=c.getSelection&&c.getSelection();if(d&&0!==d.rangeCount){c=d.anchorNode;var e=d.anchorOffset,f=d.focusNode;d=d.focusOffset;try{c.nodeType,f.nodeType}catch(F){c=null;break a}var g=0,h=-1,k=-1,l=0,m=0,q=a,r=null;b:for(;;){for(var y;;){q!==c||0!==e&&3!==q.nodeType||(h=g+e);q!==f||0!==d&&3!==q.nodeType||(k=g+d);3===q.nodeType&&(g+=
q.nodeValue.length);if(null===(y=q.firstChild))break;r=q;q=y}for(;;){if(q===a)break b;r===c&&++l===e&&(h=g);r===f&&++m===d&&(k=g);if(null!==(y=q.nextSibling))break;q=r;r=q.parentNode}q=y}c=-1===h||-1===k?null:{start:h,end:k}}else c=null}c=c||{start:0,end:0}}else c=null;Df={focusedElem:a,selectionRange:c};dd=!1;for(V=b;null!==V;)if(b=V,a=b.child,0!==(b.subtreeFlags&1028)&&null!==a)a.return=b,V=a;else for(;null!==V;){b=V;try{var n=b.alternate;if(0!==(b.flags&1024))switch(b.tag){case 0:case 11:case 15:break;
case 1:if(null!==n){var t=n.memoizedProps,J=n.memoizedState,x=b.stateNode,w=x.getSnapshotBeforeUpdate(b.elementType===b.type?t:Lg(b.type,t),J);x.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var u=b.stateNode.containerInfo;1===u.nodeType?u.textContent="":9===u.nodeType&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163));}}catch(F){W(b,b.return,F)}a=b.sibling;if(null!==a){a.return=b.return;V=a;break}V=b.return}n=Oj;Oj=!1;return n}
function Qj(a,b,c){var d=b.updateQueue;d=null!==d?d.lastEffect:null;if(null!==d){var e=d=d.next;do{if((e.tag&a)===a){var f=e.destroy;e.destroy=void 0;void 0!==f&&Nj(b,c,f)}e=e.next}while(e!==d)}}function Rj(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d()}c=c.next}while(c!==b)}}function Sj(a){var b=a.ref;if(null!==b){var c=a.stateNode;switch(a.tag){case 5:a=c;break;default:a=c}"function"===typeof b?b(a):b.current=a}}
function Tj(a){var b=a.alternate;null!==b&&(a.alternate=null,Tj(b));a.child=null;a.deletions=null;a.sibling=null;5===a.tag&&(b=a.stateNode,null!==b&&(delete b[Of],delete b[Pf],delete b[of],delete b[Qf],delete b[Rf]));a.stateNode=null;a.return=null;a.dependencies=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.stateNode=null;a.updateQueue=null}function Uj(a){return 5===a.tag||3===a.tag||4===a.tag}
function Vj(a){a:for(;;){for(;null===a.sibling;){if(null===a.return||Uj(a.return))return null;a=a.return}a.sibling.return=a.return;for(a=a.sibling;5!==a.tag&&6!==a.tag&&18!==a.tag;){if(a.flags&2)continue a;if(null===a.child||4===a.tag)continue a;else a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}
function Wj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=Bf));else if(4!==d&&(a=a.child,null!==a))for(Wj(a,b,c),a=a.sibling;null!==a;)Wj(a,b,c),a=a.sibling}
function Xj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Xj(a,b,c),a=a.sibling;null!==a;)Xj(a,b,c),a=a.sibling}var X=null,Yj=!1;function Zj(a,b,c){for(c=c.child;null!==c;)ak(a,b,c),c=c.sibling}
function ak(a,b,c){if(lc&&"function"===typeof lc.onCommitFiberUnmount)try{lc.onCommitFiberUnmount(kc,c)}catch(h){}switch(c.tag){case 5:U||Mj(c,b);case 6:var d=X,e=Yj;X=null;Zj(a,b,c);X=d;Yj=e;null!==X&&(Yj?(a=X,c=c.stateNode,8===a.nodeType?a.parentNode.removeChild(c):a.removeChild(c)):X.removeChild(c.stateNode));break;case 18:null!==X&&(Yj?(a=X,c=c.stateNode,8===a.nodeType?Kf(a.parentNode,c):1===a.nodeType&&Kf(a,c),bd(a)):Kf(X,c.stateNode));break;case 4:d=X;e=Yj;X=c.stateNode.containerInfo;Yj=!0;
Zj(a,b,c);X=d;Yj=e;break;case 0:case 11:case 14:case 15:if(!U&&(d=c.updateQueue,null!==d&&(d=d.lastEffect,null!==d))){e=d=d.next;do{var f=e,g=f.destroy;f=f.tag;void 0!==g&&(0!==(f&2)?Nj(c,b,g):0!==(f&4)&&Nj(c,b,g));e=e.next}while(e!==d)}Zj(a,b,c);break;case 1:if(!U&&(Mj(c,b),d=c.stateNode,"function"===typeof d.componentWillUnmount))try{d.props=c.memoizedProps,d.state=c.memoizedState,d.componentWillUnmount()}catch(h){W(c,b,h)}Zj(a,b,c);break;case 21:Zj(a,b,c);break;case 22:c.mode&1?(U=(d=U)||null!==
c.memoizedState,Zj(a,b,c),U=d):Zj(a,b,c);break;default:Zj(a,b,c)}}function bk(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Lj);b.forEach(function(b){var d=ck.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
function dk(a,b){var c=b.deletions;if(null!==c)for(var d=0;d<c.length;d++){var e=c[d];try{var f=a,g=b,h=g;a:for(;null!==h;){switch(h.tag){case 5:X=h.stateNode;Yj=!1;break a;case 3:X=h.stateNode.containerInfo;Yj=!0;break a;case 4:X=h.stateNode.containerInfo;Yj=!0;break a}h=h.return}if(null===X)throw Error(p(160));ak(f,g,e);X=null;Yj=!1;var k=e.alternate;null!==k&&(k.return=null);e.return=null}catch(l){W(e,b,l)}}if(b.subtreeFlags&12854)for(b=b.child;null!==b;)ek(b,a),b=b.sibling}
function ek(a,b){var c=a.alternate,d=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:dk(b,a);fk(a);if(d&4){try{Qj(3,a,a.return),Rj(3,a)}catch(t){W(a,a.return,t)}try{Qj(5,a,a.return)}catch(t){W(a,a.return,t)}}break;case 1:dk(b,a);fk(a);d&512&&null!==c&&Mj(c,c.return);break;case 5:dk(b,a);fk(a);d&512&&null!==c&&Mj(c,c.return);if(a.flags&32){var e=a.stateNode;try{ob(e,"")}catch(t){W(a,a.return,t)}}if(d&4&&(e=a.stateNode,null!=e)){var f=a.memoizedProps,g=null!==c?c.memoizedProps:f,h=a.type,k=a.updateQueue;
a.updateQueue=null;if(null!==k)try{"input"===h&&"radio"===f.type&&null!=f.name&&ab(e,f);vb(h,g);var l=vb(h,f);for(g=0;g<k.length;g+=2){var m=k[g],q=k[g+1];"style"===m?sb(e,q):"dangerouslySetInnerHTML"===m?nb(e,q):"children"===m?ob(e,q):ta(e,m,q,l)}switch(h){case "input":bb(e,f);break;case "textarea":ib(e,f);break;case "select":var r=e._wrapperState.wasMultiple;e._wrapperState.wasMultiple=!!f.multiple;var y=f.value;null!=y?fb(e,!!f.multiple,y,!1):r!==!!f.multiple&&(null!=f.defaultValue?fb(e,!!f.multiple,
f.defaultValue,!0):fb(e,!!f.multiple,f.multiple?[]:"",!1))}e[Pf]=f}catch(t){W(a,a.return,t)}}break;case 6:dk(b,a);fk(a);if(d&4){if(null===a.stateNode)throw Error(p(162));e=a.stateNode;f=a.memoizedProps;try{e.nodeValue=f}catch(t){W(a,a.return,t)}}break;case 3:dk(b,a);fk(a);if(d&4&&null!==c&&c.memoizedState.isDehydrated)try{bd(b.containerInfo)}catch(t){W(a,a.return,t)}break;case 4:dk(b,a);fk(a);break;case 13:dk(b,a);fk(a);e=a.child;e.flags&8192&&(f=null!==e.memoizedState,e.stateNode.isHidden=f,!f||
null!==e.alternate&&null!==e.alternate.memoizedState||(gk=B()));d&4&&bk(a);break;case 22:m=null!==c&&null!==c.memoizedState;a.mode&1?(U=(l=U)||m,dk(b,a),U=l):dk(b,a);fk(a);if(d&8192){l=null!==a.memoizedState;if((a.stateNode.isHidden=l)&&!m&&0!==(a.mode&1))for(V=a,m=a.child;null!==m;){for(q=V=m;null!==V;){r=V;y=r.child;switch(r.tag){case 0:case 11:case 14:case 15:Qj(4,r,r.return);break;case 1:Mj(r,r.return);var n=r.stateNode;if("function"===typeof n.componentWillUnmount){d=r;c=r.return;try{b=d,n.props=
b.memoizedProps,n.state=b.memoizedState,n.componentWillUnmount()}catch(t){W(d,c,t)}}break;case 5:Mj(r,r.return);break;case 22:if(null!==r.memoizedState){hk(q);continue}}null!==y?(y.return=r,V=y):hk(q)}m=m.sibling}a:for(m=null,q=a;;){if(5===q.tag){if(null===m){m=q;try{e=q.stateNode,l?(f=e.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(h=q.stateNode,k=q.memoizedProps.style,g=void 0!==k&&null!==k&&k.hasOwnProperty("display")?k.display:null,h.style.display=
rb("display",g))}catch(t){W(a,a.return,t)}}}else if(6===q.tag){if(null===m)try{q.stateNode.nodeValue=l?"":q.memoizedProps}catch(t){W(a,a.return,t)}}else if((22!==q.tag&&23!==q.tag||null===q.memoizedState||q===a)&&null!==q.child){q.child.return=q;q=q.child;continue}if(q===a)break a;for(;null===q.sibling;){if(null===q.return||q.return===a)break a;m===q&&(m=null);q=q.return}m===q&&(m=null);q.sibling.return=q.return;q=q.sibling}}break;case 19:dk(b,a);fk(a);d&4&&bk(a);break;case 21:break;default:dk(b,
a),fk(a)}}function fk(a){var b=a.flags;if(b&2){try{a:{for(var c=a.return;null!==c;){if(Uj(c)){var d=c;break a}c=c.return}throw Error(p(160));}switch(d.tag){case 5:var e=d.stateNode;d.flags&32&&(ob(e,""),d.flags&=-33);var f=Vj(a);Xj(a,f,e);break;case 3:case 4:var g=d.stateNode.containerInfo,h=Vj(a);Wj(a,h,g);break;default:throw Error(p(161));}}catch(k){W(a,a.return,k)}a.flags&=-3}b&4096&&(a.flags&=-4097)}function ik(a,b,c){V=a;jk(a,b,c)}
function jk(a,b,c){for(var d=0!==(a.mode&1);null!==V;){var e=V,f=e.child;if(22===e.tag&&d){var g=null!==e.memoizedState||Kj;if(!g){var h=e.alternate,k=null!==h&&null!==h.memoizedState||U;h=Kj;var l=U;Kj=g;if((U=k)&&!l)for(V=e;null!==V;)g=V,k=g.child,22===g.tag&&null!==g.memoizedState?kk(e):null!==k?(k.return=g,V=k):kk(e);for(;null!==f;)V=f,jk(f,b,c),f=f.sibling;V=e;Kj=h;U=l}lk(a,b,c)}else 0!==(e.subtreeFlags&8772)&&null!==f?(f.return=e,V=f):lk(a,b,c)}}
function lk(a){for(;null!==V;){var b=V;if(0!==(b.flags&8772)){var c=b.alternate;try{if(0!==(b.flags&8772))switch(b.tag){case 0:case 11:case 15:U||Rj(5,b);break;case 1:var d=b.stateNode;if(b.flags&4&&!U)if(null===c)d.componentDidMount();else{var e=b.elementType===b.type?c.memoizedProps:Lg(b.type,c.memoizedProps);d.componentDidUpdate(e,c.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var f=b.updateQueue;null!==f&&ih(b,f,d);break;case 3:var g=b.updateQueue;if(null!==g){c=null;if(null!==b.child)switch(b.child.tag){case 5:c=
b.child.stateNode;break;case 1:c=b.child.stateNode}ih(b,g,c)}break;case 5:var h=b.stateNode;if(null===c&&b.flags&4){c=h;var k=b.memoizedProps;switch(b.type){case "button":case "input":case "select":case "textarea":k.autoFocus&&c.focus();break;case "img":k.src&&(c.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(null===b.memoizedState){var l=b.alternate;if(null!==l){var m=l.memoizedState;if(null!==m){var q=m.dehydrated;null!==q&&bd(q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;
default:throw Error(p(163));}U||b.flags&512&&Sj(b)}catch(r){W(b,b.return,r)}}if(b===a){V=null;break}c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return}}function hk(a){for(;null!==V;){var b=V;if(b===a){V=null;break}var c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return}}
function kk(a){for(;null!==V;){var b=V;try{switch(b.tag){case 0:case 11:case 15:var c=b.return;try{Rj(4,b)}catch(k){W(b,c,k)}break;case 1:var d=b.stateNode;if("function"===typeof d.componentDidMount){var e=b.return;try{d.componentDidMount()}catch(k){W(b,e,k)}}var f=b.return;try{Sj(b)}catch(k){W(b,f,k)}break;case 5:var g=b.return;try{Sj(b)}catch(k){W(b,g,k)}}}catch(k){W(b,b.return,k)}if(b===a){V=null;break}var h=b.sibling;if(null!==h){h.return=b.return;V=h;break}V=b.return}}
var mk=Math.ceil,nk=ua.ReactCurrentDispatcher,ok=ua.ReactCurrentOwner,pk=ua.ReactCurrentBatchConfig,K=0,R=null,Y=null,Z=0,gj=0,fj=Uf(0),T=0,qk=null,hh=0,rk=0,sk=0,tk=null,uk=null,gk=0,Hj=Infinity,vk=null,Pi=!1,Qi=null,Si=null,wk=!1,xk=null,yk=0,zk=0,Ak=null,Bk=-1,Ck=0;function L(){return 0!==(K&6)?B():-1!==Bk?Bk:Bk=B()}
function lh(a){if(0===(a.mode&1))return 1;if(0!==(K&2)&&0!==Z)return Z&-Z;if(null!==Kg.transition)return 0===Ck&&(Ck=yc()),Ck;a=C;if(0!==a)return a;a=window.event;a=void 0===a?16:jd(a.type);return a}function mh(a,b,c,d){if(50<zk)throw zk=0,Ak=null,Error(p(185));Ac(a,c,d);if(0===(K&2)||a!==R)a===R&&(0===(K&2)&&(rk|=c),4===T&&Dk(a,Z)),Ek(a,d),1===c&&0===K&&0===(b.mode&1)&&(Hj=B()+500,fg&&jg())}
function Ek(a,b){var c=a.callbackNode;wc(a,b);var d=uc(a,a===R?Z:0);if(0===d)null!==c&&bc(c),a.callbackNode=null,a.callbackPriority=0;else if(b=d&-d,a.callbackPriority!==b){null!=c&&bc(c);if(1===b)0===a.tag?ig(Fk.bind(null,a)):hg(Fk.bind(null,a)),Jf(function(){0===(K&6)&&jg()}),c=null;else{switch(Dc(d)){case 1:c=fc;break;case 4:c=gc;break;case 16:c=hc;break;case 536870912:c=jc;break;default:c=hc}c=Gk(c,Hk.bind(null,a))}a.callbackPriority=b;a.callbackNode=c}}
function Hk(a,b){Bk=-1;Ck=0;if(0!==(K&6))throw Error(p(327));var c=a.callbackNode;if(Ik()&&a.callbackNode!==c)return null;var d=uc(a,a===R?Z:0);if(0===d)return null;if(0!==(d&30)||0!==(d&a.expiredLanes)||b)b=Jk(a,d);else{b=d;var e=K;K|=2;var f=Kk();if(R!==a||Z!==b)vk=null,Hj=B()+500,Lk(a,b);do try{Mk();break}catch(h){Nk(a,h)}while(1);Qg();nk.current=f;K=e;null!==Y?b=0:(R=null,Z=0,b=T)}if(0!==b){2===b&&(e=xc(a),0!==e&&(d=e,b=Ok(a,e)));if(1===b)throw c=qk,Lk(a,0),Dk(a,d),Ek(a,B()),c;if(6===b)Dk(a,d);
else{e=a.current.alternate;if(0===(d&30)&&!Pk(e)&&(b=Jk(a,d),2===b&&(f=xc(a),0!==f&&(d=f,b=Ok(a,f))),1===b))throw c=qk,Lk(a,0),Dk(a,d),Ek(a,B()),c;a.finishedWork=e;a.finishedLanes=d;switch(b){case 0:case 1:throw Error(p(345));case 2:Qk(a,uk,vk);break;case 3:Dk(a,d);if((d&130023424)===d&&(b=gk+500-B(),10<b)){if(0!==uc(a,0))break;e=a.suspendedLanes;if((e&d)!==d){L();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=Ff(Qk.bind(null,a,uk,vk),b);break}Qk(a,uk,vk);break;case 4:Dk(a,d);if((d&4194240)===
d)break;b=a.eventTimes;for(e=-1;0<d;){var g=31-oc(d);f=1<<g;g=b[g];g>e&&(e=g);d&=~f}d=e;d=B()-d;d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*mk(d/1960))-d;if(10<d){a.timeoutHandle=Ff(Qk.bind(null,a,uk,vk),d);break}Qk(a,uk,vk);break;case 5:Qk(a,uk,vk);break;default:throw Error(p(329));}}}Ek(a,B());return a.callbackNode===c?Hk.bind(null,a):null}
function Ok(a,b){var c=tk;a.current.memoizedState.isDehydrated&&(Lk(a,b).flags|=256);a=Jk(a,b);2!==a&&(b=uk,uk=c,null!==b&&Gj(b));return a}function Gj(a){null===uk?uk=a:uk.push.apply(uk,a)}
function Pk(a){for(var b=a;;){if(b.flags&16384){var c=b.updateQueue;if(null!==c&&(c=c.stores,null!==c))for(var d=0;d<c.length;d++){var e=c[d],f=e.getSnapshot;e=e.value;try{if(!He(f(),e))return!1}catch(g){return!1}}}c=b.child;if(b.subtreeFlags&16384&&null!==c)c.return=b,b=c;else{if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return!0;b=b.return}b.sibling.return=b.return;b=b.sibling}}return!0}
function Dk(a,b){b&=~sk;b&=~rk;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-oc(b),d=1<<c;a[c]=-1;b&=~d}}function Fk(a){if(0!==(K&6))throw Error(p(327));Ik();var b=uc(a,0);if(0===(b&1))return Ek(a,B()),null;var c=Jk(a,b);if(0!==a.tag&&2===c){var d=xc(a);0!==d&&(b=d,c=Ok(a,d))}if(1===c)throw c=qk,Lk(a,0),Dk(a,b),Ek(a,B()),c;if(6===c)throw Error(p(345));a.finishedWork=a.current.alternate;a.finishedLanes=b;Qk(a,uk,vk);Ek(a,B());return null}
function Rk(a,b){var c=K;K|=1;try{return a(b)}finally{K=c,0===K&&(Hj=B()+500,fg&&jg())}}function Sk(a){null!==xk&&0===xk.tag&&0===(K&6)&&Ik();var b=K;K|=1;var c=pk.transition,d=C;try{if(pk.transition=null,C=1,a)return a()}finally{C=d,pk.transition=c,K=b,0===(K&6)&&jg()}}function Ij(){gj=fj.current;E(fj)}
function Lk(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Gf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;wg(d);switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&$f();break;case 3:Jh();E(Wf);E(H);Oh();break;case 5:Lh(d);break;case 4:Jh();break;case 13:E(M);break;case 19:E(M);break;case 10:Rg(d.type._context);break;case 22:case 23:Ij()}c=c.return}R=a;Y=a=wh(a.current,null);Z=gj=b;T=0;qk=null;sk=rk=hh=0;uk=tk=null;if(null!==Wg){for(b=
0;b<Wg.length;b++)if(c=Wg[b],d=c.interleaved,null!==d){c.interleaved=null;var e=d.next,f=c.pending;if(null!==f){var g=f.next;f.next=e;d.next=g}c.pending=d}Wg=null}return a}
function Nk(a,b){do{var c=Y;try{Qg();Ph.current=ai;if(Sh){for(var d=N.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next}Sh=!1}Rh=0;P=O=N=null;Th=!1;Uh=0;ok.current=null;if(null===c||null===c.return){T=1;qk=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=Z;h.flags|=32768;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k,m=h,q=m.tag;if(0===(m.mode&1)&&(0===q||11===q||15===q)){var r=m.alternate;r?(m.updateQueue=r.updateQueue,m.memoizedState=r.memoizedState,
m.lanes=r.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=Vi(g);if(null!==y){y.flags&=-257;Wi(y,g,h,f,b);y.mode&1&&Ti(f,l,b);b=y;k=l;var n=b.updateQueue;if(null===n){var t=new Set;t.add(k);b.updateQueue=t}else n.add(k);break a}else{if(0===(b&1)){Ti(f,l,b);uj();break a}k=Error(p(426))}}else if(I&&h.mode&1){var J=Vi(g);if(null!==J){0===(J.flags&65536)&&(J.flags|=256);Wi(J,g,h,f,b);Jg(Ki(k,h));break a}}f=k=Ki(k,h);4!==T&&(T=2);null===tk?tk=[f]:tk.push(f);f=g;do{switch(f.tag){case 3:f.flags|=65536;
b&=-b;f.lanes|=b;var x=Oi(f,k,b);fh(f,x);break a;case 1:h=k;var w=f.type,u=f.stateNode;if(0===(f.flags&128)&&("function"===typeof w.getDerivedStateFromError||null!==u&&"function"===typeof u.componentDidCatch&&(null===Si||!Si.has(u)))){f.flags|=65536;b&=-b;f.lanes|=b;var F=Ri(f,h,b);fh(f,F);break a}}f=f.return}while(null!==f)}Tk(c)}catch(na){b=na;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}function Kk(){var a=nk.current;nk.current=ai;return null===a?ai:a}
function uj(){if(0===T||3===T||2===T)T=4;null===R||0===(hh&268435455)&&0===(rk&268435455)||Dk(R,Z)}function Jk(a,b){var c=K;K|=2;var d=Kk();if(R!==a||Z!==b)vk=null,Lk(a,b);do try{Uk();break}catch(e){Nk(a,e)}while(1);Qg();K=c;nk.current=d;if(null!==Y)throw Error(p(261));R=null;Z=0;return T}function Uk(){for(;null!==Y;)Vk(Y)}function Mk(){for(;null!==Y&&!cc();)Vk(Y)}function Vk(a){var b=Wk(a.alternate,a,gj);a.memoizedProps=a.pendingProps;null===b?Tk(a):Y=b;ok.current=null}
function Tk(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&32768)){if(c=Fj(c,b,gj),null!==c){Y=c;return}}else{c=Jj(c,b);if(null!==c){c.flags&=32767;Y=c;return}if(null!==a)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;else{T=6;Y=null;return}}b=b.sibling;if(null!==b){Y=b;return}Y=b=a}while(null!==b);0===T&&(T=5)}function Qk(a,b,c){var d=C,e=pk.transition;try{pk.transition=null,C=1,Xk(a,b,c,d)}finally{pk.transition=e,C=d}return null}
function Xk(a,b,c,d){do Ik();while(null!==xk);if(0!==(K&6))throw Error(p(327));c=a.finishedWork;var e=a.finishedLanes;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(p(177));a.callbackNode=null;a.callbackPriority=0;var f=c.lanes|c.childLanes;Bc(a,f);a===R&&(Y=R=null,Z=0);0===(c.subtreeFlags&2064)&&0===(c.flags&2064)||wk||(wk=!0,Gk(hc,function(){Ik();return null}));f=0!==(c.flags&15990);if(0!==(c.subtreeFlags&15990)||f){f=pk.transition;pk.transition=null;
var g=C;C=1;var h=K;K|=4;ok.current=null;Pj(a,c);ek(c,a);Oe(Df);dd=!!Cf;Df=Cf=null;a.current=c;ik(c,a,e);dc();K=h;C=g;pk.transition=f}else a.current=c;wk&&(wk=!1,xk=a,yk=e);f=a.pendingLanes;0===f&&(Si=null);mc(c.stateNode,d);Ek(a,B());if(null!==b)for(d=a.onRecoverableError,c=0;c<b.length;c++)e=b[c],d(e.value,{componentStack:e.stack,digest:e.digest});if(Pi)throw Pi=!1,a=Qi,Qi=null,a;0!==(yk&1)&&0!==a.tag&&Ik();f=a.pendingLanes;0!==(f&1)?a===Ak?zk++:(zk=0,Ak=a):zk=0;jg();return null}
function Ik(){if(null!==xk){var a=Dc(yk),b=pk.transition,c=C;try{pk.transition=null;C=16>a?16:a;if(null===xk)var d=!1;else{a=xk;xk=null;yk=0;if(0!==(K&6))throw Error(p(331));var e=K;K|=4;for(V=a.current;null!==V;){var f=V,g=f.child;if(0!==(V.flags&16)){var h=f.deletions;if(null!==h){for(var k=0;k<h.length;k++){var l=h[k];for(V=l;null!==V;){var m=V;switch(m.tag){case 0:case 11:case 15:Qj(8,m,f)}var q=m.child;if(null!==q)q.return=m,V=q;else for(;null!==V;){m=V;var r=m.sibling,y=m.return;Tj(m);if(m===
l){V=null;break}if(null!==r){r.return=y;V=r;break}V=y}}}var n=f.alternate;if(null!==n){var t=n.child;if(null!==t){n.child=null;do{var J=t.sibling;t.sibling=null;t=J}while(null!==t)}}V=f}}if(0!==(f.subtreeFlags&2064)&&null!==g)g.return=f,V=g;else b:for(;null!==V;){f=V;if(0!==(f.flags&2048))switch(f.tag){case 0:case 11:case 15:Qj(9,f,f.return)}var x=f.sibling;if(null!==x){x.return=f.return;V=x;break b}V=f.return}}var w=a.current;for(V=w;null!==V;){g=V;var u=g.child;if(0!==(g.subtreeFlags&2064)&&null!==
u)u.return=g,V=u;else b:for(g=w;null!==V;){h=V;if(0!==(h.flags&2048))try{switch(h.tag){case 0:case 11:case 15:Rj(9,h)}}catch(na){W(h,h.return,na)}if(h===g){V=null;break b}var F=h.sibling;if(null!==F){F.return=h.return;V=F;break b}V=h.return}}K=e;jg();if(lc&&"function"===typeof lc.onPostCommitFiberRoot)try{lc.onPostCommitFiberRoot(kc,a)}catch(na){}d=!0}return d}finally{C=c,pk.transition=b}}return!1}function Yk(a,b,c){b=Ki(c,b);b=Oi(a,b,1);a=dh(a,b,1);b=L();null!==a&&(Ac(a,1,b),Ek(a,b))}
function W(a,b,c){if(3===a.tag)Yk(a,a,c);else for(;null!==b;){if(3===b.tag){Yk(b,a,c);break}else if(1===b.tag){var d=b.stateNode;if("function"===typeof b.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Si||!Si.has(d))){a=Ki(c,a);a=Ri(b,a,1);b=dh(b,a,1);a=L();null!==b&&(Ac(b,1,a),Ek(b,a));break}}b=b.return}}
function Ui(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=L();a.pingedLanes|=a.suspendedLanes&c;R===a&&(Z&c)===c&&(4===T||3===T&&(Z&130023424)===Z&&500>B()-gk?Lk(a,0):sk|=c);Ek(a,b)}function Zk(a,b){0===b&&(0===(a.mode&1)?b=1:(b=sc,sc<<=1,0===(sc&130023424)&&(sc=4194304)));var c=L();a=Zg(a,b);null!==a&&(Ac(a,b,c),Ek(a,c))}function vj(a){var b=a.memoizedState,c=0;null!==b&&(c=b.retryLane);Zk(a,c)}
function ck(a,b){var c=0;switch(a.tag){case 13:var d=a.stateNode;var e=a.memoizedState;null!==e&&(c=e.retryLane);break;case 19:d=a.stateNode;break;default:throw Error(p(314));}null!==d&&d.delete(b);Zk(a,c)}var Wk;
Wk=function(a,b,c){if(null!==a)if(a.memoizedProps!==b.pendingProps||Wf.current)Ug=!0;else{if(0===(a.lanes&c)&&0===(b.flags&128))return Ug=!1,zj(a,b,c);Ug=0!==(a.flags&131072)?!0:!1}else Ug=!1,I&&0!==(b.flags&1048576)&&ug(b,ng,b.index);b.lanes=0;switch(b.tag){case 2:var d=b.type;jj(a,b);a=b.pendingProps;var e=Yf(b,H.current);Tg(b,c);e=Xh(null,b,d,a,e,c);var f=bi();b.flags|=1;"object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof?(b.tag=1,b.memoizedState=null,b.updateQueue=
null,Zf(d)?(f=!0,cg(b)):f=!1,b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null,ah(b),e.updater=nh,b.stateNode=e,e._reactInternals=b,rh(b,d,a,c),b=kj(null,b,d,!0,f,c)):(b.tag=0,I&&f&&vg(b),Yi(null,b,e,c),b=b.child);return b;case 16:d=b.elementType;a:{jj(a,b);a=b.pendingProps;e=d._init;d=e(d._payload);b.type=d;e=b.tag=$k(d);a=Lg(d,a);switch(e){case 0:b=dj(null,b,d,a,c);break a;case 1:b=ij(null,b,d,a,c);break a;case 11:b=Zi(null,b,d,a,c);break a;case 14:b=aj(null,b,d,Lg(d.type,a),c);break a}throw Error(p(306,
d,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Lg(d,e),dj(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Lg(d,e),ij(a,b,d,e,c);case 3:a:{lj(b);if(null===a)throw Error(p(387));d=b.pendingProps;f=b.memoizedState;e=f.element;bh(a,b);gh(b,d,null,c);var g=b.memoizedState;d=g.element;if(f.isDehydrated)if(f={element:d,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},b.updateQueue.baseState=
f,b.memoizedState=f,b.flags&256){e=Ki(Error(p(423)),b);b=mj(a,b,d,c,e);break a}else if(d!==e){e=Ki(Error(p(424)),b);b=mj(a,b,d,c,e);break a}else for(yg=Lf(b.stateNode.containerInfo.firstChild),xg=b,I=!0,zg=null,c=Ch(b,null,d,c),b.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else{Ig();if(d===e){b=$i(a,b,c);break a}Yi(a,b,d,c)}b=b.child}return b;case 5:return Kh(b),null===a&&Eg(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,Ef(d,e)?g=null:null!==f&&Ef(d,f)&&(b.flags|=32),
hj(a,b),Yi(a,b,g,c),b.child;case 6:return null===a&&Eg(b),null;case 13:return pj(a,b,c);case 4:return Ih(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Bh(b,null,d,c):Yi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Lg(d,e),Zi(a,b,d,e,c);case 7:return Yi(a,b,b.pendingProps,c),b.child;case 8:return Yi(a,b,b.pendingProps.children,c),b.child;case 12:return Yi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;f=b.memoizedProps;
g=e.value;G(Mg,d._currentValue);d._currentValue=g;if(null!==f)if(He(f.value,g)){if(f.children===e.children&&!Wf.current){b=$i(a,b,c);break a}}else for(f=b.child,null!==f&&(f.return=b);null!==f;){var h=f.dependencies;if(null!==h){g=f.child;for(var k=h.firstContext;null!==k;){if(k.context===d){if(1===f.tag){k=ch(-1,c&-c);k.tag=2;var l=f.updateQueue;if(null!==l){l=l.shared;var m=l.pending;null===m?k.next=k:(k.next=m.next,m.next=k);l.pending=k}}f.lanes|=c;k=f.alternate;null!==k&&(k.lanes|=c);Sg(f.return,
c,b);h.lanes|=c;break}k=k.next}}else if(10===f.tag)g=f.type===b.type?null:f.child;else if(18===f.tag){g=f.return;if(null===g)throw Error(p(341));g.lanes|=c;h=g.alternate;null!==h&&(h.lanes|=c);Sg(g,c,b);g=f.sibling}else g=f.child;if(null!==g)g.return=f;else for(g=f;null!==g;){if(g===b){g=null;break}f=g.sibling;if(null!==f){f.return=g.return;g=f;break}g=g.return}f=g}Yi(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,d=b.pendingProps.children,Tg(b,c),e=Vg(e),d=d(e),b.flags|=1,Yi(a,b,d,c),
b.child;case 14:return d=b.type,e=Lg(d,b.pendingProps),e=Lg(d.type,e),aj(a,b,d,e,c);case 15:return cj(a,b,b.type,b.pendingProps,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Lg(d,e),jj(a,b),b.tag=1,Zf(d)?(a=!0,cg(b)):a=!1,Tg(b,c),ph(b,d,e),rh(b,d,e,c),kj(null,b,d,!0,a,c);case 19:return yj(a,b,c);case 22:return ej(a,b,c)}throw Error(p(156,b.tag));};function Gk(a,b){return ac(a,b)}
function al(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.subtreeFlags=this.flags=0;this.deletions=null;this.childLanes=this.lanes=0;this.alternate=null}function Bg(a,b,c,d){return new al(a,b,c,d)}function bj(a){a=a.prototype;return!(!a||!a.isReactComponent)}
function $k(a){if("function"===typeof a)return bj(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Da)return 11;if(a===Ga)return 14}return 2}
function wh(a,b){var c=a.alternate;null===c?(c=Bg(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.subtreeFlags=0,c.deletions=null);c.flags=a.flags&14680064;c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function yh(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)bj(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ya:return Ah(c.children,e,f,b);case za:g=8;e|=8;break;case Aa:return a=Bg(12,c,b,e|2),a.elementType=Aa,a.lanes=f,a;case Ea:return a=Bg(13,c,b,e),a.elementType=Ea,a.lanes=f,a;case Fa:return a=Bg(19,c,b,e),a.elementType=Fa,a.lanes=f,a;case Ia:return qj(c,e,f,b);default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case Ba:g=10;break a;case Ca:g=9;break a;case Da:g=11;
break a;case Ga:g=14;break a;case Ha:g=16;d=null;break a}throw Error(p(130,null==a?a:typeof a,""));}b=Bg(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Ah(a,b,c,d){a=Bg(7,a,d,b);a.lanes=c;return a}function qj(a,b,c,d){a=Bg(22,a,d,b);a.elementType=Ia;a.lanes=c;a.stateNode={isHidden:!1};return a}function xh(a,b,c){a=Bg(6,a,null,b);a.lanes=c;return a}
function zh(a,b,c){b=Bg(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function bl(a,b,c,d,e){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.callbackNode=this.pendingContext=this.context=null;this.callbackPriority=0;this.eventTimes=zc(0);this.expirationTimes=zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=zc(0);this.identifierPrefix=d;this.onRecoverableError=e;this.mutableSourceEagerHydrationData=
null}function cl(a,b,c,d,e,f,g,h,k){a=new bl(a,b,c,h,k);1===b?(b=1,!0===f&&(b|=8)):b=0;f=Bg(3,null,null,b);a.current=f;f.stateNode=a;f.memoizedState={element:d,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null};ah(f);return a}function dl(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:wa,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
function el(a){if(!a)return Vf;a=a._reactInternals;a:{if(Vb(a)!==a||1!==a.tag)throw Error(p(170));var b=a;do{switch(b.tag){case 3:b=b.stateNode.context;break a;case 1:if(Zf(b.type)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}}b=b.return}while(null!==b);throw Error(p(171));}if(1===a.tag){var c=a.type;if(Zf(c))return bg(a,c,b)}return b}
function fl(a,b,c,d,e,f,g,h,k){a=cl(c,d,!0,a,e,f,g,h,k);a.context=el(null);c=a.current;d=L();e=lh(c);f=ch(d,e);f.callback=void 0!==b&&null!==b?b:null;dh(c,f,e);a.current.lanes=e;Ac(a,e,d);Ek(a,d);return a}function gl(a,b,c,d){var e=b.current,f=L(),g=lh(e);c=el(c);null===b.context?b.context=c:b.pendingContext=c;b=ch(f,g);b.payload={element:a};d=void 0===d?null:d;null!==d&&(b.callback=d);a=dh(e,b,g);null!==a&&(mh(a,e,g,f),eh(a,e,g));return g}
function hl(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function il(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b}}function jl(a,b){il(a,b);(a=a.alternate)&&il(a,b)}function kl(){return null}var ll="function"===typeof reportError?reportError:function(a){console.error(a)};function ml(a){this._internalRoot=a}
nl.prototype.render=ml.prototype.render=function(a){var b=this._internalRoot;if(null===b)throw Error(p(409));gl(a,b,null,null)};nl.prototype.unmount=ml.prototype.unmount=function(){var a=this._internalRoot;if(null!==a){this._internalRoot=null;var b=a.containerInfo;Sk(function(){gl(null,a,null,null)});b[uf]=null}};function nl(a){this._internalRoot=a}
nl.prototype.unstable_scheduleHydration=function(a){if(a){var b=Hc();a={blockedOn:null,target:a,priority:b};for(var c=0;c<Qc.length&&0!==b&&b<Qc[c].priority;c++);Qc.splice(c,0,a);0===c&&Vc(a)}};function ol(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType)}function pl(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function ql(){}
function rl(a,b,c,d,e){if(e){if("function"===typeof d){var f=d;d=function(){var a=hl(g);f.call(a)}}var g=fl(b,d,a,0,null,!1,!1,"",ql);a._reactRootContainer=g;a[uf]=g.current;sf(8===a.nodeType?a.parentNode:a);Sk();return g}for(;e=a.lastChild;)a.removeChild(e);if("function"===typeof d){var h=d;d=function(){var a=hl(k);h.call(a)}}var k=cl(a,0,!1,null,null,!1,!1,"",ql);a._reactRootContainer=k;a[uf]=k.current;sf(8===a.nodeType?a.parentNode:a);Sk(function(){gl(b,k,c,d)});return k}
function sl(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f;if("function"===typeof e){var h=e;e=function(){var a=hl(g);h.call(a)}}gl(b,g,a,e)}else g=rl(c,b,a,e,d);return hl(g)}Ec=function(a){switch(a.tag){case 3:var b=a.stateNode;if(b.current.memoizedState.isDehydrated){var c=tc(b.pendingLanes);0!==c&&(Cc(b,c|1),Ek(b,B()),0===(K&6)&&(Hj=B()+500,jg()))}break;case 13:Sk(function(){var b=Zg(a,1);if(null!==b){var c=L();mh(b,a,1,c)}}),jl(a,1)}};
Fc=function(a){if(13===a.tag){var b=Zg(a,134217728);if(null!==b){var c=L();mh(b,a,134217728,c)}jl(a,134217728)}};Gc=function(a){if(13===a.tag){var b=lh(a),c=Zg(a,b);if(null!==c){var d=L();mh(c,a,b,d)}jl(a,b)}};Hc=function(){return C};Ic=function(a,b){var c=C;try{return C=a,b()}finally{C=c}};
yb=function(a,b,c){switch(b){case "input":bb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(p(90));Wa(d);bb(d,e)}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1)}};Gb=Rk;Hb=Sk;
var tl={usingClientEntryPoint:!1,Events:[Cb,ue,Db,Eb,Fb,Rk]},ul={findFiberByHostInstance:Wc,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"};
var vl={bundleType:ul.bundleType,version:ul.version,rendererPackageName:ul.rendererPackageName,rendererConfig:ul.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ua.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=Zb(a);return null===a?null:a.stateNode},findFiberByHostInstance:ul.findFiberByHostInstance||
kl,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wl.isDisabled&&wl.supportsFiber)try{kc=wl.inject(vl),lc=wl}catch(a){}}exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tl;
exports.createPortal=function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!ol(b))throw Error(p(200));return dl(a,b,null,c)};exports.createRoot=function(a,b){if(!ol(a))throw Error(p(299));var c=!1,d="",e=ll;null!==b&&void 0!==b&&(!0===b.unstable_strictMode&&(c=!0),void 0!==b.identifierPrefix&&(d=b.identifierPrefix),void 0!==b.onRecoverableError&&(e=b.onRecoverableError));b=cl(a,1,!1,null,null,c,!1,d,e);a[uf]=b.current;sf(8===a.nodeType?a.parentNode:a);return new ml(b)};
exports.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(p(188));a=Object.keys(a).join(",");throw Error(p(268,a));}a=Zb(b);a=null===a?null:a.stateNode;return a};exports.flushSync=function(a){return Sk(a)};exports.hydrate=function(a,b,c){if(!pl(b))throw Error(p(200));return sl(null,a,b,!0,c)};
exports.hydrateRoot=function(a,b,c){if(!ol(a))throw Error(p(405));var d=null!=c&&c.hydratedSources||null,e=!1,f="",g=ll;null!==c&&void 0!==c&&(!0===c.unstable_strictMode&&(e=!0),void 0!==c.identifierPrefix&&(f=c.identifierPrefix),void 0!==c.onRecoverableError&&(g=c.onRecoverableError));b=fl(b,null,a,1,null!=c?c:null,e,!1,f,g);a[uf]=b.current;sf(a);if(d)for(a=0;a<d.length;a++)c=d[a],e=c._getVersion,e=e(c._source),null==b.mutableSourceEagerHydrationData?b.mutableSourceEagerHydrationData=[c,e]:b.mutableSourceEagerHydrationData.push(c,
e);return new nl(b)};exports.render=function(a,b,c){if(!pl(b))throw Error(p(200));return sl(null,a,b,!1,c)};exports.unmountComponentAtNode=function(a){if(!pl(a))throw Error(p(40));return a._reactRootContainer?(Sk(function(){sl(null,null,a,!1,function(){a._reactRootContainer=null;a[uf]=null})}),!0):!1};exports.unstable_batchedUpdates=Rk;
exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!pl(c))throw Error(p(200));if(null==a||void 0===a._reactInternals)throw Error(p(38));return sl(a,b,c,!1,d)};exports.version="18.2.0-next-9e3b772b8-20220608";


/***/ }),

/***/ 8352:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var m = __webpack_require__(7104);
if (true) {
  exports.createRoot = m.createRoot;
  exports.hydrateRoot = m.hydrateRoot;
} else { var i; }


/***/ }),

/***/ 7104:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(9516);
} else {}


/***/ }),

/***/ 4808:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(1504),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 3028:
/***/ ((__unused_webpack_module, exports) => {

/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return"function"===typeof a?a:null}
var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}E.prototype.isReactComponent={};
E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}var H=G.prototype=new F;
H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return{$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
function N(a,b){return{$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c)}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b});-1===a._status&&(a._status=0,a._result=b)}if(1===a._status)return a._result.default;throw a._result;}
var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};exports.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments)},e)},count:function(a){var b=0;S(a,function(){b++});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};exports.Component=E;exports.Fragment=p;
exports.Profiler=r;exports.PureComponent=G;exports.StrictMode=q;exports.Suspense=w;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;
exports.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g}return{$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};exports.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};exports.createElement=M;exports.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};
exports.forwardRef=function(a){return{$$typeof:v,render:a}};exports.isValidElement=O;exports.lazy=function(a){return{$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};exports.memo=function(a,b){return{$$typeof:x,type:a,compare:void 0===b?null:b}};exports.startTransition=function(a){var b=V.transition;V.transition={};try{a()}finally{V.transition=b}};exports.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.");};
exports.useCallback=function(a,b){return U.current.useCallback(a,b)};exports.useContext=function(a){return U.current.useContext(a)};exports.useDebugValue=function(){};exports.useDeferredValue=function(a){return U.current.useDeferredValue(a)};exports.useEffect=function(a,b){return U.current.useEffect(a,b)};exports.useId=function(){return U.current.useId()};exports.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};
exports.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};exports.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};exports.useMemo=function(a,b){return U.current.useMemo(a,b)};exports.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};exports.useRef=function(a){return U.current.useRef(a)};exports.useState=function(a){return U.current.useState(a)};exports.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};
exports.useTransition=function(){return U.current.useTransition()};exports.version="18.2.0";


/***/ }),

/***/ 1504:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(3028);
} else {}


/***/ }),

/***/ 7624:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(4808);
} else {}


/***/ }),

/***/ 8328:
/***/ ((__unused_webpack_module, exports) => {

/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function f(a,b){var c=a.length;a.push(b);a:for(;0<c;){var d=c-1>>>1,e=a[d];if(0<g(e,b))a[d]=b,a[c]=e,c=d;else break a}}function h(a){return 0===a.length?null:a[0]}function k(a){if(0===a.length)return null;var b=a[0],c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length,w=e>>>1;d<w;){var m=2*(d+1)-1,C=a[m],n=m+1,x=a[n];if(0>g(C,c))n<e&&0>g(x,C)?(a[d]=x,a[n]=c,d=n):(a[d]=C,a[m]=c,d=m);else if(n<e&&0>g(x,c))a[d]=x,a[n]=c,d=n;else break a}}return b}
function g(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()}}else{var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q}}var r=[],t=[],u=1,v=null,y=3,z=!1,A=!1,B=!1,D="function"===typeof setTimeout?setTimeout:null,E="function"===typeof clearTimeout?clearTimeout:null,F="undefined"!==typeof setImmediate?setImmediate:null;
"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(a){for(var b=h(t);null!==b;){if(null===b.callback)k(t);else if(b.startTime<=a)k(t),b.sortIndex=b.expirationTime,f(r,b);else break;b=h(t)}}function H(a){B=!1;G(a);if(!A)if(null!==h(r))A=!0,I(J);else{var b=h(t);null!==b&&K(H,b.startTime-a)}}
function J(a,b){A=!1;B&&(B=!1,E(L),L=-1);z=!0;var c=y;try{G(b);for(v=h(r);null!==v&&(!(v.expirationTime>b)||a&&!M());){var d=v.callback;if("function"===typeof d){v.callback=null;y=v.priorityLevel;var e=d(v.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?v.callback=e:v===h(r)&&k(r);G(b)}else k(r);v=h(r)}if(null!==v)var w=!0;else{var m=h(t);null!==m&&K(H,m.startTime-b);w=!1}return w}finally{v=null,y=c,z=!1}}var N=!1,O=null,L=-1,P=5,Q=-1;
function M(){return exports.unstable_now()-Q<P?!1:!0}function R(){if(null!==O){var a=exports.unstable_now();Q=a;var b=!0;try{b=O(!0,a)}finally{b?S():(N=!1,O=null)}}else N=!1}var S;if("function"===typeof F)S=function(){F(R)};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,U=T.port2;T.port1.onmessage=R;S=function(){U.postMessage(null)}}else S=function(){D(R,0)};function I(a){O=a;N||(N=!0,S())}function K(a,b){L=D(function(){a(exports.unstable_now())},b)}
exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){A||z||(A=!0,I(J))};
exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<a?Math.floor(1E3/a):5};exports.unstable_getCurrentPriorityLevel=function(){return y};exports.unstable_getFirstCallbackNode=function(){return h(r)};exports.unstable_next=function(a){switch(y){case 1:case 2:case 3:var b=3;break;default:b=y}var c=y;y=b;try{return a()}finally{y=c}};exports.unstable_pauseExecution=function(){};
exports.unstable_requestPaint=function(){};exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=y;y=a;try{return b()}finally{y=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3}e=c+e;a={id:u++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,f(t,a),null===h(r)&&a===h(t)&&(B?(E(L),L=-1):B=!0,K(H,c-d))):(a.sortIndex=e,f(r,a),A||z||(A=!0,I(J)));return a};
exports.unstable_shouldYield=M;exports.unstable_wrapCallback=function(a){var b=y;return function(){var c=y;y=b;try{return a.apply(this,arguments)}finally{y=c}}};


/***/ }),

/***/ 4712:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(8328);
} else {}


/***/ }),

/***/ 4596:
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 6176:
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 6808:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 5120:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 6520:
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ 1936:
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

;// CONCATENATED MODULE: ./src/utils/DOM_SCRIPTS/GreetingPopup.ts
/*
    This popup will be shown to the user when they first open the extension on a new day.
    It will be shown only once per day.
    It will contain a greeting message and a button to close the popup. It will also automatically close after some time.
*/
function addGreetingPopup() {
    var _a;
    const popup = document.createElement("div");
    popup.innerHTML = `
        <div id="greeting-popup" style="position: absolute; top: 20px; right: 50px; background-color: #fff; border: 1px solid #ccc; padding: 10px; box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2); z-index:9999999; color : #000;">
            <p>Good morning! Let us try to have a great productive day ahead! 🥳.</p>
            <button id="close-popup-btn" style="background-color: #007bff; color: #fff; border: none; padding: 5px 10px; cursor: pointer;">Close</button>
        </div>
    `;
    document.body.appendChild(popup);
    //   Close the popup after some time
    setTimeout(() => {
        var _a;
        (_a = document.getElementById("greeting-popup")) === null || _a === void 0 ? void 0 : _a.remove();
    }, 10000);
    // Close the popup when the close button is clicked
    (_a = document.getElementById("close-popup-btn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        var _a;
        (_a = document.getElementById("greeting-popup")) === null || _a === void 0 ? void 0 : _a.remove();
    });
}

;// CONCATENATED MODULE: ./src/utils/DOM_SCRIPTS/HourlySummaryPopup.ts
/*
    This popup is used to display the hourly summary of the selected day.
*/
function msToHMS(ms) {
    // 1- Convert to seconds:
    let seconds = Math.floor(ms / 1000);
    // 2- Extract hours:
    const hours = Math.floor(seconds / 3600); // 3,600 seconds in 1 hour
    seconds = seconds % 3600; // seconds remaining after extracting hours
    // 3- Extract minutes:
    const minutes = Math.floor(seconds / 60); // 60 seconds in 1 minute
    // 4- Keep only seconds not extracted to minutes:
    seconds = seconds % 60;
    return `${hours}h ${minutes}m ${seconds}s`;
}
function hourlySummaryPopUp(productiveTime, untaggedTime, wastedTime) {
    const popUpContainer = document.createElement('div');
    popUpContainer.style.position = 'absolute';
    popUpContainer.style.top = '20px';
    popUpContainer.style.right = '20px';
    popUpContainer.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    popUpContainer.style.padding = '10px';
    popUpContainer.style.borderRadius = '5px';
    popUpContainer.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.1)';
    popUpContainer.style.zIndex = '100000';
    const title = document.createElement('h3');
    title.textContent = 'Hourly Summary';
    title.style.color = 'black';
    const productiveTimeElem = document.createElement('p');
    productiveTimeElem.textContent = `Productive Time: ${msToHMS(productiveTime)}`;
    productiveTimeElem.style.color = 'green';
    const untaggedTimeElem = document.createElement('p');
    untaggedTimeElem.textContent = `Untagged Time: ${msToHMS(untaggedTime)}`;
    untaggedTimeElem.style.color = 'orange';
    const wastedTimeElem = document.createElement('p');
    wastedTimeElem.textContent = `Wasted Time: ${msToHMS(wastedTime)}`;
    wastedTimeElem.style.color = 'red';
    popUpContainer.appendChild(title);
    popUpContainer.appendChild(productiveTimeElem);
    popUpContainer.appendChild(untaggedTimeElem);
    popUpContainer.appendChild(wastedTimeElem);
    document.body.appendChild(popUpContainer);
    setTimeout(() => {
        popUpContainer === null || popUpContainer === void 0 ? void 0 : popUpContainer.remove();
    }, 5000);
}

;// CONCATENATED MODULE: ./src/utils/HourlySummary.ts
/*
    Function to show hourly summary to the user of the time spent on the current day.
*/
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function hourlySummary() {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
        const lastTimestamp = ((_a = (yield chrome.storage.local.get("lastTimestamp"))) === null || _a === void 0 ? void 0 : _a.lastTimestamp) || 0;
        const currentTime = Date.now();
        const timeDifference = currentTime - lastTimestamp;
        const timeDifferenceInHours = timeDifference / (1000 * 60 * 60);
        if (timeDifferenceInHours >= 1) {
            const oldData = ((_b = (yield chrome.storage.local.get("oldWebTime"))) === null || _b === void 0 ? void 0 : _b.oldWebTime) || [];
            const currentData = ((_c = (yield chrome.storage.local.get("webTime"))) === null || _c === void 0 ? void 0 : _c.webTime) || [];
            const differenceData = [];
            for (let i = 0; i < currentData.length; i++) {
                let found = false;
                for (let j = 0; j < oldData.length; j++) {
                    if (currentData[i].url === oldData[j].url) {
                        differenceData.push({
                            url: currentData[i].url,
                            time: currentData[i].time - oldData[j].time,
                        });
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    differenceData.push({
                        url: currentData[i].url,
                        time: currentData[i].time,
                    });
                }
            }
            yield chrome.storage.local.set({ lastTimestamp: currentTime });
            yield chrome.storage.local.set({ oldWebTime: currentData });
            const timeSpent = yield calculateTimeSpent(differenceData);
            hourlySummaryPopUp(timeSpent.productiveTime, timeSpent.untaggedTime, timeSpent.wastedTime);
            console.log(timeSpent);
        }
    });
}
function calculateTimeSpent(differenceData) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        let productiveTime = 0;
        let untaggedTime = 0;
        let wastedTime = 0;
        const taggedURLs = ((_a = (yield chrome.storage.local.get("taggedURLs"))) === null || _a === void 0 ? void 0 : _a.taggedURLs) || [];
        for (let i = 0; i < differenceData.length; i++) {
            let found = false;
            for (let j = 0; j < taggedURLs.length; j++) {
                if (differenceData[i].url === taggedURLs[j].website) {
                    if (taggedURLs[j].tag === 1) {
                        productiveTime += differenceData[i].time;
                    }
                    else {
                        wastedTime += differenceData[i].time;
                    }
                    found = true;
                    break;
                }
            }
            if (!found) {
                untaggedTime += differenceData[i].time;
            }
        }
        return { productiveTime, untaggedTime, wastedTime };
    });
}

;// CONCATENATED MODULE: ./src/utils/CONSTANTS/constants.ts
const grayscaleExtensionOverlayId = "grayscale-extension-overlay";
const blockingPopupId = "blocking-popup";
const siteTags = (/* unused pure expression or super */ null && (["Untagged", "Productive", "Unsure", "Wasteful"]));

;// CONCATENATED MODULE: ./src/utils/DOM_SCRIPTS/BlockingPopUp.ts
/*
    Function to create a blocking pop-up to nudge a user on a distracting website
*/

function blockingPopUp(line) {
    return new Promise((resolve) => {
        if (document.getElementById(blockingPopupId)) {
            resolve(0);
        }
        else {
            var styleElement = document.createElement("style");
            styleElement.id = `${blockingPopupId}-style`;
            styleElement.textContent = `
    #${blockingPopupId} {
      all: revert;
        position: absolute !important;
        left: 0 !important;
        right: 0 !important;
        margin: auto !important;
        top: 50vh !important;
        transform: translateY(-50%) !important;
        background-color: #fff !important;
        padding: 20px !important;
        border-radius: 8px !important;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3) !important; /* shadow effect */
        min-width: 400px !important;
        width: 100% !important;
        max-width: 800px !important;
        backdrop-filter: blur(100px) !important;
        z-index: 1000000 !important;
        color: black !important;
        font-size: 16px !important;
    }

    #${blockingPopupId} * {
      all: revert;
      color: black !important;
    }

    .${blockingPopupId}-content {
        text-align: center !important;
    }

    .${blockingPopupId}-content h2 {
        margin-top: 0 !important;
    }
    .${blockingPopupId}-content #close_button {
        border-radius:10px !important;
        border:none !important;
        padding:0.75em 1.5em !important;
        background-color:green !important;
        color: white !important;
        cursor:pointer !important;
      }
`;
            document.head.appendChild(styleElement);
            var popupDiv = document.createElement("div");
            popupDiv.id = blockingPopupId;
            popupDiv.innerHTML = `
    <div class="${blockingPopupId}-content">
        <h2>${line}</h2>
        <p>Here's an activity to help you regain focus:</p>
        <p>Step away from your desk and take a five-minute break.</p>
        <button id = "close_button">
            Close
          </button>
    </div>
`;
            document.body.appendChild(popupDiv);
            var closeButton = popupDiv.querySelector("button");
            if (!closeButton) {
                resolve(0);
                return;
            }
            closeButton.addEventListener("click", () => {
                document.body.removeChild(popupDiv);
                document.head.removeChild(styleElement);
                window.location.href = "https://www.google.com";
            });
        }
    });
}

;// CONCATENATED MODULE: ./src/utils/FetchFunnyLines.ts
/*
    This file is used to fetch funny lines local storage and randomly select a line to display to the user.
*/
var FetchFunnyLines_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchFunnyLines(url) {
    var _a;
    return FetchFunnyLines_awaiter(this, void 0, void 0, function* () {
        const funnyLines = ((_a = (yield chrome.storage.local.get("funnyLines"))) === null || _a === void 0 ? void 0 : _a.funnyLines) || [];
        const obj = funnyLines.find((obj) => {
            return obj["URL"] === url;
        });
        if (obj) {
            const randomLine = obj.lines[Math.floor(Math.random() * obj.lines.length)];
            return randomLine;
        }
        return "Feeling Distracted?";
    });
}

;// CONCATENATED MODULE: ./src/utils/DOM_SCRIPTS/AddGrayscale.ts

function addGrayscale(percentage = 10) {
    if (document.getElementById(grayscaleExtensionOverlayId)) {
        removeGrayscale();
    }
    const div = document.createElement("div");
    div.id = grayscaleExtensionOverlayId;
    let sheet = new CSSStyleSheet();
    sheet.replaceSync(`#${grayscaleExtensionOverlayId} {
                position: fixed;
                top: 0;
                left: 0;
                height: 100vh;
                width: 100vw;
                z-index: 999999;    
                pointer-events: none;    
                backdrop-filter: grayscale(${percentage}%);
            }`);
    document.adoptedStyleSheets = [sheet];
    document.body.appendChild(div);
}
function removeGrayscale() {
    const div = document.getElementById(grayscaleExtensionOverlayId);
    if (div) {
        div.remove();
    }
}

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7624);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(1504);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(8352);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(4596);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(6520);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(6176);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(5120);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(6808);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(1936);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/utils/DOM_SCRIPTS/Alert.scss
var Alert = __webpack_require__(8944);
;// CONCATENATED MODULE: ./src/utils/DOM_SCRIPTS/Alert.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Alert/* default */.c, options);




       /* harmony default export */ const DOM_SCRIPTS_Alert = (Alert/* default */.c && Alert/* default */.c.locals ? Alert/* default */.c.locals : undefined);

;// CONCATENATED MODULE: ./node_modules/react-icons/lib/iconsManifest.mjs
var IconsManifest = [
  {
    "id": "ci",
    "name": "Circum Icons",
    "projectUrl": "https://circumicons.com/",
    "license": "MPL-2.0 license",
    "licenseUrl": "https://github.com/Klarr-Agency/Circum-Icons/blob/main/LICENSE"
  },
  {
    "id": "fa",
    "name": "Font Awesome 5",
    "projectUrl": "https://fontawesome.com/",
    "license": "CC BY 4.0 License",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
  },
  {
    "id": "fa6",
    "name": "Font Awesome 6",
    "projectUrl": "https://fontawesome.com/",
    "license": "CC BY 4.0 License",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
  },
  {
    "id": "io",
    "name": "Ionicons 4",
    "projectUrl": "https://ionicons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
  },
  {
    "id": "io5",
    "name": "Ionicons 5",
    "projectUrl": "https://ionicons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
  },
  {
    "id": "md",
    "name": "Material Design icons",
    "projectUrl": "http://google.github.io/material-design-icons/",
    "license": "Apache License Version 2.0",
    "licenseUrl": "https://github.com/google/material-design-icons/blob/master/LICENSE"
  },
  {
    "id": "ti",
    "name": "Typicons",
    "projectUrl": "http://s-ings.com/typicons/",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"
  },
  {
    "id": "go",
    "name": "Github Octicons icons",
    "projectUrl": "https://octicons.github.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/primer/octicons/blob/master/LICENSE"
  },
  {
    "id": "fi",
    "name": "Feather",
    "projectUrl": "https://feathericons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/feathericons/feather/blob/master/LICENSE"
  },
  {
    "id": "lu",
    "name": "Lucide",
    "projectUrl": "https://lucide.dev/",
    "license": "ISC",
    "licenseUrl": "https://github.com/lucide-icons/lucide/blob/main/LICENSE"
  },
  {
    "id": "gi",
    "name": "Game Icons",
    "projectUrl": "https://game-icons.net/",
    "license": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "id": "wi",
    "name": "Weather Icons",
    "projectUrl": "https://erikflowers.github.io/weather-icons/",
    "license": "SIL OFL 1.1",
    "licenseUrl": "http://scripts.sil.org/OFL"
  },
  {
    "id": "di",
    "name": "Devicons",
    "projectUrl": "https://vorillaz.github.io/devicons/",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "ai",
    "name": "Ant Design Icons",
    "projectUrl": "https://github.com/ant-design/ant-design-icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "bs",
    "name": "Bootstrap Icons",
    "projectUrl": "https://github.com/twbs/icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "ri",
    "name": "Remix Icon",
    "projectUrl": "https://github.com/Remix-Design/RemixIcon",
    "license": "Apache License Version 2.0",
    "licenseUrl": "http://www.apache.org/licenses/"
  },
  {
    "id": "fc",
    "name": "Flat Color Icons",
    "projectUrl": "https://github.com/icons8/flat-color-icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "gr",
    "name": "Grommet-Icons",
    "projectUrl": "https://github.com/grommet/grommet-icons",
    "license": "Apache License Version 2.0",
    "licenseUrl": "http://www.apache.org/licenses/"
  },
  {
    "id": "hi",
    "name": "Heroicons",
    "projectUrl": "https://github.com/tailwindlabs/heroicons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "hi2",
    "name": "Heroicons 2",
    "projectUrl": "https://github.com/tailwindlabs/heroicons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "si",
    "name": "Simple Icons",
    "projectUrl": "https://simpleicons.org/",
    "license": "CC0 1.0 Universal",
    "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/"
  },
  {
    "id": "sl",
    "name": "Simple Line Icons",
    "projectUrl": "https://thesabbir.github.io/simple-line-icons/",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "im",
    "name": "IcoMoon Free",
    "projectUrl": "https://github.com/Keyamoon/IcoMoon-Free",
    "license": "CC BY 4.0 License",
    "licenseUrl": "https://github.com/Keyamoon/IcoMoon-Free/blob/master/License.txt"
  },
  {
    "id": "bi",
    "name": "BoxIcons",
    "projectUrl": "https://github.com/atisawd/boxicons",
    "license": "MIT",
    "licenseUrl": "https://github.com/atisawd/boxicons/blob/master/LICENSE"
  },
  {
    "id": "cg",
    "name": "css.gg",
    "projectUrl": "https://github.com/astrit/css.gg",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "vsc",
    "name": "VS Code Icons",
    "projectUrl": "https://github.com/microsoft/vscode-codicons",
    "license": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
  },
  {
    "id": "tb",
    "name": "Tabler Icons",
    "projectUrl": "https://github.com/tabler/tabler-icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "tfi",
    "name": "Themify Icons",
    "projectUrl": "https://github.com/lykmapipo/themify-icons",
    "license": "MIT",
    "licenseUrl": "https://github.com/thecreation/standard-icons/blob/master/modules/themify-icons/LICENSE"
  },
  {
    "id": "rx",
    "name": "Radix Icons",
    "projectUrl": "https://icons.radix-ui.com",
    "license": "MIT",
    "licenseUrl": "https://github.com/radix-ui/icons/blob/master/LICENSE"
  },
  {
    "id": "pi",
    "name": "Phosphor Icons",
    "projectUrl": "https://github.com/phosphor-icons/core",
    "license": "MIT",
    "licenseUrl": "https://github.com/phosphor-icons/core/blob/main/LICENSE"
  },
  {
    "id": "lia",
    "name": "Icons8 Line Awesome",
    "projectUrl": "https://icons8.com/line-awesome",
    "license": "MIT",
    "licenseUrl": "https://github.com/icons8/line-awesome/blob/master/LICENSE.md"
  }
]
;// CONCATENATED MODULE: ./node_modules/react-icons/lib/iconContext.mjs

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = react.createContext && /*#__PURE__*/react.createContext(DefaultContext);
;// CONCATENATED MODULE: ./node_modules/react-icons/lib/iconBase.mjs
var _excluded = ["attr", "size", "title"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


function Tree2Element(tree) {
  return tree && tree.map((node, i) => /*#__PURE__*/react.createElement(node.tag, _objectSpread({
    key: i
  }, node.attr), Tree2Element(node.child)));
}
function iconBase_GenIcon(data) {
  // eslint-disable-next-line react/display-name
  return props => /*#__PURE__*/react.createElement(IconBase, _extends({
    attr: _objectSpread({}, data.attr)
  }, props), Tree2Element(data.child));
}
function IconBase(props) {
  var elem = conf => {
    var {
        attr,
        size,
        title
      } = props,
      svgProps = _objectWithoutProperties(props, _excluded);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return /*#__PURE__*/react.createElement("svg", _extends({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: _objectSpread(_objectSpread({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && /*#__PURE__*/react.createElement("title", null, title), props.children);
  };
  return IconContext !== undefined ? /*#__PURE__*/react.createElement(IconContext.Consumer, null, conf => elem(conf)) : elem(DefaultContext);
}
;// CONCATENATED MODULE: ./node_modules/react-icons/lib/index.mjs



;// CONCATENATED MODULE: ./node_modules/react-icons/ti/index.mjs
// THIS FILE IS AUTO GENERATED

function TiAdjustBrightness (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 6.934l1-2.934c.072-.213.078-.452 0-.682-.188-.553-.789-.848-1.341-.659-.553.189-.847.788-.659 1.341l1 2.934zM4 11c-.213-.072-.452-.078-.682 0-.553.188-.848.789-.659 1.341.189.553.788.847 1.341.659l2.934-1-2.934-1zM12 17.066l-1 2.934c-.072.213-.078.452 0 .682.188.553.789.848 1.341.659.553-.189.847-.788.659-1.341l-1-2.934zM21.341 11.657c-.188-.553-.788-.848-1.341-.659l-2.934 1 2.934 1c.213.072.452.078.682 0 .552-.188.847-.789.659-1.341zM5.636 7.05l2.781 1.367-1.367-2.781c-.1-.202-.265-.375-.482-.482-.524-.258-1.157-.042-1.415.482-.257.523-.041 1.157.483 1.414zM5.153 17.432c-.257.523-.041 1.156.482 1.414.523.257 1.157.041 1.414-.482l1.367-2.781-2.781 1.367c-.201.099-.374.263-.482.482zM18.363 16.949l-2.781-1.367 1.367 2.781c.1.202.264.375.482.482.523.257 1.156.041 1.414-.482s.042-1.157-.482-1.414zM18.844 6.566c.258-.524.042-1.157-.481-1.415-.523-.257-1.157-.041-1.414.482l-1.369 2.783 2.782-1.368c.202-.1.375-.264.482-.482zM12 7.5c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5 4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5z"},"child":[]}]})(props);
};
function TiAdjustContrast (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M12 4c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 14c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6zM12 7v10c2.757 0 5-2.243 5-5s-2.243-5-5-5z"},"child":[]}]}]})(props);
};
function TiAnchorOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"circle","attr":{"cx":"12","cy":"6","r":"1"},"child":[]},{"tag":"path","attr":{"d":"M19.793 12.096c.134-.34.207-.709.207-1.096 0-1.654-1.346-3-3-3h-.422c.273-.619.422-1.297.422-2 0-2.757-2.243-5-5-5s-5 2.243-5 5c0 .703.149 1.381.422 2h-.422c-1.654 0-3 1.346-3 3 0 .387.073.756.207 1.096-.732.548-1.207 1.422-1.207 2.404 0 4.963 4.037 9 9 9s9-4.037 9-9c0-.982-.475-1.856-1.207-2.404zm-7.793 9.404c-3.859 0-7-3.141-7-7 0-.553.447-1 1-1s1 .447 1 1c0 2.414 1.721 4.434 4 4.898v-7.398h-4c-.553 0-1-.447-1-1s.447-1 1-1h4v-1.184c-1.162-.413-2-1.511-2-2.816 0-1.657 1.343-3 3-3s3 1.343 3 3c0 1.305-.838 2.403-2 2.816v1.184h4c.553 0 1 .447 1 1s-.447 1-1 1h-4v7.398c2.279-.465 4-2.484 4-4.898 0-.553.447-1 1-1s1 .447 1 1c0 3.859-3.141 7-7 7zm-4.679-8.5h2.679v4.962c-1.207-.701-2-2.009-2-3.462 0-.597-.263-1.133-.679-1.5zm9.358 0c-.416.367-.679.903-.679 1.5 0 1.453-.793 2.761-2 3.462v-4.962h2.679z"},"child":[]},{"tag":"circle","attr":{"cx":"12","cy":"6","r":"1"},"child":[]}]}]})(props);
};
function TiAnchor (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18 13.5c-.553 0-1 .447-1 1 0 2.414-1.721 4.434-4 4.898v-7.398h4c.553 0 1-.447 1-1s-.447-1-1-1h-4v-1.184c1.162-.413 2-1.511 2-2.816 0-1.657-1.343-3-3-3s-3 1.343-3 3c0 1.305.838 2.403 2 2.816v1.184h-4c-.553 0-1 .447-1 1s.447 1 1 1h4v7.398c-2.279-.465-4-2.484-4-4.898 0-.553-.447-1-1-1s-1 .447-1 1c0 3.859 3.141 7 7 7s7-3.141 7-7c0-.553-.447-1-1-1zm-6-8.5c.551 0 1 .449 1 1s-.449 1-1 1-1-.449-1-1 .449-1 1-1z"},"child":[]}]})(props);
};
function TiArchive (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M13 12h-3c-.276 0-.5.224-.5.5s.224.5.5.5h3c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zM20 5h-17c-.553 0-1 .448-1 1s.447 1 1 1h17c.553 0 1-.448 1-1s-.447-1-1-1zM18 8h-13c-.553 0-1 .448-1 1v8c0 1.654 1.346 3 3 3h9c1.654 0 3-1.346 3-3v-8c0-.552-.447-1-1-1zm-2 10h-9c-.552 0-1-.449-1-1v-7h11v7c0 .551-.448 1-1 1z"},"child":[]}]}]})(props);
};
function TiArrowBackOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19.164 19.547c-1.641-2.5-3.669-3.285-6.164-3.484v1.437c0 .534-.208 1.036-.586 1.414-.756.756-2.077.751-2.823.005l-6.293-6.207c-.191-.189-.298-.444-.298-.713s.107-.524.298-.712l6.288-6.203c.754-.755 2.073-.756 2.829.001.377.378.585.88.585 1.414v1.704c4.619.933 8 4.997 8 9.796v1c0 .442-.29.832-.714.958-.095.027-.19.042-.286.042-.331 0-.646-.165-.836-.452zm-7.141-5.536c2.207.056 4.638.394 6.758 2.121-.768-3.216-3.477-5.702-6.893-6.08-.504-.056-.888-.052-.888-.052v-3.497l-5.576 5.496 5.576 5.5v-3.499l1.023.011z"},"child":[]}]})(props);
};
function TiArrowBack (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 9.059v-2.559c0-.256-.098-.512-.293-.708-.195-.195-.451-.292-.707-.292s-.512.097-.707.292l-6.293 6.208 6.293 6.207c.195.195.451.293.707.293s.512-.098.707-.293.293-.452.293-.707v-2.489c2.75.068 5.755.566 8 3.989v-1c0-4.633-3.5-8.443-8-8.941z"},"child":[]}]})(props);
};
function TiArrowDownOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 21.312l-7.121-7.121c-1.17-1.17-1.17-3.073 0-4.242 1.094-1.094 2.978-1.138 4.121-.115v-4.834c0-1.654 1.346-3 3-3s3 1.346 3 3v4.834c1.143-1.023 3.027-.979 4.121.115 1.17 1.169 1.17 3.072 0 4.242l-7.121 7.121zm-5-10.242c-.268 0-.518.104-.707.293-.391.39-.391 1.023 0 1.414l5.707 5.707 5.707-5.707c.391-.391.391-1.024 0-1.414-.379-.379-1.035-.379-1.414 0l-3.293 3.293v-9.656c0-.551-.448-1-1-1s-1 .449-1 1v9.656l-3.293-3.293c-.189-.189-.439-.293-.707-.293z"},"child":[]}]})(props);
};
function TiArrowDownThick (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18.414 10.656c-.781-.781-2.047-.781-2.828 0l-1.586 1.586v-7.242c0-1.105-.896-2-2-2-1.105 0-2 .895-2 2v7.242l-1.586-1.586c-.781-.781-2.047-.781-2.828 0s-.781 2.047 0 2.828l6.414 6.414 6.414-6.414c.781-.781.781-2.046 0-2.828z"},"child":[]}]})(props);
};
function TiArrowDown (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M16.707 13.293c-.391-.391-1.023-.391-1.414 0l-2.293 2.293v-7.586c0-.552-.447-1-1-1s-1 .448-1 1v7.586l-2.293-2.293c-.391-.391-1.023-.391-1.414 0s-.391 1.023 0 1.414l4.707 4.707 4.707-4.707c.391-.391.391-1.023 0-1.414z"},"child":[]}]})(props);
};
function TiArrowForwardOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M4 19.999c-.096 0-.191-.015-.286-.042-.424-.126-.714-.516-.714-.958v-1c0-4.8 3.381-8.864 8-9.796v-1.704c0-.534.208-1.036.585-1.414.756-.757 2.075-.756 2.829-.001l6.288 6.203c.191.188.298.443.298.712s-.107.524-.298.712l-6.293 6.207c-.746.746-2.067.751-2.823-.005-.378-.378-.586-.88-.586-1.414v-1.437c-2.495.201-4.523.985-6.164 3.484-.19.288-.505.453-.836.453zm8-5.989l1-.01v3.499l5.576-5.5-5.576-5.496v3.497s-.384-.004-.891.052c-3.416.378-6.125 2.864-6.892 6.08 2.121-1.728 4.551-2.066 6.783-2.122z"},"child":[]}]})(props);
};
function TiArrowForward (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M13 5.499c-.256 0-.512.097-.707.292-.195.196-.293.452-.293.708v2.559c-4.5.498-8 4.309-8 8.941v1c2.245-3.423 5.25-3.92 8-3.989v2.489c0 .255.098.512.293.707s.451.293.707.293.512-.098.707-.293l6.293-6.207-6.293-6.208c-.195-.195-.451-.292-.707-.292z"},"child":[]}]})(props);
};
function TiArrowLeftOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M10.928 21c-.801 0-1.555-.312-2.121-.879l-7.121-7.121 7.121-7.121c1.133-1.134 3.109-1.134 4.242 0 .566.564.879 1.317.879 2.119 0 .746-.27 1.451-.764 2.002h4.836c1.654 0 3 1.346 3 3s-1.346 3-3 3h-4.836c.493.549.764 1.252.764 1.998.002.802-.312 1.557-.879 2.124-.567.566-1.32.878-2.121.878zm-6.414-8l5.707 5.707c.379.378 1.035.378 1.414 0 .189-.189.293-.441.293-.708s-.104-.517-.291-.705l-3.295-3.294h9.658c.552 0 1-.449 1-1s-.448-1-1-1h-9.658l3.293-3.293c.189-.189.293-.441.293-.708s-.104-.517-.292-.705c-.381-.38-1.036-.379-1.415-.001l-5.707 5.707z"},"child":[]}]})(props);
};
function TiArrowLeftThick (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18 11h-7.244l1.586-1.586c.781-.781.781-2.049 0-2.828-.781-.781-2.047-.781-2.828 0l-6.414 6.414 6.414 6.414c.39.391.902.586 1.414.586s1.023-.195 1.414-.586c.781-.781.781-2.049 0-2.828l-1.586-1.586h7.244c1.104 0 2-.896 2-2 0-1.105-.896-2-2-2z"},"child":[]}]})(props);
};
function TiArrowLeft (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17 11h-7.586l2.293-2.293c.391-.391.391-1.023 0-1.414s-1.023-.391-1.414 0l-4.707 4.707 4.707 4.707c.195.195.451.293.707.293s.512-.098.707-.293c.391-.391.391-1.023 0-1.414l-2.293-2.293h7.586c.552 0 1-.448 1-1s-.448-1-1-1z"},"child":[]}]})(props);
};
function TiArrowLoopOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18.994 7.187l.006-.187c0-.801-.312-1.555-.879-2.121-.566-.567-1.32-.879-2.121-.879s-1.555.312-2.121.879l-2.883 2.883c-.531-.474-1.23-.762-1.996-.762h-1c-3.859 0-7 3.14-7 7s3.141 7 7 7h9c3.859 0 7-3.14 7-7 0-3.306-2.14-6.084-5.006-6.813zm-1.994 11.813h-9c-2.757 0-5-2.243-5-5s2.243-5 5-5h1c.553 0 1 .448 1 1s-.447 1-1 1h-1c-1.654 0-3 1.346-3 3s1.346 3 3 3h9c1.654 0 3-1.346 3-3s-1.121-3-2.5-3h-2.086l1.293 1.293c.391.391.391 1.023 0 1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-3.707-3.707 3.707-3.707c.195-.195.451-.293.707-.293s.512.098.707.293c.391.391.391 1.023 0 1.414l-1.293 1.293h2.086c2.481 0 4.5 2.243 4.5 5s-2.243 5-5 5zm.749-6.971c.7.164 1.251 1 1.251 1.971 0 1.103-.897 2-2 2h-9c-1.103 0-2-.897-2-2s.897-2 2-2h1c.856 0 1.588-.541 1.873-1.299l3.713 3.713c.378.378.88.586 1.414.586s1.036-.208 1.414-.586.586-.88.586-1.414c0-.345-.087-.677-.251-.971z"},"child":[]}]})(props);
};
function TiArrowLoop (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M16.5 8h-2.086l1.293-1.293c.391-.391.391-1.023 0-1.414s-1.023-.391-1.414 0l-3.707 3.707 3.707 3.707c.195.195.451.293.707.293s.512-.098.707-.293c.391-.391.391-1.023 0-1.414l-1.293-1.293h2.086c1.379 0 2.5 1.346 2.5 3s-1.346 3-3 3h-8c-1.654 0-3-1.346-3-3s1.346-3 3-3c.553 0 1-.448 1-1s-.447-1-1-1c-2.757 0-5 2.243-5 5s2.243 5 5 5h8c2.757 0 5-2.243 5-5s-2.019-5-4.5-5z"},"child":[]}]})(props);
};
function TiArrowMaximiseOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 3h-5.243c-1.302 0-2.401.838-2.815 2h-6.942v7.061l.012.12c-1.167.41-2.012 1.512-2.012 2.819v7h7c1.311 0 2.593-.826 3-2h7v-7.061l-.012-.12c1.167-.41 2.012-1.512 2.012-2.819v-7h-2zm-2 15h-5c-.553 0-1-.448-1-1s.447-1 1-1h3v-3.061c0-.552.447-1 1-1s1 .448 1 1v5.061zm-11-11h5.061c.553 0 1 .448 1 1s-.447 1-1 1h-3.061v3.061c0 .552-.448 1-1 1-.553 0-1-.448-1-1v-5.061zm13 3c0 .552-.447 1-1 1s-1-.448-1-1v-1.586l-3.293 3.293c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023 0-1.414l3.293-3.293h-1.586c-.553 0-1-.448-1-1s.447-1 1-1h5v5zm-10 10h-5v-5c0-.552.447-1 1-1s1 .448 1 1v1.586l3.293-3.293c.195-.195.451-.293.707-.293s.512.098.707.293c.391.391.391 1.023 0 1.414l-3.293 3.293h1.586c.553 0 1 .448 1 1s-.448 1-1 1zm2.414-7.414c-.378-.378-.88-.586-1.414-.586-.367 0-.716.105-1.023.289l.023-.228v-2.061h2.061l.229-.023c-.186.307-.29.656-.29 1.023 0 .534.208 1.036.586 1.414s.88.586 1.414.586c.367 0 .716-.105 1.023-.289l-.023.228v2.061h-1.939c-.122 0-.24.015-.356.036.189-.31.295-.664.295-1.036 0-.534-.208-1.036-.586-1.414z"},"child":[]}]})(props);
};
function TiArrowMaximise (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M15 4c-.553 0-1 .448-1 1s.447 1 1 1h1.586l-3.293 3.293c-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293l3.293-3.293v1.586c0 .552.447 1 1 1s1-.448 1-1v-5h-5zM9.293 13.293l-3.293 3.293v-1.586c0-.552-.447-1-1-1s-1 .448-1 1v4.999h.996l4.004.001c.552 0 1-.448 1-1s-.447-1-1-1h-1.586l3.293-3.292c.391-.391.391-1.023 0-1.414s-1.023-.392-1.414-.001zM7 12c.552 0 1-.448 1-1v-3h3c.553 0 1-.448 1-1s-.447-1-1-1h-4.999l-.001 5c0 .552.447 1 1 1zM17 12c-.553 0-1 .448-1 1v3h-3c-.553 0-1 .448-1 1s.447 1 1 1h5v-5c0-.552-.447-1-1-1z"},"child":[]}]})(props);
};
function TiArrowMinimiseOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M22 6c0-.801-.312-1.555-.879-2.121-.566-.567-1.32-.879-2.121-.879s-1.555.312-2.121.879l-.883.883c-.531-.474-1.23-.762-1.996-.762-.919 0-1.732.424-2.283 1.077-.212-.047-.431-.077-.656-.077h-6.061v6.06c0 .255.042.499.102.736-.598.549-.98 1.33-.98 2.204 0 .735.266 1.409.705 1.931l-.947.948c-.568.566-.88 1.32-.88 2.121s.312 1.555.879 2.121c.566.567 1.32.879 2.121.879.539 0 1.334-.152 2.061-.879l.903-.919c.535.495 1.251.798 2.036.798.934 0 1.758-.437 2.309-1.107.241.063.49.107.752.107h5.939v-6.061c0-.226-.029-.444-.077-.656.653-.55 1.077-1.364 1.077-2.283 0-.766-.288-1.465-.762-1.996l.883-.883c.567-.566.879-1.32.879-2.121zm-15 1h4c.553 0 1 .448 1 1s-.447 1-1 1h-2v2c0 .552-.448 1-1 1-.553 0-1-.448-1-1v-4zm12.707-.293l-3.293 3.293h1.586c.553 0 1 .448 1 1s-.448 1-1 1h-5v-5c0-.552.447-1 1-1s1 .448 1 1v1.586l3.293-3.293c.195-.195.451-.293.707-.293s.512.098.707.293c.391.391.391 1.023 0 1.414zm-7.707 11.293c0 .552-.447 1-1 1s-1-.448-1-1v-1.707l-3.354 3.414c-.195.195-.39.293-.646.293s-.512-.098-.707-.293c-.391-.391-.391-1.023 0-1.414l3.293-3.293h-1.465c-.553 0-1-.448-1-1s.447-1 1-1h4.879v5zm0-6h-2.278c.173-.295.278-.634.278-1v-1h1.061c.342 0 .658-.094.939-.245v2.245zm1 1h2.713c-.433.094-.713.33-.713.939v1.061h-.939c-.391 0-.752.117-1.061.311v-2.311zm.061 4c0-.552.447-1 1-1h1.939v-2c0-.552.447-1 1-1s1 .448 1 1v4h-3.939c-.553 0-1-.448-1-1z"},"child":[]}]})(props);
};
function TiArrowMinimise (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M6.121 13c-.553 0-1 .448-1 1s.447 1 1 1h1.465l-3.293 3.293c-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293l3.414-3.414v1.707c0 .552.447 1 1 1s.879-.448.879-1v-5h-4.879zM7 11c.552 0 1-.448 1-1v-2h2c.553 0 1-.448 1-1s-.447-1-1-1h-3.999l-.001 4c0 .552.447 1 1 1zM17 13c-.553 0-1 .448-1 1v2h-2c-.553 0-1 .448-1 1s.447 1 1 1h4v-4c0-.552-.447-1-1-1zM18.293 4.293l-3.293 3.293v-1.586c0-.552-.447-1-1-1s-1 .448-1 1v5h5c.552 0 1-.448 1-1s-.447-1-1-1h-1.586l3.293-3.292c.391-.391.391-1.023 0-1.414s-1.023-.392-1.414-.001z"},"child":[]}]})(props);
};
function TiArrowMoveOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M22.828 10.586l-9.414-9.414c-.391-.391-.902-.586-1.414-.586s-1.023.195-1.414.586l-9.414 9.414c-.781.779-.781 2.047 0 2.828l9.414 9.414c.391.391.902.586 1.414.586s1.023-.195 1.414-.586l9.414-9.414c.781-.781.781-2.049 0-2.828zm-5.828 5.414c-.256 0-.512-.098-.707-.293-.391-.391-.391-1.023 0-1.414l1.293-1.293h-4.586v4.586l1.293-1.293c.195-.195.451-.293.707-.293s.512.098.707.293c.391.391.391 1.023 0 1.414l-3.707 3.707-3.707-3.707c-.391-.391-.391-1.023 0-1.414.195-.195.451-.293.707-.293s.512.098.707.293l1.293 1.293v-4.586h-4.586l1.293 1.293c.391.391.391 1.023 0 1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-3.707-3.707 3.707-3.707c.195-.195.451-.293.707-.293s.512.098.707.293c.391.391.391 1.023 0 1.414l-1.293 1.293h4.586v-4.586l-1.293 1.293c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023 0-1.414l3.707-3.707 3.707 3.707c.391.391.391 1.023 0 1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-1.293-1.293v4.586h4.586l-1.293-1.293c-.391-.391-.391-1.023 0-1.414.195-.195.451-.293.707-.293s.512.098.707.293l3.707 3.707-3.707 3.707c-.195.195-.451.293-.707.293zm-1.732-2c-.175.301-.268.643-.268 1-.357 0-.699.093-1 .268v-1.268h1.268zm-6.536 0h1.268v1.268c-.301-.175-.643-.268-1-.268 0-.357-.093-.699-.268-1zm0-4c.175-.301.268-.643.268-1 .357 0 .699-.093 1-.268v1.268h-1.268zm6.536 0h-1.268v-1.268c.301.175.643.268 1 .268 0 .357.093.699.268 1z"},"child":[]}]})(props);
};
function TiArrowMove (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17.707 8.293c-.391-.391-1.023-.391-1.414 0s-.391 1.023 0 1.414l1.293 1.293h-4.586v-4.586l1.293 1.293c.195.195.451.293.707.293s.512-.098.707-.293c.391-.391.391-1.023 0-1.414l-3.707-3.707-3.707 3.707c-.391.391-.391 1.023 0 1.414s1.023.391 1.414 0l1.293-1.293v4.586h-4.586l1.293-1.293c.391-.391.391-1.023 0-1.414s-1.023-.391-1.414 0l-3.707 3.707 3.707 3.707c.195.195.451.293.707.293s.512-.098.707-.293c.391-.391.391-1.023 0-1.414l-1.293-1.293h4.586v4.586l-1.293-1.293c-.391-.391-1.023-.391-1.414 0s-.391 1.023 0 1.414l3.707 3.707 3.707-3.707c.391-.391.391-1.023 0-1.414s-1.023-.391-1.414 0l-1.293 1.293v-4.586h4.586l-1.293 1.293c-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293l3.707-3.707-3.707-3.707z"},"child":[]}]})(props);
};
function TiArrowRepeatOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18.994 7.187l.006-.187c0-.801-.312-1.555-.879-2.121-.566-.567-1.32-.879-2.121-.879s-1.555.312-2.121.879l-2.892 2.891c-.53-.473-1.221-.77-1.987-.77h-1c-3.859 0-7 3.14-7 7 0 3.306 2.14 6.084 5.006 6.813l-.006.187c0 .801.312 1.555.879 2.121.566.567 1.32.879 2.121.879s1.555-.312 2.121-.879l2.892-2.891c.53.473 1.221.77 1.987.77h1c3.859 0 7-3.14 7-7 0-3.306-2.14-6.084-5.006-6.813zm-1.994 11.813h-1c-.553 0-1-.448-1-1s.447-1 1-1h1c1.654 0 3-1.346 3-3s-1.121-3-2.5-3h-2.086l1.293 1.293c.391.391.391 1.023 0 1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-3.707-3.707 3.707-3.707c.195-.195.451-.293.707-.293s.512.098.707.293c.391.391.391 1.023 0 1.414l-1.293 1.293h2.086c2.481 0 4.5 2.243 4.5 5s-2.243 5-5 5zm.749-6.971c.7.164 1.251 1 1.251 1.971 0 1.103-.897 2-2 2h-1c-.857 0-1.584.544-1.868 1.304l-3.718-3.718c-.378-.378-.88-.586-1.414-.586s-1.036.208-1.414.586-.586.88-.586 1.414c0 .345.087.677.251.971-.7-.164-1.251-1-1.251-1.971 0-1.103.897-2 2-2h1c.857 0 1.584-.544 1.868-1.304l3.718 3.718c.378.378.88.586 1.414.586s1.036-.208 1.414-.586.586-.88.586-1.414c0-.345-.087-.677-.251-.971zm-7.749-2.029c0 .552-.447 1-1 1h-1c-1.654 0-3 1.346-3 3s1.121 3 2.5 3h2.086l-1.293-1.293c-.391-.391-.391-1.023 0-1.414.195-.195.451-.293.707-.293s.512.098.707.293l3.707 3.707-3.707 3.707c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023 0-1.414l1.293-1.293h-2.086c-2.481 0-4.5-2.243-4.5-5s2.243-5 5-5h1c.553 0 1 .448 1 1z"},"child":[]}]})(props);
};
function TiArrowRepeat (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M16.5 7h-2.086l1.293-1.293c.391-.391.391-1.023 0-1.414s-1.023-.391-1.414 0l-3.707 3.707 3.707 3.707c.195.195.451.293.707.293s.512-.098.707-.293c.391-.391.391-1.023 0-1.414l-1.293-1.293h2.086c1.379 0 2.5 1.346 2.5 3s-1.346 3-3 3c-.553 0-1 .448-1 1s.447 1 1 1c2.757 0 5-2.243 5-5s-2.019-5-4.5-5zM8.293 12.293c-.391.391-.391 1.023 0 1.414l1.293 1.293h-2.086c-1.379 0-2.5-1.346-2.5-3s1.346-3 3-3c.553 0 1-.448 1-1s-.447-1-1-1c-2.757 0-5 2.243-5 5s2.019 5 4.5 5h2.086l-1.293 1.293c-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293l3.707-3.707-3.707-3.707c-.391-.391-1.023-.391-1.414 0z"},"child":[]}]})(props);
};
function TiArrowRightOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 21c-.801 0-1.555-.312-2.121-.879s-.88-1.321-.879-2.123c0-.746.271-.998.764-1.998h-4.836c-1.654 0-3-1.347-3-3 0-1.654 1.346-3 3-3h4.836c-.494-1-.764-1.255-.764-2.001.001-.802.312-1.554.88-2.121 1.132-1.132 3.108-1.133 4.241.001l7.121 7.121-7.121 7.121c-.566.567-1.32.879-2.121.879zm-7.072-9c-.552 0-1 .449-1 1s.448 1 1 1h9.658l-3.293 3.293c-.189.189-.293.439-.293.706 0 .269.104.519.293.708.379.378 1.035.378 1.414 0l5.707-5.707-5.707-5.707c-.379-.378-1.035-.378-1.414 0-.189.189-.293.439-.293.706 0 .268.104.519.293.708l3.293 3.293h-9.658z"},"child":[]}]})(props);
};
function TiArrowRightThick (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M10.586 6.586c-.781.779-.781 2.047 0 2.828l1.586 1.586h-7.244c-1.104 0-2 .895-2 2 0 1.104.896 2 2 2h7.244l-1.586 1.586c-.781.779-.781 2.047 0 2.828.391.391.902.586 1.414.586s1.023-.195 1.414-.586l6.414-6.414-6.414-6.414c-.781-.781-2.047-.781-2.828 0z"},"child":[]}]})(props);
};
function TiArrowRight (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M13.293 7.293c-.391.391-.391 1.023 0 1.414l2.293 2.293h-7.586c-.552 0-1 .448-1 1s.448 1 1 1h7.586l-2.293 2.293c-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293l4.707-4.707-4.707-4.707c-.391-.391-1.023-.391-1.414 0z"},"child":[]}]})(props);
};
function TiArrowShuffle (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M4 9h3.5c.736 0 1.393.391 1.851 1.001.325-.604.729-1.163 1.191-1.662-.803-.823-1.866-1.339-3.042-1.339h-3.5c-.553 0-1 .448-1 1s.447 1 1 1zM11.685 12.111c.551-1.657 2.256-3.111 3.649-3.111h1.838l-1.293 1.293c-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293l3.707-3.707-3.707-3.707c-.391-.391-1.023-.391-1.414 0s-.391 1.023 0 1.414l1.293 1.293h-1.838c-2.274 0-4.711 1.967-5.547 4.479l-.472 1.411c-.641 1.926-2.072 3.11-2.815 3.11h-2.5c-.553 0-1 .448-1 1s.447 1 1 1h2.5c1.837 0 3.863-1.925 4.713-4.479l.472-1.41zM15.879 13.293c-.391.391-.391 1.023 0 1.414l1.293 1.293h-2.338c-1.268 0-2.33-.891-2.691-2.108-.256.75-.627 1.499-1.09 2.185.886 1.162 2.243 1.923 3.781 1.923h2.338l-1.293 1.293c-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293l3.707-3.707-3.707-3.707c-.391-.391-1.023-.391-1.414 0z"},"child":[]}]})(props);
};
function TiArrowSortedDown (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M5.8 9.7l6.2 6.3 6.2-6.3c.2-.2.3-.5.3-.7s-.1-.5-.3-.7c-.2-.2-.4-.3-.7-.3h-11c-.3 0-.5.1-.7.3-.2.2-.3.4-.3.7s.1.5.3.7z"},"child":[]}]})(props);
};
function TiArrowSortedUp (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18.2 13.3l-6.2-6.3-6.2 6.3c-.2.2-.3.5-.3.7s.1.5.3.7c.2.2.4.3.7.3h11c.3 0 .5-.1.7-.3.2-.2.3-.5.3-.7s-.1-.5-.3-.7z"},"child":[]}]})(props);
};
function TiArrowSyncOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21.5 12.473c0-2.495-.818-4.426-2.653-6.259-.309-.309-.676-.533-1.073-.682l-.946-.946-3.707-3.707c-.566-.567-1.32-.879-2.121-.879s-1.555.312-2.121.879c-.567.566-.879 1.32-.879 2.121 0 .277.037.549.11.809-1.029.461-1.974 1.12-2.827 1.974-1.795 1.793-2.783 4.178-2.783 6.717 0 2.495.818 4.426 2.653 6.259.299.298.652.521 1.034.669l.985.986 3.707 3.707c.566.567 1.32.879 2.121.879s1.555-.312 2.121-.879c.567-.566.879-1.32.879-2.121 0-.286-.04-.566-.117-.834 1.031-.461 1.978-1.121 2.833-1.975 1.796-1.794 2.784-4.18 2.784-6.718zm-9.13 7.484l1.337 1.336c.391.391.391 1.023 0 1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-3.707-3.707 3.707-3.707c.195-.195.451-.293.707-.293s.512.098.707.293c.391.391.391 1.023 0 1.414l-1.247 1.247c1.351-.091 2.425-.59 3.428-1.593 1.039-1.038 1.611-2.419 1.611-3.888 0-1.422-.401-2.351-1.48-3.429-.391-.391-.391-1.023 0-1.415.195-.195.451-.293.708-.293.256 0 .512.098.707.292 1.448 1.447 2.066 2.896 2.066 4.844 0 2.004-.78 3.887-2.197 5.303-1.39 1.39-3.01 2.1-4.933 2.182zm-.766-14.939l-1.311-1.311c-.391-.391-.391-1.023 0-1.414.195-.195.451-.293.707-.293s.512.098.707.293l3.707 3.707-3.707 3.707c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023 0-1.414l1.275-1.275c-1.365.086-2.448.584-3.456 1.593-1.04 1.039-1.612 2.42-1.612 3.889 0 1.422.401 2.351 1.48 3.429.391.391.391 1.023 0 1.415-.195.195-.452.293-.708.293s-.512-.098-.707-.292c-1.447-1.448-2.065-2.897-2.065-4.845 0-2.004.78-3.887 2.197-5.303 1.382-1.383 2.993-2.093 4.907-2.179zm-2.916 10.204c-.888-.887-1.188-1.574-1.188-2.722 0-1.202.468-2.332 1.318-3.181l.187-.179c.033.481.236.93.581 1.274.378.378.88.586 1.414.586s1.036-.208 1.414-.586l2.339-2.339c-.078.596.104 1.219.56 1.675.888.887 1.188 1.574 1.188 2.722 0 1.202-.468 2.332-1.318 3.181l-.188.181c-.039-.472-.241-.91-.579-1.248-.38-.378-.882-.586-1.416-.586s-1.036.208-1.414.586l-2.342 2.342c.089-.605-.093-1.242-.556-1.706z"},"child":[]}]})(props);
};
function TiArrowSync (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19.5 12.473c0-1.948-.618-3.397-2.066-4.844-.391-.39-1.023-.39-1.414 0-.391.391-.391 1.024 0 1.415 1.079 1.078 1.48 2.007 1.48 3.429 0 1.469-.572 2.85-1.611 3.888-1.004 1.003-2.078 1.502-3.428 1.593l1.246-1.247c.391-.391.391-1.023 0-1.414s-1.023-.391-1.414 0l-3.707 3.707 3.707 3.707c.195.195.451.293.707.293s.512-.098.707-.293c.391-.391.391-1.023 0-1.414l-1.337-1.336c1.923-.082 3.542-.792 4.933-2.181 1.417-1.416 2.197-3.299 2.197-5.303zM6.5 12.5c0-1.469.572-2.85 1.611-3.889 1.009-1.009 2.092-1.508 3.457-1.594l-1.275 1.275c-.391.391-.391 1.023 0 1.414.195.196.451.294.707.294s.512-.098.707-.293l3.707-3.707-3.707-3.707c-.391-.391-1.023-.391-1.414 0s-.391 1.023 0 1.414l1.311 1.311c-1.914.086-3.525.796-4.907 2.179-1.417 1.416-2.197 3.299-2.197 5.303 0 1.948.618 3.397 2.066 4.844.195.195.451.292.707.292s.512-.098.707-.293c.391-.391.391-1.024 0-1.415-1.079-1.077-1.48-2.006-1.48-3.428z"},"child":[]}]})(props);
};
function TiArrowUnsorted (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18.2 9.3l-6.2-6.3-6.2 6.3c-.2.2-.3.4-.3.7s.1.5.3.7c.2.2.4.3.7.3h11c.3 0 .5-.1.7-.3.2-.2.3-.5.3-.7s-.1-.5-.3-.7zM5.8 14.7l6.2 6.3 6.2-6.3c.2-.2.3-.5.3-.7s-.1-.5-.3-.7c-.2-.2-.4-.3-.7-.3h-11c-.3 0-.5.1-.7.3-.2.2-.3.5-.3.7s.1.5.3.7z"},"child":[]}]})(props);
};
function TiArrowUpOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 21c-1.654 0-3-1.346-3-3v-4.764c-1.143 1.024-3.025.979-4.121-.115-1.17-1.169-1.17-3.073 0-4.242l7.121-7.121 7.121 7.121c1.17 1.169 1.17 3.073 0 4.242-1.094 1.095-2.979 1.14-4.121.115v4.764c0 1.654-1.346 3-3 3zm-1-12.586v9.586c0 .551.448 1 1 1s1-.449 1-1v-9.586l3.293 3.293c.379.378 1.035.378 1.414 0 .391-.391.391-1.023 0-1.414l-5.707-5.707-5.707 5.707c-.391.391-.391 1.023 0 1.414.379.378 1.035.378 1.414 0l3.293-3.293z"},"child":[]}]})(props);
};
function TiArrowUpThick (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 3.172l-6.414 6.414c-.781.781-.781 2.047 0 2.828s2.047.781 2.828 0l1.586-1.586v7.242c0 1.104.895 2 2 2 1.104 0 2-.896 2-2v-7.242l1.586 1.586c.391.391.902.586 1.414.586s1.023-.195 1.414-.586c.781-.781.781-2.047 0-2.828l-6.414-6.414z"},"child":[]}]})(props);
};
function TiArrowUp (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M13 5.586l-4.707 4.707c-.391.391-.391 1.023 0 1.414s1.023.391 1.414 0l2.293-2.293v7.586c0 .552.447 1 1 1s1-.448 1-1v-7.586l2.293 2.293c.195.195.451.293.707.293s.512-.098.707-.293c.391-.391.391-1.023 0-1.414l-4.707-4.707z"},"child":[]}]})(props);
};
function TiAt (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 4c-4.411 0-8 3.589-8 8s3.589 8 8 8c1.616 0 3.172-.479 4.499-1.384.456-.312.574-.934.263-1.39-.311-.457-.932-.572-1.39-.263-.994.679-2.16 1.037-3.372 1.037-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6v.5c0 .552-.448 1-1 1s-1-.448-1-1v-3c0-.553-.447-1-1-1-.441 0-.805.29-.938.688-.58-.427-1.289-.688-2.062-.688-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5c1.045 0 1.975-.47 2.616-1.199.548.723 1.408 1.199 2.384 1.199 1.654 0 3-1.346 3-3v-.5c0-4.411-3.589-8-8-8zm0 9.5c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5z"},"child":[]}]})(props);
};
function TiAttachmentOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M15.534 4.466c1.024 0 2.05.39 2.829 1.169 1.561 1.561 1.561 4.098 0 5.656l-7.071 7.072c-.778.779-1.804 1.17-2.828 1.17s-2.049-.391-2.828-1.17c-1.56-1.559-1.56-4.098 0-5.656l.807-.807c-.004.805.25 1.524.701 2.125l-.094.096c-.78.779-.78 2.049 0 2.828.39.39.901.584 1.414.584s1.024-.195 1.414-.584l2.535-2.535 4.537-4.537c.778-.779.778-2.049 0-2.828-.392-.39-.904-.584-1.417-.584-.512 0-1.023.195-1.413.584l-4.535 4.537c-.128.127-.146.275-.146.354 0 .076.019.226.146.353.099.099.228.147.356.147.127 0 .254-.049.352-.146l2.122-2.121 1.414-1.414c.392.392.586.902.586 1.414 0 .511-.194 1.021-.584 1.41l-2.124 2.125c-.486.487-1.127.729-1.768.729s-1.28-.244-1.769-.729c-.472-.474-.731-1.101-.731-1.769 0-.67.261-1.297.732-1.77l4.534-4.535c.779-.779 1.805-1.168 2.829-1.168m0-2c-1.604 0-3.11.623-4.242 1.755l-7.069 7.073c-1.133 1.131-1.757 2.638-1.757 4.242s.624 3.11 1.757 4.243c1.131 1.132 2.639 1.755 4.241 1.755s3.11-.624 4.242-1.757l7.071-7.071c1.133-1.131 1.757-2.638 1.757-4.242 0-1.603-.623-3.11-1.755-4.241-1.133-1.134-2.64-1.757-4.245-1.757z"},"child":[]}]})(props);
};
function TiAttachment (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18.364 6.635c-1.561-1.559-4.1-1.559-5.658 0l-4.534 4.535c-.473.473-.733 1.1-.733 1.77 0 .668.261 1.295.732 1.768.487.486 1.128.73 1.769.73.64 0 1.279-.242 1.767-.73l2.122-2.121c.391-.395.586-.904.586-1.414 0-.512-.195-1.023-.586-1.414l-3.536 3.535c-.193.195-.511.195-.708-.002-.127-.127-.146-.275-.146-.352 0-.078.019-.227.146-.354l4.535-4.537c.778-.779 2.048-.779 2.83 0 .779.779.779 2.049 0 2.828l-4.537 4.537-2.535 2.535c-.779.779-2.049.779-2.828 0-.78-.779-.78-2.049 0-2.828l.095-.096c-.451-.6-.702-1.359-.702-2.125l-.807.807c-1.56 1.559-1.56 4.098 0 5.656.779.779 1.804 1.17 2.828 1.17s2.049-.391 2.828-1.17l7.072-7.072c1.56-1.559 1.56-4.096 0-5.656z"},"child":[]}]})(props);
};
function TiBackspaceOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 21h-10c-1.436 0-3.145-.88-3.977-2.046l-2.619-3.667-1.188-1.661c-.246-.344-.249-.894-.008-1.241l1.204-1.686 2.608-3.653c.835-1.167 2.546-2.046 3.98-2.046h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3zm-15.771-8.001l.806 1.125 2.618 3.667c.451.633 1.57 1.209 2.348 1.209h10c.552 0 1-.45 1-1.001v-9.999c0-.551-.448-1-1-1h-10c-.776 0-1.897.576-2.351 1.209l-2.608 3.652-.813 1.138zM13.707 13l2.646-2.646c.194-.194.194-.512 0-.707-.195-.194-.513-.194-.707 0l-2.646 2.646-2.646-2.646c-.195-.194-.513-.194-.707 0-.195.195-.195.513 0 .707l2.646 2.646-2.646 2.646c-.195.195-.195.513 0 .707.097.098.225.147.353.147s.256-.049.354-.146l2.646-2.647 2.646 2.646c.098.098.226.147.354.147s.256-.049.354-.146c.194-.194.194-.512 0-.707l-2.647-2.647z"},"child":[]}]})(props);
};
function TiBackspace (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19.5 5h-10c-1.266 0-2.834.807-3.57 1.837l-2.61 3.653-1.199 1.679c-.121.175-.122.492.003.664l1.188 1.664 2.619 3.667c.735 1.029 2.302 1.836 3.569 1.836h10c1.379 0 2.5-1.122 2.5-2.5v-10c0-1.378-1.121-2.5-2.5-2.5zm-2.293 9.793c.391.391.391 1.023 0 1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-2.293-2.293-2.293 2.293c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023 0-1.414l2.293-2.293-2.293-2.293c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0l2.293 2.293 2.293-2.293c.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414l-2.293 2.293 2.293 2.293z"},"child":[]}]})(props);
};
function TiBatteryCharge (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M5 10v6h11v-6h-11zm5.83 4.908l-1.21-1.908-2.62.428 3.223-2.324 1.175 1.896 2.602-.43-3.17 2.338zM19 10c0-1.654-1.346-3-3-3h-11c-1.654 0-3 1.346-3 3v6c0 1.654 1.346 3 3 3h11c1.654 0 3-1.346 3-3 1.104 0 2-.896 2-2v-2c0-1.104-.896-2-2-2zm-2 6c0 .552-.449 1-1 1h-11c-.551 0-1-.448-1-1v-6c0-.552.449-1 1-1h11c.551 0 1 .448 1 1v6z"},"child":[]}]})(props);
};
function TiBatteryFull (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M9 16c-.552 0-1-.447-1-1v-4c0-.553.448-1 1-1s1 .447 1 1v4c0 .553-.448 1-1 1zM6 16c-.552 0-1-.447-1-1v-4c0-.553.448-1 1-1s1 .447 1 1v4c0 .553-.448 1-1 1zM15 16c-.552 0-1-.447-1-1v-4c0-.553.448-1 1-1s1 .447 1 1v4c0 .553-.448 1-1 1zM12 16c-.552 0-1-.447-1-1v-4c0-.553.448-1 1-1s1 .447 1 1v4c0 .553-.448 1-1 1zM19 10c0-1.654-1.346-3-3-3h-11c-1.654 0-3 1.346-3 3v6c0 1.654 1.346 3 3 3h11c1.654 0 3-1.346 3-3 1.104 0 2-.896 2-2v-2c0-1.104-.896-2-2-2zm-2 6c0 .552-.449 1-1 1h-11c-.551 0-1-.448-1-1v-6c0-.552.449-1 1-1h11c.551 0 1 .448 1 1v6z"},"child":[]}]})(props);
};
function TiBatteryHigh (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M9 16c-.552 0-1-.447-1-1v-4c0-.553.448-1 1-1s1 .447 1 1v4c0 .553-.448 1-1 1zM6 16c-.552 0-1-.447-1-1v-4c0-.553.448-1 1-1s1 .447 1 1v4c0 .553-.448 1-1 1zM12 16c-.552 0-1-.447-1-1v-4c0-.553.448-1 1-1s1 .447 1 1v4c0 .553-.448 1-1 1zM19 10c0-1.654-1.346-3-3-3h-11c-1.654 0-3 1.346-3 3v6c0 1.654 1.346 3 3 3h11c1.654 0 3-1.346 3-3 1.104 0 2-.896 2-2v-2c0-1.104-.896-2-2-2zm-2 6c0 .552-.449 1-1 1h-11c-.551 0-1-.448-1-1v-6c0-.552.449-1 1-1h11c.551 0 1 .448 1 1v6z"},"child":[]}]})(props);
};
function TiBatteryLow (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M6 16c-.552 0-1-.447-1-1v-4c0-.553.448-1 1-1s1 .447 1 1v4c0 .553-.448 1-1 1zM19 10c0-1.654-1.346-3-3-3h-11c-1.654 0-3 1.346-3 3v6c0 1.654 1.346 3 3 3h11c1.654 0 3-1.346 3-3 1.104 0 2-.896 2-2v-2c0-1.104-.896-2-2-2zm-2 6c0 .552-.449 1-1 1h-11c-.551 0-1-.448-1-1v-6c0-.552.449-1 1-1h11c.551 0 1 .448 1 1v6z"},"child":[]}]})(props);
};
function TiBatteryMid (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M9 16c-.552 0-1-.447-1-1v-4c0-.553.448-1 1-1s1 .447 1 1v4c0 .553-.448 1-1 1zM6 16c-.552 0-1-.447-1-1v-4c0-.553.448-1 1-1s1 .447 1 1v4c0 .553-.448 1-1 1zM19 10c0-1.654-1.346-3-3-3h-11c-1.654 0-3 1.346-3 3v6c0 1.654 1.346 3 3 3h11c1.654 0 3-1.346 3-3 1.104 0 2-.896 2-2v-2c0-1.104-.896-2-2-2zm-2 6c0 .552-.449 1-1 1h-11c-.551 0-1-.448-1-1v-6c0-.552.449-1 1-1h11c.551 0 1 .448 1 1v6z"},"child":[]}]})(props);
};
function TiBeaker (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19.445 16.809l-2.64-9.809h1.195c.552 0 1-.448 1-1s-.448-1-1-1h-12c-.552 0-1 .448-1 1s.448 1 1 1h1.135c-.013.176-.048.402-.121.671l-2.459 9.138c-.218.809-.074 1.623.393 2.231.466.61 1.214.96 2.052.96h10c.838 0 1.586-.35 2.055-.959.466-.609.609-1.423.39-2.232zm-4.713-9.809l1.352 5.018-.084-.018h-8l-.084.018 1.029-3.826c.084-.312.173-.744.192-1.192h5.595zm2.734 10.824c-.087.114-.252.176-.466.176h-10c-.214 0-.379-.062-.466-.176-.086-.113-.104-.289-.048-.496l1.197-4.45c.088.073.195.122.317.122h8c.122 0 .229-.049.316-.121l1.197 4.45c.057.206.04.382-.047.495z"},"child":[]}]})(props);
};
function TiBeer (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M10 16.5c0 .275-.225.5-.5.5s-.5-.225-.5-.5v-6c0-.275.225-.5.5-.5s.5.225.5.5v6zM12 16.5c0 .275-.225.5-.5.5s-.5-.225-.5-.5v-6c0-.275.225-.5.5-.5s.5.225.5.5v6zM14 16.5c0 .275-.225.5-.5.5s-.5-.225-.5-.5v-6c0-.275.225-.5.5-.5s.5.225.5.5v6zM18.5 6h-.5v-1c0-1.104-.896-2-2-2h-9c-1.104 0-2 .896-2 2v13c0 1.656 1.344 3 3 3h7c1.656 0 3-1.344 3-3h.5c1.93 0 3.5-1.57 3.5-3.5v-5c0-1.93-1.57-3.5-3.5-3.5zm-11.5-1h9v1h-4.444l-.118.332c-.164.458-.663.73-1.117.648l-.348-.058-.173.307c-.267.475-.765.771-1.3.771-.827 0-1.5-.673-1.5-1.5v-1.5zm9 13c0 .552-.448 1-1 1h-7c-.552 0-1-.448-1-1v-9.51c.419.317.936.51 1.5.51.784 0 1.521-.376 1.989-1 .728 0 1.383-.391 1.736-1h3.775v11zm4-3.5c0 .827-.673 1.5-1.5 1.5h-1.5v-8h1.5c.827 0 1.5.673 1.5 1.5v5z"},"child":[]}]}]})(props);
};
function TiBell (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19.715 17.301c-.017-.018-1.717-1.854-1.73-6.32-.009-2.607-1.69-4.824-4.019-5.641l.034-.34c0-1.103-.896-2-2-2s-2 .897-2 2l.034.338c-2.336.816-4.019 3.036-4.019 5.646 0 4.462-1.711 6.296-1.721 6.306-.287.286-.374.716-.22 1.091s.521.619.926.619h3.143c.447 1.72 1.999 3 3.857 3s3.41-1.28 3.857-3h3.143c.4 0 .758-.243.915-.61s.076-.799-.2-1.089zm-7.715-10.301c2.189 0 3.978 1.789 3.984 3.987.002.728.046 1.396.118 2.013h-8.2c.071-.617.113-1.286.113-2.016.001-2.196 1.788-3.984 3.985-3.984zm0 13c-.737 0-1.375-.405-1.722-1h3.443c-.346.595-.984 1-1.721 1zm-5.186-3c.352-.736.705-1.731.938-3h8.502c.234 1.269.588 2.264.938 3h-10.378z"},"child":[]}]})(props);
};
function TiBook (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18 3h-11c-.265 0-.52.105-.707.293l-3 3-.057.062c-.139.165-.225.373-.235.6l-.001.053v10.992c0 1.654 1.346 3 3 3h9c1.304 0 2.416-.836 2.829-2h.671c1.402 0 2.5-1.317 2.5-3v-10c0-1.654-1.346-3-3-3zm-12 16c-.551 0-1-.448-1-1v-10h2v11h-1zm10-1c0 .552-.449 1-1 1h-7v-11h7c.551 0 1 .448 1 1v9zm3-2c0 .62-.324 1-.5 1h-.5v-8c0-1.654-1.346-3-3-3h-8.586l1-1h10.586c.551 0 1 .448 1 1v10z"},"child":[]}]})(props);
};
function TiBookmark (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17 2h-8c-1.654 0-3 1.346-3 3v14c0 .514.104.946.308 1.285.564.935 1.815 1.008 2.813.008l3.172-3.172c.375-.374 1.039-.374 1.414 0l3.172 3.172c.491.491 1.002.74 1.52.74.797 0 1.601-.629 1.601-2.033v-14c0-1.654-1.346-3-3-3zm-8 2h8c.551 0 1 .449 1 1v9.905l-2.451-2.247c-1.406-1.289-3.693-1.288-5.099 0l-2.45 2.247v-9.905c0-.551.449-1 1-1zm6.121 11.707c-.565-.565-1.318-.876-2.121-.876s-1.556.312-2.121.876l-2.879 2.879v-2.324l3.126-2.866c1.033-.947 2.714-.947 3.747 0l3.127 2.866v2.324l-2.879-2.879z"},"child":[]}]})(props);
};
function TiBriefcase (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M18 7c0-1.654-1.346-3-3-3h-6c-1.654 0-3 1.346-3 3-1.654 0-3 1.346-3 3v7c0 1.654 1.346 3 3 3h12c1.654 0 3-1.346 3-3v-7c0-1.654-1.346-3-3-3zm-9-1h6c.551 0 1 .449 1 1h-8c0-.551.449-1 1-1zm10 11c0 .551-.449 1-1 1h-12c-.551 0-1-.449-1-1v-1h14v1zm-14-2v-5c0-.551.449-1 1-1h12c.551 0 1 .449 1 1v5h-14zM13 12h-2c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1-.45 1-1s-.45-1-1-1z"},"child":[]}]}]})(props);
};
function TiBrush (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20.177 3.823c-.382-.383-.894-.586-1.415-.586-.25 0-.503.047-.744.144-4.449 1.787-7.792 4.76-10.517 9.357-.102.172-.163.355-.209.542-1.38.215-2.6.903-3.442 1.993-.916 1.185-1.295 2.695-1.066 4.254l.216 1.473 1.473.217c.293.043.589.064.88.064 2.743 0 4.949-1.909 5.367-4.564.188-.047.371-.115.544-.218 4.598-2.728 7.571-6.069 9.355-10.517.298-.743.123-1.593-.442-2.159zm-14.824 15.458c-.192 0-.389-.016-.59-.044-.309-2.104 1.055-3.81 3-4.021l1.021 1.021c-.192 1.76-1.605 3.044-3.431 3.044zm4.89-4.502l-1.021-1.021c.38-.641.774-1.233 1.178-1.804.027.041 1.639 1.653 1.639 1.653-.568.401-1.158.794-1.796 1.172zm2.608-1.773s-1.821-1.801-1.879-1.824c2.147-2.784 4.651-4.685 7.791-5.943-1.255 3.127-3.144 5.623-5.912 7.767z"},"child":[]}]})(props);
};
function TiBusinessCard (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M20 20h-16c-1.654 0-3-1.346-3-3v-10c0-1.654 1.346-3 3-3h16c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3zm-16-14c-.551 0-1 .449-1 1v10c0 .551.449 1 1 1h16c.551 0 1-.449 1-1v-10c0-.551-.449-1-1-1h-16zM10 15h-4c-.553 0-1-.448-1-1s.447-1 1-1h4c.553 0 1 .448 1 1s-.447 1-1 1zM10 11h-4c-.553 0-1-.448-1-1s.447-1 1-1h4c.553 0 1 .448 1 1s-.447 1-1 1z"},"child":[]},{"tag":"circle","attr":{"cx":"16","cy":"10.5","r":"2"},"child":[]},{"tag":"path","attr":{"d":"M16 13.356c-1.562 0-2.5.715-2.5 1.429 0 .357.938.715 2.5.715 1.466 0 2.5-.357 2.5-.715 0-.714-.98-1.429-2.5-1.429z"},"child":[]}]}]})(props);
};
function TiCalculator (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17 21h-8c-1.7 0-3-1.3-3-3v-12c0-1.7 1.3-3 3-3h8c1.7 0 3 1.3 3 3v12c0 1.7-1.3 3-3 3zm-8-16c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1h8c.6 0 1-.4 1-1v-12c0-.6-.4-1-1-1h-8z"},"child":[]},{"tag":"circle","attr":{"cx":"10","cy":"11","r":"1"},"child":[]},{"tag":"circle","attr":{"cx":"13","cy":"11","r":"1"},"child":[]},{"tag":"circle","attr":{"cx":"16","cy":"11","r":"1"},"child":[]},{"tag":"circle","attr":{"cx":"10","cy":"14","r":"1"},"child":[]},{"tag":"circle","attr":{"cx":"13","cy":"14","r":"1"},"child":[]},{"tag":"circle","attr":{"cx":"16","cy":"14","r":"1"},"child":[]},{"tag":"circle","attr":{"cx":"10","cy":"17","r":"1"},"child":[]},{"tag":"circle","attr":{"cx":"13","cy":"17","r":"1"},"child":[]},{"tag":"circle","attr":{"cx":"16","cy":"17","r":"1"},"child":[]},{"tag":"path","attr":{"d":"M16 7v1h-6v-1h6m1-1h-8v3h8v-3z"},"child":[]}]})(props);
};
function TiCalendarOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 6.184v-.184c0-1.657-1.343-3-3-3s-3 1.343-3 3h-2c0-1.657-1.343-3-3-3s-3 1.343-3 3v.184c-1.161.415-2 1.514-2 2.816v9c0 1.654 1.346 3 3 3h12c1.654 0 3-1.346 3-3v-9c0-1.302-.839-2.401-2-2.816zm-4-.184c0-.552.447-1 1-1s1 .448 1 1v2c0 .552-.447 1-1 1s-1-.448-1-1v-2zm-8 0c0-.552.447-1 1-1s1 .448 1 1v2c0 .552-.447 1-1 1s-1-.448-1-1v-2zm12 12c0 .551-.448 1-1 1h-12c-.552 0-1-.449-1-1v-6h14v6zm0-7h-14v-2c0-.551.448-1 1-1 0 1.104.896 2 2 2s2-.896 2-2h4c0 1.104.896 2 2 2s2-.896 2-2c.552 0 1 .449 1 1v2z"},"child":[]}]})(props);
};
function TiCalendar (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 6.184v-.184c0-1.657-1.343-3-3-3s-3 1.343-3 3h-2c0-1.657-1.343-3-3-3s-3 1.343-3 3v.184c-1.161.415-2 1.514-2 2.816v9c0 1.654 1.346 3 3 3h12c1.654 0 3-1.346 3-3v-9c0-1.302-.839-2.401-2-2.816zm-4-.184c0-.552.447-1 1-1s1 .448 1 1v2c0 .552-.447 1-1 1s-1-.448-1-1v-2zm-8 0c0-.552.447-1 1-1s1 .448 1 1v2c0 .552-.447 1-1 1s-1-.448-1-1v-2zm12 12c0 .551-.448 1-1 1h-12c-.552 0-1-.449-1-1v-6h14v6z"},"child":[]}]})(props);
};
function TiCameraOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 20h-14c-1.654 0-3-1.346-3-3v-8c0-1.654 1.346-3 3-3h1.586l1-1c.579-.579 1.596-1 2.414-1h4c.818 0 1.835.421 2.414 1l1 1h1.586c1.654 0 3 1.346 3 3v8c0 1.654-1.346 3-3 3zm-14-12c-.552 0-1 .448-1 1v8c0 .552.448 1 1 1h14c.552 0 1-.448 1-1v-8c0-.552-.448-1-1-1h-2c-.266 0-.52-.105-.707-.293l-1.293-1.293c-.201-.201-.715-.414-1-.414h-4c-.285 0-.799.213-1 .414l-1.293 1.293c-.187.188-.441.293-.707.293h-2zM12 10c1.379 0 2.5 1.121 2.5 2.5s-1.121 2.5-2.5 2.5-2.5-1.121-2.5-2.5 1.121-2.5 2.5-2.5m0-1c-1.934 0-3.5 1.566-3.5 3.5 0 1.932 1.566 3.5 3.5 3.5s3.5-1.568 3.5-3.5c0-1.934-1.566-3.5-3.5-3.5zM18 8.699c-.719 0-1.3.582-1.3 1.301s.581 1.299 1.3 1.299 1.3-.58 1.3-1.299-.581-1.301-1.3-1.301z"},"child":[]}]})(props);
};
function TiCamera (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 6h-1.586l-1-1c-.579-.579-1.595-1-2.414-1h-4c-.819 0-1.835.421-2.414 1l-1 1h-1.586c-1.654 0-3 1.346-3 3v8c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-8c0-1.654-1.346-3-3-3zm-7 10c-1.933 0-3.5-1.568-3.5-3.5 0-1.934 1.567-3.5 3.5-3.5s3.5 1.566 3.5 3.5c0 1.932-1.567 3.5-3.5 3.5zm6-4.701c-.719 0-1.3-.58-1.3-1.299s.581-1.301 1.3-1.301 1.3.582 1.3 1.301-.581 1.299-1.3 1.299z"},"child":[]}]})(props);
};
function TiCancelOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 20.5c-4.688 0-8.5-3.812-8.5-8.5s3.812-8.5 8.497-8.5c4.69 0 8.503 3.812 8.503 8.5s-3.812 8.5-8.5 8.5zm0-15c-3.586 0-6.5 2.916-6.5 6.5s2.916 6.5 6.5 6.5 6.5-2.916 6.5-6.5-2.916-6.5-6.5-6.5zM12.003 8.5c1.929 0 3.497 1.57 3.497 3.5 0 .206-.02.412-.057.615l-4.057-4.059c.203-.036.408-.056.614-.056m.003-1c-.882 0-1.696.262-2.39.697l6.188 6.188c.438-.692.699-1.508.699-2.387 0-2.48-2.014-4.498-4.497-4.498zM8.557 11.384l4.059 4.06c-.204.036-.409.056-.616.056-1.93 0-3.5-1.57-3.5-3.502 0-.206.02-.412.057-.614m-.358-1.773c-.435.694-.699 1.508-.699 2.387 0 2.486 2.016 4.502 4.5 4.502.879 0 1.693-.264 2.387-.699l-6.188-6.19z"},"child":[]}]})(props);
};
function TiCancel (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 4c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm-5 8c0-.832.224-1.604.584-2.295l6.711 6.711c-.691.36-1.463.584-2.295.584-2.757 0-5-2.243-5-5zm9.416 2.295l-6.711-6.711c.691-.36 1.463-.584 2.295-.584 2.757 0 5 2.243 5 5 0 .832-.224 1.604-.584 2.295z"},"child":[]}]})(props);
};
function TiChartAreaOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 17h-16c-.552 0-1-.447-1-1v-3c0-.68.234-1.346.658-1.874l4-5c.98-1.226 2.885-1.469 4.143-.524l1.674 1.254 2.185-2.729c.57-.717 1.424-1.127 2.341-1.127.679 0 1.343.232 1.873.657.716.572 1.126 1.426 1.126 2.343v10c0 .553-.448 1-1 1zm-15-2h14v-9c0-.307-.137-.59-.375-.779-.227-.183-.465-.221-.624-.221-.306 0-.591.137-.782.376l-2.789 3.485c-.337.423-.949.5-1.381.176l-2.449-1.837c-.422-.316-1.055-.233-1.381.176l-4 5c-.181.228-.219.464-.219.624v2zM20 21h-16c-.552 0-1-.447-1-1s.448-1 1-1h16c.552 0 1 .447 1 1s-.448 1-1 1z"},"child":[]}]})(props);
};
function TiChartArea (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 6c0-.587-.257-1.167-.75-1.562-.863-.69-2.121-.551-2.812.312l-2.789 3.486-2.449-1.836c-.864-.648-2.087-.493-2.762.351l-4 5c-.294.368-.438.811-.438 1.249v3h16v-10zM20 19h-16c-.552 0-1 .447-1 1s.448 1 1 1h16c.552 0 1-.447 1-1s-.448-1-1-1z"},"child":[]}]})(props);
};
function TiChartBarOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17 5c-.771 0-1.468.301-2 .779v-1.779c0-1.654-1.346-3-3-3s-3 1.346-3 3v4.779c-.532-.478-1.229-.779-2-.779-1.654 0-3 1.346-3 3v6h16v-9c0-1.654-1.346-3-3-3zm-5-2c.551 0 1 .448 1 1v11h-2v-11c0-.552.449-1 1-1zm-4 12h-2v-4c0-.552.449-1 1-1s1 .448 1 1v4zm10 0h-2v-7c0-.552.449-1 1-1s1 .448 1 1v7zM19 21h-14c-.552 0-1-.447-1-1s.448-1 1-1h14c.552 0 1 .447 1 1s-.448 1-1 1z"},"child":[]}]})(props);
};
function TiChartBar (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M14 4c0-1.105-.896-2-2-2s-2 .895-2 2v12h4v-12zM19 8c0-1.105-.896-2-2-2s-2 .895-2 2v8h4v-8zM9 11c0-1.105-.896-2-2-2s-2 .895-2 2v5h4v-5zM19 19h-14c-.553 0-1 .447-1 1s.447 1 1 1h14c.553 0 1-.447 1-1s-.447-1-1-1z"},"child":[]}]})(props);
};
function TiChartLineOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M5.999 17c-.677 0-1.342-.234-1.873-.658-.626-.501-1.019-1.215-1.107-2.011-.089-.796.138-1.58.639-2.206l4-5c.978-1.225 2.883-1.471 4.143-.523l1.674 1.254 2.184-2.729c.571-.716 1.425-1.127 2.342-1.127.679 0 1.343.232 1.873.657.626.501 1.021 1.216 1.108 2.013s-.14 1.58-.641 2.204l-4 5c-.977 1.226-2.882 1.471-4.143.526l-1.674-1.256-2.184 2.729c-.57.716-1.424 1.127-2.341 1.127zm4.001-9c-.306 0-.591.137-.781.374l-4 5.001c-.167.208-.243.471-.213.734.03.266.161.504.369.67.228.183.465.221.624.221.306 0 .591-.137.782-.376l3.395-4.244 3.224 2.42c.42.316 1.056.231 1.381-.176l4-5.001c.167-.208.242-.469.213-.734-.03-.266-.161-.504-.369-.67-.227-.182-.464-.22-.624-.22-.306 0-.591.137-.782.376l-3.395 4.242-3.224-2.417c-.175-.132-.382-.2-.6-.2zM19 21h-14c-.552 0-1-.447-1-1s.448-1 1-1h14c.552 0 1 .447 1 1s-.448 1-1 1z"},"child":[]}]})(props);
};
function TiChartLine (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M4.75 15.561c.369.294.811.439 1.248.439.588 0 1.168-.258 1.563-.752l2.789-3.486 2.45 1.838c.864.648 2.088.492 2.762-.352l4-5c.69-.861.55-2.121-.312-2.811-.863-.689-2.121-.551-2.812.312l-2.789 3.486-2.449-1.835c-.864-.648-2.087-.494-2.762.35l-4 5c-.69.863-.549 2.121.312 2.811zM5 21h14c.553 0 1-.447 1-1s-.447-1-1-1h-14c-.553 0-1 .447-1 1s.447 1 1 1z"},"child":[]}]})(props);
};
function TiChartPieOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18.227 7.609l.557-.559c.396-.396.607-.943.582-1.504-.026-.561-.286-1.084-.717-1.443-2.129-1.775-4.711-2.848-7.469-3.097l-.18-.006c-.497 0-.979.186-1.35.523-.414.379-.65.915-.65 1.477v2.229c-3.657.865-6.333 4.188-6.333 8.006 0 4.547 3.688 8.244 8.224 8.244 1.594 0 3.11-.479 4.441-1.345.277.142.583.226.9.226l.109-.004c.569-.03 1.098-.305 1.453-.75 1.421-1.781 2.204-4.019 2.204-6.297.002-2.032-.625-4.027-1.771-5.7zm-7.336 11.87c-3.438 0-6.224-2.793-6.224-6.244 0-3.137 2.317-5.729 5.333-6.164v6.408l4.609 4.754c-1.037.779-2.322 1.246-3.718 1.246zm.109-7.454v-9.025c2.411.218 4.607 1.173 6.366 2.641l-6.366 6.384zm.214 1.269l5.019-5.028c1.104 1.385 1.769 3.141 1.769 5.043 0 1.914-.664 3.666-1.769 5.051l-5.019-5.066z"},"child":[]}]})(props);
};
function TiChartPie (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11.614 13.98l4.908 4.922c.39.391.99.36 1.286-.106.88-1.394 1.393-3.044 1.393-4.815 0-2.131-.741-4.086-1.972-5.631l-5.615 5.63zM9 14.396v-7.355c-3.391.487-6 3.405-6 6.939 0 3.876 3.134 7.02 7 7.02 1.572 0 3.018-.526 4.186-1.403l-5.186-5.201zM16.331 6.213c.39-.391.365-.999-.089-1.313-1.253-.868-2.695-1.479-4.251-1.765-.544-.1-.991.312-.991.865v7.56l5.331-5.347z"},"child":[]}]})(props);
};
function TiChevronLeftOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M13 20c-.802 0-1.555-.312-2.122-.879l-7.121-7.121 7.122-7.121c1.133-1.133 3.11-1.133 4.243 0 .566.566.878 1.32.878 2.121s-.312 1.555-.879 2.122l-2.878 2.878 2.878 2.879c.567.566.879 1.32.879 2.121s-.312 1.555-.879 2.122c-.566.566-1.319.878-2.121.878zm-6.415-8l5.708 5.707c.378.378 1.037.377 1.414 0 .189-.189.293-.439.293-.707s-.104-.518-.293-.707l-4.292-4.293 4.292-4.293c.189-.189.293-.44.293-.707s-.104-.518-.293-.707c-.378-.379-1.037-.378-1.414-.001l-5.708 5.708z"},"child":[]}]})(props);
};
function TiChevronLeft (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M14.414 5.586c-.78-.781-2.048-.781-2.828 0l-6.415 6.414 6.415 6.414c.39.391.902.586 1.414.586s1.024-.195 1.414-.586c.781-.781.781-2.047 0-2.828l-3.585-3.586 3.585-3.586c.781-.781.781-2.047 0-2.828z"},"child":[]}]})(props);
};
function TiChevronRightOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M10 20c-.802 0-1.555-.312-2.122-.879-.566-.566-.878-1.32-.878-2.121s.312-1.555.879-2.122l2.878-2.878-2.878-2.879c-.567-.566-.879-1.32-.879-2.121s.312-1.555.879-2.122c1.133-1.132 3.109-1.133 4.243.001l7.121 7.121-7.122 7.121c-.566.567-1.319.879-2.121.879zm0-14c-.268 0-.518.104-.707.292-.189.19-.293.441-.293.708s.104.518.293.707l4.292 4.293-4.292 4.293c-.189.189-.293.439-.293.707s.104.518.293.707c.378.379 1.037.378 1.414.001l5.708-5.708-5.708-5.707c-.189-.189-.439-.293-.707-.293z"},"child":[]}]})(props);
};
function TiChevronRight (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M8.586 5.586c-.781.781-.781 2.047 0 2.828l3.585 3.586-3.585 3.586c-.781.781-.781 2.047 0 2.828.39.391.902.586 1.414.586s1.024-.195 1.414-.586l6.415-6.414-6.415-6.414c-.78-.781-2.048-.781-2.828 0z"},"child":[]}]})(props);
};
function TiClipboard (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M17 3h-10c-1.654 0-3 1.346-3 3v12c0 1.654 1.346 3 3 3h10c1.654 0 3-1.346 3-3v-12c0-1.654-1.346-3-3-3zm-8 2h6v1c0 .551-.449 1-1 1h-4c-.551 0-1-.449-1-1v-1zm9 13c0 .551-.449 1-1 1h-10c-.551 0-1-.449-1-1v-12c0-.551.449-1 1-1h1v1c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-1h1c.551 0 1 .449 1 1v12zM16 17h-8c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h8c.276 0 .5.224.5.5s-.224.5-.5.5zM16 14h-8c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h8c.276 0 .5.224.5.5s-.224.5-.5.5zM16 11h-8c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h8c.276 0 .5.224.5.5s-.224.5-.5.5z"},"child":[]}]}]})(props);
};
function TiCloudStorageOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M16.5 8.999l-.352.015c-.824-2.375-3.312-4.015-5.898-4.015-3.309 0-6.25 2.69-6.25 6v.126c-1 .445-2.75 2.014-2.75 3.875 0 2.206 2.044 4 4.25 4h11c2.757 0 5-2.244 5-5s-2.243-5.001-5-5.001zm0 8.001h-4.5v-3.794l2.146 2.146c.098.099.226.146.354.146s.256-.049.354-.146c.195-.194.195-.512 0-.707l-2.998-3-.164-.107c-.123-.051-.26-.051-.383 0l-.162.107-3 3c-.194.195-.194.513 0 .707.099.099.227.146.354.146s.256-.049.354-.146l2.145-2.146v3.794h-5.5c-1.104 0-2-.896-2-2s.896-2 1.908-2.005l1.422.015-.248-1.201c-.055-.264-.082-.536-.082-.809 0-2.206 1.794-4 4-4 1.951 0 3.604 1.402 3.93 3.334l.187 1.102 1.073-.306c.312-.089.569-.13.812-.13 1.653 0 3 1.346 3 3s-1.348 3-3.002 3z"},"child":[]}]})(props);
};
function TiCloudStorage (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17 9l-.351.015c-.825-2.377-3.062-4.015-5.649-4.015-3.309 0-6 2.691-6 6l.001.126c-1.724.445-3.001 2.013-3.001 3.874 0 2.206 1.794 4 4 4h5v-4.586l-1.293 1.293c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023 0-1.414l2.999-2.999c.093-.093.203-.166.326-.217.244-.101.52-.101.764 0 .123.051.233.124.326.217l2.999 2.999c.391.391.391 1.023 0 1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-1.293-1.293v4.586h4c2.757 0 5-2.243 5-5s-2.243-5-5-5z"},"child":[]}]})(props);
};
function TiCodeOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M7.828 19c-.801 0-1.555-.312-2.121-.879l-5.121-5.121 5.121-5.121c1.133-1.134 3.112-1.134 4.243.001 1.169 1.168 1.169 3.072-.001 4.241l-.878.879.878.879c1.17 1.169 1.17 3.073 0 4.242-.564.567-1.318.879-2.121.879zm-4.414-6l3.707 3.707c.38.379 1.039.377 1.413.001.391-.391.391-1.025.001-1.415l-2.292-2.293 2.292-2.293c.39-.39.39-1.024 0-1.414-.378-.379-1.036-.377-1.414 0l-3.707 3.707zM16.172 19c-.803 0-1.557-.312-2.122-.88-1.169-1.168-1.169-3.072.001-4.241l.878-.879-.878-.879c-1.17-1.169-1.17-3.073 0-4.242 1.129-1.133 3.109-1.134 4.242 0l5.121 5.121-5.121 5.121c-.566.567-1.32.879-2.121.879zm-.001-10c-.267 0-.518.104-.705.292-.391.391-.391 1.025-.001 1.415l2.292 2.293-2.292 2.293c-.39.39-.39 1.024 0 1.414.377.378 1.035.379 1.414 0l3.707-3.707-3.707-3.707c-.19-.189-.441-.293-.708-.293z"},"child":[]}]}]})(props);
};
function TiCode (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M8.171 18c-.512 0-1.023-.195-1.414-.586l-4.414-4.414 4.414-4.414c.781-.781 2.049-.781 2.828 0 .781.781.781 2.047 0 2.828l-1.585 1.586 1.585 1.586c.781.781.781 2.047 0 2.828-.39.391-.902.586-1.414.586zM15.829 18c-.512 0-1.024-.195-1.414-.586-.781-.781-.781-2.047 0-2.828l1.585-1.586-1.585-1.586c-.781-.781-.781-2.047 0-2.828.779-.781 2.047-.781 2.828 0l4.414 4.414-4.414 4.414c-.39.391-.902.586-1.414.586z"},"child":[]}]})(props);
};
function TiCoffee (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M17 19h-12c-.553 0-1-.447-1-1s.447-1 1-1h12c.553 0 1 .447 1 1s-.447 1-1 1zM17.5 5h-12.5v9c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-2h.5c1.93 0 3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5zm-2.5 9h-8v-7h8v7zm2.5-4h-1.5v-3h1.5c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5z"},"child":[]}]}]})(props);
};
function TiCogOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M13 5l.855 3.42 3.389-.971 1.501 2.6-2.535 2.449 2.535 2.451-1.5 2.6-3.39-.971-.855 3.422h-3l-.855-3.422-3.39.971-1.501-2.6 2.535-2.451-2.534-2.449 1.5-2.6 3.39.971.855-3.42h3m0-2h-3c-.918 0-1.718.625-1.939 1.516l-.354 1.412-1.4-.4c-.184-.053-.369-.078-.552-.078-.7 0-1.368.37-1.731 1l-1.5 2.6c-.459.796-.317 1.802.342 2.438l1.047 1.011-1.048 1.015c-.66.637-.802 1.643-.343 2.438l1.502 2.6c.363.631 1.031 1 1.731 1 .183 0 .368-.025.552-.076l1.399-.401.354 1.415c.222.885 1.022 1.51 1.94 1.51h3c.918 0 1.718-.625 1.939-1.516l.354-1.414 1.399.4c.184.053.369.077.552.077.7 0 1.368-.37 1.731-1l1.5-2.6c.459-.796.317-1.8-.342-2.438l-1.047-1.013 1.047-1.013c.66-.637.801-1.644.342-2.438l-1.5-2.6c-.365-.631-1.031-1-1.732-1-.184 0-.368.025-.551.076l-1.4.401-.354-1.413c-.22-.884-1.02-1.509-1.938-1.509zM11.5 10.5c1.104 0 2 .895 2 2 0 1.104-.896 2-2 2s-2-.896-2-2c0-1.105.896-2 2-2m0-1c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z"},"child":[]}]})(props);
};
function TiCog (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M9.387 17.548l.371 1.482c.133.533.692.97 1.242.97h1c.55 0 1.109-.437 1.242-.97l.371-1.482c.133-.533.675-.846 1.203-.694l1.467.42c.529.151 1.188-.114 1.462-.591l.5-.867c.274-.477.177-1.179-.219-1.562l-1.098-1.061c-.396-.383-.396-1.008.001-1.39l1.096-1.061c.396-.382.494-1.084.22-1.561l-.501-.867c-.275-.477-.933-.742-1.461-.591l-1.467.42c-.529.151-1.07-.161-1.204-.694l-.37-1.48c-.133-.532-.692-.969-1.242-.969h-1c-.55 0-1.109.437-1.242.97l-.37 1.48c-.134.533-.675.846-1.204.695l-1.467-.42c-.529-.152-1.188.114-1.462.59l-.5.867c-.274.477-.177 1.179.22 1.562l1.096 1.059c.395.383.395 1.008 0 1.391l-1.098 1.061c-.395.383-.494 1.085-.219 1.562l.501.867c.274.477.933.742 1.462.591l1.467-.42c.528-.153 1.07.16 1.203.693zm2.113-7.048c1.104 0 2 .895 2 2 0 1.104-.896 2-2 2s-2-.896-2-2c0-1.105.896-2 2-2z"},"child":[]}]})(props);
};
function TiCompass (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M12 5c3.859.001 7 3.142 7 7.001 0 3.858-3.141 6.998-7 6.999-3.859 0-7-3.14-7-6.999s3.141-7 7-7.001m0-2c-4.971.001-9 4.03-9 9.001 0 4.97 4.029 8.999 9 8.999 4.97-.001 9-4.03 9-8.999 0-4.971-4.029-9-9-9.001zM16.182 7.819c-.129-.128-.315-.178-.491-.127l-5.951 1.706c-.166.048-.295.177-.342.343l-1.707 5.951c-.051.175-.002.363.127.491.095.095.223.146.354.146l.138-.02 5.95-1.708c.165-.047.295-.177.342-.343l1.707-5.949c.05-.173.002-.361-.127-.49zm-7.282 7.282l1.383-4.817 3.434 3.435-4.817 1.382z"},"child":[]}]}]})(props);
};
function TiContacts (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M19 3h-11c-1.654 0-3 1.346-3 3v1h-1c-.553 0-1 .448-1 1s.447 1 1 1h1v2h-1c-.553 0-1 .448-1 1s.447 1 1 1h1v2h-1c-.553 0-1 .448-1 1s.447 1 1 1h1v1c0 1.654 1.346 3 3 3h11c1.654 0 3-1.346 3-3v-12c0-1.654-1.346-3-3-3zm-12 3c0-.551.449-1 1-1v2h-1v-1zm0 3h1v2h-1v-2zm0 4h1v2h-1v-2zm0 5v-1h1v2c-.551 0-1-.449-1-1zm13 0c0 .551-.449 1-1 1h-10v-14h10c.551 0 1 .449 1 1v12z"},"child":[]},{"tag":"circle","attr":{"cx":"14","cy":"10.5","r":"2"},"child":[]},{"tag":"path","attr":{"d":"M14 13.356c-1.562 0-2.5.715-2.5 1.429 0 .357.938.715 2.5.715 1.466 0 2.5-.357 2.5-.715 0-.714-.98-1.429-2.5-1.429z"},"child":[]}]}]})(props);
};
function TiCreditCard (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M17 7h-11c-1.654 0-3 1.346-3 3v7c0 1.654 1.346 3 3 3h11c1.654 0 3-1.346 3-3v-7c0-1.654-1.346-3-3-3zm1 10c0 .552-.448 1-1 1h-11c-.552 0-1-.448-1-1v-4h13v4zm0-6h-13v-1c0-.552.448-1 1-1h11c.552 0 1 .448 1 1v1zM14 16h2c.276 0 .5-.224.5-.5s-.224-.5-.5-.5h-2c-.276 0-.5.224-.5.5s.224.5.5.5z"},"child":[]}]}]})(props);
};
function TiCss3 (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M5.7 3.4l-.6 3.2h12.3l-.4 2.1h-12.3l-.6 3.2h12.3l-.7 3.6-5 1.7-4.3-1.7.3-1.6h-3l-.7 3.8 7.1 2.9 8.2-2.9 1.1-5.8.2-1.2 1.4-7.3h-15.3z"},"child":[]}]})(props);
};
function TiDatabase (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18.983 8.791c-.176-3.704-3.236-6.666-6.983-6.666s-6.807 2.962-6.983 6.666l-.017.084v6.25c0 3.86 3.141 7 7 7s7-3.14 7-7v-6.25l-.017-.084zm-6.983 8.834c-2.22 0-4.132-1.324-5-3.222v-.388c1.271 1.3 3.042 2.11 5 2.11s3.729-.811 5-2.11v.388c-.868 1.898-2.78 3.222-5 3.222zm0-13.5c2.757 0 5 2.243 5 5s-2.243 5-5 5-5-2.243-5-5 2.243-5 5-5zm0 16c-2.271 0-4.172-1.532-4.778-3.609 1.188 1.293 2.888 2.109 4.778 2.109s3.59-.816 4.778-2.109c-.606 2.077-2.507 3.609-4.778 3.609z"},"child":[]}]})(props);
};
function TiDeleteOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 3c-4.963 0-9 4.038-9 9s4.037 9 9 9 9-4.038 9-9-4.037-9-9-9zm0 16c-3.859 0-7-3.14-7-7s3.141-7 7-7 7 3.14 7 7-3.141 7-7 7zM12.707 12l2.646-2.646c.194-.194.194-.512 0-.707-.195-.194-.513-.194-.707 0l-2.646 2.646-2.646-2.647c-.195-.194-.513-.194-.707 0-.195.195-.195.513 0 .707l2.646 2.647-2.646 2.646c-.195.195-.195.513 0 .707.097.098.225.147.353.147s.256-.049.354-.146l2.646-2.647 2.646 2.646c.098.098.226.147.354.147s.256-.049.354-.146c.194-.194.194-.512 0-.707l-2.647-2.647z"},"child":[]}]})(props);
};
function TiDelete (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 4c-4.419 0-8 3.582-8 8s3.581 8 8 8 8-3.582 8-8-3.581-8-8-8zm3.707 10.293c.391.391.391 1.023 0 1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-2.293-2.293-2.293 2.293c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023 0-1.414l2.293-2.293-2.293-2.293c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0l2.293 2.293 2.293-2.293c.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414l-2.293 2.293 2.293 2.293z"},"child":[]}]})(props);
};
function TiDeviceDesktop (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M21 1h-18c-1.654 0-3 1.346-3 3v11c0 1.654 1.346 3 3 3h6v2h-3c-.552 0-1 .448-1 1s.448 1 1 1h12c.552 0 1-.448 1-1s-.448-1-1-1h-3v-2h6c1.654 0 3-1.346 3-3v-11c0-1.654-1.346-3-3-3zm-7 19h-4v-2h4v2zm8-5c0 .551-.449 1-1 1h-18c-.551 0-1-.449-1-1v-11c0-.551.449-1 1-1h18c.551 0 1 .449 1 1v11zM20 4h-16c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1zm0 9h-16v-8h16v8z"},"child":[]}]}]})(props);
};
function TiDeviceLaptop (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21.989 16.049c.009-.315.011-.657.011-1.049v-9c0-1.654-1.346-3-3-3h-14c-1.654 0-3 1.346-3 3v9c0 .385.002.73.012 1.049-1.145.228-2.012 1.24-2.012 2.451 0 1.378 1.122 2.5 2.5 2.5h19c1.378 0 2.5-1.122 2.5-2.5 0-1.211-.866-2.222-2.011-2.451zm-17.989-10.049c0-.551.449-1 1-1h14c.551 0 1 .449 1 1v9c0 .388-.005.726-.014 1h-.986v-9c0-.55-.45-1-1-1h-12c-.55 0-1 .45-1 1v9h-.98c-.012-.264-.02-.599-.02-1v-9zm14 10h-12v-9h12v9zm3.5 3h-19c-.271 0-.5-.229-.5-.5s.229-.5.5-.5h19c.271 0 .5.229.5.5s-.229.5-.5.5z"},"child":[]}]})(props);
};
function TiDevicePhone (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M15 3h-7c-1.654 0-3 1.346-3 3v12c0 1.654 1.346 3 3 3h7c1.654 0 3-1.346 3-3v-12c0-1.654-1.346-3-3-3zm1 15c0 .551-.449 1-1 1h-7c-.551 0-1-.449-1-1v-12c0-.551.449-1 1-1h7c.551 0 1 .449 1 1v12zM14 6h-5c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h1.5c0 .553.448 1 1 1s1-.447 1-1h1.5c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1zm0 10h-5v-9h5v9z"},"child":[]}]}]})(props);
};
function TiDeviceTablet (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M17 4h-9c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3.5c0 .553.448 1 1 1s1-.447 1-1h3.5c.55 0 1-.45 1-1v-12c0-.55-.45-1-1-1zm0 13h-9v-12h9v12zM18 1h-11c-1.654 0-3 1.346-3 3v15c0 1.654 1.346 3 3 3h11c1.654 0 3-1.346 3-3v-15c0-1.654-1.346-3-3-3zm1 18c0 .551-.449 1-1 1h-11c-.551 0-1-.449-1-1v-15c0-.551.449-1 1-1h11c.551 0 1 .449 1 1v15z"},"child":[]}]}]})(props);
};
function TiDirections (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20.908 9.5l-2.754-2.607c-.568-.541-1.447-.893-2.237-.893h-2.917v-.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5v.5h-3.5c-1.93 0-3.5 1.57-3.5 3.5 0 1.396.828 2.596 2.016 3.157l-1.844 1.843 2.561 2.561c.57.57 1.46.939 2.268.939h2.2l.8 4h1l.8-4h2.7c1.931 0 3.5-1.57 3.5-3.5 0-.902-.353-1.718-.915-2.339l.072-.056 2.75-2.605zm-5.408 6.5h-7.5c-.275 0-.658-.158-.854-.354l-1.146-1.146 1.146-1.146c.195-.195.577-.354.854-.354h7.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5zm1.279-5.344c-.199.19-.586.344-.862.344h-9.417c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5h9.417c.276 0 .663.154.862.344l1.221 1.156-1.221 1.156z"},"child":[]}]})(props);
};
function TiDivideOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 8.5c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4c-.552 0-1 .449-1 1s.448 1 1 1 1-.449 1-1-.448-1-1-1zM12 21.5c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4c-.552 0-1 .449-1 1s.448 1 1 1 1-.449 1-1-.448-1-1-1zM18 15h-12c-1.654 0-3-1.346-3-3s1.346-3 3-3h12c1.654 0 3 1.346 3 3s-1.346 3-3 3zm-12-4c-.552 0-1 .449-1 1s.448 1 1 1h12c.552 0 1-.449 1-1s-.448-1-1-1h-12z"},"child":[]}]})(props);
};
function TiDivide (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"6","r":"2.25"},"child":[]},{"tag":"circle","attr":{"cx":"12","cy":"18","r":"2.25"},"child":[]},{"tag":"path","attr":{"d":"M18 10h-12c-1.104 0-2 .896-2 2s.896 2 2 2h12c1.104 0 2-.896 2-2s-.896-2-2-2z"},"child":[]}]})(props);
};
function TiDocumentAdd (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M15 12h-2v-2c0-.553-.447-1-1-1s-1 .447-1 1v2h-2c-.553 0-1 .447-1 1s.447 1 1 1h2v2c0 .553.447 1 1 1s1-.447 1-1v-2h2c.553 0 1-.447 1-1s-.447-1-1-1zM19.707 7.293l-4-4c-.187-.188-.441-.293-.707-.293h-8c-1.654 0-3 1.346-3 3v12c0 1.654 1.346 3 3 3h10c1.654 0 3-1.346 3-3v-10c0-.266-.105-.52-.293-.707zm-2.121.707h-1.086c-.827 0-1.5-.673-1.5-1.5v-1.086l2.586 2.586zm-.586 11h-10c-.552 0-1-.448-1-1v-12c0-.552.448-1 1-1h7v1.5c0 1.379 1.121 2.5 2.5 2.5h1.5v9c0 .552-.448 1-1 1z"},"child":[]}]})(props);
};
function TiDocumentDelete (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19.707 7.293l-4-4c-.187-.188-.441-.293-.707-.293h-8c-1.654 0-3 1.346-3 3v12c0 1.654 1.346 3 3 3h10c1.654 0 3-1.346 3-3v-10c0-.266-.105-.52-.293-.707zm-2.121.707h-1.086c-.827 0-1.5-.673-1.5-1.5v-1.086l2.586 2.586zm-.586 11h-10c-.552 0-1-.448-1-1v-12c0-.552.448-1 1-1h7v1.5c0 1.379 1.121 2.5 2.5 2.5h1.5v9c0 .552-.448 1-1 1zM15 14h-6c-.553 0-1-.447-1-1s.447-1 1-1h6c.553 0 1 .447 1 1s-.447 1-1 1z"},"child":[]}]})(props);
};
function TiDocumentText (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M17 21h-10c-1.654 0-3-1.346-3-3v-12c0-1.654 1.346-3 3-3h10c1.654 0 3 1.346 3 3v12c0 1.654-1.346 3-3 3zm-10-16c-.551 0-1 .449-1 1v12c0 .551.449 1 1 1h10c.551 0 1-.449 1-1v-12c0-.551-.449-1-1-1h-10zM16 11h-8c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h8c.276 0 .5.224.5.5s-.224.5-.5.5zM16 8h-8c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h8c.276 0 .5.224.5.5s-.224.5-.5.5zM16 14h-8c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h8c.276 0 .5.224.5.5s-.224.5-.5.5zM16 17h-8c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h8c.276 0 .5.224.5.5s-.224.5-.5.5z"},"child":[]}]}]})(props);
};
function TiDocument (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19.707 7.293l-4-4c-.187-.188-.441-.293-.707-.293h-8c-1.654 0-3 1.346-3 3v12c0 1.654 1.346 3 3 3h10c1.654 0 3-1.346 3-3v-10c0-.266-.105-.52-.293-.707zm-2.121.707h-1.086c-.827 0-1.5-.673-1.5-1.5v-1.086l2.586 2.586zm-.586 11h-10c-.552 0-1-.448-1-1v-12c0-.552.448-1 1-1h7v1.5c0 1.379 1.121 2.5 2.5 2.5h1.5v9c0 .552-.448 1-1 1z"},"child":[]}]})(props);
};
function TiDownloadOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20.986 17c0-.105-.004-.211-.038-.316l-2-6c-.136-.409-.516-.684-.948-.684h-.561l.682-.678c1.17-1.17 1.17-3.072 0-4.242-.81-.812-2.068-1.078-3.121-.709v-1.371c0-1.654-1.346-3-3-3s-3 1.346-3 3v1.371c-1.052-.369-2.311-.103-3.121.709-1.17 1.17-1.17 3.072.002 4.244l.68.676h-.561c-.432 0-.812.275-.948.684l-2 6c-.034.105-.038.211-.038.316-.014 0-.014 5-.014 5 0 .553.447 1 1 1h16c.553 0 1-.447 1-1 0 0 0-5-.014-5zm-13.693-10.506c.189-.187.439-.293.707-.293s.518.104.707.293l2.293 2.293v-5.787c0-.552.448-1 1-1s1 .448 1 1v5.787l2.293-2.293c.379-.377 1.035-.377 1.414 0 .391.39.391 1.023.002 1.412l-4.709 4.684-4.707-4.682c-.391-.388-.391-1.024 0-1.414zm-.572 5.506h1.852l3.429 3.41 3.428-3.41h1.852l1.667 5h-13.894l1.666-5zm12.279 9h-14v-3h14v3z"},"child":[]}]})(props);
};
function TiDownload (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M16.707 7.404c-.189-.188-.448-.283-.707-.283s-.518.095-.707.283l-2.293 2.293v-6.697c0-.552-.448-1-1-1s-1 .448-1 1v6.697l-2.293-2.293c-.189-.188-.44-.293-.707-.293s-.518.105-.707.293c-.39.39-.39 1.024 0 1.414l4.707 4.682 4.709-4.684c.388-.387.388-1.022-.002-1.412zM20.987 16c0-.105-.004-.211-.039-.316l-2-6c-.136-.409-.517-.684-.948-.684h-.219c-.094.188-.21.368-.367.525l-1.482 1.475h1.348l1.667 5h-13.893l1.667-5h1.348l-1.483-1.475c-.157-.157-.274-.337-.367-.525h-.219c-.431 0-.812.275-.948.684l-2 6c-.035.105-.039.211-.039.316-.013 0-.013 5-.013 5 0 .553.447 1 1 1h16c.553 0 1-.447 1-1 0 0 0-5-.013-5z"},"child":[]}]})(props);
};
function TiDropbox (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3 12.9l5.3 3.5 3.7-3.1-5.3-3.3zM8.3 3.6l-5.3 3.5 3.7 2.9 5.3-3.3zM21 7.1l-5.3-3.5-3.7 3.1 5.3 3.3zM12 13.3l3.7 3.1 5.3-3.5-3.7-2.9zM12 14.5l-3.7 3.1-1.6-1.1v1.2l5.3 3.2 5.3-3.2v-1.2l-1.6 1.1z"},"child":[]}]})(props);
};
function TiEdit (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21.561 5.318l-2.879-2.879c-.293-.293-.677-.439-1.061-.439-.385 0-.768.146-1.061.439l-3.56 3.561h-9c-.552 0-1 .447-1 1v13c0 .553.448 1 1 1h13c.552 0 1-.447 1-1v-9l3.561-3.561c.293-.293.439-.677.439-1.061s-.146-.767-.439-1.06zm-10.061 9.354l-2.172-2.172 6.293-6.293 2.172 2.172-6.293 6.293zm-2.561-1.339l1.756 1.728-1.695-.061-.061-1.667zm7.061 5.667h-11v-11h6l-3.18 3.18c-.293.293-.478.812-.629 1.289-.16.5-.191 1.056-.191 1.47v3.061h3.061c.414 0 1.108-.1 1.571-.29.464-.19.896-.347 1.188-.64l3.18-3.07v6zm2.5-11.328l-2.172-2.172 1.293-1.293 2.171 2.172-1.292 1.293z"},"child":[]}]})(props);
};
function TiEjectOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M16 8.551v-1.551c0-1.105-.896-2-2-2h-10v10c0 1.104.896 2 2 2h1.066c.893 2.887 3.646 5 6.809 5 3.859 0 7.062-3.016 7.062-6.875.001-3.161-2.068-5.74-4.937-6.574zm-8 1.862v3.243c0 .552-.448 1-1 1s-1-.448-1-1v-6.656h6.656c.552 0 1 .448 1 1s-.448 1-1 1h-3.243l4.801 4.799c.392.391.392 1.025.001 1.415-.189.188-.439.292-.708.292-.268 0-.519-.104-.707-.291l-4.8-4.802zm6 9.618c-2.757 0-5-2.26-5-5.016 0-.705-.004-1.371.21-1.979l2.883 2.884c.39.39.901.584 1.414.584s1.022-.194 1.414-.584c.781-.78.781-2.049 0-2.83l-2.567-2.567c.517-.226 1.065-.398 1.646-.398 2.757 0 5 2.182 5 4.938 0 2.757-2.243 4.968-5 4.968z"},"child":[]}]})(props);
};
function TiEject (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M13 17.5c-2.481 0-4.5-2.019-4.5-4.5 0-.553-.447-1-1-1s-1 .447-1 1c0 3.584 2.916 6.5 6.5 6.5s6.5-2.916 6.5-6.5-2.916-6.5-6.5-6.5c-.553 0-1 .447-1 1s.447 1 1 1c2.481 0 4.5 2.019 4.5 4.5s-2.019 4.5-4.5 4.5zM10.656 4c.552 0 1 .448 1 1s-.448 1-1 1h-3.243l1.708 1.707 4.093 4.092c.391.391.391 1.025.001 1.415-.189.188-.44.292-.708.292s-.519-.104-.707-.291l-4.093-4.094-1.707-1.708v3.243c0 .552-.448 1-1 1s-1-.448-1-1v-6.656h6.656"},"child":[]}]})(props);
};
function TiEqualsOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18 12h-12c-1.654 0-3-1.346-3-3s1.346-3 3-3h12c1.654 0 3 1.346 3 3s-1.346 3-3 3zm-12-4c-.552 0-1 .449-1 1s.448 1 1 1h12c.552 0 1-.449 1-1s-.448-1-1-1h-12zM18 19h-12c-1.654 0-3-1.346-3-3s1.346-3 3-3h12c1.654 0 3 1.346 3 3s-1.346 3-3 3zm-12-4c-.552 0-1 .449-1 1s.448 1 1 1h12c.552 0 1-.449 1-1s-.448-1-1-1h-12z"},"child":[]}]})(props);
};
function TiEquals (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18 7h-12c-1.104 0-2 .896-2 2s.896 2 2 2h12c1.104 0 2-.896 2-2s-.896-2-2-2zM18 14h-12c-1.104 0-2 .896-2 2s.896 2 2 2h12c1.104 0 2-.896 2-2s-.896-2-2-2z"},"child":[]}]})(props);
};
function TiExportOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M22.711 9.796c-.041-.041-4.055-4.096-5.982-6.146-.42-.414-.999-.65-1.586-.65-1.182 0-2.143.896-2.143 2h-8c-.553 0-1 .448-1 1v14c0 .552.447 1 1 1h14c.553 0 1-.448 1-1v-6.045c1.434-1.461 2.688-2.729 2.711-2.751.387-.39.387-1.018 0-1.408zm-7.432 6.145l-.136.059-.144-.04v-3.96h-1c-1.771.034-3.336.68-4.753 1.958.43-2.215 1.6-4.958 4.753-4.958h1v-3.958l.144-.042.154.05c1.436 1.525 4.051 4.187 5.297 5.45-.253.257-4.342 4.422-5.315 5.441zm-9.279 3.059v-12h8v1c-4.66 0-6 4.871-6 8.5v.5c1.691-2.578 3.6-3.953 6-4v3c0 .551.512 1 1.143 1 .364 0 .676-.158.883-.391.539-.565 1.242-1.291 1.976-2.043v4.434h-12.002z"},"child":[]}]})(props);
};
function TiExport (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M8 16.5v.5c1.691-2.578 3.6-3.953 6-4v3c0 .551.511 1 1.143 1 .364 0 .675-.158.883-.391 1.933-2.029 5.974-6.109 5.974-6.109s-4.041-4.082-5.975-6.137c-.208-.205-.518-.363-.882-.363-.632 0-1.143.447-1.143 1v3c-4.66 0-6 4.871-6 8.5zM5 21h14c.553 0 1-.448 1-1v-6.046c-.664.676-1.364 1.393-2 2.047v2.999h-12v-12h7v-2h-8c-.553 0-1 .448-1 1v14c0 .552.447 1 1 1z"},"child":[]}]})(props);
};
function TiEyeOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 9c1.211 0 2.381.355 3.297 1.004 1.301.92 2.43 2.124 3.165 2.996-.735.872-1.864 2.077-3.166 2.996-.915.649-2.085 1.004-3.296 1.004s-2.382-.355-3.299-1.004c-1.301-.92-2.43-2.124-3.164-2.996.734-.872 1.863-2.076 3.164-2.995.917-.65 2.088-1.005 3.299-1.005m0-2c-1.691 0-3.242.516-4.453 1.371-2.619 1.852-4.547 4.629-4.547 4.629s1.928 2.777 4.547 4.629c1.211.855 2.762 1.371 4.453 1.371s3.242-.516 4.451-1.371c2.619-1.852 4.549-4.629 4.549-4.629s-1.93-2.777-4.549-4.629c-1.209-.855-2.76-1.371-4.451-1.371zM12 12c-.553 0-1 .447-1 1 0 .551.447 1 1 1 .551 0 1-.449 1-1 0-.553-.449-1-1-1zM12 16c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-5c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2z"},"child":[]}]})(props);
};
function TiEye (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21.821 12.43c-.083-.119-2.062-2.944-4.793-4.875-1.416-1.003-3.202-1.555-5.028-1.555-1.825 0-3.611.552-5.03 1.555-2.731 1.931-4.708 4.756-4.791 4.875-.238.343-.238.798 0 1.141.083.119 2.06 2.944 4.791 4.875 1.419 1.002 3.205 1.554 5.03 1.554 1.826 0 3.612-.552 5.028-1.555 2.731-1.931 4.71-4.756 4.793-4.875.239-.342.239-.798 0-1.14zm-9.821 4.07c-1.934 0-3.5-1.57-3.5-3.5 0-1.934 1.566-3.5 3.5-3.5 1.93 0 3.5 1.566 3.5 3.5 0 1.93-1.57 3.5-3.5 3.5zM14 13c0 1.102-.898 2-2 2-1.105 0-2-.898-2-2 0-1.105.895-2 2-2 1.102 0 2 .895 2 2z"},"child":[]}]})(props);
};
function TiFeather (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11.68 1.017l-.18-.034-.18.033c-4.821.884-8.32 5.084-8.32 9.984 0 4.617 3.108 8.61 7.5 9.795v1.205c0 .553.448 1 1 1s1-.447 1-1v-1.205c4.392-1.185 7.5-5.178 7.5-9.795 0-4.9-3.499-9.1-8.32-9.983zm.82 17.683v-11.7c0-.553-.448-1-1-1s-1 .447-1 1v11.7c-3.18-1.093-5.4-4.054-5.49-7.483l3.137 3.137c.097.097.225.146.353.146s.256-.049.354-.146c.195-.195.195-.512 0-.707l-3.769-3.769c.133-.964.434-1.877.877-2.709l2.184 2.185c.098.097.226.146.354.146s.256-.049.354-.146c.195-.195.195-.512 0-.707l-2.353-2.353c1.162-1.641 2.919-2.846 4.999-3.275 2.08.43 3.837 1.635 4.999 3.275l-2.353 2.353c-.195.195-.195.512 0 .707.098.097.226.146.354.146s.256-.049.354-.146l2.184-2.185c.444.832.744 1.745.877 2.709l-3.769 3.769c-.195.195-.195.512 0 .707.098.098.226.146.354.146s.256-.049.354-.146l3.137-3.137c-.091 3.429-2.311 6.39-5.491 7.483z"},"child":[]}]})(props);
};
function TiFilm (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M8 8v7h8v-7h-8zm7 6h-6v-5h6v5zM17 2h-3v2h-4v-2h-3c-1.654 0-3 1.346-3 3v13c0 1.654 1.346 3 3 3h3v-2h4v2h3c1.654 0 3-1.346 3-3v-13c0-1.654-1.346-3-3-3zm1 4c-.553 0-1 .447-1 1s.447 1 1 1v1c-.553 0-1 .447-1 1s.447 1 1 1v1c-.553 0-1 .447-1 1s.447 1 1 1v1c-.553 0-1 .447-1 1s.447 1 1 1v1c0 .551-.448 1-1 1h-1v-2h-8v2h-1c-.552 0-1-.449-1-1v-1c.553 0 1-.447 1-1s-.447-1-1-1v-1c.553 0 1-.447 1-1s-.447-1-1-1v-1c.553 0 1-.447 1-1s-.447-1-1-1v-1c.553 0 1-.447 1-1s-.447-1-1-1v-1c0-.551.448-1 1-1h1v2h8v-2h1c.552 0 1 .449 1 1v1z"},"child":[]}]}]})(props);
};
function TiFilter (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 6h-14c-1.1 0-1.4.6-.6 1.4l4.2 4.2c.8.8 1.4 2.3 1.4 3.4v5l4-2v-3.5c0-.8.6-2.1 1.4-2.9l4.2-4.2c.8-.8.5-1.4-.6-1.4z"},"child":[]}]})(props);
};
function TiFlagOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18.383 4.318c-.374-.155-.804-.069-1.09.217-1.264 1.263-3.321 1.264-4.586 0-2.045-2.043-5.37-2.043-7.414 0-.188.187-.293.442-.293.707v13c0 .552.448 1 1 1s1-.448 1-1v-4.553c1.271-.997 3.121-.911 4.293.26 2.045 2.043 5.371 2.043 7.414 0 .188-.188.293-.442.293-.707v-8c0-.405-.244-.769-.617-.924zm-7.09 1.631c1.54 1.539 3.808 1.918 5.707 1.138v2.311c-1.446.916-3.387.749-4.646-.51-1.448-1.447-3.598-1.743-5.354-.927v-2.272c1.271-.997 3.121-.912 4.293.26zm1.414 6.585c-1.022-1.021-2.365-1.532-3.707-1.532-.681 0-1.361.131-2 .394v-2.311c1.446-.916 3.387-.749 4.646.51.925.924 2.139 1.386 3.354 1.386.687 0 1.366-.164 2-.459v2.272c-1.272.997-3.122.911-4.293-.26z"},"child":[]}]})(props);
};
function TiFlag (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18.383 4.318c-.374-.155-.804-.069-1.09.217-1.264 1.263-3.321 1.264-4.586 0-2.045-2.043-5.37-2.043-7.414 0-.188.187-.293.442-.293.707v13c0 .552.447 1 1 1s1-.448 1-1v-4.553c1.271-.997 3.121-.911 4.293.26 2.045 2.043 5.371 2.043 7.414 0 .188-.188.293-.442.293-.707v-8c0-.405-.244-.769-.617-.924z"},"child":[]}]})(props);
};
function TiFlashOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M14.5 4h.005m-.005 0l-2.5 6 5 2.898-7.5 7.102 2.5-6-5-2.9 7.5-7.1m0-2c-.562.012-1.029.219-1.379.551l-7.497 7.095c-.458.435-.685 1.059-.61 1.686.072.626.437 1.182.982 1.498l3.482 2.021-1.826 4.381c-.362.871-.066 1.879.712 2.416.344.236.739.354 1.135.354.498 0 .993-.186 1.375-.548l7.5-7.103c.458-.434.685-1.058.61-1.685-.073-.627-.438-1.183-.982-1.498l-3.482-2.018 1.789-4.293c.123-.26.192-.551.192-.857 0-1.102-.89-1.996-2.001-2z"},"child":[]}]})(props);
};
function TiFlash (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17.502 12.033l-4.241-2.458 2.138-5.131c.066-.134.103-.285.103-.444 0-.552-.445-1-.997-1-.249.004-.457.083-.622.214l-.07.06-7.5 7.1c-.229.217-.342.529-.306.842.036.313.219.591.491.75l4.242 2.46-2.163 5.19c-.183.436-.034.94.354 1.208.173.118.372.176.569.176.248 0 .496-.093.688-.274l7.5-7.102c.229-.217.342-.529.306-.842-.037-.313-.22-.591-.492-.749z"},"child":[]}]})(props);
};
function TiFlowChildren (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17 16c-1.305 0-2.403.837-2.816 2h-3.184c-1.654 0-3-1.346-3-3v-3.025c.838.634 1.87 1.025 3 1.025h3.184c.413 1.163 1.512 2 2.816 2 1.657 0 3-1.343 3-3s-1.343-3-3-3c-1.305 0-2.403.837-2.816 2h-3.184c-1.654 0-3-1.346-3-3v-.184c1.163-.413 2-1.512 2-2.816 0-1.657-1.343-3-3-3s-3 1.343-3 3c0 1.304.837 2.403 2 2.816v7.184c0 2.757 2.243 5 5 5h3.184c.413 1.163 1.512 2 2.816 2 1.657 0 3-1.343 3-3s-1.343-3-3-3zm0-5c.552 0 1 .449 1 1s-.448 1-1 1-1-.449-1-1 .448-1 1-1zm-10-7c.552 0 1 .449 1 1s-.448 1-1 1-1-.449-1-1 .448-1 1-1zm10 16c-.552 0-1-.449-1-1s.448-1 1-1 1 .449 1 1-.448 1-1 1z"},"child":[]}]})(props);
};
function TiFlowMerge (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18 16.184v-1.851c0-1.93-1.57-3.5-3.5-3.5-.827 0-1.5-.673-1.5-1.5v-1.517c1.161-.415 2-1.514 2-2.816 0-1.654-1.346-3-3-3s-3 1.346-3 3c0 1.302.839 2.401 2 2.815v1.518c0 .827-.673 1.5-1.5 1.5-1.93 0-3.5 1.57-3.5 3.5v1.851c-1.161.415-2 1.514-2 2.816 0 1.654 1.346 3 3 3s3-1.346 3-3c0-1.302-.839-2.401-2-2.816v-1.851c0-.827.673-1.5 1.5-1.5.979 0 1.864-.407 2.5-1.058.636.651 1.521 1.058 2.5 1.058.827 0 1.5.673 1.5 1.5v1.851c-1.161.415-2 1.514-2 2.816 0 1.654 1.346 3 3 3s3-1.346 3-3c0-1.302-.839-2.401-2-2.816zm-11 3.816c-.552 0-1-.449-1-1s.448-1 1-1 1 .449 1 1-.448 1-1 1zm5-16c.552 0 1 .449 1 1s-.448 1-1 1-1-.449-1-1 .448-1 1-1zm5 16c-.552 0-1-.449-1-1s.448-1 1-1 1 .449 1 1-.448 1-1 1z"},"child":[]}]})(props);
};
function TiFlowParallel (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M18 16.184v-8.368c1.161-.415 2-1.514 2-2.816 0-1.654-1.346-3-3-3s-3 1.346-3 3c0 1.302.839 2.401 2 2.815v8.369c-1.161.415-2 1.514-2 2.816 0 1.654 1.346 3 3 3s3-1.346 3-3c0-1.302-.839-2.401-2-2.816zm-1-12.184c.552 0 1 .449 1 1s-.448 1-1 1-1-.449-1-1 .448-1 1-1zm0 16c-.552 0-1-.449-1-1s.448-1 1-1 1 .449 1 1-.448 1-1 1zM10 5c0-1.654-1.346-3-3-3s-3 1.346-3 3c0 1.302.839 2.401 2 2.815v8.369c-1.161.415-2 1.514-2 2.816 0 1.654 1.346 3 3 3s3-1.346 3-3c0-1.302-.839-2.401-2-2.816v-8.368c1.161-.415 2-1.514 2-2.816zm-3-1c.552 0 1 .449 1 1s-.448 1-1 1-1-.449-1-1 .448-1 1-1zm0 16c-.552 0-1-.449-1-1s.448-1 1-1 1 .449 1 1-.448 1-1 1z"},"child":[]}]}]})(props);
};
function TiFlowSwitch (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M8 16.184v-.684c0-.848.512-1.595 1.287-2.047-.667-.282-1.279-.667-1.822-1.131-.904.814-1.465 1.938-1.465 3.178v.684c-1.161.415-2 1.514-2 2.816 0 1.654 1.346 3 3 3s3-1.346 3-3c0-1.302-.839-2.401-2-2.816zm-1 3.816c-.552 0-1-.449-1-1s.448-1 1-1 1 .449 1 1-.448 1-1 1zM16 7.815v.351c0 .985-.535 1.852-1.345 2.36.665.274 1.279.646 1.823 1.1.936-.878 1.522-2.102 1.522-3.459v-.351c1.161-.415 2-1.514 2-2.816 0-1.654-1.346-3-3-3s-3 1.346-3 3c0 1.302.839 2.401 2 2.815zm1-3.815c.552 0 1 .449 1 1s-.448 1-1 1-1-.449-1-1 .448-1 1-1zM17.935 16.164c-.41-2.913-2.911-5.164-5.935-5.164-1.936 0-3.552-1.381-3.92-3.209 1.12-.436 1.92-1.519 1.92-2.791 0-1.654-1.346-3-3-3s-3 1.346-3 3c0 1.326.87 2.44 2.065 2.836.41 2.913 2.911 5.164 5.935 5.164 1.936 0 3.552 1.381 3.92 3.209-1.12.436-1.92 1.519-1.92 2.791 0 1.654 1.346 3 3 3s3-1.346 3-3c0-1.326-.87-2.44-2.065-2.836zm-10.935-12.164c.552 0 1 .449 1 1s-.448 1-1 1-1-.449-1-1 .448-1 1-1zm10 16c-.552 0-1-.449-1-1s.448-1 1-1 1 .449 1 1-.448 1-1 1z"},"child":[]}]}]})(props);
};
function TiFolderAdd (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18 6h-6c0-1.104-.896-2-2-2h-4c-1.654 0-3 1.346-3 3v10c0 1.654 1.346 3 3 3h12c1.654 0 3-1.346 3-3v-8c0-1.654-1.346-3-3-3zm0 12h-12c-.552 0-1-.448-1-1v-7h4c.275 0 .5-.225.5-.5s-.225-.5-.5-.5h-4v-2c0-.552.448-1 1-1h4c0 1.104.896 2 2 2h6c.552 0 1 .448 1 1h-4c-.275 0-.5.225-.5.5s.225.5.5.5h4v7c0 .552-.448 1-1 1zM15 12h-2v-2c0-.553-.447-1-1-1s-1 .447-1 1v2h-2c-.553 0-1 .447-1 1s.447 1 1 1h2v2c0 .553.447 1 1 1s1-.447 1-1v-2h2c.553 0 1-.447 1-1s-.447-1-1-1z"},"child":[]}]})(props);
};
function TiFolderDelete (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18 6h-6c0-1.104-.896-2-2-2h-4c-1.654 0-3 1.346-3 3v10c0 1.654 1.346 3 3 3h12c1.654 0 3-1.346 3-3v-8c0-1.654-1.346-3-3-3zm-12 0h4c0 1.104.896 2 2 2h6c.552 0 1 .448 1 1h-14v-2c0-.552.448-1 1-1zm12 12h-12c-.552 0-1-.448-1-1v-7h14v7c0 .552-.448 1-1 1zM15 14h-6c-.553 0-1-.447-1-1s.447-1 1-1h6c.553 0 1 .447 1 1s-.447 1-1 1z"},"child":[]}]})(props);
};
function TiFolderOpen (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M22.3 8h-2.4c-.4-1.2-1.5-2-2.8-2h-6c0-1.1-.9-2-2-2h-4.1c-1.7 0-3 1.3-3 3v10c0 1.7 1.3 3 3 3h12c1.7 0 3.4-1.3 3.8-3l2.2-8c.1-.6-.2-1-.7-1zm-18.3 1v-2c0-.6.4-1 1-1h4c0 1.1.9 2 2 2h6c.6 0 1 .4 1 1h-11.1c-.6 0-1.1.4-1.3 1l-1.6 6.3v-7.3zm14.9 7.5c-.2.8-1.1 1.5-1.9 1.5h-12s-.4-.2-.2-.8l1.9-7c0-.1.2-.2.3-.2h13.7l-1.8 6.5z"},"child":[]}]})(props);
};
function TiFolder (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18 6h-6c0-1.104-.896-2-2-2h-4c-1.654 0-3 1.346-3 3v10c0 1.654 1.346 3 3 3h12c1.654 0 3-1.346 3-3v-8c0-1.654-1.346-3-3-3zm-12 0h4c0 1.104.896 2 2 2h6c.552 0 1 .448 1 1h-14v-2c0-.552.448-1 1-1zm12 12h-12c-.552 0-1-.448-1-1v-7h14v7c0 .552-.448 1-1 1z"},"child":[]}]})(props);
};
function TiGift (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 8h-2.352c.219-.457.352-.961.352-1.5 0-1.93-1.57-3.5-3.5-3.5-.979 0-1.864.407-2.5 1.058-.636-.651-1.521-1.058-2.5-1.058-1.93 0-3.5 1.57-3.5 3.5 0 .539.133 1.043.352 1.5h-2.352c-.553 0-1 .448-1 1v4c0 .552.447 1 1 1v5c0 1.654 1.346 3 3 3h10c1.654 0 3-1.346 3-3v-5c.553 0 1-.448 1-1v-4c0-.552-.447-1-1-1zm-1 4h-5v-2h5v2zm-8-5h2v1h-2v-1zm2 3v2h-2v-2h2zm1.5-5c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5c-.177 0-.344-.039-.5-.097v-.903c0-.521-.404-.937-.913-.982.202-.59.756-1.018 1.413-1.018zm-6.5 1.5c0-.827.673-1.5 1.5-1.5.657 0 1.211.428 1.413 1.018-.509.045-.913.461-.913.982v.903c-.156.058-.323.097-.5.097-.827 0-1.5-.673-1.5-1.5zm2 3.5v2h-5v-2h5zm-3 10c-.551 0-1-.449-1-1v-6h4v7h-3zm4 0v-7h2v7h-2zm6 0h-3v-7h4v6c0 .551-.449 1-1 1z"},"child":[]}]})(props);
};
function TiGlobeOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11 6c2.206 0 4 1.794 4 4s-1.794 4-4 4c-2.204 0-3.998-1.794-3.998-4s1.794-4 3.998-4m0-2c-3.314 0-5.998 2.686-5.998 6s2.684 6 5.998 6c3.312 0 6-2.688 6-6 0-3.314-2.688-6-6-6zM17 20h-4v-1.23c1.641-.371 3.146-1.188 4.363-2.406 1.699-1.699 2.637-3.96 2.637-6.363 0-2.067-.691-4.028-1.968-5.619l.675-.673c.391-.391.391-1.023.001-1.415-.392-.392-1.024-.39-1.415-.001l-2.052 2.049.708.708c1.322 1.321 2.051 3.08 2.051 4.95s-.729 3.627-2.051 4.949-3.079 2.051-4.949 2.051-3.627-.729-4.949-2.051c-.391-.391-1.023-.391-1.414 0-.391.39-.391 1.023 0 1.414 1.699 1.699 3.959 2.637 6.363 2.637v1h-4c-.553 0-1 .447-1 1s.447 1 1 1h10c.553 0 1-.447 1-1s-.447-1-1-1z"},"child":[]}]})(props);
};
function TiGlobe (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11 20h-4c-.553 0-1 .447-1 1s.447 1 1 1h10c.553 0 1-.447 1-1s-.447-1-1-1h-4v-1.23c1.64-.371 3.146-1.188 4.363-2.406 1.7-1.7 2.637-3.96 2.637-6.364 0-2.067-.692-4.029-1.968-5.619l.675-.673c.391-.391.391-1.023.001-1.415-.391-.391-1.024-.39-1.415-.001l-2.052 2.049.708.708c1.322 1.322 2.051 3.081 2.051 4.951s-.729 3.627-2.051 4.949-3.079 2.051-4.949 2.051-3.627-.729-4.949-2.051c-.391-.391-1.023-.391-1.414 0-.391.39-.391 1.023 0 1.414 1.699 1.7 3.959 2.637 6.363 2.637v1zM11 4c1.657 0 3.157.672 4.243 1.757 1.085 1.086 1.757 2.586 1.757 4.243 0 1.656-.672 3.156-1.757 4.242-1.086 1.086-2.586 1.758-4.243 1.758-1.658 0-3.157-.672-4.242-1.757-1.085-1.086-1.756-2.586-1.756-4.243s.671-3.157 1.756-4.243c1.085-1.085 2.584-1.757 4.242-1.757z"},"child":[]}]})(props);
};
function TiGroupOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 14c2.764 0 5-2.238 5-5s-2.236-5-5-5-5 2.238-5 5 2.236 5 5 5zm0-8c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zM20 15c1.381 0 2.5-1.117 2.5-2.5 0-1.381-1.119-2.5-2.5-2.5-1.382 0-2.5 1.119-2.5 2.5 0 1.383 1.118 2.5 2.5 2.5zm0-4c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5-1.5-.673-1.5-1.5.673-1.5 1.5-1.5zM20 15.59c-1.331 0-2.332.406-2.917.969-1.115-.918-2.878-1.559-5.083-1.559-2.266 0-3.995.648-5.092 1.564-.596-.565-1.608-.975-2.908-.975-2.188 0-3.5 1.091-3.5 2.183 0 .545 1.312 1.092 3.5 1.092.604 0 1.146-.051 1.623-.133l-.04.27c0 1 2.405 2 6.417 2 3.762 0 6.417-1 6.417-2l-.021-.255c.463.073.996.118 1.604.118 2.051 0 3.5-.547 3.5-1.092 0-1.092-1.373-2.182-3.5-2.182zm-16 2.273c-1.309 0-2.068-.207-2.417-.354.239-.405 1.003-.92 2.417-.92 1.107 0 1.837.351 2.208.706l-.235.344c-.452.119-1.108.224-1.973.224zm8 1.137c-2.163 0-3.501-.312-4.184-.561.521-.678 1.918-1.439 4.184-1.439 2.169 0 3.59.761 4.148 1.425-.755.27-2.162.575-4.148.575zm8-1.137c-.914 0-1.546-.103-1.973-.213-.072-.127-.155-.252-.248-.375.356-.345 1.071-.685 2.221-.685 1.324 0 2.141.501 2.404.911-.39.163-1.205.362-2.404.362zM4 15c1.381 0 2.5-1.119 2.5-2.5 0-1.379-1.119-2.5-2.5-2.5-1.382 0-2.5 1.121-2.5 2.5 0 1.381 1.118 2.5 2.5 2.5zm0-4c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5-1.5-.673-1.5-1.5.673-1.5 1.5-1.5z"},"child":[]}]})(props);
};
function TiGroup (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 14c1.381 0 2.631-.56 3.536-1.465.904-.904 1.464-2.154 1.464-3.535s-.56-2.631-1.464-3.535c-.905-.905-2.155-1.465-3.536-1.465s-2.631.56-3.536 1.465c-.904.904-1.464 2.154-1.464 3.535s.56 2.631 1.464 3.535c.905.905 2.155 1.465 3.536 1.465zM20 15c.69 0 1.315-.279 1.768-.731.453-.452.732-1.077.732-1.769 0-.69-.279-1.315-.732-1.768-.453-.453-1.078-.732-1.768-.732-.691 0-1.316.279-1.769.732-.452.453-.731 1.078-.731 1.768 0 .691.279 1.316.731 1.769s1.078.731 1.769.731zM20 15.59c-1.331 0-2.332.406-2.917.968-1.115-.917-2.878-1.558-5.083-1.558-2.266 0-3.995.648-5.092 1.564-.596-.565-1.608-.974-2.908-.974-2.188 0-3.5 1.09-3.5 2.182 0 .545 1.312 1.092 3.5 1.092.604 0 1.146-.051 1.623-.133l-.04.27c0 1 2.406 2 6.417 2 3.762 0 6.417-1 6.417-2l-.02-.255c.463.073.995.118 1.603.118 2.051 0 3.5-.547 3.5-1.092 0-1.092-1.373-2.182-3.5-2.182zM4 15c.69 0 1.315-.279 1.768-.732.453-.453.732-1.078.732-1.768 0-.689-.279-1.314-.732-1.768-.453-.452-1.078-.732-1.768-.732-.691 0-1.316.28-1.769.732-.452.454-.731 1.079-.731 1.768 0 .69.279 1.315.731 1.768.453.453 1.078.732 1.769.732z"},"child":[]}]})(props);
};
function TiHeadphones (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 13c0-4.963-4.037-9-9-9s-9 4.037-9 9v2.6l.023.113c-.013.243-.023.5-.023.787v2c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5v-2c0-1.511-.83-2.79-1.982-3.278.095-2.122 1.837-3.823 3.982-3.823s3.887 1.7 3.982 3.822c-1.152.49-1.982 1.768-1.982 3.279v2c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5v-2c0-.287-.01-.544-.023-.787l.023-.113v-2.6zm-16 0c0-1.586.538-3.046 1.432-4.221l.89.889c-.742.928-1.218 2.075-1.302 3.332-.02 0-.02 1-.02 1h-1v-1zm3 5.5c0 .827-.673 1.5-1.5 1.5s-1.5-.673-1.5-1.5v-2c0-.666.057-1.176.114-1.5h1.886c.473 0 1 .616 1 1.5v2zm7.77-9.338l-.354.354c-.912-.913-2.125-1.416-3.416-1.416s-2.504.503-3.417 1.416l-.354-.354-1.141-1.141-.627-.626c1.479-1.48 3.447-2.295 5.539-2.295 2.093 0 4.06.815 5.539 2.295l-.627.626-1.142 1.141zm3.23 9.338c0 .827-.673 1.5-1.5 1.5s-1.5-.673-1.5-1.5v-2c0-.884.527-1.5 1-1.5h1.886c.057.324.114.834.114 1.5v2zm0-4.5h-1v-1c-.104-1.257-.58-2.404-1.322-3.332l.891-.889c.893 1.175 1.431 2.634 1.431 4.221v1z"},"child":[]}]})(props);
};
function TiHeartFullOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M2.2 9.4c0 1.3.2 3.3 2 5.1 1.6 1.6 6.9 5.2 7.1 5.4.2.1.4.2.6.2s.4-.1.6-.2c.2-.2 5.5-3.7 7.1-5.4 1.8-1.8 2-3.8 2-5.1 0-3-2.4-5.4-5.4-5.4-1.6 0-3.2.9-4.2 2.3-1-1.4-2.6-2.3-4.4-2.3-2.9 0-5.4 2.4-5.4 5.4z"},"child":[]}]})(props);
};
function TiHeartHalfOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M2.2 9.4c0 1.3.2 3.3 2 5.1 1.6 1.6 6.9 5.2 7.1 5.4.2.1.4.2.6.2s.4-.1.6-.2c.2-.2 5.5-3.7 7.1-5.4 1.8-1.8 2-3.8 2-5.1 0-3-2.4-5.4-5.4-5.4-1.6 0-3.2.9-4.2 2.3-1-1.4-2.6-2.3-4.4-2.3-2.9 0-5.4 2.4-5.4 5.4zm9.8 1c.6 0 1-.4 1-1 0-1.9 1.5-3.4 3.4-3.4s3.4 1.5 3.4 3.4c0 1.1-.2 2.4-1.5 3.7-1.2 1.2-4.9 3.8-6.3 4.7v-7.4z"},"child":[]}]})(props);
};
function TiHeartOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 20c-.195 0-.391-.057-.561-.172-.225-.151-5.508-3.73-7.146-5.371-1.831-1.831-2.043-3.777-2.043-5.082 0-2.964 2.411-5.375 5.375-5.375 1.802 0 3.398.891 4.375 2.256.977-1.365 2.573-2.256 4.375-2.256 2.964 0 5.375 2.411 5.375 5.375 0 1.305-.212 3.251-2.043 5.082-1.641 1.641-6.923 5.22-7.146 5.371-.17.115-.366.172-.561.172zm-4.375-14c-1.861 0-3.375 1.514-3.375 3.375 0 1.093.173 2.384 1.457 3.668 1.212 1.212 4.883 3.775 6.293 4.746 1.41-.971 5.081-3.534 6.293-4.746 1.284-1.284 1.457-2.575 1.457-3.668 0-1.861-1.514-3.375-3.375-3.375s-3.375 1.514-3.375 3.375c0 .552-.447 1-1 1s-1-.448-1-1c0-1.861-1.514-3.375-3.375-3.375z"},"child":[]}]})(props);
};
function TiHeart (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 10.375c0-2.416-1.959-4.375-4.375-4.375s-4.375 1.959-4.375 4.375c0 1.127.159 2.784 1.75 4.375l7 5.25s5.409-3.659 7-5.25 1.75-3.248 1.75-4.375c0-2.416-1.959-4.375-4.375-4.375s-4.375 1.959-4.375 4.375"},"child":[]}]})(props);
};
function TiHomeOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M22.262 10.468c-3.39-2.854-9.546-8.171-9.607-8.225l-.655-.563-.652.563c-.062.053-6.221 5.368-9.66 8.248-.438.394-.688.945-.688 1.509 0 1.104.896 2 2 2h1v6c0 1.104.896 2 2 2h12c1.104 0 2-.896 2-2v-6h1c1.104 0 2-.896 2-2 0-.598-.275-1.161-.738-1.532zm-8.262 9.532h-4v-5h4v5zm4-8l.002 8h-3.002v-6h-6v6h-3v-8h-3.001c2.765-2.312 7.315-6.227 9.001-7.68 1.686 1.453 6.234 5.367 9 7.681l-3-.001z"},"child":[]}]})(props);
};
function TiHome (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 3s-6.186 5.34-9.643 8.232c-.203.184-.357.452-.357.768 0 .553.447 1 1 1h2v7c0 .553.447 1 1 1h3c.553 0 1-.448 1-1v-4h4v4c0 .552.447 1 1 1h3c.553 0 1-.447 1-1v-7h2c.553 0 1-.447 1-1 0-.316-.154-.584-.383-.768-3.433-2.892-9.617-8.232-9.617-8.232z"},"child":[]}]})(props);
};
function TiHtml5 (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M13.1 3.5l.7 1.1.7-1.1v1.5h1v-3h-1l-.7 1.1-.6-1.1h-1.1v3h1zM18.4 5v-1h-1.4v-2h-1v3zM9.8 5h1v-2h.9v-1h-2.8v1h.9zM6.6 4h.9v1h1v-3h-1v1h-.9v-1h-1v3h1zM5 6l1.2 14.4 5.8 1.6 5.8-1.6 1.2-14.4h-14zm11.3 4.6h-6.8l.2 1.8h6.3999999999999995l-.5 5.5-3.6 1-3.6-1-.3-2.9h1.8l.1 1.5 2 .5 2-.5.2-2.3h-6.2l-.5-5.3h9l-.2 1.7z"},"child":[]}]})(props);
};
function TiImageOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M8.5 7.999c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5-1.5-.673-1.5-1.5.673-1.5 1.5-1.5m0-1c-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5 2.5-1.119 2.5-2.5-1.119-2.5-2.5-2.5zM16 11.999c.45.051 1.27 1.804 1.779 4.001h-11.392c.434-1.034 1.055-2.001 1.612-2.001.806 0 1.125.185 1.53.42.447.258 1.006.58 1.97.58 1.138 0 1.942-.885 2.653-1.666.627-.687 1.218-1.334 1.848-1.334m0-1c-2 0-3 3-4.5 3s-1.499-1-3.5-1c-2 0-3.001 4-3.001 4h14.001s-1-6-3-6zM22 6c0-1.104-.896-2-2-2h-16c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h16c1.104 0 2-.896 2-2v-12zm-2 12h-16v-12h16.003l-.003 12z"},"child":[]}]})(props);
};
function TiImage (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"circle","attr":{"cx":"8.5","cy":"8.5","r":"2.5"},"child":[]},{"tag":"path","attr":{"d":"M16 10c-2 0-3 3-4.5 3s-1.499-1-3.5-1c-2 0-3.001 4-3.001 4h14.001s-1-6-3-6zM20 3h-16c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-12c0-1.103-.897-2-2-2zm0 14h-16v-12h16v12z"},"child":[]}]})(props);
};
function TiInfinityOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M16.434 8.596c1.152 0 2.237.449 3.053 1.264.815.816 1.266 1.9 1.266 3.056s-.45 2.239-1.268 3.056c-.813.815-1.898 1.266-3.053 1.266s-2.238-.449-3.055-1.266l-1.376-1.32-1.395 1.338c-.797.799-1.882 1.248-3.036 1.248-1.154 0-2.239-.449-3.054-1.267-.815-.813-1.265-1.899-1.265-3.053s.45-2.237 1.267-3.056c.814-.813 1.898-1.266 3.053-1.266 1.154 0 2.239.449 3.055 1.266l1.375 1.32 1.396-1.34c.798-.797 1.882-1.246 3.037-1.246m0-2c-1.679 0-3.25.645-4.433 1.813-1.163-1.159-2.746-1.813-4.43-1.813-1.688 0-3.274.657-4.467 1.853-1.194 1.192-1.852 2.78-1.852 4.469s.658 3.274 1.852 4.468c1.191 1.192 2.779 1.852 4.468 1.852 1.679 0 3.251-.645 4.431-1.814 1.163 1.16 2.746 1.814 4.431 1.814 1.689 0 3.276-.658 4.469-1.854 1.193-1.188 1.852-2.776 1.852-4.467 0-1.688-.658-3.274-1.852-4.47-1.197-1.195-2.783-1.851-4.469-1.851zM7.571 12.096c.225 0 .426.088.612.271l.57.548-.603.579c-.141.142-.352.223-.578.223-.227 0-.438-.08-.58-.223-.155-.155-.24-.36-.24-.578 0-.221.084-.422.243-.581.156-.155.355-.239.576-.239m0-1c-.486 0-.942.189-1.285.533-.345.346-.535.801-.535 1.287 0 .484.189.941.533 1.285.344.344.815.516 1.287.516.471 0 .942-.172 1.285-.516l1.339-1.285-1.321-1.27c-.36-.361-.817-.55-1.303-.55zM16.434 12.113c.228 0 .438.08.576.219.158.159.242.359.242.582s-.083.422-.243.581c-.144.146-.352.228-.571.228-.23 0-.444-.088-.617-.261l-.571-.548.603-.578c.141-.143.353-.223.581-.223m0-1c-.472 0-.943.172-1.287.516l-1.34 1.285 1.322 1.27c.362.361.838.539 1.311.539.472 0 .937-.177 1.279-.521.346-.344.534-.801.534-1.287s-.188-.941-.532-1.287c-.346-.344-.817-.515-1.287-.515z"},"child":[]}]})(props);
};
function TiInfinity (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M16.433 8.596c-1.153 0-2.237.449-3.036 1.246l-1.396 1.34-1.375-1.32c-.815-.817-1.901-1.266-3.055-1.266-1.154 0-2.239.451-3.053 1.266-.817.816-1.267 1.9-1.267 3.055 0 1.152.449 2.238 1.266 3.053.814.816 1.899 1.266 3.054 1.266 1.153 0 2.239-.449 3.036-1.248l1.395-1.338 1.376 1.32c.815.816 1.901 1.266 3.055 1.266s2.238-.449 3.053-1.266c.817-.814 1.267-1.9 1.267-3.055s-.449-2.238-1.266-3.055c-.817-.815-1.901-1.264-3.054-1.264zm-7.576 5.605c-.687.688-1.884.688-2.572 0-.344-.344-.533-.801-.533-1.285 0-.486.189-.941.535-1.287.342-.344.799-.533 1.284-.533s.942.189 1.305.551l1.321 1.27-1.34 1.284zm8.861 0c-.687.689-1.866.705-2.59-.018l-1.321-1.27 1.339-1.285c.688-.688 1.886-.688 2.573-.002.344.346.533.801.533 1.287s-.19.944-.534 1.288z"},"child":[]}]})(props);
};
function TiInfoLargeOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M14.234 16.014l.554-1.104c.808-1.61.897-3.228.253-4.552-.122-.252-.277-.479-.443-.693 1.411-.619 2.402-2.026 2.402-3.664 0-2.206-1.794-4-4-4s-4 1.794-4 4c0 .783.234 1.508.624 2.126-1.696.33-2.806 1.248-2.947 1.375-.716.631-.885 1.68-.405 2.504.324.559.886.909 1.494.98l-.554 1.104c-.808 1.61-.897 3.228-.254 4.552.565 1.164 1.621 1.955 2.972 2.229.413.084.836.127 1.254.127 2.368 0 3.965-1.347 4.14-1.501.716-.63.887-1.678.407-2.503-.325-.556-.887-.909-1.497-.98zm-1.234-12.013c1.104 0 2 .896 2 2s-.896 2-2 2c-1.105 0-2-.896-2-2s.895-2 2-2zm-1.816 14.999c-.271 0-.559-.025-.854-.087-1.642-.334-2.328-1.933-1.328-3.927l1-1.995c.5-.996.47-1.63-.108-2.035-.181-.125-.431-.169-.689-.169-.577 0-1.201.214-1.201.214s1.133-1.001 2.812-1.001c.271 0 .56.025.856.087 1.64.334 2.328 1.933 1.328 3.927l-1 1.993c-.5.998-.472 1.632.106 2.035.181.126.433.169.692.169.577 0 1.2-.212 1.2-.212s-1.133 1.001-2.814 1.001z"},"child":[]}]})(props);
};
function TiInfoLarge (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M13.839 17.525c-.006.002-.559.186-1.039.186-.265 0-.372-.055-.406-.079-.168-.117-.48-.336.054-1.4l1-1.994c.593-1.184.681-2.329.245-3.225-.356-.733-1.039-1.236-1.92-1.416-.317-.065-.639-.097-.958-.097-1.849 0-3.094 1.08-3.146 1.126-.179.158-.221.42-.102.626.12.206.367.3.595.222.005-.002.559-.187 1.039-.187.263 0 .369.055.402.078.169.118.482.34-.051 1.402l-1 1.995c-.594 1.185-.681 2.33-.245 3.225.356.733 1.038 1.236 1.921 1.416.314.063.636.097.954.097 1.85 0 3.096-1.08 3.148-1.126.179-.157.221-.42.102-.626-.12-.205-.369-.297-.593-.223z"},"child":[]},{"tag":"circle","attr":{"cx":"13","cy":"6.001","r":"2.5"},"child":[]}]})(props);
};
function TiInfoOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12,5.51c0.56,0,1.12,0.35,1.54,1.06l5.91,9.85C20.31,17.84,19.65,19,18,19H6c-1.65,0-2.31-1.16-1.46-2.57l5.91-9.85\r\n\tC10.88,5.86,11.44,5.51,12,5.51 M12,3.51c-1.3,0-2.48,0.74-3.26,2.03L2.83,15.4c-0.44,0.74-0.66,1.5-0.66,2.23\r\n\tc0,0.56,0.14,1.11,0.42,1.6C3.23,20.35,4.47,21,6,21h12c1.53,0,2.77-0.65,3.41-1.77c0.29-0.51,0.43-1.07,0.42-1.65\r\n\tc-0.01-0.71-0.23-1.46-0.66-2.18l-5.91-9.85C14.48,4.25,13.3,3.51,12,3.51z M13.5,16.75c0,0-0.71,0.36-1.07,0.18\r\n\tc-0.36-0.18-0.43-0.54-0.23-1.15l0.41-1.22c0.4-1.22-0.12-2.08-1.08-2.13c-1.26-0.07-2.02,0.83-2.02,0.83s0.71-0.36,1.07-0.18\r\n\tc0.36,0.18,0.43,0.54,0.23,1.15l-0.41,1.22c-0.4,1.22,0.12,2.07,1.08,2.13C12.74,17.64,13.5,16.75,13.5,16.75z"},"child":[]},{"tag":"circle","attr":{"cx":"12","cy":"10","r":"1.3"},"child":[]}]})(props);
};
function TiInfo (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21.17,15.4l-5.91-9.85C14.48,4.25,13.3,3.51,12,3.51S9.52,4.25,8.74,5.54L2.83,15.4c-0.44,0.73-0.66,1.49-0.66,2.21\r\n\tc0,0.57,0.14,1.13,0.42,1.62C3.23,20.35,4.47,21,6,21h12c1.53,0,2.77-0.65,3.41-1.77c0.28-0.49,0.42-1.02,0.42-1.58\r\n\tC21.84,16.91,21.62,16.14,21.17,15.4z M12,8.45c0.85,0,1.55,0.7,1.55,1.55c0,0.85-0.69,1.55-1.55,1.55c-0.85,0-1.55-0.7-1.55-1.55\r\n\tC10.45,9.14,11.14,8.45,12,8.45z M13.69,16.91c-0.03,0.04-0.8,0.92-2.07,0.92l-0.15,0c-0.51-0.03-0.93-0.25-1.18-0.63\r\n\tc-0.31-0.47-0.36-1.11-0.12-1.82l0.41-1.22c0.23-0.68,0.01-0.79-0.11-0.85l-0.14-0.02c-0.25,0-0.6,0.15-0.71,0.21\r\n\tc-0.1,0.05-0.23,0.03-0.31-0.07c-0.07-0.1-0.07-0.23,0.01-0.32c0.03-0.04,0.87-0.99,2.22-0.91c0.51,0.03,0.93,0.25,1.18,0.63\r\n\tc0.32,0.47,0.36,1.11,0.12,1.83l-0.41,1.22c-0.23,0.68-0.01,0.79,0.11,0.85l0.14,0.02c0.25,0,0.6-0.15,0.71-0.2\r\n\tc0.11-0.06,0.23-0.03,0.31,0.07C13.77,16.69,13.77,16.82,13.69,16.91z"},"child":[]}]})(props);
};
function TiInputCheckedOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19.885 6.177c-.221-.771-.728-1.409-1.427-1.798-.445-.248-.949-.379-1.457-.379-.862 0-1.661.381-2.219 1h-6.782c-1.654 0-3 1.346-3 3v8c0 1.654 1.346 3 3 3h8c1.654 0 3-1.346 3-3v-6.454l.622-1.088c.39-.7.482-1.51.263-2.281zm-3.758.338c.104-.189.27-.328.459-.416.301-.113.623-.127.9.027.232.13.402.343.476.6.033.117.039.236.03.353-.012.115-.043.227-.092.332l-.021.065-4.006 7.011c-.151.273-.427.461-.742.506l-.132.009c-.267 0-.518-.104-.707-.293l-3-3c-.39-.39-.39-1.024 0-1.414.189-.189.44-.293.707-.293s.518.104.707.293l1.125 1.125.92.92.652-1.125 2.724-4.7zm-.127 10.485h-8c-.552 0-1-.449-1-1v-8c0-.551.448-1 1-1h6.689l-2.15 3.712-1.125-1.125c-.391-.391-.902-.586-1.414-.586s-1.023.195-1.414.586c-.781.781-.781 2.047 0 2.828l3 3c.378.378.888.586 1.414.586l.277-.02c.621-.087 1.166-.461 1.471-1.01l2.252-3.94v4.969c0 .551-.448 1-1 1z"},"child":[]}]})(props);
};
function TiInputChecked (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M16 19h-8c-1.654 0-3-1.346-3-3v-8c0-1.654 1.346-3 3-3h5c.553 0 1 .448 1 1s-.447 1-1 1h-5c-.552 0-1 .449-1 1v8c0 .551.448 1 1 1h8c.552 0 1-.449 1-1v-3c0-.552.447-1 1-1s1 .448 1 1v3c0 1.654-1.346 3-3 3zM13.166 14.833c-.35 0-.689-.139-.941-.391l-2.668-2.667c-.52-.521-.52-1.365 0-1.885.521-.521 1.365-.521 1.887 0l1.416 1.417 3.475-5.455c.357-.644 1.17-.877 1.814-.519.643.358.875 1.17.518 1.813l-4.334 7c-.203.366-.566.615-.98.673l-.187.014z"},"child":[]}]})(props);
};
function TiKeyOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M10 21h-6v-4.414l3.783-3.783c-.187-.587-.283-1.192-.283-1.803 0-3.309 2.691-6 6-6s6 2.691 6 6-2.691 6-6 6h-1.5v2h-2v2zm-4-2h2v-2h2v-2h3.5c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4c0 .559.121 1.109.359 1.639l.285.631-4.144 4.144v1.586zM13.5 9.998c.551 0 1 .449 1 1.002 0 .552-.449 1-1 1s-1-.448-1-1c0-.553.449-1.002 1-1.002m0-1c-1.104 0-2 .896-2 2.002 0 1.104.896 2 2 2 1.105 0 2-.896 2-2 0-1.105-.895-2.002-2-2.002z"},"child":[]}]})(props);
};
function TiKey (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M8.5 11c0 .732.166 1.424.449 2.051l-3.949 3.949v1.5s.896 1.5 2 1.5h2v-2h2v-2h2.5c2.762 0 5-2.238 5-5s-2.238-5-5-5-5 2.238-5 5zm5 2c-1.104 0-2-.896-2-2 0-1.105.896-2.002 2-2.002 1.105 0 2 .896 2 2.002 0 1.104-.895 2-2 2z"},"child":[]}]})(props);
};
function TiKeyboard (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M8 13h7v2h-7zM5 13h2v2h-2zM5 9h2v1h-2zM8 12v-1h-3v1h2zM8 9h1v1h-1zM9 11h1v1h-1zM10 9h1v1h-1zM11 11h1v1h-1zM12 9h1v1h-1zM13 11h1v1h-1zM14 9h1v1h-1zM15 11h1v1h-1zM16 9h1v1h-1zM17 12h2v-3h-1v2h-1zM18 13h-1v1h-1v1h3v-1h-1zM20 6h-16c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm0 10h-16v-8h16v8z"},"child":[]}]})(props);
};
function TiLeaf (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 11c0-4.9-3.499-9.1-8.32-9.983l-.18-.034-.18.033c-4.821.884-8.32 5.084-8.32 9.984 0 4.617 3.108 8.61 7.5 9.795v1.205c0 .553.448 1 1 1s1-.447 1-1v-1.205c4.392-1.185 7.5-5.178 7.5-9.795zm-7.5 7.7v-2.993l4.354-4.354c.195-.195.195-.512 0-.707s-.512-.195-.707 0l-3.647 3.647v-3.586l2.354-2.354c.195-.195.195-.512 0-.707s-.512-.195-.707 0l-1.647 1.647v-3.293c0-.553-.448-1-1-1s-1 .447-1 1v3.293l-1.646-1.647c-.195-.195-.512-.195-.707 0s-.195.512 0 .707l2.354 2.354v3.586l-3.646-3.646c-.195-.195-.512-.195-.707 0s-.195.512 0 .707l4.354 4.354v2.992c-3.249-1.116-5.502-4.179-5.502-7.7 0-3.874 2.723-7.201 6.5-7.981 3.777.78 6.5 4.107 6.5 7.981 0 3.521-2.253 6.584-5.5 7.7z"},"child":[]}]})(props);
};
function TiLightbulb (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M12.5 5.5c-.276 0-.5.224-.5.5s.224.5.5.5c1.083 0 1.964.881 1.964 1.964 0 .276.224.5.5.5s.5-.224.5-.5c0-1.634-1.33-2.964-2.964-2.964zM12.5 1c-4.136 0-7.5 3.364-7.5 7.5 0 1.486.44 2.922 1.274 4.165l.08.135c1.825 2.606 2.146 3.43 2.146 4.2v3c0 .552.448 1 1 1h2c0 .26.11.52.29.71.19.18.45.29.71.29.26 0 .52-.11.71-.29.18-.19.29-.45.29-.71h2c.552 0 1-.448 1-1v-3c0-.782.319-1.61 2.132-4.199.895-1.275 1.368-2.762 1.368-4.301 0-4.136-3.364-7.5-7.5-7.5zm2 18h-4v-1h4v1zm2.495-7.347c-1.466 2.093-2.143 3.289-2.385 4.347h-1.11v-2c0-.552-.448-1-1-1s-1 .448-1 1v2h-1.113c-.24-1.03-.898-2.2-2.306-4.22l-.077-.129c-.657-.934-1.004-2.024-1.004-3.151 0-3.033 2.467-5.5 5.5-5.5s5.5 2.467 5.5 5.5c0 1.126-.347 2.216-1.005 3.153z"},"child":[]}]}]})(props);
};
function TiLinkOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17.5 5.999c.282 0 .562.106.777.321.431.431.431 1.127 0 1.557l-1.72 1.723.307.308c.585.584.906 1.362.906 2.192s-.321 1.607-.906 2.191l-4.172 4.172c-.584.584-1.361.906-2.191.906s-1.607-.322-2.191-.906l-.31-.309-1.723 1.723c-.215.215-.495.322-.777.322s-.562-.107-.777-.322c-.431-.43-.431-1.126 0-1.557l1.72-1.72-.308-.309c-.583-.584-.905-1.361-.905-2.191s.321-1.608.905-2.192l4.173-4.173c.584-.584 1.387-.875 2.191-.875s1.607.291 2.191.875l.31.308 1.723-1.723c.215-.215.495-.321.777-.321m0-2c-.828 0-1.605.321-2.191.908l-.492.491c-.707-.351-1.504-.539-2.316-.539-1.363 0-2.677.533-3.605 1.461l-4.172 4.173c-.964.962-1.494 2.241-1.494 3.607 0 .822.192 1.616.558 2.327l-.479.48c-.586.585-.909 1.364-.909 2.193 0 .827.322 1.605.908 2.191.584.586 1.363.908 2.191.908s1.605-.322 2.191-.908l.48-.48c.711.365 1.504.559 2.328.559 1.363 0 2.645-.53 3.605-1.492l4.172-4.172c.963-.962 1.492-2.242 1.492-3.605 0-.824-.192-1.617-.558-2.328l.479-.48c.589-.587.912-1.366.912-2.193 0-.828-.322-1.606-.908-2.192-.587-.588-1.364-.909-2.192-.909zM11.4 11.168c.017.535.233 1.036.613 1.416.381.38.881.598 1.416.614l-1.832 1.831c-.017-.534-.234-1.035-.613-1.415-.381-.38-.881-.597-1.416-.614l1.832-1.832m1.1-2.139c-.242 0-.468.094-.637.262l-4.172 4.172c-.168.168-.26.395-.26.637 0 .24.092.467.26.635l.309.308.723-.723c.215-.215.495-.321.777-.321s.562.106.777.321c.431.431.431 1.127 0 1.557l-.72.723.308.308c.168.168.401.253.636.253s.468-.084.637-.253l4.172-4.173c.168-.168.26-.395.26-.635 0-.242-.092-.469-.26-.637l-.31-.309-.723.723c-.215.215-.495.322-.777.322s-.562-.107-.777-.322c-.431-.43-.431-1.126 0-1.557l.72-.72-.307-.309c-.169-.168-.395-.262-.636-.262z"},"child":[]}]})(props);
};
function TiLink (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18.277 6.321c-.43-.43-1.126-.43-1.556 0l-1.721 1.722-.308-.308c-1.168-1.168-3.216-1.168-4.384 0l-4.172 4.172c-.584.584-.906 1.363-.906 2.192s.322 1.608.906 2.192l.308.308-1.722 1.722c-.43.43-.43 1.126 0 1.556.215.215.496.322.778.322s.563-.107.778-.322l1.722-1.722.308.308c.584.584 1.362.906 2.192.906s1.608-.322 2.192-.906l4.172-4.172c.584-.584.906-1.362.906-2.192s-.322-1.608-.906-2.192l-.308-.308 1.722-1.722c.429-.43.429-1.126-.001-1.556zm-2.969 6.414l-4.172 4.172c-.168.168-.402.253-.636.253s-.468-.084-.636-.253l-.308-.308.722-.722c.43-.43.43-1.126 0-1.556-.215-.215-.496-.322-.778-.322s-.563.107-.778.322l-.722.722-.308-.308c-.168-.168-.261-.395-.261-.636s.093-.468.261-.636l4.172-4.172c.168-.168.394-.261.636-.261s.468.093.636.261l.308.308-.722.722c-.43.43-.43 1.126 0 1.556.215.215.496.322.778.322s.563-.107.778-.322l.722-.722.308.308c.168.168.261.395.261.636s-.093.468-.261.636z"},"child":[]}]})(props);
};
function TiLocationArrowOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11.087 20.914c-.353 0-1.219-.146-1.668-1.496l-1.209-3.627-3.628-1.209c-1.244-.415-1.469-1.172-1.493-1.587s.114-1.193 1.302-1.747l11.375-5.309c1.031-.479 1.922-.309 2.348.362.224.351.396.97-.053 1.933l-5.309 11.375c-.529 1.135-1.272 1.305-1.665 1.305zm-5.39-8.068l4.094 1.363 1.365 4.093 4.775-10.233-10.234 4.777z"},"child":[]}]})(props);
};
function TiLocationArrow (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M10.368 19.102c.349 1.049 1.011 1.086 1.478.086l5.309-11.375c.467-1.002.034-1.434-.967-.967l-11.376 5.308c-1.001.467-.963 1.129.085 1.479l4.103 1.367 1.368 4.102z"},"child":[]}]})(props);
};
function TiLocationOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 5c1.609 0 3.12.614 4.254 1.73 1.126 1.107 1.746 2.579 1.746 4.14s-.62 3.03-1.745 4.139l-4.255 4.184-4.254-4.186c-1.125-1.107-1.745-2.576-1.745-4.139s.62-3.032 1.745-4.141c1.135-1.113 2.647-1.727 4.254-1.727m0-2c-2.047 0-4.096.768-5.657 2.305-3.124 3.074-3.124 8.057 0 11.131l5.657 5.563 5.657-5.565c3.124-3.072 3.124-8.056 0-11.129-1.561-1.537-3.609-2.305-5.657-2.305zM12 8.499c.668 0 1.296.26 1.768.731.976.976.976 2.562 0 3.537-.473.472-1.1.731-1.768.731s-1.295-.26-1.768-.731c-.976-.976-.976-2.562 0-3.537.473-.471 1.101-.731 1.768-.731m0-1c-.896 0-1.792.342-2.475 1.024-1.367 1.367-1.367 3.584 0 4.951.684.684 1.578 1.024 2.475 1.024s1.792-.342 2.475-1.024c1.366-1.367 1.366-3.584 0-4.951-.683-.683-1.579-1.024-2.475-1.024z"},"child":[]}]})(props);
};
function TiLocation (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17.657 5.304c-3.124-3.073-8.189-3.073-11.313 0-3.124 3.074-3.124 8.057 0 11.13l5.656 5.565 5.657-5.565c3.124-3.073 3.124-8.056 0-11.13zm-5.657 8.195c-.668 0-1.295-.26-1.768-.732-.975-.975-.975-2.561 0-3.536.472-.472 1.1-.732 1.768-.732s1.296.26 1.768.732c.975.975.975 2.562 0 3.536-.472.472-1.1.732-1.768.732z"},"child":[]}]})(props);
};
function TiLockClosedOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"17","r":"1.3"},"child":[]},{"tag":"path","attr":{"d":"M17 10h-1v-2c0-2.206-1.794-4-4-4s-4 1.794-4 4v2h-1c-1.104 0-2 .896-2 2v7c0 1.104.896 2 2 2h10c1.104 0 2-.896 2-2v-7c0-1.104-.896-2-2-2zm-7-2c0-1.104.896-2 2-2s2 .896 2 2v3h-4v-3zm7 11h-10v-7h10.003l-.003 7z"},"child":[]}]})(props);
};
function TiLockClosed (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17 10h-1v-2c0-2.205-1.794-4-4-4s-4 1.795-4 4v2h-1c-1.103 0-2 .896-2 2v7c0 1.104.897 2 2 2h10c1.103 0 2-.896 2-2v-7c0-1.104-.897-2-2-2zm-5 8.299c-.719 0-1.3-.58-1.3-1.299s.581-1.301 1.3-1.301 1.3.582 1.3 1.301-.581 1.299-1.3 1.299zm2-7.299h-4v-3c0-1.104.897-2 2-2s2 .896 2 2v3z"},"child":[]}]})(props);
};
function TiLockOpenOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"circle","attr":{"cx":"12","cy":"17","r":"1.3"},"child":[]},{"tag":"path","attr":{"d":"M18 4c-2.206 0-4 1.794-4 4v3h-4v-1h-3c-1.104 0-2 .896-2 2v7c0 1.104.896 2 2 2h10c1.104 0 2-.896 2-2v-7c0-1.104-.896-2-2-2h-1v-2c0-1.104.896-2 2-2s2 .896 2 2v3c0 .552.448 1 1 1s1-.448 1-1v-3c0-2.206-1.794-4-4-4zm-1 15h-10v-7h10.003l-.003 7z"},"child":[]}]})(props);
};
function TiLockOpen (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18 4c-2.206 0-4 1.795-4 4v3h-4v-1h-3c-1.103 0-2 .896-2 2v7c0 1.104.897 2 2 2h10c1.103 0 2-.896 2-2v-7c0-1.104-.897-2-2-2h-1v-2c0-1.104.897-2 2-2s2 .896 2 2v3c0 .553.448 1 1 1s1-.447 1-1v-3c0-2.205-1.794-4-4-4zm-6 14.299c-.719 0-1.3-.58-1.3-1.299s.581-1.301 1.3-1.301 1.3.582 1.3 1.301-.581 1.299-1.3 1.299z"},"child":[]}]})(props);
};
function TiMail (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 7h-14c-1.104 0-2 .896-2 2v9c0 1.104.896 2 2 2h14c1.104 0 2-.896 2-2v-9c0-1.104-.896-2-2-2zm-9.684 7.316l1.602 1.4c.305.266.691.398 1.082.398s.777-.133 1.082-.398l1.602-1.4-.037.037 3.646 3.646h-12.586l3.646-3.646-.037-.037zm-4.316 2.977v-6.753l3.602 3.151-3.602 3.602zm10.398-3.602l3.602-3.151v6.75l-3.602-3.599zm3.602-4.691v.21l-6.576 5.754c-.227.198-.621.198-.848 0l-6.576-5.754v-.21h14z"},"child":[]}]})(props);
};
function TiMap (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20.383 3.076c-.373-.155-.804-.069-1.09.217l-3.867 3.867-4.301-3.441c-.396-.316-.973-.287-1.332.074l-4.5 4.5c-.188.187-.293.441-.293.707v10c0 .404.243.77.617.924.124.053.254.076.383.076.26 0 .516-.102.707-.293l3.867-3.867 4.301 3.441c.396.316.971.285 1.332-.074l4.5-4.5c.188-.187.293-.441.293-.707v-10c0-.404-.243-.77-.617-.924zm-13.383 13.51v-7.172l3-3v7.24c-.07.043-3 2.932-3 2.932zm4.125-2.867l-.125-.068v-7.469s3.959 3.143 4 3.166v7.473l-3.875-3.102zm7.875-.133l-3 3v-7.236c.07-.043 3-2.936 3-2.936v7.172z"},"child":[]}]})(props);
};
function TiMediaEjectOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M16 21h-8c-1.654 0-3-1.346-3-3s1.346-3 3-3h8c1.654 0 3 1.346 3 3s-1.346 3-3 3zm-8-4c-.551 0-1 .448-1 1s.449 1 1 1h8c.551 0 1-.448 1-1s-.449-1-1-1h-8zM12 6.866l4.964 5.096.036.038-10 .004.08-.087 4.92-5.051m0-2.866s-3.859 3.963-6.433 6.604c-.349.363-.567.853-.567 1.396 0 1.104.896 2 2 2h10c1.104 0 2-.896 2-2 0-.543-.218-1.033-.568-1.393-2.573-2.644-6.432-6.607-6.432-6.607z"},"child":[]}]}]})(props);
};
function TiMediaEject (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17 16h-10c-1.104 0-2 .895-2 2 0 1.104.896 2 2 2h10c1.104 0 2-.896 2-2 0-1.105-.896-2-2-2zM18.433 10.604c-2.574-2.641-6.433-6.604-6.433-6.604s-3.859 3.963-6.433 6.604c-.349.363-.567.853-.567 1.396 0 1.104.896 2 2 2h10c1.104 0 2-.896 2-2 0-.543-.218-1.033-.567-1.396z"},"child":[]}]})(props);
};
function TiMediaFastForwardOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M14 8.676l4.133 4.025-4.133 4.026v-8.051m-.2-2.276c-.994 0-1.8.807-1.8 1.801v9c0 .994.806 1.799 1.8 1.799.488 0 .93-.195 1.253-.512 2.381-2.314 5.947-5.787 5.947-5.787s-3.566-3.475-5.944-5.789c-.327-.314-.768-.512-1.256-.512zM5 8.676l4.133 4.025-4.133 4.026v-8.051m-.2-2.276c-.994 0-1.8.807-1.8 1.801v9c0 .994.806 1.799 1.8 1.799.488 0 .93-.195 1.253-.512 2.381-2.314 5.947-5.787 5.947-5.787s-3.566-3.474-5.944-5.789c-.327-.314-.768-.512-1.256-.512z"},"child":[]}]}]})(props);
};
function TiMediaFastForward (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M15.053 6.912c-.324-.314-.765-.512-1.253-.512-.994 0-1.8.807-1.8 1.801v9c0 .994.806 1.799 1.8 1.799.488 0 .93-.195 1.253-.512 2.381-2.314 5.947-5.787 5.947-5.787s-3.566-3.474-5.947-5.789zM6.053 6.912c-.324-.314-.765-.512-1.253-.512-.994 0-1.8.807-1.8 1.801v9c0 .994.806 1.799 1.8 1.799.488 0 .93-.195 1.253-.512 2.381-2.314 5.947-5.787 5.947-5.787s-3.566-3.474-5.947-5.789z"},"child":[]}]})(props);
};
function TiMediaPauseOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M8 20c-1.654 0-3-1.346-3-3v-9c0-1.654 1.346-3 3-3s3 1.346 3 3v9c0 1.654-1.346 3-3 3zm0-13c-.552 0-1 .449-1 1v9c0 .551.448 1 1 1s1-.449 1-1v-9c0-.551-.448-1-1-1zM15 20c-1.654 0-3-1.346-3-3v-9c0-1.654 1.346-3 3-3s3 1.346 3 3v9c0 1.654-1.346 3-3 3zm0-13c-.552 0-1 .449-1 1v9c0 .551.448 1 1 1s1-.449 1-1v-9c0-.551-.448-1-1-1z"},"child":[]}]})(props);
};
function TiMediaPause (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M8 6c-1.104 0-2 .896-2 2v8c0 1.104.896 2 2 2s2-.896 2-2v-8c0-1.104-.896-2-2-2zM15 6c-1.104 0-2 .896-2 2v8c0 1.104.896 2 2 2s2-.896 2-2v-8c0-1.104-.896-2-2-2z"},"child":[]}]})(props);
};
function TiMediaPlayOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M8.998 7.002l.085.078 5.051 4.92-5.096 4.964-.038.036-.002-9.998m.002-2.002c-1.104 0-2 .896-2 2v10c0 1.104.896 2 2 2 .543 0 1.033-.218 1.393-.568 2.644-2.573 6.607-6.432 6.607-6.432s-3.963-3.859-6.604-6.433c-.363-.349-.853-.567-1.396-.567z"},"child":[]}]})(props);
};
function TiMediaPlayReverseOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M14 7v10l-5.1-5 5.1-5m-1.4-1.4c-2.6 2.5-6.6 6.4-6.6 6.4s4 3.9 6.6 6.4c.4.4.9.6 1.4.6 1.1 0 2-.9 2-2v-10c0-1.1-.9-2-2-2-.5 0-1 .2-1.4.6z"},"child":[]}]})(props);
};
function TiMediaPlayReverse (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M14 19c1.1 0 2-.9 2-2v-10c0-1.1-.9-2-2-2-.5 0-1 .2-1.4.6-2.6 2.5-6.6 6.4-6.6 6.4s4 3.9 6.6 6.4c.4.4.9.6 1.4.6z"},"child":[]}]})(props);
};
function TiMediaPlay (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M10.396 18.433c2.641-2.574 6.604-6.433 6.604-6.433s-3.963-3.859-6.604-6.433c-.363-.349-.853-.567-1.396-.567-1.104 0-2 .896-2 2v10c0 1.104.896 2 2 2 .543 0 1.033-.218 1.396-.567z"},"child":[]}]})(props);
};
function TiMediaRecordOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 8c2.205 0 4 1.794 4 4s-1.795 4-4 4-4-1.794-4-4 1.795-4 4-4m0-2c-3.314 0-6 2.686-6 6 0 3.312 2.686 6 6 6 3.312 0 6-2.688 6-6 0-3.314-2.688-6-6-6z"},"child":[]}]})(props);
};
function TiMediaRecord (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18 12c0-1.657-.672-3.157-1.757-4.243-1.086-1.085-2.586-1.757-4.243-1.757-1.656 0-3.156.672-4.242 1.757-1.086 1.086-1.758 2.586-1.758 4.243 0 1.656.672 3.156 1.758 4.242s2.586 1.758 4.242 1.758c1.657 0 3.157-.672 4.243-1.758 1.085-1.086 1.757-2.586 1.757-4.242z"},"child":[]}]})(props);
};
function TiMediaRewindOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M10 8.676v8.05l-4.133-4.025 4.133-4.025m.2-2.276c-.488 0-.931.197-1.253.512-2.381 2.315-5.947 5.789-5.947 5.789l5.944 5.789c.326.315.768.51 1.256.51.994 0 1.8-.805 1.8-1.799v-9c0-.994-.806-1.801-1.8-1.801zM19 8.676v8.051l-4.133-4.025 4.133-4.026m.2-2.276c-.488 0-.931.197-1.253.512-2.381 2.315-5.947 5.789-5.947 5.789l5.944 5.789c.326.315.768.51 1.256.51.994 0 1.8-.805 1.8-1.799v-9c0-.994-.806-1.801-1.8-1.801z"},"child":[]}]}]})(props);
};
function TiMediaRewind (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M10.2 6.4c-.488 0-.931.197-1.253.512-2.381 2.315-5.947 5.789-5.947 5.789l5.944 5.789c.326.315.768.51 1.256.51.994 0 1.8-.805 1.8-1.799v-9c0-.994-.806-1.801-1.8-1.801zM19.2 6.4c-.488 0-.931.197-1.253.512-2.381 2.315-5.947 5.789-5.947 5.789l5.944 5.789c.326.315.768.51 1.256.51.994 0 1.8-.805 1.8-1.799v-9c0-.994-.806-1.801-1.8-1.801z"},"child":[]}]})(props);
};
function TiMediaStopOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M16 8v8h-8v-8h8m0-2h-8c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2z"},"child":[]}]})(props);
};
function TiMediaStop (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M16 6h-8c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2z"},"child":[]}]})(props);
};
function TiMessageTyping (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18 6h-13c-1.65 0-3 1.35-3 3v7c0 1.65 1.35 3 3 3h1v3l3-3h9c1.65 0 3-1.35 3-3v-7c0-1.65-1.35-3-3-3zm1 10c0 .542-.458 1-1 1h-13c-.542 0-1-.458-1-1v-7c0-.542.458-1 1-1h13c.542 0 1 .458 1 1v7zM7 14.5c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2zm0-3c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zM11.5 14.5c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2zm0-3c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zM16 14.5c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2zm0-3c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z"},"child":[]}]})(props);
};
function TiMessage (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18 7c.542 0 1 .458 1 1v7c0 .542-.458 1-1 1h-8.829l-.171.171v-.171h-3c-.542 0-1-.458-1-1v-7c0-.542.458-1 1-1h12m0-2h-12c-1.65 0-3 1.35-3 3v7c0 1.65 1.35 3 3 3h1v3l3-3h8c1.65 0 3-1.35 3-3v-7c0-1.65-1.35-3-3-3z"},"child":[]}]})(props);
};
function TiMessages (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 7h-3c0-1.65-1.35-3-3-3h-12c-1.65 0-3 1.35-3 3v7c0 1.65 1.35 3 3 3v3l3-3c0 1.65 1.35 3 3 3h8l3 3v-3h1c1.65 0 3-1.35 3-3v-7c0-1.65-1.35-3-3-3zm-18 8c-.542 0-1-.458-1-1v-7c0-.542.458-1 1-1h12c.542 0 1 .458 1 1v1h-6.5c-1.379 0-2.5 1.121-2.5 2.5v4.5h-4zm19 2c0 .542-.458 1-1 1h-12c-.542 0-1-.458-1-1v-6.5c0-.827.673-1.5 1.5-1.5h11.5c.542 0 1 .458 1 1v7z"},"child":[]}]})(props);
};
function TiMicrophoneOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M12 16c-2.206 0-4-1.795-4-4v-6c0-2.205 1.794-4 4-4s4 1.795 4 4v6c0 2.205-1.794 4-4 4zm0-12c-1.103 0-2 .896-2 2v6c0 1.104.897 2 2 2s2-.896 2-2v-6c0-1.104-.897-2-2-2zM19 12v-2c0-.553-.447-1-1-1s-1 .447-1 1v2c0 2.757-2.243 5-5 5s-5-2.243-5-5v-2c0-.553-.447-1-1-1s-1 .447-1 1v2c0 3.52 2.613 6.432 6 6.92v1.08h-3c-.553 0-1 .447-1 1s.447 1 1 1h8c.553 0 1-.447 1-1s-.447-1-1-1h-3v-1.08c3.387-.488 6-3.4 6-6.92z"},"child":[]}]}]})(props);
};
function TiMicrophone (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 16c2.206 0 4-1.795 4-4v-6c0-2.206-1.794-4-4-4s-4 1.794-4 4v6c0 2.205 1.794 4 4 4zM19 12v-2c0-.552-.447-1-1-1s-1 .448-1 1v2c0 2.757-2.243 5-5 5s-5-2.243-5-5v-2c0-.552-.447-1-1-1s-1 .448-1 1v2c0 3.52 2.613 6.432 6 6.92v1.08h-3c-.553 0-1 .447-1 1s.447 1 1 1h8c.553 0 1-.447 1-1s-.447-1-1-1h-3v-1.08c3.387-.488 6-3.4 6-6.92z"},"child":[]}]})(props);
};
function TiMinusOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18 16h-12c-1.654 0-3-1.346-3-3s1.346-3 3-3h12c1.654 0 3 1.346 3 3s-1.346 3-3 3zm-12-4c-.551 0-1 .449-1 1s.449 1 1 1h12c.551 0 1-.449 1-1s-.449-1-1-1h-12z"},"child":[]}]})(props);
};
function TiMinus (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18 11h-12c-1.104 0-2 .896-2 2s.896 2 2 2h12c1.104 0 2-.896 2-2s-.896-2-2-2z"},"child":[]}]})(props);
};
function TiMortarBoard (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20.5 7.9s-5.8-2.9-6.9-3.5-1.7-.7-3 0c-1.3.6-6.7 3.3-6.7 3.3-.8.4-1.5 1.2-1.5 2s.2 1.2.2 1.2-.1.3-.3 1.5c-.3 1.2-.3 2.7-.3 3.3 0 1.5 1.3 2.6 2.2 2.7.9.1 1.6-.1 1.6-.1 1.4 1.3 3.7 2.1 6.4 2.1 4.4 0 7.8-2.2 7.8-5 0-1.1-.4-2.7-.4-2.7l1.1-.6c.9-.5 1.3-1.4 1.3-2.3-.1-.8-.6-1.5-1.5-1.9zm-8.2 10.4c-3.2 0-5.8-1.3-5.8-3l.5-2.8 4.2 2.1c.6.3 1.5.3 2.2 0l4.3-2.1.4 2.8c0 1.6-2.5 3-5.8 3zm7.3-8.1l-6.6 3.4c-.4.2-1 .2-1.4 0l-5.7-2.9c-.2.5-.3 1.2-.3 2 0 1.4.2 2.4.2 2.9s-.3.8-.7.8h-.1c-.4 0-.8-.3-.8-.8s0-1.6.3-3.1c.2-.9.4-1.7.6-2.2l-.2-.1c-.4-.2-.4-.5 0-.7l6.7-3.4c.4-.2.9-.2 1.3 0s6.7 3.4 6.7 3.4c.4.2.4.5 0 .7z"},"child":[]}]})(props);
};
function TiNews (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 4h-18c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h18c1.104 0 2-.896 2-2v-12c0-1.104-.896-2-2-2zm-18 2h8v12h-8v-12zm18 12h-9v-12h9.003l-.003 12zM20 13.5c0-.275-.225-.5-.5-.5h-1c-.275 0-.5.225-.5.5v3c0 .275.225.5.5.5h1c.275 0 .5-.225.5-.5v-3zM17 7.5c0-.275-.225-.5-.5-.5h-3c-.275 0-.5.225-.5.5v5c0 .275.225.5.5.5h3c.275 0 .5-.225.5-.5v-5zM18.5 10h1c.275 0 .5-.225.5-.5s-.225-.5-.5-.5h-1c-.275 0-.5.225-.5.5s.225.5.5.5zM18.5 12h1c.275 0 .5-.225.5-.5s-.225-.5-.5-.5h-1c-.275 0-.5.225-.5.5s.225.5.5.5zM13.5 15h3c.275 0 .5-.225.5-.5s-.225-.5-.5-.5h-3c-.275 0-.5.225-.5.5s.225.5.5.5zM16.5 16h-3c-.275 0-.5.225-.5.5s.225.5.5.5h3c.275 0 .5-.225.5-.5s-.225-.5-.5-.5zM18.5 8h1c.275 0 .5-.225.5-.5s-.225-.5-.5-.5h-1c-.275 0-.5.225-.5.5s.225.5.5.5zM10 7.5c0-.275-.225-.5-.5-.5h-5c-.275 0-.5.225-.5.5v3c0 .275.225.5.5.5h5c.275 0 .5-.225.5-.5v-3zM9.501 14h-5c-.274 0-.5.225-.5.5s.226.5.5.5h5c.274 0 .499-.225.499-.5s-.225-.5-.499-.5zM9.501 12h-5c-.274 0-.5.225-.5.5s.226.5.5.5h5c.274 0 .499-.225.499-.5s-.225-.5-.499-.5zM9.501 16h-5c-.274 0-.5.225-.5.5s.226.5.5.5h5c.274 0 .499-.225.499-.5s-.225-.5-.499-.5z"},"child":[]}]})(props);
};
function TiNotesOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18.324 4.367c-.368-.324-.84-.5-1.324-.5l-.248.016-9 1.25c-1.001.125-1.752.975-1.752 1.984v6.111c-1.746.551-3 2.034-3 3.772 0 2.205 2.019 4 4.5 4 1.695 0 3.169-.842 3.937-2.078.803.667 1.879 1.078 3.063 1.078 2.481 0 4.5-1.795 4.5-4v-10.133c0-.574-.246-1.119-.676-1.5zm-7.324 11.633v-4.256l3-.45v1.737c-1.693.208-3 1.46-3 2.969zm6 0c0 1.104-1.119 2-2.5 2s-2.5-.896-2.5-2 1.119-2 2.5-2c.172 0 .338.014.5.041v-3.908l-5 .75v6.117c0 1.104-1.119 2-2.5 2s-2.5-.896-2.5-2 1.119-2 2.5-2c.172 0 .338.014.5.041v-7.924l9-1.25v10.133z"},"child":[]}]})(props);
};
function TiNotes (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18.831 4.059c-.107-.095-.243-.139-.394-.121l-11 1.25c-.249.031-.437.244-.437.496v10.316c-1.654 0-3 1.122-3 2.5s1.346 2.5 3 2.5 3-1.122 3-2.5v-7.609l6-.625v3.734c-1.654 0-3 1.122-3 2.5s1.346 2.5 3 2.5 3-1.122 3-2.5v-12.066c0-.144-.062-.28-.169-.375z"},"child":[]}]})(props);
};
function TiPen (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21.329 7.207c0-1.212-.472-2.352-1.329-3.207s-1.996-1.329-3.207-1.329c-1.199 0-2.327.463-3.18 1.304-.027.025-7.967 7.964-7.967 7.964-.373.373-.717.91-.967 1.514-.195.473-1.979 5.863-2.336 6.939-.119.358-.025.754.242 1.021.189.189.445.293.707.293.105 0 .211-.018.314-.051 1.076-.355 6.465-2.141 6.938-2.336.603-.248 1.14-.592 1.515-.967l2.157-2.156.076.01c.64 0 1.28-.244 1.769-.732l4.5-4.5c.696-.695.887-1.699.588-2.572.107-.386.18-.783.18-1.195zm-11.864 10.379c-.406.143-1.145.393-2.038.691l-1.704-1.704c.301-.894.551-1.634.691-2.038l3.051 3.051zm-4.097.047l.999.999-1.498.499.499-1.498zm7.698-3.113l-2.42 2.42-.235.18-3.53-3.529.18-.234 7.131-7.131 2.731 2.731-3.69 3.69c-.513.512-.549 1.289-.167 1.873zm6.08-4.959l-4.5 4.5c-.098.099-.226.146-.354.146s-.256-.049-.354-.146c-.195-.194-.195-.512 0-.707l4.5-4.5c.194-.194.512-.194.707 0 .196.195.197.511.001.707zm.107-1.764c-.519-.168-1.108-.062-1.521.35l-.102.102-2.731-2.731.078-.078c.984-.98 2.652-.981 3.608-.023.479.479.743 1.116.743 1.793.001.199-.03.394-.075.587z"},"child":[]}]})(props);
};
function TiPencil (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 6.879l-3.879-3.879c-.293-.293-.678-.439-1.061-.439-.384 0-.767.146-1.06.439l-10.939 10.939c-.293.293-.558.727-.75 1.188-.192.463-.311.959-.311 1.373v4.5h4.5c.414 0 .908-.119 1.371-.311.463-.192.896-.457 1.189-.75l10.94-10.939c.293-.293.439-.678.439-1.061 0-.384-.146-.767-.439-1.06zm-15.232 8.182l8.293-8.293 1.232 1.232-8.293 8.293-1.232-1.232zm1.732 3.939h-1.5l-1-1v-1.5c0-.077.033-.305.158-.605.01-.02 2.967 2.938 2.967 2.938-.322.134-.548.167-.625.167zm1.439-.768l-1.232-1.232 8.293-8.293 1.232 1.232-8.293 8.293zm9-9l-3.172-3.172 1.293-1.293 3.17 3.172-1.291 1.293z"},"child":[]}]})(props);
};
function TiPhoneOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19.502 3.672l-1.795-1.793c-.566-.567-1.32-.879-2.121-.879s-1.555.312-2.121.879l-1.586 1.586c-1.17 1.17-1.17 3.072 0 4.242l1.379 1.379-4.172 4.172-1.379-1.379c-.566-.567-1.32-.879-2.121-.879s-1.555.312-2.121.879l-1.586 1.586c-1.17 1.17-1.17 3.072 0 4.242l1.794 1.793c.465.465 1.796 1.545 4.116 1.545 2.764 0 5.694-1.529 8.711-4.545 6.245-6.246 4.825-11.002 3.002-12.828zm-6.209 1.207l1.586-1.586c.195-.195.451-.293.707-.293s.512.098.707.293l1.083 1.082-3.001 3-1.082-1.082c-.391-.391-.391-1.023 0-1.414zm-10 11.414c-.391-.391-.391-1.023 0-1.414l1.586-1.586c.195-.195.451-.293.707-.293s.512.098.707.293l1.082 1.082-2.999 3-1.083-1.082zm11.793-1.207c-3.083 3.082-5.551 3.959-7.297 3.959-1.349 0-2.267-.523-2.702-.959-.004-.004 2.995-3.004 2.995-3.004l.297.297c.195.195.451.293.707.293s.512-.098.707-.293l5.586-5.586c.391-.391.391-1.023 0-1.414l-.297-.297 3.001-3c1.003 1.004 2.467 4.539-2.997 10.004z"},"child":[]}]})(props);
};
function TiPhone (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M13.374 7.083l3.711-3.71-.438-.434c-.566-.566-1.555-.566-2.121 0l-1.586 1.586c-.284.284-.44.661-.44 1.061s.156.777.438 1.06l.436.437zM6.646 12.939c-.566-.566-1.555-.566-2.121 0l-1.586 1.586c-.283.284-.439.661-.439 1.061s.156.777.441 1.062l.437.432 3.703-3.703-.435-.438zM18.437 4.729l-.354-.354-3.708 3.708.65.649c.095.095.146.22.146.354s-.052.259-.146.354l-5.586 5.586c-.189.188-.518.189-.707 0l-.65-.65-3.702 3.71.354.354c.26.26 1.246 1.105 3.056 1.105 1.616 0 4.256-.712 7.65-4.105 6.773-6.775 3.158-10.55 2.997-10.711z"},"child":[]}]})(props);
};
function TiPiOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20.121 7.121c-.566-.567-1.32-.879-2.121-.879s-1.555.312-2.121.879c-.233.233-.546.362-.879.362s-.646-.129-.879-.362c-1.366-1.366-3.185-2.118-5.121-2.118s-3.755.752-5.121 2.118c-.567.567-.879 1.32-.879 2.121s.312 1.555.879 2.121c.566.567 1.32.879 2.121.879v4.758c0 1.654 1.346 3 3 3s3-1.346 3-3c0 1.654 1.346 3 3 3s3-1.346 3-3v-4.166c.784-.356 1.501-.851 2.12-1.47.568-.567.88-1.321.88-2.122s-.312-1.554-.879-2.121zm-1.414 2.828c-.768.767-1.715 1.245-2.707 1.437v5.614c0 .553-.447 1-1 1s-1-.447-1-1v-5.614c-.992-.191-1.939-.67-2.707-1.437-.374-.374-.821-.623-1.293-.775v7.826c0 .553-.447 1-1 1s-1-.447-1-1v-7.827c-.473.152-.919.402-1.293.776-.195.196-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023 0-1.414 1.021-1.021 2.364-1.532 3.707-1.532s2.685.511 3.707 1.532c.633.632 1.463.948 2.293.948.831 0 1.661-.316 2.293-.948.195-.195.451-.293.707-.293s.512.098.707.293c.391.391.391 1.024 0 1.414z"},"child":[]}]})(props);
};
function TiPi (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18.707 8.535c-.391-.391-1.023-.391-1.414 0-1.264 1.264-3.321 1.264-4.586 0-2.045-2.044-5.371-2.042-7.414 0-.391.391-.391 1.023 0 1.414s1.023.391 1.414 0c.374-.374.82-.624 1.293-.776v7.827c0 .553.447 1 1 1s1-.447 1-1v-7.826c.472.152.919.401 1.293.775.768.767 1.715 1.245 2.707 1.437v5.614c0 .553.447 1 1 1s1-.447 1-1v-5.614c.992-.191 1.939-.67 2.707-1.437.391-.39.391-1.023 0-1.414z"},"child":[]}]})(props);
};
function TiPinOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21.436 7.586l-3.998-4.02c-.752-.756-2.063-.764-2.83-.006-.196.196-.35.436-.418.629-.653 1.362-1.354 2.215-2.254 2.727l-.217.105c-.968.485-2.285.979-4.719.979-.266 0-.521.052-.766.152-.484.202-.879.595-1.082 1.084-.199.484-.199 1.041 0 1.525.104.249.25.471.435.651l3.235 3.235-3.822 5.353 5.352-3.822 3.227 3.227c.186.189.406.339.656.441.247.103.503.154.766.154s.519-.052.765-.154c.498-.205.883-.592 1.08-1.078.103-.242.155-.507.155-.768 0-2.436.494-3.752.978-4.721.496-.992 1.369-1.748 2.754-2.414.271-.104.51-.256.711-.457.772-.782.768-2.051-.008-2.822zm-5.248 4.801c-.819 1.643-1.188 3.37-1.195 5.604l-7.993-7.991c2.139 0 3.814-.335 5.396-1.084l.235-.105c1.399-.699 2.468-1.893 3.388-3.834l3.924 4.051c-1.863.893-3.056 1.96-3.755 3.359z"},"child":[]}]})(props);
};
function TiPin (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M16.729 4.271c-.389-.391-1.021-.393-1.414-.004-.104.104-.176.227-.225.355-.832 1.736-1.748 2.715-2.904 3.293-1.297.64-2.786 1.085-5.186 1.085-.13 0-.26.025-.382.076-.245.102-.439.297-.541.541-.101.244-.101.52 0 .764.051.123.124.234.217.326l3.243 3.243-4.537 6.05 6.05-4.537 3.242 3.242c.092.094.203.166.326.217.122.051.252.078.382.078s.26-.027.382-.078c.245-.102.44-.295.541-.541.051-.121.077-.252.077-.381 0-2.4.444-3.889 1.083-5.166.577-1.156 1.556-2.072 3.293-2.904.129-.049.251-.121.354-.225.389-.393.387-1.025-.004-1.414l-3.997-4.02z"},"child":[]}]})(props);
};
function TiPipette (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21.384 7.331c.073-1.199-.354-2.388-1.146-3.179-.732-.731-1.793-1.152-2.912-1.152-1.176 0-2.206.453-2.825 1.243-.692.883-1.392 2.625-1.769 3.647l-1.616-1.617c-.392-.391-1.023-.391-1.414 0-.392.392-.392 1.023 0 1.414l.293.293-5.231 5.232c-.375.375-.719.912-.968 1.516-.019.043-1.726 4.328-.093 5.959.527.526 1.33.707 2.178.707 1.778-.002 3.753-.787 3.783-.801.602-.248 1.141-.592 1.514-.967l5.232-5.232.293.293c.195.195.451.293.707.293s.512-.098.707-.293c.391-.391.391-1.022 0-1.414l-1.617-1.616c1.023-.376 2.766-1.075 3.648-1.769.721-.562 1.17-1.493 1.236-2.557zm-16.265 11.944c-.247-.295-.105-1.508.154-2.58l2.422 2.423c-1.071.261-2.283.403-2.576.157zm4.645-1.061c-.188.188-.511.388-.865.533l-.116.042-3.181-3.18.043-.117c.146-.354.346-.678.533-.864l5.232-5.231 3.586 3.586-5.232 5.231z"},"child":[]}]})(props);
};
function TiPlaneOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M20.988 12.396l-4.988-2.851v-4.795c0-1.93-1.57-3.5-3.5-3.5s-3.5 1.57-3.5 3.5v4.795l-4.988 2.851c-1.317.752-1.865 2.371-1.276 3.769.589 1.399 2.132 2.135 3.589 1.72l2.675-.765v.838l-.874.699c-1.198.959-1.48 2.667-.653 3.959.827 1.293 2.494 1.753 3.869 1.066.004-.001.5-.183 1.158-.183l1.158.183c1.375.687 3.042.227 3.869-1.066.827-1.292.545-3-.653-3.959l-.874-.699v-.838l2.676.765c1.457.415 3-.321 3.589-1.72s.041-3.017-1.277-3.769zm-.566 2.992c-.197.466-.711.713-1.196.573l-5.226-1.492v4.451l1.625 1.3c.399.319.493.889.218 1.32-.275.43-.828.583-1.29.355-.008-.004-.824-.395-2.053-.395s-2.045.391-2.053.395c-.462.227-1.015.074-1.29-.355-.275-.431-.182-1 .218-1.32l1.625-1.3v-4.451l-5.226 1.493c-.485.14-.999-.107-1.196-.573-.196-.466-.014-1.005.426-1.256l5.996-3.427v-5.956c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5v5.956l5.996 3.426c.44.251.622.79.426 1.256z"},"child":[]},{"tag":"circle","attr":{"cx":"12.5","cy":"4.5","r":".5"},"child":[]}]}]})(props);
};
function TiPlane (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19.996 13.507l-5.996-3.426v-5.956c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5v5.956l-5.996 3.426c-.439.251-.622.79-.426 1.256.197.466.711.713 1.196.573l5.226-1.492v4.451l-1.625 1.3c-.387.31-.488.856-.239 1.284s.776.608 1.235.425l2.129-.852 2.129.852c.121.048.247.071.371.071.347 0 .681-.181.864-.497.249-.428.147-.975-.239-1.284l-1.625-1.3v-4.451l5.226 1.493.274.039c.394 0 .762-.233.922-.612.196-.466.014-1.005-.426-1.256zm-7.496-9.132c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5z"},"child":[]}]})(props);
};
function TiPlug (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18,6h-1V3c0-0.6-0.4-1-1-1h-2c-0.6,0-1,0.4-1,1v3h-2V3c0-0.6-0.4-1-1-1H8C7.4,2,7,2.4,7,3v3H6C5.4,6,5,6.4,5,7v4\r\n\tc0,0.1,0,0.1,0,0.2c0.2,2.5,1.8,4.6,4,5.6V20c0,1.1,0.9,2,2,2h2c1.1,0,2-0.9,2-2v-3.2c2.2-1,3.7-3.1,4-5.6c0-0.1,0-0.1,0-0.2V7\r\n\tC19,6.4,18.6,6,18,6z M14,3h2v3h-2V3z M8,3h2v3H8V3z M13,20h-2v-2h2V20z M12,15.5c-2.2,0-4.1-1.5-4.7-3.5h9.5\r\n\tC16.1,14,14.2,15.5,12,15.5z M17,10.5c0,0.2,0,0.3-0.1,0.5H7.1C7,10.8,7,10.7,7,10.5V8h10V10.5z"},"child":[]}]})(props);
};
function TiPlusOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 21c-1.654 0-3-1.346-3-3l.053-3.053-3.035.053c-1.672 0-3.018-1.346-3.018-3s1.346-3 3-3l3.053-.054-.053-2.928c0-1.672 1.346-3.018 3-3.018s3 1.346 3 3l.055 2.946 2.963.054c1.636 0 2.982 1.346 2.982 3s-1.346 3-3 3l-2.945-.053-.055 3.071c0 1.636-1.346 2.982-3 2.982zm-1-8v5.018c0 .533.449.982 1 .982s1-.449 1-1v-5h5.018c.533 0 .982-.449.982-1s-.449-1-1-1h-5v-5c0-.569-.449-1-1-1s-1 .449-1 1v5h-5c-.569 0-1 .449-1 1s.449 1 1 1h5z"},"child":[]}]})(props);
};
function TiPlus (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18 10h-4v-4c0-1.104-.896-2-2-2s-2 .896-2 2l.071 4h-4.071c-1.104 0-2 .896-2 2s.896 2 2 2l4.071-.071-.071 4.071c0 1.104.896 2 2 2s2-.896 2-2v-4.071l4 .071c1.104 0 2-.896 2-2s-.896-2-2-2z"},"child":[]}]})(props);
};
function TiPointOfInterestOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M16.5 4c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5h-1.5v2h1.5c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5-3.5-1.57-3.5-3.5v-1.5h-2v1.5c0 1.93-1.57 3.5-3.5 3.5s-3.5-1.57-3.5-3.5 1.57-3.5 3.5-3.5h1.5v-2h-1.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5v1.5h2v-1.5c0-1.93 1.57-3.5 3.5-3.5m-1.5 5h1.5c.827 0 1.5-.674 1.5-1.5 0-.828-.673-1.5-1.5-1.5s-1.5.672-1.5 1.5v1.5m-7.5 0h1.5v-1.5c0-.828-.673-1.5-1.5-1.5s-1.5.672-1.5 1.5c0 .826.673 1.5 1.5 1.5m9 9c.827 0 1.5-.674 1.5-1.5 0-.828-.673-1.5-1.5-1.5h-1.5v1.5c0 .826.673 1.5 1.5 1.5m-9 0c.827 0 1.5-.674 1.5-1.5v-1.5h-1.5c-.827 0-1.5.672-1.5 1.5 0 .826.673 1.5 1.5 1.5m9-16c-1.857 0-3.504.926-4.5 2.341-.996-1.415-2.643-2.341-4.5-2.341-3.033 0-5.5 2.468-5.5 5.5 0 1.857.926 3.504 2.341 4.5-1.415.996-2.341 2.643-2.341 4.5 0 3.032 2.467 5.5 5.5 5.5 1.857 0 3.504-.926 4.5-2.341.996 1.415 2.643 2.341 4.5 2.341 3.033 0 5.5-2.468 5.5-5.5 0-1.857-.926-3.504-2.341-4.5 1.415-.996 2.341-2.643 2.341-4.5 0-3.032-2.467-5.5-5.5-5.5zM13 11h-2v2h2z"},"child":[]}]})(props);
};
function TiPointOfInterest (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M16.5 11c1.93 0 3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5-3.5 1.57-3.5 3.5v1.5h-2v-1.5c0-1.93-1.57-3.5-3.5-3.5s-3.5 1.57-3.5 3.5 1.57 3.5 3.5 3.5h1.5v2h-1.5c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5v-1.5h2v1.5c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5h-1.5v-2h1.5zm-1.5-3.5c0-.828.673-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .826-.673 1.5-1.5 1.5h-1.5v-1.5zm-6 9c0 .826-.673 1.5-1.5 1.5s-1.5-.674-1.5-1.5c0-.828.673-1.5 1.5-1.5h1.5v1.5zm0-7.5h-1.5c-.827 0-1.5-.674-1.5-1.5 0-.828.673-1.5 1.5-1.5s1.5.672 1.5 1.5v1.5zm4 4h-2v-2h2v2zm3.5 2c.827 0 1.5.672 1.5 1.5 0 .826-.673 1.5-1.5 1.5s-1.5-.674-1.5-1.5v-1.5h1.5z"},"child":[]}]})(props);
};
function TiPowerOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17.51 6.062c-.814-.815-1.98-1.05-3.01-.729v-.333c0-1.656-1.344-3-3-3s-3 1.344-3 3v.332c-1.029-.319-2.195-.085-3.01.73-1.605 1.606-2.49 3.741-2.49 6.011s.885 4.405 2.49 6.011c1.604 1.605 3.739 2.489 6.01 2.489s4.405-.884 6.01-2.489c1.605-1.605 2.49-3.74 2.49-6.011s-.885-4.405-2.49-6.011zm-7.01-1.062c0-.552.447-1 1-1s1 .448 1 1v5c0 .552-.447 1-1 1s-1-.448-1-1v-5zm-1 3.803v1.197c0 1.104.896 2 2 2s2-.896 2-2v-1.182c.095.284.248.554.475.78.661.661 1.025 1.54 1.025 2.475s-.364 1.814-1.025 2.476c-1.322 1.321-3.627 1.321-4.949 0-.662-.662-1.026-1.541-1.026-2.476s.364-1.814 1.025-2.476c.231-.23.383-.504.475-.794zm6.596 7.867c-1.228 1.228-2.859 1.903-4.596 1.903s-3.368-.676-4.596-1.903c-1.227-1.228-1.904-2.86-1.904-4.597s.677-3.369 1.904-4.597c.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414c-.85.851-1.318 1.981-1.318 3.183s.468 2.333 1.318 3.183c.85.85 1.979 1.317 3.182 1.317s2.332-.468 3.182-1.317c.851-.85 1.318-1.98 1.318-3.183s-.468-2.333-1.318-3.183c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0c1.227 1.229 1.904 2.861 1.904 4.597s-.677 3.369-1.904 4.597z"},"child":[]}]})(props);
};
function TiPower (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11.5 18.573c-1.736 0-3.368-.676-4.596-1.903-1.227-1.228-1.904-2.86-1.904-4.597s.677-3.369 1.904-4.597c.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414c-.85.851-1.318 1.981-1.318 3.183s.468 2.333 1.318 3.183c.85.85 1.979 1.317 3.182 1.317s2.332-.468 3.182-1.317c.851-.85 1.318-1.98 1.318-3.183s-.468-2.333-1.318-3.183c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0c1.227 1.229 1.904 2.861 1.904 4.597s-.677 3.369-1.904 4.597c-1.228 1.227-2.86 1.903-4.596 1.903zM11.5 11c-.553 0-1-.448-1-1v-5c0-.552.447-1 1-1s1 .448 1 1v5c0 .552-.447 1-1 1z"},"child":[]}]})(props);
};
function TiPrinter (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M17 5v-2c0-.552-.448-1-1-1h-9c-.552 0-1 .448-1 1v2c-1.654 0-3 1.346-3 3v10c0 1.654 1.346 3 3 3h11c1.654 0 3-1.346 3-3v-10c0-1.654-1.346-3-3-3zm-9-1h7v5h-7v-5zm-2 3v3c0 .552.448 1 1 1h9c.552 0 1-.448 1-1v-3c.551 0 1 .449 1 1v2.5c0 .827-.673 1.5-1.5 1.5h-10c-.827 0-1.5-.673-1.5-1.5v-2.5c0-.551.449-1 1-1zm11 12h-11c-.551 0-1-.449-1-1v-5.513c.419.318.935.513 1.5.513h10c.565 0 1.081-.195 1.5-.513v5.513c0 .551-.449 1-1 1zM13.5 7h-4c-.276 0-.5.224-.5.5s.224.5.5.5h4c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zM15 16h-7c-.276 0-.5.224-.5.5s.224.5.5.5h7c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zM13.5 5h-4c-.276 0-.5.224-.5.5s.224.5.5.5h4c.276 0 .5-.224.5-.5s-.224-.5-.5-.5z"},"child":[]}]}]})(props);
};
function TiPuzzleOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20 11.25v-1.75c0-1.93-1.57-3.5-3.5-3.5h-.759c-.141-1.982-1.953-3.5-4.241-3.5s-4.1 1.518-4.241 3.5h-.759c-1.93 0-3.5 1.57-3.5 3.5v1.75c0 1.012.514 1.847 1.295 2.246-.358.188-.668.469-.894.825-.262.414-.401.908-.401 1.429v2.75c0 1.93 1.57 3.5 3.5 3.5h2.75c.976 0 1.831-.497 2.242-1.299l.036.066c.435.772 1.266 1.233 2.222 1.233h2.75c1.93 0 3.5-1.57 3.5-3.5v-2.75c0-1.013-.515-1.849-1.297-2.247.776-.411 1.297-1.256 1.297-2.253zm-2 7.25c0 .825-.675 1.5-1.5 1.5h-2.75c-.356 0-.724-.216-.391-.766.246-.28.391-.619.391-.984 0-.967-1.007-1.75-2.25-1.75s-2.25.783-2.25 1.75c0 .3.095.576.255.823.507.673.136.927-.255.927h-2.75c-.825 0-1.5-.675-1.5-1.5v-2.75c0-.258.113-.521.384-.521.104 0 .229.039.382.13.28.246.62.391.984.391.966 0 1.75-1.008 1.75-2.25s-.784-2.25-1.75-2.25c-.3 0-.576.095-.822.255-.237.171-.422.243-.562.243-.26 0-.366-.245-.366-.498v-1.75c0-.825.675-1.5 1.5-1.5h2.75c.391 0 .762-.254.243-.927-.148-.247-.243-.523-.243-.823 0-.967 1.007-1.75 2.25-1.75s2.25.783 2.25 1.75c0 .365-.145.704-.391.984-.333.55.035.766.391.766h2.75c.825 0 1.5.675 1.5 1.5v1.75c0 .258-.113.521-.384.521-.104 0-.229-.039-.382-.13-.28-.246-.62-.391-.984-.391-.966 0-1.75 1.008-1.75 2.25s.784 2.25 1.75 2.25c.3 0 .576-.095.822-.255.237-.171.422-.244.562-.243.259 0 .365.245.365.498v2.75zm-13-5.806c.116.032.236.054.365.054.342 0 .683-.119 1.038-.364l.069-.041c.097-.063.188-.093.278-.093.354 0 .75.535.75 1.25s-.396 1.25-.75 1.25c-.108 0-.217-.048-.324-.142l-.143-.104c-.301-.183-.604-.275-.899-.275-.134 0-.261.023-.384.059v-1.594zm12.635 1.558c-.342 0-.683.119-1.038.364l-.069.041c-.097.063-.188.093-.277.093-.354 0-.75-.535-.75-1.25s.396-1.25.75-1.25c.108 0 .217.048.324.142l.143.104c.302.183.604.275.899.275.136 0 .262-.025.384-.062v1.597c-.117-.032-.237-.054-.366-.054zm-6.943 5.748c.101-.346.093-.816-.305-1.396l-.044-.074c-.062-.098-.094-.189-.094-.279 0-.354.534-.75 1.25-.75s1.25.396 1.25.75c0 .108-.048.217-.143.325l-.104.142c-.325.537-.311.979-.22 1.284h-1.59z"},"child":[]}]})(props);
};
function TiPuzzle (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M16.25 11.25c.364 0 .704.145.984.391.549.332.766-.034.766-.391v-1.75c0-.825-.675-1.5-1.5-1.5h-2.75c-.356 0-.724-.216-.391-.766.246-.28.391-.619.391-.984 0-.967-1.007-1.75-2.25-1.75s-2.25.783-2.25 1.75c0 .3.095.576.255.823.507.673.136.927-.255.927h-2.75c-.825 0-1.5.675-1.5 1.5v1.75c0 .391.254.762.928.244.246-.149.522-.244.822-.244.966 0 1.75 1.008 1.75 2.25s-.784 2.25-1.75 2.25c-.364 0-.704-.145-.984-.391-.549-.332-.766.034-.766.391v2.75c0 .825.675 1.5 1.5 1.5h2.75c.391 0 .762-.254.243-.927-.148-.247-.243-.523-.243-.823 0-.967 1.007-1.75 2.25-1.75s2.25.783 2.25 1.75c0 .365-.145.704-.391.984-.333.55.035.766.391.766h2.75c.825 0 1.5-.675 1.5-1.5v-2.75c0-.391-.254-.762-.928-.244-.246.149-.522.244-.822.244-.966 0-1.75-1.008-1.75-2.25s.784-2.25 1.75-2.25z"},"child":[]}]})(props);
};
function TiRadarOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11.997 4.5c-4.685 0-8.497 3.812-8.497 8.5s3.813 8.5 8.5 8.5c4.688 0 8.5-3.812 8.5-8.5s-3.812-8.5-8.503-8.5zm.003 15c-3.584 0-6.5-2.916-6.5-6.5s2.914-6.5 6.5-6.5c3.584 0 6.5 2.916 6.5 6.5s-2.916 6.5-6.5 6.5zM15.348 12.031l.152-.031h.879c-.383-1.677-1.699-2.995-3.379-3.378v.878c0 .551-.449 1-1 1-.497 0-.892-.371-.969-.846l-.031-.154v-.88c-1.678.382-2.997 1.702-3.38 3.38h.88l.153.031c.476.076.847.472.847.969s-.371.893-.846.969l-.154.031h-.878c.384 1.677 1.702 2.995 3.378 3.379v-.879l.031-.154c.077-.476.472-.846.969-.846s.893.371.969.848l.031.152v.879c1.677-.383 2.996-1.702 3.379-3.379h-.879l-.152-.031c-.477-.076-.848-.472-.848-.969s.371-.893.848-.969zm-.446 2.867c-.264.399-.604.74-1.004 1.002-.256-.81-1.004-1.401-1.897-1.401s-1.642.592-1.898 1.401c-.4-.262-.74-.603-1.003-1.002.81-.256 1.401-1.006 1.401-1.898 0-.895-.592-1.643-1.402-1.898.263-.399.603-.74 1.004-1.002.256.81 1.005 1.401 1.898 1.401.894 0 1.644-.593 1.899-1.403.399.264.74.604 1.002 1.004-.81.256-1.401 1.006-1.401 1.898-.001.893.591 1.643 1.401 1.898z"},"child":[]}]})(props);
};
function TiRadar (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 20c3.86 0 7-3.141 7-7s-3.14-7-7.003-7c-3.858 0-6.997 3.141-6.997 7s3.14 7 7 7zm-1-11.898v1.898c0 .553.448 1 1 1s1-.447 1-1v-1.898c1.956.398 3.5 1.942 3.899 3.898h-1.899c-.552 0-1 .447-1 1s.448 1 1 1h1.899c-.399 1.956-1.943 3.5-3.899 3.898v-1.898c0-.553-.448-1-1-1s-1 .447-1 1v1.898c-1.956-.398-3.5-1.942-3.899-3.898h1.899c.552 0 1-.447 1-1s-.448-1-1-1h-1.899c.399-1.956 1.942-3.5 3.899-3.898z"},"child":[]}]})(props);
};
function TiRefreshOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17.368 4.998c-.488 0-1.2.145-1.956.773-1.036-.489-2.189-.771-3.412-.771-4.418 0-8 3.582-8 8s3.582 8 8 8c4.312 0 8-3.316 8-8v-4.936c-.016-2.111-1.375-3.066-2.632-3.066zm.632 8.002h-5.128c-1.134 0-1.407-.561-.604-1.363l1.448-1.402c-.562-.371-1.22-.549-1.909-.549-.93 0-1.805.375-2.464 1.033-.657.656-1.02 1.537-1.02 2.467 0 .933.362 1.811 1.02 2.469.659.658 1.534 1.021 2.464 1.021s1.805-.36 2.465-1.019c.177-.18.334-.372.468-.579.222-.345.596-.533.979-.533.216 0 .433.06.625.185.54.346.697 1.063.351 1.604-.223.344-.484.668-.78.965-1.097 1.099-2.556 1.703-4.106 1.703-1.55 0-3.009-.604-4.104-1.701-1.097-1.096-1.701-2.555-1.701-4.106 0-1.551.604-3.012 1.702-4.104 1.096-1.098 2.554-1.7 4.104-1.7 1.311 0 2.551.436 3.566 1.229l1.154-1.158c.311-.312.602-.461.841-.461.377 0 .627.372.632 1.065v4.934zm-7.08.05c.162.392.63.95 1.952.95h1.299s-.21.504-.614.907-1.086.745-1.75.745-1.289-.246-1.758-.715c-.468-.47-.727-1.088-.727-1.752s.258-1.139.726-1.604c.472-.472 1.097-.581 1.759-.581l-.246.123c-.935.934-.803 1.536-.641 1.927z"},"child":[]}]})(props);
};
function TiRefresh (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12.872 13.191h5.128v-5.127c-.008-1.135-.671-1.408-1.473-.605l-1.154 1.158c-1.015-.795-2.257-1.23-3.566-1.23-1.55 0-3.009.604-4.104 1.701-1.099 1.092-1.703 2.553-1.703 4.103 0 1.553.604 3.012 1.701 4.107 1.097 1.097 2.555 1.702 4.106 1.702 1.55 0 3.009-.605 4.106-1.703.296-.297.558-.621.78-.965.347-.541.19-1.26-.35-1.605-.539-.346-1.258-.189-1.604.35-.133.207-.292.4-.468.58-.659.658-1.534 1.02-2.464 1.02-.93 0-1.805-.361-2.464-1.02-.657-.658-1.02-1.533-1.02-2.465 0-.93.362-1.805 1.02-2.461.659-.658 1.534-1.021 2.464-1.021.688 0 1.346.201 1.909.572l-1.448 1.451c-.803.802-.53 1.458.604 1.458z"},"child":[]}]})(props);
};
function TiRssOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M8 4.999c-1.657 0-3.011 1.344-3.011 3l.005 9c0 2.209 1.793 4 4.002 4l9.003.001c1.655 0 3-1.346 3-3.001.001-7.179-5.819-13-12.999-13zm1.001 14c-1.105.002-2.001-.894-2.001-1.999-.002-1.105.894-2.001 2.001-2.001 1.105-.002 2.001.894 1.999 2.001.002 1.105-.894 2.001-1.999 1.999zm4.499 0c-.829 0-1.5-.671-1.5-1.5 0-1.931-1.57-3.5-3.5-3.5-.829 0-1.5-.671-1.5-1.5s.671-1.5 1.5-1.5c3.584 0 6.5 2.916 6.5 6.5 0 .829-.671 1.5-1.5 1.5zm4 0c-.829 0-1.5-.671-1.5-1.5 0-4.136-3.364-7.5-7.5-7.5-.829 0-1.5-.671-1.5-1.5s.671-1.5 1.5-1.5c5.79 0 10.5 4.71 10.5 10.5 0 .829-.671 1.5-1.5 1.5z"},"child":[]}]})(props);
};
function TiRss (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M6.002 15.999c-1.107 0-2.004.897-2.002 2.001 0 1.104.896 2.001 2.002 1.999 1.103.002 2-.894 1.998-1.999.002-1.107-.895-2.003-1.998-2.001zM6 4c-1.104 0-2 .896-2 2s.896 2 2 2c5.514 0 10 4.486 10 10 0 1.104.896 2 2 2s2-.896 2-2c0-7.72-6.28-14-14-14zM6 10c-1.104 0-2 .896-2 2s.896 2 2 2c2.205 0 4 1.794 4 4 0 1.104.896 2 2 2s2-.896 2-2c0-4.411-3.589-8-8-8z"},"child":[]}]})(props);
};
function TiScissorsOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18.124 5.27l.25.013c.163.022.319.02.468.077.146.05.292.084.42.146.254.131.471.262.631.422.174.137.248.279.321.371l.108.146-.166-.074c-.105-.043-.258-.139-.442-.16-.129-.037-.282-.047-.442-.047l-.15.002-.318.061c-.103.01-.201.078-.295.113-.186.088-.35.203-.461.34l-.057.076c.451.477.732 1.115.732 1.824 0 1.471-1.195 2.668-2.666 2.668-.908 0-1.707-.457-2.189-1.15l-1.657 2.625c1.712 1.92 3.22 4.348 3.22 4.348 1.037 1.429-.789 3.947-.789 3.947l-3.552-6.522-3.551 6.522s-1.826-2.52-.789-3.947c0 0 1.507-2.428 3.22-4.348l-1.656-2.625c-.482.693-1.283 1.15-2.188 1.15-1.472 0-2.667-1.197-2.667-2.668 0-1.469 1.195-2.666 2.667-2.666.925 0 1.739.475 2.218 1.193.955 1.428 1.739 3.156 2.748 4.334 1.008-1.178 1.792-2.906 2.746-4.336.48-.717 1.295-1.191 2.221-1.191l.186.018.326-.188.383-.211c.132-.072.297-.107.449-.158.224-.07.475-.105.721-.105m-2.069 4.376c.273 0 .547-.104.756-.312.416-.416.416-1.092 0-1.508-.209-.208-.481-.312-.754-.312s-.545.104-.754.312l-.24.377c-.144.381-.066.826.24 1.131.207.209.479.312.752.312m-9.931 0c.272 0 .545-.104.752-.312.308-.305.382-.75.237-1.131l-.237-.377c-.207-.208-.48-.312-.753-.312s-.547.104-.755.312c-.417.416-.417 1.092 0 1.508.208.208.482.312.756.312m4.965 3.762c.218 0 .396-.178.396-.395 0-.22-.176-.396-.396-.396-.219 0-.394.176-.394.396 0 .217.176.395.394.395m7.035-10.138c-.448 0-.901.066-1.312.191l-.117.036c-.168.051-.426.126-.707.28l-.271.148c-1.388.102-2.656.815-3.467 1.961l-.079.108c-.39.584-.741 1.192-1.082 1.784-.339-.592-.69-1.199-1.081-1.784l-.078-.107c-.877-1.239-2.289-1.974-3.807-1.974-2.574 0-4.667 2.093-4.667 4.666s2.094 4.668 4.667 4.668c.309 0 .611-.03.908-.09-1.016 1.338-1.777 2.53-1.948 2.803-1.714 2.467.392 5.619.835 6.229.377.521.98.826 1.619.826l.129-.004c.686-.044 1.3-.437 1.628-1.039l1.795-3.298 1.795 3.298c.328.604.943.995 1.628 1.039l.129.004c.639 0 1.241-.306 1.619-.826.443-.61 2.549-3.764.834-6.229-.17-.271-.932-1.465-1.947-2.803.295.06.601.09.908.09 2.573 0 4.668-2.095 4.668-4.668l-.004-.179c.467-.096.898-.356 1.2-.758.547-.729.536-1.733-.032-2.445l-.049-.067-.039-.053c-.102-.146-.279-.394-.572-.644-.35-.326-.738-.547-1.045-.705-.275-.136-.488-.201-.628-.244l-.062-.02c-.333-.117-.622-.146-.784-.16l-.054-.006-.086-.01-.444-.018z"},"child":[]}]})(props);
};
function TiScissors (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20.625 5.515c-1-1.522-2.915-1.67-4.397-.824l-.186.107-.076-.003c-1.042 0-2.01.511-2.604 1.369l-.034.045c-.43.645-.723 1.236-1.005 1.809-.255.516-.5 1.01-.824 1.483-.325-.475-.57-.97-.826-1.486-.283-.571-.575-1.162-1.004-1.806l-.033-.044c-.593-.859-1.562-1.37-2.603-1.37-1.747 0-3.167 1.42-3.167 3.166 0 1.747 1.421 3.168 3.167 3.168.775 0 1.515-.287 2.087-.791l.652 1.198c-1.621 1.876-2.979 4.054-3.019 4.121-1.236 1.702.705 4.42.789 4.534.094.131.245.207.405.207.204-.012.357-.11.439-.261l3.112-5.717 3.113 5.717c.082.15.235.249.407.26.174.019.336-.066.437-.206.083-.114 2.024-2.832.809-4.504l-.323-.521c-1.076-1.736-1.187-1.916-2.715-3.634l.651-1.195c.572.504 1.313.791 2.088.791 1.746 0 3.167-1.421 3.167-3.168 0-.634-.191-1.246-.547-1.768.472-.27.997-.123 1.456.095.466.191.897-.377.584-.772zm-13.625 3.485c-.552 0-1-.447-1-1s.448-1 1-1 1 .447 1 1-.448 1-1 1zm4.5 3.395c-.277 0-.5-.225-.5-.5 0-.277.223-.5.5-.5s.5.223.5.5c0 .275-.223.5-.5.5zm4.5-3.395c-.552 0-1-.447-1-1s.448-1 1-1 1 .447 1 1-.448 1-1 1z"},"child":[]}]})(props);
};
function TiShoppingBag (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17 4h-10c-1.654 0-3 1.346-3 3v11c0 1.654 1.346 3 3 3h10c1.654 0 3-1.346 3-3v-11c0-1.654-1.346-3-3-3zm1 14c0 .551-.448 1-1 1h-10c-.552 0-1-.449-1-1v-7.28c.296.174.635.28 1 .28h1.5c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5h1.5c.365 0 .704-.106 1-.279v7.279zm-8.5-7h5c0 1.378-1.121 2.5-2.5 2.5s-2.5-1.122-2.5-2.5zm8.5-2c0 .551-.448 1-1 1h-10c-.552 0-1-.449-1-1v-2c0-.551.448-1 1-1h10c.552 0 1 .449 1 1v2z"},"child":[]}]})(props);
};
function TiShoppingCart (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M20.756 5.345c-.191-.219-.466-.345-.756-.345h-13.819l-.195-1.164c-.08-.482-.497-.836-.986-.836h-2.25c-.553 0-1 .447-1 1s.447 1 1 1h1.403l1.86 11.164.045.124.054.151.12.179.095.112.193.13.112.065c.116.047.238.075.367.075h11.001c.553 0 1-.447 1-1s-.447-1-1-1h-10.153l-.166-1h11.319c.498 0 .92-.366.99-.858l1-7c.041-.288-.045-.579-.234-.797zm-1.909 1.655l-.285 2h-3.562v-2h3.847zm-4.847 0v2h-3v-2h3zm0 3v2h-3v-2h3zm-4-3v2h-3l-.148.03-.338-2.03h3.486zm-2.986 3h2.986v2h-2.653l-.333-2zm7.986 2v-2h3.418l-.285 2h-3.133z"},"child":[]},{"tag":"circle","attr":{"cx":"8.5","cy":"19.5","r":"1.5"},"child":[]},{"tag":"circle","attr":{"cx":"17.5","cy":"19.5","r":"1.5"},"child":[]}]}]})(props);
};
function TiSocialAtCircular (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M11.844 7.5c-2.481 0-4.438 2.019-4.438 4.5s2.05 4.5 4.531 4.5c.908 0 1.799-.27 2.547-.778.228-.155.295-.466.139-.694-.155-.229-.462-.287-.691-.132-.58.396-1.258.604-1.965.604-1.93 0-3.499-1.57-3.499-3.5s1.446-3.5 3.376-3.5 3.375 1.57 3.375 3.5v.25c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-1.75c0-.276-.099-.5-.375-.5-.205 0-.318.124-.396.301-.303-.188-.628-.301-1.01-.301-1.104 0-1.984.896-1.984 2s.904 2 2.008 2c.562 0 1.073-.235 1.438-.609.319.369.664.609 1.192.609.965 0 1.627-.785 1.627-1.75v-.25c0-2.481-1.894-4.5-4.375-4.5zm.125 5.5c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1zM12 21c-4.963 0-9-4.037-9-9s4.037-9 9-9 9 4.037 9 9-4.037 9-9 9zm0-16c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7-3.141-7-7-7z"},"child":[]}]}]})(props);
};
function TiSocialDribbbleCircular (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M12 21c-4.962 0-9-4.037-9-9s4.038-9 9-9 9 4.037 9 9-4.038 9-9 9zm0-16c-3.86 0-7 3.141-7 7s3.14 7 7 7 7-3.141 7-7-3.14-7-7-7zM12 6.5c-3.033 0-5.5 2.468-5.5 5.5s2.467 5.5 5.5 5.5 5.5-2.468 5.5-5.5-2.467-5.5-5.5-5.5zm4.49 5.402c-1.048-.186-2.1-.18-3.103.042-.127-.326-.267-.647-.417-.965.875-.524 1.652-1.221 2.284-2.07.746.785 1.211 1.834 1.236 2.993zm-2-3.646c-.546.748-1.215 1.367-1.975 1.832-.479-.856-1.046-1.663-1.692-2.412.378-.103.767-.176 1.177-.176.921 0 1.776.28 2.49.756zm-4.641-.184c.687.758 1.278 1.59 1.776 2.473-1.238.531-2.622.691-3.998.437.293-1.259 1.118-2.302 2.222-2.91zm-2.349 3.928c.468.064.936.121 1.399.121 1.106 0 2.187-.244 3.185-.683.123.261.238.524.344.793-1.469.526-2.769 1.489-3.728 2.805-.738-.802-1.2-1.862-1.2-3.036zm1.948 3.699c.842-1.189 2.004-2.057 3.318-2.527.314 1.001.518 2.039.596 3.095-.433.138-.884.233-1.362.233-.948 0-1.826-.298-2.552-.801zm4.872.137c-.099-1-.296-1.983-.593-2.937.87-.176 1.778-.172 2.683.001-.256 1.247-1.035 2.296-2.09 2.936z"},"child":[]}]}]})(props);
};
function TiSocialDribbble (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 3c-4.962 0-9 4.037-9 9s4.038 9 9 9 9-4.037 9-9-4.038-9-9-9zm6.962 8.275c-1.765-.289-3.534-.187-5.205.262-.18-.436-.383-.859-.59-1.283 1.422-.81 2.685-1.912 3.713-3.262 1.143 1.113 1.909 2.611 2.082 4.283zm-2.832-4.914c-.939 1.243-2.1 2.259-3.401 3.009-.782-1.445-1.729-2.8-2.807-4.056.657-.204 1.355-.314 2.078-.314 1.545 0 2.971.51 4.13 1.361zm-7.183-.65c1.119 1.265 2.093 2.645 2.892 4.117-2.061.957-4.396 1.294-6.717.899.408-2.212 1.86-4.058 3.825-5.016zm-3.947 6.289l.015-.294c.676.111 1.353.188 2.024.188 1.827 0 3.607-.426 5.237-1.187.182.373.365.744.525 1.127-2.429.866-4.583 2.486-6.101 4.726-1.056-1.227-1.7-2.818-1.7-4.56zm2.393 5.257c1.43-2.129 3.465-3.673 5.764-4.487.683 1.854 1.123 3.795 1.292 5.779-.763.287-1.587.451-2.449.451-1.765 0-3.375-.661-4.607-1.743zm8.014.852c-.196-1.932-.631-3.822-1.293-5.632 1.564-.404 3.222-.486 4.871-.19-.102 2.502-1.516 4.668-3.578 5.822z"},"child":[]}]})(props);
};
function TiSocialFacebookCircular (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18.354 5.624c-1.75-1.741-3.888-2.624-6.354-2.624-2.489 0-4.633.884-6.373 2.625-1.743 1.741-2.627 3.887-2.627 6.375 0 2.465.883 4.603 2.624 6.354 1.741 1.756 3.886 2.646 6.376 2.646 2.467 0 4.605-.89 6.356-2.643 1.755-1.753 2.644-3.892 2.644-6.357 0-2.488-.89-4.634-2.646-6.376zm-1.412 11.319c-1.137 1.139-2.436 1.788-3.942 1.985v-4.928h2v-2h-2v-1.4c0-.331.269-.6.601-.6h1.399v-2h-1.397c-.742 0-1.361.273-1.857.822-.496.547-.746 1.215-.746 2.008v1.17h-2v2h2v4.93c-1.522-.195-2.826-.845-3.957-1.984-1.375-1.384-2.043-3.002-2.043-4.946 0-1.966.667-3.588 2.042-4.96 1.37-1.373 2.992-2.04 4.958-2.04 1.945 0 3.562.668 4.945 2.043 1.383 1.372 2.055 2.994 2.055 4.957 0 1.941-.673 3.559-2.058 4.943z"},"child":[]}]})(props);
};
function TiSocialFacebook (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M13 10h3v3h-3v7h-3v-7h-3v-3h3v-1.255c0-1.189.374-2.691 1.118-3.512.744-.823 1.673-1.233 2.786-1.233h2.096v3h-2.1c-.498 0-.9.402-.9.899v2.101z"},"child":[]}]})(props);
};
function TiSocialFlickrCircular (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M12 21c-2.489 0-4.635-.89-6.376-2.646-1.741-1.751-2.624-3.889-2.624-6.354 0-2.488.884-4.634 2.627-6.375 1.74-1.741 3.885-2.625 6.373-2.625 2.466 0 4.604.883 6.354 2.624 1.755 1.742 2.646 3.888 2.646 6.376 0 2.465-.89 4.604-2.644 6.357-1.751 1.753-3.889 2.643-6.356 2.643zm0-16c-1.966 0-3.588.667-4.958 2.04-1.374 1.372-2.042 2.994-2.042 4.96 0 1.944.668 3.562 2.043 4.945 1.372 1.383 2.993 2.055 4.957 2.055 1.943 0 3.56-.673 4.941-2.057 1.386-1.384 2.059-3.002 2.059-4.943 0-1.963-.672-3.585-2.055-4.957-1.383-1.375-3-2.043-4.945-2.043zM9 14.5c-1.379 0-2.5-1.121-2.5-2.5s1.121-2.5 2.5-2.5 2.5 1.121 2.5 2.5-1.121 2.5-2.5 2.5zm0-4c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zM15 14.5c-1.379 0-2.5-1.121-2.5-2.5s1.121-2.5 2.5-2.5 2.5 1.121 2.5 2.5-1.121 2.5-2.5 2.5z"},"child":[]}]}]})(props);
};
function TiSocialFlickr (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M7.5 16c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2zM16.5 8c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4z"},"child":[]}]})(props);
};
function TiSocialGithubCircular (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M12 21c-4.963 0-9-4.038-9-9s4.037-9 9-9 9 4.038 9 9-4.037 9-9 9zm0-16c-3.859 0-7 3.14-7 7s3.141 7 7 7 7-3.14 7-7-3.141-7-7-7zM13.565 12.626c.171 0 .316.084.441.255.124.169.187.378.187.625 0 .248-.062.457-.187.626-.125.169-.271.254-.441.254-.181 0-.337-.084-.461-.254-.124-.169-.187-.378-.187-.626s.062-.456.187-.625c.125-.171.281-.255.461-.255m2.21-2.289c.482.522.725 1.155.725 1.898 0 .482-.057.915-.166 1.301-.111.384-.252.698-.42.939-.171.242-.378.454-.627.635-.249.184-.478.316-.685.401-.208.085-.446.15-.716.196-.266.047-.467.072-.606.079l-.44.009-.352.01-.488.011-.488-.011-.352-.01-.44-.009c-.14-.007-.341-.032-.606-.079-.271-.045-.508-.11-.716-.196-.207-.084-.436-.217-.684-.401-.25-.182-.457-.394-.628-.635-.168-.241-.309-.555-.42-.939-.109-.386-.166-.819-.166-1.301 0-.743.242-1.376.725-1.898-.053-.026-.056-.286-.008-.782.043-.496.148-.953.319-1.37.602.064 1.343.404 2.23 1.017.3-.078.71-.118 1.233-.118.549 0 .959.04 1.234.118.404-.273.791-.496 1.16-.666.374-.168.644-.267.814-.293l.254-.058c.172.417.277.875.32 1.37.05.496.047.756-.006.782m-3.754 5.027c1.083 0 1.899-.129 2.454-.39.553-.26.833-.796.833-1.605 0-.469-.176-.861-.529-1.174-.181-.17-.394-.273-.638-.313-.238-.039-.607-.039-1.104 0-.495.04-.834.058-1.016.058-.248 0-.517-.013-.851-.039l-.783-.049c-.191-.006-.395.018-.616.069-.223.053-.404.143-.55.273-.336.3-.507.691-.507 1.174 0 .809.274 1.345.821 1.605.547.261 1.361.39 2.444.39m-1.524-2.737c.17 0 .316.084.44.255.124.169.187.378.187.625 0 .248-.062.457-.187.626-.124.169-.271.254-.44.254-.182 0-.337-.084-.462-.254-.124-.169-.187-.378-.187-.626s.062-.456.187-.625c.125-.171.28-.255.462-.255"},"child":[]}]}]})(props);
};
function TiSocialGithub (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M14.435 12.973c.269 0 .492.133.686.396.192.265.294.588.294.975 0 .385-.102.711-.294.973-.193.265-.417.396-.686.396-.278 0-.522-.131-.715-.396-.192-.262-.294-.588-.294-.973 0-.387.102-.71.294-.975.192-.264.436-.396.715-.396m3.44-3.559c.746.811 1.125 1.795 1.125 2.953 0 .748-.086 1.423-.259 2.023-.175.597-.394 1.084-.654 1.459-.264.376-.588.705-.974.989-.386.286-.741.492-1.065.623-.325.132-.695.233-1.111.306-.417.071-.726.111-.943.123l-.685.014-.547.015c-.301.013-.56.016-.762.016s-.461-.003-.762-.016l-.547-.015-.685-.014c-.218-.012-.526-.052-.943-.123-.423-.072-.786-.174-1.111-.306-.324-.131-.68-.337-1.064-.623-.387-.284-.711-.613-.975-.989-.261-.375-.479-.862-.654-1.459-.173-.6-.259-1.275-.259-2.023 0-1.158.379-2.143 1.125-2.953-.082-.041-.085-.447-.008-1.217.063-.771.227-1.482.495-2.132.934.099 2.09.629 3.471 1.581.466-.119 1.101-.183 1.917-.183.852 0 1.491.064 1.918.184.629-.425 1.23-.771 1.805-1.034.584-.261 1.005-.416 1.269-.457l.396-.09c.27.649.434 1.36.496 2.132.076.769.073 1.175-.009 1.216m-5.845 7.82c1.688 0 2.954-.202 3.821-.607.855-.404 1.292-1.238 1.292-2.496 0-.73-.273-1.34-.822-1.828-.278-.263-.613-.425-.989-.486-.375-.061-.949-.061-1.72 0-.769.062-1.298.09-1.582.09-.385 0-.8-.018-1.319-.059-.52-.04-.928-.065-1.223-.078-.294-.009-.609.027-.958.108-.345.082-.629.224-.853.425-.521.469-.79 1.077-.79 1.828 0 1.258.426 2.092 1.28 2.496.85.405 2.113.607 3.802.607h.061m-2.434-4.261c.268 0 .492.133.685.396.192.265.294.588.294.975 0 .385-.102.711-.294.973-.192.265-.417.396-.685.396-.279 0-.522-.131-.716-.396-.192-.262-.294-.588-.294-.973 0-.387.102-.71.294-.975.193-.264.436-.396.716-.396"},"child":[]}]})(props);
};
function TiSocialGooglePlusCircular (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12.8 13.1l-.4-.3c-.1-.1-.3-.2-.3-.5l.3-.6c.5-.4 1-.8 1-1.7s-.6-1.4-.8-1.6h.7l.7-.4h-2.4c-.6 0-1.4.1-2.1.6-.5.4-.8 1-.8 1.6 0 .9.7 1.9 2 1.9h.4c-.1.1-.1.2-.1.4 0 .4.2.6.4.8-.5 0-1.5.1-2.3.5-.7.4-.9 1-.9 1.4 0 .9.8 1.7 2.5 1.7 2 0 3.1-1.1 3.1-2.2 0-.7-.5-1.1-1-1.6zm-1.6-1.3c-1 0-1.5-1.3-1.5-2.1.1-.4.1-.7.3-.9s.5-.4.8-.4c1 0 1.5 1.3 1.5 2.2 0 .2 0 .6-.3.9-.1.1-.5.3-.8.3zm.1 4.7c-1.3 0-2.1-.6-2.1-1.4 0-.8.8-1.1 1-1.2.5-.2 1.1-.2 1.2-.2h.3c.9.6 1.3 1 1.3 1.6 0 .7-.6 1.2-1.7 1.2zM15 12h-1v-1h1v-1h1v1h1v1h-1v1h-1zM12 21c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9zm0-16c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7z"},"child":[]}]})(props);
};
function TiSocialGooglePlus (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12.9 13.5l-.7-.5c-.2-.2-.5-.4-.5-.8s.3-.7.6-1c.8-.6 1.7-1.3 1.7-2.8 0-1.5-.9-2.3-1.4-2.7h1.2l1.2-.7h-4.1c-1 0-2.4.2-3.5 1.1-.8.7-1.2 1.7-1.2 2.6 0 1.5 1.2 3.1 3.3 3.1h.6c-.1.2-.2.4-.2.7 0 .6.3 1 .6 1.3-.9.1-2.5.2-3.8.9-1.2.7-1.5 1.7-1.5 2.4 0 1.5 1.4 2.8 4.2 2.8 3.4 0 5.2-1.9 5.2-3.7 0-1.3-.8-1.9-1.7-2.7zm-2.5-2.2c-1.7 0-2.5-2.2-2.5-3.5 0-.5.1-1 .4-1.5.3-.4.9-.7 1.4-.7 1.6 0 2.5 2.2 2.5 3.6 0 .4 0 1-.5 1.4-.3.4-.9.7-1.3.7zm0 7.9c-2.1 0-3.5-1-3.5-2.4s1.3-1.9 1.7-2c.8-.3 1.9-.3 2.1-.3h.5c1.5 1.1 2.1 1.6 2.1 2.6 0 1.2-1 2.1-2.9 2.1zM17 12h-2v-1h2v-1.9l1-.1v2h2v1h-2v2h-1z"},"child":[]}]})(props);
};
function TiSocialInstagramCircular (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 3c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 7c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm2.8-2c0-.7.6-1.2 1.2-1.2s1.2.6 1.2 1.2-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2zm-2.8 11c-3.9 0-7-3.1-7-7h3c0 2.2 1.8 4 4 4s4-1.8 4-4h3c0 3.9-3.1 7-7 7z"},"child":[]}]})(props);
};
function TiSocialInstagram (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18 3h-12c-1.7 0-3 1.3-3 3v12c0 1.7 1.3 3 3 3h12c1.7 0 3-1.3 3-3v-12c0-1.7-1.3-3-3-3zm-6 6c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zm3.8-2c0-.7.6-1.2 1.2-1.2s1.2.6 1.2 1.2-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2zm2.2 12h-12c-.6 0-1-.4-1-1v-6h2c0 2.8 2.2 5 5 5s5-2.2 5-5h2v6c0 .6-.4 1-1 1z"},"child":[]}]})(props);
};
function TiSocialLastFmCircular (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M12 21c-2.489 0-4.635-.89-6.376-2.646-1.741-1.751-2.624-3.89-2.624-6.354 0-2.489.884-4.633 2.627-6.375 1.74-1.741 3.885-2.625 6.373-2.625 2.466 0 4.604.883 6.354 2.624 1.755 1.742 2.646 3.887 2.646 6.376 0 2.464-.89 4.604-2.644 6.357-1.751 1.754-3.889 2.643-6.356 2.643zm0-16c-1.966 0-3.588.667-4.958 2.04-1.374 1.372-2.042 2.994-2.042 4.96 0 1.944.668 3.562 2.043 4.945 1.372 1.383 2.993 2.055 4.957 2.055 1.943 0 3.56-.673 4.941-2.056 1.386-1.385 2.059-3.002 2.059-4.944 0-1.963-.672-3.585-2.055-4.957-1.383-1.375-3-2.043-4.945-2.043zM14.199 14.333c1.335 0 2-.444 2-1.333 0-.733-.422-1.199-1.267-1.4l-.632-.133c-.354-.089-.534-.277-.534-.566 0-.334.224-.5.666-.5.49 0 .746.188.767.565l.967-.1c-.063-.822-.622-1.233-1.666-1.233-1.134 0-1.699.467-1.699 1.401 0 .665.365 1.088 1.099 1.267l.668.133c.443.11.666.312.666.601 0 .354-.345.532-1.034.532-.844 0-1.398-.411-1.666-1.233l-.334-.967c-.199-.644-.449-1.095-.75-1.35-.3-.255-.771-.384-1.416-.384-.601 0-1.128.223-1.584.667-.456.445-.683 1.033-.683 1.767 0 .688.216 1.239.649 1.649.435.413.95.617 1.55.617.602 0 1.078-.144 1.434-.433l-.299-.834c-.311.312-.679.468-1.101.468-.354 0-.662-.14-.916-.417-.257-.277-.385-.64-.385-1.084 0-.556.139-.961.417-1.217s.594-.383.951-.383c.379 0 .648.1.816.299.167.201.315.512.45.935l.3.967c.356 1.133 1.212 1.699 2.566 1.699"},"child":[]}]}]})(props);
};
function TiSocialLastFm (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M15.942 16.182c2.374 0 3.558-.791 3.558-2.373 0-1.304-.749-2.132-2.254-2.49l-1.119-.235c-.637-.159-.951-.495-.951-1.009 0-.594.396-.889 1.186-.889.869 0 1.323.334 1.363 1.006l1.717-.178c-.114-1.463-1.109-2.195-2.962-2.195-2.019 0-3.026.832-3.026 2.495 0 1.182.654 1.935 1.958 2.251l1.188.236c.79.196 1.186.555 1.186 1.068 0 .631-.614.949-1.842.949-1.498 0-2.489-.732-2.962-2.195l-.597-1.721c-.354-1.145-.796-1.947-1.334-2.401-.53-.45-1.367-.683-2.519-.683-1.069 0-2.007.396-2.815 1.188-.811.791-1.217 1.838-1.217 3.142 0 1.223.383 2.203 1.156 2.935.774.733 1.688 1.099 2.756 1.099 1.069 0 1.918-.256 2.55-.77l-.53-1.485c-.554.556-1.211.833-1.96.833-.63 0-1.175-.248-1.628-.744-.455-.492-.686-1.137-.686-1.927 0-.989.247-1.708.743-2.163.497-.455 1.056-.681 1.689-.681.674 0 1.155.177 1.457.53.296.357.56.912.797 1.662l.537 1.721c.632 2.014 2.154 3.024 4.561 3.024"},"child":[]}]})(props);
};
function TiSocialLinkedinCircular (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M10.033 15.3h-1.6v-5.199h1.6v5.199zm-.8-5.866c-.577 0-.866-.267-.866-.8 0-.223.082-.412.25-.567.166-.155.371-.233.616-.233.577 0 .866.268.866.801s-.288.799-.866.799zm6.734 5.866h-1.633v-2.9c0-.755-.268-1.133-.801-1.133-.422 0-.699.211-.834.633-.043.067-.066.201-.066.4v3h-1.633v-3.533c0-.8-.012-1.355-.033-1.666h1.4l.1.699c.367-.556.9-.833 1.633-.833.557 0 1.006.194 1.35.583.346.389.518.95.518 1.684v3.066zM12 21c-4.963 0-9-4.037-9-9s4.037-9 9-9 9 4.037 9 9-4.037 9-9 9zm0-16c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7-3.141-7-7-7z"},"child":[]}]}]})(props);
};
function TiSocialLinkedin (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M8 19h-3v-10h3v10zm11 0h-3v-5.342c0-1.392-.496-2.085-1.479-2.085-.779 0-1.273.388-1.521 1.165v6.262h-3s.04-9 0-10h2.368l.183 2h.062c.615-1 1.598-1.678 2.946-1.678 1.025 0 1.854.285 2.487 1.001.637.717.954 1.679.954 3.03v5.647z"},"child":[]},{"tag":"ellipse","attr":{"cx":"6.5","cy":"6.5","rx":"1.55","ry":"1.5"},"child":[]}]})(props);
};
function TiSocialPinterestCircular (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M12 21c-4.963 0-9-4.037-9-9s4.037-9 9-9 9 4.037 9 9-4.037 9-9 9zm0-16c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7-3.141-7-7-7zM12.335 8c-2.468 0-3.712 1.77-3.712 3.244 0 .895.338 1.688 1.063 1.984.119.049.226.002.261-.129l.105-.418c.035-.129.021-.175-.074-.289-.209-.246-.344-.566-.344-1.019 0-1.312.982-2.487 2.558-2.487 1.396 0 2.161.853 2.161 1.99 0 1.498-.662 2.762-1.646 2.762-.543 0-.95-.449-.82-1.001.156-.658.459-1.368.459-1.843 0-.426-.229-.779-.7-.779-.556 0-1.002.574-1.002 1.344 0 .49.166.822.166.822l-.669 2.83c-.198.84-.029 1.87-.015 1.974.008.062.087.077.123.03.052-.067.713-.885.938-1.7.064-.23.366-1.427.366-1.427.18.344.707.646 1.268.646 1.67 0 2.803-1.521 2.803-3.56-.001-1.538-1.306-2.974-3.289-2.974z"},"child":[]}]}]})(props);
};
function TiSocialPinterest (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12.486 4.771c-4.23 0-6.363 3.033-6.363 5.562 0 1.533.581 2.894 1.823 3.401.205.084.387.004.446-.221l.182-.717c.061-.221.037-.3-.127-.495-.359-.422-.588-.972-.588-1.747 0-2.25 1.683-4.264 4.384-4.264 2.392 0 3.706 1.463 3.706 3.412 0 2.568-1.137 4.734-2.824 4.734-.932 0-1.629-.77-1.405-1.715.268-1.13.786-2.347.786-3.16 0-.729-.392-1.336-1.2-1.336-.952 0-1.718.984-1.718 2.304 0 .841.286 1.409.286 1.409l-1.146 4.852c-.34 1.44-.051 3.206-.025 3.385.013.104.149.131.21.051.088-.115 1.223-1.517 1.607-2.915.111-.396.627-2.445.627-2.445.311.589 1.213 1.108 2.175 1.108 2.863 0 4.804-2.608 4.804-6.103-.003-2.64-2.24-5.1-5.64-5.1z"},"child":[]}]})(props);
};
function TiSocialSkypeOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M8.865 5c.751 0 1.44.202 2.069.609.324-.08.711-.121 1.157-.121 1.846 0 3.418.67 4.717 2.008 1.299 1.339 1.948 2.962 1.948 4.87 0 .466-.051.953-.152 1.461.264.589.396 1.187.396 1.794 0 1.097-.38 2.036-1.142 2.815-.761.781-1.668 1.173-2.725 1.173-.629 0-1.237-.162-1.825-.488-.527.081-.933.122-1.217.122-1.847 0-3.425-.67-4.733-2.009s-1.963-2.962-1.963-4.868c0-.447.051-.902.152-1.37-.364-.609-.547-1.288-.547-2.039 0-1.096.376-2.029 1.126-2.799.75-.772 1.664-1.158 2.739-1.158m3.135 10.53c-.406 0-.729-.061-.975-.183-.263-.142-.445-.284-.547-.425-.243-.447-.376-.681-.396-.7-.081-.243-.202-.447-.364-.609-.203-.14-.406-.213-.61-.213-.284 0-.517.091-.7.274-.183.182-.274.396-.274.639 0 .386.144.801.428 1.248.263.405.629.741 1.096 1.003.648.346 1.45.519 2.404.519.79 0 1.49-.122 2.1-.365.609-.284 1.055-.639 1.339-1.065.304-.467.456-.975.456-1.522 0-.445-.08-.852-.242-1.217-.163-.304-.416-.578-.762-.82-.365-.225-.75-.407-1.156-.548-.689-.204-1.178-.336-1.461-.396-.143-.021-.32-.055-.533-.107l-.41-.106c-.243-.08-.416-.152-.518-.212-.163-.081-.294-.193-.396-.336-.103-.1-.152-.233-.152-.396 0-.243.142-.455.426-.639.265-.203.649-.305 1.156-.305.508 0 .884.092 1.127.273.263.225.456.478.577.762.163.264.295.446.396.547.162.123.355.184.578.184.264 0 .498-.102.699-.306.184-.181.275-.404.275-.669 0-.202-.072-.467-.214-.791-.162-.243-.376-.486-.639-.729-.284-.224-.659-.417-1.127-.579-.485-.143-1.004-.213-1.552-.213-.73 0-1.38.11-1.948.335-.566.2-1.003.505-1.307.911-.305.406-.457.872-.457 1.4 0 .527.143.984.426 1.37.346.405.73.688 1.156.851.488.224 1.076.407 1.766.548.121.021.27.056.441.106l.457.123.319.075c.284.103.517.243.699.427.183.141.274.354.274.639 0 .346-.162.629-.486.853-.364.243-.821.364-1.369.364m-3.135-12.53c-1.609 0-3.053.61-4.174 1.765-1.105 1.134-1.691 2.585-1.691 4.192 0 .832.156 1.619.466 2.348-.047.357-.07.713-.07 1.062 0 2.438.853 4.547 2.532 6.267 1.693 1.732 3.768 2.61 6.164 2.61.254 0 .547-.02.896-.06.69.283 1.409.426 2.146.426 1.588 0 3.025-.614 4.157-1.777 1.117-1.143 1.709-2.6 1.709-4.211 0-.677-.111-1.349-.332-2.004.059-.427.089-.846.089-1.251 0-2.437-.846-4.544-2.513-6.263-1.685-1.735-3.755-2.615-6.152-2.615-.279 0-.546.013-.801.038-.756-.35-1.568-.527-2.426-.527z"},"child":[]}]})(props);
};
function TiSocialSkype (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20.668 13.312c.059-.427.089-.846.089-1.251 0-2.437-.846-4.544-2.513-6.263-1.685-1.735-3.755-2.615-6.152-2.615-.279 0-.546.013-.801.038-.756-.35-1.568-.526-2.426-.526-1.609 0-3.053.61-4.174 1.765-1.105 1.135-1.691 2.585-1.691 4.192 0 .832.156 1.619.466 2.348-.047.357-.07.713-.07 1.062 0 2.438.853 4.547 2.532 6.267 1.693 1.732 3.768 2.61 6.164 2.61.254 0 .547-.02.896-.06.69.283 1.409.426 2.146.426 1.588 0 3.025-.614 4.157-1.777 1.117-1.143 1.709-2.6 1.709-4.211 0-.677-.111-1.349-.332-2.005zm-5.168 2.036c-.284.427-.729.781-1.339 1.065-.609.243-1.31.365-2.1.365-.954 0-1.756-.173-2.404-.519-.467-.262-.833-.598-1.096-1.003-.284-.447-.428-.862-.428-1.248 0-.243.092-.457.274-.639.184-.184.416-.274.7-.274.203 0 .406.072.609.213.162.162.283.366.364.609.021.02.153.253.396.7.102.141.284.283.547.425.245.122.568.183.975.183.548 0 1.005-.121 1.37-.364.324-.224.486-.507.486-.853 0-.284-.092-.498-.274-.639-.183-.184-.415-.324-.699-.427l-.319-.075-.457-.123c-.172-.051-.32-.086-.441-.106-.689-.141-1.277-.324-1.766-.548-.426-.162-.811-.445-1.156-.851-.283-.386-.426-.843-.426-1.37 0-.528.152-.994.457-1.4.304-.406.74-.711 1.308-.913.569-.224 1.219-.334 1.949-.334.548 0 1.066.07 1.552.213.468.162.843.355 1.127.579.263.243.477.486.639.729.142.324.214.589.214.791 0 .265-.092.488-.275.669-.201.204-.436.306-.699.306-.223 0-.416-.061-.578-.184-.102-.101-.233-.283-.396-.547-.121-.284-.314-.537-.577-.762-.243-.182-.619-.273-1.127-.273-.507 0-.892.102-1.156.305-.284.184-.426.396-.426.639 0 .162.05.296.152.396.102.143.232.255.396.336.102.06.274.132.518.212l.41.106c.213.053.391.087.533.107.283.061.771.192 1.461.396.406.141.791.323 1.156.548.346.242.599.517.762.82.162.365.242.771.242 1.217-.002.548-.154 1.056-.458 1.523z"},"child":[]}]})(props);
};
function TiSocialTumblerCircular (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M14.377 15.59v-1.234c-.399.268-.788.4-1.166.4-.178 0-.377-.057-.6-.166-.134-.09-.211-.189-.234-.301-.066-.133-.1-.422-.1-.867v-1.966h1.834v-1.233h-1.834v-1.967h-1.066c-.089.467-.178.8-.267 1-.11.244-.288.467-.533.666-.245.201-.5.345-.767.434v1.101h.833v2.7c0 .311.044.576.134.799.066.178.199.355.4.533.154.156.377.289.666.4.355.09.666.133.934.133.311 0 .6-.033.866-.1.312-.067.612-.178.9-.332"},"child":[]},{"tag":"path","attr":{"d":"M12 21c-4.963 0-9-4.037-9-9s4.037-9 9-9 9 4.037 9 9-4.037 9-9 9zm0-16c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7-3.141-7-7-7z"},"child":[]}]}]})(props);
};
function TiSocialTumbler (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M15.527 17.921v-2.066c-.669.448-1.32.67-1.952.67-.298 0-.631-.094-1.004-.277-.223-.151-.354-.317-.393-.503-.11-.224-.178-.708-.178-1.454v-3.291h3v-2h-3v-3.356h-1.772c-.149.782-.298 1.338-.448 1.673-.184.41-.482.782-.891 1.116-.411.337-.837.577-1.285.725v1.842h1.396v4.521c0 .52.073.964.223 1.337.111.298.334.595.671.893.259.262.631.484 1.115.67.595.15 1.114.223 1.562.223.52 0 1.004-.056 1.45-.167.521-.112 1.023-.298 1.506-.556"},"child":[]}]})(props);
};
function TiSocialTwitterCircular (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M15.279 10.283c.358-.221.597-.521.713-.904-.349.186-.697.312-1.045.383-.312-.336-.708-.507-1.182-.507-.464 0-.855.163-1.175.479-.317.318-.478.706-.478 1.158 0 .137.017.26.052.364-1.368-.048-2.499-.614-3.391-1.706-.151.267-.227.539-.227.82 0 .578.244 1.036.73 1.373-.277-.023-.521-.094-.73-.209 0 .413.121.758.365 1.062.243.3.557.492.939.573-.139.036-.285.053-.435.053-.14 0-.237-.012-.296-.037.104.337.296.609.574.818.277.21.597.32.957.33-.591.465-1.269.694-2.035.694-.188 0-.32-.002-.4-.017.754.489 1.594.733 2.521.733.951 0 1.792-.241 2.522-.723.73-.479 1.271-1.07 1.617-1.767.348-.695.521-1.419.521-2.174v-.209c.336-.253.609-.538.818-.854-.298.133-.611.222-.935.267zM12 21c-2.49 0-4.635-.89-6.376-2.646-1.741-1.751-2.624-3.889-2.624-6.354 0-2.488.884-4.634 2.627-6.375 1.74-1.741 3.884-2.625 6.373-2.625 2.466 0 4.604.883 6.354 2.624 1.756 1.742 2.646 3.888 2.646 6.376 0 2.465-.889 4.604-2.644 6.357-1.751 1.753-3.889 2.643-6.356 2.643zm0-16c-1.966 0-3.588.667-4.958 2.04-1.375 1.372-2.042 2.994-2.042 4.96 0 1.944.668 3.562 2.043 4.945 1.372 1.383 2.993 2.055 4.957 2.055 1.943 0 3.56-.673 4.942-2.057 1.385-1.384 2.058-3.002 2.058-4.943 0-1.963-.672-3.585-2.055-4.957-1.383-1.375-3-2.043-4.945-2.043z"},"child":[]}]}]})(props);
};
function TiSocialTwitter (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18.89 7.012c.808-.496 1.343-1.173 1.605-2.034-.786.417-1.569.703-2.351.861-.703-.756-1.593-1.14-2.66-1.14-1.043 0-1.924.366-2.643 1.078-.715.717-1.076 1.588-1.076 2.605 0 .309.039.585.117.819-3.076-.105-5.622-1.381-7.628-3.837-.34.601-.51 1.213-.51 1.846 0 1.301.549 2.332 1.645 3.089-.625-.053-1.176-.211-1.645-.47 0 .929.273 1.705.82 2.388.549.676 1.254 1.107 2.115 1.291-.312.08-.641.118-.979.118-.312 0-.533-.026-.664-.083.23.757.664 1.371 1.291 1.841.625.472 1.344.721 2.152.743-1.332 1.045-2.855 1.562-4.578 1.562-.422 0-.721-.006-.902-.038 1.697 1.102 3.586 1.649 5.676 1.649 2.139 0 4.029-.542 5.674-1.626 1.645-1.078 2.859-2.408 3.639-3.974.784-1.564 1.172-3.192 1.172-4.892v-.468c.758-.57 1.371-1.212 1.84-1.921-.68.293-1.383.492-2.11.593z"},"child":[]}]})(props);
};
function TiSocialVimeoCircular (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M14.463 9.141c-.512 0-.988.238-1.43.715-.311.312-.5.678-.566 1.101.207-.131.387-.196.541-.196.159 0 .29.07.393.212.199.278.188.629-.033 1.051-.489.934-.846 1.4-1.066 1.4-.156 0-.356-.522-.602-1.567-.043-.155-.088-.378-.133-.667-.045-.288-.088-.538-.133-.75-.045-.211-.111-.428-.2-.649s-.2-.384-.333-.483c-.094-.069-.202-.104-.327-.104l-.173.021c-.289.067-.623.245-1 .534-.379.288-.689.566-.934.833l-.334.4.301.399.166-.133c.066-.045.189-.101.367-.167l.191-.043c.069 0 .116.025.143.076.066.089.271.717.615 1.884.346 1.167.562 1.839.65 2.017.156.311.367.55.633.717.13.08.271.121.427.121.165 0 .346-.047.54-.139.601-.399 1.289-1.066 2.067-2 .778-.933 1.255-1.922 1.433-2.966.156-.911-.11-1.434-.799-1.567-.138-.035-.272-.05-.404-.05zM12 21c-4.963 0-9-4.037-9-9s4.037-9 9-9 9 4.037 9 9-4.037 9-9 9zm0-16c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7-3.141-7-7-7z"},"child":[]}]}]})(props);
};
function TiSocialVimeo (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18.92 8.776c-.329 1.929-1.211 3.758-2.649 5.48-1.436 1.725-2.71 2.957-3.819 3.695-.699.331-1.293.34-1.786.034-.493-.31-.883-.751-1.169-1.325-.165-.328-.565-1.569-1.202-3.728-.636-2.155-1.017-3.315-1.139-3.479-.083-.163-.288-.184-.616-.061-.33.122-.555.226-.678.309-.123.081-.226.165-.308.245l-.554-.737.616-.74c.452-.492 1.026-1.007 1.724-1.54.7-.534 1.314-.862 1.848-.987.371-.08.679-.028.924.156.247.184.452.484.616.894.165.409.289.811.369 1.199.083.392.165.854.248 1.387.081.534.164.945.246 1.232.451 1.93.821 2.896 1.109 2.896.41 0 1.067-.863 1.971-2.59.41-.779.432-1.426.062-1.941-.369-.512-.943-.522-1.724-.029.123-.78.472-1.456 1.046-2.031 1.026-1.109 2.157-1.521 3.388-1.234 1.273.247 1.765 1.213 1.477 2.895z"},"child":[]}]})(props);
};
function TiSocialYoutubeCircular (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.1","id":"Layer_1","viewBox":"0 0 24 24"},"child":[{"tag":"polygon","attr":{"points":"8.48,13.14 9.21,13.14 9.21,16.75 9.91,16.75 9.91,13.14 10.64,13.14 10.64,12.53 8.48,12.53 "},"child":[]},{"tag":"path","attr":{"d":"M12.17,16c-0.12,0.14-0.53,0.42-0.53,0.02v-2.39h-0.62v2.61c0,0.79,0.79,0.58,1.16,0.17v0.34h0.62v-3.12h-0.62V16H12.17z"},"child":[]},{"tag":"path","attr":{"d":"M14.48,13.61c-0.36,0-0.59,0.27-0.59,0.27v-1.36h-0.63v4.23h0.63v-0.24c0,0,0.21,0.28,0.59,0.28c0.33,0,0.58-0.29,0.58-0.69\r\n\tc0,0,0-1.26,0-1.73S14.84,13.61,14.48,13.61z M14.41,16.02c0,0.23-0.16,0.34-0.37,0.25c-0.05-0.02-0.1-0.06-0.15-0.11v-1.94\r\n\tc0.04-0.04,0.09-0.07,0.13-0.1c0.22-0.11,0.39,0.06,0.39,0.29L14.41,16.02L14.41,16.02z"},"child":[]},{"tag":"path","attr":{"d":"M16.72,15.86c0,0.24-0.13,0.4-0.28,0.41c-0.16,0.01-0.32-0.12-0.32-0.41v-0.59h1.19v-0.8c0-0.29-0.11-0.51-0.26-0.66\r\n\tc-0.17-0.16-0.4-0.24-0.63-0.24c-0.22,0-0.45,0.07-0.63,0.21c-0.19,0.15-0.31,0.38-0.31,0.69v1.4c0,0.28,0.09,0.5,0.23,0.66\r\n\tc0.17,0.18,0.4,0.28,0.64,0.29c0.29,0.01,0.6-0.11,0.78-0.36c0.11-0.15,0.18-0.35,0.18-0.59v-0.16h-0.59\r\n\tC16.72,15.71,16.72,15.76,16.72,15.86z M16.12,14.47c0-0.17,0.1-0.37,0.29-0.37s0.31,0.18,0.31,0.37s0,0.32,0,0.32h-0.6\r\n\tC16.12,14.78,16.12,14.64,16.12,14.47z"},"child":[]},{"tag":"path","attr":{"d":"M12.97,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9S17.94,3,12.97,3z M14.55,6.37h0.8v2.68c0,0.17,0.08,0.17,0.11,0.17\r\n\tc0.12,0,0.3-0.13,0.39-0.22V6.36h0.8V9.9h-0.8V9.59c-0.11,0.1-0.22,0.18-0.33,0.24c-0.15,0.08-0.29,0.11-0.43,0.11\r\n\tc-0.18,0-0.31-0.06-0.41-0.17c-0.09-0.11-0.13-0.28-0.13-0.49V6.37z M12,7.3c0-0.55,0.45-1,1-1s1,0.45,1,1V9c0,0.55-0.45,1-1,1\r\n\ts-1-0.45-1-1V7.3z M9.92,5.15l0.48,1.76l0.49-1.76h0.91l-0.94,2.78V9.9H9.97V7.93L9.01,5.15H9.92z M17.82,17.69\r\n\tc-0.51,0.5-4.83,0.51-4.83,0.51s-4.31-0.01-4.83-0.51c-0.51-0.5-0.51-2.99-0.51-3.01c0-0.01,0-2.5,0.51-3.01\r\n\tc0.51-0.5,4.83-0.51,4.83-0.51s4.31,0.01,4.83,0.51c0.51,0.5,0.52,2.99,0.52,3.01C18.34,14.68,18.34,17.18,17.82,17.69z"},"child":[]},{"tag":"path","attr":{"d":"M12.98,9.35c0.17,0,0.25-0.1,0.26-0.26v-1.9c0-0.13-0.13-0.24-0.25-0.24s-0.25,0.1-0.25,0.24v1.9\r\n\tC12.74,9.24,12.81,9.34,12.98,9.35z"},"child":[]}]})(props);
};
function TiSocialYoutube (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M22.8 8.6c-.2-1.5-.4-2.6-1-3-.6-.5-5.8-.6-9.8-.6s-9.2.1-9.8.6c-.6.4-.8 1.5-1 3s-.2 2.4-.2 3.4 0 1.9.2 3.4.4 2.6 1 3c.6.5 5.8.6 9.8.6 4 0 9.2-.1 9.8-.6.6-.4.8-1.5 1-3s.2-2.4.2-3.4 0-1.9-.2-3.4zm-12.8 7v-7.2l6 3.6-6 3.6z"},"child":[]}]})(props);
};
function TiSortAlphabeticallyOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M5.618 14h2.764l-1.382-2.764zM21 14l2.4-3.2c.686-.915.795-2.119.284-3.142-.512-1.023-1.54-1.658-2.684-1.658h-6c-1.654 0-3 1.346-3 3 0 .77.295 1.469.774 2h-.274c-.368 0-.708.107-1.005.281l-1.811-3.623c-.498-.995-1.527-1.614-2.684-1.614s-2.186.619-2.684 1.614l-4 8c-.358.717-.416 1.53-.163 2.291s.788 1.376 1.504 1.735c.414.207.879.316 1.342.316 1.143 0 2.171-.635 2.684-1.657l.171-.343h2.291l.171.342c.512 1.023 1.54 1.658 2.684 1.658.464 0 .928-.109 1.342-.316.243-.122.455-.282.652-.458.54.488 1.246.774 2.006.774h6c1.654 0 3-1.346 3-3s-1.346-3-3-3zm-9.553 3.895c-.143.071-.296.105-.446.105-.368 0-.721-.203-.896-.553l-.723-1.447h-4.764l-.724 1.447c-.175.35-.528.553-.895.553-.15 0-.303-.034-.446-.106-.494-.247-.694-.848-.447-1.342l4-8c.169-.338.532-.508.894-.508s.725.169.895.508l4 8c.247.495.046 1.095-.448 1.343zm1.053-3.895c-.552 0-1-.448-1-1s.448-1 1-1h1c.552 0 1 .448 1 1s-.448 1-1 1h-1zm8.5 4h-6c-.379 0-.725-.214-.895-.553s-.132-.744.095-1.047l4.8-6.4h-4c-.552 0-1-.448-1-1s.448-1 1-1h6c.379 0 .725.214.895.553s.132.744-.095 1.047l-4.8 6.4h4c.552 0 1 .448 1 1s-.448 1-1 1z"},"child":[]}]}]})(props);
};
function TiSortAlphabetically (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M10.895 16.553l-4-8c-.339-.678-1.45-.678-1.789 0l-4 8c-.247.494-.047 1.095.447 1.342.495.248 1.095.046 1.342-.447l.723-1.448h4.764l.724 1.447c.175.351.528.553.895.553.15 0 .303-.034.446-.105.494-.248.695-.848.448-1.342zm-6.277-2.553l1.382-2.764 1.382 2.764h-2.764zM22 18h-6c-.379 0-.725-.214-.895-.553s-.132-.744.095-1.047l4.8-6.4h-4c-.552 0-1-.448-1-1s.448-1 1-1h6c.379 0 .725.214.895.553s.132.744-.095 1.047l-4.8 6.4h4c.552 0 1 .448 1 1s-.448 1-1 1zM14 14h-2c-.552 0-1-.448-1-1s.448-1 1-1h2c.552 0 1 .448 1 1s-.448 1-1 1z"},"child":[]}]})(props);
};
function TiSortNumericallyOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M23.292 12.134c.138-.445.208-.91.208-1.384 0-2.619-2.131-4.75-4.75-4.75-1.396 0-2.685.61-3.573 1.632l-.056-.067c-.973-.974-2.349-1.533-3.776-1.533-1.422 0-2.794.556-3.77 1.525-.264-.431-.644-.813-1.122-1.108-.474-.294-1.032-.449-1.613-.449-.482 0-.955.109-1.369.316l-1.406.747c-1.442.721-2.051 2.526-1.313 4.002.272.543.714.982 1.248 1.272v4.663c0 1.654 1.346 3 3 3 .766 0 1.458-.297 1.989-.771.54.487 1.25.771 2.011.771h5c.778 0 1.479-.305 2.01-.795.796.5 1.731.795 2.74.795 2.895 0 5.25-2.355 5.25-5.25 0-.922-.25-1.825-.708-2.616zm-17.292 4.866c0 .552-.448 1-1 1s-1-.448-1-1v-6.382c-.144.072-.306.106-.471.106-.401 0-.813-.203-.988-.553-.247-.494-.031-1.095.463-1.342l1.361-.724c.141-.07.307-.105.475-.105.199 0 .4.05.561.149.294.183.599.504.599.851v8zm8 1h-5c-.404 0-.769-.244-.924-.617-.155-.374-.069-.804.217-1.09l4-4c.254-.254.394-.591.394-.95 0-.358-.14-.695-.394-.949s-.601-.381-.949-.381-.696.127-.952.382c-.252.252-.392.589-.392.948 0 .552-.448 1-1 1s-1-.448-1-1c0-.894.348-1.733.98-2.364.632-.631 1.498-.947 2.364-.947s1.731.316 2.363.948c.632.631.979 1.471.979 2.363 0 .893-.348 1.733-.979 2.364l-2.293 2.293h2.586c.552 0 1 .448 1 1s-.448 1-1 1zm4.75 0c-1.792 0-3.25-1.458-3.25-3.25 0-.552.448-1 1-1s1 .448 1 1c0 .689.561 1.25 1.25 1.25s1.25-.561 1.25-1.25-.561-1.25-1.25-1.25c-.552 0-1-.448-1-1s.448-1 1-1c.414 0 .75-.336.75-.75s-.336-.75-.75-.75c-.281 0-.536.155-.665.404-.178.343-.527.54-.889.54-.155 0-.312-.036-.459-.112-.491-.254-.682-.857-.428-1.348.475-.915 1.41-1.484 2.441-1.484 1.516 0 2.75 1.233 2.75 2.75 0 .611-.207 1.17-.545 1.627.639.594 1.045 1.434 1.045 2.373 0 1.792-1.458 3.25-3.25 3.25z"},"child":[]}]})(props);
};
function TiSortNumerically (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M4 18c-.552 0-1-.448-1-1v-6.382l-.553.276c-.495.248-1.095.046-1.342-.447-.247-.494-.046-1.094.448-1.342l2-1c.31-.155.678-.139.973.044.294.183.474.504.474.851v8c0 .552-.448 1-1 1zM13 18h-5c-.404 0-.769-.244-.924-.617-.155-.374-.069-.804.217-1.09l4-4c.254-.254.394-.591.394-.95 0-.358-.14-.695-.394-.949-.508-.508-1.39-.508-1.9.001-.253.252-.393.589-.393.948 0 .552-.448 1-1 1s-1-.448-1-1c0-.894.348-1.733.98-2.364 1.265-1.263 3.464-1.263 4.727.001.632.631.979 1.471.979 2.363 0 .893-.348 1.733-.979 2.364l-2.293 2.293h2.586c.552 0 1 .448 1 1s-.448 1-1 1zM20.955 12.377c.338-.457.545-1.016.545-1.627 0-1.517-1.234-2.75-2.75-2.75-1.031 0-1.966.569-2.44 1.484-.254.49-.063 1.094.428 1.348.49.254 1.094.062 1.348-.428.128-.249.383-.404.664-.404.414 0 .75.336.75.75s-.336.75-.75.75c-.552 0-1 .448-1 1s.448 1 1 1c.689 0 1.25.561 1.25 1.25s-.561 1.25-1.25 1.25-1.25-.561-1.25-1.25c0-.552-.448-1-1-1s-1 .448-1 1c0 1.792 1.458 3.25 3.25 3.25s3.25-1.458 3.25-3.25c0-.939-.406-1.779-1.045-2.373z"},"child":[]}]})(props);
};
function TiSpannerOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"circle","attr":{"cx":"8","cy":"16","r":"1"},"child":[]},{"tag":"path","attr":{"d":"M20.733 4.657c-.392-.378-1.013-.377-1.399.009.387-.386.388-1.008.01-1.4-1.078-.792-2.405-1.266-3.844-1.266-3.59 0-6.5 2.91-6.5 6.5l.031.379c-.337.239-2.893 2.147-4.258 3.301-1.135.99-1.773 2.375-1.773 3.82 0 2.757 2.243 5 5 5 1.465 0 2.854-.65 3.811-1.784 1.173-1.375 3.08-3.923 3.317-4.229l.372.013c3.59 0 6.5-2.91 6.5-6.5 0-1.44-.474-2.766-1.267-3.843zm-12.733 14.343c-1.656 0-3-1.343-3-3 0-.92.423-1.732 1.064-2.292 2.368-2.002 3.617-2.748 5.115-4.015-.105-.382-.179-.777-.179-1.193 0-2.485 2.015-4.5 4.5-4.5.47 0 .914.092 1.339.226l-2.839 2.774.5 2.5 2.5.5 2.805-2.741c.115.396.195.807.195 1.241 0 2.485-2.015 4.5-4.5 4.5-.416 0-.811-.074-1.193-.18-1.267 1.498-2.013 2.748-4.024 5.105-.551.652-1.363 1.075-2.283 1.075zm11.384-12.729l-2.705 2.645-1.329-.266-.263-1.314 2.726-2.663c.651.393 1.19.939 1.571 1.598z"},"child":[]}]}]})(props);
};
function TiSpanner (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20.285 7.119c-.05-.168-.184-.299-.354-.344-.172-.047-.352.003-.477.126l-2.616 2.557-1.914-.383-.381-1.907 2.645-2.585c.126-.123.178-.303.137-.474s-.168-.308-.336-.361c-.531-.166-1.018-.248-1.489-.248-2.757 0-5 2.243-5 5 0 .323.038.65.118 1.01-.562.463-1.096.862-1.701 1.314-.865.646-1.845 1.377-3.182 2.506-.785.686-1.235 1.659-1.235 2.67 0 1.93 1.57 3.5 3.5 3.5 1.021 0 1.993-.456 2.662-1.25 1.149-1.347 1.891-2.336 2.544-3.209.442-.591.832-1.111 1.283-1.66.36.081.688.119 1.011.119 2.757 0 5-2.243 5-5 0-.437-.068-.875-.215-1.381zm-12.285 9.881c-.553 0-1-.447-1-1s.447-1 1-1 1 .447 1 1-.447 1-1 1z"},"child":[]}]})(props);
};
function TiSpiral (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 11.8c1-.4.7-1.8 0-2.4-1.1-.9-2.7-.4-3.4.8-1.5 2.4.9 5 3.4 4.9 2.7-.2 4.3-2.9 3.7-5.4-.7-3-3.9-4.5-6.7-3.6-2.6.8-4.2 3.5-4 6.2.3 3 2.6 5.4 5.5 5.9 2.8.5 5.7-.8 7.2-3.2.7-1.1 1.2-2.4 1.2-3.8 0-.5.5-1 1.1-.9.8 0 1 .8.9 1.4-.4 4.7-4.5 8.6-9.3 8.6-5.9 0-10.5-6.2-8-11.8 2.5-5.4 10.3-6.5 13.3-1.2 1.5 2.5 1.2 5.8-.9 7.9-2 2-5.3 2.4-7.7.7-2.2-1.6-2.9-4.9-1.1-7.2 1.7-2.3 5.5-2.4 7 .2 1.1 1.9 0 5.2-2.5 4.9-1.6 0-3-1.7-2.1-3.2.6-.9 1.9-.6 2.3.1.2.8.1 1.1.1 1.1z"},"child":[]}]})(props);
};
function TiStarFullOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3.1 11.3l3.6 3.3-1 4.6c-.1.6.1 1.2.6 1.5.2.2.5.3.8.3.2 0 .4 0 .6-.1 0 0 .1 0 .1-.1l4.1-2.3 4.1 2.3s.1 0 .1.1c.5.2 1.1.2 1.5-.1.5-.3.7-.9.6-1.5l-1-4.6c.4-.3 1-.9 1.6-1.5l1.9-1.7.1-.1c.4-.4.5-1 .3-1.5s-.6-.9-1.2-1h-.1l-4.7-.5-1.9-4.3s0-.1-.1-.1c-.1-.7-.6-1-1.1-1-.5 0-1 .3-1.3.8 0 0 0 .1-.1.1l-1.9 4.3-4.7.5h-.1c-.5.1-1 .5-1.2 1-.1.6 0 1.2.4 1.6z"},"child":[]}]})(props);
};
function TiStarHalfOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M3.1 11.3l3.6 3.3-1 4.6c-.1.6.1 1.2.6 1.5.2.2.5.3.8.3.2 0 .4 0 .6-.1 0 0 .1 0 .1-.1l4.1-2.3 4.1 2.3s.1 0 .1.1c.5.2 1.1.2 1.5-.1.5-.3.7-.9.6-1.5l-1-4.6c.4-.3 1-.9 1.6-1.5l1.9-1.7.1-.1c.4-.4.5-1 .3-1.5s-.6-.9-1.2-1h-.1l-4.7-.5-1.9-4.3s0-.1-.1-.1c-.1-.7-.6-1-1.1-1-.5 0-1 .3-1.3.8 0 0 0 .1-.1.1l-1.9 4.3-4.7.5h-.1c-.5.1-1 .5-1.2 1-.1.6 0 1.2.4 1.6zm8.9 5v-10.5l1.7 3.8c.1.3.5.5.8.6l4.2.5-3.1 2.8c-.3.2-.4.6-.3 1 0 .2.5 2.2.8 4.1l-3.6-2.1c-.2-.2-.3-.2-.5-.2z"},"child":[]}]})(props);
};
function TiStarHalf (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11.5 4.3c-.9 1.9-2.2 4.8-2.2 4.8s-3.1.4-5.2.6c-.2 0-.4.2-.4.3-.1.2 0 .4.1.5 1.6 1.4 3.9 3.6 3.9 3.6s-.6 3.1-1.1 5.2c0 .2 0 .4.2.5.2.2.4.2.6.1 1.8-1 4.6-2.6 4.6-2.6v-13.3c-.2 0-.4.2-.5.3z"},"child":[]}]})(props);
};
function TiStarOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M16.855 20.966c-.224 0-.443-.05-.646-.146l-.104-.051-4.107-2.343-4.107 2.344-.106.053c-.488.228-1.085.174-1.521-.143-.469-.34-.701-.933-.586-1.509l.957-4.642-1.602-1.457-1.895-1.725-.078-.082c-.375-.396-.509-.97-.34-1.492.173-.524.62-.912 1.16-1.009l.102-.018 4.701-.521 1.946-4.31.06-.11c.262-.473.764-.771 1.309-.771.543 0 1.044.298 1.309.77l.06.112 1.948 4.312 4.701.521.104.017c.539.1.986.486 1.158 1.012.17.521.035 1.098-.34 1.494l-.078.078-3.498 3.184.957 4.632c.113.587-.118 1.178-.59 1.519-.252.182-.556.281-.874.281zm-8.149-6.564c-.039.182-.466 2.246-.845 4.082l3.643-2.077c.307-.175.684-.175.99 0l3.643 2.075-.849-4.104c-.071-.346.045-.705.308-.942l3.1-2.822-4.168-.461c-.351-.039-.654-.26-.801-.584l-1.728-3.821-1.726 3.821c-.146.322-.45.543-.801.584l-4.168.461 3.1 2.822c.272.246.384.617.302.966z"},"child":[]}]})(props);
};
function TiStar (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M9.362 9.158l-5.268.584c-.19.023-.358.15-.421.343s0 .394.14.521c1.566 1.429 3.919 3.569 3.919 3.569-.002 0-.646 3.113-1.074 5.19-.036.188.032.387.196.506.163.119.373.121.538.028 1.844-1.048 4.606-2.624 4.606-2.624l4.604 2.625c.168.092.378.09.541-.029.164-.119.232-.318.195-.505l-1.071-5.191 3.919-3.566c.14-.131.202-.332.14-.524s-.23-.319-.42-.341c-2.108-.236-5.269-.586-5.269-.586l-2.183-4.83c-.082-.173-.254-.294-.456-.294s-.375.122-.453.294l-2.183 4.83z"},"child":[]}]})(props);
};
function TiStarburstOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21.556 11.169l-1.849-1.232.984-1.993c.148-.3.137-.654-.03-.943-.168-.29-.468-.477-.802-.498l-2.218-.143-.144-2.218c-.02-.334-.208-.635-.497-.802-.29-.167-.645-.18-.943-.03l-1.991.985-1.233-1.849c-.371-.557-1.293-.557-1.664 0l-1.234 1.848-1.992-.984c-.299-.15-.654-.137-.943.03-.29.167-.477.468-.498.802l-.143 2.217-2.218.143c-.334.022-.635.209-.802.498s-.179.644-.03.943l.984 1.993-1.849 1.233c-.278.186-.445.498-.445.832s.167.646.445.832l1.85 1.233-.985 1.992c-.148.3-.137.654.03.943s.468.477.802.498l2.218.143.143 2.218c.021.333.208.634.498.801s.642.179.943.031l1.992-.985 1.233 1.849c.186.278.498.445.832.445s.646-.167.832-.445l1.233-1.849 1.991.985c.299.148.653.136.943-.03.29-.167.477-.468.498-.802l.143-2.217 2.219-.144c.334-.021.635-.208.802-.498s.179-.644.03-.943l-.984-1.992 1.849-1.233c.278-.186.445-.498.445-.832 0-.334-.167-.647-.445-.832zm-4.032 2.997l.71 1.435-1.6.104c-.502.033-.901.432-.934.934l-.103 1.598-1.435-.709c-.45-.224-.996-.077-1.275.342l-.887 1.33-.889-1.333c-.191-.287-.508-.445-.833-.445-.149 0-.3.033-.442.104l-1.436.709-.103-1.598c-.032-.501-.432-.901-.934-.934l-1.596-.103.71-1.435c.223-.451.076-.997-.342-1.275l-1.333-.889 1.332-.888c.418-.279.564-.825.342-1.275l-.71-1.436 1.6-.103c.502-.033.901-.432.934-.934l.103-1.598 1.435.709c.448.221.996.076 1.275-.342l.887-1.331.889 1.333c.279.418.826.563 1.275.342l1.436-.71.104 1.599c.033.501.433.9.934.933l1.598.103-.709 1.437c-.223.451-.076.996.342 1.275l1.332.888-1.333.889c-.42.277-.566.823-.344 1.274z"},"child":[]}]})(props);
};
function TiStarburst (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19.064 10.109l1.179-2.387c.074-.149.068-.327-.015-.471-.083-.145-.234-.238-.401-.249l-2.656-.172-.172-2.656c-.011-.167-.104-.317-.249-.401-.145-.084-.322-.09-.472-.015l-2.385 1.18-1.477-2.215c-.186-.278-.646-.278-.832 0l-1.477 2.215-2.385-1.18c-.151-.075-.327-.069-.472.015-.145.083-.238.234-.249.401l-.171 2.656-2.657.171c-.167.011-.318.104-.401.249-.084.145-.089.322-.015.472l1.179 2.386-2.214 1.477c-.139.093-.223.249-.223.416s.083.323.223.416l2.215 1.477-1.18 2.386c-.074.15-.068.327.015.472.083.144.234.238.401.248l2.656.171.171 2.657c.011.167.104.317.249.401.144.083.32.088.472.015l2.386-1.179 1.477 2.214c.093.139.249.223.416.223s.323-.083.416-.223l1.477-2.214 2.386 1.179c.15.073.327.068.472-.015s.238-.234.249-.401l.171-2.656 2.656-.172c.167-.011.317-.104.401-.249.083-.145.089-.322.015-.472l-1.179-2.385 2.214-1.478c.139-.093.223-.249.223-.416s-.083-.323-.223-.416l-2.214-1.475z"},"child":[]}]})(props);
};
function TiStopwatch (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M19.414 8.902c.104-.048.206-.108.293-.195l.5-.5c.391-.391.391-1.023 0-1.414s-1.023-.391-1.414 0l-.5.5-.115.173c-1.387-1.312-3.188-2.19-5.189-2.41l.011-.056v-1h1c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1s.45 1 1 1h1v1l.012.057c-4.506.492-8.012 4.307-8.012 8.943 0 4.971 4.029 9 9 9s9-4.029 9-9c0-1.894-.588-3.648-1.586-5.098zm-7.414 12.098c-3.859 0-7-3.14-7-7s3.141-7 7-7 7 3.14 7 7-3.141 7-7 7zM13 13v-2c0-.55-.45-1-1-1s-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1h-2zM12 8c-3.312 0-6 2.688-6 6s2.688 6 6 6 6-2.688 6-6-2.688-6-6-6zm0 11c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"},"child":[]}]}]})(props);
};
function TiSupport (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 3.5c-4.688 0-8.5 3.812-8.5 8.5s3.812 8.5 8.5 8.5 8.5-3.812 8.5-8.5-3.812-8.5-8.5-8.5zm6.5 8.5c0 1.064-.264 2.066-.718 2.956l-1.931-1.931c.088-.332.147-.674.147-1.025 0-.355-.062-.693-.147-1.021l1.932-1.932c.455.889.717 1.891.717 2.953zm-13 0c0-1.064.264-2.066.718-2.956l1.933 1.933c-.086.33-.147.668-.147 1.022 0 .353.062.69.147 1.021l-1.934 1.934c-.455-.89-.717-1.892-.717-2.954zm3.068-2.02l-1.775-1.775 1.414-1.414 1.775 1.775c-.584.345-1.068.83-1.414 1.414zm-1.777 5.813l1.773-1.773c.17.289.362.564.605.809s.52.438.807.607l-1.771 1.771-1.414-1.414zm3.795-2.379c-.377-.378-.585-.88-.584-1.414 0-1.104.896-2 1.998-2 1.104 0 2 .896 2 2.001.001.533-.207 1.035-.584 1.412-.755.757-2.073.757-2.83.001zm6.623-5.207l-1.775 1.775c-.345-.586-.828-1.069-1.412-1.416l1.773-1.773 1.414 1.414zm-2.378 6.619c.241-.242.435-.518.604-.803l1.771 1.771-1.414 1.414-1.772-1.772c.291-.17.567-.366.811-.61zm.125-8.608l-1.933 1.932c-.328-.088-.668-.15-1.023-.15s-.693.062-1.021.148l-1.932-1.932c.889-.455 1.891-.717 2.953-.717 1.064.001 2.066.265 2.956.719zm-5.912 11.564l1.933-1.933c.332.088.672.149 1.023.149s.691-.062 1.021-.147l1.932 1.932c-.889.455-1.891.717-2.953.717-1.064 0-2.066-.264-2.956-.718z"},"child":[]}]})(props);
};
function TiTabsOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18 4h-10c-1.104 0-2 .896-2 2v2h-1c-1.104 0-2 .896-2 2v9c0 1.104.896 2 2 2h9c1.104 0 2-.896 2-2v-1h2c1.104 0 2-.896 2-2v-10c0-1.104-.896-2-2-2zm-13 15v-9h8.5c.275 0 .5.225.5.5v8.5h-9zm13-3h-3v-5.5c0-.827-.673-1.5-1.5-1.5h-5.5v-3h10v10z"},"child":[]}]})(props);
};
function TiTag (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M9 4c1.279 0 2.559.488 3.535 1.465l3.465 3.535 5 5-7 7-5.498-5.498c-.037.033-3.037-2.967-3.037-2.967-1.953-1.953-1.953-5.119 0-7.07.976-.977 2.256-1.465 3.535-1.465m0-2c-1.87 0-3.628.729-4.949 2.051-1.322 1.32-2.051 3.078-2.051 4.948s.729 3.628 2.051 4.95l3 3c.107.107.227.201.35.279l5.187 5.186c.391.391.9.586 1.413.586s1.022-.195 1.414-.586l7-7c.78-.781.78-2.047 0-2.828l-5-5-3.45-3.521c-1.337-1.336-3.095-2.065-4.965-2.065zM9 7.498c.829 0 1.5.672 1.5 1.502s-.671 1.498-1.5 1.498-1.5-.668-1.5-1.498.671-1.502 1.5-1.502m0-1c-1.379 0-2.5 1.122-2.5 2.502 0 1.377 1.121 2.498 2.5 2.498s2.5-1.121 2.5-2.498c0-1.38-1.121-2.502-2.5-2.502z"},"child":[]}]})(props);
};
function TiTags (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M21.422 9.594l-6.465-6.535c-1.329-1.33-3.087-2.059-4.957-2.059s-3.628.729-4.95 2.051c-1.416 1.414-2.127 3.356-2.027 5.314-.662 1.085-1.023 2.33-1.023 3.634 0 1.87.729 3.628 2.051 4.95l3.053 2.984 3.482 3.48c.391.392.902.587 1.414.587s1.023-.195 1.414-.586l7-7c.778-.778.782-2.038.008-2.82l-.093-.094 1.085-1.086c.778-.778.782-2.038.008-2.82zm-9.422 12.406l-3.498-3.497-3.037-2.968c-1.953-1.953-1.953-5.119 0-7.07.976-.977 2.256-1.465 3.535-1.465s2.559.488 3.535 1.465l6.465 6.535-7 7zm1.957-14.941c-1.329-1.33-3.087-2.059-4.957-2.059-1.276 0-2.497.347-3.565.982.241-.55.579-1.067 1.03-1.518.976-.976 2.256-1.464 3.535-1.464s2.559.488 3.535 1.465l6.465 6.535-1.078 1.078-4.965-5.019zM9 10.499c.83 0 1.5.672 1.5 1.501 0 .83-.67 1.499-1.5 1.499s-1.5-.669-1.5-1.499c0-.829.67-1.501 1.5-1.501m0-1c-1.378 0-2.5 1.122-2.5 2.501 0 1.378 1.122 2.499 2.5 2.499s2.5-1.121 2.5-2.499c0-1.379-1.122-2.501-2.5-2.501z"},"child":[]}]}]})(props);
};
function TiThLargeOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M9 2h-5c-1.103 0-2 .896-2 2v5c0 1.104.897 2 2 2h5c1.103 0 2-.896 2-2v-5c0-1.104-.897-2-2-2zm0 7h-5v-5h5v5zM20 2h-5c-1.104 0-2 .896-2 2v5c0 1.104.896 2 2 2h5c1.104 0 2-.896 2-2v-5c0-1.104-.896-2-2-2zm0 7h-5v-5h5v5zM9 13h-5c-1.103 0-2 .896-2 2v5c0 1.104.897 2 2 2h5c1.103 0 2-.896 2-2v-5c0-1.104-.897-2-2-2zm0 7h-5v-5h5v5zM20 13h-5c-1.104 0-2 .896-2 2v5c0 1.104.896 2 2 2h5c1.104 0 2-.896 2-2v-5c0-1.104-.896-2-2-2zm0 7h-5v-5h5v5z"},"child":[]}]})(props);
};
function TiThLarge (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M8 3h-2c-.825 0-1.575.337-2.119.881-.544.544-.881 1.294-.881 2.119v2c0 .825.337 1.575.881 2.119.544.544 1.294.881 2.119.881h2c.825 0 1.575-.337 2.119-.881.544-.544.881-1.294.881-2.119v-2c0-.825-.337-1.575-.881-2.119-.544-.544-1.294-.881-2.119-.881zM18 3h-2c-.825 0-1.575.337-2.119.881-.544.544-.881 1.294-.881 2.119v2c0 .825.337 1.575.881 2.119.544.544 1.294.881 2.119.881h2c.825 0 1.575-.337 2.119-.881.544-.544.881-1.294.881-2.119v-2c0-.825-.337-1.575-.881-2.119-.544-.544-1.294-.881-2.119-.881zM8 13h-2c-.825 0-1.575.337-2.119.881-.544.544-.881 1.294-.881 2.119v2c0 .825.337 1.575.881 2.119.544.544 1.294.881 2.119.881h2c.825 0 1.575-.337 2.119-.881.544-.544.881-1.294.881-2.119v-2c0-.825-.337-1.575-.881-2.119-.544-.544-1.294-.881-2.119-.881zM18 13h-2c-.825 0-1.575.337-2.119.881-.544.544-.881 1.294-.881 2.119v2c0 .825.337 1.575.881 2.119.544.544 1.294.881 2.119.881h2c.825 0 1.575-.337 2.119-.881.544-.544.881-1.294.881-2.119v-2c0-.825-.337-1.575-.881-2.119-.544-.544-1.294-.881-2.119-.881z"},"child":[]}]})(props);
};
function TiThListOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 18c.55 0 1 .45 1 1s-.45 1-1 1h-7c-.55 0-1-.45-1-1s.45-1 1-1h7m0-2h-7c-1.654 0-3 1.346-3 3s1.346 3 3 3h7c1.654 0 3-1.346 3-3s-1.346-3-3-3zM19 11c.55 0 1 .45 1 1s-.45 1-1 1h-7c-.55 0-1-.45-1-1s.45-1 1-1h7m0-2h-7c-1.654 0-3 1.346-3 3s1.346 3 3 3h7c1.654 0 3-1.346 3-3s-1.346-3-3-3zM19 4c.55 0 1 .45 1 1s-.45 1-1 1h-7c-.55 0-1-.45-1-1s.45-1 1-1h7m0-2h-7c-1.654 0-3 1.346-3 3s1.346 3 3 3h7c1.654 0 3-1.346 3-3s-1.346-3-3-3zM6 16h-2c-1.104 0-2 .896-2 2v2c0 1.104.896 2 2 2h2c1.104 0 2-.896 2-2v-2c0-1.104-.896-2-2-2zm0 4h-2v-2h2v2zM6 9h-2c-1.104 0-2 .896-2 2v2c0 1.104.896 2 2 2h2c1.104 0 2-.896 2-2v-2c0-1.104-.896-2-2-2zm0 4h-2v-2h2v2zM6 2h-2c-1.104 0-2 .896-2 2v2c0 1.104.896 2 2 2h2c1.104 0 2-.896 2-2v-2c0-1.104-.896-2-2-2zm0 4h-2v-2h2v2z"},"child":[]}]})(props);
};
function TiThList (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 17h-7c-1.103 0-2 .897-2 2s.897 2 2 2h7c1.103 0 2-.897 2-2s-.897-2-2-2zM19 10h-7c-1.103 0-2 .897-2 2s.897 2 2 2h7c1.103 0 2-.897 2-2s-.897-2-2-2zM19 3h-7c-1.103 0-2 .897-2 2s.897 2 2 2h7c1.103 0 2-.897 2-2s-.897-2-2-2z"},"child":[]},{"tag":"circle","attr":{"cx":"5","cy":"19","r":"2.5"},"child":[]},{"tag":"circle","attr":{"cx":"5","cy":"12","r":"2.5"},"child":[]},{"tag":"circle","attr":{"cx":"5","cy":"5","r":"2.5"},"child":[]}]})(props);
};
function TiThMenuOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 18c.55 0 1 .45 1 1s-.45 1-1 1h-14c-.55 0-1-.45-1-1s.45-1 1-1h14m0-2h-14c-1.654 0-3 1.346-3 3s1.346 3 3 3h14c1.654 0 3-1.346 3-3s-1.346-3-3-3zM19 11c.55 0 1 .45 1 1s-.45 1-1 1h-14c-.55 0-1-.45-1-1s.45-1 1-1h14m0-2h-14c-1.654 0-3 1.346-3 3s1.346 3 3 3h14c1.654 0 3-1.346 3-3s-1.346-3-3-3zM19 4c.55 0 1 .45 1 1s-.45 1-1 1h-14c-.55 0-1-.45-1-1s.45-1 1-1h14m0-2h-14c-1.654 0-3 1.346-3 3s1.346 3 3 3h14c1.654 0 3-1.346 3-3s-1.346-3-3-3z"},"child":[]}]})(props);
};
function TiThMenu (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 17h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 10h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 3h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2z"},"child":[]}]})(props);
};
function TiThSmallOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M6 16h-2c-1.104 0-2 .896-2 2v2c0 1.104.896 2 2 2h2c1.104 0 2-.896 2-2v-2c0-1.104-.896-2-2-2zm0 4h-2v-2h2v2zM6 9h-2c-1.104 0-2 .896-2 2v2c0 1.104.896 2 2 2h2c1.104 0 2-.896 2-2v-2c0-1.104-.896-2-2-2zm0 4h-2v-2h2v2zM6 2h-2c-1.104 0-2 .896-2 2v2c0 1.104.896 2 2 2h2c1.104 0 2-.896 2-2v-2c0-1.104-.896-2-2-2zm0 4h-2v-2h2v2zM13 16h-2c-1.104 0-2 .896-2 2v2c0 1.104.896 2 2 2h2c1.104 0 2-.896 2-2v-2c0-1.104-.896-2-2-2zm0 4h-2v-2h2v2zM13 9h-2c-1.104 0-2 .896-2 2v2c0 1.104.896 2 2 2h2c1.104 0 2-.896 2-2v-2c0-1.104-.896-2-2-2zm0 4h-2v-2h2v2zM13 2h-2c-1.104 0-2 .896-2 2v2c0 1.104.896 2 2 2h2c1.104 0 2-.896 2-2v-2c0-1.104-.896-2-2-2zm0 4h-2v-2h2v2zM20 16h-2c-1.104 0-2 .896-2 2v2c0 1.104.896 2 2 2h2c1.104 0 2-.896 2-2v-2c0-1.104-.896-2-2-2zm0 4h-2v-2h2v2zM20 9h-2c-1.104 0-2 .896-2 2v2c0 1.104.896 2 2 2h2c1.104 0 2-.896 2-2v-2c0-1.104-.896-2-2-2zm0 4h-2v-2h2v2zM20 2h-2c-1.104 0-2 .896-2 2v2c0 1.104.896 2 2 2h2c1.104 0 2-.896 2-2v-2c0-1.104-.896-2-2-2zm0 4h-2v-2h2v2z"},"child":[]}]})(props);
};
function TiThSmall (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"circle","attr":{"cx":"5","cy":"19","r":"2.5"},"child":[]},{"tag":"circle","attr":{"cx":"5","cy":"12","r":"2.5"},"child":[]},{"tag":"circle","attr":{"cx":"5","cy":"5","r":"2.5"},"child":[]},{"tag":"circle","attr":{"cx":"12","cy":"19","r":"2.5"},"child":[]},{"tag":"circle","attr":{"cx":"12","cy":"12","r":"2.5"},"child":[]},{"tag":"circle","attr":{"cx":"12","cy":"5","r":"2.5"},"child":[]},{"tag":"circle","attr":{"cx":"19","cy":"19","r":"2.5"},"child":[]},{"tag":"circle","attr":{"cx":"19","cy":"12","r":"2.5"},"child":[]},{"tag":"circle","attr":{"cx":"19","cy":"5","r":"2.5"},"child":[]}]})(props);
};
function TiThermometer (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M13 15.071v-5.571c0-.275-.225-.5-.5-.5s-.5.225-.5.5v5.571c-.86.224-1.5 1-1.5 1.929 0 1.103.896 2 2 2s2-.897 2-2c0-.929-.64-1.705-1.5-1.929zM16 13.459v-7.959c0-1.93-1.57-3.5-3.5-3.5s-3.5 1.57-3.5 3.5v7.959c-.922.902-1.5 2.151-1.5 3.541 0 2.757 2.243 5 5 5s5-2.243 5-5c0-1.39-.578-2.639-1.5-3.541zm-3.5 6.541c-1.654 0-3-1.346-3-3 0-1.105.607-2.062 1.5-2.583v-8.917c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5v8.917c.893.521 1.5 1.478 1.5 2.583 0 1.654-1.346 3-3 3z"},"child":[]}]}]})(props);
};
function TiThumbsDown (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17 5c-.755 0-1.438.289-1.965.751l-.188-.192c-.96-.737-3.665-1.559-5.847-1.559-1.879 0-2.607.293-3.252.552l-.316.124c-.834.305-1.578 1.229-1.738 2.2l-.664 5.972c-.174 1.039.441 2.127 1.4 2.478.394.144 2.512.405 3.883.56-.215 1.256-.312 2.405-.312 3.616 0 1.379 1.121 2.5 2.5 2.5s2.5-1.121 2.5-2.5c0-1.875.667-2.737 1.616-3.699.548.724 1.408 1.199 2.384 1.199 1.653 0 2.999-1.347 2.999-3v-6c-.001-1.656-1.346-3.002-3-3.002zm-6 14.5c0 .275-.225.5-.5.5s-.5-.225-.5-.5c0-1.805.256-3.241.479-4.293l.297-1.398-1.321.188c-.605-.05-3.934-.447-4.335-.552-.058-.028-.132-.18-.108-.321l.663-5.976c.037-.223.291-.539.443-.594l.377-.146c.544-.219 1.015-.408 2.506-.408 1.914 0 4.118.753 4.633 1.146.156.12.366.564.366.854v4.977c-.001.026-.04.649-.707 1.316-.913.913-2.293 2.293-2.293 5.207zm7-5.5c0 .552-.448 1-1 1s-1-.448-1-1v-6c0-.552.448-1 1-1s1 .448 1 1v6z"},"child":[]}]})(props);
};
function TiThumbsOk (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20.7 12.6c-.1-.3-.2-.6-.4-.9.3-.6.5-1 .3-1.9-.2-.8-.8-1.7-1.6-2.5l-1.7-.9.8-1.8c.4-.8.4-1.8-.1-2.5-.5-.8-1.4-1.3-2.3-1.3-1 0-1.8.6-2.3 1.5 0 0-.8-.2-1.8.1l-1.3 1.2s-1.7.5-2 2-.4 3.4-.8 4.1-2.5 3.3-3.7 4.7c-.9 1.1-.7 2.3.1 3.2l5 5c.8.8 2.7 1.1 4-.3 1.4-1.4.5-3.3.5-3.3.4-.3 1.5-1.2 2.6-1.5s2.8-.9 3.7-2.1c.8-1 1.2-1.8 1-2.8zm-9.3 8.3c-.4.4-1 .4-1.4 0l-4.2-4.2c-.2-.2-.3-.4-.3-.7s.1-.5.3-.7l.7-.7 4.9 4.9c.2.2.3.4.3.7 0 .3-.1.5-.3.7zm6.6-9.9c-.5 0-.7-.5-1.1-.9s-1.3-.5-2-.2-1 1-1 1.7c0 1 .7 1.9 1.7 1.9.7 0 .9-.1 1.3-.3.6-.4.8-.8 1.2-.8s.7.2.7.8-.6 1.3-1.2 1.7-1.1.5-1.7.6c-.6.1-1 .1-1.8.6-.7.4-1.4.9-1.8 1.3l-4.6-4.6c.9-1.1 1.7-2.3 1.8-2.9l.7-3.9c.1-.4.4-.5.6-.5.3 0 .6.2.7.4l.4-1.3c.1-.3.4-.5.6-.5.4 0 .8.3.7.8l-.5 2.4c.6-1.2 1.5-2.7 2.1-3.8.2-.3.4-.6.9-.6s.9.6.7 1.1c-.2.4-2 3.5-2.8 4.8-.1.1 0 .2.2.1.3-.2 1-.7 1.7-.7 1.2-.1 1.8.4 2.1.6.4.3.8.8 1.1 1.3.2.5-.2.9-.7.9zm-.2.7c-.4 0-.7.1-.9.4s-.6.7-1.1.7c-.7 0-1.1-.5-1.1-1.1s.4-1 1.1-1c.5 0 .9.4 1.1.7s.5.3.9.3z"},"child":[]}]})(props);
};
function TiThumbsUp (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19.57 8.676c-.391-.144-2.512-.406-3.883-.56.215-1.255.313-2.405.313-3.616 0-1.379-1.122-2.5-2.5-2.5s-2.5 1.121-2.5 2.5c0 1.875-.666 2.738-1.616 3.699-.548-.722-1.407-1.199-2.384-1.199-1.654 0-3 1.346-3 3v6c0 1.654 1.346 3 3 3 .755 0 1.438-.29 1.965-.752l.188.193c.96.736 3.667 1.559 5.848 1.559 1.879 0 2.608-.293 3.253-.553l.316-.123c.834-.305 1.576-1.227 1.736-2.2l.666-5.974c.173-1.037-.443-2.125-1.402-2.474zm-12.57 8.324c-.551 0-1-.448-1-1v-6c0-.552.449-1 1-1s1 .448 1 1v6c0 .552-.449 1-1 1zm11.327-.15c-.037.224-.292.541-.443.596l-.376.146c-.545.219-1.016.408-2.508.408-1.914 0-4.118-.753-4.632-1.146-.158-.12-.368-.564-.368-.854v-4.98c.003-.047.051-.656.707-1.312.913-.914 2.293-2.294 2.293-5.208 0-.275.225-.5.5-.5s.5.225.5.5c0 1.407-.146 2.73-.479 4.293l-.297 1.396 1.321-.188c.603.05 3.933.447 4.334.55.058.03.132.183.111.323l-.663 5.976z"},"child":[]}]})(props);
};
function TiTickOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11 20c-.801 0-1.555-.312-2.121-.879l-4-4c-.567-.566-.879-1.32-.879-2.121s.312-1.555.879-2.122c1.133-1.133 3.109-1.133 4.242 0l1.188 1.188 3.069-5.523c.526-.952 1.533-1.544 2.624-1.544.507 0 1.012.131 1.456.378.7.39 1.206 1.028 1.427 1.798.221.771.127 1.581-.263 2.282l-5 9c-.454.818-1.279 1.384-2.206 1.514-.139.019-.277.029-.416.029zm-4-8c-.268 0-.518.104-.707.293s-.293.439-.293.707.104.518.293.707l4 4c.223.221.523.33.844.283.312-.043.586-.232.737-.504l5-9c.13-.233.161-.503.088-.76-.073-.257-.243-.47-.478-.6-.473-.264-1.101-.078-1.357.388l-4.357 7.841-3.062-3.062c-.19-.189-.44-.293-.708-.293z"},"child":[]}]})(props);
};
function TiTick (props) {
  return iconBase_GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"},"child":[]}]})(props);
};
function TiTicket (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M21.485 8.071l-5.364-5.364c-1.128-1.128-3.111-1.136-4.248-.018l-9.148 9.002c-.571.562-.887 1.313-.891 2.115-.003.803.307 1.556.873 2.121l5.365 5.365c.567.567 1.325.88 2.133.88.799 0 1.551-.307 2.115-.862l9.147-9.003c.571-.562.888-1.313.891-2.115.003-.802-.307-1.555-.873-2.121zm-1.421 2.811l-9.146 9.003c-.381.373-1.056.37-1.432-.006l-1.275-1.275c.71-.785.693-1.994-.062-2.752-.758-.757-1.968-.773-2.752-.063l-1.275-1.274c-.186-.187-.288-.435-.287-.699s.105-.513.293-.697l9.148-9.002c.189-.186.441-.288.713-.288.273 0 .529.104.719.294l1.275 1.275c-.711.785-.694 1.994.062 2.751.758.757 1.967.773 2.752.063l1.274 1.274c.187.187.288.435.287.699s-.105.512-.294.697zM11.601 17.042l-4.657-4.656 5.649-5.429 4.657 4.656-5.649 5.429zm-3.23-4.643l3.243 3.242 4.206-4.041-3.241-3.242-4.208 4.041z"},"child":[]}]}]})(props);
};
function TiTime (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M16 13c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1zM12 6c3.859 0 7 3.141 7 7s-3.141 7-7 7-7-3.141-7-7 3.141-7 7-7m0-2c-4.971 0-9 4.029-9 9s4.029 9 9 9 9-4.029 9-9-4.029-9-9-9zM13 10c0-.55-.45-1-1-1s-1 .45-1 1v3c0 .55.45 1 1 1s1-.45 1-1v-3zM12 8c2.757 0 5 2.243 5 5s-2.243 5-5 5-5-2.243-5-5 2.243-5 5-5m0-1c-3.312 0-6 2.686-6 6 0 3.312 2.688 6 6 6s6-2.688 6-6c0-3.314-2.688-6-6-6z"},"child":[]}]})(props);
};
function TiTimesOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M16 19c-.802 0-1.555-.312-2.122-.879l-1.878-1.879-1.879 1.879c-1.133 1.133-3.109 1.133-4.243 0-.566-.566-.878-1.32-.878-2.121s.312-1.555.879-2.122l1.878-1.878-1.878-1.879c-.567-.566-.879-1.32-.879-2.121s.312-1.555.879-2.122c1.133-1.132 3.109-1.133 4.243.001l1.878 1.879 1.879-1.879c1.133-1.133 3.109-1.133 4.243 0 .566.566.878 1.32.878 2.121s-.312 1.555-.879 2.122l-1.878 1.878 1.878 1.879c.567.566.879 1.32.879 2.121s-.312 1.555-.879 2.122c-.566.566-1.319.878-2.121.878zm-4-5.586l3.293 3.293c.378.378 1.037.377 1.414 0 .189-.189.293-.439.293-.707s-.104-.518-.293-.707l-3.292-3.293 3.292-3.293c.189-.189.293-.44.293-.707s-.104-.518-.293-.707c-.378-.379-1.037-.378-1.414-.001l-3.293 3.294-3.293-3.293c-.378-.378-1.037-.377-1.414 0-.189.189-.293.44-.293.707s.104.518.293.707l3.292 3.293-3.292 3.293c-.189.189-.293.439-.293.707s.104.518.293.707c.378.379 1.037.378 1.414.001l3.293-3.294z"},"child":[]}]})(props);
};
function TiTimes (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17.414 6.586c-.78-.781-2.048-.781-2.828 0l-2.586 2.586-2.586-2.586c-.78-.781-2.048-.781-2.828 0-.781.781-.781 2.047 0 2.828l2.585 2.586-2.585 2.586c-.781.781-.781 2.047 0 2.828.39.391.902.586 1.414.586s1.024-.195 1.414-.586l2.586-2.586 2.586 2.586c.39.391.902.586 1.414.586s1.024-.195 1.414-.586c.781-.781.781-2.047 0-2.828l-2.585-2.586 2.585-2.586c.781-.781.781-2.047 0-2.828z"},"child":[]}]})(props);
};
function TiTrash (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M18 7h-1v-1c0-1.104-.896-2-2-2h-7c-1.104 0-2 .896-2 2v1h-1c-.552 0-1 .448-1 1s.448 1 1 1v8c0 2.206 1.794 4 4 4h5c2.206 0 4-1.794 4-4v-8c.552 0 1-.448 1-1s-.448-1-1-1zm-10-1h7v1h-7v-1zm8 11c0 1.104-.896 2-2 2h-5c-1.104 0-2-.896-2-2v-8h9v8zM8.5 10.5c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5zM10.5 10.5c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5zM12.5 10.5c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5zM14.5 10.5c-.275 0-.5.225-.5.5v6c0 .275.225.5.5.5s.5-.225.5-.5v-6c0-.275-.225-.5-.5-.5z"},"child":[]}]})(props);
};
function TiTree (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20.781 17.375l-2.7-3.375h.919c.373 0 .715-.207.887-.538.172-.331.146-.729-.068-1.035l-7-10c-.317-.452-.94-.562-1.393-.246-.091.063-.158.146-.221.231-.025.015-7.025 10.015-7.025 10.015-.214.306-.24.704-.068 1.035.173.331.515.538.888.538h.919l-2.7 3.375c-.24.301-.287.712-.121 1.059.167.345.518.566.902.566h7v3c0 .553.448 1 1 1s1-.447 1-1v-3h7c.384 0 .735-.221.901-.566.167-.347.12-.758-.12-1.059zm-7.781-.375v-5c0-.553-.448-1-1-1s-1 .447-1 1v5h-4.919l2.7-3.375c.24-.301.287-.712.121-1.059-.167-.345-.518-.566-.902-.566h-1.08l5.08-7.256 5.08 7.256h-1.08c-.384 0-.735.221-.901.566-.167.347-.12.758.121 1.059l2.7 3.375h-4.92z"},"child":[]}]})(props);
};
function TiUploadOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20.986 17c0-.105-.004-.211-.038-.316l-2-6c-.093-.276-.302-.483-.56-.594.881-1.175.799-2.847-.269-3.914l-6.119-6.121-6.121 6.121c-1.067 1.067-1.149 2.739-.27 3.914-.256.109-.467.316-.559.594l-2 6c-.034.105-.038.211-.038.316-.012 0-.012 5-.012 5 0 .553.447 1 1 1h16c.553 0 1-.447 1-1 0 0 0-5-.014-5zm-13.693-9.41l4.707-4.707 4.707 4.707c.391.391.391 1.023 0 1.414-.379.377-1.035.377-1.414 0l-2.293-2.293v5.789c0 .552-.448 1-1 1s-1-.448-1-1v-5.789l-2.293 2.293c-.379.377-1.035.377-1.414 0-.391-.391-.391-1.025 0-1.414zm-.572 4.41h2.279v.5c0 1.654 1.346 3 3 3s3-1.346 3-3v-.5h2.279l1.666 5h-13.892l1.668-5zm-1.721 9v-3h14v3h-14z"},"child":[]}]})(props);
};
function TiUpload (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20.987 16c0-.105-.004-.211-.039-.316l-2-6c-.136-.409-.517-.684-.948-.684h-4v2h3.279l1.667 5h-13.892l1.667-5h3.279v-2h-4c-.431 0-.812.275-.948.684l-2 6c-.035.105-.039.211-.039.316-.013 0-.013 5-.013 5 0 .553.447 1 1 1h16c.553 0 1-.447 1-1 0 0 0-5-.013-5zM16 7.904c.259 0 .518-.095.707-.283.39-.39.39-1.024 0-1.414l-4.707-4.707-4.707 4.707c-.39.39-.39 1.024 0 1.414.189.189.448.283.707.283s.518-.094.707-.283l2.293-2.293v6.672c0 .552.448 1 1 1s1-.448 1-1v-6.672l2.293 2.293c.189.189.448.283.707.283z"},"child":[]}]})(props);
};
function TiUserAddOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 14h-6c-.553 0-1-.448-1-1s.447-1 1-1h6c.553 0 1 .448 1 1s-.447 1-1 1zM18 17c-.553 0-1-.448-1-1v-6c0-.552.447-1 1-1s1 .448 1 1v6c0 .552-.447 1-1 1zM9 6c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3m0-2c-2.764 0-5 2.238-5 5s2.236 5 5 5 5-2.238 5-5-2.236-5-5-5zM9 17c2.021 0 3.301.771 3.783 1.445-.683.26-1.969.555-3.783.555-1.984 0-3.206-.305-3.818-.542.459-.715 1.777-1.458 3.818-1.458m0-2c-3.75 0-6 2-6 4 0 1 2.25 2 6 2 3.518 0 6-1 6-2 0-2-2.354-4-6-4z"},"child":[]}]})(props);
};
function TiUserAdd (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M9 14c1.381 0 2.631-.56 3.536-1.465.904-.904 1.464-2.154 1.464-3.535s-.56-2.631-1.464-3.535c-.905-.905-2.155-1.465-3.536-1.465s-2.631.56-3.536 1.465c-.904.904-1.464 2.154-1.464 3.535s.56 2.631 1.464 3.535c.905.905 2.155 1.465 3.536 1.465zM9 21c3.518 0 6-1 6-2 0-2-2.354-4-6-4-3.75 0-6 2-6 4 0 1 2.25 2 6 2zM21 12h-2v-2c0-.553-.447-1-1-1s-1 .447-1 1v2h-2c-.553 0-1 .447-1 1s.447 1 1 1h2v2c0 .553.447 1 1 1s1-.447 1-1v-2h2c.553 0 1-.447 1-1s-.447-1-1-1z"},"child":[]}]})(props);
};
function TiUserDeleteOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 14h-6c-.553 0-1-.448-1-1s.447-1 1-1h6c.553 0 1 .448 1 1s-.447 1-1 1zM9 6c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3m0-2c-2.764 0-5 2.238-5 5s2.236 5 5 5 5-2.238 5-5-2.236-5-5-5zM9 17c2.021 0 3.301.771 3.783 1.445-.683.26-1.969.555-3.783.555-1.984 0-3.206-.305-3.818-.542.459-.715 1.777-1.458 3.818-1.458m0-2c-3.75 0-6 2-6 4 0 1 2.25 2 6 2 3.518 0 6-1 6-2 0-2-2.354-4-6-4z"},"child":[]}]})(props);
};
function TiUserDelete (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21 14h-6c-.553 0-1-.447-1-1s.447-1 1-1h6c.553 0 1 .447 1 1s-.447 1-1 1zM14 9c0 1.381-.56 2.631-1.464 3.535-.905.905-2.155 1.465-3.536 1.465s-2.631-.56-3.536-1.465c-.904-.904-1.464-2.154-1.464-3.535s.56-2.631 1.464-3.535c.905-.905 2.155-1.465 3.536-1.465s2.631.56 3.536 1.465c.904.904 1.464 2.154 1.464 3.535zM9 15c-3.75 0-6 2-6 4 0 1 2.25 2 6 2 3.518 0 6-1 6-2 0-2-2.354-4-6-4z"},"child":[]}]})(props);
};
function TiUserOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 6c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3m0-2c-2.764 0-5 2.238-5 5s2.236 5 5 5 5-2.238 5-5-2.236-5-5-5zM12 17c2.021 0 3.301.771 3.783 1.445-.683.26-1.969.555-3.783.555-1.984 0-3.206-.305-3.818-.542.459-.715 1.777-1.458 3.818-1.458m0-2c-3.75 0-6 2-6 4 0 1 2.25 2 6 2 3.518 0 6-1 6-2 0-2-2.354-4-6-4z"},"child":[]}]})(props);
};
function TiUser (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17 9c0-1.381-.56-2.631-1.464-3.535-.905-.905-2.155-1.465-3.536-1.465s-2.631.56-3.536 1.465c-.904.904-1.464 2.154-1.464 3.535s.56 2.631 1.464 3.535c.905.905 2.155 1.465 3.536 1.465s2.631-.56 3.536-1.465c.904-.904 1.464-2.154 1.464-3.535zM6 19c0 1 2.25 2 6 2 3.518 0 6-1 6-2 0-2-2.354-4-6-4-3.75 0-6 2-6 4z"},"child":[]}]})(props);
};
function TiVendorAndroid (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M7.1 8h9.799999999999999c.1 0 .1 0 .1-.1-.1-.5-.2-.9-.4-1.3-.4-.9-1.1-1.5-1.9-2l-.4-.2s0-.1.1-.1c.3-.4.6-.8.9-1.3.1-.1.1-.2 0-.3-.1-.1-.2 0-.3.1l-.9 1.3s-.1.1-.1 0c-.8-.3-1.6-.4-2.4-.4-.6 0-1.1.2-1.6.4h-.1l-.9-1.2s0-.1-.1-.1c-.1-.1-.2-.1-.2 0-.1 0-.1.1 0 .2 0 0 0 .1.1.1.2.4.5.8.8 1.2l.1.1h-.1c-.6.3-1.1.7-1.5 1.2-.6.6-1 1.4-1.1 2.3 0 .1 0 .1.1.1zm7.1-2.8c.4 0 .8.3.8.8 0 .4-.3.8-.7.8-.4 0-.8-.3-.8-.8-.1-.4.3-.8.7-.8zm-4.3 0c.4 0 .8.3.8.8 0 .4-.3.8-.7.8-.5 0-.9-.4-.9-.8s.4-.8.8-.8zM5 9c-.5 0-1 .5-1 1v5c0 .5.5 1 1 1s1-.5 1-1v-5c0-.5-.5-1-1-1zM19 9c-.5 0-1 .5-1 1v5c0 .5.5 1 1 1s1-.5 1-1v-5c0-.5-.5-1-1-1zM7 17c0 .5.5 1 1 1h1v3c0 .5.5 1 1 1s1-.5 1-1v-3h2v3c0 .5.5 1 1 1s1-.5 1-1v-3h1c.5 0 1-.5 1-1v-8h-10v8z"},"child":[]}]})(props);
};
function TiVendorApple (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M11.9 6.6s-.1-1.6.9-3l2.8-1.6s.1 1.6-.9 3l-2.8 1.6zM17.3 12.2c0-1.5.8-2.8 2-3.6l-.9-.9c-.5-.3-1.1-.7-2.4-.7-1.4 0-2.4.9-3.7.9-1.3 0-2.2-.8-3.1-.9-.7 0-1.4 0-2.1.3-.5.2-1.2.7-1.6 1.2-.6.6-1.2 1.9-1.3 3.1-.1 1.2-.1 2.1.2 3.2.2.9.6 1.8 1 2.6.3.6.6 1.2 1 1.8.3.4.7.8 1.1 1.1.3.2.6.4 1 .6.2 0 .5.1.8.1.6-.1 1.6-.9 2.4-1.1.4-.1.8-.1 1.3 0 .7.1 1.4.9 2.2 1 .6.1 1.2 0 1.7-.3.4-.2.7-.5 1-.9.4-.4.7-.9 1-1.3.4-.7.9-1.5 1.1-2.3-1.6-.6-2.7-2.1-2.7-3.9z"},"child":[]}]})(props);
};
function TiVendorMicrosoft (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M10 12.5c0-.3-.2-.5-.5-.5h-6c-.3 0-.5.2-.5.5v5c0 .3.2.5.5.6l6 .7c.3 0 .5-.2.5-.4v-5.9zM11.5 12c-.3 0-.5.2-.5.5v5.9c0 .3.2.5.5.6l9 1c.3 0 .5-.2.5-.4v-7c0-.3-.2-.5-.5-.5l-9-.1zM10 4.7c0-.3-.2-.5-.5-.4l-6 .7c-.3 0-.5.2-.5.5v5c0 .3.2.5.5.5h6c.3 0 .5-.2.5-.5v-5.8zM11.5 4.1c-.3 0-.5.3-.5.6v5.9c0 .3.2.5.5.5h9c.3 0 .5-.2.5-.5v-7c0-.3-.2-.5-.5-.4l-9 .9z"},"child":[]}]})(props);
};
function TiVideoOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"circle","attr":{"cx":"7","cy":"11","r":"1"},"child":[]},{"tag":"path","attr":{"d":"M21.585 7.188c-.262-.188-.599-.241-.901-.137l-1.707.568c-.188-1.477-1.451-2.62-2.977-2.62h-11c-1.654 0-3 1.347-3 3v6c0 1.653 1.346 3 3 3h3v1.111l.008.09c.066.738.381 1.423.887 1.928.562.562 1.311.872 2.104.872s1.542-.31 2.104-.87c.574-.577.898-1.346.896-2.113v-1.017h2c1.524 0 2.789-1.145 2.978-2.62l1.707.568c.303.104.64.051.9-.138.262-.188.415-.49.415-.812v-6c.001-.318-.153-.621-.414-.81zm-9.585 10.835c.001.248-.119.5-.309.689-.191.189-.441.286-.692.286-.25 0-.501-.097-.69-.286-.19-.189-.285-.441-.309-.691v-2.021h2v2.023zm5-4.023c0 .552-.448 1-1 1h-11c-.552 0-1-.448-1-1v-6c0-.552.448-1 1-1h11c.552 0 1 .448 1 1v6zm3-1.389s-1.895-.605-2-.605v-2.012c.105 0 2-.605 2-.605v3.222z"},"child":[]}]})(props);
};
function TiVideo (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M22.525 7.149c-.16-.099-.342-.149-.525-.149-.153 0-.306.035-.447.105l-2.553 1.277v-.382c0-1.654-1.346-3-3-3h-11c-1.654 0-3 1.346-3 3v8c0 1.654 1.346 3 3 3h11c1.654 0 3-1.346 3-3v-.382l2.553 1.276c.141.071.294.106.447.106.183 0 .365-.05.525-.149.295-.183.475-.504.475-.851v-8c0-.347-.18-.668-.475-.851zm-15.525 6.351c-.829 0-1.5-.671-1.5-1.5s.671-1.5 1.5-1.5 1.5.671 1.5 1.5-.671 1.5-1.5 1.5z"},"child":[]}]})(props);
};
function TiVolumeDown (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M15.138 5.824c-.449 0-.905.152-1.356.453l-2.672 1.781c-.753.503-2.206.942-3.11.942-1.654 0-3 1.346-3 3v2c0 1.654 1.346 3 3 3 .904 0 2.357.439 3.109.941l2.672 1.781c.451.301.907.453 1.356.453.898.001 1.863-.68 1.863-2.175v-10c0-1.495-.965-2.176-1.862-2.176zm-7.138 9.176c-.552 0-1-.448-1-1v-2c0-.552.448-1 1-1 1.211 0 2.907-.495 4-1.146v6.293c-1.093-.652-2.789-1.147-4-1.147zm7 3l-.006.12-.104-.062-1.89-1.26v-7.596l1.891-1.261.104-.062.005.121v10zM18.292 10.294c-.39.391-.39 1.023.002 1.414.345.345.535.803.535 1.291 0 .489-.19.948-.536 1.294-.391.39-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293c.724-.723 1.122-1.685 1.122-2.708s-.398-1.984-1.123-2.707c-.389-.389-1.023-.391-1.414.002z"},"child":[]}]}]})(props);
};
function TiVolumeMute (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19.707 5.293c-.391-.391-1.023-.391-1.414 0l-1.551 1.551c-.345-.688-.987-1.02-1.604-1.02-.449 0-.905.152-1.356.453l-2.672 1.781c-.753.503-2.206.942-3.11.942-1.654 0-3 1.346-3 3v2c0 1.237.754 2.302 1.826 2.76l-1.533 1.533c-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293l2.527-2.527c.697.174 1.416.455 1.875.762l2.672 1.781c.451.301.907.453 1.356.453.898 0 1.863-.681 1.863-2.176v-8.586l2.707-2.707c.391-.391.391-1.023 0-1.414zm-4.816 2.648l.104-.062.005.121v1.293l-2 2v-2.091l1.891-1.261zm-7.891 4.059c0-.552.448-1 1-1 1.211 0 2.907-.495 4-1.146v2.439l-2.83 2.83c-.413-.077-.814-.123-1.17-.123-.552 0-1-.448-1-1v-2zm3.301 3.406l1.699-1.699v2.439c-.481-.287-1.075-.542-1.699-.74zm4.693 2.714l-.104-.062-1.89-1.26v-4.091l2-2v7.293l-.006.12z"},"child":[]}]})(props);
};
function TiVolumeUp (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M16.706 10.292c-.389-.389-1.023-.391-1.414.002-.39.391-.39 1.023.002 1.414.345.345.535.803.535 1.291 0 .489-.19.948-.536 1.294-.391.39-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293c.724-.723 1.122-1.685 1.122-2.708s-.398-1.984-1.123-2.707zM18.706 8.292c-.391-.389-1.023-.39-1.414.002-.39.391-.39 1.024.002 1.414.879.877 1.363 2.044 1.364 3.287.001 1.246-.484 2.417-1.365 3.298-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293c1.259-1.259 1.952-2.933 1.951-4.713-.001-1.777-.694-3.447-1.952-4.702zM20.706 6.292c-.391-.389-1.023-.39-1.414.002-.39.391-.39 1.024.002 1.414 1.412 1.409 2.191 3.285 2.192 5.284.002 2.002-.777 3.885-2.193 5.301-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293c1.794-1.794 2.781-4.18 2.779-6.717-.001-2.533-.989-4.912-2.78-6.698zM12.138 5.824c-.449 0-.905.152-1.356.453l-2.673 1.782c-.752.502-2.205.941-3.109.941-1.654 0-3 1.346-3 3v2c0 1.654 1.346 3 3 3 .904 0 2.357.439 3.109.941l2.672 1.781c.451.301.907.453 1.356.453.898.001 1.863-.68 1.863-2.175v-10c0-1.495-.965-2.176-1.862-2.176zm-7.138 9.176c-.552 0-1-.448-1-1v-2c0-.552.448-1 1-1 1.211 0 2.907-.495 4-1.146v6.293c-1.093-.652-2.789-1.147-4-1.147zm7 3l-.006.12-.104-.062-1.89-1.26v-7.596l1.891-1.261.104-.062.005.121v10z"},"child":[]}]}]})(props);
};
function TiVolume (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17.138 5.824c-.449 0-.905.152-1.356.453l-2.672 1.781c-.753.503-2.206.942-3.11.942-1.654 0-3 1.346-3 3v2c0 1.654 1.346 3 3 3 .904 0 2.357.439 3.109.941l2.672 1.781c.451.301.907.453 1.356.453.898.001 1.863-.68 1.863-2.175v-10c0-1.495-.965-2.176-1.862-2.176zm-3.138 10.322c-1.093-.651-2.789-1.146-4-1.146-.552 0-1-.448-1-1v-2c0-.552.448-1 1-1 1.211 0 2.907-.495 4-1.146v6.292zm3 1.854l-.006.12-.104-.062-1.89-1.26v-7.596l1.891-1.261.104-.062.005.121v10z"},"child":[]}]})(props);
};
function TiWarningOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 5.511c.561 0 1.119.354 1.544 1.062l5.912 9.854c.851 1.415.194 2.573-1.456 2.573h-12c-1.65 0-2.307-1.159-1.456-2.573l5.912-9.854c.425-.708.983-1.062 1.544-1.062m0-2c-1.296 0-2.482.74-3.259 2.031l-5.912 9.856c-.786 1.309-.872 2.705-.235 3.83s1.879 1.772 3.406 1.772h12c1.527 0 2.77-.646 3.406-1.771s.551-2.521-.235-3.83l-5.912-9.854c-.777-1.294-1.963-2.034-3.259-2.034z"},"child":[]},{"tag":"circle","attr":{"cx":"12","cy":"16","r":"1.3"},"child":[]},{"tag":"path","attr":{"d":"M13.5 10c0-.83-.671-1.5-1.5-1.5s-1.5.67-1.5 1.5c0 .199.041.389.111.562.554 1.376 1.389 3.438 1.389 3.438l1.391-3.438c.068-.173.109-.363.109-.562z"},"child":[]}]})(props);
};
function TiWarning (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21.171 15.398l-5.912-9.854c-.776-1.293-1.963-2.033-3.259-2.033s-2.483.74-3.259 2.031l-5.912 9.856c-.786 1.309-.872 2.705-.235 3.83.636 1.126 1.878 1.772 3.406 1.772h12c1.528 0 2.77-.646 3.406-1.771.637-1.125.551-2.521-.235-3.831zm-9.171 2.151c-.854 0-1.55-.695-1.55-1.549 0-.855.695-1.551 1.55-1.551s1.55.696 1.55 1.551c0 .854-.696 1.549-1.55 1.549zm1.633-7.424c-.011.031-1.401 3.468-1.401 3.468-.038.094-.13.156-.231.156s-.193-.062-.231-.156l-1.391-3.438c-.09-.233-.129-.443-.129-.655 0-.965.785-1.75 1.75-1.75s1.75.785 1.75 1.75c0 .212-.039.422-.117.625z"},"child":[]}]})(props);
};
function TiWatch (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 13h2c.55 0 1-.45 1-1s-.45-1-1-1h-1v-1c0-.55-.45-1-1-1s-1 .45-1 1v2c0 .55.45 1 1 1zM17 7.105v-2.105c0-1.654-1.346-3-3-3h-4c-1.654 0-3 1.346-3 3v2.105c-1.236 1.263-2 2.989-2 4.895s.764 3.632 2 4.895v2.105c0 1.654 1.346 3 3 3h4c1.654 0 3-1.346 3-3v-2.105c1.236-1.262 2-2.988 2-4.895s-.764-3.632-2-4.895zm-8-2.105c0-.551.449-1 1-1h4c.551 0 1 .449 1 1v1.809c-.883-.512-1.906-.809-3-.809s-2.117.297-3 .809v-1.809zm6 14c0 .551-.449 1-1 1h-4c-.551 0-1-.449-1-1v-1.811c.883.513 1.906.811 3 .811s2.117-.298 3-.811v1.811zm-3-2c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"},"child":[]}]})(props);
};
function TiWavesOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20.221 10.761c.498-.552.779-1.252.779-2 0-.801-.312-1.555-.879-2.121-.566-.567-1.32-.879-2.121-.879s-1.555.312-2.121.879c-.233.232-.546.361-.879.361-.333 0-.646-.129-.879-.362-1.366-1.366-3.185-2.118-5.121-2.118s-3.755.752-5.121 2.118c-.567.567-.879 1.321-.879 2.122 0 .748.281 1.448.779 2-.498.551-.779 1.252-.779 2s.281 1.448.779 2c-.498.551-.779 1.252-.779 2 0 .801.312 1.555.879 2.121.566.566 1.32.879 2.121.879s1.555-.312 2.121-.879c.234-.233.545-.362.878-.362.333 0 .646.129.88.363 1.367 1.365 3.185 2.117 5.121 2.117 1.937 0 3.755-.752 5.121-2.118.567-.567.879-1.32.879-2.121 0-.748-.281-1.448-.779-2 .498-.552.779-1.252.779-2s-.281-1.449-.779-2zm-1.514 6.707c-1.021 1.021-2.364 1.532-3.707 1.532-1.342 0-2.685-.511-3.707-1.532-.633-.632-1.463-.948-2.293-.948-.831 0-1.661.316-2.292.948-.196.195-.452.293-.708.293s-.512-.098-.707-.293c-.391-.391-.391-1.023 0-1.414 1.021-1.021 2.364-1.532 3.706-1.532 1.343 0 2.686.511 3.708 1.532.632.632 1.463.947 2.293.947.831 0 1.661-.315 2.293-.947.195-.195.451-.293.707-.293s.512.098.707.293c.391.39.391 1.023 0 1.414zm-13.414-9.414c1.021-1.022 2.365-1.533 3.707-1.533 1.343 0 2.685.511 3.707 1.532.632.633 1.463.948 2.293.948.831 0 1.661-.315 2.293-.947.195-.196.451-.293.707-.293s.512.098.707.293c.391.391.391 1.023 0 1.414-1.021 1.021-2.364 1.532-3.707 1.532-1.342 0-2.685-.511-3.707-1.532-.633-.632-1.463-.948-2.293-.948-.831 0-1.661.316-2.292.948-.196.195-.452.293-.708.293s-.512-.098-.707-.293c-.391-.391-.391-1.024 0-1.414zm13.414 5.414c-1.021 1.021-2.364 1.532-3.707 1.532-1.342 0-2.685-.511-3.707-1.532-.633-.632-1.463-.948-2.293-.948-.831 0-1.661.316-2.292.948-.196.195-.452.293-.708.293s-.512-.098-.707-.293c-.391-.391-.391-1.023 0-1.414 1.021-1.021 2.364-1.532 3.706-1.532 1.343 0 2.686.511 3.708 1.532.632.632 1.463.947 2.293.947.831 0 1.661-.315 2.293-.947.195-.195.451-.293.707-.293s.512.098.707.293c.391.39.391 1.023 0 1.414z"},"child":[]}]})(props);
};
function TiWaves (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M15 19c-1.342 0-2.685-.511-3.707-1.532-1.266-1.265-3.323-1.264-4.586 0-.391.391-1.023.391-1.414 0s-.391-1.023 0-1.414c2.043-2.043 5.369-2.043 7.414 0 1.265 1.264 3.322 1.263 4.586 0 .391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414c-1.021 1.021-2.364 1.532-3.707 1.532zM15 15c-1.342 0-2.685-.511-3.707-1.532-1.266-1.265-3.323-1.264-4.586 0-.391.391-1.023.391-1.414 0s-.391-1.023 0-1.414c2.043-2.043 5.369-2.043 7.414 0 1.265 1.264 3.322 1.263 4.586 0 .391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414c-1.021 1.021-2.364 1.532-3.707 1.532zM15 11c-1.342 0-2.685-.511-3.707-1.532-1.266-1.265-3.323-1.264-4.586 0-.391.391-1.023.391-1.414 0s-.391-1.023 0-1.414c2.043-2.042 5.369-2.044 7.414 0 1.265 1.264 3.322 1.263 4.586 0 .391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414c-1.021 1.021-2.364 1.532-3.707 1.532z"},"child":[]}]})(props);
};
function TiWeatherCloudy (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17 19h-11c-2.206 0-4-1.794-4-4 0-1.861 1.277-3.429 3.001-3.874l-.001-.126c0-3.309 2.691-6 6-6 2.587 0 4.824 1.638 5.65 4.015 2.942-.246 5.35 2.113 5.35 4.985 0 2.757-2.243 5-5 5zm-11.095-6.006c-1.008.006-1.905.903-1.905 2.006s.897 2 2 2h11c1.654 0 3-1.346 3-3s-1.346-3-3-3c-.243 0-.5.041-.81.13l-1.075.307-.186-1.103c-.325-1.932-1.977-3.334-3.929-3.334-2.206 0-4 1.794-4 4 0 .272.027.545.082.811l.244 1.199-1.421-.016z"},"child":[]}]})(props);
};
function TiWeatherDownpour (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M15 22c-.552 0-1-.447-1-1v-6c0-.553.448-1 1-1s1 .447 1 1v6c0 .553-.448 1-1 1zM9 22c-.552 0-1-.447-1-1v-6c0-.553.448-1 1-1s1 .447 1 1v6c0 .553-.448 1-1 1zM12 24c-.552 0-1-.447-1-1v-6c0-.553.448-1 1-1s1 .447 1 1v6c0 .553-.448 1-1 1zM6 18c-2.206 0-4-1.794-4-4 0-1.861 1.277-3.429 3.001-3.874l-.001-.126c0-3.309 2.691-6 6-6 2.587 0 4.824 1.639 5.65 4.015 2.936-.244 5.35 2.113 5.35 4.985 0 2.241-1.507 4.223-3.666 4.819-.535.146-1.083-.166-1.23-.697-.147-.532.165-1.083.698-1.23 1.294-.358 2.198-1.547 2.198-2.892 0-1.654-1.346-3-3-3-.242 0-.499.041-.811.13l-1.074.306-.185-1.102c-.326-1.932-1.978-3.334-3.93-3.334-2.206 0-4 1.794-4 4 0 .272.027.545.082.808l.248 1.202-1.422-.016c-1.011.006-1.908.903-1.908 2.006s.897 2 2 2c.552 0 1 .447 1 1s-.448 1-1 1z"},"child":[]}]}]})(props);
};
function TiWeatherNight (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M10.5 20c-.861 0-1.71-.151-2.523-.451l-1.317-.485.89-1.087c1.275-1.56 1.95-3.454 1.95-5.477s-.675-3.917-1.951-5.477l-.89-1.087 1.317-.485c.814-.3 1.663-.451 2.524-.451 4.136 0 7.5 3.364 7.5 7.5s-3.364 7.5-7.5 7.5zm-.509-2.024c.169.016.339.024.509.024 3.032 0 5.5-2.468 5.5-5.5s-2.468-5.5-5.5-5.5c-.17 0-.34.008-.509.024.991 1.645 1.509 3.511 1.509 5.476s-.518 3.831-1.509 5.476z"},"child":[]}]})(props);
};
function TiWeatherPartlySunny (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M14.5 3l-1 3-1-3c-.184-.553.114-1.149.666-1.333.553-.185 1.15.114 1.334.666.075.226.07.458 0 .667zM19.864 6.05l-2.829 1.415 1.415-2.829c.261-.521.894-.731 1.414-.472.521.261.731.894.472 1.415-.107.212-.274.372-.472.471zM21.5 12l-3-1 3-1c.553-.185 1.149.114 1.334.667.184.552-.115 1.148-.668 1.333-.225.075-.457.069-.666 0zM8.55 4.636l1.415 2.829-2.829-1.415c-.521-.261-.732-.894-.472-1.414.261-.521.895-.731 1.414-.472.213.107.373.274.472.472zM17.776 12.342c.139-.424.224-.871.224-1.342 0-2.481-2.019-4.5-4.5-4.5-1.34 0-2.537.594-3.357 1.528l-.143-.028c-1.776 0-3.369.78-4.469 2.011-.24-.08-.472-.086-.697-.011-.553.185-.852.781-.668 1.333.057.167.158.299.277.411-.283.697-.443 1.458-.443 2.256l.002.126c-1.725.445-3.002 2.013-3.002 3.874 0 2.206 1.795 4 4 4h11c2.757 0 5-2.243 5-5 0-2.129-1.344-3.939-3.224-4.658zm-4.276-3.842c1.379 0 2.5 1.121 2.5 2.5 0 .366-.096.706-.238 1.019-.354.021-.72.074-1.118.188-.521-1.353-1.604-2.415-2.967-2.905.456-.49 1.102-.802 1.823-.802zm2.5 11.5h-11c-1.104 0-2-.897-2-2s.896-2 1.908-2.006l1.422.016-.248-1.202c-.055-.263-.082-.536-.082-.808 0-2.206 1.795-4 4-4l.069-.014c1.904.055 3.495 1.406 3.847 3.27l.038.186c.123.436.517.706.946.712l.289-.023c.312-.09.569-.131.811-.131 1.654 0 3 1.346 3 3s-1.346 3-3 3z"},"child":[]}]}]})(props);
};
function TiWeatherShower (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M17 18c-.552 0-1-.447-1-1s.448-1 1-1c1.654 0 3-1.346 3-3s-1.346-3-3-3c-.243 0-.5.041-.81.13l-1.075.307-.185-1.103c-.326-1.932-1.978-3.334-3.93-3.334-2.206 0-4 1.794-4 4 0 .272.027.545.082.811l.244 1.199-1.42-.016c-1.009.006-1.906.903-1.906 2.006s.897 2 2 2c.552 0 1 .447 1 1s-.448 1-1 1c-2.206 0-4-1.794-4-4 0-1.861 1.277-3.429 3.001-3.874l-.001-.126c0-3.309 2.691-6 6-6 2.587 0 4.824 1.638 5.65 4.015 2.939-.244 5.35 2.113 5.35 4.985 0 2.757-2.243 5-5 5zM10.5 18l1-3 1 3c.184.553-.114 1.149-.667 1.333-.552.185-1.149-.114-1.333-.666-.075-.226-.07-.458 0-.667zM13.5 20l1-3 1 3c.184.553-.114 1.149-.667 1.333-.552.185-1.149-.114-1.333-.666-.075-.226-.07-.458 0-.667zM7.5 20l1-3 1 3c.184.553-.114 1.149-.667 1.333-.552.185-1.149-.114-1.333-.666-.075-.226-.07-.458 0-.667z"},"child":[]}]}]})(props);
};
function TiWeatherSnow (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M20.5 15.134l-2.457-.503 1.483-.396c.533-.143.85-.69.707-1.225-.142-.533-.689-.85-1.225-.707l-1.508.403c.037-.231.071-.464.071-.706s-.034-.476-.071-.707l1.51.404.26.034c.441 0 .846-.295.965-.741.143-.533-.174-1.082-.707-1.225l-1.483-.397 2.455-.502c.216-.044.42-.156.577-.333.386-.436.347-1.102-.089-1.488-.436-.386-1.102-.347-1.488.089l-1.663 1.874.398-1.479c.144-.533-.173-1.082-.706-1.226-.531-.142-1.082.173-1.226.706l-.407 1.517c-.366-.299-.771-.544-1.219-.717l1.102-1.102c.391-.391.391-1.023 0-1.414s-1.023-.391-1.414 0l-1.086 1.086.793-2.379c.069-.209.075-.441 0-.667-.184-.552-.781-.851-1.333-.666-.552.184-.85.78-.667 1.333l.793 2.379-1.086-1.086c-.391-.391-1.023-.391-1.414 0s-.391 1.023 0 1.414l1.102 1.102c-.447.173-.853.419-1.219.717l-.405-1.515c-.143-.534-.697-.852-1.224-.708-.534.143-.851.69-.708 1.224l.396 1.485-1.662-1.877c-.146-.164-.345-.285-.578-.333-.57-.117-1.127.25-1.244.82s.251 1.128.822 1.245l2.454.503-1.48.396c-.533.143-.85.691-.707 1.225.119.447.523.741.965.741l.26-.034 1.508-.404c-.039.231-.073.465-.073.706 0 .242.034.475.071.707l-1.508-.404c-.532-.142-1.081.173-1.225.707-.144.533.174 1.082.707 1.225l1.483.397-2.455.502c-.216.044-.42.156-.577.334-.387.436-.347 1.102.089 1.487.436.387 1.103.347 1.488-.089l1.665-1.878-.398 1.484c-.144.533.173 1.082.707 1.225l.26.034c.441 0 .845-.294.965-.741l.406-1.515c.366.298.771.544 1.22.716l-1.104 1.102c-.391.39-.391 1.023 0 1.414s1.023.391 1.414 0l.706-.707h.252l-.666 1.999c-.069.209-.075.441 0 .667.184.552.781.851 1.333.666.553-.184.851-.78.667-1.333l-.666-1.999h.252l.707.707c.196.195.451.293.707.293s.512-.098.707-.293c.391-.39.391-1.023 0-1.414l-1.102-1.103c.448-.172.854-.418 1.22-.717l.406 1.517c.12.447.523.741.965.741l.26-.034c.533-.143.851-.691.707-1.225l-.397-1.48 1.662 1.874c.146.165.345.285.577.333.57.117 1.128-.251 1.244-.821.117-.57-.251-1.127-.821-1.244zm-7.428-.634c-1.379 0-2.5-1.121-2.5-2.5s1.121-2.5 2.5-2.5 2.5 1.121 2.5 2.5-1.121 2.5-2.5 2.5z"},"child":[]}]})(props);
};
function TiWeatherStormy (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M17 18c-.553 0-1-.447-1-1s.447-1 1-1c1.654 0 3-1.346 3-3s-1.346-3-3-3c-.238 0-.496.042-.813.131l-1.071.301-.186-1.098c-.326-1.932-1.979-3.334-3.93-3.334-2.205 0-4 1.794-4 4 0 .274.027.545.082.806l.26 1.24-1.436-.052c-1.01.006-1.906.903-1.906 2.006s.896 2 2 2c.553 0 1 .447 1 1s-.447 1-1 1c-2.205 0-4-1.794-4-4 0-1.861 1.277-3.429 3.002-3.874l-.002-.126c0-3.309 2.691-6 6-6 2.587 0 4.824 1.638 5.649 4.015 2.925-.241 5.351 2.112 5.351 4.985 0 2.757-2.243 5-5 5zM12.639 14l-4.5 4.051 3 1.449-1.5 3.5 4.5-4.05-3-1.45z"},"child":[]}]}]})(props);
};
function TiWeatherSunny (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M13 4l-1 2.934-1-2.934c-.188-.553.106-1.152.659-1.341.552-.188 1.153.107 1.341.659.078.23.072.469 0 .682zM4 11l2.934 1-2.934 1c-.553.188-1.152-.106-1.341-.659-.188-.552.107-1.153.659-1.341.23-.078.469-.072.682 0zM11 20l1-2.934 1 2.934c.188.553-.106 1.152-.659 1.341-.552.188-1.152-.106-1.341-.659-.078-.23-.072-.469 0-.682zM20 12.998l-2.934-1 2.934-1c.553-.188 1.152.106 1.341.659.188.552-.106 1.152-.659 1.341-.23.078-.469.072-.682 0zM7.05 5.636l1.367 2.781-2.781-1.367c-.524-.257-.74-.891-.483-1.414.258-.523.891-.739 1.414-.482.218.107.383.28.483.482zM5.636 16.949l2.781-1.367-1.367 2.781c-.257.523-.891.739-1.414.482-.523-.258-.739-.891-.482-1.414.107-.218.28-.382.482-.482zM16.949 18.363l-1.367-2.781 2.781 1.367c.523.257.739.891.482 1.414-.258.523-.891.739-1.414.482-.218-.107-.382-.28-.482-.482zM18.362 7.048l-2.782 1.368 1.368-2.782c.257-.523.891-.739 1.414-.482.523.258.739.891.481 1.415-.106.217-.279.381-.481.481zM12 16.5c-2.481 0-4.5-2.019-4.5-4.5s2.019-4.5 4.5-4.5 4.5 2.019 4.5 4.5-2.019 4.5-4.5 4.5zm0-7c-1.379 0-2.5 1.121-2.5 2.5s1.121 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.121-2.5-2.5-2.5z"},"child":[]}]}]})(props);
};
function TiWeatherWindyCloudy (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"g","attr":{},"child":[{"tag":"path","attr":{"d":"M4.798 15.75c-.134 0-.27-.026-.4-.084-1.457-.639-2.398-2.077-2.398-3.666 0-1.861 1.277-3.429 3.001-3.874l-.001-.126c0-3.309 2.691-6 6-6 2.932 0 5.413 2.104 5.902 5.001.092.544-.275 1.061-.82 1.152-.544.083-1.06-.276-1.152-.82-.326-1.931-1.979-3.333-3.93-3.333-2.206 0-4 1.794-4 4 0 .272.027.546.081.812l.259 1.27-1.431-.088c-1.012.006-1.909.903-1.909 2.006 0 .795.471 1.515 1.2 1.834.506.222.736.812.515 1.317-.164.375-.531.599-.917.599zM19 7c-.553 0-1 .447-1 1s.447 1 1 1c.552 0 1 .448 1 1s-.448 1-1 1h-9.6c-.553 0-1 .447-1 1s.447 1 1 1h4.6c.552 0 1 .448 1 1s-.448 1-1 1h-5c-1.654 0-3 1.346-3 3s1.346 3 3 3c.553 0 1-.447 1-1s-.447-1-1-1c-.552 0-1-.448-1-1s.448-1 1-1h5c1.654 0 3-1.346 3-3 0-.353-.072-.686-.185-1h2.185c1.654 0 3-1.346 3-3s-1.346-3-3-3z"},"child":[]}]}]})(props);
};
function TiWeatherWindy (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M19 5c-.553 0-1 .447-1 1s.447 1 1 1c.552 0 1 .448 1 1s-.448 1-1 1h-11c-.553 0-1 .447-1 1s.447 1 1 1h6c.552 0 1 .448 1 1s-.448 1-1 1h-6.4c-1.654 0-3 1.346-3 3s1.346 3 3 3c.553 0 1-.447 1-1s-.447-1-1-1c-.552 0-1-.448-1-1s.448-1 1-1h6.4c1.654 0 3-1.346 3-3 0-.353-.072-.686-.185-1h2.185c1.654 0 3-1.346 3-3s-1.346-3-3-3z"},"child":[]}]})(props);
};
function TiWiFiOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M21.157 10.764c0-.785-.269-1.464-.706-2.048-.045-.094-.131-.149-.21-.226-.163-.18-.341-.338-.536-.48-4.45-3.739-10.965-3.735-15.414.006-.193.142-.742.738-.742.738-.437.584-.706 1.305-.706 2.09 0 .816.362 1.758.759 2.155l5.775 5.796c.642.732 1.572 1.204 2.622 1.204.996 0 1.709-.167 2.526-1 .004 0 5.565-5.646 5.565-5.646.706-.703 1.067-1.699 1.067-2.589zm-9.156 7.234c-.829.002-1.501-.668-1.501-1.498-.002-.828.67-1.502 1.501-1.502.829-.002 1.501.67 1.499 1.502.002.828-.67 1.5-1.499 1.498zm3.888-3.268c-.293.293-.677.438-1.061.438-.385 0-.768-.146-1.061-.438-.976-.976-2.562-.976-3.536 0-.586.586-1.536.584-2.122 0-.586-.586-.586-1.537 0-2.123 2.144-2.144 5.632-2.144 7.779 0 .587.586.587 1.538.001 2.123zm2.829-2.828c-.293.293-.677.438-1.061.438s-.769-.146-1.062-.438c-2.533-2.534-6.658-2.534-9.192 0-.586.584-1.536.584-2.122 0-.585-.586-.585-1.536 0-2.123 3.704-3.701 9.729-3.701 13.435 0 .587.588.587 1.537.002 2.123z"},"child":[]}]})(props);
};
function TiWiFi (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M13.414 19.412c.783-.779.783-2.047 0-2.826-.781-.785-2.049-.785-2.828-.002-.783.783-.783 2.051 0 2.831.781.78 2.049.781 2.828-.003zM20.485 11.515c-.512 0-1.024-.195-1.414-.586-3.899-3.899-10.243-3.898-14.143 0-.782.781-2.048.78-2.829 0-.781-.781-.781-2.047 0-2.829 5.459-5.458 14.341-5.458 19.799 0 .781.781.781 2.047 0 2.828-.389.391-.901.587-1.413.587zM7.757 15.757c-.512 0-1.024-.195-1.414-.586-.781-.781-.781-2.047 0-2.828 3.118-3.119 8.194-3.119 11.313 0 .781.781.781 2.047 0 2.829-.781.781-2.047.781-2.829 0-1.559-1.56-4.097-1.559-5.657 0-.389.39-.901.585-1.413.585z"},"child":[]}]})(props);
};
function TiWine (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M17.568 9.432c0-2.55-.906-5.592-.944-5.72-.128-.423-.517-.712-.958-.712h-7.332c-.441 0-.83.289-.958.712-.038.128-.944 3.17-.944 5.72 0 2.735 1.984 5.011 4.587 5.477l-.019.091v4h-1c-.553 0-1 .447-1 1s.447 1 1 1h4c.553 0 1-.447 1-1s-.447-1-1-1h-1v-4l-.019-.092c2.603-.466 4.587-2.741 4.587-5.476zm-5.568 3.568c-1.773 0-3.236-1.303-3.511-3h7.021c-.274 1.697-1.737 3-3.51 3zm-3.555-4c.062-1.468.422-3.093.653-4h5.803c.231.907.591 2.532.653 4h-7.109z"},"child":[]}]})(props);
};
function TiWorldOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 2c-4.971 0-9 4.029-9 9s4.029 9 9 9 9-4.029 9-9-4.029-9-9-9zm0 6c0-.553.447-1 1-1s1 .447 1 1v3c-.552 0-1 .448-1 1s.448 1 1 1c.553 0 1-.448 1-1h1v-2l1 1-1 1c0 3 0 3-2 4 0-1-1-1-3-1v-2l-2-2v-2c-1 0-1 1-1 1l-.561-.561-1.652-1.651c1.167-2.247 3.512-3.788 6.213-3.788.688 0 1.353.104 1.981.29-.086.895-.579 1.71-1.481 1.71-1 0-1.5 1-1.5 2v3s1 0 1-3zm0 10c-3.859 0-7-3.14-7-7 0-.776.133-1.521.367-2.219l1.926 1.926 1 1 1.707 1.707v1.586c0 .552.447 1 1 1 .779 0 1.651 0 2.006.091.038.301.209.582.468.742.168.104.36.16.552.16.145 0 .289-.032.422-.098 2.348-1.174 2.539-1.644 2.552-4.479l.708-.708c.391-.391.391-1.023 0-1.414l-1-1c-.192-.192-.448-.294-.708-.294-.129 0-.259.025-.383.076-.373.155-.617.52-.617.924v-2c0-.689-.351-1.298-.883-1.658.421-.411.712-.995.826-1.685 2.392 1.115 4.057 3.535 4.057 6.343 0 3.86-3.141 7-7 7z"},"child":[]}]})(props);
};
function TiWorld (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M12 2c-4.971 0-9 4.029-9 9s4.029 9 9 9 9-4.029 9-9-4.029-9-9-9zm2 2c0 1-.5 2-1.5 2s-1.5 1-1.5 2v3s1 0 1-3c0-.553.447-1 1-1s1 .447 1 1v3c-.552 0-1 .448-1 1s.448 1 1 1c.553 0 1-.448 1-1h1v-2l1 1-1 1c0 3 0 3-2 4 0-1-1-1-3-1v-2l-2-2v-2c-1 0-1 1-1 1l-.561-.561-2.39-2.39c.11-.192.225-.382.35-.564l.523-.678c1.468-1.716 3.644-2.807 6.078-2.807.691 0 1.359.098 2 .262v.738z"},"child":[]}]})(props);
};
function TiZoomInOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M13 11h-2v-2c0-.275-.225-.5-.5-.5s-.5.225-.5.5v2h-2c-.275 0-.5.225-.5.5s.225.5.5.5h2v2c0 .275.225.5.5.5s.5-.225.5-.5v-2h2c.275 0 .5-.225.5-.5s-.225-.5-.5-.5zM19.381 15.956l-2.244-2.283c.227-.687.363-1.412.363-2.173 0-3.859-3.141-7-7-7s-7 3.141-7 7 3.141 7 7 7c.762 0 1.488-.137 2.173-.364l2.397 2.386c.601.506 1.348.783 2.104.783 1.727 0 3.131-1.404 3.131-3.131 0-.84-.328-1.628-.924-2.218zm-3.901-1.11l2.492 2.531c.205.203.332.486.332.797 0 .625-.507 1.131-1.131 1.131-.312 0-.594-.127-.816-.313l-2.512-2.511c.646-.436 1.201-.991 1.635-1.635zm-9.98-3.346c0-2.757 2.243-5 5-5s5 2.243 5 5-2.243 5-5 5-5-2.243-5-5z"},"child":[]}]})(props);
};
function TiZoomIn (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M13 11h-2v-2c0-.276-.224-.5-.5-.5s-.5.224-.5.5v2h-2c-.276 0-.5.224-.5.5s.224.5.5.5h2v2c0 .276.224.5.5.5s.5-.224.5-.5v-2h2c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zM18.432 14.97l-.536-.537-.749-.75c.227-.688.354-1.42.354-2.183 0-3.859-3.141-7-7-7s-7 3.141-7 7 3.141 7 7 7c.763 0 1.496-.127 2.184-.354l.75.749 1.512 1.51.061.061.064.055c.601.506 1.348.784 2.104.784 1.726 0 3.13-1.404 3.13-3.131 0-.84-.328-1.628-.924-2.218l-.95-.986zm-12.932-3.47c0-2.757 2.243-5 5-5s5 2.243 5 5-2.243 5-5 5-5-2.243-5-5z"},"child":[]}]})(props);
};
function TiZoomOutOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M13 12h-5c-.275 0-.5-.225-.5-.5s.225-.5.5-.5h5c.275 0 .5.225.5.5s-.225.5-.5.5zM19.381 15.956l-2.245-2.283c.228-.687.364-1.412.364-2.173 0-3.859-3.141-7-7-7s-7 3.141-7 7 3.141 7 7 7c.761 0 1.488-.137 2.173-.364l2.397 2.386c.601.506 1.348.783 2.104.783 1.727 0 3.131-1.404 3.131-3.131 0-.84-.328-1.628-.924-2.218zm-3.901-1.11l2.492 2.531c.205.203.332.486.332.797 0 .625-.507 1.131-1.131 1.131-.312 0-.594-.127-.816-.313l-2.512-2.511c.646-.436 1.201-.991 1.635-1.635zm-9.98-3.346c0-2.757 2.243-5 5-5s5 2.243 5 5-2.243 5-5 5-5-2.243-5-5z"},"child":[]}]})(props);
};
function TiZoomOut (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M13 11h-5c-.276 0-.5.224-.5.5s.224.5.5.5h5c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zM19.381 15.956l-.949-.986-.537-.537-.749-.75c.227-.688.354-1.42.354-2.183 0-3.859-3.14-7-7-7s-7 3.141-7 7 3.14 7 7 7c.763 0 1.496-.127 2.184-.354l.75.749 1.512 1.51.06.061.065.055c.601.506 1.348.784 2.104.784 1.726 0 3.13-1.404 3.13-3.131 0-.84-.328-1.628-.924-2.218zm-13.881-4.456c0-2.757 2.243-5 5-5s5 2.243 5 5-2.243 5-5 5-5-2.243-5-5z"},"child":[]}]})(props);
};
function TiZoomOutline (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M14 8c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3m0-1c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zM4.195 17.674c0 1.727 1.404 3.131 3.131 3.131.756 0 1.503-.277 2.104-.783l2.397-2.386c.685.227 1.412.364 2.173.364 3.86 0 7-3.141 7-7s-3.14-7-7-7c-3.859 0-7 3.141-7 7 0 .761.136 1.486.364 2.173l-2.245 2.283c-.596.59-.924 1.378-.924 2.218zm6.459-1.694l-2.512 2.511c-.223.187-.504.313-.816.313-.624 0-1.131-.506-1.131-1.131 0-.311.127-.594.332-.797l2.492-2.531c.435.645.99 1.2 1.635 1.635zm3.346.02c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"},"child":[]}]})(props);
};
function TiZoom (props) {
  return GenIcon({"tag":"svg","attr":{"version":"1.2","baseProfile":"tiny","viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"d":"M13 4c-3.859 0-7 3.141-7 7 0 .763.127 1.495.354 2.183l-.749.75-.511.512-1.008 1.045c-.562.557-.891 1.345-.891 2.185 0 1.727 1.404 3.131 3.13 3.131.757 0 1.504-.278 2.104-.784l.064-.055.061-.061 1.512-1.51.75-.749c.688.226 1.421.353 2.184.353 3.859 0 7-3.141 7-7s-3.141-7-7-7zm0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5zM13 7c-2.205 0-4 1.794-4 4s1.795 4 4 4 4-1.794 4-4-1.795-4-4-4zm0 7c-1.656 0-3-1.344-3-3s1.344-3 3-3 3 1.344 3 3-1.344 3-3 3z"},"child":[]}]})(props);
};

;// CONCATENATED MODULE: ./src/utils/DOM_SCRIPTS/Alert.tsx





function Alert_Alert({ updateViolations }) {
    const [isMore, setIsMore] = (0,react.useState)(false);
    function onClose() {
        const root = document.getElementById("recenter_container");
        if (root) {
            root.remove();
        }
        updateViolations(0);
        window.location.href = "https://www.google.com";
    }
    function onMore() {
        setIsMore(true);
    }
    function handleViolation() {
        const input = document.getElementById("non_blocking_alert__more_input");
        if (!input || input.value.toLowerCase() !== "maybe later") {
            alert("Please type the phrase 'Maybe Later' to confirm");
            return;
        }
        const root = document.getElementById("recenter_container");
        if (root) {
            root.remove();
        }
        updateViolations(1);
    }
    return ((0,jsx_runtime.jsxs)("div", Object.assign({ id: "non_blocking_alert", className: isMore ? "more" : "" }, { children: [(0,jsx_runtime.jsx)("h1", Object.assign({ id: "non_blocking_alert__title" }, { children: "Recenter" })), (0,jsx_runtime.jsxs)("div", Object.assign({ id: "non_blocking_alert__content" }, { children: [(0,jsx_runtime.jsx)("p", { children: "Feeling Distracted?" }), (0,jsx_runtime.jsx)("p", { children: "Let's Get Back to Work." }), (0,jsx_runtime.jsx)("p", { children: "You got this!" })] })), !isMore ? ((0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [(0,jsx_runtime.jsx)("button", Object.assign({ id: "non_blocking_alert__button_quit", onClick: onClose }, { children: "Let's Go!" })), (0,jsx_runtime.jsx)("button", Object.assign({ id: "non_blocking_alert__button_more", onClick: onMore }, { children: "Maybe Later" })), " "] })) : ((0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [(0,jsx_runtime.jsx)("div", Object.assign({ id: "non_blocking_alert__more_phrase" }, { children: "Type the phrase \u201CMaybe Later\u201D to confirm" })), (0,jsx_runtime.jsx)("input", { id: "non_blocking_alert__more_input" }), (0,jsx_runtime.jsx)("div", Object.assign({ id: "non_blocking_alert__more_submit_button", onClick: handleViolation }, { children: (0,jsx_runtime.jsx)(TiTick, { id: "non_blocking_alert__more_tick" }) })), (0,jsx_runtime.jsx)("div", { id: "non_blocking_alert__more_line" }), (0,jsx_runtime.jsx)("div", Object.assign({ id: "non_blocking_alert__more_go_back" }, { children: "You can still get Back to Work" })), (0,jsx_runtime.jsx)("button", Object.assign({ id: "non_blocking_alert__more_go_back_btn", onClick: onClose }, { children: "Let's Go!" }))] }))] })));
}
function insertAlert(updateViolations) {
    if (document.getElementById("recenter_container") !== null) {
        updateViolations(0);
        return;
    }
    const root = document.createElement("div");
    root.id = "recenter_container";
    document.body.appendChild(root);
    const rootDiv = client.createRoot(root);
    rootDiv.render((0,jsx_runtime.jsx)(react.StrictMode, { children: (0,jsx_runtime.jsx)(Alert_Alert, { updateViolations: updateViolations }) }));
}

;// CONCATENATED MODULE: ./src/utils/DOM_SCRIPTS/NonBlockingPopUp.ts
/*
    Function to create a non-blocking pop-up to nudge a user on a distracting website
*/


function nonBlockingPopUp(grayScalePercentage) {
    return new Promise((resolve) => {
        addGrayscale(grayScalePercentage);
        insertAlert(resolve);
    });
}

;// CONCATENATED MODULE: ./src/utils/NudgeUser.ts
/*
Function to nudge a user by  prompt on a distracting website
 */
var NudgeUser_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class NudgeUser {
    constructor(isExtensionDisabled) {
        this.violationsLimit = -1;
        this.promptINTERVAL = -1;
        this.grayScalePercentage = 20;
        this.violations = 0;
        this.website = window.location.origin;
        this.isExtensionDisabled = isExtensionDisabled;
        chrome.storage.local.get("promptParameters", (result) => NudgeUser_awaiter(this, void 0, void 0, function* () {
            if (result.promptParameters) {
                const promptParameters = result.promptParameters;
                if (promptParameters[this.website]) {
                    this.promptINTERVAL = promptParameters[this.website].promptInterval;
                    this.violationsLimit =
                        promptParameters[this.website].promptViolations;
                }
                this.grayScalePercentage = 100 / this.violationsLimit;
                this.interval = setInterval(() => {
                    this.nudgeUser();
                }, this.promptINTERVAL * 1000);
            }
        }));
    }
    nudgeUser() {
        return NudgeUser_awaiter(this, void 0, void 0, function* () {
            if (this.violationsLimit === -1 || this.isExtensionDisabled) {
                return;
            }
            if (this.violations >= this.violationsLimit) {
                const line = yield fetchFunnyLines(this.website);
                blockingPopUp(line);
                clearInterval(this.interval);
                return;
            }
            const violated = yield nonBlockingPopUp(this.grayScalePercentage);
            if (violated) {
                this.violations++;
                this.grayScalePercentage += 100 / this.violationsLimit;
            }
        });
    }
    setIsDisabled(disabled) {
        this.isExtensionDisabled = disabled;
    }
    setPromptInterval(interval) {
        if (interval === this.promptINTERVAL)
            return;
        this.promptINTERVAL = interval;
        clearInterval(this.interval);
        this.interval = setInterval(() => {
            this.nudgeUser();
        }, this.promptINTERVAL * 1000);
    }
    setPromptViolations(violations) {
        if (violations === this.violationsLimit)
            return;
        this.violationsLimit = violations;
    }
}

;// CONCATENATED MODULE: ./src/content.ts
var content_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



let lastVisibilityState = document.hidden;
let isExtensionDisabled = false;
let nudgeUser;
function sendMessageToBackground(hidden) {
    try {
        if (isExtensionDisabled) {
            return;
        }
        chrome.runtime.sendMessage({ message: "visibility_changed", hidden: hidden }, (response) => {
            console.log(response.message);
        });
    }
    catch (error) {
        console.log(error);
    }
}
function setIsDisabled() {
    chrome.storage.local.get("isDisabled", (data) => {
        if (data === undefined) {
            chrome.storage.local.set({ isDisabled: true });
            isExtensionDisabled = true;
            return;
        }
        isExtensionDisabled = data.isDisabled;
        if (!nudgeUser) {
            nudgeUser = new NudgeUser(isExtensionDisabled);
        }
        else {
            nudgeUser.setIsDisabled(isExtensionDisabled);
        }
    });
    chrome.storage.onChanged.addListener((changes) => content_awaiter(this, void 0, void 0, function* () {
        if (changes["isDisabled"]) {
            isExtensionDisabled = changes["isDisabled"].newValue;
        }
        if (!nudgeUser) {
            nudgeUser = new NudgeUser(isExtensionDisabled);
        }
        else {
            nudgeUser.setIsDisabled(isExtensionDisabled);
            if (changes["promptParameters"]) {
                const currentURL = window.location.origin;
                const promptParameters = changes["promptParameters"].newValue;
                if (promptParameters[currentURL]) {
                    nudgeUser.setPromptViolations(promptParameters[currentURL].promptViolations);
                    nudgeUser.setPromptInterval(promptParameters[currentURL].promptInterval);
                }
            }
        }
    }));
}
setIsDisabled();
setInterval(() => {
    if (document.hidden !== lastVisibilityState) {
        lastVisibilityState = document.hidden;
        sendMessageToBackground(lastVisibilityState);
    }
}, 1000);
sendMessageToBackground(lastVisibilityState);
nudgeUser = new NudgeUser(isExtensionDisabled);
chrome.storage.local.get("lastGreeted", (data) => {
    if (data.lastGreeted === undefined) {
        addGreetingPopup();
        chrome.storage.local.set({ lastGreeted: new Date().toDateString() });
    }
    else {
        const today = new Date().toDateString();
        if (data.lastGreeted !== today) {
            addGreetingPopup();
            chrome.storage.local.set({ lastGreeted: today });
        }
    }
});
setInterval(hourlySummary, 300000);

})();

/******/ })()
;