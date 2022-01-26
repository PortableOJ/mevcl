<template>
    <div class="input-box">
        <input class="input-control" :type="type" v-model="inputValue"
               @input="input" required :readonly="readOnly" :disabled="disabled"/>
        <label class="input-label">{{ placeholder }}</label>
        <span class="underline"></span>
    </div>
</template>

<script>
export default {
    name: "InputText",
    model: {
        prop: 'value',
        event: 'change'
    },
    props: {
        value: [String, Number],
        placeholder: String,
        type: {
            type: String,
            validator: function (value) {
                if (['text', 'password', 'number'].indexOf(value) !== -1) return true
                console.error("InputText Type Error, error type: " + value)
                return false
            },
            default: 'text'
        },
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
            inputValue: this.value,
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
    left: 0;
    top: 0;
    right: 0;
    height: 100%;
    border: 1px solid var(--transparent-color);
    border-bottom: 1px solid var(--border-color-level-3);
    border-radius: 5px;
    background-color: var(--white-color);
    padding: 0 10px 0 10px;
    outline: 0;
    transition: 0.2s ease all;
    appearance: none;
}

.input-label {
    position: absolute;
    width: auto;
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

/*hover*/
.input-control:hover ~ .underline {
    left: 0;
    right: 0;
}

/*focus*/
.input-control:focus {
    background: var(--white-color);
    border: 1px solid var(--brand-color);
    box-shadow: var(--focus-shadowbox);
}

.input-control:focus ~ .input-label {
    top: 0;
    transform: scale(0.8) translateY(-50%);
    background: var(--white-color);
    color: var(--brand-color);
}

.input-control:focus ~ .underline {
    left: 0;
    right: 0;
}

/*valid*/
.input-control:valid {
    border-radius: 5px;
    border: 1px solid var(--border-color-level-3);
    background: var(--white-color);
}

.input-control:valid ~ .input-label {
    top: 0;
    transform: scale(0.8) translateY(-50%);;
    background: var(--white-color);
}

/*read-only*/
.input-control:read-only {
    border-radius: 5px;
    border: 1px solid var(--border-color-level-3);
    background: var(--white-color);
    cursor: not-allowed;
}

.input-control:read-only ~ .input-label {
    top: 0;
    transform: scale(0.8) translateY(-50%);
    background: var(--white-color);
}

.input-control:read-only ~ .underline {
    background-color: var(--border-color-level-3);
}

/*disabled*/
.input-control:disabled {
    border-radius: 5px;
    border: 1px solid var(--border-color-level-3);
    background: var(--white-color);
    cursor: not-allowed;
}

.input-control:disabled ~ .input-label {
    top: 0;
    transform: scale(0.8) translateY(-50%);
    background: var(--white-color);
}

.input-control:disabled ~ .underline {
    background-color: var(--border-color-level-3);
}

</style>
