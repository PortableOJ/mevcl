# Global Loading
这是一个显示加载页面过渡页面，虽然名称为 Global Loading(全局加载动画)，但是仍然可以通过控制其位置来实现仅锁定局部页面，故不采用 API 调用的方式来启动此组件

## 局部导入
```js
import GlobalLoading from "mevcl"
import 'mevcl/src/static/style.css'
```

## 使用
```js
<GlobalLoading></GlobalLoading>
```

## 参数

无参数，请自行使用 `v-if` 或者 `v-show` 进行控制是否显示
