<!--suppress VueMissingComponentImportInspection -->
<template>
  <div id="app">
    <!--suppress JSValidateTypes -->
    <NavMenu :options="navMenuOption" v-model="select"></NavMenu>
    <router-view></router-view>
<!--    &lt;!&ndash;suppress JSValidateTypes &ndash;&gt;-->
<!--    <TabMenu :options="navMenuOption" v-model="select"></TabMenu>-->

<!--    <Steps :data="stepList" :value="select"></Steps>-->

<!--    <InputText v-model="input" placeholder="test" type="number" disabled></InputText>-->
<!--    <InputText ref="input" v-model="input" placeholder="test"></InputText>-->

<!--    <InputCheckbox v-model="checkbox" disabled>TEST</InputCheckbox>-->
<!--    <InputCheckbox v-model="checkbox">TEST</InputCheckbox>-->
<!--    <InputCheckbox v-model="checkbox">ABC<br/>ABCABCABC</InputCheckbox>-->

<!--    <InputButton disabled @click="click">TEST</InputButton>-->
<!--    <InputButton @click="click" :loading="loading">TEST</InputButton>-->
<!--    <InputButton @click="click" :process="sliderValue / 100">TEST</InputButton>-->
<!--    <InputButton type="success" @click="click">TEST</InputButton>-->

<!--    <InputSelect v-model="select" placeholder="test" :data="selectOption" disabled></InputSelect>-->
<!--    <InputSelect v-model="select" placeholder="test" :data="selectOption"></InputSelect>-->

<!--    <InputSlider v-model="sliderValue" disabled></InputSlider>-->
<!--    <InputSlider v-model="sliderValue" :valueFormat="() => ''"></InputSlider>-->

<!--    <InputDateTime v-model="dateTimeValue" placeholder="test" disabled></InputDateTime>-->
<!--    <InputDateTime v-model="dateTimeValue" placeholder="test"></InputDateTime>-->

<!--    <InputFile v-model="inputFile" placeholder="test" disabled></InputFile>-->
<!--    <InputFile v-model="inputFile" placeholder="test" multiple accept="image/*"></InputFile>-->

<!--    <inputImage v-model="inputImageFile"></inputImage>-->

<!--    <InputAvatar src="https://hukeqing.github.io/image/about/avatar.png"></InputAvatar>-->

<!--    <Alert>ABC</Alert>-->
<!--    <div style="display: grid; grid-template-columns: auto 1fr">-->
<!--      <Table :head="tableHead" :data="tableData"></Table>-->
<!--      <div style="overflow: auto">-->
<!--        <Table style="width: 10000px" :head="tableHead" :data="tableData"></Table>-->
<!--      </div>-->
<!--    </div>-->

<!--    <Table :head="tableHead" :data="tableData">-->
<!--      <template v-slot:head-name="scope">-->
<!--        {{ scope.data.label + 'abc' }}-->
<!--      </template>-->
<!--      <template v-slot:body-name="scope">-->
<!--        <Link :disabled="scope.data.name === 'a'">-->
<!--          {{ scope.data.name + 'abc' }}-->
<!--        </Link>-->
<!--        <InputButton @click="msg">TEST</InputButton>-->
<!--        <InputButton @click="msg">TEST</InputButton>-->
<!--        <i class="iconfont icon-spread"></i>-->
<!--      </template>-->
<!--    </Table>-->
<!--    <Pagination :total="100"></Pagination>-->
<!--    <Tag>123</Tag>-->
<!--    <Tag type="success">abc</Tag>-->

<!--    <InputTextarea code-mode title="markdown" v-model="input" @change="changeInputText"-->
<!--                   :min-height="50"></InputTextarea>-->

<!--    <div v-html="inputShow" style="text-align: left"></div>-->

<!--    <CodeEditor v-model="input" language="cpp" style="height: 100px"></CodeEditor>-->
<!--    <MarkdownEdit style="height: 500px" v-model="input" :placeholder="'placeholder'"></MarkdownEdit>-->

<!--    <GlobalLoading style="display: none"></GlobalLoading>-->

<!--    <MarkdownBlockCode :show-line="false" :value="'123\nabc'"></MarkdownBlockCode>-->
<!--    <Dialog v-model="checkbox" title="测试">-->
<!--      <Table :head="tableHead" :data="tableData">-->
<!--        <template v-slot:head-name="scope">-->
<!--          {{ scope.data.label + 'abc' }}-->
<!--        </template>-->
<!--        <template v-slot:body-name="scope">-->
<!--          <Link :disabled="scope.data.name === 'a'">-->
<!--            {{ scope.data.name + 'abc' }}-->
<!--          </Link>-->
<!--          <InputButton @click="click">TEST</InputButton>-->
<!--          <InputButton @click="msg">TEST</InputButton>-->
<!--          <i class="iconfont icon-spread"></i>-->
<!--        </template>-->
<!--      </Table>-->
<!--      <InputButton disabled @click="click">TEST</InputButton>-->
<!--    </Dialog>-->
  </div>
</template>

<script>
import './static/style.css'

export default {
  name: 'App',
  components: {},
  data() {
    return {
      input: '',
      inputShow: '',
      checkbox: false,
      select: 1,
      navMenuOption: [
        {
          label: this.$t('app.home'),
          value: 1
        }
      ],
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
      this.$refs.input.shake()
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
