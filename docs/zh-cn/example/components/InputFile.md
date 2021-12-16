# InputFile

这是一个文件选择器，可以获取一个或多个文件

## 局部导入
```js
import InputFile from "mevcl"
import 'mevcl/src/static/style.css'

Vue.component(InputFile.name, InputFile)
```

## 使用
```html
<InputFile v-model="inputFile" placeholder="test" multiple accept="image/*"></InputFile>
```

## 参数

| 名称 | 解释 | 类型 | 默认值 |
|:-:|:-:|:-:|:-:|
| value/v-model | 时间 | String |  |
| placeholder | 占位符（标题） | String |  |
| accept | 支持的文件类型 | String | `'*/*'`
| readOnly | 是否是仅可读的 | Boolean | false |
| disabled | 是否无效 | Boolean | false |
| multiple | 是否支持多文件 | Boolean | false |

## 事件

| 事件名 | 解释 | 参数 | 默认行为 |
|:-:|:-:|:-:|:-:|
| change | 当修改值时触发 | 当前选择的文件列表 | 修改 value 值 |
