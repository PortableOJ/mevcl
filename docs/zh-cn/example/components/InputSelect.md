# InputSelect

单项选择器，在多个选项中选择一项

## 局部导入
```js
import InputSelect from "mevcl"
import 'mevcl/src/static/style.css'

Vue.component(InputSelect.name, InputSelect)
```

## 使用
```html
<InputSelect v-model="select" placeholder="test" :data="selectOption"></InputSelect>

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
| value/v-model | 时间 | String, Number |  |
| placeholder | 占位文字与标题 | String | null |
| data | 可选数据，请保证每一项都有 `label` 和 `value` 属性，且 `label` 表示显示的值， `value` 表示背后的值 | Array |  |
| disabled | 是否无效 | Boolean | false |

## 事件

| 事件名 | 解释 | 参数 | 默认行为 |
|:-:|:-:|:-:|:-:|
| change | 当修改值时触发 | 当前选择的文件列表 | 修改 value 值。并预览图片 |
