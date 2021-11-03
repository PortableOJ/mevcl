<template>
    <div id="app">
        <InputText v-model="input" placeholder="test" type="text" disabled></InputText>
        <InputText v-model="input" placeholder="test" type="text"></InputText>

        <InputCheckbox v-model="checkbox" disabled>TEST</InputCheckbox>
        <InputCheckbox v-model="checkbox">TEST</InputCheckbox>

        <InputButton disabled @click="click">TEST</InputButton>
        <InputButton @click="click" :loading="loading">TEST</InputButton>
        <InputButton @click="click" :process="process">TEST</InputButton>
        <InputButton @click="click">TEST</InputButton>

        <InputSelect v-model="select" placeholder="test" :data="selectOption" disabled></InputSelect>
        <InputSelect v-model="select" placeholder="test" :data="selectOption"></InputSelect>

        <InputSlider v-model="sliderValue" disabled></InputSlider>
        <InputSlider v-model="sliderValue" :valueFormat="() => ''"></InputSlider>

        <InputDateTime v-model="dateTimeValue" placeholder="test" disabled></InputDateTime>
        <InputDateTime v-model="dateTimeValue" placeholder="test"></InputDateTime>

        <InputFile v-model="inputFile" placeholder="test" disabled></InputFile>
        <InputFile v-model="inputFile" placeholder="test" multiple accept="image/*"></InputFile>

        <inputImage v-model="inputImageFile"></inputImage>

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

        <GlobalLoading style="display: none"></GlobalLoading>
    </div>
</template>

<script>
import InputText from "./components/InputText";
import InputCheckbox from "./components/InputCheckbox";
import InputSelect from "./components/InputSelect";
import InputSlider from "./components/InputSlider";
import InputDateTime from "./components/InputDateTime";
import InputFile from "./components/InputFile";
import InputImage from "./components/InputImage";
import InputButton from "./components/InputButton";
import Link from "./components/Link";
import GlobalLoading from "./components/GlobalLoading";
import Table from "./components/Table";

import './static/style.css'

import Vue from "vue";
import MEVCL from './index'
import Alert from "./components/Alert";

Vue.use(MEVCL)

export default {
    name: 'App',
    components: {
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
            checkbox: false,
            select: null,
            selectOption: [
                {
                    label: '111',
                    value: 1,
                },
                {
                    label: '222',
                    value: 2
                },
                {
                    label: '333',
                    value: 3
                },
                {
                    label: '444',
                    value: 4
                },
                {
                    label: '555',
                    value: 5
                },
                {
                    label: '666',
                    value: 6
                },
                {
                    label: '<img src="https://hukeqing.github.io/image/about/avatar.png"  alt="avatar"/>',
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
                    label: 'name',
                    value: 'name',
                    width: '300',
                },
                {
                    label: 'value',
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
            ]
        }
    },
    methods: {
        click() {
            this.$toast({
                title: 'ABC',
                text: 'abc',
                duration: 'auto',
                type: 'success'
            })
        },
        msg() {
            this.$message({
                text: 'ABC',
                type: 'error',
                input: true,
                confirmOK: (v) => {
                    console.log(v)
                },
                confirmCancel:  (v) => {
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
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
