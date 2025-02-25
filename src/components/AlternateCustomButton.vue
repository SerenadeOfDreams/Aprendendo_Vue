<script setup lang="ts">
import { computed, ref, watch } from "vue";

const props = defineProps<{
  variant: "fill" | "border" | "none";
  type: string;
}>();

const defaultColors = {
  fill: "var(--button-primary-fill)",
  border: "var(--button-primary-border)",
  none: "var(--button-primary-none)",
};
const alternateColors = ref([
  "var(--border2)",
  "var(--border3)",
  "var(--border4)",
]);
const noneHoverBackground = ref("transparent");

const alternateColorsIndex = ref(0);
const currentColor = ref(defaultColors[props.variant || "none"]);

watch(
  () => props.variant,
  (newVariant) => {
    if (newVariant === "none") {
      alternateColors.value[1] = "#4ade80";
      alternateColors.value[0] = "#12d9ef";
    }
    // else {
    //   alternateColors.value[1] = "var(--border4)";
    // }
  },
  { immediate: true }
);

function handleHover() {
  alternateColorsIndex.value =
    (alternateColorsIndex.value + 1) % alternateColors.value.length;

  currentColor.value = alternateColors.value[alternateColorsIndex.value];

  if (props.variant === "none") {
    noneHoverBackground.value = "var(--bg-secondary)";
  }
}

function resetButton() {
  currentColor.value = defaultColors[props.variant || "none"];
  noneHoverBackground.value = "transparent";
}

const buttonStyles = computed(() => {
  return {
    background:
      props.variant === "fill"
        ? currentColor.value
        : props.variant === "none"
        ? noneHoverBackground.value
        : "transparent",
    border:
      props.variant === "border" ? `2px solid ${currentColor.value}` : "none",
    color:
      props.variant === "none"
        ? currentColor.value
        : props.variant === "border"
        ? "var(--button-primary-border-fg)"
        : props.variant === "fill"
        ? "var(--button-fg)"
        : "inherit",
  };
});

const emits = defineEmits<{
  click: [MouseEvent];
}>();

function handleClick(event: MouseEvent) {
  emits("click", event);
}
</script>

<template>
  <button
    :class="[`${type}`, `alternate.${variant}`]"
    :style="buttonStyles"
    @mouseenter="handleHover"
    @mouseleave="resetButton"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<style scoped>
.text {
  color: var(--button-fg);
  border: none;
  border-radius: 8px;
  width: 100%;
  height: 38px;
  font-size: medium;
  font-weight: bold;
  cursor: pointer;
}
</style>
