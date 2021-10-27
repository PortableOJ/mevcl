<template>
    <div id="app">
        <InputText v-model="input" placeholder="test" type="text" disabled></InputText>
        <InputText v-model="input" placeholder="test" type="text"></InputText>

        <InputCheckbox v-model="checkbox" disabled>TEST</InputCheckbox>
        <InputCheckbox v-model="checkbox">TEST</InputCheckbox>

        <Button disabled @click="click">TEST</Button>
        <Button @click="click" :loading="loading">TEST</Button>
        <Button @click="click" :process="process">TEST</Button>
        <Button @click="click">TEST</Button>

        ABC
        <BackgroundLink disabled @click="click">TEST</BackgroundLink>
        ABC ABC
        <BackgroundLink @click="click">TEST</BackgroundLink>
        ABC

        <InputSelect v-model="select" placeholder="test" :data="selectOption" disabled></InputSelect>
        <InputSelect v-model="select" placeholder="test" :data="selectOption"></InputSelect>

        <InputSlider v-model="sliderValue" disabled></InputSlider>
        <InputSlider v-model="sliderValue" :valueFormat="v => parseInt(v)" :showValue="false"></InputSlider>

        <InputDateTime v-model="dateTimeValue" placeholder="test" disabled></InputDateTime>
        <InputDateTime v-model="dateTimeValue" placeholder="test"></InputDateTime>

        <InputFile v-model="inputFile" placeholder="test" disabled></InputFile>
        <InputFile v-model="inputFile" placeholder="test" multiple></InputFile>

        <inputImage v-model="inputImageFile"></inputImage>

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
import Button from "./components/Button";
import BackgroundLink from "./components/BackgroundLink";
import GlobalLoading from "./components/GlobalLoading";

export default {
    name: 'App',
    components: {
        GlobalLoading,
        BackgroundLink,
        Button,
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
        }
    },
    methods: {
        click() {
            console.log('clicked')
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
