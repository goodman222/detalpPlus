<script setup>
const props = defineProps({
  img: String,
});

const imgUrl = `./src/assets/img/services/${props.img}.png`;
</script>

<template>
  <div class="flex flex-col items-center max-w-[227px]">
    <div
      class="w-[73px] h-[73px] rounded-full bg-accent flex justify-center items-center mb-3.5"
    >
      <img :src="imgUrl" alt="" />
    </div>
    <h4
      class="text-white font-manrope text-base uppercase font-extrabold max-md:text-sm"
    >
      <slot></slot>
    </h4>
  </div>
</template>
