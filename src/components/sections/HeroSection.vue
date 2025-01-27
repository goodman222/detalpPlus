<script setup>
import BannerText from "../BannerText.vue";
import MainButton from "../MainButton.vue";
</script>

<template>
  <section
    class="relative h-[calc(100vh-64px)] bg-[url('./src/assets/img/hero-bg.png')] bg-center bg-no-repeat bg-cover flex justify-center items-center flex-col"
  >
    <div class="w-full h-full absolute bg-dark-filter"></div>

    <div
      class="z-50 text-white flex flex-col justify-center items-center text-center"
    >
      <BannerText
        >Ведущая компания <br />
        по металлообработке <br />c многолетним опытом</BannerText
      >
      <p class="font-manrope mt-7 mb-12">
        «ДЕТАЛЬ+» - Точность, надежность, качество!
      </p>
      <MainButton>УСЛУГИ</MainButton>
    </div>
  </section>
</template>

<style scoped></style>
