<template>
    <div class="pagination-box">
        <div :class="{
            'page-button': curValue !== 1,
            'page-button-disable': curValue === 1}"
             @click="clickNum(curValue - 1)">
            <i class="iconfont icon-left"></i>
        </div>
        <div v-show="leftValue !== 1" class="page-more">···</div>
        <div v-for="page in showValue" :key="page" :class="{'page-num': true, 'page-num-on': page === curValue}"
            @click="clickNum(page)">
            {{ page }}
        </div>
        <div v-show="rightValue !== totPage" class="page-more">···</div>
        <div :class="{
            'page-button': curValue !== totPage,
            'page-button-disable': curValue === totPage}"
             @click="clickNum(curValue + 1)">
            <i class="iconfont icon-right"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: "Pagination",
    props: {
        value: {
            type: Number,
            default: 1,
        },
        total: Number,
        pageSize: {
            type: Number,
            default: 20
        },
        forward: {
            type: Number,
            default: 3,
        },
        back: {
            type: Number,
            default: 1,
        }
    },
    created() {
        this.curValue = this.value
        this.generate();
    },
    data() {
        return {
            leftValue: 2,
            rightValue: 4,
            showValue: [2, 3, 4, 5, 6],
            curValue: 4,
            totPage: 10,
            inputValue: null,
        }
    },
    methods: {
        generate() {
            this.totPage = Math.floor(this.total / this.pageSize);
            this.leftValue = Math.max(1, this.curValue - this.back)
            this.rightValue = Math.min(this.totPage, this.curValue + this.forward)
            let tmp = []
            for (let i = this.leftValue; i <= this.rightValue; i++) tmp.push(i)
            this.showValue = tmp
        },
        clickNum(num) {
            if (num < 1) num = 1
            if (num > this.totPage) num = this.totPage
            if (this.curValue === num) return
            this.curValue = num
            this.generate()
        }
    },
    watch: {
        value(v) {
            this.curValue = v
            this.generate()
        }
    }
}
</script>

<style scoped>
.pagination-box {
    display: flex;
    width: 800px;
    font-weight: bold;
    justify-content: center;
    align-items: center;
}

.page-button {
    opacity: 0.6;
    cursor: pointer;
}

.page-button:hover {
    opacity: 1;
}

.page-button-disable {
    opacity: 0.6;
    color: var(--disable-text-color);
    cursor: not-allowed;
}

.page-more {
    padding: 3px 5px;
    margin: 0 2px;
}

.page-num {
    padding: 3px 5px;
    margin: 0 2px;
    border-radius: 5px;
    cursor: pointer;
}

.page-num:hover {
    background-color: var(--border-color-level-1);
}

.page-num-on {
    color: var(--brand-color);
}

</style>
