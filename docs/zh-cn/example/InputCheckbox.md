# InputCheckbox

这是一个选择框，仅表达 true 或 false 这两种语意。此组件表达的语意为多个可选项中的几个同时选中，或者单个项目的打开或关闭

请注意，若需要表达多个选项中其中一个，请采用 InputSelect

## 局部导入
```js
import InputCheckbox from "mevcl"
import 'mevcl/src/static/style.css'

Vue.component(InputCheckbox.name, InputCheckbox)
```

## 使用
```js
<InputCheckbox>选项</InputCheckbox>
```

## Slot

显示的文字内容

## 参数

| 名称 | 解释 | 类型 | 默认值 |
|:-:|:-:|:-:|:-:|
| value/v-model | 开关状态的值 | Boolean |  |
| readOnly | 是否是仅可读的 | Boolean | false |
| disabled | 是否无效 | Boolean | false |

## 事件

| 事件名 | 解释 | 参数 | 默认行为 |
|:-:|:-:|:-:|:-:|
| change | 当点击非仅可读且非无效时 | 新的状态 | 修改 value 值 |
