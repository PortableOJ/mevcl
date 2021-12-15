<div align="center">
   <img src="https://github.com/ZJGSU-TTCM/mevcl/blob/docs/v0.2.0/public/favicon.png?raw=true" alt="MEVCL"/>
   <br>
   <h1>MEVCL</h1>
   <p>the Minimal and Efficient Vue(2.0) Component Library(一个极小但高效的 Vue 组件库)</p>
</div>

# Install

```shell
npm install mevcl
```

# Example

```shell
git clone https://github.com/ZJGSU-TTCM/mevcl.git
cd mevcl
npm i
npm run serve
```

then, open [http://localhost:8080/](http://localhost:8080/) in your browser

# Quick Start

## Import all component

```js
import Vue from 'vue'
import Mevcl from 'mevcl'

import 'mevcl/src/static/style.css'

Vue.use(Mevcl)
```

## Import some component

```js
import Vue from 'vue'

import {
    InputButton,
    InputText
} from 'mevcl'

import 'mevcl/src/static/style.css'

Vue.component(InputButton.name, InputButton)
Vue.component(InputText.name, InputText)
```

# How to use it

## zh-CN(中文使用文档)
 - 调用 API 的组件
   - [MessageBox(通知弹窗)](docs/zh-cn/example/MessageBox.md)
   - [Toast(消息提示)](docs/zh-cn/example/Toast.md)
 - 普通的 Vue 组件
   - [Alert(提示标语)](docs/zh-cn/example/Alert.md)
   - [GlobalLoading(加载页面)](docs/zh-cn/example/GlobalLoading.md)
   - [InputButton(按钮)](docs/zh-cn/example/InputButton.md)
   - [InputCheckbox(开关)](docs/zh-cn/example/InputCheckbox.md)

# Links

 - [npm](https://www.npmjs.com/package/mevcl)

# LICENSE

[MIT](https://github.com/ZJGSU-TTCM/mevcl/blob/master/LICENSE)
