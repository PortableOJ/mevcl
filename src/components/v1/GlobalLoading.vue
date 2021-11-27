<template>
    <div class="loading-overlay">
        <div class="loading-logo-box">
            <span class="loading-pie">
                <span class="loading-pie">
                    <span class="loading-pie">
                        <span class="loading-pie">
                        </span>
                    </span>
                </span>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: "GlobalLoading",
}
</script>

<style scoped>
.loading-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--overlay-color);
    z-index: 9999;
    left: 0;
    top: 0;
    justify-content: center;
    align-items: center;
}

.loading-logo-box {
    position: absolute;
    width: 200px;
    height: 200px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.loading-pie {
    width: calc(100% - 40px);
    height: calc(100% - 40px);
    border: 10px solid transparent;
    border-top: 10px solid var(--brand-color);
    border-bottom: 10px solid var(--brand-color);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    animation: anim 3s linear infinite;
}

@keyframes anim {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>
