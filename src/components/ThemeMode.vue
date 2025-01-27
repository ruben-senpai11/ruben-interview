<script setup lang="ts">
import SunIcon from '../components/icons/IconSun.vue'
import MoonIcon from '../components/icons/IconMoon.vue'

import { ref, onMounted, watch } from 'vue'

const themeMode = ref(localStorage.getItem('theme') || 'light')

const handleToggle = () => {
  themeMode.value = themeMode.value === 'light' ? 'dark' : 'light'
}

watch(themeMode, (newMode) => {
  localStorage.setItem('theme', newMode)
  document.querySelector('html')?.setAttribute('data-theme', newMode)
})

onMounted(() => {
  document.querySelector('html')?.setAttribute('data-theme', themeMode.value)
})
</script>

<template>
  <div className="theme flex gap-2">
    <SunIcon />
    <label className="theme-switch">
      <label htmlFor="theme-swith"></label>
      <input id="theme-swith" type="checkbox" :checked="themeMode === 'dark'" @change="handleToggle" />
      <span className="theme-slider round"></span>
    </label>
    <MoonIcon />
  </div>
</template>

<style>
.theme {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  /* z-index: 99999; */
}

.theme-switch {
  position: relative;
  display: inline-block;
  width: 36px;
  height: 18px;
}

.theme-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.theme-slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #777;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.theme-slider:before {
  position: absolute;
  content: '';
  height: 12px;
  width: 12px;
  bottom: 2px;
  left: 3px;
  background-color: black;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked+.theme-slider:before {
  -webkit-transform: translateX(14px);
  -ms-transform: translateX(14px);
  transform: translateX(14px);
  background-color: white;
}

input+.theme-slider {
  background-color: transparent;
  border: 1px solid black;
}

input:checked+.theme-slider {
  border: 1px solid white;
  background-color: transparent;
}

input:focus+.theme-slider {
  box-shadow: 0 0 1px var(--dark-orange);
}

/* Rounded theme-sliders */
.theme-slider.round {
  border-radius: 34px;
}

.theme-slider.round:before {
  border-radius: 50%;
}

.current-theme {
  text-transform: capitalize;
}

@media screen and (max-width: 765px) {
  .theme {
    gap: 5px;
  }
}

@media screen and (max-width: 300px) {
  .theme {
    /* display: none; */
  }
}
</style>
