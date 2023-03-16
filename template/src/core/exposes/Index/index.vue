<style src="./style.module.scss" lang="scss" module></style>
<template>
  <div :class="$style.layout">
    <el-container>
      <!-- 侧边栏 -->
      <Aside />
      <!-- 侧边栏结束 -->
      <el-container>
        <!-- 页面 -->
        <el-main>
          <!-- 面包屑 -->
          <Breadcrumb />
          <!-- 面包屑结束 -->
          <router-view
        /></el-main>
        <!-- 页面结束 -->
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import Aside from "../../layouts/Aside/index.vue";
import Breadcrumb from "../../layouts/Breadcrumb/index.vue";
</script>
