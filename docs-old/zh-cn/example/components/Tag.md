# Tag

标签效果

## 局部导入
```js
import Tag from "mevcl"
import 'mevcl/src/static/style.css'

Vue.component(Tag.name, Tag)
```

## 使用
```html
<Tag>标签内容</Tag>
```

## slot

显示的标签内的值

## 参数

| 名称 | 解释 | 类型 | 默认值 |
|:-:|:-:|:-:|:-:|
| type | 显示的类型 | 在 `'success'`, `'warning'`, `'error'`, `'info'` 中选择 | `'warning'` |
