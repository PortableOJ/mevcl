<template>
    <div class="nav-menu-box">
        <div class="nav-menu-selected">
            {{ inputLabel }}
        </div>
        <div class="nav-menu-split-line"></div>
        <div class="nav-menu-options">
            <div :class="{
                'nav-menu-option': true,
                'nav-menu-option-selected': item.value === inputValue
                }"
                 v-for="item in options"
                 :key="item.value"
                 @click="clickOption(item)">
                {{ item.label }}
            </div>
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
    },
    data() {
        return {
            inputValue: this.options.find(d => d.value === this.value),
            inputLabel: '',
            openSelectOption: false,
        }
    },
    created() {
        this.inputValue = this.options.find(d => d.value === this.value)
        this.inputLabel = this.inputValue === undefined ? '' : this.inputValue.label
        this.inputValue = this.inputValue === undefined ? '' : this.inputValue.value
    },
    methods: {
        clickOption(option) {
            this.inputValue = option.value
            this.inputLabel = option.label
            this.$emit('change', option.value)
        }
    },
    watch: {
        value(v) {
            if (v === this.inputValue) return
            const tmp = this.options.find(d => d.value === v)
            this.inputLabel = tmp === undefined ? '' : tmp.label
            this.inputValue = tmp === undefined ? '' : tmp.value
        }
    }
}
</script>

<style scoped>
.nav-menu-box {
    position: relative;
    box-shadow: var(--open-shadowbox);
    padding: 10px 10px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.nav-menu-selected {
    position: relative;
    min-width: 20px;
    margin-left: 10px;
    margin-right: 0;
    padding-right: 10px;
    color: var(--brand-color);
    font-size: 2em;
}

.nav-menu-split-line {
    position: relative;
    height: 20px;
    width: 3px;
    background-color: var(--brand-color);
    border-radius: 3px;
}

.nav-menu-options {
    padding-left: 10px;
    position: relative;
    flex-grow: 1;
}

.nav-menu-option {
    position: relative;
    display: inline-block;
    padding: 5px 5px;
    border-radius: 5px;
    cursor: pointer;
}

.nav-menu-option:hover {
    background-color: var(--border-color-level-1);
}

.nav-menu-option-selected {
    color: var(--brand-color);
    font-weight: 700;
    border: 1px solid var(--brand-color);
}
</style>
