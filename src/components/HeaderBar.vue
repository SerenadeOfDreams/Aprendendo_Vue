<script setup lang="ts"></script>

<template>
  <div class="header-bar-container">
    <div class="logo">LOGO DA APLICAÇÃO</div>
    <div class="botoes-extras">
      <span>BOTAO</span>
      <span>BOTAO</span>
      <span>BOTAO</span>
      <span>BOTAO</span>
      <span>BOTAO</span>
      <span>BOTAO</span>
    </div>
  </div>
</template>

<style scoped>
.header-bar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  padding: 0 1.5rem;
}

.logo {
  display: flex;
  align-items: center;
  width: 90%;
  height: 100%;
}

.botoes-extras {
  display: flex;
  justify-content: flex-end;
  width: 10%;
  gap: 20px;
}
</style>
