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
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 8px;
  background: none;
  cursor: pointer;
}
/* .spotify-button-container:hover {
  color: #1ed760;
} */
</style>
