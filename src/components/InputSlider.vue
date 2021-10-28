<template>
    <div class="input-box">
        <div ref="scrollbar" class="scrollbar" @click="clickBar"></div>
        <div ref="fillBar" class="fill-bar"></div>
        <div ref="handle" class="handle" @mousedown="startDrag" @touchstart="startTouch">
            12
        </div>
        <div class="overlay" v-if="isDrag" style="cursor: grabbing"></div>
    </div>
</template>

<script>
export default {
    name: "InputSlider",
    model: {
        prop: 'value',
        event: 'change'
    },
    props: {
        value: Number,
        min: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 100
        },
        step: {
            type: [Number, null],
            default: null
        },
        valueFormat: {
            type: Function,
            default: d => d.toFixed(2).toString()
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            inputValue: this.value,
            isDrag: false,
            lastDragPos: -1
        }
    },
    mounted() {
        this.changeValue(((this.value - this.min) / (this.max - this.min)) * this.$refs.scrollbar.scrollWidth, true)
        if (this.disabled) {
            this.$refs.fillBar.classList.add('fill-bar-disable')
            this.$refs.handle.classList.add('handle-disable')
        }
    },
    methods: {
        changeValue(x, flag = false) {
            if (this.disabled && !flag) return
            let pre = x / this.$refs.scrollbar.scrollWidth
            pre = Math.min(Math.max(pre, 0), 1)
            this.inputValue = pre * this.$refs.scrollbar.scrollWidth
            let res = pre * (this.max - this.min) + this.min
            if (this.step != null) {
                res = Math.round((res - this.min) / this.step) * this.step + this.min
                pre = (res - this.min) / (this.max - this.min)
            }
            x = pre * this.$refs.scrollbar.scrollWidth
            this.$refs.fillBar.style.width = x + 'px'
            this.$refs.handle.style.left = x + 'px'
            this.$refs.handle.innerText = this.valueFormat(res)
            if (this.disabled) return
            this.$emit('change', res)
        },
        clickBar(e) {
            this.changeValue(e.offsetX)
        },
        startDrag(e) {
            this.isDrag = true
            this.lastDragPos = e.clientX
            this.$refs.handle.classList.add('handle-hold')
            document.addEventListener('mousemove', this.dragIng)
            document.addEventListener('mouseup', this.endDrag)
        },
        startTouch(e) {
            if (e.touches.length !== 1) return
            this.isDrag = true
            this.lastDragPos = e.touches[0].clientX
            this.$refs.handle.classList.add('handle-hold')
            document.addEventListener('touchmove', this.touching)
            document.addEventListener('touchend', this.endTouch)
        },
        dragIng(e) {
            if (!this.isDrag) return
            this.changeValue(this.inputValue + e.clientX - this.lastDragPos)
            this.lastDragPos = e.clientX
        },
        touching(e) {
            if (!this.isDrag) return
            if (e.touches.length !== 1) return;
            this.changeValue(this.inputValue + e.touches[0].clientX - this.lastDragPos)
            this.lastDragPos = e.touches[0].clientX
        },
        endDrag() {
            this.isDrag = false
            this.$refs.handle.classList.remove('handle-hold')
            document.removeEventListener('mousemove', this.dragIng)
            document.removeEventListener('mouseup', this.endDrag)
        },
        endTouch() {
            this.isDrag = false
            this.$refs.handle.classList.remove('handle-hold')
            document.removeEventListener('touchmove', this.touching)
            document.removeEventListener('touchend', this.endTouch)
        }
    },
    watch: {
        value(v) {
            this.changeValue(((v - this.min) / (this.max - this.min)) * this.$refs.scrollbar.scrollWidth, true)
        }
    }
}
</script>

<style scoped>
.input-box {
    position: relative;
    width: 300px;
    height: 40px;
    margin: 10px 5px;
}

.scrollbar {
    position: absolute;
    width: 90%;
    height: 6px;
    border-radius: 3px;
    background-color: var(--border-color-level-3);
    top: 50%;
    left: 5%;
    transform: translateY(-50%);
    cursor: pointer;
}

.fill-bar {
    position: absolute;
    left: 5%;
    top: 50%;
    height: 8px;
    transform: translateY(-50%);
    background-color: var(--brand-color);
    border-radius: 4px;
    pointer-events: none;
}

.fill-bar-disable {
    background-color: var(--border-color-level-1);
}

.handle {
    position: absolute;
    top: 50%;
    height: 20px;
    min-width: 10px;
    line-height: 20px;
    text-align: center;
    width: auto;
    margin-left: 5%;
    padding-left: 5px;
    padding-right: 5px;
    transform: translate(-50%, -50%);
    background-color: var(--white-color);
    border: 2px solid var(--border-color-level-3);
    border-radius: 15px;
    cursor: grab;
    transition: 0.2s ease border;
}

.handle:hover,
.handle-hold {
    border: 2px solid var(--brand-color);
}

.handle-disable {
    border: 2px solid var(--border-color-level-1) !important;
    background-color: var(--border-color-level-3);
    cursor: not-allowed !important;
}

</style>
