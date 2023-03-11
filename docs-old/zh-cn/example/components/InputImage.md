# InputImage

图片选择器，可以选择一张图片并进行预览

## 局部导入
```js
import InputImage from "mevcl"
import 'mevcl/src/static/style.css'

Vue.component(InputImage.name, InputImage)
```

## 使用
```html
<inputImage v-model="inputImageFile"></inputImage>
```

## 参数

| 名称 | 解释 | 类型 | 默认值 |
|:-:|:-:|:-:|:-:|
| value/v-model | 时间 | String |  |
| placeholder | 占位图片，若不选中任何图片时显示的图片的 url。若为 null 则显示默认的按钮 | String | null |
| accept | 支持的文件类型 | String | `'image/*'`
| readOnly | 是否是仅可读的 | Boolean | false |
| disabled | 是否无效 | Boolean | false |

## 事件

| 事件名 | 解释 | 参数 | 默认行为 |
|:-:|:-:|:-:|:-:|
| change | 当修改值时触发 | 当前选择的文件列表 | 修改 value 值。并预览图片 |
