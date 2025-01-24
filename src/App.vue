<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import ThemeMode from './components/ThemeMode.vue'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView /> -->

  <div class="container-xl">
    <Header />
    <Main />
  </div>
</template>

<style scoped>
.container-xl {
  max-width: 1250px;
  padding: 0 2% !important;
}

@media (max-width: 1250px) {
  .container-xl {
    padding: 0 5% !important;
  }

}
</style>
