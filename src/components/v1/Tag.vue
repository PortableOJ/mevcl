<template>
  <div class="tag-box" :class="getTendencyClass()">
    <slot></slot>
  </div>
</template>

<script>
import Common from '../../static/common'

export default {
  name: "Tag",
  props: {
    type: {
      type: String,
      default: 'warning'
    },
  },
  methods: {
    getTendencyClass() {
      return Common.getTendencyClass(this.type)
    },
  }
}
</script>

<style scoped>
.tag-box {
  display: inline-block;
  padding: 3px 10px;
  border: 1px solid;
  border-radius: 5px;
  margin: 0 3px;
}
</style>
