<script setup>
import PageHeader from "../PageHeader.vue";
</script>
<template>
  <div class="w-full bg-grey-background py-11">
    <div class="w-full max-w-(--page) mx-auto flex flex-row">
      <div class="pr-28">
        <PageHeader>
          <template v-slot:header>О компании</template>
          <template v-slot:text
            >«ДЕТАЛЬ+» - Точность, надежность, качество!</template
          >
        </PageHeader>
        <p class="font-manrope text-sm">
          «ДЕТАЛЬ+» — ваш надежный партнер в металлообработке. Мы
          специализируемся на производстве деталей высочайшего качества с
          использованием передовых технологий и оборудования. Наша команда
          профессионалов гарантирует точность каждого изделия, обеспечивая таким
          образом надежность и долговечность продукции для успеха наших
          клиентов.
        </p>
      </div>
      <img src="../../assets/img/about-section.png" alt="" />
    </div>
  </div>
</template>
