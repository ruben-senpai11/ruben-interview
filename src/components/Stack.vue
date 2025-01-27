<script setup lang="ts">
defineProps({
  label: String,
  array: Array
})
</script>

<template>
  <div class="row">
    <div class="ccol d-flex flex-wrap p-0 gap-2 gap-lg-2 ">
      <label class="label bg-body-tertiary fs-6">{{ label }} &nbsp;:</label>
      <!-- <span class="label p-1 bg-body-tertiary">:</span> -->
      <div class="filters-button d-flex  flex-wrap gap-2 ">
        <button class="filter-button btn" v-for="(content, index) in array" :key="index">{{ content }}</button>
      </div>
    </div>
  </div>
</template>

<style>
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
  padding: 0px 7px;
  height: max-content;
  color: var(--foreground-color);
  background-color: var(--primary-color-light);
}

.filter-button:hover {
  color: var(--primary-color);
  background-color: var(--secondary-color-light);
}

@media screen and (max-width: 650px) {

  .filters-button {
    /* display: block !important; */
  }

  .filter-button {
    /* margin: 2% */
  }
}
</style>
