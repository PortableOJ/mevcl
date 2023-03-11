# InputSlider

滑块，在一个范围内选择一个数字

## 局部导入
```js
import InputSlider from "mevcl"
import 'mevcl/src/static/style.css'

Vue.component(InputSlider.name, InputSlider)
```

## 使用
```html
<InputSlider v-model="sliderValue" :valueFormat="() => ''"></InputSlider>
```

## 参数

| 名称 | 解释 | 类型 | 默认值 |
|:-:|:-:|:-:|:-:|
| value/v-model | 数据 | String, Number |  |
| min | 最小值 | Number | 0 |
| max | 最大值 | Number | 100 |
| step | 步长 | Number | null |
| valueFormat | 显示的数据样式 | Function | d => d.toFixed(2).toString() |
| disabled | 是否无效 | Boolean | false |

## 事件

| 事件名 | 解释 | 参数 | 默认行为 |
|:-:|:-:|:-:|:-:|
| change | 当修改值时触发 | 新的值 | 修改 value 值 |
