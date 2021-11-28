<template>
    <div class="step-box">
        <div class="step-line"></div>
        <div class="step-items">
            <div v-for="item in data" :key="item.value" class="step-item">
                <div>{{ item }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Steps",
    props: {
        data: Array,
    },
    data() {
        return {}
    },
    methods: {}
}
</script>

<style scoped>
.step-box {
    width: 100%;
    min-height: 40px;
    position: relative;
}

.step-line {
    position: absolute;
    top: 20px;
    height: 5px;
    width: 80%;
    left: 10%;
    background-color: var(--brand-color);
    border-radius: 5px;
}

.step-items {
    position: absolute;
    width: 80%;
    left: 10%;
    top: 0;
    display: flex;
    justify-content: space-around;
}

.step-item {

}
</style>
