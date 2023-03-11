# NavMenu

文字链接

## 局部导入
```js
import NavMenu from "mevcl"
import 'mevcl/src/static/style.css'

Vue.component(NavMenu.name, NavMenu)
```

## 使用
```html
<NavMenu :options="selectOption" v-model="select"></NavMenu>

<script>
    let selectOption = [
        {
            label: '111',
            value: 1,
        },
        {
            label: '222',
            value: 2
        },
        {
            label: '333',
            value: 3
        },
        {
            label: '444',
            value: 4
        },
        {
            label: '555',
            value: 5
        },
        {
            label: '666',
            value: 6
        },
        {
            label: '777',
            value: 7
        }
    ]
</script>
```

## 参数

| 名称 | 解释 | 类型 | 默认值 |
|:-:|:-:|:-:|:-:|
| value/v-model | 被选择项 | String, Number |  |
| options | 选项，请保证每一项都有 `label` 和 `value` 属性，且 `label` 表示显示的值， `value` 表示背后的值 | Array |  |

## 事件

| 事件名 | 解释 | 参数 | 默认行为 |
|:-:|:-:|:-:|:-:|
| change | 当修改值时触发 | 当前选择的文件列表 | 修改 value 值。并预览图片 |
