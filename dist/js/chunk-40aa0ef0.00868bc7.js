(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40aa0ef0"],{5823:function(t,e,a){},a82f:function(t,e,a){"use strict";var r=a("5823"),s=a.n(r);s.a},bf4b:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("table",{staticClass:"table mt-4"},[t._m(0),a("tbody",t._l(t.orders,(function(e,r){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.create_at))]),a("td",[a("ul",[a("li",[t._v("訂購單ID:"),a("br"),t._v(t._s(e.id))]),a("li",[t._v("訂購人:"+t._s(e.user.name))]),a("li",[t._v("信箱:"+t._s(e.user.email))]),a("li",[t._v("地址:"+t._s(e.user.address))]),a("li",[t._v("電話:"+t._s(e.user.tel))])])]),a("td",[a("ul",t._l(e.products,(function(e){return a("li",{key:e.id,staticClass:"mb-2"},[a("div",{staticClass:"text-nowrap"},[t._v("\n                                    "+t._s(e.product.title)+" "),a("br"),t._v("\n                                    "+t._s(e.qty)+" "+t._s(e.product.unit)+" - \n\t\t\t\t\t\t\t\t\t\t"),e.final_total>=e.total?a("span",{staticClass:"text-main"},[t._v(t._s(t._f("currency")(e.final_total)))]):t._e(),e.final_total<e.total?a("span",{staticClass:"text-danger"},[t._v(t._s(t._f("currency")(e.final_total))+" ("+t._s(e.coupon.title)+")")]):t._e()])])})),0)]),a("td",[t._v(t._s(e.message))]),a("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(e.total)))]),a("td",[e.is_paid?a("ul",[a("li",{staticClass:"text-success font-weight-bold"},[t._v("已付款")]),a("li",[t._v(t._s(e.paid_date))])]):a("span",[t._v("尚未付款")])]),a("td",[a("button",{staticClass:"btn btn-outline-primary btn-sm",on:{click:function(a){return t.openOrederModal(!1,e)}}},[t._v("編輯")]),a("button",{staticClass:"btn btn-outline-danger btn-sm mt-2",on:{click:function(a){return t.delOrderModal(e)}}},[t._v("刪除")])])])})),0)]),0!=t.orders.length?a("Pagination",{attrs:{pagination:t.pagination},on:{getPage:t.getOrders}}):t._e(),a("div",{staticClass:"modal fade",attrs:{id:"orderModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(1),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-12"},[a("label",{attrs:{for:"title"}},[t._v("購買時間")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempOrder.title,expression:"tempOrder.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"請輸入標題"},domProps:{value:t.tempOrder.title},on:{input:function(e){e.target.composing||t.$set(t.tempOrder,"title",e.target.value)}}})]),a("div",{staticClass:"form-group col-12"},[a("label",{attrs:{for:"code"}},[t._v("訂購人資訓")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempOrder.code,expression:"tempOrder.code"}],staticClass:"form-control",attrs:{type:"text",id:"code",placeholder:"請輸入優惠碼"},domProps:{value:t.tempOrder.code},on:{input:function(e){e.target.composing||t.$set(t.tempOrder,"code",e.target.value)}}})]),a("div",{staticClass:"form-group col-12"},[a("label",{attrs:{for:"due_date"}},[t._v("訂購內容")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempOrder.due_date,expression:"tempOrder.due_date"}],staticClass:"form-control",attrs:{type:"date",id:"due_date",placeholder:"請輸入到期日"},domProps:{value:t.tempOrder.due_date},on:{input:function(e){e.target.composing||t.$set(t.tempOrder,"due_date",e.target.value)}}})]),a("div",{staticClass:"form-group col-12"},[a("label",{attrs:{for:"percent"}},[t._v("備註")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempOrder.percent,expression:"tempOrder.percent"}],staticClass:"form-control",attrs:{type:"number",id:"percent",placeholder:"請輸入折扣百分比"},domProps:{value:t.tempOrder.percent},on:{input:function(e){e.target.composing||t.$set(t.tempOrder,"percent",e.target.value)}}})])]),a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempOrder.is_enabled,expression:"tempOrder.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox","true-value":1,"false-value":0,id:"is_enabled"},domProps:{checked:Array.isArray(t.tempOrder.is_enabled)?t._i(t.tempOrder.is_enabled,null)>-1:t._q(t.tempOrder.is_enabled,1)},on:{change:function(e){var a=t.tempOrder.is_enabled,r=e.target,s=r.checked?1:0;if(Array.isArray(a)){var d=null,o=t._i(a,d);r.checked?o<0&&t.$set(t.tempOrder,"is_enabled",a.concat([d])):o>-1&&t.$set(t.tempOrder,"is_enabled",a.slice(0,o).concat(a.slice(o+1)))}else t.$set(t.tempOrder,"is_enabled",s)}}}),a("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v("\n                            是否啟用\n                            ")])])])])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.updateOrder}},[t._v("確認")])])])])]),a("div",{staticClass:"modal fade",attrs:{id:"delOrderModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(2),a("div",{staticClass:"modal-body"},[t._v("\n                    是否刪除 "),a("strong",{staticClass:"text-danger"},[t._v(t._s(t.tempOrder.title))]),t._v(" 商品(刪除後將無法恢復)。\n                ")]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return t.delOrder()}}},[t._v("確認刪除")])])])])])],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{width:"100"}},[t._v("購買時間")]),a("th",[t._v("訂購人資訊")]),a("th",[t._v("購買內容")]),a("th",{attrs:{width:"120"}},[t._v("備註")]),a("th",[t._v("應付金額")]),a("th",{attrs:{width:"100"}},[t._v("是否付款")]),a("th",{attrs:{width:"100"}},[t._v("編輯")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-dark text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("訂單內容")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-danger text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("刪除產品")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],d=a("1157"),o=a.n(d),i=a("1799"),n={data:function(){return{orders:[],tempOrder:{user:{},products:{}},pagination:{},isNew:!1,isLoading:!1}},methods:{getOrders:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this,a="".concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_APIPATH,"/api/").concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_CUSTOMAPIPATH,"/admin/orders?page=").concat(t);e.isLoading=!0,this.$http.get(a).then((function(t){console.log(t.data),e.orders=t.data.orders,e.pagination=t.data.pagination,e.isLoading=!1}))},openOrederModal:function(t,e){t?(this.tempOrder={},this.isNew=!0):(this.tempOrder=Object.assign({},e),this.isNew=!1),o()("#orderModal").modal("show")},updateOrder:function(){var t="".concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_APIPATH,"/api/").concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_CUSTOMAPIPATH,"/admin/order"),e="post",a=this;a.isNew||(t="".concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_APIPATH,"/api/").concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_CUSTOMAPIPATH,"/admin/order/").concat(a.tempOrder.id),e="put"),console.log(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_APIPATH,Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_CUSTOMAPIPATH),this.$http[e](t,{data:a.tempOrder}).then((function(t){console.log(t.data),t.data.success?(o()("#orderModal").modal("hide"),a.getOrders()):(o()("#orderModal").modal("hide"),a.getOrders(),console.log("新增失敗")),a.order=t.data.order}))},openDelOrderModal:function(t){var e=this;console.log(t),e.tempOrder=Object.assign({},t),o()("#delOrderModal").modal("show")},delOrder:function(){var t=this,e="".concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_APIPATH,"/api/").concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_CUSTOMAPIPATH,"/admin/order/").concat(t.tempOrder.id);this.$http.delete(e,{data:t.tempOrder}).then((function(e){console.log(e.data),e.data.success?(o()("#delOrderModal").modal("hide"),t.getOrders()):(o()("#delOrderModal").modal("hide"),alert("刪除失敗"))}))}},created:function(){this.getOrders()},components:{Pagination:i["a"]}},l=n,c=(a("a82f"),a("2877")),_=Object(c["a"])(l,r,s,!1,null,null,null);e["default"]=_.exports}}]);
//# sourceMappingURL=chunk-40aa0ef0.00868bc7.js.map