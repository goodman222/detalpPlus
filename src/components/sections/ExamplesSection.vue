<script setup>
import RedHeader from "../RedHeader.vue";
import BigGallery from "../BigGallery.vue";
import { useStore } from "../../stores/store.js";
import { computed } from "vue";
const store = useStore();
const isMobile = computed(() => store.isMobile);

const imgArray = [
  "stanok1.png",
  "detal1.png",
  "detal2.png",
  "stanok2.png",
  "stanok3.png",
  "man.png",
];
const path = "src/assets/img/examples/";
</script>
<template>
  <section class="w-full pt-14 md:bg-grey-background max-md:px-3.5">
    <div class="w-full max-w-(--page) mx-auto flex flex-col">
      <RedHeader class="text-center mb-11">Наш цех и примеры работ</RedHeader>
      <BigGallery
        :imgArray="imgArray"
        :path="path"
        :showPreview="!isMobile"
      ></BigGallery>
    </div>
  </section>
</template>
