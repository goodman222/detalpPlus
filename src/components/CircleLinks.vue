<script setup>
const props = defineProps({
  link: String,
  img: String,
});
const imgPath = `src/assets/img/${props.img}`;
</script>

<template>
  <div class="w-7 h-7 rounded-full bg-accent flex justify-center items-center">
    <a class="w-full h-full flex justify-center items-center" :href="props.link"
      ><img :src="imgPath" alt=""
    /></a>
  </div>
</template>
