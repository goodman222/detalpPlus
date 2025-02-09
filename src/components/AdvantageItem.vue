<script setup>
const props = defineProps({
  direction: String,
  img: String,
});

const direction = props.direction;
const imgUrl = `./src/assets/img/${props.img}.png`;
</script>
<template>
  <div
    class="flex items-center max-md:flex-col"
    :class="direction === 'reverse' ? 'flex-row-reverse' : 'flex-row'"
  >
    <div :class="direction === 'reverse' ? 'md:ml-20' : 'md:mr-20'">
      <h3
        v-textSlide
        class="text-dark-blue font-bowler text-xl max-md:text-base max-md:mb-4"
      >
        <slot name="header"></slot>
      </h3>
      <p v-textSlide class="font-manrope text-sm max-md:text-xs max-md:mb-4">
        <slot name="content"></slot>
      </p>
    </div>
    <img :src="imgUrl" alt="" />
  </div>
</template>
