(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d238406"],{ff1a:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),e("div",{staticClass:"row mt-4"},t._l(t.products,(function(a){return e("div",{key:a.id,staticClass:"col-md-4 mb-4"},[e("div",{staticClass:"card border-0 shadow-sm"},[e("div",{staticStyle:{height:"150px","background-size":"cover","background-position":"center"},style:{backgroundImage:"url("+a.imageUrl+")"}}),e("div",{staticClass:"card-body"},[e("span",{staticClass:"badge badge-secondary float-right ml-2"},[t._v(t._s(a.category))]),e("h5",{staticClass:"card-title"},[e("a",{staticClass:"text-dark",attrs:{href:"#"}},[t._v(t._s(a.title))])]),e("p",{staticClass:"card-text"},[t._v(t._s(a.content))]),e("div",{staticClass:"d-flex justify-content-between align-items-baseline"},[a.price?t._e():e("div",{staticClass:"h5"},[t._v(t._s(a.origin_price))]),a.price?e("div",{staticClass:"h6"},[t._v(t._s(a.origin_price))]):t._e(),a.price?e("div",{staticClass:"h5"},[t._v(t._s(a.price))]):t._e()])]),e("div",{staticClass:"card-footer d-flex"},[e("button",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{type:"button"},on:{click:function(e){return t.getProduct(a)}}},[t.status.loadingItem===a.id?e("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v("\n                        查看更多\n                    ")]),e("button",{staticClass:"btn btn-outline-danger btn-sm ml-auto",attrs:{type:"button"},on:{click:function(e){return t.addtoCart(a.id)}}},[t.status.loadingItem===a.id?e("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v("\n                        加到購物車\n                    ")])])])])})),0),e("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content border-0"},[e("div",{staticClass:"modal-header bg-danger text-white"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("\n                    "+t._s(t.product.title)+"\n                    ")]),t._m(0)]),e("div",{staticClass:"modal-body"},[e("img",{staticClass:"img-fluid",attrs:{src:t.product.imageUrl,alt:""}}),e("blockquote",{staticClass:"blockquote mt-3"},[e("p",{staticClass:"mb-0"},[t._v(t._s(t.product.content))]),e("footer",{staticClass:"blockquote-footer text-right"},[t._v(t._s(t.product.description))])]),e("div",{staticClass:"d-flex justify-content-between align-items-baseline"},[t.product.price?t._e():e("div",{staticClass:"h4"},[t._v(t._s(t.product.origin_price)+" 元")]),t.product.price?e("div",{staticClass:"h6"},[t._v("原價 "+t._s(t.product.origin_price)+" 元")]):t._e(),t.product.price?e("div",{staticClass:"h4"},[t._v("現在只要 "+t._s(t.product.price)+" 元")]):t._e()]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.product.num,expression:"product.num"}],staticClass:"form-control mt-3",attrs:{name:""},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.product,"num",a.target.multiple?e:e[0])}}},t._l(10,(function(a){return e("option",{key:a,domProps:{value:a}},[t._v("\n                       選購 "+t._s(a)+" "+t._s(t.product.unit)+"\n                       ")])})),0)]),e("div",{staticClass:"modal-footer"},[e("div",{staticClass:"text-muted text-nowrap mr-3"},[t._v("\n                     小計 "),e("strong",[t._v(t._s(t.product.num*t.product.price))]),t._v(" 元\n                   ")]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){return t.addtoCart(t.product.id,t.product.num)}}},[t.product.id===t.status.loadingItem?e("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v("\n                    加到購物車")])])])])]),e("div",{staticClass:"my-5 row justify-content-center"},[e("div",{staticClass:"my-5 row justify-content-center"},[e("table",{staticClass:"table"},[t._m(1),e("tbody",t._l(t.cart.carts,(function(a){return t.cart.carts?e("tr",{key:a.id},[e("td",{staticClass:"align-middle"},[e("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(e){return t.removeCartItem(a.id)}}},[e("i",{staticClass:"far fa-trash-alt"})])]),e("td",{staticClass:"align-middle"},[t._v("\n                "+t._s(a.product.title)+"\n                 "),a.coupon?e("div",{staticClass:"text-success"},[t._v("\n                  已套用優惠券\n                 ")]):t._e()]),e("td",{staticClass:"align-middle"},[t._v(t._s(a.qty)+"/"+t._s(a.product.unit))]),e("td",{staticClass:"align-middle text-right"},[t._v(t._s(a.final_total))])]):t._e()})),0),e("tfoot",[e("tr",[e("td",{staticClass:"text-right",attrs:{colspan:"3"}},[t._v("總計")]),e("td",{staticClass:"text-right"},[t._v(t._s(t.cart.total))])]),t.cart.final_total!==t.cart.total?e("tr",[e("td",{staticClass:"text-right text-success",attrs:{colspan:"3"}},[t._v("折扣價")]),e("td",{staticClass:"text-right text-success"},[t._v(t._s(t.cart.final_total))])]):t._e()])]),e("div",{staticClass:"input-group mb-3 input-group-sm"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon_code,expression:"coupon_code"}],staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入優惠碼"},domProps:{value:t.coupon_code},on:{input:function(a){a.target.composing||(t.coupon_code=a.target.value)}}}),e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:t.addCouponCode}},[t._v("\n                      套用優惠碼\n                   ")])])])])]),e("div",{staticClass:"my-5 row justify-content-center"},[e("form",{staticClass:"col-md-6",on:{submit:function(a){return a.preventDefault(),t.createOrder(a)}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"useremail"}},[t._v("Email")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.email,expression:"form.user.email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"form-control",attrs:{type:"email",name:"email",id:"useremail",placeholder:"請輸入 Email"},domProps:{value:t.form.user.email},on:{input:function(a){a.target.composing||t.$set(t.form.user,"email",a.target.value)}}}),t.errors.has("email")?e("span",{staticClass:"text-danger"},[t._v("\n              "+t._s(t.errors.first("email"))+" \n              ")]):t._e()]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"username"}},[t._v("收件人姓名")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.name,expression:"form.user.name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("name")},attrs:{type:"text",name:"name",id:"username",placeholder:"請輸入姓名"},domProps:{value:t.form.user.name},on:{input:function(a){a.target.composing||t.$set(t.form.user,"name",a.target.value)}}}),t.errors.has("name")?e("span",{staticClass:"text-danger"},[t._v("姓名輸入錯誤")]):t._e()]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"usertel"}},[t._v("收件人電話")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.tel,expression:"form.user.tel"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("usertel")},attrs:{type:"tel",name:"usertel",id:"usertel",placeholder:"請輸入電話"},domProps:{value:t.form.user.tel},on:{input:function(a){a.target.composing||t.$set(t.form.user,"tel",a.target.value)}}}),t.errors.has("usertel")?e("span",{staticClass:"text-danger"},[t._v("電話輸入錯誤")]):t._e()]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"useraddress"}},[t._v("收件人地址")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.address,expression:"form.user.address"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("address")},attrs:{type:"text",name:"address",id:"useraddress",placeholder:"請輸入地址"},domProps:{value:t.form.user.address},on:{input:function(a){a.target.composing||t.$set(t.form.user,"address",a.target.value)}}}),t.errors.has("address")?e("span",{staticClass:"text-danger"},[t._v("地址欄位不得留空")]):t._e()]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"comment"}},[t._v("備註")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{name:"",id:"comment",cols:"20",rows:"5"},domProps:{value:t.form.message},on:{input:function(a){a.target.composing||t.$set(t.form,"message",a.target.value)}}})]),t._m(2)])])],1)},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th"),e("th",[t._v("品名")]),e("th",[t._v("數量")]),e("th",[t._v("單價")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"text-right"},[e("button",{staticClass:"btn btn-danger"},[t._v("送出訂單")])])}],r=e("1157"),i=e.n(r),n={data:function(){return{products:[],product:{},status:{loadingItem:""},form:{user:{name:"",email:"",tel:"",address:""},message:""},cart:{},isLoading:!1,coupon_code:""}},methods:{getProducts:function(){var t=this,a="".concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_APIPATH,"/api/").concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_CUSTOMAPIPATH,"/products");t.isLoading=!0,this.$http.get(a).then((function(a){t.products=a.data.products,console.log(a.data),t.isLoading=!1}))},getProduct:function(t){var a=this,e="".concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_APIPATH,"/api/").concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_CUSTOMAPIPATH,"/product/").concat(t.id);a.status.loadingItem=t.id,this.$http.get(e).then((function(t){a.product=t.data.product,i()("#productModal").modal("show"),console.log(t.data),a.status.loadingItem=""}))},addtoCart:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e=this,s="".concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_APIPATH,"/api/").concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_CUSTOMAPIPATH,"/cart");e.status.loadingItem=t.id;var o={product_id:t,qty:a};this.$http.post(s,{data:o}).then((function(t){console.log(t.data),e.status.loadingItem="",e.getCart(),i()("#productModal").modal("hide")}))},getCart:function(){var t=this,a="".concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_APIPATH,"/api/").concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_CUSTOMAPIPATH,"/cart");t.isLoading=!0,this.$http.get(a).then((function(a){t.cart=a.data.data,console.log(a.data),t.isLoading=!1}))},removeCartItem:function(t){var a=this,e="".concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_APIPATH,"/api/").concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_CUSTOMAPIPATH,"/cart/").concat(t);a.isLoading=!0,this.$http.delete(e).then((function(){a.getCart(),a.isLoading=!1}))},addCouponCode:function(){var t=this,a="".concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_APIPATH,"/api/").concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_CUSTOMAPIPATH,"/coupon"),e={code:t.coupon_code};t.isLoading=!0,this.$http.post(a,{data:e}).then((function(a){t.getCart(),t.isLoading=!1}))},createOrder:function(){var t=this,a=this,e="".concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_APIPATH,"/api/").concat(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_CUSTOMAPIPATH,"/order"),s=a.form;this.$validator.validate().then((function(o){o?t.$http.post(e,{data:s}).then((function(t){console.log("訂單已建立",t),t.data.success&&a.$router.push("/customer_checkout/".concat(t.data.orderId)),a.isLoading=!1})):console.log("欄位不完整")}))}},created:function(){this.getProducts(),this.getCart()}},c=n,d=e("2877"),l=Object(d["a"])(c,s,o,!1,null,null,null);a["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d238406.48c9518d.js.map