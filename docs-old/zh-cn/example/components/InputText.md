# InputText

输入框，输入文字或数字

## 局部导入
```js
import InputText from "mevcl"
import 'mevcl/src/static/style.css'

Vue.component(InputText.name, InputText)
```

## 使用
```html
 <InputText v-model="input" placeholder="test"></InputText>
```

## 参数

| 名称 | 解释 | 类型 | 默认值 |
|:-:|:-:|:-:|:-:|
| value/v-model | 输入 | String, Number |  |
| placeholder | 占位文字与标题 | String | null |
| type | 类型 | 在 `'text'`, `'password'`, `'number'` 中选择 | `'text'` |
| readOnly | 是否仅读 | Boolean | false |
| disabled | 是否无效 | Boolean | false |

## 事件

| 事件名 | 解释 | 参数 | 默认行为 |
|:-:|:-:|:-:|:-:|
| change | 当修改值时触发 | 新的值 | 修改 value 值 |
