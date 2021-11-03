<template>
    <div class="alert-box" :class="getTendencyClass()" ref="box">
        <div class="alert-text">
            <slot></slot>
        </div>
        <div class="alert-close" @click="closeAlert">
            <i class="iconfont icon-error"></i>
        </div>
    </div>
</template>

<script>
import Common from '../static/common'

export default {
    name: "Alert",
    props: {
        type: {
            type: String,
            default: 'warning'
        },
        canClose: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        getTendencyClass() {
            return Common.getTendencyClass(this.type)
        },
        closeAlert() {
            let box = this.$refs.box
            box.style.left = '100%'
            setTimeout(() => {
                box.style.display = 'none'
                this.$emit('close')
            }, 1000)
        }
    }
}
</script>

<style scoped>
.alert-box {
    position: relative;
    left: 0;
    width: 100%;
    height: auto;
    padding: 5px 0;
    animation: alert-show 1s ease forwards;
    transition: 1s ease all;
}

.alert-text {
    position: relative;
    display: inline-block;
    width: calc(100% - 60px);
    margin-left: 10px;
    line-break: anywhere;
    overflow: hidden;
}

.alert-close {
    position: relative;
    display: inline-block;
    width: 20px;
    margin: 0 10px;
}

.alert-close:hover {
    cursor: pointer;
}

@keyframes alert-show {
    0% {
        width: 0;
    }
    100% {
        width: 100%;
    }
}

</style>