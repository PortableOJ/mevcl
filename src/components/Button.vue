<template>
    <div class="input-box">
        <button
            :class="process !== null ? 'input-control-process' : (mouseDown ? 'input-control-down' : 'input-control')"
            @mousedown="mouseDown = true" @mouseup="mouseDown = false" @click="click"
            :disabled="disabled || loading || process !== null">
            <MiniLoading v-if="loading"></MiniLoading>
            <span v-else-if="process !== null">{{ showProcessValue + '%' }}</span>
            <slot v-else></slot>
        </button>
        <div class="process" v-if="process !== null"
             :style="'clip-path: inset(0 ' + (100 - showProcessValue) + '% 0 0)'">
        </div>
        <button class="process-value" v-if="process !== null"
                :style="'clip-path: inset(0 ' + (100 - showProcessValue) + '% 0 0)'">
            {{ showProcessValue + '%' }}
        </button>
    </div>
</template>

<script>
import MiniLoading from "../basic/MiniLoading";

export default {
    name: "Button",
    components: {
        MiniLoading
    },
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        loading: {
            type: Boolean,
            default: false
        },
        process: {
            type: Number,
            default: null
        }
    },
    data() {
        return {
            mouseDown: false,
            showProcessValue: null,
            processValueEase: null,
        }
    },
    created() {
        this.$once('hook:beforeDestroy', () => {
            if (this.processValueEase !== null) {
                clearInterval(this.processValueEase)
            }
        })
        this.processValueEase = setInterval(() => {
            this.showProcessValue += (this.process * 100 - this.showProcessValue > 0 ? 1 : -1)
                * Math.min(Math.abs(this.process * 100 - this.showProcessValue), 5);
            this.showProcessValue = parseInt(this.showProcessValue)
        }, 50)
    },
    methods: {
        click() {
            this.$emit('click');
        }
    }
}
</script>

<style scoped>
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
    border-radius: 20px;
    transition: 0.2s ease all;
    background-color: var(--brand-color);
    color: var(--white-color);
    border: 1px solid var(--border-color-level-3);
    cursor: pointer;
}

.process {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: var(--brand-color);
    margin: 1px;
    pointer-events: none;
    left: 0;
    border-radius: 20px;
    transition: 0.2s ease all;
}

.process-value {
    position: absolute;
    height: 100%;
    width: 100%;
    margin: 1px;
    pointer-events: none;
    left: 0;
    transition: 0.2s ease all;
    justify-content: center;
    align-items: center;
    color: var(--white-color);
    background-color: var(--transparent-color);
    border: 1px solid var(--transparent-color);
    line-height: 100%;
    text-align: center;
}

.input-control-down {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    margin: 1px;
    outline: 0;
    border-radius: 20px;
    transition: 0.2s ease all;
    background-color: var(--deep-brand-color);
    color: var(--white-color);
    border: 1px solid var(--border-color-level-3);
    cursor: pointer;
}

/*hover*/
.input-control:hover {
    background-color: var(--light-brand-color);
    border: 1px solid var(--brand-color);
}

/*focus*/
.input-control:focus {
    box-shadow: var(--focus-shadowbox);
    border: 1px solid var(--brand-color);
}

/*disabled*/
.input-control:disabled {
    cursor: not-allowed;
    background-color: var(--border-color-level-3);
    color: var(--disable-text-color);
}

.input-control-process:disabled {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    margin: 1px;
    outline: 0;
    border-radius: 20px;
    transition: 0.2s ease all;
    border: 1px solid var(--border-color-level-3);
    cursor: not-allowed;
    background-color: var(--transparent-color);
    color: var(--disable-text-color);
}

.input-control-process:hover {
    border: 1px solid var(--brand-color);
}

</style>
