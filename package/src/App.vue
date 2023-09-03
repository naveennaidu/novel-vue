<script setup lang="ts">
import Editor from "./components/Editor.vue";
</script>

<template>
  <div class="mt-8">
    <Editor completion-api="http://localhost:3000/api/generate" />
  </div>
</template>

<style scoped></style>
