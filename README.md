<div align="center">
   <img src="https://github.com/ZJGSU-TTCM/mevcl/blob/master/public/favicon.png?raw=true" alt="MEVCL"/>
   <br>
   <h1>MEVCL</h1>
   <p>the Minimal and Efficient Vue(2.0) Component Library(一个极小但高效的 Vue 组件库)</p>
</div>

# Install

```shell
npm install mevcl
```

# Example

have a preview for this library

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
   - [MessageBox(通知弹窗)](docs/zh-cn/example/components/MessageBox.md)
   - [Toast(消息提示)](docs/zh-cn/example/components/Toast.md)
 - 普通的 Vue 组件
   - [Alert(提示标语)](docs/zh-cn/example/components/Alert.md)
   - [GlobalLoading(加载页面)](docs/zh-cn/example/components/GlobalLoading.md)
   - [InputButton(按钮)](docs/zh-cn/example/components/InputButton.md)
   - [InputCheckbox(开关)](docs/zh-cn/example/components/InputCheckbox.md)
   - [InputDateTime(时间)](docs/zh-cn/example/components/InputDateTime.md)
   - [InputFile(文件选择器)](docs/zh-cn/example/components/InputFile.md)
   - [InputImage(图片选择器)](docs/zh-cn/example/components/InputImage.md)
   - [InputSelect(单项选择器)](docs/zh-cn/example/components/InputSelect.md)
   - [InputSlider(滑块)](docs/zh-cn/example/components/InputSlider.md)
   - [InputText(文本输入框)](docs/zh-cn/example/components/InputText.md)
   - [Link(文字链接)](docs/zh-cn/example/components/Link.md)
   - [NavMenu(导航栏)](docs/zh-cn/example/components/NavMenu.md)
   - [Pagination(分页)](docs/zh-cn/example/components/Pagination.md)
   - [Steps(步骤进度条)](docs/zh-cn/example/components/Steps.md)
   - [Table(表格)](docs/zh-cn/example/components/Table.md)
   - [Tag(标签)](docs/zh-cn/example/components/Tag.md)

# Links

 - [npm](https://www.npmjs.com/package/mevcl)

# LICENSE

[MIT](https://github.com/ZJGSU-TTCM/mevcl/blob/master/LICENSE)
