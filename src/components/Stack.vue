<script setup lang="ts">
defineProps({
  label: String,
  array: Array
})

import { applyFilters } from "../stores/ApplyFilters"

</script>

<template>
  <div class="d-flex flex-wrap p-0 gap-2 gap-lg-2 ">
    <label class="label bg-body-tertiary fs-6">{{ label }} &nbsp;:</label>
    <!-- <span class="label p-1 bg-body-tertiary">:</span> -->
    <div class="filters-button d-flex justify-center text-start  ">
      <button class="filter-button btn" v-for="(stack, index) in array" :key="index"
        v-on:click="applyFilters(stack as string)">{{ stack }}</button>
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
  margin: 0 4px;
  padding: 0px 7px;
  height: max-content;
  color: var(--foreground-color);
  background-color: var(--primary-color-light);
}

.filter-button.active {
  border: 1px solid var(--primary-color);
  box-shadow: 0 0 20px var(--primary-color-light);
}

.filter-button:hover {
  color: var(--primary-color);
  background-color: var(--secondary-color-light);
}

@media screen and (max-width: 650px) {
  .filter-button {
    margin: 4px;
  }
}
</style>
