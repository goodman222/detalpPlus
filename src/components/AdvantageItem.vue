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
    class="flex items-center"
    :class="direction === 'reverse' ? 'flex-row-reverse' : 'flex-row'"
  >
    <div :class="direction === 'reverse' ? 'ml-20' : 'mr-20'">
      <h3 class="text-dark-blue font-bowler text-xl">
        <slot name="header"></slot>
      </h3>
      <p class="font-manrope text-sm">
        <slot name="content"></slot>
      </p>
    </div>
    <img :src="imgUrl" alt="" />
  </div>
</template>
