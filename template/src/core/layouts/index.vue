<style src="./style.module.scss" lang="scss" module></style>
<template>
  <div :class="$style.layout">
    <el-container>
      <el-header>
        <!-- 导航 -->
        <Header />
        <!-- 导航结束 -->
      </el-header>
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
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import Header from "./Header/index.vue";
import Aside from "./Aside/index.vue";
import Breadcrumb from "./Breadcrumb/index.vue";
</script>
