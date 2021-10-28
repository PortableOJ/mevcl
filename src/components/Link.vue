<template>
    <span :class="disabled ? 'link-disabled' : (mouseDown ? 'link-down' : 'link')"
          @click="click" @mousedown="mouseDown = true" @mouseup="mouseDown = false">
        <slot></slot>
    </span>
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
}

.link:hover {
    background-color: var(--brand-color);
    color: var(--white-color);
    box-shadow: var(--focus-shadowbox);
}

.link-down {
    outline: none;
    color: var(--white-color);
    box-shadow: var(--focus-shadowbox);
    background-color: var(--deep-brand-color);
    cursor: pointer;
    transition: 0.2s ease all;
}

.link-disabled {
    outline: none;
    color: var(--disable-text-color);
    cursor: not-allowed;
}

.link-disabled:hover {
    background-color: var(--disable-text-color);
    color: var(--white-color);
}
</style>
