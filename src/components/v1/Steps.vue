<template>
    <div class="step-box">
        <div class="step-line"></div>
        <div class="step-line" style="background-color: var(--success-color)" ref="done"></div>
        <div style="height: 40px; width: 100%"></div>
        <div class="step-items">
            <div v-for="(item, index) in data" :key="item.value" class="step-item"
                 :style="{cursor: item.clicked ? 'pointer' : 'not-allowed'}"
                 @click="clickStep(item.value, index)">
                <div class="item-icon" :style="{color: 'var(--' + item.type + '-color)'}">
                    <i v-if="item.icon !== undefined" :class="'iconfont icon-' + item.icon"></i>
                    <div v-else class="icon-text">{{ index + 1 }}</div>
                </div>
                <div class="item-title">
                    {{ item.title }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "Steps",
    props: {
        value: [String, Number],
        data: Array,
    },
    data() {
        return {
            step: 0,
        }
    },
    mounted() {
        this.step = this.data.findIndex(d => d.value === this.value)
        this.flush()
    },
    methods: {
        flush() {
            let width = 80
            width /= this.data.length
            this.$refs.done.style.width = width * (0.5 + this.step) + '%'
        },
        clickStep(value, index) {
            this.$emit('change', value, index)
        }
    },
    watch: {
        value(v) {
            this.step = this.data.findIndex(d => d.value === v)
            this.flush()
        },
        data() {
            this.flush()
        }
    }
}
</script>

<style scoped>
.step-box {
    width: 100%;
    position: relative;
}

.step-line {
    position: absolute;
    top: 20px;
    height: 5px;
    width: 80%;
    left: 10%;
    transform: translateY(-50%);
    background-color: var(--brand-color);
    border-radius: 5px;
    transition: 0.2s ease all;
}

.step-items {
    position: relative;
    width: 80%;
    left: 10%;
    top: -40px;
    display: flex;
    justify-content: space-around;
}

.item-icon {
    position: absolute;
    top: 20px;
    transform: translateY(-50%);
    background-color: var(--white-color);
    padding: 3px 10px;
    border-radius: 20px;
}

.item-title {
    position: relative;
    top: 30px;
}
</style>
