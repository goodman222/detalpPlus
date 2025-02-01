<script setup>
import PageHeader from "../PageHeader.vue";
import RedHeader from "../RedHeader.vue";
import WorkAndServicesItem from "../WorkAndServicesItem.vue";
</script>

<template>
  <section class="w-full bg-grey-background py-11">
    <div class="w-full max-w-(--page) mx-auto flex flex-col">
      <PageHeader
        ><template v-slot:header>Виды работ и услуг</template>
      </PageHeader>
      <div class="flex flex-row justify-between gap-10">
        <div>
          <RedHeader class="mb-8">Услуги</RedHeader>
          <div class="border-t-2 border-[#BBBBBB]">
            <WorkAndServicesItem
              >Изготовление металлических деталей на токарных станках с ЧПУ по
              чертежам и образцам</WorkAndServicesItem
            >
            <WorkAndServicesItem
              >Изготовление металлических деталей на токарных станках с ЧПУ по
              чертежам и образцам</WorkAndServicesItem
            >
            <WorkAndServicesItem
              >Термическая обработка металла, электроэррозионная
              обработка</WorkAndServicesItem
            >
            <WorkAndServicesItem
              >Разработка чертежей и моделирование по предоставленым
              образцам</WorkAndServicesItem
            >
            <WorkAndServicesItem
              >Сварочные работы любой сложности</WorkAndServicesItem
            >
          </div>
        </div>
        <div class="repeat-min grid gap-5 w-[70%]">
          <img
            class="w-full"
            src="../../assets/img/services/services1.png"
            alt=""
          />
          <img
            class="w-full"
            src="../../assets/img/services/services2.png"
            alt=""
          />
          <img
            class="w-full"
            src="../../assets/img/services/services3.png"
            alt=""
          />
          <img
            class="w-full"
            src="../../assets/img/services/services4.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.repeat-min {
  grid-template-rows: repeat(2, min-content);
  grid-template-columns: repeat(2, 1fr);
}
</style>
