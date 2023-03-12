<template>
  <div class="main-title">
    <h1>输入框</h1>
    <div class="main-desc">输入框，用于输入文字、数字或者密码，仅支持单行输入</div>
    <h3>基本功能</h3>
    <div class="main-desc">
      <div>
        输入框有三种模式：文本、密码、纯数字，你可以通过
        <MarkdownInlineCode value="type"/>
        字段来进行指定
      </div>
      <div>
        同时你可以通过
        <MarkdownInlineCode value="v-model"/>
        来获取到当前的输入内容
      </div>
    </div>
    <div class="main-exam">
      <MarkdownBlockCode :value="example1"></MarkdownBlockCode>
      <div>
        <div style="display: grid; grid-template-columns: auto 1fr; place-items: center">
          <div>文本</div>
          <InputText type="text" v-model="input"></InputText>
          <div>密码</div>
          <InputText type="password" v-model="input"></InputText>
          <div>纯数字</div>
          <InputText type="number" v-model="input"></InputText>
        </div>
        <div>当前的输入内容为: {{ input }}</div>
      </div>
    </div>
    <h3>控制功能</h3>
    <div class="main-desc">
      <div>
        输入框可以通过
        <MarkdownInlineCode value="placeholder"/>
        字段来描述留空显示
      </div>
      <div>
        同时你可以通过
        <MarkdownInlineCode value="readOnly"/>
        来表示仅读，而
        <MarkdownInlineCode value="disabled"/>
        表示禁用
      </div>
    </div>
    <div class="main-exam">
      <MarkdownBlockCode :value="example2"></MarkdownBlockCode>
      <div>
        <div style="display: grid; grid-template-columns: auto 1fr; place-items: center">
          <div>占位符</div>
          <InputText v-model="input" placeholder="this is placeholder..."></InputText>
          <div>仅读</div>
          <InputText v-model="input" readOnly></InputText>
          <div>禁用</div>
          <InputText v-model="input" disabled></InputText>
        </div>
        <div>当前的输入内容为: {{ input }}</div>
      </div>
    </div>
    <h3>其他功能</h3>
    <div class="main-desc">
      <div>
        你可以通过
        <MarkdownInlineCode value="shake()"/>
        方法来让输入框进行颤抖
      </div>
    </div>
    <div class="main-exam">
      <MarkdownBlockCode :value="example3"></MarkdownBlockCode>
      <div style="display: grid; place-items: center">
          <InputText ref="shake" v-model="input" placeholder="name"></InputText>
          <InputButton @click="$refs.shake.shake()">点击进行抖动</InputButton>
      </div>
    </div>
  </div>
</template>

<script>
import InputText from "../components/v1/InputText.vue";
import MarkdownBlockCode from "../components/v1/markdown/MarkdownBlockCode.vue";
import MarkdownInlineCode from "../components/v1/markdown/MarkdownInlineCode.vue";
import InputButton from "../components/v1/InputButton.vue";

export default {
  name: "InputTextDemo",
  components: {
    InputButton,
    MarkdownInlineCode,
    MarkdownBlockCode,
    InputText
  },
  data() {
    return {
      input: '',
      example1: '<div>\n' +
          '  <div style="display: grid; grid-template-columns: auto 1fr; place-items: center">\n' +
          '    <div>文本</div>\n    <InputText type="text" v-model="input"></InputText>\n' +
          '    <div>密码</div>\n    <InputText type="password" v-model="input"></InputText>\n' +
          '    <div>纯数字</div>\n    <InputText type="number" v-model="input"></InputText>\n' +
          '  </div>\n  <div>当前的输入内容为: {{input}}</div>\n</div>',
      example2: '<div>\n' +
          '  <div style="display: grid; grid-template-columns: auto 1fr; place-items: center">\n' +
          '    <div>占位符</div>\n    <InputText v-model="input" placeholder="this is placeholder..."></InputText>\n' +
          '    <div>仅读</div>\n    <InputText v-model="input" readOnly></InputText>\n' +
          '    <div>禁用</div>\n    <InputText v-model="input" disabled></InputText>\n' +
          '  </div>\n  <div>当前的输入内容为: {{ input }}</div>\n</div>',
      example3: '<div style="display: grid; place-items: center">\n' +
          '  <InputText ref="shake" v-model="input" placeholder="name"></InputText>\n' +
          '  <InputButton @click="$refs.shake.shake()">点击进行抖动</InputButton>\n' +
          '</div>'
    }
  }
}
</script>

<style scoped>

</style>