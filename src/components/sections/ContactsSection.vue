<script setup>
import PageHeader from "../PageHeader.vue";
import SubHeader from "../SubHeader.vue";
import CircleLinks from "../CircleLinks.vue";
import MapWithLine from "../MapWithLine.vue";
import MapFullWidth from "../MapFullWidth.vue";
</script>

<template>
  <section class="w-full md:bg-grey-background pt-14 max-md:px-3.5">
    <div
      class="max-w-(--page) w-full mx-auto flex flex-row justify-between gap-32 pb-16"
    >
      <div class="font-manrope text-xs flex flex-col gap-3">
        <PageHeader> <template v-slot:header>Контакты</template></PageHeader>
        <SubHeader>Адрес</SubHeader>
        <p class="font-bold">
          Гск Жилстрой, ​Нефтеюганск, Ханты-Мансийский автономный округ — Югра,
          628305.
        </p>
        <p>Ежедневно с 08:00 до 18:00</p>
        <div
          class="flex flex-row items-center gap-2 font-extrabold max-md:flex-col max-md:items-start"
        >
          <div class="flex flex-row items-center">
            <img src="../../assets/img/phone.png" alt="" />
            <span>+7 (982) 502 54‒69</span>
          </div>
          <div class="flex flex-row items-center">
            <img class="md:hidden" src="../../assets/img/phone.png" alt="" />
            <span>+7 (922) 965-94-55</span>
          </div>
        </div>
        <div class="flex flex-row gap-2.5 mt-2">
          <CircleLinks link="whatsapp" img="watsapp.png"></CircleLinks>
          <CircleLinks link="tg" img="tg.png"></CircleLinks>
          <CircleLinks link="viber" img="viber.png"></CircleLinks>
        </div>
      </div>
      <div class="w-[50%] max-md:hidden">
        <SubHeader class="mb-3.5">Схема проезда</SubHeader>
        <MapWithLine></MapWithLine>
      </div>
    </div>
    <MapFullWidth class="max-md:hidden"></MapFullWidth>
  </section>
</template>
