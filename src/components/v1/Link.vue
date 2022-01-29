<template>
    <div :class="'link ' + (disabled ? 'link-disabled' : (mouseDown ? 'link-down' : ''))"
          @click="click" @mousedown="mouseDown = true" @mouseup="mouseDown = false">
        <slot></slot>
        <span class="underline"></span>
    </div>
</template>

<script>
export default {
    name: "Link",
    props: {
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            mouseDown: false
        }
    },
    methods: {
        click() {
            if (this.disabled) return
            this.$emit('click');
        }
    }
}
</script>

<style scoped>
.link {
    outline: none;
    color: var(--brand-color);
    cursor: pointer;
    transition: 0.2s ease all;
    display: inline-block;
    position: relative;
}

.underline {
    position: absolute;
    left: 50%;
    height: 2px;
    width: 0;
    bottom: 0;
    background-color: var(--brand-color);
    transform: translateX(-50%);
    transition: 0.2s ease all;
    border-radius: 1px;
}

.link:hover > .underline {
    width: 100%;
}

.link-down {
    color: var(--deep-brand-color);
}

.link-down > .underline {
    background-color: var(--deep-brand-color);
}

.link-disabled {
    color: var(--disable-text-color);
    cursor: not-allowed;
}

.link-disabled > .underline {
    background-color: var(--border-color-level-3);
}

</style>
