
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import IndexDB from '../../utils/indexDB'
const { t } = useI18n()


// 笔者 这里为了和页面中的其他变量 区别  - 取别名 i18nLanguage。  
const { locale: i18nLanguage } = useI18n()
const toggle = (languageKey: string) => {
  i18nLanguage.value = languageKey  // zh en
}

// 数据库相关操作
const airbnDB = new IndexDB('airbnDB')
airbnDB.openstore('elephant', 'id', ['nose', 'ear'])
// 增或改
function addData(storeName: string){
  airbnDB.updataItem(storeName, {  id : 1, nose: '3333m',  ear: '大大大'})
}
// 删除
function deleteData(storeName: string, key: number | string){
  airbnDB.deleteItem(storeName, key)
}
// 查询所有数据
function getObjectStore(storeName: string){
  airbnDB.getList(storeName)
}
// 查询某天数据
function getObjectStoreItem(storeName: string, key: number | string){
  airbnDB.getListItem(storeName, key)
}
</script>

<template>
    <el-button type="primary" size="default" @click="addData('elephant')">增或改</el-button>
    <el-button type="danger" size="default" @click="deleteData('elephant', 2)">删除</el-button>
    <el-button type="primary" size="default" @click="getObjectStore('elephant')">查询所有数据</el-button>
    <el-button type="danger" size="default" @click="getObjectStoreItem('elephant', 1)">查询某一条数据</el-button>
    <el-button type="" @click="toggle('zh')">点击切换中文</el-button>
    <el-button @click="toggle('en')">点击切换英文</el-button>
    <h2>{{t('message.home')}}</h2>
</template>
