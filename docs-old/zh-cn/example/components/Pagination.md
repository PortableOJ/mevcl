# Pagination

分页显示，通常配合表格使用

## 局部导入
```js
import Pagination from "mevcl"
import 'mevcl/src/static/style.css'

Vue.component(Pagination.name, Pagination)
```

## 使用
```html
<Pagination :total="2000"></Pagination>
```

## 参数

| 名称 | 解释 | 类型 | 默认值 |
|:-:|:-:|:-:|:-:|
| value/v-model | 当前页 | Number | 1 |
| total | 总数量，不是总页数 | Number |  |
| pageSize | 单页数量 | Number | 20 |
| forward | 显示向前页数，例如当前第 1 页，则若为默认值可以直接选择的页面为 2，3，4 三页 | Number | 3 |
| back | 显示向后页数，例如当前第 2 页，则若为默认值可以直接选择的页面仅为 1 页 | Number | 1 |

## 事件

| 事件名 | 解释 | 参数 | 默认行为 |
|:-:|:-:|:-:|:-:|
| change | 当点击新的页面时触发 | 新的页面页码 | 修改当前页面 |
