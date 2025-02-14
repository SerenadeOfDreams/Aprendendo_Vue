<script setup lang="ts">
import { Card } from "primevue";

const props = defineProps<{
  tituloCard: string;
  descricaoCard: string;
}>();

const conteudoCortado =
  props.descricaoCard.length > 200
    ? props.descricaoCard.substring(0, 200).concat("...")
    : props.descricaoCard;
</script>

<template>
  <div class="custom-card-container">
    <Card>
      <template #title>{{ tituloCard ?? "Card" }}</template>
      <template #content>
        {{ conteudoCortado }}
      </template>
    </Card>
  </div>
</template>

<style scoped>
.p-card {
  justify-content: space-around;
  border: 1px solid black;
  --p-card-border-radius: 8px;
  padding: 25px;
  max-width: 500px;
  min-width: 200px;
}

::v-deep(.p-card-body) {
  --p-card-body-gap: 18px;
}
</style>
