<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import ThemeMode from './components/ThemeMode.vue'
import SplashScreen from "./components/SplashScreen.vue"
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import { onMounted } from 'vue'
import gsap from "gsap";

const name = "Ruben Honfovou "
const delay = 2500

onMounted(() => {
  const timeout = setTimeout(() => {

    gsap.fromTo(
      (".splash-container"),
      { width: "100%" },
      { width: "0%", duration: 3, ease: "expo.out", paused: false }
    );
  }, delay);
})

</script>

<template>
  <SplashScreen :name=name label="Interview Project" :timer=delay />
  <div class="container-xl">
    <Header :name=name />
    <Main />
  </div>
</template>

<style scoped>
.container-xl {
  max-width: 1250px;
  padding: 0 3% !important;
}

@media (max-width: 1250px) {
  .container-xl {
    padding: 0 7% !important;
  }

}
</style>
