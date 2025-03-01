<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps<{
  name: string
  label: string
  timer?: number
}>()

const showSplash = ref(false);

onMounted(() => {
  const timeout = setTimeout(() => {
    showSplash.value = false;
  }, props.timer);

  if (!sessionStorage.getItem("sessionInitialized")) {
    showSplash.value = true;
    sessionStorage.setItem("sessionInitialized", "true");
  } else {
    showSplash.value = false;
  }

  const handleUnload = () => {
    sessionStorage.removeItem("sessionInitialized");
  };

  window.addEventListener("beforeunload", handleUnload);

  onUnmounted(() => {
    clearTimeout(timeout);
    window.removeEventListener("beforeunload", handleUnload);
  });
});
</script>

<template>
  <div class="splash-container position-relative">
    <div v-if="showSplash" class="splash-screen w-100 h-100 ">
      <p class="fs-1 primaryy fw-normal d-flex justify-content-center gap-4">
        {{ name }}
        <span class="font-mono fw-bolder secondaryy">{{ label }}</span>
      </p>
      <p class="developed-in d-flex fs-5 fs-sm-2 position-absolute primaryy ">
        proudly developed in
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="55" height="55" />
      </p>
    </div>
  </div>
</template>

<style scoped>
.splash-screen {
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: var(--background-color);
  z-index: 9;
  border: 45px solid #1922FB;
}

.splash-screen p:not(.green) {
  color: #1922FB;
  color: var(--foreground-color);
}

.splash-screen span {
  color: var(--secondary-color);
  color: #FFC700;
}

.splash-screen p {
  width: max-content;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.splash-screen span {
  font-weight: 800 !important;
}

.developed-in {
  max-width: 85%;
  flex-wrap: wrap;
  bottom: 5%;
  right: 3%;
}


@media screen and (max-width: 650px) {
  .splash-screen {
    border: 20px solid #1922FB;
    padding: 5%;
  }

  .splash-screen p {
    text-align: start;
    gap: 0 !important;
    justify-content: flex-start !important;
  }

  .developed-in {
    font-size: 1rem !important;
    bottom: 5%;
    /* right: 10%; */
  }

  .logo {
    width: 35px;
    height: 35px;
  }
}
</style>
