<template>
    <div class="nav-menu-box">
        <div class="nav-menu-options">
            <template v-for="item in options">
                <div :class="{
                        'nav-menu-option': true,
                        'nav-menu-option-selected': item.value === inputValue
                    }"
                     v-if="!item.hidden" :key="item.value" @click="clickOption(item)" v-html="item.label">
                </div>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    name: "NavMenu",
    model: {
        prop: 'value',
        event: 'change'
    },
    props: {
        value: [String, Number],
        options: Array,
        notFound: Function,
    },
    data() {
        return {
            inputValue: this.options.find(d => d.value === this.value),
        }
    },
    methods: {
        clickOption(option) {
            this.inputValue = option.value
            this.$emit('change', option.value)
        }
    },
    watch: {
        value(v) {
            if (v === this.inputValue) return
            this.inputValue = v
        }
    }
}
</script>

<style scoped>
.nav-menu-box {
    background: var(--very-light-brand-color);
    position: relative;
    border: 1px solid var(--brand-color);
    padding: 10px 10px;
    border-radius: 10px;
}

.nav-menu-options {
    padding-left: 10px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.nav-menu-option {
    flex-grow: 0;
    position: relative;
    display: inline-block;
    margin: 0 5px;
    padding: 10px 10px;
    border-radius: 5px;
    cursor: pointer;
    border: 1px solid var(--transparent-color);
}

.nav-menu-option:hover {
    background-color: var(--border-color-level-1);
}

.nav-menu-option-selected {
    color: var(--brand-color);
    border: 1px solid var(--brand-color);
}
</style>
