<template>
    <div :class="{
        'input-box': true,
        'input-box-enable': !readOnly && !disabled,
        'input-box-on': inputValue && !readOnly && !disabled,
        'input-box-disable': disabled,
        'input-box-readOnly': readOnly || disabled
    }" @click="change">
        <div class="input-label">
            <i :class="{'iconfont': true, 'icon-success': inputValue, 'icon-error': !inputValue}"></i>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "InputCheckbox",
    model: {
        prop: 'value',
        event: 'change'
    },
    props: {
        value: Boolean,
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
        change() {
            if (!this.readOnly && !this.disabled) {
                this.inputValue = !this.inputValue
                this.$emit('change', this.inputValue)
            }
        },
    },
    watch: {
        value(v) {
            if (!this.disabled) {
                this.inputValue = v
            }
        }
    }
}
</script>

<style scoped>
.input-box {
    display: inline-block;
    padding: 8px 10px;
    border-radius: 10px;
    cursor: pointer;
    margin: 10px 5px;
    transition: 0.2s ease all;
    color: var(--secondary-text-color);
    background-color: var(--white-color);
    border: 1px solid var(--border-color-level-3);
}

.input-box-on {
    background-color: var(--brand-color);
    color: var(--white-color);
}

.input-box-disable {
    text-decoration: line-through;
}

.input-box-readOnly {
    cursor: not-allowed;
    background-color: var(--border-color-level-1);
}

.input-label {
    display: grid;
    grid-template-columns: 25px 1fr;
    place-items: center;
}

.input-box-enable:hover {
    border: 1px solid var(--brand-color);
    box-shadow: var(--focus-shadowbox);
}

.input-box-disable:hover,
.input-box-readOnly:hover {
    border: 1px solid var(--border-color-level-1);
    box-shadow: var(--focus-shadowbox);
}


</style>
