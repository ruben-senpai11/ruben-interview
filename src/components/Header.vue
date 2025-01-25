<script setup lang="ts">
import ThemeMode from '../components/ThemeMode.vue'

const props = defineProps<{
  name: string
}>()

</script>

<template>
  <div class="container-fluid m-0 p-0 ">
    <nav class="navbar navbar-expand-lg p-2 p-lg-3 m-0 flex-sm-wrap">
      <div class="nav-container d-flex justify-content-between w-100 flex-xs-wrap gap-xs-5">
        <a href="#" class="navbar-brand d-flex align-items-center justify-content-between gap-3 m-0 p-0">
          <img src="../assets/img/profile-pic-yellow.png" alt="Author picture" width="48" height="48"
            class="rounded-5 m-0 p-0" />
          <p class="m-0 p-0">{{ name }}</p>
        </a>
        <ThemeMode />
      </div>
    </nav>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  border-radius: 10px;
  box-shadow: 0px 3px 7px var(--primary-color);
}

.navbar-brand {
  color: inherit;
}

@media (min-width: 1024px) {
  header {
    display: d-flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

@media screen and(max-width: 450px) {
  .nav-container {
    flex-direction: column !important;
    flex-wrap: wrap;
  }
}
</style>
