<template>
    <div>
        <div class="overlay">
            <div :class="'message-box ' + getTendencyClass()">
                <div class="message-icon">
                    <i :class="'iconfont icon-' + type"></i>
                </div>
                <div class="message-text">
                    {{ text }}
                </div>
                <div v-if="input" class="message-input">
                    <InputText v-model="inputValue" :type="inputType"></InputText>
                </div>
                <div class="message-button">
                    <InputButton @click="callback(confirmOK)" v-if="ok !== null" :type="type">
                        {{ ok }}
                    </InputButton>
                    <InputButton @click="callback(confirmCancel)" v-if="cancel !== null" type="normal">
                        {{ cancel }}
                    </InputButton>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import InputButton from "../InputButton";
import Common from "../../../static/common"
import InputText from "../InputText";

export default {
    name: "MessageBox",
    components: {
        InputText,
        InputButton
    },
    data() {
        return {
            text: '',
            type: 'warning',
            inputType: 'text',
            ok: '确定',
            cancel: '取消',
            input: true,
            inputValue: '',
            confirmOK: null,
            confirmCancel: null,
        }
    },
    methods: {
        getTendencyClass() {
            return Common.getTendencyClass(this.type)
        },
        callback(func) {
            if (func !== null && func !== undefined) {
                func(this.inputValue)
            }
        }
    }
}
</script>

<style scoped>
.message-box {
    position: fixed;
    width: 400px;
    min-height: 100px;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 15px;
    box-shadow: var(--open-shadowbox);
    overflow: hidden;
    animation: message-box-show 0.3s ease forwards;
}

.message-icon {
    margin-top: 15px;
    margin-left: 10px;
    margin-right: 10px;
}

.message-icon i {
    font-size: 40px;
}

.message-text {
    line-break: anywhere;
    margin-bottom: 20px;
    margin-top: 20px;
}

.message-input * {
    left: 50%;
    transform: translate(-50%, 0);
}

.message-button {
    position: relative;
    margin-top: 20px;
    width: 100%;
}

.message-button * {
    display: inline-block;
    width: 90px;
    height: 30px;
}

@keyframes message-box-show {
    0% {
        transform: translate(-50%, -50%) scale(0);
    }
    100% {
        transform: translate(-50%, -50%) scale(1);
    }
}
</style>
