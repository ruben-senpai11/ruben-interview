
<script lang="ts">
import { defineComponent, ref } from 'vue';

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
  <div class="popover-container">
    <button class="popover-trigger" @click="togglePopover">
      Toggle Popover
    </button>
    <div v-if="isPopoverVisible" class="popover-content">
      <p>This is a simple popover!</p>
      <button class="close-btn" @click="closePopover">Close</button>
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

.popover-content {
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
</style>
