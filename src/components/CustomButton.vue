<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    disabled?: boolean;
  }>(),
  {
    disabled: false,
  }
);

const emit = defineEmits<{
  click: [MouseEvent];
}>();

function handleClick(event: MouseEvent) {
  if (!props.disabled) emit("click", event);
}
</script>

<template>
  <button @click="handleClick" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<style scoped>
.icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: var(--button-fg);
  font-size: 1.5em;
  transition: background-color 0.3s;
}

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

.text.icon {
  justify-content: space-around;
}
/* #endregion */

/* #region Primary */
.primary.fill {
  background-color: var(--button-custom);
  transition: background-color var(--theme-transition-time);
}
.primary.fill:hover {
  background-color: var(--button-custom-hover);
}
.primary.border {
  border: solid;
  color: var(--button-custom);
  border-color: var(--button-custom);
  background: none;
  transition-property: border-color, color;
  transition-duration: var(--theme-transition-time);
}
.primary.border:hover {
  border: solid;
  color: var(--button-custom);
  border-color: var(--button-custom-hover);
  background-color: var(--bg-secondary);
}
.primary.none {
  background: none;
  color: var(--button-custom);
  transition: color var(--theme-transition-time);
}
.primary.none:hover {
  background-color: var(--bg-secondary);
  color: var(--button-custom-hover);
}
/* #endregion */

/* #region Secondary */
.secondary.fill {
  background-color: var(--button-custom-2);
  transition: background-color var(--theme-transition-time);
}
.secondary.fill:hover {
  background-color: var(--button-custom-2-hover);
}
.secondary.border {
  border: solid;
  color: var(--button-custom-2);
  border-color: var(--button-custom-2);
  background: none;
  transition-property: border-color, color;
  transition-duration: var(--theme-transition-time);
}
.secondary.border:hover {
  border: solid;
  color: var(--button-custom-2);
  border-color: var(--button-custom-2-hover);
  background-color: var(--bg-secondary);
}
.secondary.none {
  background: none;
  color: var(--button-custom-2);
  transition: color var(--theme-transition-time);
}
.secondary.none:hover {
  background-color: var(--bg-secondary);
  color: var(--button-custom-2-hover);
}
/* #endregion */

/* #region Edit */
/* .edit.fill {
  background-color: var(--button-edit);
}
.edit.fill:hover {
  background-color: var(--button-edit-hover);
}
.edit.border {
  border: solid;
  color: var(--button-edit);
  border-color: var(--button-edit);
  background: none;
}
.edit.border:hover {
  border: solid;
  color: var(--button-edit);
  border-color: var(--button-edit-hover);
  background-color: var(--bg-secondary);
}
.edit.none {
  background: none;
  color: var(--button-edit);
}
.edit.none:hover {
  background-color: var(--bg-secondary);
  color: var(--button-edit);
} */
/* #endregion */

/* #region Success */
/* .success.fill {
  background-color: var(--button-success);
}
.success.fill:hover {
  background-color: var(--button-success-hover);
}
.success.border {
  border: solid;
  color: var(--button-success-padrao);
  border-color: var(--button-success-padrao);
  background: none;
  transition-property: border-color, color;
  transition-duration: var(--theme-transition-time);
}
.success.border:hover {
  border: solid;
  color: var(--button-success);
  border-color: var(--button-success-hover);
  background-color: var(--bg-secondary);
}
.success.none {
  background: none;
  color: var(--button-success-padrao);
  transition: color var(--theme-transition-time);
}
.success.none:hover {
  background-color: var(--bg-secondary);
  color: var(--button-success-hover);
} */
/* #endregion */

/* #region Danger */
/* .danger.fill {
  background-color: var(--button-danger);
}
.danger.fill:hover {
  background-color: var(--button-danger-hover);
}
.danger.border {
  border: solid;
  color: var(--button-danger);
  border-color: var(--button-danger);
  background: none;
}
.danger.border:hover {
  border: solid;
  color: var(--button-danger);
  border-color: var(--button-danger-hover);
  background-color: var(--bg-secondary);
}
.danger.none {
  background: none;
  color: var(--button-danger);
}
.danger.none:hover {
  background-color: var(--bg-secondary);
  color: var(--button-danger-hover);
} */
/* #endregion */
</style>
