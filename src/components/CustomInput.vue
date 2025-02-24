<script setup lang="ts">
import { InputText, Message } from "primevue";

const props = defineProps<{
  inputLabel: string;
  modelValue: string | number;
  messageSize?: "small" | "large";
  messageSeverity?: string;
  messageVariant?: "simple" | "outlined";
  inputMessage?: string;
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
    <InputText :value="modelValue" />
    <Message
      :size="messageSize"
      :severity="messageSeverity"
      :variant="messageVariant"
      >{{ inputMessage }}</Message
    >
  </div>
</template>

<style scoped></style>
