(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ce540ee"],{"16e0":function(t,n,e){"use strict";e.r(n);var s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"CollaborationInfo"},[e("div",{staticClass:"basic-block data-table"},[e("div",{staticClass:"hint-block"},[e("svg-icon",{attrs:{"icon-class":"Warning"}}),e("div",{staticClass:"cs-label"},[t._v("绑定专属合营链接,")]),e("div",{staticClass:"cs-link",on:{click:t.goToCS}},[t._v("请洽客服")])],1),e("div",{staticClass:"table-box"},[e("TableFrame",{attrs:{list:t.list,"list-loading":t.listLoading,"is-zebra":!0}},[e("el-table-column",{attrs:{label:"类别",align:"center"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("span",[t._v(t._s(n.row.Type))])]}}])}),e("el-table-column",{attrs:{label:"链接",align:"center",width:"800"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("span",[t._v(t._s(n.row.Url))])]}}])}),e("el-table-column",{attrs:{label:"操作",align:"center",width:"400"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("div",{staticClass:"custom-btn",on:{click:function(e){return t.handleClipboard(n.row.Url)}}},[t._v(" 复制 ")])]}}])})],1)],1)])])},o=[],i=(e("4c53"),e("bbbc")),a=e("2b0e"),c=e("b311"),l=e.n(c);function r(){a["default"].prototype.$message({message:"Copy successfully",type:"success",duration:1500})}function u(){a["default"].prototype.$message({message:"Copy failed",type:"error"})}function d(t,n){var e=new l.a(n.target,{text:function(){return t}});e.on("success",(function(){r(),e.destroy()})),e.on("error",(function(){u(),e.destroy()})),e.onClick(n)}var f={name:"CollaborationInfo",data:function(){return{list:[],listLoading:!1}},created:function(){this.listAsync()},methods:{listAsync:function(){var t=this;this.listLoading=!0,Object(i["c"])().then((function(n){var e=n.data,s=n.code,o=n.Message;2e4===s?t.list=e:t.$notify({title:"提示",message:o}),setTimeout((function(){t.listLoading=!1}),500)}))},handleClipboard:function(t){d(t,event)},goToCS:function(){window.open(this.serviceList[0].sub,"_blank","toolbar=no,scrollbars=no,menubar=no,status=no,resizable=yes,location=no")}}},b=f,m=(e("4596"),e("2877")),p=Object(m["a"])(b,s,o,!1,null,"62442aeb",null);n["default"]=p.exports},3256:function(t,n,e){},4596:function(t,n,e){"use strict";e("3256")},bbbc:function(t,n,e){"use strict";e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i})),e.d(n,"b",(function(){return a})),e.d(n,"d",(function(){return c})),e.d(n,"e",(function(){return l}));var s=e("b775");function o(){return Object(s["a"])({url:"/vue-element-admin/ListAsync",method:"post"})}function i(t){return Object(s["a"])({url:"/vue-element-admin/ListAgentAsync",method:"post",data:t})}function a(t){return Object(s["a"])({url:"/vue-element-admin/ListAgentCommissionAsync",method:"post",data:t})}function c(t){return Object(s["a"])({url:"/vue-element-admin/ReceiveAgentCommissionAsync",method:"post",data:t})}function l(t){return Object(s["a"])({url:"/vue-element-admin/TradeHistoryListAsync",method:"post",data:t})}}}]);