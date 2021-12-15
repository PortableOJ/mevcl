# Alert

这是一个通知提示栏，用于长时间在页面上显示的提醒，警告标语

## 局部导入
```js
import Alert from "mevcl"
import 'mevcl/src/static/style.css'

Vue.component(Alert.name, Alert)
```

## 使用
```js
<Alert>通知提示内容</Alert>
```

## 参数

| 名称 | 解释 | 类型 | 默认值 |
|:-:|:-:|:-:|:-:|
| type | 显示的类型 | 在 `'success'`, `'warning'`, `'error'`, `'info'` 中选择 | `'warning'` |
| canClose | 是否可以关闭 | Boolean | `true` |

## 事件

| 事件名 | 解释 | 参数 | 默认行为 |
|:-:|:-:|:-:|:-:|
| close | 当关闭动画结束后，调用此函数 | 无参数 | 无 |
