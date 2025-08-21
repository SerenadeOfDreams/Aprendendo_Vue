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
    <div class="wellcome-message">Bem-vindo(a)!</div>
    <div class="app-mission">
      Até o presente momento, não dei um nome pra esse site. Meu intuito com ele
      é recomendar bandas e músicas que eu gosto, ao mesmo tempo em que eu tenho
      um portifólio de Vue.js.
    </div>
    <div class="initial-warnings">
      <div class="app-content">
        Todas as bandas, artistas e músicas que forem citadas aqui são
        recomendações com base na minha opinião. Fique à vontade para procurar
        sobre o que for falado, caso fique interessado(a).
      </div>
      <div class="where-to-listen">
        Como o Spotify é o meio pelo qual eu mais ouço música, é por onde eu
        mais vou direcionar para os artistas e as músicas. Algumas músicas que
        serão citadas não estão no Spotify. Tendo isso em mente e pensando em
        pessoas que não usam o Spotify, também vou fazer o direcionamento para
        os artistas e músicas para outros meios que eu encontrar.
      </div>
      <div class="social-media">
        Sempre que possível, vou também direcionar para as redes sociais das
        bandas e dos artistas que compõem as bandas. Será sempre que possível
        pois, pra isso, eu dependo de que a banda ou os artistas possuam redes
        sociais.
      </div>
    </div>
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

.wellcome-message {
  line-height: 18.5px;
  color: var(--fg-primary);
  transition: color var(--theme-transition-time);
}

.app-mission {
  color: var(--fg-primary);
  transition: color var(--theme-transition-time);
}

.initial-warnings {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
