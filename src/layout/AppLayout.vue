<script setup lang="ts">
import { RouterView } from "vue-router";
import HeaderBar from "../components/HeaderBar.vue";
</script>

<template>
  <div class="app-layout-container">
    <div class="content-container">
      <HeaderBar />
      <div class="content-view">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>
.app-layout-container {
  display: flex;
  height: 100vh;
}

.content-container {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-x: auto;
}

.content-view {
  display: flex;
  flex-direction: column;
  border: 3px solid var(--border6);
  border-radius: 3px;
  width: auto;
  height: 100%;
  margin: 0 1.5rem 1.5rem 1.5rem;
  overflow-y: auto;
}
</style>
