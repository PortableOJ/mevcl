# Steps

步骤进度条

## 局部导入
```js
import Steps from "mevcl"
import 'mevcl/src/static/style.css'

Vue.component(Steps.name, Steps)
```

## 使用
```html
<Steps :data="stepList" :value="select"></Steps>

<script>
    let stepList = [
        {
            type: 'success',
            title: 'step 1',
            value: 1,
            icon: 'success',
            disabled: false,
        },
        {
            type: 'brand',
            title: 'step 2',
            value: 2,
            disabled: false,
        },
        {
            type: 'info',
            title: 'step 3',
            value: 3,
            disabled: true,
        },
    ]
</script>
```

## 参数

| 名称 | 解释 | 类型 | 默认值 |
|:-:|:-:|:-:|:-:|
| value/v-model | 当前页 | Number | 1 |
| data | 数据，需要一份复杂的结构，下面为所有的参数说明 | Object |  |

> | 名称 | 解释 | 类型 | 默认值 |
> |:-:|:-:|:-:|:-:|
> | type | 显示的颜色类型，请参考[颜色](../basic/color.md) | String | 'brand' |
> | title | 标题内容 | String | 显示的文字内容 |
> | value | 值 | String/Number | |
> | icon | 显示的图标，若不提供，则默认在进度之前显示数字，进度之后显示成功标志，图标参见 [图标](../basic/icon.md) | String | |
> | disabled | 是否不可以点击 | Boolean | false |

## 事件

| 事件名 | 解释 | 参数 | 默认行为 |
|:-:|:-:|:-:|:-:|
| change | 当点击新的进度时触发 | 新的进度 value | 修改当前进度 |
