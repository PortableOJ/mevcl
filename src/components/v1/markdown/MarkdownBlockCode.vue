<template>
    <div class="markdown-block-code">
        <div class="markdown-block-code-line">
            <pre class="code-font">{{ lines }}</pre>
        </div>
        <div class="markdown-block-code-code">
            <pre class="code-font">{{ code }}</pre>
        </div>
        <div :class="{
            'markdown-block-code-copy': true,
            'markdown-block-code-copy-copied': copied,
        }" @click="copyCode">
            <span v-if="!copied">Copy!</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "MarkdownBlockCode",
    data() {
        return {
            code: '',
            lines: '',
            copied: false
        }
    },
    created() {
        this.copied = false
        this.lines = Object.keys(
            Array.apply(null, {length: Math.max(1, this.code.split('\n').length)})
        ).map(i => parseInt(i) + 1).join('\n')
    },
    methods: {
        copyCode() {
            const clipboard = navigator.clipboard;
            clipboard.writeText(this.code)
            if (!this.copied) {
                this.copied = true
                setTimeout(() => {
                    this.copied = false
                }, 1000)
            }
        }
    }
}
</script>

<style scoped>
.markdown-block-code {
    position: relative;
    display: grid;
    grid-template-columns: auto 1fr;
    border: 2px solid var(--border-color-level-1);
    background-color: var(--border-color-level-4);
    border-radius: 5px;
}

.code-font {
    font-family: Consolas, Monaco, monospace;
}

.markdown-block-code-line {
    border-right: 1px solid var(--border-color-level-1);
    padding: 0 3px;
    text-align: right;
}

.markdown-block-code-code {
    padding: 0 3px;
    text-align: left;
}

.markdown-block-code-copy {
    position: absolute;
    top: 0;
    right: 0;
    background: var(--border-color-level-1);
    color: var(--secondary-text-color);
    padding: 3px 5px 5px 5px;
    border-bottom-left-radius: 5px;
    cursor: pointer;
    transition: 0.2s ease all;
    min-width: 50px;
    min-height: 20px;
    /*opacity: 0;*/
}

.markdown-block-code-copy:hover {
    opacity: 1;
}

.markdown-block-code-copy-copied::before {
    content: "";
    position: absolute;
    height: 2px;
    width: 8px;
    left: 40%;
    top: 50%;
    border-radius: 2px;
    background: var(--secondary-text-color);
    transform: rotate(45deg);
}

.markdown-block-code-copy-copied::after {
    content: "";
    position: absolute;
    height: 2px;
    width: 16px;
    top: 40%;
    left: 46%;
    border-radius: 2px;
    background: var(--secondary-text-color);
    transform: rotate(-45deg);
}

</style>