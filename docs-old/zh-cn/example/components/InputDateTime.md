# InputDateTime

这是一个时间选择器，目前强制需要同时选择日期和时间

## 局部导入
```js
import InputDateTime from "mevcl"
import 'mevcl/src/static/style.css'

Vue.component(InputDateTime.name, InputDateTime)
```

## 使用
```html
<InputDateTime v-model="dateTimeValue" placeholder="开始时间"></InputDateTime>
```

## 参数

| 名称 | 解释 | 类型 | 默认值 |
|:-:|:-:|:-:|:-:|
| value/v-model | 时间 | String |  |
| placeholder | 占位符（标题） | String |  |
| readOnly | 是否是仅可读的 | Boolean | false |
| disabled | 是否无效 | Boolean | false |

## 事件

| 事件名 | 解释 | 参数 | 默认行为 |
|:-:|:-:|:-:|:-:|
| change | 当修改值时触发 | 新的时间 | 修改 value 值 |
