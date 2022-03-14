<template>
    <div class="avatar-box">
        <img class="avatar-img" :src="src" alt="avatar">
        <div class="avatar-overlay colorful-box">
            <slot>Change</slot>
        </div>
        <input @change="showCut" ref="file" type="file" class="avatar-input">
        <div ref="clip" class="overlay center" v-show="onCut">
            <div class="overlay-inline center"
                 @mousemove="mouseMove"
                 @mouseup="mouseUp"
                 @mouseleave="mouseUp">
                <img @load="prepareClip" ref="img" src="" alt="" class="image"/>
                <div ref="base" class="image-overlay-base">
                    <!--左上角+中上+右上角-->
                    <div class="image-overlay" ref="top"></div>
                    <!--左下角+中下+右下角-->
                    <div class="image-overlay" ref="bottom"></div>
                    <!--中左-->
                    <div class="image-overlay" ref="left"></div>
                    <!--中右-->
                    <div class="image-overlay" ref="right"></div>
                    <!--中间-->
                    <div ref="center" @mousedown="mouseDown" style="position: absolute; cursor: move;">
                        <svg viewBox="0 0 1 1" class="image-overlay-center">
                            <path
                                d="M -40 -40 L -40 41 L 41 41 L 41 -40 Z M 0 .5 A .5 .5 0 0 0 1 .5 A .5 .5 0 0 0 0 .5 "
                                fill="#909399" fill-rule="evenodd" fill-opacity=".5">
                            </path>
                            <path d="M -40 -40 L -40 41 L 41 41 L 41 -40 Z M 0 0 L 1 0 L 1 1 L 0 1 Z " fill="#909399"
                                  fill-rule="evenodd" fill-opacity=".5">
                            </path>
                        </svg>
                        <div class="image-overlay-center-round"></div>
                    </div>
                    <div class="image-overlay-scale" ref="scale" @mousedown="scaleMouseDown"></div>
                </div>
                <div style="position: absolute; bottom: 10px; display: grid; grid-template-columns: 1fr 1fr;">
                    <InputButton @click="ok" ><slot name="ok">Ok</slot></InputButton>
                    <InputButton @click="onCut = false"><slot name="cancel">cancel</slot></InputButton>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import InputButton from "./InputButton";

export default {
    name: "InputAvatar",
    components: {InputButton},
    props: {
        src: String
    },
    data() {
        return {
            onCut: false,

            imageSize: {
                width: 0,
                height: 0,
            },
            cutSize: {
                file: null,
                left: 0,
                top: 0,
                width: 0,
                height: 0,
            },
            overlayDom: {
                top: null,
                bottom: null,
                left: null,
                right: null,
                center: null,
            },
            mousePos: {
                x: null,
                y: null,
            },
            scaleSize: {
                width: null,
                height: null,
            },
            onDrag: false,
            onScale: false,
        }
    },
    mounted() {
        this.overlayDom = {
            top: this.$refs.top,
            bottom: this.$refs.bottom,
            left: this.$refs.left,
            right: this.$refs.right,
            center: this.$refs.center,
            scale: this.$refs.scale
        }
    },
    methods: {
        clamp(l, r, v) {
            if (v < l) return l
            else if (v > r) return r
            return v
        },
        showCut() {
            this.onCut = true
            let reader = new FileReader()
            this.cutSize.file = this.$refs.file.files[0]
            this.$refs.file.value = ''
            reader.readAsDataURL(this.cutSize.file)
            reader.onload = () => {
                this.$refs.img.src = reader.result.toString();
            }
        },
        // 准备裁剪系统
        prepareClip() {
            this.imageSize.width = this.$refs.img.width
            this.imageSize.height = this.$refs.img.height

            this.$refs.base.style.width = this.imageSize.width + 'px'
            this.$refs.base.style.height = this.imageSize.height + 'px'

            let edge = Math.min(this.imageSize.width, this.imageSize.height)
            this.cutSize.width = edge
            this.cutSize.height = edge
            this.cutSize.left = Math.round((this.imageSize.width - edge) / 2)
            this.cutSize.top = Math.round((this.imageSize.height - edge) / 2)
            this.showOverlay()
        },
        showOverlay() {
            this.overlayDom.top.style.width = this.imageSize.width + 'px'
            this.overlayDom.top.style.height = this.cutSize.top + 'px'
            this.overlayDom.top.style.top = '0'
            this.overlayDom.top.style.left = '0'

            this.overlayDom.bottom.style.width = this.imageSize.width + 'px'
            this.overlayDom.bottom.style.height = (this.imageSize.height - this.cutSize.top - this.cutSize.height) + 'px'
            this.overlayDom.bottom.style.bottom = '0'
            this.overlayDom.bottom.style.left = '0'

            this.overlayDom.left.style.width = this.cutSize.left + 'px'
            this.overlayDom.left.style.height = this.cutSize.height + 'px'
            this.overlayDom.left.style.left = '0'
            this.overlayDom.left.style.top = this.cutSize.top + 'px'

            this.overlayDom.right.style.width = (this.imageSize.width - this.cutSize.left - this.cutSize.width) + 'px'
            this.overlayDom.right.style.height = this.cutSize.height + 'px'
            this.overlayDom.right.style.right = '0'
            this.overlayDom.right.style.top = this.cutSize.top + 'px'

            this.overlayDom.center.style.width = (this.cutSize.width - 2) + 'px'
            this.overlayDom.center.style.height = (this.cutSize.height - 2) + 'px'
            this.overlayDom.center.style.left = this.cutSize.left + 'px'
            this.overlayDom.center.style.top = this.cutSize.top + 'px'

            this.overlayDom.scale.style.top = (this.cutSize.top + this.cutSize.height - 6) + 'px'
            this.overlayDom.scale.style.left = (this.cutSize.left + this.cutSize.width - 6) + 'px'
        },
        mouseDown(event) {
            this.mousePos = {
                x: event.clientX,
                y: event.clientY
            }
            this.onDrag = true
        },
        mouseMove(event) {
            if (this.onScale) {
                const d = Math.min(event.clientX - this.mousePos.x, event.clientY - this.mousePos.y)
                this.cutSize.width = this.scaleSize.width + d
                this.cutSize.height = this.scaleSize.height + d
                this.cutSize.width = this.clamp(0, this.imageSize.width - this.cutSize.left, this.cutSize.width)
                this.cutSize.height = this.clamp(0, this.imageSize.height - this.cutSize.top, this.cutSize.height)
                this.cutSize.width = Math.min(this.cutSize.width, this.cutSize.height)
                this.cutSize.height = Math.min(this.cutSize.width, this.cutSize.height)
            } else if (this.onDrag) {
                const dx = event.clientX - this.mousePos.x
                const dy = event.clientY - this.mousePos.y
                this.cutSize.left += dx
                this.cutSize.top += dy
                this.cutSize.left = this.clamp(0, this.imageSize.width - this.cutSize.width, this.cutSize.left)
                this.cutSize.top = this.clamp(0, this.imageSize.height - this.cutSize.height, this.cutSize.top)
                this.mousePos = {
                    x: event.clientX,
                    y: event.clientY
                }
            } else {
                return
            }
            this.showOverlay()
        },
        mouseUp() {
            this.onDrag = false
            this.onScale = false
        },
        scaleMouseDown(event) {
            this.mousePos = {
                x: event.clientX,
                y: event.clientY
            }
            this.scaleSize = {
                width: this.cutSize.width,
                height: this.cutSize.height,
            }
            this.onScale = true
        },
        ok() {
            this.$emit('change', this.cutSize)
            this.onCut = false
        }
    }
}
</script>

<style scoped>
.avatar-box {
    position: relative;
    width: 250px;
    height: 250px;
    margin: 10px 10px;
}

.avatar-img {
    position: relative;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 50%;
}

.avatar-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0;
    transition: 0.2s ease all;
    display: grid;
    place-items: center;
    font-size: 30px;
    font-weight: 900;
}

.avatar-box:hover > .avatar-overlay {
    animation: overlay-show 1s ease-out infinite;
}

.avatar-input {
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0;
    cursor: pointer;
}

@keyframes overlay-show {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 0.5;
    }
    100% {
        opacity: 0;
    }
}

.center {
    display: grid;
    place-items: center;
    grid-gap: 5px;
}

.overlay-inline {
    position: relative;
    background: white;
    width: 500px;
    height: 600px;
    display: grid;
    place-items: center;
}

.image {
    position: absolute;
    max-width: 400px;
    max-height: 400px;
}

.image-overlay-base {
    position: relative;
}

.image-overlay {
    background-color: var(--info-color);
    opacity: 0.8;
    position: absolute;
}

.image-overlay-center {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border: 1px solid var(--brand-color);
}

.image-overlay-center-round {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border: 1px solid var(--brand-color);
    border-radius: 50%;
}

.image-overlay-scale {
    position: absolute;
    width: 10px;
    height: 10px;
    border: 1px solid var(--brand-color);
    background: var(--white-color);
    border-radius: 50%;
    cursor: nwse-resize;
}
</style>