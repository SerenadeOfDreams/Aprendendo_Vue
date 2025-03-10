<script setup lang="ts">
import { onBeforeMount, provide, ref } from "vue";
import { RouterView } from "vue-router";
import HeaderBar from "../components/HeaderBar.vue";

const modoEscuro = ref<boolean>(false);
const isReloadEvent = "isReload";
const MODO_ESCURO_KEY = "modoEscuroKey";

onBeforeMount(() => {
  modoEscuro.value = carregaModoEscuro();
  provide("modo-escuro", modoEscuro.value);
  addModoEscuroToBody();
});

window.addEventListener("beforeunload", () => {
  sessionStorage.setItem(isReloadEvent, "true");
});

function trocarTema(modoEscuroAtio: boolean) {
  modoEscuro.value = modoEscuroAtio;
  addModoEscuroToBody();
}

function addModoEscuroToBody() {
  if (modoEscuro.value) {
    document.body.classList.add("modo-escuro");
  } else {
    document.body.classList.remove("modo-escuro");
  }
}

function carregaModoEscuro() {
  if (localStorage.getItem(MODO_ESCURO_KEY) == null) {
    localStorage.setItem(MODO_ESCURO_KEY, JSON.stringify(modoEscuro.value));
  } else {
    return JSON.parse(localStorage.getItem(MODO_ESCURO_KEY) as string);
  }
}
</script>

<template>
  <div class="app-layout-container" :class="{ 'modo-escuro': modoEscuro }">
    <div class="content-container">
      <HeaderBar @alterar-tema="trocarTema" />
      <div class="content-view">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>
.app-layout-container {
  display: flex;
  height: 100vh;
}

.content-container {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-x: auto;

  background-color: var(--bg-primary);
  color: var(--fg-primary);
  transition: var(--theme-transition-time);
}

.content-view {
  display: flex;
  flex-direction: column;
  border: 3px solid var(--border6);
  border-radius: 3px;
  width: auto;
  height: 100%;
  margin: 0 1.5rem 1.5rem 1.5rem;
  overflow-y: auto;
}
</style>
