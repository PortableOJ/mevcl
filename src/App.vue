<!--suppress VueMissingComponentImportInspection -->
<template>
  <div id="app">
    <!--suppress JSValidateTypes -->
    <NavMenu :options="navMenuOption" v-model="navSelect" @change="onChangeNav"></NavMenu>
    <TabMenu :options="tabMenuOption" v-model="tabSelect" @change="onChangeTab"></TabMenu>
    <router-view style="width: 800px; margin: 30px auto"></router-view>
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
import TabMenu from "./components/v1/TabMenu.vue";

export default {
  name: 'App',
  components: {TabMenu},
  data() {
    return {
      navSelect: 'home',
      tabSelect: '',
      navMenuOption: [
        {
          label: this.$t('app.home'),
          value: 'home'
        },
        {
          label: this.$t('app.input.name'),
          value: 'input'
        }
      ],
      tabMenuOptionSet: {
        input: [
          {
            label: this.$t('app.input.inputText'),
            value: 'inputText'
          }
        ]
      },
      tabMenuOption: []
    }
  },
  mounted() {
    // this.$router.push({name: 'home', query: {lang: 'test'}})
    this.$i18n.locale = this.$route.query.lang ? this.$route.query.lang : 'en'
    this.onChangeNav('home')
  },
  methods: {
    onChangeNav(value) {
      this.tabSelect = ''
      if (value === 'home') {
        this.onChangeTab(value)
      }
      this.tabMenuOption = this.tabMenuOptionSet[value]
    },
    onChangeTab(value) {
      this.$router.push({name: value})
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

.main-title {
  padding: 20px;
  background-color: var(--border-color-level-4);
  border-radius: 30px;
}

.main-desc {
  margin-left: 20px;
}

.main-exam {
  margin: 10px 10px;
  border-radius: 10px;
  padding: 10px;
  display: grid;
  grid-column-gap: 10px;
  grid-template-columns: 1fr 1fr;
  background-color: var(--white-color);
}
</style>
