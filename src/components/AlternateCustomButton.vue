<script setup lang="ts">
import { computed, ref, watch } from "vue";

const props = defineProps<{
  type: string;
  default: "primary" | "secondary";
  variant: "fill" | "border" | "none";
}>();

const defaultColorsPrimary = {
  fill: "var(--button-primary-fill)",
  border: "var(--button-primary-border)",
  none: "var(--button-primary-none)",
};

const defaultColorsSecondary = {
  fill: "var(--button-secondary-fill)",
  border: "var(--button-secondary-border)",
  none: "var(--button-secondary-none)",
};
const alternateColors = ref([
  "var(--border2)",
  "var(--border3)",
  "var(--border4)",
]);

const noneHoverBackground = ref("transparent");

const alternateColorsIndex = ref(0);

const currentColor = ref();

// const initialColors = ref(currentColor.value);

watch(
  () => props.variant,
  (newVariant) => {
    if (newVariant === "none") {
      alternateColors.value[1] = "#4ade80";
      alternateColors.value[0] = "#12d9ef";
    }
  },
  { immediate: true }
);

watch(
  () => props.default,
  (newDefault) => {
    currentColor.value =
      newDefault === "primary"
        ? defaultColorsPrimary[props.variant || "none"]
        : newDefault === "secondary"
        ? defaultColorsSecondary[props.variant || "none"]
        : undefined;

    // initialColors.value = currentColor.value;
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
  // currentColor.value = initialColors.value;
  currentColor.value =
    props.default === "primary"
      ? defaultColorsPrimary[props.variant] || "none"
      : props.default === "secondary"
      ? defaultColorsSecondary[props.variant] || "none"
      : undefined;
  noneHoverBackground.value = "transparent";
}

const buttonStyles = computed(() => {
  return {
    background:
      props.default !== "primary" && props.default !== "secondary"
        ? undefined
        : props.variant === "fill"
        ? currentColor.value
        : props.variant === "none"
        ? noneHoverBackground.value
        : "transparent",
    border:
      props.default !== "primary" && props.default !== "secondary"
        ? undefined
        : props.variant === "border"
        ? `2px solid ${currentColor.value}`
        : "none",
    color:
      props.default !== "primary" && props.default !== "secondary"
        ? undefined
        : props.default === "secondary" && props.variant === "border"
        ? "var(--button-secondary-border-fg)"
        : props.variant === "none"
        ? currentColor.value
        : props.variant === "border" && props.default === "primary"
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
    :class="[`${type}`, `${variant}`]"
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
