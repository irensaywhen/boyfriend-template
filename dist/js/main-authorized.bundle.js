!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=15)}([function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e,r){t.exports=r(10)},function(t,e){function r(e){return t.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},r(e)}t.exports=r},function(t,e){function r(t,e,r,n,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}t.exports=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function s(t){r(a,o,i,s,c,"next",t)}function c(t){r(a,o,i,s,c,"throw",t)}s(void 0)}))}}},function(t,e,r){var n=r(11);function o(e,r,i){return"undefined"!=typeof Reflect&&Reflect.get?t.exports=o=Reflect.get:t.exports=o=function(t,e,r){var o=n(t,e);if(o){var i=Object.getOwnPropertyDescriptor(o,e);return i.get?i.get.call(r):i.value}},o(e,r,i||e)}t.exports=o},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.exports=function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}},function(t,e){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},function(t,e,r){var n=r(12);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}},function(t,e,r){var n=r(13),o=r(0);t.exports=function(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?o(t):e}},function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function s(t,e,r,n){var o=e&&e.prototype instanceof l?e:l,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return P()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=w(a,r);if(s){if(s===u)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=c(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,a),i}function c(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var u={};function l(){}function h(){}function p(){}var d={};d[o]=function(){return this};var f=Object.getPrototypeOf,v=f&&f(f($([])));v&&v!==e&&r.call(v,o)&&(d=v);var m=p.prototype=l.prototype=Object.create(d);function y(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function g(t,e){var n;this._invoke=function(o,i){function a(){return new e((function(n,a){!function n(o,i,a,s){var u=c(t[o],t,i);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,a,s)}),(function(t){n("throw",t,a,s)})):e.resolve(h).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,s)}))}s(u.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=c(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,u;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function $(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:P}}function P(){return{value:void 0,done:!0}}return h.prototype=m.constructor=p,p.constructor=h,p[a]=h.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},y(g.prototype),g.prototype[i]=function(){return this},t.AsyncIterator=g,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new g(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},y(m),m[a]="Generator",m[o]=function(){return this},m.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=$,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:$(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},function(t,e,r){var n=r(2);t.exports=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=n(t)););return t}},function(t,e){function r(e,n){return t.exports=r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(e,n)}t.exports=r},function(t,e){function r(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=r=function(t){return typeof t}:t.exports=r=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(e)}t.exports=r},,function(t,e,r){"use strict";r.r(e);var n=r(1),o=r.n(n),i=r(3),a=r.n(i),s=r(5),c=r.n(s),u=r(6),l=r.n(u),h=r(0),p=r.n(h),d=r(4),f=r.n(d),v=r(8),m=r.n(v),y=r(9),g=r.n(y),w=r(2),b=r.n(w),x=r(7),k=r.n(x),P=function(){function t(e){c()(this,t),this.sendPhotoInformationToServer=this.sendPhotoInformationToServer.bind(this),this.deletePhotoOnServer=this.deletePhotoOnServer.bind(this),this.getPhotosIds=this.getPhotosIds.bind(this),this.selectors=e.selectors,this.requests=e.requests,this.makeURLObjects()}var e,r,n;return l()(t,[{key:"makeURLObjects",value:function(){for(var t in this.requests)this.requests[t].endpoint=new URL(this.requests[t].endpoint)}},{key:"makeRequest",value:function(t){var e=this,r=t.headers,n=t.endpoint,o=t.method,i=t.body,a=void 0===i?"":i;return"GET"===o?fetch(n,{headers:r}).then((function(t){if(t.ok)return t.json();e.showRequestResult({title:t.status,text:t.statusText,icon:"error"})})).then((function(t){return t})).catch((function(t){e.showRequestResult({title:"Oops!",text:t.message,icon:"error"})})):fetch(n,{method:o,headers:r,body:a}).then((function(t){if(t.ok)return t.json();e.showRequestResult({title:t.status,text:t.statusText,icon:"error"})})).then((function(t){return t})).catch((function(t){e.showRequestResult({title:"Oops!",text:t.message,icon:"error"})}))}},{key:"deletePhotoOnServer",value:(n=a()(o.a.mark((function t(e){var r,n,i,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.id,n=e.headers,i=e.endpoint,a=e.method,t.next=3,this.makeRequest({headers:n,endpoint:i,method:a,body:JSON.stringify({id:r})});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t,this)}))),function(t){return n.apply(this,arguments)})},{key:"sendPhotoInformationToServer",value:(r=a()(o.a.mark((function t(e){var r,n,i,a,s,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.id,n=e.privacy,i=e.description,a=e.headers,s=e.endpoint,c=e.method,t.next=3,this.makeRequest({headers:a,endpoint:s,method:c,body:JSON.stringify({id:r,privacy:n,description:i})});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t,this)}))),function(t){return r.apply(this,arguments)})},{key:"getPhotosIds",value:(e=a()(o.a.mark((function t(e){var r,n,i,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.filesAmount,n=e.headers,i=e.endpoint,a=e.method,this.requests.getIds.endpoint.searchParams.set("amount",String(r)),t.next=4,this.makeRequest({headers:n,endpoint:i,method:a});case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t,this)}))),function(t){return e.apply(this,arguments)})}]),t}(),R={showRequestResult:function(t){var e=t.title,r=t.text,n=t.icon;Swal.fire({title:e,text:r,icon:n,showConfirmButton:!1,showCloseButton:!0})}};function L(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=b()(t);if(e){var o=b()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return g()(this,r)}}var E=function(t){m()(n,t);var e,r=L(n);function n(t){var e;return c()(this,n),e=r.call(this,t),k()(p()(e),"formData",null),e.configuration={avatar:!1,uploader:!1,editor:!1},(e.configuration.avatar||e.configuration.uploader)&&(e.uploaded=!1),e.cacheElements=e.cacheElements.bind(p()(e)),e.setUpEventListeners=e.setUpEventListeners.bind(p()(e)),e.savePhotoInformation=e.savePhotoInformation.bind(p()(e)),e.generateFormData=e.generateFormData.bind(p()(e)),e.closeModal=e.closeModal.bind(p()(e)),e.deletePhoto=e.deletePhoto.bind(p()(e)),e.makeURLObjects=e.makeURLObjects.bind(p()(e)),e.clean=e.clean.bind(p()(e)),e}return l()(n,[{key:"cacheElements",value:function(){this.$modal=$(this.selectors.modal),this.selectors["modal-footer"]&&(this.$modalFooter=$(this.$modal.find(this.selectors["modal-footer"])).hide()),this.$form=this.$modal.find(this.selectors.form),this.$closeButton=this.$modal.find(".close"),"deleteButton"in this.selectors&&(this.$deleteButton=this.$modal.find(this.selectors.deleteButton))}},{key:"setUpEventListeners",value:function(){var t=this;(this.configuration.avatar||this.configuration.uploader)&&this.$closeButton.click((function(e){t.uploaded||t.discardChanges(),t.$modalFooter.hide()}))}},{key:"closeModal",value:function(){this.$closeButton.click(),this.clean()}},{key:"deletePhoto",value:(e=a()(o.a.mark((function t(e,r){var i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),!this.configuration.editor){t.next=12;break}return t.prev=2,t.next=5,f()(b()(n.prototype),"deletePhotoOnServer",this).call(this,{id:r.dataset.id,headers:this.requests.deletePhoto.headers,endpoint:this.requests.deletePhoto.endpoint,method:this.requests.deletePhoto.method});case 5:i=t.sent,t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),this.showRequestResult({title:"Oops!",text:t.t0.message,icon:"error"});case 11:i.success?($(r).closest(this.selectors.container).remove(),this.showRequestResult({title:"Success!",text:i.message,icon:"success"}),this.closeModal()):this.showRequestResult({title:"Oops!",text:i.message,icon:"error"});case 12:this.configuration.uploader&&$(e.target).closest(this.selectors.container).remove();case 13:case"end":return t.stop()}}),t,this,[[2,8]])}))),function(t,r){return e.apply(this,arguments)})},{key:"savePhotoInformation",value:function(t){var e=t.id,r=void 0===e?null:e,n=t.file,o=void 0===n?null:n,i=t.src,a=void 0===i?null:i,s=t.privacy,c=void 0!==s&&s,u=t.description,l=void 0===u?"":u;o&&(this.photoData[r].file=o),a&&(this.photoData[r].src=a),this.photoData[r].privacy=!!c&&JSON.parse(c),this.photoData[r].description=l}},{key:"generateFormData",value:function(){if(this.formData=new FormData,this.configuration.uploader)for(var t in this.photoData)for(var e in this.photoData[t])"src"!==e&&this.formData.append(e+t,this.photoData[t][e]);this.configuration.avatar&&this.formData.set("avatar",this.avatar,this.avatar.name)}}]),n}(P);Object.assign(E.prototype,R);var D=E;function I(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=b()(t);if(e){var o=b()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return g()(this,r)}}var O=function(t){m()(n,t);var e,r=I(n);function n(t){var e;return c()(this,n),e=r.call(this,t),k()(p()(e),"avatar",null),k()(p()(e),"newAvatarLink",null),k()(p()(e),"prevAvatarLink",null),e.configuration.avatar=!0,e.formData=null,e.$avatarInputs=null,e.reader=new FileReader,e.cacheElements=e.cacheElements.bind(p()(e)),e.setUpEventListeners=e.setUpEventListeners.bind(p()(e)),e.previewAvatar=e.previewAvatar.bind(p()(e)),e.submitAvatar=e.submitAvatar.bind(p()(e)),e.updateMarkup=e.updateMarkup.bind(p()(e)),e.generateFormData=e.generateFormData.bind(p()(e)),e.cacheElements(),e.setUpEventListeners(),e}return l()(n,[{key:"cacheElements",value:function(){f()(b()(n.prototype),"cacheElements",this).call(this),this.$avatar=$(this.selectors.elementSelector),this.$avatarPreview=this.$modal.find(this.selectors.preview),this.prevAvatarLink=this.$avatarPreview.attr("src"),this.$avatarForm=this.$modal.find(this.selectors.form),this.$avatarInputs=this.$modal.find(this.selectors.input)}},{key:"setUpEventListeners",value:function(){var t=this;f()(b()(n.prototype),"setUpEventListeners",this).call(this),this.reader.onload=function(e){t.$avatarPreview.attr("src",e.target.result),t.$modalFooter.slideDown(),t.newAvatarLink=e.target.result},this.$avatarInputs.change((function(e){t.previewAvatar(e.target)})),this.$avatarForm.submit((function(e){e.preventDefault(),t.submitAvatar()}))}},{key:"previewAvatar",value:function(t){t.files&&t.files[0]&&(this.avatar=t.files[0],this.reader.readAsDataURL(t.files[0]))}},{key:"submitAvatar",value:(e=a()(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.generateFormData(),t.prev=1,t.next=4,this.makeRequest({headers:this.requests.saveAvatar.headers,endpoint:this.requests.saveAvatar.endpoint,method:this.requests.saveAvatar.method,body:this.formData});case 4:e=t.sent,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),this.showRequestResult({title:"Oops!",text:t.t0.message,icon:"error"});case 10:e.success?(this.uploaded=!0,this.updateMarkup(),this.showRequestResult({title:"Success!",text:e.message,icon:"success"}),this.closeModal(),this.clean()):this.showRequestResult({title:"Oops!",text:e.message,icon:"error"});case 11:case"end":return t.stop()}}),t,this,[[1,7]])}))),function(){return e.apply(this,arguments)})},{key:"clean",value:function(){this.formData=null,this.prevAvatarLink=this.$avatarPreview.attr("src"),this.newAvatarLink=null,this.uploaded=!1}},{key:"updateMarkup",value:function(){this.$avatar.attr("src",this.newAvatarLink)}},{key:"discardChanges",value:function(){this.$avatarPreview.attr("src",this.prevAvatarLink)}}]),n}(D);function q(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=b()(t);if(e){var o=b()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return g()(this,r)}}var S=function(t){m()(s,t);var e,r,n,i=q(s);function s(t){var e;return c()(this,s),e=i.call(this,t),k()(p()(e),"photoData",{}),e.configuration.uploader=!0,e.previewPhotos=e.previewPhotos.bind(p()(e)),e.generatePreviewHTML=e.generatePreviewHTML.bind(p()(e)),e.updateMarkup=e.updateMarkup.bind(p()(e)),e.getPhotosIds=e.getPhotosIds.bind(p()(e)),e.uploadNewPhotos=e.uploadNewPhotos.bind(p()(e)),e.cacheElements(),e.setUpEventListeners(),e}return l()(s,[{key:"cacheElements",value:function(){f()(b()(s.prototype),"cacheElements",this).call(this),this.$previewContainer=this.$modal.find(this.selectors.previewContainer),this.$photoInputs=this.$modal.find(this.selectors.input),this.$gallery=$(this.selectors.gallery)}},{key:"setUpEventListeners",value:function(){var t=this;f()(b()(s.prototype),"setUpEventListeners",this).call(this),this.$photoInputs.change((function(e){t.previewPhotos(e.target)})),this.$form.submit((function(e){e.preventDefault(),t.uploadNewPhotos()}))}},{key:"clean",value:function(){this.photoData={}}},{key:"uploadNewPhotos",value:(n=a()(o.a.mark((function t(){var e,r,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.collectData(),this.generateFormData(),t.prev=2,t.next=5,this.makeRequest({headers:this.requests.savePhotos.headers,endpoint:this.requests.savePhotos.endpoint,method:this.requests.savePhotos.method,body:this.formData});case 5:e=t.sent,t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),this.showRequestResult({title:"Oops!",text:t.t0.message,icon:"error"});case 11:if(e.success){for(r in this.showRequestResult({title:"Success!",text:e.message,icon:"success"}),this.photoData)n=this.photoData[r],this.updateMarkup({id:r,src:n.src,privacy:n.privacy,description:n.description});this.closeModal()}else this.showRequestResult({title:"Oops!",text:e.message,icon:"error"});case 12:case"end":return t.stop()}}),t,this,[[2,8]])}))),function(){return n.apply(this,arguments)})},{key:"getPhotosIds",value:(r=a()(o.a.mark((function t(e){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f()(b()(s.prototype),"getPhotosIds",this).call(this,{filesAmount:e,headers:this.requests.getIds.headers,endpoint:this.requests.getIds.endpoint,method:this.requests.getIds.method});case 3:r=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),this.showRequestResult({title:"Oops!",text:t.t0.message,icon:"error"});case 9:if(!r.success){t.next=13;break}return t.abrupt("return",r.ids);case 13:this.showRequestResult({title:"Oops!",text:r.message,icon:"error"});case 14:case"end":return t.stop()}}),t,this,[[0,6]])}))),function(t){return r.apply(this,arguments)})},{key:"previewPhotos",value:(e=a()(o.a.mark((function t(e){var r,n,i,a,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.files){t.next=13;break}return n=e.files.length,t.prev=2,t.next=5,this.getPhotosIds(n);case 5:r=t.sent,t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),this.showRequestResult({title:"Oops!",text:t.t0.message,icon:"error"});case 11:for(i=0;i<n;i++)a=new FileReader,s=r[i],this.photoData[s]={},a.id=s,this.setReaderEventListeners(a),a.readAsDataURL(e.files[i]),this.savePhotoInformation({id:s,file:e.files[i]});this.$modalFooter.show(0);case 13:case"end":return t.stop()}}),t,this,[[2,8]])}))),function(t){return e.apply(this,arguments)})},{key:"setReaderEventListeners",value:function(t){var e=this;t.onload=function(t){var r=[t.target.id,t.target.result],n=r[0],o=r[1];e.generatePreviewHTML({id:n,src:o}),e.savePhotoInformation({id:n,src:o})},t.onerror=function(t){this.showRequestResult({title:this.error.name,text:this.error.message,icon:"error"})}}},{key:"discardChanges",value:function(){this.$previewContainer.empty()}},{key:"generatePreviewHTML",value:function(t){var e=this,r=t.id,n=t.src,o="photo-upload-privacy-"+r,i="upload-description"+r,a=$("<div></div>").addClass("custom-control custom-switch").append($("<input>").attr("type","checkbox").attr("id",o).addClass("custom-control-input privacy-input")).append($("<label></label>").attr("for",o).addClass("custom-control-label privacy-label")).appendTo("body"),s=$("<div></div>").addClass("privacy bg-white rounded d-flex justify-content-between align-items-center px-1").append($("<h4></h4>").addClass("m-0").text("Privacy")).append(a),c=$("<figure></figure>").append($("<img>").attr("src",n).attr("alt","")).append(s).append($("<button></button>").attr("type","button").addClass("delete bg-white rounded d-flex justify-content-between align-items-center px-1").text("Delete").click((function(t){e.deletePhoto(t)})).append($('<i class="fas fa-trash-alt"></i>'))),u=$("<div></div>").addClass("form-group").append($("<label></label>").attr("for",i).text("Add photo description")).append($("<textarea></textarea>").attr("id",i).attr("rows","4").attr("placeholder","Photo description").addClass("form-control new-photo-description"));$("<div></div>").addClass("col-12 col-sm-6 col-md-4 col-xl-3 photo-container").attr("data-id",r).append($("<div></div>").addClass("photo-description").append([c,u])).appendTo(this.$previewContainer)}},{key:"collectData",value:function(){var t=this;$(this.selectors.container).each((function(e,r){var n=r.dataset.id,o=$(r).find(t.selectors["privacy-input"]).is(":checked"),i=$(r).find(t.selectors.description).val();t.savePhotoInformation({id:n,privacy:o,description:i})}))}},{key:"updateMarkup",value:function(t){var e=t.id,r=void 0===e?null:e,n=t.src,o=void 0===n?null:n,i=t.privacy,a=void 0!==i&&i,s=t.description,c=void 0===s?"":s;this.$gallery.append($("<div></div>").addClass("swiper-slide gallery-slide").append($("<img>").attr("src",o).attr("alt",c).attr("data-toggle","modal").attr("data-target","#edit-photo").attr("data-id",r).attr("data-description",c).attr("data-privacy",a).addClass("gallery-photo")))}}]),s}(D);function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=b()(t);if(e){var o=b()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return g()(this,r)}}var M=function(t){m()(n,t);var e,r=j(n);function n(t){var e;return c()(this,n),e=r.call(this,t),k()(p()(e),"photo",null),k()(p()(e),"photoData",{}),e.configuration.editor=!0,e.prepareModal=e.prepareModal.bind(p()(e)),e.updateMarkup=e.updateMarkup.bind(p()(e)),e.updatePhotoInformation=e.updatePhotoInformation.bind(p()(e)),e.cacheElements(),e.setUpEventListeners(),e}return l()(n,[{key:"cacheElements",value:function(){f()(b()(n.prototype),"cacheElements",this).call(this),this.$description=this.$modal.find(this.selectors.description),this.$privacyInput=this.$modal.find(this.selectors["privacy-input"]),this.$privacyLabel=this.$modal.find(this.selectors["privacy-label"]),this.$modalPhotoElement=this.$modal.find("img"),this.$gallery=$(this.selectors.gallery)}},{key:"setUpEventListeners",value:function(){var t=this;f()(b()(n.prototype),"setUpEventListeners",this).call(this),this.$gallery.click((function(e){var r=e.target;if("IMG"===r.tagName){t.photo=r;var n=t.photo.dataset.id;t.photoData[n]={},t.savePhotoInformation({id:n,src:t.photo.src}),t.savePhotoInformation(t.photo.dataset),t.prepareModal(n)}})),this.$deleteButton.click((function(e){t.deletePhoto(e,t.photo)})),this.$form.submit((function(e){e.preventDefault(),t.updatePhotoInformation()}))}},{key:"updatePhotoInformation",value:(e=a()(o.a.mark((function t(){var e,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.photo.dataset.id,this.savePhotoInformation({id:e,privacy:this.$privacyInput.is(":checked"),description:this.$description.val()}),t.prev=2,t.next=5,f()(b()(n.prototype),"sendPhotoInformationToServer",this).call(this,{id:e,privacy:this.photoData[e].privacy,description:this.photoData[e].description,headers:this.requests.savePhoto.headers,endpoint:this.requests.savePhoto.endpoint,method:this.requests.savePhoto.method});case 5:r=t.sent,t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),this.showRequestResult({title:"Oops!",text:t.t0.message,icon:"error"});case 11:r.success?(this.updateMarkup(),this.showRequestResult({title:"Success!",text:r.message,icon:"success"}),this.closeModal()):this.showRequestResult({title:"Oops!",text:r.message,icon:"error"});case 12:case"end":return t.stop()}}),t,this,[[2,8]])}))),function(){return e.apply(this,arguments)})},{key:"updateMarkup",value:function(){var t=this.photoData[this.photo.dataset.id];for(var e in t)e in this.photo.dataset&&(this.photo.dataset[e]=t[e])}},{key:"prepareModal",value:function(t){this.$modalPhotoElement.attr("src",this.photoData[t].src);var e="photo-"+t;this.$privacyInput.prop("checked",this.photoData[t].privacy).attr("id",e),this.$privacyLabel.attr("for",e),this.$description.text(this.photoData[t].description)}},{key:"clean",value:function(){this.photo=null,this.photoData={}}}]),n}(D),_={locationInputStarted:!1,locationInputValue:null,initializeLocationInput:function(){var t=this.requests.location;for(var e in this.throttleInput=this.throttleInput.bind(this),this.displayCities=this.displayCities.bind(this),t.searchParams)t.endpoint.searchParams.set(e,t.searchParams[e]);this.cacheLocationElements(),this.setUpLocationEventListeners()},cacheLocationElements:function(){this.$locationInput=this.$form.find(this.selectors.locationInput),this.$locationDropdownWrapper=this.$form.find(this.selectors["location-dropdown"]),this.$locationDropdownToggle=this.$locationDropdownWrapper.find(this.selectors["dropdown-toggle"]),this.$locationDropdownMenu=this.$locationDropdownWrapper.find(this.selectors["dropdown-menu"])},setUpLocationEventListeners:function(){var t=this;this.$locationInput.on("input",(function(e){t.citySelection||t.locationInputStarted||(t.locationInputStarted=!0,t.locationInputValue=t.$locationInput.val(),t.locationTimer=setTimeout(t.throttleInput,1500))})),this.$locationDropdownMenu.click((function(e){var r=e.target;if("LI"===r.tagName){var n=r.dataset;t.citySelection=!0,clearTimeout(t.locationTimer),t.$locationInput.attr("data-lat",n.lat).attr("data-lon",n.lon).attr("data-name",n.name).val(n.name),t.citySelection=!1,t.locationInputStarted=!1,t.newValue=null,t.$locationDropdownMenu.empty()}}))},getCities:function(t){var e=this;return a()(o.a.mark((function r(){var n,i,a;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.headers,i=t.endpoint,a=t.method,r.next=3,e.makeRequest({headers:n,endpoint:i,method:a});case 3:return r.abrupt("return",r.sent);case 4:case"end":return r.stop()}}),r)})))()},throttleInput:function(){var t=this;return a()(o.a.mark((function e(){var r,n,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.requests.location,(n=t.$locationInput.val())===t.locationInputValue){e.next=12;break}return t.locationInputValue=n,r.endpoint.searchParams.set("city",t.locationInputValue),e.next=7,t.getCities({headers:r.headers,endpoint:r.endpoint,method:r.method});case 7:i=e.sent,t.locationTimer=setTimeout(t.throttleInput,2500),t.displayCities(i),e.next=13;break;case 12:t.locationInputStarted=!1;case 13:case"end":return e.stop()}}),e)})))()},displayCities:function(t){var e=this;t.forEach((function(t){e.$locationDropdownMenu.append($("<li></li>").addClass("dropdown-item").attr("data-lat",t.lat).attr("data-lon",t.lon).attr("data-name",t.display_name).text(t.display_name)).append($("<li></li>").addClass("dropdown-divider"))})),this.$locationDropdownToggle.dropdown("toggle")}};function C(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=b()(t);if(e){var o=b()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return g()(this,r)}}var T=function(t){m()(r,t);var e=C(r);function r(t){var n;return c()(this,r),(n=e.call(this,t)).formData={},n.cacheElements=n.cacheElements.bind(p()(n)),n.setUpEventListeners=n.setUpEventListeners.bind(p()(n)),t.location&&(Object.assign(r.prototype,_),n.location=!0),n.cacheElements(),n.setUpEventListeners(),n}return l()(r,[{key:"cacheElements",value:function(){this.$form=$(this.selectors.form),this.$inputs=this.$form.find(this.selectors.inputs),this.location&&this.initializeLocationInput()}},{key:"setUpEventListeners",value:function(){var t=this;this.$form.submit((function(e){e.preventDefault(),e.stopPropagation(),t.$inputs.each((function(e,r){var n=r.name;t.formData[n]=$(r).val()}))}))}},{key:"collectFormData",value:function(){}}]),r}(P);window.Avatar=O,window.PhotoUploader=S,window.PhotoEditor=M,window.Form=T}]);
//# sourceMappingURL=main-authorized.bundle.js.map