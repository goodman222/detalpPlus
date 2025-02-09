<script setup>
import PageHeader from "../PageHeader.vue";
import Courusel from "../Carousel.vue";
const imgArray = ["equipment1.png", "equipment2.png", "equipment3.png"];
const folder = `src/assets/img/equipment/`;
</script>
<template>
  <div class="w-full bg-grey-background py-11 max-md:bg-white max-md:px-3.5">
    <div class="w-full max-w-(--page) mx-auto flex flex-col">
      <PageHeader>
        <template v-slot:header>оборудование</template>
      </PageHeader>
      <div class="flex flex-row justify-between">
        <ol
          type="1"
          class="list-decimal list-inside mb-1 font-manrope text-sm font-extrabold"
        >
          <li>Jet IDTP-16, настольный сверлильный резьбонарезной станок</li>
          <li>⁠Токарный станок с ЧПУ модель «MetalTec ТС 45х750»</li>
          <li>Токарный станок с ЧПУ модель «GT-45»</li>
          <li>Токарный станок с ЧПУ модель «Протон Т-160»</li>
          <li>Проволочно-вырезной электроэрозионный станок</li>
          <li>⁠Муфельная печь</li>
          <li>⁠Горизонтальный лентопильный станок по металлу</li>
          <li>⁠Сварочный инверторный аппарат на 400 А</li>
          <li>⁠Аппарат плазменной резки 70А</li>
        </ol>
        <Courusel
          :folder="folder"
          :imgArray="imgArray"
          :visibleLength="1"
          :height="`330px`"
          class="max-md:hidden"
        ></Courusel>
      </div>
    </div>
  </div>
</template>

<style>
li {
  margin-bottom: 8px;
}
</style>
