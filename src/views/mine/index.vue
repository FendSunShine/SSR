<template>
    <div>
        mine
        <br>
        <el-button type="primary" size="default" @click="">aaa</el-button>
        <el-button :plain="true" @click="open2">success</el-button>
        <el-button :plain="true" @click="open">Show message</el-button>
    </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { ElMessage } from 'element-plus'
const open2 = () => {
    ElMessage({
        message: 'Congrats, this is a success message.',
        type: 'success',
    })
}
const open = () => {
    ElMessage('this is a message.')
}
</script>

<style scoped>

</style>

