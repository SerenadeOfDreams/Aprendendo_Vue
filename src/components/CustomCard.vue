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
    <Card
      :style="
        descricaoCard.tipo === 'imagem'
          ? [
              'p-card-caption',
              { 'padding-top': '25px' },
              'p-card-content',
              { width: 'fit-content' },
            ]
          : descricaoCard.tipo === 'texto'
          ? { '--p-card-body-padding': '25px' }
          : {}
      "
    >
      <!-- <Card> -->
      <template #title>
        {{ tituloCard ?? "Card" }}
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
  height: 300px;
}
.p-card {
  border: 1px solid var(--border);
  --p-card-border-radius: 8px;
  width: 100%;
  height: 100%;
}

::v-deep(.p-card-body) {
  --p-card-body-gap: 10px;
  align-items: center;
}

.p-card-caption {
  height: 10%;
}

::v-deep(.p-card-title) {
  height: 70%;
  text-align: center;
  --p-card-title-font-size: 22px;
}

::v-deep(.p-card-content) {
  word-wrap: break-word;
  overflow-wrap: break-word;
  overflow: hidden;
  word-break: break-all;
  white-space: normal;
  height: 90%;
  font-size: 20px;
}

.card-image {
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 300px;
  max-height: 241.5px;
  border-radius: 0px 0px 7.5px 7.5px;
}
</style>
