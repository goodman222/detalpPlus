<script setup>
import RedHeader from "../RedHeader.vue";
import BigGallery from "../BigGallery.vue";
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
  <section class="w-full pt-14 bg-grey-background">
    <div class="w-full max-w-(--page) mx-auto flex flex-col">
      <RedHeader class="text-center mb-11">Примеры работ</RedHeader>
      <BigGallery
        :imgArray="imgArray"
        :path="path"
        :showPreview="true"
      ></BigGallery>
    </div>
  </section>
</template>
