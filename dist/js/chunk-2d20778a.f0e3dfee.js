(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20778a"],{a159:function(t,r,s){"use strict";s.r(r);var e=function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"my-5 row justify-content-center"},[s("form",{staticClass:"col-md-6",on:{submit:function(r){return r.preventDefault(),t.payOrder()}}},[s("table",{staticClass:"table"},[t._m(0),s("tbody",t._l(t.order.products,(function(r){return s("tr",{key:r.id},[s("td",{staticClass:"align-middle"},[t._v(t._s(r.product.title))]),s("td",{staticClass:"align-middle"},[t._v(t._s(r.qty)+"/"+t._s(r.product.unit))]),s("td",{staticClass:"align-middle text-right"},[t._v(t._s(r.final_total))])])})),0),s("tfoot",[s("tr",[s("td",{staticClass:"text-right",attrs:{colspan:"2"}},[t._v("總計")]),s("td",{staticClass:"text-right"},[t._v(t._s(t.order.total))])])])]),s("table",{staticClass:"table"},[s("tbody",[s("tr",[s("th",{attrs:{width:"100"}},[t._v("Email")]),s("td",[t._v(t._s(t.order.user.email))])]),s("tr",[s("th",[t._v("姓名")]),s("td",[t._v(t._s(t.order.user.name))])]),s("tr",[s("th",[t._v("收件人電話")]),s("td",[t._v(t._s(t.order.user.tel))])]),s("tr",[s("th",[t._v("收件人地址")]),s("td",[t._v(t._s(t.order.user.address))])]),s("tr",[s("th",[t._v("付款狀態")]),s("td",[t.order.is_paid?s("span",{staticClass:"text-success"},[t._v("付款完成")]):s("span",[t._v("尚未付款")])])])])]),!1===t.order.is_paid?s("div",{staticClass:"text-right"},[s("button",{staticClass:"btn btn-danger"},[t._v("確認付款去")])]):t._e()])])},a=[function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("thead",[s("th",[t._v("品名")]),s("th",[t._v("數量")]),s("th",[t._v("單價")])])}],o={data:function(){return{order:{user:{}},orderId:""}},methods:{getOrder:function(){var t=this,r="".concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_APIPATH,"/api/").concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_CUSTOMAPIPATH,"/order/").concat(t.orderId);t.isLoading=!0,this.$http.get(r).then((function(r){t.order=r.data.order,console.log(r),t.isLoading=!1}))},payOrder:function(){var t=this,r="".concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_APIPATH,"/api/").concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_CUSTOMAPIPATH,"/pay/").concat(t.orderId);t.isLoading=!0,this.$http.post(r).then((function(r){r.data.success&&t.getOrder(),console.log(r),t.isLoading=!1}))}},created:function(){this.orderId=this.$route.params.orderId,this.getOrder(),console.log(this.orderId)}},d=o,i=s("2877"),n=Object(i["a"])(d,e,a,!1,null,null,null);r["default"]=n.exports}}]);
//# sourceMappingURL=chunk-2d20778a.f0e3dfee.js.map