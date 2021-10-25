<template>
    <div class="loading-box">
        <span class="loading-pie">
            <span class="loading-pie">
                <span class="loading-pie">
                </span>
            </span>
        </span>
    </div>
</template>

<script>
export default {
    name: "MiniLoading"
}
</script>

<style scoped>
.loading-box {
    width: 20px;
    height: 20px;
    box-sizing: border-box;
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
}

.loading-pie {
    width: calc(100% - 5px);
    height: calc(100% - 5px);
    border: 2px solid transparent;
    border-top: 2px solid var(--brand-color);
    border-bottom: 2px solid var(--brand-color);
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
