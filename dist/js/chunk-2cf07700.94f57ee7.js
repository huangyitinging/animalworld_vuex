(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2cf07700"],{"984a":function(t,e,s){"use strict";var a=s("e94d"),r=s.n(a);r.a},a55b:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("form",{staticClass:"form-signin",on:{submit:function(e){return e.preventDefault(),t.signin(e)}}},[s("img",{attrs:{src:"https://i.imgur.com/Nr5ZZi7.png",width:"260px",alt:""}}),s("h1",{staticClass:"h4 my-3 text-center font-weight-normal"},[t._v("後台登入")]),s("label",{staticClass:"sr-only",attrs:{for:"inputEmail"}},[t._v("Email address")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{type:"email",id:"inputEmail",placeholder:"Email address",required:"",autofocus:""},domProps:{value:t.user.username},on:{input:function(e){e.target.composing||t.$set(t.user,"username",e.target.value)}}}),s("label",{staticClass:"sr-only",attrs:{for:"inputPassword"}},[t._v("Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"Password",required:""},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}}),t._m(0),s("button",{staticClass:"btn btn-lg btn-primary text-white btn-block",attrs:{type:"submit"}},[t._v("登入")]),s("p",{staticClass:"mt-3 mb-3 text-muted"},[t._v("© 2019")]),s("router-link",{attrs:{to:"/index"}},[t._v("回到 汪喵星球")])],1)])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"checkbox mb-3"},[s("label",[s("input",{attrs:{type:"checkbox",value:"remember-me"}}),t._v(" Remember me\n      ")])])}],n={name:"HelloWorld",data:function(){return{user:{username:"",password:""}}},methods:{signin:function(){var t="".concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_APIPATH,"/admin/signin"),e=this;console.log(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/"}).APIPATH,Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/"}).CUSTOMPATH),this.$http.post(t,e.user).then((function(t){console.log(t.data),t.data.success&&e.$router.push("/admin/products")}))}}},o=n,i=(s("984a"),s("2877")),u=Object(i["a"])(o,a,r,!1,null,"13ea97ac",null);e["default"]=u.exports},e94d:function(t,e,s){}}]);
//# sourceMappingURL=chunk-2cf07700.94f57ee7.js.map