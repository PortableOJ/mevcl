<template>
    <div class="toast-box" ref="box" :class="getTendencyClass()">
        <div class="toast-button" style="left: 0" @click="destroy(true)"
             @mouseenter="hoverClose = true" @mouseleave="hoverClose = false">
            <i v-if="hoverClose" class="iconfont icon-spread"></i>
            <i v-else :class="'iconfont icon-' + type"></i>
        </div>
        <div class="toast-show">
            <div>
                <div v-html="title" class="toast-title">
                </div>
                <div v-html="text" class="toast-text">
                </div>
            </div>
        </div>
        <div v-if="!hold && duration > 0" class="toast-button" style="right: 0" @click="hold = true">
            <i class="iconfont icon-focus"></i>
        </div>
    </div>
</template>

<script>
import Common from '../../static/common'

export default {
    name: "Toast",
    data() {
        return {
            title: '',
            text: '',
            duration: 0,
            type: null,

            timeout: null,
            hoverClose: false,
            hold: false
        }
    },
    created() {
        setTimeout(() => {
            this.$refs.box.style.height = this.$refs.box.clientHeight + 'px'
            if (this.duration === 'auto') {
                this.duration = Math.max(3000, (this.title.length + this.text.length) * 200)
            }
            if (this.duration > 0) {
                this.timeout = setTimeout(() => {
                    this.destroy(false)
                }, this.duration)
            }
        }, 600)
    },
    methods: {
        destroy(forces) {
            if (this.timeout !== null) {
                clearTimeout(this.timeout)
            }
            if (this.hold && !forces) {
                return
            }
            const box = this.$refs.box
            box.style.marginLeft = '300px'
            box.style.height = '0'
            box.style.paddingTop = '0'
            box.style.paddingBottom = '0'
            box.style.marginTop = '-15px'
            setTimeout(() => {
                this.$refs.box.style.opacity = '0';
            }, 600)
        },
        getTendencyClass() {
            return Common.getTendencyClass(this.type)
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
    font-size: 20px;
    /*color: var(--disable-text-color);*/
    transform: translate(-50%, -50%);
}

.toast-button:hover {
    background-color: var(--border-color-level-1);
}

.toast-button:hover > i {
    color: var(--white-color);
}

.toast-show {
    padding: 15px 0;
    margin: 0 35px;
    line-break: anywhere;
}

.toast-show * {
    vertical-align: middle;
    display: inline-block;
}

.toast-title {
    display: block;
    font-weight: 700;
    font-size: 16px;
    margin: 0;
}

.toast-text {
    display: block;
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
