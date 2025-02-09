<script setup>
import BannerText from "../BannerText.vue";
import MainButton from "../MainButton.vue";
import { useRouter } from "vue-router";

const router = useRouter();

function goToworkTypes() {
  router.push("/workTypes");
}
</script>

<template>
  <section
    class="relative h-[calc(100vh-64px)] bg-[url('./src/assets/img/hero-bg.png')] bg-center bg-no-repeat bg-cover flex justify-center items-center flex-col max-md:h-[calc(100vh-56px)]"
  >
    <div class="w-full h-full absolute bg-dark-filter"></div>

    <div
      class="z-50 text-white flex flex-col justify-center items-center text-center"
    >
      <BannerText
        >Ведущая компания <br />
        по металлообработке <br />c многолетним опытом</BannerText
      >
      <p v-textSlide class="font-manrope mt-7 mb-12">
        «ДЕТАЛЬ+» - Точность, надежность, качество!
      </p>
      <MainButton @click="goToworkTypes">УСЛУГИ</MainButton>
    </div>
  </section>
</template>

<style scoped></style>
