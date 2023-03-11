# Link

文字链接

## 局部导入
```js
import Link from "mevcl"
import 'mevcl/src/static/style.css'

Vue.component(Link.name, Link)
```

## 使用
```html
<Link>Link</Link>
```

## slot
链接需要显示的内容

## 参数

| 名称 | 解释 | 类型 | 默认值 |
|:-:|:-:|:-:|:-:|
| disabled | 是否无效 | Boolean | false |

## 事件

| 事件名 | 解释 | 参数 | 默认行为 |
|:-:|:-:|:-:|:-:|
| click | 当被点击时触发 |  |  |
