<script setup lang="ts">
import { ref } from "vue";
import SEMTITULO from "../assets/imagens/Sem título.png";
import StaticX_Start_A_War from "../assets/imagens/Static-X_Start_A_War_LP__81101.jpg";
import VueIMG from "../assets/imagens/vue.svg";
import CustomCard from "../components/CustomCard.vue";
import type { ICard } from "../types/ICard";

const conteudo_card = ref<ICard[]>([
  {
    id: "1",
    titulo: "Teste com texto grande",
    descricao: {
      tipo: "texto",
      valor:
        "ksdmsdsdm,fnsd,sdn,mfns,mdnf,mdsnf,dsnf,mnf,msfdmdmfdmdmfkdmfkdfmkkkkkkkkkkkkksadddddddddddddddddddddddddddddddddddddddddddsadddddddddddddddddddddsaddddddddddddddddddddsaddddddddddddddddsaddddddddddddddddddddddddddsaddddddddddddddsaddddddddddddddddddddsadddddddddddsdddddddddddddddddsddddddddddddddddddddsadddddddddddddddddsaddddddddddddddddddddddddddddddddddddddddddddddddddddasdasdsadasdasdsaddddddddddddddddddddddddsadddddddddddddddddddsaddddddddddddddddddsaddddddddddddddddsaaaaaaaaaaaasaaaaaaaaaaaaaaaffffafffffffffffffaffffffffffffffaffffffffffffffffafffffffffffffffffffffffaaaaaaaaaaaaaaaaaaafffffffaffffffffffffffffffffffffffffffffffafffffffafffffffffffffffffffaffffffffsaaaaaasaaaaaaaaaaaaaaaaasaddddddddddddddddddddddsaddddddddddddddddddddddddddddddsadsadsadsadsadsadsadsadsadsadsaasdsasddasdsadssadasdsadasdsadsadsadsadassdsadsadsadasdasda",
    },
  },
  {
    id: "2",
    titulo: "Teste com imagem",
    descricao: { tipo: "imagem", valor: StaticX_Start_A_War },
  },
  {
    id: "3",
    titulo: "Teste com imagem",
    descricao: { tipo: "imagem", valor: VueIMG },
  },
  {
    id: "4",
    titulo: "Teste com imagem",
    descricao: { tipo: "imagem", valor: SEMTITULO },
  },
]);
</script>

<template>
  <div class="home-container">
    <div class="home-cards" v-for="(card, index) in conteudo_card" :key="index">
      <CustomCard :titulo-card="card.titulo" :descricaoCard="card.descricao">
      </CustomCard>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  display: flex;
  padding: var(--layout-content-padding);
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
</style>
