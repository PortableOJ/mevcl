# Message Box

消息弹窗，一个占据整个屏幕的窗口，主要用于进行二次确认操作

## 局部导入

```js
import MessageBox from "mevcl"
import 'mevcl/src/static/style.css'

Vue.use(MessageBox)
```

## 使用

带有默认值的参数可以不传递

```js
this.$message({
    text: 'ABC',            // 弹窗信息
    type: 'error',          // 弹窗颜色和图标(默认为 warning，可选类型'success', 'warning', 'error', 'info')
    ok: 'ok',               // 确定按钮的文案(默认为 确定)
    cancel: 'cancel',       // 取消按钮的文案(默认为 取消)
    input: true,            // 是否需要输入文字(默认为 true)
    confirmOK: (v) => {     // 当按下确定按钮时回调函数，若有输入框，则将输入框内的信息作为参数返回
        console.log(v)
    },
    confirmCancel: (v) => { // 当按下取消按钮时回调函数，若有输入框，则将输入框内的信息作为参数返回
        console.log(v)
    },
})
```
