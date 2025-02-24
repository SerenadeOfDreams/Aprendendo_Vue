<script setup lang="ts">
import { Message } from "primevue";

const props = defineProps<{
  messageSize: "small" | "large";
  messageSeverity?: string;
  messageVariant: "simple" | "outlined";
  inputMessage: string;
}>();
</script>

<template>
  <div class="message-container">
    <Message
      :size="messageSize"
      :severity="messageSeverity"
      :variant="messageVariant"
      >{{ inputMessage }}</Message
    >
  </div>
</template>

<style scoped>
.p-message {
  --p-message-border-radius: 5px;
}

.p-message-lg {
  --p-message-text-lg-font-size: 20px;
  --p-message-content-lg-padding: 0.375rem 0.625rem;
}
.p-message-sm {
  --p-message-text-sm-font-size: 16px;
  --p-message-content-sm-padding: 0.375rem 0.625rem;
}

/* ::v-deep(.p-message-content) {
  --p-message-content-padding: 0.5rem 0.75rem;
} */

/* region outlined */
.p-message-outlined {
  --p-message-outlined-border-width: 1px;
}

.p-message-success {
  width: fit-content;
  --p-message-success-outlined-border-color: var(
    --message-success-outlined-border-color
  );
  --p-message-success-outlined-color: var(--message-success-outlined-color);
}

.p-message-info {
  width: fit-content;
  --p-message-info-outlined-border-color: var(
    --message-info-outlined-border-color
  );
  --p-message-info-outlined-color: var(--message-info-outlined-color);
}

.p-message-warn {
  width: fit-content;
  --p-message-warn-outlined-border-color: var(
    --message-warn-outlined-border-color
  );
  --p-message-warn-outlined-color: var(--message-warn-outlined-color);
}

.p-message-error {
  width: fit-content;
  --p-message-error-outlined-border-color: var(
    --message-error-outlined-border-color
  );
  --p-message-error-outlined-color: var(--message-error-outlined-color);
}

.p-message-secondary {
  width: fit-content;
  --p-message-secondary-outlined-border-color: var(
    --message-secondary-outlined-bordercolor
  );
  --p-message-secondary-outlined-color: var(--message-secondary-outlined-color);
}

.p-message-contrast {
  width: fit-content;
  --p-message-contrast-outlined-border-color: var(--fg-highlight-1);
  --p-message-contrast-outlined-color: var(--fg-highlight-1);
}
/* end region */

/* region simple */
.p-message-simple {
  color: var(--fg-primary);
}

.p-message-success {
  --p-message-success-simple-color: var(--message-success-simple-color);
}

.p-message-info {
  --p-message-info-simple-color: var(--message-info-simple-color);
}

.p-message-warn {
  --p-message-warn-simple-color: var(--message-warn-simple-color);
}

.p-message-error {
  --p-message-error-simple-color: var(--message-error-simple-color);
}

.p-message-secondary {
  --p-message-secondary-simple-color: var(--message-secondary-simple-color);
}

.p-message-contrast {
  --p-message-contrast-simple-color: var(--fg-highlight-1);
}
/* end region */
</style>
