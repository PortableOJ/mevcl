import MiniLoading from "./basic/MiniLoading";

import Alert from "./components/v1/Alert";
import GlobalLoading from "./components/v1/GlobalLoading";
import InputButton from "./components/v1/InputButton";
import InputCheckbox from "./components/v1/InputCheckbox";
import InputDateTime from "./components/v1/InputDateTime";
import InputFile from "./components/v1/InputFile";
import InputImage from "./components/v1/InputImage";
import InputSelect from "./components/v1/InputSelect";
import InputSlider from "./components/v1/InputSlider";
import InputText from "./components/v1/InputText";
import Link from "./components/v1/Link";
import NavMenu from "./components/v1/NavMenu";
import Pagination from "./components/v1/Pagination";
import Steps from "./components/v1/Steps";
import Table from "./components/v1/Table";
import Tag from "./components/v1/Tag";

import MessageBox from "./components/v1/messageBox/main";
import Toast from "./components/v1/toast/main";

const components = [
    MiniLoading,
    Alert,
    GlobalLoading,
    InputButton,
    InputCheckbox,
    InputDateTime,
    InputFile,
    InputImage,
    InputSelect,
    InputSlider,
    InputText,
    Link,
    NavMenu,
    Pagination,
    Steps,
    Table,
    Tag,
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
    Alert,
    GlobalLoading,
    InputButton,
    InputCheckbox,
    InputDateTime,
    InputFile,
    InputImage,
    InputSelect,
    InputSlider,
    InputText,
    Link,
    NavMenu,
    Pagination,
    Steps,
    Table,
    Tag,
}
