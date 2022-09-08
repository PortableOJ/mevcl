<template>
    <MonacoEditor style="height: 100%; width: 100%" v-model="code" :language="language" @change="change"/>
</template>

<script>
import MonacoEditor from 'vue-monaco'

export default {
    name: "CodeEditor",
    components: {
        MonacoEditor
    },
    model: {
        prop: 'code',
        event: 'change'
    },
    props: {
        code: String,
        language: {
            type: String,
            validator: function (value) {
                if (['cpp', 'javascript', 'java', 'markdown'].indexOf(value) !== -1) return true
                console.error("language Error, error language: " + value)
                return false
            },
            default: 'cpp'
        }
    },
    data() {
        return {
        }
    },
    methods: {
        change(newCode) {
            this.$emit('change', newCode)
        }
    }
}
</script>

<style scoped>

</style>