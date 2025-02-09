<script setup>
import { usePopupStore } from "../stores/popup.js";
const popupStore = usePopupStore();
</script>

<template>
  <Teleport to="body">
    <div
      class="w-screen h-screen fixed flex justify-center items-center top-0 z-999 inset-0 bg-black/50 backdrop-blur-md"
      @click.self="popupStore.closePopup"
    >
      <div class=" ">
        <component :is="popupStore.popupContent"></component>
      </div>
    </div>
  </Teleport>
</template>
