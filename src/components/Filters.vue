<script setup lang="ts">
import { inject } from 'vue';
import { ref } from 'vue';
import { onMounted } from 'vue';
import Stack from './Stack.vue';

defineProps({
  languages: Array,
  libraries: Array,
  frameworks: Array,
  cssFrameworks: Array,
  apis: Array,
  databases: Array,
  status: Array,
})

import { resetFilters } from "../stores/ApplyFilters"

let filtersVisible = ref(false)

const toggleFilters = () => {
  filtersVisible.value = !filtersVisible.value
}


</script>

<template>
  <div class="d-flex flex-column gap-2">
    <div class="d-flex gap-2 align-items-center justify-content-between flex-wrap">
      <h4 class="m-0">Filters</h4>
      <div class="d-flex gap-2 gap-lg-4 justify-content-between ">
        <button @click="toggleFilters" class="load btn fs-6 d-flex align-items-center gap-2 bg--primary ">
          <span v-if="!filtersVisible">Show Filters </span>
          <span v-else>Hide Filters </span>
          <!-- <span>Show Filters </span> -->
        </button>
        <button class="reset btn fs-6 d-flex align-items-center gap-2 bg--primary ">
          <span @click="resetFilters">Reset </span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
            class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z" />
            <path
              d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466" />
          </svg>
        </button>
      </div>
    </div>
    <div v-if="filtersVisible" class="d-flex flex-column pt-2 gap-2 gap-lg-3 text-center">
      <Stack label="Librairies" :array=libraries />
      <Stack label="Frameworks" :array=frameworks />
      <Stack label="Programming Languages" :array=languages />
      <Stack label="CSS Libraries" :array=cssFrameworks />
      <Stack label="APIs" :array=apis />
      <Stack label="Databases" :array=databases />
      <!-- <Stack label="Statut" :array=status /> -->
    </div>
  </div>
</template>


<style >
button.reset.btn,
button.load.btn {
  padding: 4px 15px;
  color: var(--foreground-color) !important;
  background-color: var(--secondary-color);
}

button.load.btn {
  color: var(--background-color) !important;
  background-color: var(--primary-color);
}

@media screen and (max-width: 650px) {

  button.reset.btn,
  button.load.btn {
    padding: 3px 7px;
  }

}
</style>
