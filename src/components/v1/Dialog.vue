<template>
  <div v-show="show" class="overlay dialog-center">
    <div class="dialog-box">
      <div class="dialog-title">
        <span>{{ title }}</span>
      </div>
      <div class="dialog-body">
        <slot></slot>
      </div>
      <i @click="cancel" ref="cancel" class="iconfont icon-close cancel"></i>
    </div>
  </div>
</template>

<script>
import Common from "../../static/common";

export default {
  name: "Dialog",
  model: {
    prop: 'show',
    event: 'change'
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: String,
  },
  mounted() {
    if (Common.isMac()) {
      this.$refs.cancel.style.left = '10px'
    } else {
      this.$refs.cancel.style.right = '10px'
    }
  },
  methods: {
    cancel() {
      this.$emit('change', false)
    }
  }
}
</script>

<style scoped>
.dialog-center {
  display: grid;
  place-items: center;
}

.dialog-box {
  background: var(--white-color);
  min-width: 100px;
  min-height: 100px;
  padding: 0 25px 20px 25px;
  border-radius: 15px;
  position: relative;
  animation: message-box-show 0.3s ease forwards;

}

.dialog-title {
  position: relative;
  text-align: center;
  font-size: 30px;
  padding: 15px 0;
}

.cancel {
  position: absolute;
  color: var(--info-color);
  cursor: pointer;
  top: 10px;
  width: 30px;
  height: 30px;
  font-size: 30px;
}

.cancel:hover {
  color: var(--common-text-color);
}

@keyframes message-box-show {
  0% {
    transform: translate(0, -100%) scale(0);
  }
  100% {
    transform: translate(0, 0) scale(1);
  }
}
</style>