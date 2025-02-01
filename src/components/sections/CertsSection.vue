<script setup>
import RedHeader from "../RedHeader.vue";
import Carousel from "../Carousel.vue";
const imgArray = [
  "cert1.png",
  "cert2.png",
  "cert2.png",
  "cert4.png",
  "cert5.png",
];

const folder = `src/assets/img/certs/`;
</script>
<template>
  <section class="bg-grey-background w-full pt-12">
    <div class="mx-auto max-w-(--page) flex flex-col items-center">
      <RedHeader class="text-center mb-8">Достижения и сертификаты</RedHeader>
      <Carousel
        class="mx-auto mb-12"
        :folder="folder"
        :imgArray="imgArray"
      ></Carousel>
    </div>
  </section>
</template>
