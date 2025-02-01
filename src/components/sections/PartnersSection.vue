<script setup>
import PageHeader from "../PageHeader.vue";
import RedHeader from "../RedHeader.vue";
import Carousel from "../Carousel.vue";
const imgArray = ["case1.png", "case2.png", "case3.png"];
const folder = "src/assets/img/cases/";
</script>

<template>
  <section>
    <div class="w-full bg-grey-background py-11">
      <div class="w-full max-w-(--page) mx-auto flex flex-col">
        <PageHeader>
          <template v-slot:header>Партнеры и клиенты</template>
        </PageHeader>
        <RedHeader class="text-center mb-8">Кейсы</RedHeader>
        <Carousel
          class="mx-auto mb-12"
          :folder="folder"
          :imgArray="imgArray"
        ></Carousel>
      </div>
    </div>
  </section>
</template>
