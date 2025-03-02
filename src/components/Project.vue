<script setup lang="ts">
import { ref } from 'vue';

defineProps({
  image: String,
  title: String,
  description: String,
  library: Array,
  framework: Array,
  language: Array,
  cssFramework: Array,
  api: Array,
  database: Array,
  status: String,
  link: String,
})

const isPopoverVisible = ref(false);

// Methods to control the popover
const togglePopover = () => {
  isPopoverVisible.value = !isPopoverVisible.value;
};

const closePopover = () => {
  isPopoverVisible.value = false;
};
</script>

<template>
  <div class="project flex flex-col relative ">
    <div class="project-link" @click="">
      <div v-if="isPopoverVisible" class="project-popover">
        <p>This is a simple popover!</p>
        <button class="close-btn" @click="closePopover">Close</button>
      </div>
      <div class="cover-image flex flex-col">
        <img :src="image" alt="Project Image" />
      </div>
      <div class="infos d-flex flex-column gap-2">
        <div class="d-flex justify-content-between ">
          <p class="title">{{ title }}</p>
          <span v-if="link == ''" class="undeployed-mark d-flex " title="Actually not deployed">
            <span style="width:16px; height:16px; padding-top:4.5px">
              <svg fill="#aaa" height="16px" width="16px" viewBox="0 0 45.311 45.311">
                <g>
                  <path
                    d="M22.675,0.02c-0.006,0-0.014,0.001-0.02,0.001c-0.007,0-0.013-0.001-0.02-0.001C10.135,0.02,0,10.154,0,22.656 c0,12.5,10.135,22.635,22.635,22.635c0.007,0,0.013,0,0.02,0c0.006,0,0.014,0,0.02,0c12.5,0,22.635-10.135,22.635-22.635 C45.311,10.154,35.176,0.02,22.675,0.02z M22.675,38.811c-0.006,0-0.014-0.001-0.02-0.001c-0.007,0-0.013,0.001-0.02,0.001 c-2.046,0-3.705-1.658-3.705-3.705c0-2.045,1.659-3.703,3.705-3.703c0.007,0,0.013,0,0.02,0c0.006,0,0.014,0,0.02,0 c2.045,0,3.706,1.658,3.706,3.703C26.381,37.152,24.723,38.811,22.675,38.811z M27.988,10.578 c-0.242,3.697-1.932,14.692-1.932,14.692c0,1.854-1.519,3.356-3.373,3.356c-0.01,0-0.02,0-0.029,0c-0.009,0-0.02,0-0.029,0 c-1.853,0-3.372-1.504-3.372-3.356c0,0-1.689-10.995-1.931-14.692C17.202,8.727,18.62,5.29,22.626,5.29 c0.01,0,0.02,0.001,0.029,0.001c0.009,0,0.019-0.001,0.029-0.001C26.689,5.29,28.109,8.727,27.988,10.578z">
                  </path>
                </g>
              </svg>
            </span>
          </span>
        </div>
        <p class="description">{{ description }}</p>
        <p class="stack flex gap-2 flex-wrap m-0 p-0">

          <button v-for="(techno, index) in framework" :key="index"
            class="framework stack-button willFilter primary m-0 p-0">{{
              techno
            }}</button>

          <button v-for="(techno, index) in language" :key="index"
            class="language stack-button willFilter primary m-0 p-0">{{
              techno
            }}</button>

          <button v-for="(techno, index) in library" :key="index"
            class="library stack-button willFilter primary m-0 p-0">{{
              techno
            }}</button>

          <button v-for="(techno, index) in cssFramework " :key="index"
            class="cssFramework stack-button willFilter primary m-0 p-0">{{
              techno
            }}</button>

          <button v-for="(techno, index) in api " :key="index" class="api stack-button willFilter primary m-0 p-0">{{
            techno
          }}</button>

          <button v-for="(techno, index) in database" :key="index"
            class="database stack-button willFilter primary m-0 p-0">{{
              techno
            }}</button>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.popover-container {
  position: relative;
  display: inline-block;
}

.popover-trigger {
  background-color: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.project-popover {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #ffffff;
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 8px;
  width: 200px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.close-btn {
  background: #ff5f57;
  color: white;
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 4px;
  margin-top: 1rem;
  cursor: pointer;
}

.project {
  width: 30.5%;
  max-width: 380px;
  height: 400px;
  height: auto;
  padding: 0;
  margin: 0;
  margin-bottom: 5%;
  border: 1px solid var(--primary-color);
  border-radius: 4px;
  box-shadow: 0 0 10px var(--primary-color);
  display: flex;
}

.cover-image img {
  width: 100%;
  height: 220px;
  min-height: 220px;
  object-fit: cover;
  overflow: hidden;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

.infos {
  padding: 10px 15px;
  background-color: var(--secondary-color-light);
}

.infos di {
  background-color: inherit !important;
}

.project .title {
  font-size: 24px;
}

.project .stack {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin: 0;
  gap: 5px;
}

.stack-button {
  padding: 0;
  background-color: transparent;
  color: var(--primary-color);
  border: none;
}

a,
p {
  margin: 0 !important;
  padding: 0 !important;
}

@media screen and (max-width: 1200px) {

  .project {
    width: 31.4%;
    margin-bottom: 5%;
  }
}

@media screen and (max-width: 1024px) {

  .project {
    width: 48.5%;
    margin: 0 auto 4.5% auto;
  }

  .gap-8 {
    gap: 1.2rem;
  }
}

@media screen and (max-width: 670px) {

  .project {
    width: 100%;
    margin: 0 auto;
    margin-bottom: 45px;
  }

  .cover-image img {
    height: auto;
    max-height: 300px;
  }

  .gap-8 {
    gap: .5rem;
  }
}
</style>
