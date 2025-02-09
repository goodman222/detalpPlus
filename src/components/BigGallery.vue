<script setup>
import { ref } from "vue";

const props = defineProps({
  imgArray: Array,
  path: String,
  showPreview: {
    type: Boolean,
    default: false,
  },
});
const { imgArray, path } = props;
const imgPreview = imgArray.slice(1);
const currentImg = ref(imgArray[0]);
const currentIndex = ref(0);

function changeCurrentImg(targetImgIndex) {
  const length = imgArray.length;
  if (targetImgIndex > length - 1) {
    targetImgIndex = 0;
  } else if (targetImgIndex < 0) {
    targetImgIndex = length - 1;
  }

  currentIndex.value = targetImgIndex;
  currentImg.value = imgArray[targetImgIndex];
}
</script>

<template>
  <div class="flex flex-row justify-between items-center gap-8">
    <button class="cursor-pointer" @click="changeCurrentImg(currentIndex - 1)">
      <img src="../assets/img/arrow.png" alt="" />
    </button>
    <div class="max-w-[707px] w-full">
      <div class="h-[307px] w-full mb-8">
        <img
          class="w-full h-full object-contain"
          :src="`${path}${currentImg}`"
          alt=""
        />
      </div>

      <div
        v-if="showPreview"
        class="flex flex-row justify-between gap-5 w-full h-32"
      >
        <div
          @click="changeCurrentImg(index + 1)"
          class="w-full h-[123px] cursor-pointer"
          v-for="(img, index) in imgPreview"
        >
          <img
            class="w-full h-full object-cover"
            :src="`${path}${img}`"
            alt=""
            :key="img"
          />
        </div>
      </div>
    </div>
    <button class="cursor-pointer" @click="changeCurrentImg(currentIndex + 1)">
      <img src="../assets/img/arrow.png" alt="" class="rotate-180" />
    </button>
  </div>
</template>
