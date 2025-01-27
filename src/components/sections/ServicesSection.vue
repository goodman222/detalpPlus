<script setup>
import BannerText from "../BannerText.vue";
import ServicesItem from "../ServicesItem.vue";
</script>

<template>
  <section
    class="relative bg-[url('./src/assets/img/services-bg.png')] bg-center bg-no-repeat bg-cover flex justify-center items-center flex-col py-16"
  >
    <div class="w-full h-full absolute bg-dark-filter"></div>

    <div
      class="z-50 text-white flex flex-col w-full max-w-[852px] justify-center items-center text-center"
    >
      <BannerText class="mb-12">Наши специализации и услуги</BannerText>
      <div class="flex flex-row justify-between w-full">
        <ServicesItem :img="'Vector1'"
          >Высокоточная металлообработка</ServicesItem
        >
        <ServicesItem :img="'Vector2'"
          >Гибкие условия сотрудничества</ServicesItem
        >
        <ServicesItem :img="'Vector3'"
          >Работа с крупными объемами заказов</ServicesItem
        >
        <ServicesItem :img="'Vector4'"
          >Серийное производство деталей различной сложности</ServicesItem
        >
      </div>
    </div>
  </section>
</template>
