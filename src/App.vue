<template>
    <div id="app">
        <!--suppress JSValidateTypes -->
        <NavMenu :options="navMenuOption" v-model="select"></NavMenu>
        <!--suppress JSValidateTypes -->
        <TabMenu :options="navMenuOption" v-model="select"></TabMenu>

        <Steps :data="stepList" :value="select"></Steps>

        <InputText v-model="input" placeholder="test" type="number" disabled></InputText>
        <InputText v-model="input" placeholder="test"></InputText>

        <InputCheckbox v-model="checkbox" disabled>TEST</InputCheckbox>
        <InputCheckbox v-model="checkbox">TEST</InputCheckbox>
        <InputCheckbox v-model="checkbox">ABC<br/>ABCABCABC</InputCheckbox>

        <InputButton disabled @click="click">TEST</InputButton>
        <InputButton @click="click" :loading="loading">TEST</InputButton>
        <InputButton @click="click" :process="sliderValue / 100">TEST</InputButton>
        <InputButton type="success" @click="click">TEST</InputButton>

        <InputSelect v-model="select" placeholder="test" :data="selectOption" disabled></InputSelect>
        <InputSelect v-model="select" placeholder="test" :data="selectOption"></InputSelect>

        <InputSlider v-model="sliderValue" disabled></InputSlider>
        <InputSlider v-model="sliderValue" :valueFormat="() => ''"></InputSlider>

        <InputDateTime v-model="dateTimeValue" placeholder="test" disabled></InputDateTime>
        <InputDateTime v-model="dateTimeValue" placeholder="test"></InputDateTime>

        <InputFile v-model="inputFile" placeholder="test" disabled></InputFile>
        <InputFile v-model="inputFile" placeholder="test" multiple accept="image/*"></InputFile>

        <inputImage v-model="inputImageFile"></inputImage>

        <InputAvatar src="https://hukeqing.github.io/image/about/avatar.png"></InputAvatar>

        <Alert>ABC</Alert>
        <Table :head="tableHead" :data="tableData">
            <template v-slot:head-name="scope">
                {{ scope.data.label + 'abc' }}
            </template>
            <template v-slot:body-name="scope">
                <Link :disabled="scope.data.name === 'a'">
                    {{ scope.data.name + 'abc' }}
                </Link>
                <InputButton @click="msg">TEST</InputButton>
                <InputButton @click="msg">TEST</InputButton>
                <i class="iconfont icon-spread"></i>
            </template>
        </Table>

        <Pagination :total="100"></Pagination>
        <Tag>123</Tag>
        <Tag type="success">abc</Tag>

        <InputTextarea code-mode title="markdown" v-model="input" @change="changeInputText"
                       :min-height="50"></InputTextarea>

        <div v-html="inputShow" style="text-align: left"></div>

        <MarkdownEdit style="height: 500px" v-model="input" :placeholder="'placeholder'"></MarkdownEdit>

        <GlobalLoading style="display: none"></GlobalLoading>

        <MarkdownBlockCode :show-line="false" :value="'123\nabc'"></MarkdownBlockCode>
        <div style="display: grid; grid-template-columns: 100px 1fr">
            <div></div>
            <InputCode placeholder="test" mode="text/x-csrc"></InputCode>
        </div>
        <Dialog v-model="checkbox" title="测试">
            <Table :head="tableHead" :data="tableData">
                <template v-slot:head-name="scope">
                    {{ scope.data.label + 'abc' }}
                </template>
                <template v-slot:body-name="scope">
                    <Link :disabled="scope.data.name === 'a'">
                        {{ scope.data.name + 'abc' }}
                    </Link>
                    <InputButton @click="click">TEST</InputButton>
                    <InputButton @click="msg">TEST</InputButton>
                    <i class="iconfont icon-spread"></i>
                </template>
            </Table>
            <InputCode v-model="input" ref="dialogCode"></InputCode>
            <InputButton disabled @click="click">TEST</InputButton>
        </Dialog>
    </div>
</template>

<script>
import './static/style.css'

import Vue from "vue";
import MEVCL from './index'

import InputText from "./components/v1/InputText";
import InputCheckbox from "./components/v1/InputCheckbox";
import InputSelect from "./components/v1/InputSelect";
import InputSlider from "./components/v1/InputSlider";
import InputDateTime from "./components/v1/InputDateTime";
import InputFile from "./components/v1/InputFile";
import InputImage from "./components/v1/InputImage";
import InputButton from "./components/v1/InputButton";
import Link from "./components/v1/Link";
import GlobalLoading from "./components/v1/GlobalLoading";
import Table from "./components/v1/Table";
import Alert from "./components/v1/Alert";
import NavMenu from "./components/v1/NavMenu";
import Pagination from "./components/v1/Pagination";
import Tag from "./components/v1/Tag";
import Steps from "./components/v1/Steps";
import Markdown from './components/v1/markdown/main'
import InputTextarea from "./components/v1/InputTextarea";
import MarkdownEdit from "./components/v1/MarkdownEdit";
import MarkdownBlockCode from "./components/v1/markdown/MarkdownBlockCode";
import TabMenu from "./components/v1/TabMenu";
import InputAvatar from "./components/v1/InputAvatar";
import InputCode from "./components/v1/InputCode";
import Dialog from "./components/v1/Dialog";

Vue.use(MEVCL)
// noinspection JSCheckFunctionSignatures
Vue.use(Markdown)

export default {
    name: 'App',
    components: {
        Dialog,
        InputCode,
        InputAvatar,
        TabMenu,
        MarkdownBlockCode,
        MarkdownEdit,
        InputTextarea,
        Steps,
        Tag,
        Pagination,
        NavMenu,
        Alert,
        Table,
        GlobalLoading,
        Link,
        InputButton,
        InputImage,
        InputFile,
        InputDateTime,
        InputSlider,
        InputSelect,
        InputCheckbox,
        InputText
    },
    data() {
        return {
            input: '',
            inputShow: '',
            checkbox: false,
            select: 1,
            selectOption: [
                {
                    label: 'abc',
                    value: 'a',
                }, {
                    label: '111',
                    value: 1,
                },
            ],
            navMenuOption: [
                {
                    label: '111',
                    value: 1
                }, {
                    label: '222',
                    value: 2,
                    hidden: true
                }, {
                    label: '333',
                    value: 3
                }, {
                    label: '444',
                    value: 4
                }, {
                    label: '555',
                    value: 5
                }, {
                    label: '666',
                    value: 6
                }, {
                    label: '777',
                    value: 7
                }
            ],
            sliderValue: 10,
            dateTimeValue: '',
            inputFile: null,
            inputImageFile: null,
            loading: true,
            process: 0.38,
            tableHead: [
                {
                    label: '名称',
                    value: 'name',
                    width: '300',
                },
                {
                    label: '值',
                    value: 'value',
                    width: '100',
                }
            ],
            tableData: [
                {
                    name: 'a',
                    value: 123
                },
                {
                    name: 'b',
                    value: 456
                },
                {
                    name: 'c',
                    value: 789
                }
            ],
            stepList: [
                {
                    type: 'success',
                    title: 'step 1',
                    value: 1,
                    icon: 'success',
                    disabled: false,
                },
                {
                    type: 'brand',
                    title: 'step 2',
                    value: 2,
                    disabled: false,
                },
                {
                    type: 'info',
                    title: 'step 3',
                    value: 3,
                    disabled: true,
                },
            ]
        }
    },
    methods: {
        changeInputText(text) {
            this.inputShow = this.$markdown(text)
            this.$nextTick(() => {
                this.$renderer()
            })
        },
        click() {
            this.$toast({
                title: 'ABC',
                text: 'abc',
                duration: 'auto',
                type: 'success'
            })
            this.selectOption = [
                {
                    label: 'abc',
                    value: 'a',
                    hidden: true,
                }, {
                    label: '111',
                    value: 1,
                },
            ]
        },
        msg() {
            this.$message({
                text: 'ABCABCABCABCABCABCABCABCABCABCABCABCABCABCABCABCABCABCABCABCABCABCABCABCABC',
                type: 'error',
                inputType: 'password',
                input: true,
                confirmOK: (v) => {
                    console.log(v)
                },
                confirmCancel: (v) => {
                    console.log(v)
                },
            })
        }
    }
}
</script>

<style>
#app {
    /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;
    margin-top: 60px;
}
</style>
