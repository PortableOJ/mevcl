<template>
  <div class="markdown-inline-code">
    <pre class="code-font">{{ code }}</pre>
  </div>
</template>

<script>
export default {
  name: "MarkdownInlineCode",
  props: {
    value: String
  },
  data() {
    return {
      code: ''
    }
  },
  created() {
    if (this.value) {
      this.code = this.value
    }
  }
}
</script>

<style scoped>
.markdown-inline-code {
  display: inline-block;
  padding: 0 3px;
  margin: 0 3px;
  border: 2px solid var(--border-color-level-1);
  background-color: var(--border-color-level-4);
  border-radius: 5px;
}

.code-font {
  font-size: 13px;
  font-family: Consolas, Monaco, monospace;
  margin: 0;
}
</style>