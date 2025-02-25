<script setup lang="ts">
import { InputText } from "primevue";
import { ref } from "vue";

const props = defineProps<{
  inputLabel: string;
  modelValue: string | number;
}>();

const coresDaBorda = ["var(--border2)", "var(--border3)", "var(--border4)"];
const indexDaBorda = ref(0);

function handleFocus() {
  indexDaBorda.value = (indexDaBorda.value + 1) % coresDaBorda.length;
  document.documentElement.style.setProperty(
    "--p-inputtext-focus-border-color",
    coresDaBorda[indexDaBorda.value]
  );
}

function handleHover() {
  indexDaBorda.value = (indexDaBorda.value + 1) % coresDaBorda.length;
  document.documentElement.style.setProperty(
    "--p-inputtext-hover-border-color",
    coresDaBorda[indexDaBorda.value]
  );
}

const emit = defineEmits(["update:modelValue", "input"]);

function inputText(event: Event) {
  emit("input", event),
    emit("update:modelValue", (event.target as HTMLInputElement).value);
}
</script>

<template>
  <div class="input-container">
    <label>{{ inputLabel }}</label>
    <InputText
      :value="modelValue"
      @input="inputText"
      @focus="handleFocus"
      @mouseenter="handleHover"
    />
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
  border-width: 2px;
  --p-inputtext-color: var(--fg-primary);
  --p-inputtext-padding-x: 5px;
  --p-inputtext-background: var(--bg-primary);
  --p-inputtext-border-radius: 8px;
  --p-inputtext-border-color: var(--border);
  --p-inputtext-invalid-border-color: red;
}
</style>
