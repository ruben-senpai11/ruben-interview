<script setup lang="ts">
import { inject } from 'vue';
import { ref } from 'vue';
import { onMounted } from 'vue';

let language: any = ref([]);
let library: any = ref([]);
let framework: any = ref([]);
let cssFramework: any = ref([]);
let api: any = ref([]);
let database: any = ref([]);

const fetchStackContents = (stack: string) => {
  const elements = document.querySelectorAll(".stack ." + stack);
  const stackContents: any = ref([]);
  Array.from(elements).forEach((el) => {
    let content = el.textContent && el.textContent.trim();
    content = content && content.replace(/,/g, "")
    if (!stackContents.value.includes(content)) {
      stackContents.value.push(content);
    }
  });
  return stackContents
};

let filtersVisible = ref(false)

const loadFilters = () => {
  language.value = [
    "PHP",
    "Liquid",
    "HTML & CSS",
    "JavaScript",
    "TypeScript"
  ]
  library = fetchStackContents("library");
  framework = fetchStackContents("framework");
  cssFramework = fetchStackContents("cssFramework");
  api = fetchStackContents("api");
  database = fetchStackContents("database");

  console.log('library: ' + library.value);
  console.log('library.length ' + library);
  console.log('filtersVisible:' + filtersVisible);


}

</script>

<template>
  <div class="d-flex flex-column gap-2">
    <div class="d-flex gap-2 align-items-center justify-content-between flex-wrap">
      <h4 class="m-0">Filters</h4>
      <div class="d-flex gap-2 gap-lg-4 justify-content-between ">
        <button @click="loadFilters()" class="load btn fs-6 d-flex align-items-center gap-2 bg--primary ">
          <!-- <span v-if="!filtersVisible.value">Show Filters </span>
          <span v-else>Hide Filters </span> -->
          <span>Show Filters </span>
        </button>
        <button class="reset btn fs-6 d-flex align-items-center gap-2 bg--primary ">
          <span>Reset All</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
            class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z" />
            <path
              d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466" />
          </svg>
        </button>
      </div>
    </div>
    <div v-if="filtersVisible" class="container d-flex flex-column gap-4 text-center">
      <div class="row">
        <div class="col d-flex justify-content-lg-start align-content-center p-0 gap-4 ">
          <label class="label bg-danger-subtle fs-6">Library :</label>
          <div class="filters-button d-flex align-items-center justify-content-center gap-2 ">
            <button class="filter-button btn" v-for="(content, index) in library" :key="index">{{ content }}</button>
          </div>
        </div>
        <div class="col d-flex justify-content-lg-start align-content-center p-0 gap-4 ">
          <label class="label bg-info fs-6">Framework :</label>
          <div class="buttons-wrapper d-flex justify-content-center gap-2 ">
            <button class="filter-button btn" v-for="(content, index) in framework" :key="index">{{ content }}</button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col d-flex justify-content-lg-start align-content-center p-0 gap-4 ">
          <label class="label bg-success-subtle fs-6">Programming Language :</label>
          <div class="filters-button d-flex align-items-center justify-content-center gap-2 ">
            <button class="filter-button btn" v-for="(content, index) in language" :key="index">{{ content }}</button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col d-flex justify-content-lg-start align-content-center p-0 gap-4 ">
          <label class="label bg-body-tertiary fs-6">CSS Library :</label>
          <div class="filters-button d-flex align-items-center justify-content-center gap-2 ">
            <button class="filter-button btn" v-for="(content, index) in cssFramework" :key="index">{{ content }}</button>
          </div>
          <div class="col d-flex justify-content-lg-start align-content-center p-0 gap-4 ">
            <label class="label bg-danger-subtle fs-6">API :</label>
            <div class="filters-button d-flex align-items-center justify-content-center gap-2 ">
              <button class="filter-button btn" v-for="(content, index) in api" :key="index">{{ content }}</button>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col d-flex justify-content-lg-start align-content-center p-0 gap-4 ">
          <label class="label bg-dark-subtle fs-6">Database :</label>
          <div class="filters-button d-flex align-items-center justify-content-center gap-2 ">
            <button class="filter-button btn" v-for="(content, index) in database" :key="index">{{ content }}</button>
          </div>
        </div>
        <div class="col d-flex justify-content-lg-start align-content-center p-0 gap-4 ">
          <label class="label bg-info fs-6">Statut :</label>
          <div class="filters-button d-flex align-items-center justify-content-center gap-2 ">
            <button class="filter-button btn" v-for="(content, index) in library" :key="index">{{ content }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.label {
  height: max-content;
  padding: 5px 10px;
  border-radius: 1px;
  font-weight: 600;
  color: var(--primary-color) !important;
  background-color: var(--primary-color-light) !important;
  box-shadow: 0 0 10px var(--primary-color-light);
}

.filter-button {
  margin: auto;
  padding: 0px 4px !important;
  height: max-content;
  color: var(--foreground-color) !important;
  background-color: var(--primary-color-light);
}

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
    padding: 1px 5px;
  }
}
</style>
