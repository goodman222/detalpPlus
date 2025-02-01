<script setup>
import MainButton from "./MainButton.vue";
</script>
<template>
  <div
    class="flex justify-between items-center flex-row gap-5 border-b-2 border-[#BBBBBB] px-5 py-3"
  >
    <p class="font-manrope font-extrabold text-[11px]"><slot></slot></p>
    <button
      class="h-fit bg-white text-black border-2 border-accent font-manrope font-extrabold text-[8px] uppercase p-2 text-nowrap"
    >
      Оставить заявку
    </button>
  </div>
</template>
