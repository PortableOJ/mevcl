<template>
    <div class="toast-container">
    </div>
</template>

<script>
export default {
    name: "ToastContainer"
}
</script>

<style scoped>
.toast-container {
    z-index: 8192;
    position: fixed;
    top: 0;
    right: 0;
    width: 300px;
    height: 100%;
    overflow: hidden;
    pointer-events: none;
}
</style>
