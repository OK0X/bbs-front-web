(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["eed6d0ca"],{"8b24":function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",{staticClass:"mypage"},[t._l(t.articles,(function(a){return e("q-card",{key:a.index,staticClass:"my-card",attrs:{flat:"",bordered:""},on:{click:function(e){return t.gotoDetail(a)}}},[e("q-card-section",{staticStyle:{display:"flex","flex-direction":"column"}},[e("span",{staticStyle:{"font-size":"20px"}},[t._v(t._s(a.title))]),e("span",{staticStyle:{color:"gray"}},[t._v("作者:"+t._s(a.author)+" 发布于："+t._s(a.pub_date))])]),e("q-separator"),e("q-card-section",[t._v(t._s(a.txt.substring(0,200)))]),e("q-separator"),e("q-card-actions",{attrs:{align:"right"}},[e("q-btn",{attrs:{flat:"",round:"",color:"red",icon:"favorite"},on:{click:function(a){return a.stopPropagation(),t.favorite(a)}}}),e("q-btn",{attrs:{flat:"",round:"",color:"teal",icon:"bookmark"}}),e("q-btn",{attrs:{flat:"",round:"",color:"primary",icon:"share"}})],1)],1)})),e("div",{staticStyle:{"margin-top":"10px"}},[e("q-btn",{directives:[{name:"show",rawName:"v-show",value:t.hasPrev,expression:"hasPrev"}],attrs:{flat:"",color:"primary",label:"上一页"},on:{click:t.goPrev}}),e("q-btn",{directives:[{name:"show",rawName:"v-show",value:t.hasNext,expression:"hasNext"}],attrs:{flat:"",color:"primary",label:"下一页"},on:{click:t.goNext}})],1)],2)},o=[],s={data:function(){return{hasPrev:!1,hasNext:!1,page:1,articles:[]}},mounted:function(){this.getArticles()},methods:{getArticles:function(){var t=this;this.$axios.get(this.global.api.url+"articles?p="+this.page).then((function(a){0===a.data.code&&(t.articles=a.data.data.articles,t.hasNext=a.data.data.has_more)})).catch((function(t){console.error(t)}))},goPrev:function(){this.page--,this.page<2&&(this.hasPrev=!1),this.getArticles()},goNext:function(){this.page++,this.hasPrev=!0,this.getArticles()},favorite:function(){toast("已收藏")},gotoDetail:function(t){this.$router.push({path:"/ArticleDetail",query:{id:t.id}})}}},i=s,n=(e("9819"),e("2877")),c=e("fe09"),l=Object(n["a"])(i,r,o,!1,null,"24c3960e",null);a["default"]=l.exports;l.options.components=Object.assign({QPage:c["m"],QCard:c["b"],QCardSection:c["d"],QSeparator:c["o"],QCardActions:c["c"],QBtn:c["a"]},l.options.components||{})},9819:function(t,a,e){"use strict";var r=e("d6d7"),o=e.n(r);o.a},d6d7:function(t,a,e){}}]);