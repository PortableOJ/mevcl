<template>
    <div class="toast-box" ref="box" :style="getTendencyStyle()">
        <div class="toast-button" style="left: 0" @click="destroy(true)">
            <i class="iconfont icon-spread"></i>
        </div>
        <div class="toast-show">
            <div style="display: inline-block">
                <i :class="'iconfont icon-' + type" style="font-size: 20px"></i>
            </div>
            <div style="display: inline-block; margin-left: 10px">
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
            timeout: null,
            type: null,

            hold: false
        }
    },
    mounted() {
        if (this.duration > 0) {
            this.timeout = setTimeout(() => {
                this.destroy(false)
            }, this.duration)
        }
    },
    methods: {
        destroy(forces) {
            if (this.timeout !== null) {
                clearTimeout(this.timeout)
            }
            if (this.hold && !forces) {
                return
            }
            this.$refs.box.style.marginLeft = '300px'
            this.$refs.box.style.opacity = '0'
            setTimeout(() => {
                this.$refs.box.style.display = 'none';
            }, 600)
        },
        getTendencyStyle() {
            return Common.getTendencyStyle(this.type)
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
    color: var(--disable-text-color);
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
