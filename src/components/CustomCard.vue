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
        descricaoCard.tipo === 'texto'
          ? [
              'p-card-content',
              {
                'word-wrap': 'break-word',
                'overflow-wrap': 'break-word',
                'word-break': 'break-all',
                'white-space': 'normal',
                'font-size': '20px',
              },
              'p-card-body',
              { '--p-card-body-padding': '25px' },
            ]
          : {}
      "
    >
      <template #title>
        <div
          :style="
            descricaoCard.tipo === 'imagem'
              ? ['p-card-caption', { 'padding-top': '25px' }]
              : []
          "
        >
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
}
.p-card {
  border: 3px solid var(--border);
  overflow: hidden;
  --p-card-border-radius: 8px;
  --p-card-color: var(--fg-primary);
  transition: var(--theme-transition-time);
}

::v-deep(.p-card-body) {
  width: 300px;
  height: 300px;
  --p-card-body-gap: 10px;
  align-items: center;
}

::v-deep(.p-card-title) {
  text-align: center;
  --p-card-title-font-size: 22px;
}

::v-deep(.p-card-content) {
  width: 100%;
  border-top: 3px solid var(--border);
  overflow: hidden;
}

.card-image {
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
