# InputButton

这是一个按钮

## 局部导入
```js
import InputButton from "mevcl"
import 'mevcl/src/static/style.css'

Vue.component(InputButton.name, InputButton)
```

## 使用
```js
<InputButton>按钮</InputButton>
```

## Slot

显示的文字内容，若 loading/process 其中任意一个为启用，则无效

## 参数

| 名称 | 解释 | 类型 | 默认值 |
|:-:|:-:|:-:|:-:|
| disabled | 是否可用 | Boolean | false |
| loading | 是否显示为加载中，这会导致按钮也不可用 | Boolean | true |
| process | 是否显示为进度条，且显示的数值为多少，这会导致按钮也不可用，若不需要则为 null | Number | null |
| type | 按钮的风格 | 在 `'brand'`, `'success'`, `'warning'`, `'error'`, `'info'` 中选择 | `'brand'` |

## 事件

| 事件名 | 解释 | 参数 | 默认行为 |
|:-:|:-:|:-:|:-:|
| click | 当按钮非不可用时，点击按钮产生此事件 | 无参数 | |
