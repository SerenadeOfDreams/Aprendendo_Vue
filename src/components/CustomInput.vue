<script setup lang="ts">
import { InputText } from "primevue";

const props = defineProps<{
  inputLabel: string;
  modelValue: string | number;
}>();

const emit = defineEmits(["update:modelValue", "input"]);

function inputText(event: Event) {
  emit("input", event),
    emit("update:modelValue", (event.target as HTMLInputElement).value);
}
</script>

<template>
  <div class="input-container">
    <label>{{ inputLabel }}</label>
    <InputText :value="modelValue" @input="inputText" />
  </div>
</template>

<style scoped>
.input-container {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

label {
  color: var(--fg-primary);
  background-color: transparent;
}

.p-inputtext {
  width: 100%;
  height: 38px;
  --p-inputtext-color: var(--fg-primary);
  --p-inputtext-padding-x: 5px;
  --p-inputtext-background: var(--bg-primary);
  --p-inputtext-border-color: var(--border);
  --p-inputtext-border-radius: 8px;
  --p-inputtext-invalid-border-color: red;
}
</style>
