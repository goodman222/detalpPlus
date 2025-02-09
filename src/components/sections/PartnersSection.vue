<script setup>
import PageHeader from "../PageHeader.vue";
import RedHeader from "../RedHeader.vue";
import Carousel from "../Carousel.vue";
import { useStore } from "../../stores/store.js";
import { computed } from "vue";

const store = useStore();
const isMobile = computed(() => store.isMobile);

const imgArray = [
  "case1.png",
  "case2.png",
  "case3.png",
  "case4.png",
  "case5.png",
];
const folder = "src/assets/img/cases/";

const visibleLength = computed(() => {
  if (isMobile.value) {
    return 1;
  } else {
    return 3;
  }
});
</script>

<template>
  <section>
    <div class="w-full md:bg-grey-background py-11 max-md:px-3.5">
      <div class="w-full max-w-(--page) mx-auto flex flex-col">
        <PageHeader class="max-md:text-center">
          <template v-slot:header>Партнеры и клиенты</template>
        </PageHeader>
        <RedHeader class="text-center mb-8">Кейсы</RedHeader>
        <Carousel
          class="mx-auto mb-12"
          :folder="folder"
          :visibleLength="visibleLength"
          :imgArray="imgArray"
          :height="230"
        ></Carousel>
      </div>
    </div>
  </section>
</template>
