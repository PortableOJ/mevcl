<template>
    <div class="input-box">
        <input type="datetime-local" class="input-control" v-model="inputValue" @input="input" required
               :readonly="readOnly" :disabled="disabled">
        <span class="input-label">{{ placeholder }}</span>
        <span class="underline"></span>
    </div>
</template>

<script>
export default {
    name: "InputDateTime",
    model: {
        prop: 'value',
        event: 'change'
    },
    props: {
        value: String,
        placeholder: String,
        readOnly: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            inputValue: this.value
        }
    },
    methods: {
        input() {
            this.$emit('change', this.inputValue)
        }
    },
    watch: {
        value(v) {
            this.inputValue = v
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

.input-control {
    position: absolute;
    height: 100%;
    padding: 0 10px 0 10px;
    outline: 0;
    top: 0;
    left: 0;
    width: calc(100% - 22px);
    border: 1px solid var(--transparent-color);
    border-bottom: 1px solid var(--border-color-level-3);
    background-color: var(--white-color);
    border-radius: 5px;
    cursor: pointer;
    appearance: none;
}

.input-label {
    position: absolute;
    width: 100%;
    text-align: left;
    left: 10px;
    top: 50%;
    color: var(--secondary-text-color);
    background-color: var(--white-color);
    transform: translateY(-50%);
    transition: 0.2s ease all;
    pointer-events: none;
    padding: 0 4px;
}

.underline {
    position: absolute;
    margin-top: 1px;
    bottom: -4px;
    height: 4px;
    left: 50%;
    right: 50%;
    background-color: var(--brand-color);
    margin-left: 5px;
    margin-right: 5px;
    transition: 0.2s ease all;
    border-radius: 2px;
}

.input-control:valid,
.input-control:focus,
.input-control:disabled,
.input-control:read-only {
    border-radius: 5px;
}

.input-control:valid,
.input-control:disabled,
.input-control:read-only {
    border: 1px solid var(--border-color-level-3);
}

.input-control:valid,
.input-control:focus,
.input-control:read-only {
    background: var(--white-color);
}

.input-control:focus {
    border: 1px solid var(--brand-color);
    box-shadow: var(--focus-shadowbox);
}

.input-control:read-only,
.input-control:disabled {
    cursor: not-allowed;
    border: 1px solid var(--border-color-level-3);
    border-radius: 5px;
}

.input-control:focus + .input-label,
.input-control:valid + .input-label,
.input-control:read-only + .input-label,
.input-control:disabled + .input-label {
    top: 0;
    transform: scale(0.8) translateY(-50%);;
    background: var(--white-color);
    width: auto;
}

.input-control:focus + .input-label {
    color: var(--brand-color);
}

.input-control:disabled ~ .underline,
.input-control:read-only ~ .underline {
    background-color: var(--border-color-level-3);
}

.input-control:hover ~ .underline,
.input-control:focus ~ .underline {
    left: 0;
    right: 0;
}
</style>
