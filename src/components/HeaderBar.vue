<script setup lang="ts">
import {
  PhCigaretteSlash,
  PhHandPeace,
  PhHeartStraightBreak,
  PhIsland,
  PhRocketLaunch,
  PhShrimp,
  PhSmileyMelting,
  PhSnowflake,
  PhUmbrella,
} from "@phosphor-icons/vue";
import {
  computed,
  inject,
  onBeforeMount,
  onMounted,
  ref,
  shallowRef,
} from "vue";

const MODO_ESCURO_KEY = "modoEscuroKey";
const modoEscuroAtivo = ref<boolean>();

onBeforeMount(() => {
  modoEscuroAtivo.value = inject("modo-escuro");
});

const emit = defineEmits<{
  alterarTema: [modoEscuro: boolean];
}>();

function alterarTema() {
  modoEscuroAtivo.value = !modoEscuroAtivo.value;
  localStorage.setItem(MODO_ESCURO_KEY, JSON.stringify(modoEscuroAtivo.value));
  const rootElement = document.documentElement;
  if (modoEscuroAtivo.value) {
    rootElement.classList.add("modo-escuro");
  } else {
    rootElement.classList.remove("modo-escuro");
    emit("alterarTema", modoEscuroAtivo.value);
  }
}

const defaultIconColor = "var(--fg-primary)";
const alternateIconColors = ref([
  "var(--border2)",
  "var(--border3)",
  "var(--border5)",
  "var(--border6)",
]);

const alternateIconColorsIndex = ref(0);

const currentIconColor = ref();

const defaultIcons = [PhHandPeace, PhIsland];
const alternateIcons = [
  PhShrimp,
  PhCigaretteSlash,
  PhHeartStraightBreak,
  PhRocketLaunch,
  PhSmileyMelting,
  PhSnowflake,
  PhUmbrella,
];

const currentIcon = shallowRef();

// const randomIcon =
//   alternateIcons[Math.floor(Math.random() * alternateIcons.length)];

onMounted(() => {
  currentIconColor.value = defaultIconColor;

  currentIcon.value = !modoEscuroAtivo.value
    ? defaultIcons[0]
    : defaultIcons[1];
});

function handleHover() {
  alternateIconColorsIndex.value =
    (alternateIconColorsIndex.value + 1) % alternateIconColors.value.length;

  currentIconColor.value =
    alternateIconColors.value[alternateIconColorsIndex.value];

  currentIcon.value =
    alternateIcons[Math.floor(Math.random() * alternateIcons.length)];

  // const alternateIconsIndex = ref(0);
  // alternateIconsIndex.value =
  //   (alternateIconsIndex.value + 1) % alternateIcons.length;

  // currentIcon.value = alternateIcons[alternateIconsIndex.value];
}

function resetIcon() {
  currentIconColor.value = defaultIconColor;

  currentIcon.value = !modoEscuroAtivo.value
    ? defaultIcons[0]
    : defaultIcons[1];
}

const iconStyles = computed(() => {
  return {
    color: currentIconColor.value,
  };
});
</script>

<template>
  <div class="header-bar-container">
    <div class="logo">LOGO DA APLICAÇÃO</div>
    <div class="botoes-extras">
      <div
        @click="alterarTema"
        :style="iconStyles"
        @mouseenter="handleHover"
        @mouseleave="resetIcon"
      >
        <component :is="currentIcon" size="25" />
      </div>
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

svg:hover {
  cursor: pointer;
}
</style>
