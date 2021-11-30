# Toast

Toast 是一种通知工具，其会固定出现在屏幕的右上角落，多个 toast 堆积时也会排列在最右侧，主要用于通知信息，而非进行任何的确认和等操作

## 局部导入

```js
import Toast from "mevcl";
import 'mevcl/src/static/style.css'

Vue.use(Toast)
```

## 使用

```js
this.$toast({
    title: 'ABC',       // 标题
    text: 'abc',        // 文字内容
    duration: 'auto',   // 持续时间，若时间小于 0 则为永久，也可以为 auto，则会自动根据文字数量时限
    type: 'success'     // 类型，可选 'success', 'warning', 'error', 'info'
})
```
