# Table

表格

## 局部导入
```js
import Table from "mevcl"
import 'mevcl/src/static/style.css'

Vue.component(Table.name, Table)
```

## 使用
```html
<Table :head="tableHead" :data="tableData">
    <template v-slot:head-name="scope">
        {{ scope.data.label + 'abc' }}
    </template>
    <template v-slot:body-name="scope">
        <Link :disabled="scope.data.name === 'a'">
        {{ scope.data.name + 'abc' }}
        </Link>
        <InputButton @click="msg">TEST</InputButton>
        <InputButton @click="msg">TEST</InputButton>
        <i class="iconfont icon-spread"></i>
    </template>
</Table>

<script>
    let tableHead = [
        {
            label: '名称',
            value: 'name',
            width: '300',
        },
        {
            label: '数据',
            value: 'value',
            width: '100',
        }
    ]
    let tableData = [
        {
            name: 'a',
            value: 123
        },
        {
            name: 'b',
            value: 456
        },
        {
            name: 'c',
            value: 789
        }
    ],
</script>
```

## slot

使用 `v-slot` 实现对某列单元格进行特殊处理

首行使用 `v-slot:head-${单元列的 value}` 即可实现重载，数据部分使用 `v-slot:body-${单元列的 value}` 实现重载

## 参数

| 名称 | 解释 | 类型 | 默认值 |
|:-:|:-:|:-:|:-:|
| head | 页头显示内容，其中，`'label'` 为显示内容，`'value'` 为在 data 中的值，`'width'` 为最小宽度 | Object |  |
| data | 数据，是 head 的所有值的一个字典 | Object |  |
