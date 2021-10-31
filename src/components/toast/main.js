import Vue from 'vue';
import Toast from "./Toast";
import ToastContainer from "./ToastContainer";

const ToastConstructor = Vue.extend(Toast);
const ToastContainerConstructor = Vue.extend(ToastContainer);

const toast = function () {
    let toastContainer = null
    let toastList = []

    const clearToast = function () {
        toastList = toastList.filter(item => {
            if (item.$el.style.opacity === '0') {
                toastContainer.removeChild(item.$el)
                item.$destroy()
                return false
            }
            return true
        })
    }

    const createToast = function (options) {
        clearToast()
        const instance = new ToastConstructor({
            data: options
        })
        instance.$mount()
        toastContainer.append(instance.$el)
        toastList.push(instance)
        return instance
    }

    return function (Vue) {
        let toastContainerObject = new ToastContainerConstructor()
        toastContainerObject.$mount()
        toastContainer = toastContainerObject.$el
        document.body.appendChild(toastContainer)
        Vue.prototype.$toast = createToast
    }
}

const install = toast()

export default {
    install,

    Toast,
    ToastContainer,
}
