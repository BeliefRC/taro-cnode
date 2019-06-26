(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"138":function(e,t,n){},"140":function(e,t,n){},"157":function(e,t,n){"use strict";n.r(t);var r,o,i=n(0),a=n(1),c=n(148),s=n(52),u=n(12),l=n(53),p=n(49),f=n(50),h=n(43),b=(n(138),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}());var d,m=(o=r=function(e){function Panel(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Panel),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Panel.__proto__||Object.getPrototypeOf(Panel)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Panel,a["a"].Component),b(Panel,[{"key":"toDetail","value":function toDetail(e){a.a.navigateTo({"url":"/pages/detail/detail?topicId="+e.id})}},{"key":"render","value":function render(){var e=this,t=this.props,n=t.listData,r=t.title;return i.c.createElement(c.a,{"className":"topic-panel"},i.c.createElement(c.a,{"className":"topic-panel-title"},r),n.map(function(t){return i.c.createElement(c.a,{"onClick":e.toDetail.bind(e,t),"className":"topic-panel-list","key":t.id},i.c.createElement(p.a,{"className":"topic-panel-list-img","src":t.author.avatar_url}),i.c.createElement(f.a,{"className":"topic-panel-list-title"},t.title),i.c.createElement(f.a,{"className":"topic-panel-list-date"},Object(h.a)(t.last_reply_at)))}))}}]),Panel}(),r.defaultProps={"listData":[]},o),y=n(35),_=(n(140),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}()),g=function get(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,n)}if("value"in r)return r.value;var i=r.get;return void 0!==i?i.call(n):void 0},v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function user_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var O=Object(u.b)(function(e){return v({},e.user)})(d=function(e){function User(){var e,t,n;!function user_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,User);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return t=n=user_possibleConstructorReturn(this,(e=User.__proto__||Object.getPrototypeOf(User)).call.apply(e,[this].concat(o))),n.state={"recent_topics":[],"recent_replies":[]},user_possibleConstructorReturn(n,t)}return function user_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(User,a["a"].Component),_(User,[{"key":"componentWillMount","value":function componentWillMount(){var e=this;Object(y.b)({"loginname":this.props.loginname}).then(function(t){e.setState({"recent_topics":t.data.recent_topics,"recent_replies":t.data.recent_replies})})}},{"key":"publishTopic","value":function publishTopic(){a.a.redirectTo({"url":"/pages/publish/publish"})}},{"key":"render","value":function render(){var e=this.props,t=e.loginname,n=e.avatar_url,r=this.state,o=r.recent_topics,a=r.recent_replies;return i.c.createElement(c.a,null,i.c.createElement(l.a,{"loginname":t,"avatar_url":n}),i.c.createElement(m,{"listData":o,"title":"最近发布的话题"}),i.c.createElement(m,{"listData":a,"title":"最近收到的回复"}),i.c.createElement(s.a,{"className":"publish_btn","onClick":this.publishTopic.bind(this)},"发布话题"))}},{"key":"componentDidMount","value":function componentDidMount(){g(User.prototype.__proto__||Object.getPrototypeOf(User.prototype),"componentDidMount",this)&&g(User.prototype.__proto__||Object.getPrototypeOf(User.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){g(User.prototype.__proto__||Object.getPrototypeOf(User.prototype),"componentDidShow",this)&&g(User.prototype.__proto__||Object.getPrototypeOf(User.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){g(User.prototype.__proto__||Object.getPrototypeOf(User.prototype),"componentDidHide",this)&&g(User.prototype.__proto__||Object.getPrototypeOf(User.prototype),"componentDidHide",this).call(this)}}]),User}())||d;t.default=O},"33":function(e,t,n){"use strict";n.d(t,"a",function(){return getJSON}),n.d(t,"b",function(){return postJSON});var r=n(156),o=n(147);n(14);function getJSON(e,t){return Object(r.b)({"title":"请求中","mask":!0}),Object(o.a)({"url":e,"data":t,"method":"GET"}).then(function(e){return Object(r.a)(),e.data}).catch(function(e){console.error(e),Object(r.b)({"title":"请求失败"}),setTimeout(function(){Object(r.a)()},2e3)})}function postJSON(e,t){return Object(r.b)({"title":"请求中","mask":!0}),Object(o.a)({"header":{"content-type":"application/json"},"url":e,"data":t,"method":"POST"}).then(function(e){return Object(r.a)(),e.data}).catch(function(e){console.error(e),Object(r.b)({"title":"请求失败"}),setTimeout(function(){Object(r.a)()},2e4)})}},"34":function(e,t,n){"use strict";t.a={"getTopics":"https://cnodejs.org/api/v1/topics","getTopicInfo":"https://cnodejs.org/api/v1/topic","checkUserToken":"https://cnodejs.org/api/v1/accesstoken","getUserInfo":"https://cnodejs.org/api/v1/user/","createTopic":"https://cnodejs.org/api/v1/topics","replyTopic":"https://cnodejs.org/api/v1/topic/","upReply":"https://cnodejs.org/api/v1/reply/","updateTopic":"https://cnodejs.org/api/v1/topics/update"}},"35":function(e,t,n){"use strict";n.d(t,"a",function(){return accessUserToken}),n.d(t,"b",function(){return l}),n.d(t,"c",function(){return p});var r=n(156),o=n(1),i=n(34),a=n(10),c=n(33);function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function step(r,o){try{var i=t[r](o),a=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(a).then(function(e){step("next",e)},function(e){step("throw",e)});e(a)}("next")})}}function accessUserToken(e){var t,n=this;return t=_asyncToGenerator(regeneratorRuntime.mark(function _callee(t){var r;return regeneratorRuntime.wrap(function _callee$(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(c.b)(i.a.checkUserToken,e);case 2:if(!(r=n.sent)||!r.success){n.next=8;break}return t({"type":a.b,"accesstoken":e.accesstoken,"loginname":r.loginname,"avatar_url":r.avatar_url}),n.abrupt("return",r);case 8:t({"type":a.a,"accesstoken":null,"loginname":null});case 9:return n.abrupt("return",!1);case 10:case"end":return n.stop()}},_callee,n)})),function(e){return t.apply(this,arguments)}}var s,u,l=(s=_asyncToGenerator(regeneratorRuntime.mark(function _callee2(e){var t;return regeneratorRuntime.wrap(function _callee2$(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(c.a)(i.a.getUserInfo+e.loginname);case 2:if(!(t=n.sent)||!t.success){n.next=7;break}return n.abrupt("return",t);case 7:Object(r.c)({"title":"拉取用户信息失败","icon":"none"});case 8:case"end":return n.stop()}},_callee2,this)})),function getUserInfo(e){return s.apply(this,arguments)}),p=(u=_asyncToGenerator(regeneratorRuntime.mark(function _callee3(e){return regeneratorRuntime.wrap(function _callee3$(t){for(;;)switch(t.prev=t.next){case 0:if(!e||!e.accesstoken){t.next=2;break}return t.abrupt("return",!0);case 2:return o.a.navigateTo({"url":"/pages/login/login"}),t.abrupt("return",!1);case 4:case"end":return t.stop()}},_callee3,this)})),function validateUser(e){return u.apply(this,arguments)})},"36":function(e,t,n){var r=n(37);"string"==typeof r&&(r=[[e.i,r,""]]);var o={"sourceMap":!1,"insertAt":"top","hmr":!0,"transform":void 0,"insertInto":void 0};n(30)(r,o);r.locals&&(e.exports=r.locals)},"37":function(e,t,n){(e.exports=n(29)(!1)).push([e.i,".taro-img {\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  font-size: 0;\n  width: 320px;\n  height: 240px;\n}\n\n.taro-img.taro-img__widthfix {\n  height: 100%;\n}\n\n.taro-img__mode-scaletofill {\n  width: 100%;\n  height: 100%;\n}\n\n.taro-img__mode-aspectfit {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.taro-img__mode-aspectfill {\n  min-width: 100%;\n  height: 100%;\n}\n\n.taro-img__mode-widthfix {\n  width: 100%;\n}\n\n.taro-img__mode-top {\n  width: 100%;\n}\n\n.taro-img__mode-bottom {\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n}\n\n.taro-img__mode-left {\n  height: 100%;\n}\n\n.taro-img__mode-right {\n  position: absolute;\n  height: 100%;\n  right: 0;\n}\n\n.taro-img__mode-topright {\n  position: absolute;\n  right: 0;\n}\n\n.taro-img__mode-bottomleft {\n  position: absolute;\n  bottom: 0;\n}\n\n.taro-img__mode-bottomright {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n}",""])},"38":function(e,t,n){var r=n(39);"string"==typeof r&&(r=[[e.i,r,""]]);var o={"sourceMap":!1,"insertAt":"top","hmr":!0,"transform":void 0,"insertInto":void 0};n(30)(r,o);r.locals&&(e.exports=r.locals)},"39":function(e,t,n){(e.exports=n(29)(!1)).push([e.i,".taro-text {\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.taro-text__selectable {\n  -moz-user-select: text;\n  -webkit-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n}",""])},"40":function(e,t,n){var r=n(41);"string"==typeof r&&(r=[[e.i,r,""]]);var o={"sourceMap":!1,"insertAt":"top","hmr":!0,"transform":void 0,"insertInto":void 0};n(30)(r,o);r.locals&&(e.exports=r.locals)},"41":function(e,t,n){(e.exports=n(29)(!1)).push([e.i,"button {\n  position: relative;\n  display: block;\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 14px;\n  padding-right: 14px;\n  box-sizing: border-box;\n  font-size: 18px;\n  text-align: center;\n  text-decoration: none;\n  line-height: 2.55555556;\n  border-radius: 5px;\n  -webkit-tap-highlight-color: transparent;\n  overflow: hidden;\n  color: #000000;\n  background-color: #F8F8F8;\n}\n\nbutton[plain] {\n  color: #353535;\n  border: 1px solid #353535;\n  background-color: transparent;\n}\n\nbutton[plain][disabled] {\n  color: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  background-color: #F7F7F7;\n}\n\nbutton[type=primary] {\n  color: #FFFFFF;\n  background-color: #1AAD19;\n}\n\nbutton[type=primary][plain] {\n  color: #1aad19;\n  border: 1px solid #1aad19;\n  background-color: transparent;\n}\n\nbutton[type=primary][plain][disabled] {\n  color: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  background-color: #F7F7F7;\n}",""])},"43":function(e,t,n){"use strict";function myTimeToLocal(e){if(!e&&"number"!=typeof e)return"";var t="";e=new Date(e).getTime();var n=(new Date).getTimezoneOffset();return t=(t=(t=new Date(e-6e4*n).toISOString()).substr(0,t.lastIndexOf("."))).replace("T"," ")}n.d(t,"a",function(){return myTimeToLocal})},"49":function(e,t,n){"use strict";n(27);var r=n(0),o=n(28),i=n.n(o),a=(n(36),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}),c=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var s=function(e){function Image(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Image),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Image.__proto__||Object.getPrototypeOf(Image)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Image,r["c"].Component),c(Image,[{"key":"render","value":function render(){var e=this.props,t=e.className,n=e.src,o=e.style,c=e.mode,s=e.onLoad,u=e.onError,l=function _objectWithoutProperties(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["className","src","style","mode","onLoad","onError"]),p=i()("taro-img",{"taro-img__widthfix":"widthFix"===c},t),f="taro-img__mode-"+(c||"scaleToFill").toLowerCase().replace(/\s/g,"");return r.c.createElement("div",a({"className":p,"style":o},l),r.c.createElement("img",{"className":f,"src":n,"onLoad":s,"onError":u}))}}]),Image}();t.a=s},"50":function(e,t,n){"use strict";n(27);var r=n(0),o=n(32),i=n(28),a=n.n(i),c=(n(38),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}),s=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var u=function(e){function Text(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Text),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Text.__proto__||Object.getPrototypeOf(Text)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Text,r["c"].Component),s(Text,[{"key":"render","value":function render(){var e=this.props,t=e.className,n=e.selectable,i=void 0!==n&&n,s=a()("taro-text",{"taro-text__selectable":i},t);return r.c.createElement("span",c({},Object(o.a)(this.props,["selectable","className"]),{"className":s}),this.props.children)}}]),Text}();t.a=u},"52":function(e,t,n){"use strict";n(27);var r=n(0),o=n(32),i=n(28),a=n.n(i),c=(n(40),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}),s=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}var u=function(e){function Button(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Button);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Button.__proto__||Object.getPrototypeOf(Button)).apply(this,arguments));return e.state={"hover":!1,"touch":!1},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Button,r["c"].Component),s(Button,[{"key":"render","value":function render(){var e,t=this,n=this.props,i=n.children,s=n.disabled,u=n.className,l=n.style,p=n.onClick,f=n.onTouchStart,h=n.onTouchEnd,b=n.hoverClass,d=void 0===b?"button-hover":b,m=n.hoverStartTime,y=void 0===m?20:m,_=n.hoverStayTime,g=void 0===_?70:_,v=n.size,O=n.plain,w=n.loading,j=void 0!==w&&w,P=n.type,k=void 0===P?"default":P,T=u||a()("weui-btn",(_defineProperty(e={},""+d,this.state.hover&&!s),_defineProperty(e,"weui-btn_plain-"+k,O),_defineProperty(e,"weui-btn_"+k,!O&&k),_defineProperty(e,"weui-btn_mini","mini"===v),_defineProperty(e,"weui-btn_loading",j),_defineProperty(e,"weui-btn_disabled",s),e));return r.c.createElement("button",c({},Object(o.a)(this.props,["hoverClass","onTouchStart","onTouchEnd"]),{"className":T,"style":l,"onClick":p,"disabled":s,"onTouchStart":function _onTouchStart(e){t.setState(function(){return{"touch":!0}}),d&&!s&&setTimeout(function(){t.state.touch&&t.setState(function(){return{"hover":!0}})},y),f&&f(e)},"onTouchEnd":function _onTouchEnd(e){t.setState(function(){return{"touch":!1}}),d&&!s&&setTimeout(function(){t.state.touch||t.setState(function(){return{"hover":!1}})},g),h&&h(e)}}),j&&r.c.createElement("i",{"class":"weui-loading"}),i)}}]),Button}();t.a=u},"53":function(e,t,n){"use strict";var r=n(0),o=n(1),i=n(148),a=n(49),c=n(50),s=(n(54),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}());var u=function(e){function Head(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Head),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Head.__proto__||Object.getPrototypeOf(Head)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Head,o["a"].Component),s(Head,[{"key":"render","value":function render(){var e=this.props,t=e.loginname,o=e.avatar_url;return r.c.createElement(i.a,{"className":"login-head"},r.c.createElement(a.a,{"className":"login-head-back","src":n(56)}),r.c.createElement(a.a,{"className":"login-head-head","src":o||n(57)}),t?r.c.createElement(c.a,{"className":"login-head-name"},t):null)}}]),Head}();t.a=u},"54":function(e,t,n){},"56":function(e,t,n){e.exports=n.p+"static/images/loginBack.jpg"},"57":function(e,t,n){e.exports=n.p+"static/images/head.png"}}]);