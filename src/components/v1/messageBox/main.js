import Vue from "vue";
import MessageBox from "./MessageBox";

const MessageBoxConstructor = Vue.extend(MessageBox)

const messageBox = function () {
  const removeSelf = function (self) {
    self.$destroy()
    document.body.removeChild(self.$el)
  }

  const createMessageBox = function (options) {
    const curMessageBox = new MessageBoxConstructor({
      data: {
        text: options.text,
        type: options.type ? options.type : 'normal',
        inputType: options.inputType ? options.inputType : 'text',
        ok: options.ok ? options.ok : '确定',
        cancel: options.cancel ? options.cancel : '取消',
        input: options.input,
        confirmOK: (v) => {
          removeSelf(curMessageBox)
          options.confirmOK(v)
        },
        confirmCancel: (v) => {
          removeSelf(curMessageBox)
          options.confirmCancel(v)
        },
      }
    })
    curMessageBox.$mount()
    document.body.appendChild(curMessageBox.$el)
  }

  return function (Vue) {
    Vue.prototype.$message = createMessageBox
  }
}

const install = messageBox()

export default {
  install
}