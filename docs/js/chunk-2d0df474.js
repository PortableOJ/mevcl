(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0df474"],{"88db":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-title"},[e("h1",[t._v("输入框")]),e("div",{staticClass:"main-desc"},[t._v("输入框，用于输入文字、数字或者密码，仅支持单行输入")]),e("h3",[t._v("基本功能")]),e("div",{staticClass:"main-desc"},[e("div",[t._v(" 输入框有三种模式：文本、密码、纯数字，你可以通过 "),e("MarkdownInlineCode",{attrs:{value:"type"}}),t._v(" 字段来进行指定 ")],1),e("div",[t._v(" 同时你可以通过 "),e("MarkdownInlineCode",{attrs:{value:"v-model"}}),t._v(" 来获取到当前的输入内容 ")],1)]),e("div",{staticClass:"main-exam"},[e("MarkdownBlockCode",{attrs:{value:t.example1}}),e("div",[e("div",{staticStyle:{display:"grid","grid-template-columns":"auto 1fr","place-items":"center"}},[e("div",[t._v("文本")]),e("InputText",{attrs:{type:"text"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),e("div",[t._v("密码")]),e("InputText",{attrs:{type:"password"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),e("div",[t._v("纯数字")]),e("InputText",{attrs:{type:"number"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}})],1),e("div",[t._v("当前的输入内容为: "+t._s(t.input))])])],1),e("h3",[t._v("控制功能")]),e("div",{staticClass:"main-desc"},[e("div",[t._v(" 输入框可以通过 "),e("MarkdownInlineCode",{attrs:{value:"placeholder"}}),t._v(" 字段来描述留空显示 ")],1),e("div",[t._v(" 同时你可以通过 "),e("MarkdownInlineCode",{attrs:{value:"readOnly"}}),t._v(" 来表示仅读，而 "),e("MarkdownInlineCode",{attrs:{value:"disabled"}}),t._v(" 表示禁用 ")],1)]),e("div",{staticClass:"main-exam"},[e("MarkdownBlockCode",{attrs:{value:t.example2}}),e("div",[e("div",{staticStyle:{display:"grid","grid-template-columns":"auto 1fr","place-items":"center"}},[e("div",[t._v("占位符")]),e("InputText",{attrs:{placeholder:"this is placeholder..."},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),e("div",[t._v("仅读")]),e("InputText",{attrs:{readOnly:""},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),e("div",[t._v("禁用")]),e("InputText",{attrs:{disabled:""},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}})],1),e("div",[t._v("当前的输入内容为: "+t._s(t.input))])])],1),e("h3",[t._v("其他功能")]),e("div",{staticClass:"main-desc"},[e("div",[t._v(" 你可以通过 "),e("MarkdownInlineCode",{attrs:{value:"shake()"}}),t._v(" 方法来让输入框进行颤抖 ")],1)]),e("div",{staticClass:"main-exam"},[e("MarkdownBlockCode",{attrs:{value:t.example3}}),e("div",{staticStyle:{display:"grid","place-items":"center"}},[e("InputText",{ref:"shake",attrs:{placeholder:"name"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),e("InputButton",{on:{click:function(e){return t.$refs.shake.shake()}}},[t._v("点击进行抖动")])],1)],1)])},a=[],d=n("a50a"),l=n("3ba9"),p=n("73e6"),s=n("a9ff"),u={name:"InputTextDemo",components:{InputButton:s["a"],MarkdownInlineCode:p["a"],MarkdownBlockCode:l["a"],InputText:d["a"]},data(){return{input:"",example1:'<div>\n  <div style="display: grid; grid-template-columns: auto 1fr; place-items: center">\n    <div>文本</div>\n    <InputText type="text" v-model="input"></InputText>\n    <div>密码</div>\n    <InputText type="password" v-model="input"></InputText>\n    <div>纯数字</div>\n    <InputText type="number" v-model="input"></InputText>\n  </div>\n  <div>当前的输入内容为: {{input}}</div>\n</div>',example2:'<div>\n  <div style="display: grid; grid-template-columns: auto 1fr; place-items: center">\n    <div>占位符</div>\n    <InputText v-model="input" placeholder="this is placeholder..."></InputText>\n    <div>仅读</div>\n    <InputText v-model="input" readOnly></InputText>\n    <div>禁用</div>\n    <InputText v-model="input" disabled></InputText>\n  </div>\n  <div>当前的输入内容为: {{ input }}</div>\n</div>',example3:'<div style="display: grid; place-items: center">\n  <InputText ref="shake" v-model="input" placeholder="name"></InputText>\n  <InputButton @click="$refs.shake.shake()">点击进行抖动</InputButton>\n</div>'}}},v=u,o=n("e607"),r=Object(o["a"])(v,i,a,!1,null,"63415f90",null);e["default"]=r.exports}}]);