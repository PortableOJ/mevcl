# MEVCL

> for vue(2.0)

**the Minimal and Efficient Vue Component Library(一个极小但高效的 Vue 组件库)**

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
 - [MessageBox](docs/zh-cn/example/MessageBox.md)
 - [Toast](docs/zh-cn/example/Toast.md)

# Links

 - [npm](https://www.npmjs.com/package/mevcl)

# LICENSE

[MIT](https://github.com/ZJGSU-TTCM/mevcl/blob/master/LICENSE)
