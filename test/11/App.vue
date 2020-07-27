<template>
    <div>
        <i-button @click="show">Click me!</i-button>
        <Modal v-model="visible" title="Welcome">Welcome to ViewUI</Modal>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                visible: false
            }
        },
        methods: {
            show() {
                this.visible = true
            }
        }
    }
</script>

<style>

</style>