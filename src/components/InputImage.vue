<template>
    <div class="input-box">
        <input class="input-control" type="file" accept="image/*" ref="input"
               @change="change" required :readonly="readOnly" :disabled="disabled">
        <div class="input-fake" :style="placeholder !== null ? 'display: none' : ''"></div>
        <i class="iconfont icon-increase icon" :style="placeholder !== null ? 'display: none' : ''"></i>
        <img class="image" ref="img" alt="" src="">
        <img class="placeholder" ref="placeholder" :src="placeholder"
             :style="placeholder === null ? 'display: none' : ''" alt="">
    </div>
</template>

<script>
export default {
    name: "InputImage",
    model: {
        prop: 'value',
        event: 'change'
    },
    props: {
        value: null,
        placeholder: {
            type: String,
            default: null
        },
        accept: {
            type: String,
            default: 'image/*'
        },
        readOnly: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        scale: {
            type: [Number, null],
            default: null
        }
    },
    data() {
        return {}
    },
    mounted() {
    },
    methods: {
        change() {
            let tmp = this.$refs.input.files
            if (tmp.length === 0)
                this.inputValue = null
            else
                this.showImage(tmp[0])
            this.$emit('change', tmp[0])
        },
        showImage(img) {
            let reader = new FileReader()
            reader.readAsDataURL(img)
            reader.onload = () => {
                let img = this.$refs.img
                img.src = reader.result.toString()
            }
        }
    }
}
</script>

<style scoped>
.input-box {
    position: relative;
    width: 300px;
    height: 300px;
    margin: 10px 5px;
}

.input-control {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    padding: 3px;
    cursor: pointer;
}

.input-fake {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    border-radius: 5px;
    border: 3px dashed var(--border-color-level-3);
}

.icon {
    position: absolute;
    font-weight: 900;
    font-size: 30px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--border-color-level-1);
    pointer-events: none;
}

.image {
    position: absolute;
    top: 50%;
    left: 50%;
    max-width: 100%;
    max-height: 100%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    border-radius: 5px;
    box-shadow: var(--focus-shadowbox);
    border: 3px solid var(--border-color-level-3);
    opacity: 0;
}

.placeholder {
    position: absolute;
    top: 50%;
    left: 50%;
    max-width: 100%;
    max-height: 100%;
    min-width: 0;
    min-height: 0;
    transform: translate(-50%, -50%);
    pointer-events: none;
    border-radius: 5px;
    box-shadow: var(--focus-shadowbox);
    border: 3px solid var(--border-color-level-3);
}

.input-control:valid ~ .input-fake,
.input-control:valid ~ .icon,
.input-control:valid ~ .placeholder {
    opacity: 0;
}

.input-control:valid ~ .image {
    opacity: 1;
}
</style>
