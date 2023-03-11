<template>
  <div class="tab-menu-box">
    <div class="tab-menu-options">
      <template v-for="item in options">
        <div :class="{
                        'tab-menu-option': true,
                        'tab-menu-option-selected': item.value === inputValue
                    }"
             v-if="!item.hidden" :key="item.value" @click="clickOption(item)">
          {{ item.label }}
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabMenu",
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: [String, Number],
    options: Array,
    notFound: Function,
  },
  data() {
    return {
      inputValue: this.value
    }
  },
  methods: {
    clickOption(option) {
      this.inputValue = option.value
      this.$emit('change', option.value)
    }
  },
  watch: {
    value(v) {
      if (v === this.inputValue) return
      this.inputValue = v
    }
  }
}
</script>

<style scoped>
.tab-menu-box {
  position: relative;
  padding: 0;
}

.tab-menu-options {
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
}

.tab-menu-option {
  flex-grow: 1;
  padding: 15px 10px;
  cursor: pointer;
  text-align: center;
  border-bottom: 1px solid var(--border-color-level-1);
}

.tab-menu-option:hover {
  background-color: var(--background-brand-color);
}

.tab-menu-option-selected {
  color: var(--brand-color);
  background-color: var(--background-brand-color);
  padding-bottom: 13px;
  border-bottom: 3px solid var(--brand-color);
}
</style>