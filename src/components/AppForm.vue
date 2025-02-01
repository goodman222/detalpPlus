<script setup>
import BannerText from "./BannerText.vue";
import FormInput from "./FormInput.vue";
import MainButton from "./MainButton.vue";
</script>

<template>
  <form
    action=""
    class="bg-dark-bg px-16 py-9 flex flex-col items-center justify-between w-[70%] mx-auto"
  >
    <BannerText class="text-3xl mb-4">Обратная связь</BannerText>
    <FormInput type="text" placeholder="Имя"> </FormInput>
    <FormInput type="text" placeholder="+7 (000) 000 00-00"> </FormInput>
    <FormInput type="text" placeholder="Email"> </FormInput>
    <FormInput type="text" placeholder="Тема"> </FormInput>
    <FormInput type="textarea" placeholder="Описание" class=""> </FormInput>
    <MainButton class="text-white">ОТПРАВИТЬ</MainButton>
  </form>
</template>
