<template>
  <div ref="edit" style="min-height: 30px"></div>
</template>

<script>
// import MonacoEditor from 'vue-monaco'

import * as monaco from 'monaco-editor'

export default {
  name: "CodeEditor",
  components: {
    // MonacoEditor
  },
  model: {
    prop: 'code',
    event: 'change'
  },
  mounted() {
    this.editor = monaco.editor.create(this.$refs.edit, {
      value: this.code,
      language: this.language,
      automaticLayout: true,
      theme: 'vs-dark'
    });
    this.editor.onDidChangeModelContent(() => {
      this.$emit('change', this.editor.getValue())
    })
  },
  props: {
    code: String,
    language: {
      type: String,
      validator: function (value) {
        if (['cpp', 'javascript', 'java', 'markdown'].indexOf(value) !== -1) return true
        console.error("language Error, error language: " + value)
        return false
      },
      default: 'cpp'
    }
  },
  data() {
    return {
      editor: null
    }
  },
  methods: {
    change(newCode) {
      this.$emit('change', newCode)
    }
  }
}
</script>

<style scoped>

</style>