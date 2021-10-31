import MiniLoading from "./basic/MiniLoading";

import InputText from "./components/InputText";
import InputCheckbox from "./components/InputCheckbox";
import InputSelect from "./components/InputSelect";
import InputSlider from "./components/InputSlider";
import InputDateTime from "./components/InputDateTime";
import InputFile from "./components/InputFile";
import InputImage from "./components/InputImage";
import InputButton from "./components/InputButton";
import Link from "./components/Link";
import Table from "./components/Table";
import GlobalLoading from "./components/GlobalLoading";

import MessageBox from "./components/messageBox/main";
import Toast from "./components/toast/main";

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
