<style src="./style.module.scss" lang="scss" module></style>
<template>
  <div :class="$style.home">
    <TableComponent msg="hello" />
  </div>
</template>

<script lang="ts" setup>
import TableComponent from "@/components/TableComponent/index.vue";
</script>
