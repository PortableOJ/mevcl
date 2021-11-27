<template>
    <div class="nav-menu-box">
        <div class="nav-menu-button">
            <div class="nav-menu-input" v-html="inputLabel">
            </div>
            <span></span>
            <span></span>
        </div>
        <div class="nav-menu-select">
            <span v-for="(item, index) in options"
                  :key="index"
                  v-html="item.label"
                  :class="'nav-menu-select-item ' + (item.value === inputValue ? 'nav-menu-select-item-selected' : '')"
                  @click="clickOption(item)">
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: "NavMenu",
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
            this.openSelectOption = false
        }
    },
    watch: {
        value(v) {
            this.inputValue = this.options.find(d => d.value === v)
            this.inputLabel = this.inputValue === undefined ? '' : this.inputValue.label
            this.inputValue = this.inputValue === undefined ? '' : this.inputValue.value
        }
    }
}
</script>

<style scoped>
.nav-menu-box {
    position: relative;
    display: inline-block;
    width: 300px;
    border-radius: 100px;
    padding: 10px 10px;
    box-shadow: var(--open-shadowbox);
}

.nav-menu-button {
    position: absolute;
    width: 20%;
    top: 0;
    left: 0;
    height: 100%;
}

.nav-menu-input {
    position: absolute;
    top: 50%;
    left: 30%;
    overflow: hidden;
    transform: translateY(-50%);
}

.nav-menu-select {
    position: relative;
    margin-left: 20%;
    width: 0;
    overflow: scroll;
    vertical-align: middle;
}

.nav-menu-select-item {
    position: relative;
    margin: 0 10px;
    height: 100%;
    /*width: 0;*/
    /*height: 0;*/
    vertical-align: middle;
    display: inline-block;
    padding: 3px 0;
    cursor: pointer;
}

.nav-menu-select-item::after {
    content: "";
    position: absolute;
    height: 3px;
    width: 3px;
    /*width: 0;*/
    /*height: 0;*/
    bottom: 0;
    left: 50%;
    border-radius: 3px;
    background: var(--secondary-text-color);
    transition: 0.2s ease all;
}

.nav-menu-select-item:hover::after {
    width: 100%;
    left: 0;
}

.nav-menu-select-item-selected::after {
    width: 100%;
    left: 0;
    background: var(--brand-color);
}
</style>