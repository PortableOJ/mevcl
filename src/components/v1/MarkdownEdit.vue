<template>
    <div class="markdown-edit-box" ref="box" :style="{'min-height': `${minHeight}px`}">
        <div class="markdown-edit-input" :style="{'opacity': leftPercent > 1 ? 1 : 0}">
            <InputCode mode="gfm" @change="changeMarkdown" ref="inputBox"></InputCode>
        </div>
        <div v-html="inputShow" :class="{'markdown-edit-show': true, 'markdown-edit-show-drag': onDrag}"
             :style="{'opacity': leftPercent < 99 ? 1 : 0}"
             ref="showBox"></div>
        <div class="markdown-drag-line" @mousedown="dragStart" ref="dragLine"></div>
    </div>
</template>

<script>
import Vue from 'vue'
import Markdown from './markdown/main'
import InputCode from "./InputCode";

// noinspection JSCheckFunctionSignatures
Vue.use(Markdown)

export default {
    name: "MarkdownEdit",
    components: {InputCode},
    model: {
        prop: 'placeholder',
        event: 'change'
    },
    props: {
        placeholder: {
            type: String,
            default: ''
        },
        codeMode: {
            type: Boolean,
            default: false
        },
        readOnly: {
            type: Boolean,
            default: false
        },
        minHeight: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            inputShow: '',
            leftPercent: 50,
            onDrag: false,
            dragLastClientX: 0,
        }
    },
    mounted() {
        this.changeMarkdown()
    },
    methods: {
        changeMarkdown(text) {
            this.$emit('change', text)
            this.inputShow = this.$markdown(text)
            this.$nextTick(() => {
                this.$renderer()
            })
        },
        updatePosition(pixel) {
            this.leftPercent += pixel * 100 / this.$refs.box.clientWidth
            this.leftPercent = this.leftPercent < 1 ? 0 : this.leftPercent
            this.leftPercent = this.leftPercent > 99 ? 100 : this.leftPercent
            this.leftPercent = this.leftPercent < 50.5 && this.leftPercent > 49.5 ? 50 : this.leftPercent
            this.$refs.box.style.gridTemplateColumns = `${this.leftPercent}% ${100 - this.leftPercent}%`
            this.$refs.dragLine.style.left = `${this.leftPercent}%`
        },
        dragStart(e) {
            this.onDrag = true
            this.dragLastClientX = e.clientX
            document.addEventListener('mousemove', this.dragMove)
            document.addEventListener('mouseup', this.dragOver)
        },
        dragMove(e) {
            if (!this.onDrag) return
            this.updatePosition(e.clientX - this.dragLastClientX)
            this.dragLastClientX = e.clientX
        },
        dragOver(e) {
            if (!this.onDrag) return
            this.onDrag = false
            this.updatePosition(e.clientX - this.dragLastClientX)
            document.removeEventListener('mousemove', this.dragMove)
            document.removeEventListener('mouseup', this.dragOver)
        }
    }
}
</script>

<style scoped>
.markdown-edit-box {
    position: relative;
    width: auto;
    height: auto;
    display: grid;
    grid-template-columns: 50% 50%;
    border: 1px solid var(--border-color-level-1);
    border-radius: 5px;
    min-height: 50px;
    margin: 10px 0;
}

.markdown-edit-input {
    position: relative;
    top: 0;
    margin: 0 0;
    border-right: 1px solid var(--border-color-level-1);
    background: var(--border-color-level-4);
    overflow: auto;
}

.markdown-edit-show {
    text-align: left;
    padding: 10px 12px;
    overflow: auto;
}

.markdown-edit-show-drag {
    user-select: none;
}

.markdown-drag-line {
    position: absolute;
    left: 50%;
    height: 100%;
    top: 0;
    padding: 0;
    margin: 0;
    width: 10px;
    background: var(--brand-color);
    cursor: ew-resize;
    transform: translateX(-50%);
    opacity: 0;
    transition: 0.2s ease all;
}

.markdown-drag-line:hover {
    opacity: 1;
}
</style>