<script setup>
const porps = defineProps({
  number: Number,
  text: String,
  title: String,
});
</script>

<template>
  <div>
    <div
      class="w-14 h-14 rounded-full bg-accent flex items-center justify-center font-manrope font-extrabold text-3xl text-white"
    >
      <slot name="number"></slot>
    </div>
    <h4 class="mt-4 font-manrope font-extrabold text-lg text-white mb-3">
      <slot name="header"></slot>
    </h4>
    <p class="font-manrope font-normal text-white text-sm leading-[160%]">
      <slot name="text"></slot>
    </p>
  </div>
</template>
