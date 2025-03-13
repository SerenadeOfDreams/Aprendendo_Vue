<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  variant: "green" | "blackNwhite";
}>();

const currentIcon = computed(() => {
  return {
    backgroundImage:
      props.variant === "green"
        ? "var(--spotify-green-icon)"
        : "var(--spotify-blackNwhite-icon)",
    transition: "var(--theme-transition-time)",
  };
});
</script>

<template>
  <button class="spotify-button-container" :style="currentIcon"></button>
</template>

<style scoped>
.spotify-button-container {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  border-radius: 8px;
  background: none;
  background-repeat: no-repeat;
  cursor: pointer;
}
.spotify-button-container:hover {
  --spotify-blackNwhite-icon: var(--spotify-green-icon);
}
</style>
