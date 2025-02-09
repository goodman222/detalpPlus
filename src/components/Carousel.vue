<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  imgArray: Array,
  folder: String,
  visibleLength: Number,
  height: Number,
});

const { imgArray, folder, visibleLength } = props;
const length = imgArray.length;

let indexStart = ref(0);
let indexEnd = ref(visibleLength);

const visibleImgArray = ref(imgArray.slice(indexStart.value, indexEnd.value));

function changeImgPosition(value) {
  if (length === visibleLength) {
    return;
  }
  indexStart.value += value;
  indexEnd.value += value;
  if (indexStart.value < 0) {
    indexStart.value = length + indexStart.value;
  }
  if (indexStart.value > length - 1) {
    indexStart.value -= length;
  }
  if (indexEnd.value > length - 1) {
    indexEnd.value -= length;
  }
  if (indexEnd.value < 0) {
    indexEnd.value = length + indexEnd.value;
  }
  console.log(indexStart.value);
  console.log(indexEnd.value);

  if (indexEnd.value > indexStart.value) {
    visibleImgArray.value = imgArray.slice(indexStart.value, indexEnd.value);
  } else {
    visibleImgArray.value = [
      ...imgArray.slice(indexStart.value),
      ...imgArray.slice(0, indexEnd.value),
    ];
  }
}
</script>

<template>
  <div class="w-full flex flex-row">
    <button @click="changeImgPosition(-1)">
      <img src="../assets/img/arrow.png" alt="" />
    </button>
    <div class="flex flex-row w-full gap-5 mx-7" :style="{ height: height }">
      <div
        class="w-full h-full cursor-pointer shrink-1"
        v-for="(item, index) in visibleImgArray"
        :key="item"
      >
        <img
          :src="`${folder}${item}`"
          alt=""
          class="w-full h-full object-cover"
        />
      </div>
    </div>
    <button @click="changeImgPosition(+1)">
      <img src="../assets/img/arrow.png" alt="" class="rotate-180" />
    </button>
  </div>
</template>
