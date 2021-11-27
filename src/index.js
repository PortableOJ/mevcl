import MiniLoading from "./basic/MiniLoading";

import InputText from "./components/v1/InputText";
import InputCheckbox from "./components/v1/InputCheckbox";
import InputSelect from "./components/v1/InputSelect";
import InputSlider from "./components/v1/InputSlider";
import InputDateTime from "./components/v1/InputDateTime";
import InputFile from "./components/v1/InputFile";
import InputImage from "./components/v1/InputImage";
import InputButton from "./components/v1/InputButton";
import Link from "./components/v1/Link";
import Table from "./components/v1/Table";
import GlobalLoading from "./components/v1/GlobalLoading";

import MessageBox from "./components/v1/messageBox/main";
import Toast from "./components/v1/toast/main";

const components = [
    MiniLoading,
    InputText,
    InputCheckbox,
    InputSelect,
    InputSlider,
    InputDateTime,
    InputFile,
    InputImage,
    InputButton,
    Link,
    Table,
    GlobalLoading,
]

const install = function (Vue) {
    components.forEach(component => {
        Vue.component(component.name, component)
    })

    Vue.use(Toast)
    Vue.use(MessageBox)
}

export default {
    version: '0.1.0',
    install,

    MiniLoading,
    InputText,
    InputCheckbox,
    InputSelect,
    InputSlider,
    InputDateTime,
    InputFile,
    InputImage,
    InputButton,
    Link,
    Table,
    GlobalLoading,
}
