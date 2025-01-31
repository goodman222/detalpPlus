<script setup>
import AdvantageItem from "../AdvantageItem.vue";
</script>
<template>
  <div class="bg-grey-background py-14">
    <div class="mx-auto max-w-(--page) flex flex-col">
      <AdvantageItem class="mb-12" direction="direct" img="advantage1">
        <template v-slot:header>
          Многолетний опыт, профессионализм и инновационный подход
        </template>
        <template v-slot:content>
          Наш накопленный опыт, профессиональная команда и современный подход к
          производству, позволяют нам не только сохранить сотрудничество с
          имеющимися клиентами, но и за счет рекомендаций привлекать новых
          заказчиков, при этом качество и сроки изготовления деталей на порядок
          выше, чем у конкурентов.
        </template>
      </AdvantageItem>
      <AdvantageItem direction="reverse" img="advantage2"
        ><template v-slot:header>
          Стремление к постоянному совершенствованию и развитию
        </template>
        <template v-slot:content>
          Улучшение производственных процессов и обеспечение высочайшего уровня
          качества нашей продукции является следствием движения в ногу со
          временем в мире современных технологий.
        </template></AdvantageItem
      >
    </div>
  </div>
</template>
