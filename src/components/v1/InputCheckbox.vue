<template>
    <div class="input-box">
        <input class="input-control" type="checkbox" v-model="inputValue"
               :readonly="readOnly" :disabled="disabled" @change="input" required/>
        <span class="input-background"></span>
        <label class="input-label">
            <slot></slot>
        </label>
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
        input(event) {
            this.$emit('change', event.target.checked)
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
@keyframes rotating {
    from {
        transform: rotate(-45deg);
    }
    to {
        transform: rotate(315deg);
    }
}

@keyframes short {
    to {
        width: 0;
    }
}

.input-box {
    position: relative;
    width: 120px;
    height: 40px;
    margin: 10px 5px;
}

.input-control {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    margin: 1px;
    outline: 0;
    opacity: 0;
    cursor: pointer;
}

.input-label {
    position: absolute;
    top: 50%;
    left: 50%;
    pointer-events: none;
    transition: 0.2s ease all;
    transform: translate(-50%, -50%);
    color: var(--secondary-text-color);
}

.input-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    pointer-events: none;
    transition: 0.2s ease all;
    background-color: var(--white-color);
    border: 1px solid var(--border-color-level-3);
}

.input-label::before {
    content: "";
    position: absolute;
    height: 2px;
    width: 12px;
    left: -40%;
    top: 50%;
    background: var(--secondary-text-color);
    transform: rotate(-45deg);
    border-radius: 2px;
    transition: background .3s ease;
}

.input-label::after {
    content: "";
    position: absolute;
    height: 2px;
    width: 12px;
    top: 50%;
    left: -40%;
    border-radius: 2px;
    background: var(--secondary-text-color);
    transform: rotate(45deg);
}

/*focus*/
.input-control:focus ~ .input-background {
    border: 1px solid var(--brand-color);
    box-shadow: var(--focus-shadowbox);
}

/*checked*/
.input-control:checked ~ .input-background {
    background-color: var(--brand-color);
}

.input-control:checked ~ .input-label {
    color: var(--white-color);
}

.input-control:checked ~ .input-label::before {
    background-color: var(--white-color);
    transform: rotate(-45deg);
}

.input-control:checked ~ .input-label::after {
    background-color: var(--white-color);
    transform: rotate(45deg);
    width: 6px;
    top: 60%;
    left: -47%;
}

/*disable*/
.input-control:disabled {
    cursor: not-allowed;
}

.input-control:disabled ~ .input-background {
    background-color: var(--border-color-level-1);
    color: var(--disable-text-color);
}

/*!*hover*!*/
/*.input-control:hover ~ .input-label::before {*/
/*    animation-duration: 1s;*/
/*    animation-delay: 0.1s;*/
/*    animation-name: rotating;*/
/*    animation-timing-function: linear;*/
/*    animation-iteration-count: infinite;*/
/*}*/

/*.input-control:hover ~ .input-label::after {*/
/*    animation-duration: 0.1s;*/
/*    animation-name: short;*/
/*    animation-timing-function: linear;*/
/*    animation-iteration-count: 1;*/
/*    animation-fill-mode: forwards;*/
/*}*/

</style>
