<script setup lang="ts">
import { Card } from "primevue";

const props = defineProps<{
  tituloCard: string;
  descricaoCard: { tipo: "texto" | "imagem"; valor: string };
}>();

const descricaoCortada =
  props.descricaoCard.tipo === "texto" && props.descricaoCard.valor.length > 200
    ? props.descricaoCard.valor.substring(0, 200).concat("...")
    : props.descricaoCard.valor;

const isTexto = (
  content: any
): content is string | { tipo: "texto"; valor: string } => {
  return typeof content === "string" || content.tipo === "texto";
};

const isImagem = (
  content: any
): content is { tipo: "imagem"; valor: string } => {
  return typeof content === "object" && content.tipo === "imagem";
};
</script>

<template>
  <div class="custom-card-container">
    <Card :class="{ 'p-card-com-padding': descricaoCard.tipo === 'texto' }">
      <template #title>
        <div :class="{ 'p-card-caption': descricaoCard.tipo === 'imagem' }">
          {{ tituloCard ?? "Card" }}
        </div>
      </template>
      <template #content>
        <template v-if="isTexto(props.descricaoCard)">
          {{ descricaoCortada }}
        </template>
        <template v-else-if="isImagem(props.descricaoCard)">
          <img :src="descricaoCard.valor" alt="" class="card-image" />
        </template>
      </template>
    </Card>
  </div>
</template>

<style scoped>
.custom-card-container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 300px;
  height: 232.33px;
}
.p-card {
  border: 1px solid black;
  --p-card-border-radius: 8px;
  width: 100%;
  height: 100%;
}

.p-card-com-padding {
  padding: 25px;
}

::v-deep(.p-card-body) {
  --p-card-body-gap: 10px;
  align-items: center;
}

.p-card-caption {
  padding: 25px 0px 0px 0px;
}

::v-deep(.p-card-title) {
  height: 50%;
  text-align: center;
  --p-card-title-font-size: 16px;
}

::v-deep(.p-card-content) {
  word-wrap: break-word;
  overflow-wrap: break-word;
  word-break: break-all;
  white-space: normal;
  height: 100%;
  width: 100%;
  font-size: 14px;
}

.card-image {
  max-width: 100%;
  max-height: 150px;
  object-fit: cover;
  border-radius: 5px;
}
</style>
