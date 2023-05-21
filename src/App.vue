<script setup lang="ts">
import {getRoomList, fetchElephant} from './api/index'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'

getRoomList()
fetchElephant().then(res => {
  console.log(res);
})
let locale = en

</script>

<template>
  <el-config-provider :locale="locale">
    <div class="class1">
      <button>点一下</button>
    </div>
    <div class="text">fkajsdfkhjakjdifhasdifhiioarhgiohigh</div>
    <router-link :to="{name:'home', query: {useID: 530}}">go home</router-link>
    <hr>
    <router-link to="/mine">go mine</router-link>
    <br>
    <router-view></router-view>
    </el-config-provider>
</template>

<style scoped lang="scss">
  .class1 {
    button {
      font-size: 20px;
      background-color: orange;
    }
  }
  @import "src/assets/scss/home/index.scss"

</style>
