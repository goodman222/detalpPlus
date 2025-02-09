<script setup>
import FormInput from "./FormInput.vue";
import BannerText from "./BannerText.vue";
import MainButton from "./MainButton.vue";
import { usePopupStore } from "../stores/popup.js";
const popupStore = usePopupStore();
</script>
<template>
  <form
    action=""
    class="bg-dark-bg px-16 py-9 flex flex-col items-center justify-between w-[70%] mx-auto max-md:w-full max-md:p-7"
  >
    <div class="flex flex-row justify-end items-end w-full mb-9">
      <button class="cursor-pointer" @click="popupStore.closePopup">
        <img src="../assets/img/close.png" alt="" />
      </button>
    </div>
    <BannerText class="text-3xl mb-4 max-md:text-xl"
      >Получите консультацию по вашему проекту!</BannerText
    >
    <p class="font-manrope text-white text-sm mb-9">
      Проконсультируем по вопросам изготовления и проектирования деталей и
      металлообработки. Рассчитаем финальную смету за проект.
    </p>
    <FormInput type="text" placeholder="Имя"> </FormInput>
    <FormInput type="text" placeholder="+7 (000) 000 00-00"> </FormInput>
    <FormInput type="textarea" placeholder="Комментарий" class=""> </FormInput>
    <MainButton class="text-white">ОТПРАВИТЬ</MainButton>
  </form>
</template>
