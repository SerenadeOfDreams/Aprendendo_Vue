<script setup lang="ts">
import { PhInstagramLogo } from "@phosphor-icons/vue";
</script>

<template>
  <button class="instagram-button-container">
    <PhInstagramLogo size="90" />
  </button>
</template>

<style scoped>
.instagram-button-container {
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
}

svg {
  fill: var(--instagram-blackNwhite);
  transition: var(--theme-transition-time);
}
svg:hover {
  fill: var(--border6);
}
</style>
