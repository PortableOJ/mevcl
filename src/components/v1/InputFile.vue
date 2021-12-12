<template>
    <div class="input-box">
        <input class="input-control" type="file" ref="input" :multiple="multiple"
               @change="change" required :readonly="readOnly" :disabled="disabled" :accept="accept">
        <input class="input-fake" type="text" v-model="inputValue" readonly
               :class="inputValue !== '' ? 'input-control-not-null' : ''" :disabled="disabled"/>
        <span class="input-label">{{ placeholder }}</span>
        <span class="underline"></span>
    </div>
</template>

<script>
export default {
    name: "InputFile",
    model: {
        prop: 'value',
        event: 'change'
    },
    props: {
        value: null,
        placeholder: String,
        accept: {
            type: String,
            default: '*/*'
        },
        readOnly: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        multiple: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            inputValue: ''
        }
    },
    methods: {
        change() {
            let tmp = this.$refs.input.files
            if (tmp.length === 0)
                this.inputValue = ''
            else {
                this.inputValue = tmp[0].name
                if (tmp.length > 1) this.inputValue += " 等" + tmp.length + "个文件"
            }
            this.$emit('change', tmp)
        }
    },
    watch: {
        value(v) {
            if (v.length === 0)
                this.inputValue = ''
            else {
                this.inputValue = v[0].name
                if (v.length > 1) this.inputValue += " 等" + v.length + "个文件"
            }
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
    width: 100%;
    height: 100%;
    border: 1px solid;
    padding: 0 0 0 10px;
    outline: 0;
    cursor: pointer;
    opacity: 0;
}

.input-fake {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: 1px solid var(--transparent-color);
    border-bottom: 1px solid var(--border-color-level-3);
    background-color: var(--white-color);
    padding: 0 0 0 10px;
    outline: 0;
    transition: 0.2s ease all;
    pointer-events: none;
    color: var(--secondary-text-color);
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
    left: 50%;
    height: 4px;
    width: 0;
    background-color: var(--brand-color);
    transform: translateX(-50%);
    margin-left: 5px;
    transition: 0.2s ease all;
    border-radius: 2px;
}

/*hover*/
.input-control:hover ~ .underline {
    width: 100%;
}

/*focus*/
.input-control:focus {
    border-radius: 5px;
}

.input-control:focus + .input-label {
    color: var(--brand-color);
}

.input-control:focus ~ .underline {
    width: 100%;
}

/*valid*/
.input-control-not-null {
    border-radius: 5px;
    border: 1px solid var(--border-color-level-3);
}

.input-control-not-null + .input-label {
    top: 0;
    transform: scale(0.8) translateY(-50%);
    background: var(--white-color);
}

/*read-only*/
.input-control:read-only {
    border-radius: 5px;
}

/*disabled*/
.input-control:disabled {
    cursor: not-allowed;
    border: 1px solid var(--border-color-level-3);
    border-radius: 5px;
}

.input-control:disabled + .input-label {
    top: 0;
    transform: scale(0.8) translateY(-50%);
    background: var(--white-color);
}

.input-control:disabled ~ .underline {
    background-color: var(--border-color-level-3);
}

</style>
