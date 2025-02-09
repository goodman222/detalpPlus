<script setup>
import RedHeader from "../RedHeader.vue";
import Carousel from "../Carousel.vue";
import { useStore } from "../../stores/store.js";
import { computed } from "vue";

const store = useStore();
const isMobile = computed(() => store.isMobile);

const imgArray = [
  "cert1.png",
  "cert2.png",
  "cert3.png",
  "cert4.png",
  "cert5.png",
];

const folder = `src/assets/img/certs/`;

const visibleLength = computed(() => {
  if (isMobile.value) {
    return 1;
  } else {
    return 5;
  }
});

const height = computed(() => {
  if (isMobile.value) {
    return `auto`;
  } else {
    return `230px`;
  }
});
</script>
<template>
  <section class="md:bg-grey-background w-full pt-12 max-md:px-3.5">
    <div class="mx-auto max-w-(--page) flex flex-col items-center">
      <RedHeader class="text-center mb-8">Достижения и сертификаты</RedHeader>
      <Carousel
        class="mx-auto mb-12"
        :folder="folder"
        :imgArray="imgArray"
        :visibleLength="visibleLength"
        :height="height"
      ></Carousel>
    </div>
  </section>
</template>
