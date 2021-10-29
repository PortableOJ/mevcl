<template>
    <div class="toast-box" ref="box">
        <div class="toast-button" style="left: 0" @click="destroy">
            <i class="iconfont icon-zhankai"></i>
        </div>
        <div class="toast-show">
            <div v-html="title" class="toast-title">
            </div>
            <div v-html="text" class="toast-text">
            </div>
        </div>
        <div v-if="!hold && duration > 0" class="toast-button" style="right: 0" @click="hold = true">
            <i class="iconfont icon-zhongjianjian"></i>
        </div>
    </div>
</template>

<script>
import '../../static/style.css'

export default {
    name: "Toast",
    data() {
        return {
            title: '',
            text: '',
            duration: 0,
            timeout: null,
            hold: false
        }
    },
    created() {
        if (this.duration > 0) {
            this.timeout = setTimeout(() => {
                this.destroy()
            }, this.duration)
        }
    },
    methods: {
        destroy() {
            if (this.timeout !== null) {
                clearTimeout(this.timeout)
            }
            if (this.hold) {
                return
            }
            this.$refs.box.style.marginLeft = '300px'
            this.$refs.box.style.opacity = '0'
            setTimeout(() => {
                this.$refs.box.style.display = 'none';
            }, 600)
        }
    }
}
</script>

<style scoped>
.toast-box {
    position: relative;
    z-index: 9999;
    top: 0;
    left: 0;
    overflow: hidden;
    pointer-events: all;
    margin: 15px 10px;
    border-radius: 10px;
    box-shadow: var(--focus-shadowbox);
    background-color: var(--white-color);
    transition: 0.5s ease all;
    animation: toast-show 2s ease forwards;
}

.toast-button {
    position: absolute;
    width: 30px;
    height: 100%;
    top: 0;
    transition: 0.5s ease all;
}

.toast-button i {
    position: absolute;
    top: 50%;
    left: 50%;
    color: var(--disable-text-color);
    transform: translate(-50%, -50%);
}

.toast-button:hover {
    background-color: var(--border-color-level-3);
}

.toast-button:hover > i {
    color: var(--white-color);
}

.toast-show {
    display: inline-block;
    vertical-align: middle;
    padding: 15px 5px;
    margin: 0 45px;
}

.toast-title {
    font-weight: 700;
    font-size: 16px;
    color: #303133;
    margin: 0;
}

@keyframes toast-show {
    0% {
        left: 300px;
    }

    40% {
        left: 0;
        box-shadow: var(--focus-shadowbox);
    }

    70% {
        box-shadow: var(--focus-hightlight-shadowbox);
    }

    100% {
        box-shadow: var(--focus-shadowbox);
    }
}

</style>
