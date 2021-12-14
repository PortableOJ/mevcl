<template>
    <div class="textarea-box">
        <pre :class="{'input': true, 'input-code': codeMode}"
             @input="change" ref="inputBox">
        </pre>
        <span class="input-label">{{ title }}</span>
    </div>
</template>

<script>
export default {
    name: "InputTextarea",
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
        title: String
    },
    mounted() {
        this.$refs.inputBox.innerHTML = this.placeholder
    },
    methods: {
        change() {
            this.$emit('change', this.$refs.inputBox.innerText)
        }
    }
}
</script>

<style scoped>
.textarea-box {
    position: relative;
    width: auto;
    margin: 10px 5px;
    text-align: left;
    font-size: 11px;
}

.input {
    outline: none;
    padding: 10px 12px;
    border-radius: 5px;
    margin: 10px 5px;
    transition: 0.2s ease all;
    border: 1px solid var(--border-color-level-1);
    -webkit-user-modify: read-write-plaintext-only;
    -moz-user-modify: read-write-plaintext-only;
    user-modify: read-write-plaintext-only;
    overflow: auto;
}

.input-label {
    position: absolute;
    top: 0;
    left: 15px;
    width: auto;
    transform: translateY(-50%);
    color: var(--secondary-text-color);
    background-color: var(--white-color);
    transition: 0.2s ease all;
    pointer-events: none;
    padding: 0 4px;
}

.input-code {
    font-family: Consolas, Monaco, monospace;
}

.input:focus {
    border: 1px solid var(--brand-color);
    box-shadow: var(--focus-shadowbox);
}

.input:focus ~ .input-label {
    top: 0;
    color: var(--brand-color);
    transform: scale(0.8) translateY(-50%);
}

</style>