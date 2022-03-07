<template>
    <div class="nav-menu-box">
        <div class="nav-menu-options">
            <template v-for="item in options">
                <div :class="{
                        'nav-menu-option': true,
                        'nav-menu-option-selected': item.value === inputValue
                    }"
                     v-if="!item.hidden" :key="item.value" @click="clickOption(item)">
                    {{ item.label }}
                </div>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    name: "HorizontalMenu",
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
    display: inline-block;
    position: relative;
    padding: 0;
    /*border-bottom: 1px solid var(--border-color-level-1);*/
    justify-content: center;
    align-items: center;
}

.nav-menu-options {
    position: relative;
    flex-grow: 1;
}

.nav-menu-option {
    position: relative;
    display: inline-block;
    padding: 15px 10px;
    cursor: pointer;
    border-bottom: 1px solid var(--border-color-level-1);
}

.nav-menu-option:hover {
    background-color: var(--very-light-brand-color);
}

.nav-menu-option-selected {
    color: var(--brand-color);
    background-color: var(--very-light-brand-color);
    border-bottom: 1px solid var(--brand-color);
}
</style>
e>