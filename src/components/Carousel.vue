<script setup>
const props = defineProps({
  imgArray: Array,
  folder: String,
});
const imgArray = props.imgArray;
</script>

<template>
  <div class="flex flex-row">
    <button><img src="../assets/img/arrow.png" alt="" /></button>
    <div class="flex flex-row gap-5 mx-7">
      <img
        v-for="(item, index) in imgArray"
        :key="item"
        :src="`${props.folder}${item}`"
        alt=""
      />
    </div>
    <button>
      <img src="../assets/img/arrow.png" alt="" class="rotate-180" />
    </button>
  </div>
</template>
