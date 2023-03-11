import MiniLoading from "./basic/MiniLoading";

import MarkdownBlockCode from "./components/v1/markdown/MarkdownBlockCode";
import MarkdownInlineCode from "./components/v1/markdown/MarkdownInlineCode";

import Alert from "./components/v1/Alert";
import CodeEditor from "./components/v1/CodeEditor";
import Dialog from "./components/v1/Dialog";
import GlobalLoading from "./components/v1/GlobalLoading";
import InputAvatar from "./components/v1/InputAvatar";
import InputButton from "./components/v1/InputButton";
import InputCheckbox from "./components/v1/InputCheckbox";
import InputDateTime from "./components/v1/InputDateTime";
import InputFile from "./components/v1/InputFile";
import InputImage from "./components/v1/InputImage";
import InputSelect from "./components/v1/InputSelect";
import InputSlider from "./components/v1/InputSlider";
import InputText from "./components/v1/InputText";
import InputTextarea from "./components/v1/InputTextarea";
import Link from "./components/v1/Link";
import MarkdownEdit from "./components/v1/MarkdownEdit";
import NavMenu from "./components/v1/NavMenu";
import Pagination from "./components/v1/Pagination";
import Steps from "./components/v1/Steps";
import Table from "./components/v1/Table";
import TabMenu from "./components/v1/TabMenu";
import Tag from "./components/v1/Tag";

import MessageBox from "./components/v1/messageBox/main";
import Toast from "./components/v1/toast/main";
import Markdown from './components/v1/markdown/main'

const components = [
  MiniLoading,
  MarkdownBlockCode,
  MarkdownInlineCode,
  Alert,
  CodeEditor,
  Dialog,
  GlobalLoading,
  InputAvatar,
  InputButton,
  InputCheckbox,
  InputDateTime,
  InputFile,
  InputImage,
  InputSelect,
  InputSlider,
  InputText,
  InputTextarea,
  Link,
  MarkdownEdit,
  NavMenu,
  Pagination,
  Steps,
  Table,
  TabMenu,
  Tag,
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })

  Vue.use(Toast)
  Vue.use(MessageBox)
  Vue.use(Markdown)
}

export default {
  version: '0.3.0',
  install,

  MiniLoading,
  MarkdownBlockCode,
  MarkdownInlineCode,
  Alert,
  CodeEditor,
  Dialog,
  GlobalLoading,
  InputAvatar,
  InputButton,
  InputCheckbox,
  InputDateTime,
  InputFile,
  InputImage,
  InputSelect,
  InputSlider,
  InputText,
  InputTextarea,
  Link,
  MarkdownEdit,
  NavMenu,
  Pagination,
  Steps,
  Table,
  TabMenu,
  Tag,
}
