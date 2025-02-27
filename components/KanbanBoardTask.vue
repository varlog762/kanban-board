<script setup lang="ts">
import type { Task } from "@/types";

defineProps<{ task: Task }>();
</script>

<template>
  <div :title="task.createdAt.toLocaleDateString()">{{ task.title }}</div>
</template>

<style lang="scss" scoped></style>
