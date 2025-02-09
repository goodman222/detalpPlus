<script setup>
import BannerText from "../BannerText.vue";
import MainButton from "../MainButton.vue";
import FormPopup from "./../FormPopup.vue";

import { usePopupStore } from "../../stores/popup.js";
const popupStore = usePopupStore();
function clickBtnHandler() {
  popupStore.openPopup(FormPopup);
}
</script>

<template>
  <section
    class="relative bg-[url('./src/assets/img/consultations-bg.png')] bg-center bg-no-repeat bg-cover flex justify-center items-center flex-col py-16 max-md:px-3.5"
  >
    <div class="w-full h-full absolute bg-dark-filter"></div>
    <div
      class="z-50 text-white flex flex-col w-full max-w-(--page) items-start justify-start items-center text-center"
    >
      <BannerText class="text-left w-[50%] max-md:w-full"
        >Получите консультацию по вашему проекту!</BannerText
      >
      <p
        v-textSlide
        class="font-manrope mt-7 mb-12 text-left w-[50%] max-md:text-xs max-md:w-full max-md:mt-3.5 max-md:mb-8"
      >
        Проконсультируем по вопросам изготовления и проектирования деталей и
        металлообработки. Рассчитаем финальную смету за проект.
      </p>
      <MainButton @click="clickBtnHandler">ОСТАВИТЬ ЗАЯВКУ</MainButton>
    </div>
  </section>
</template>
