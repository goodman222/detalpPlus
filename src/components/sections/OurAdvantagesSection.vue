<script setup>
import BannerText from "../BannerText.vue";
import OurAdvantagesItem from "../OurAdvantagesItem.vue";
</script>
<template>
  <section
    class="relative bg-[url('./src/assets/img/advantages-bg.png')] bg-center bg-no-repeat bg-cover"
  >
    <div class="w-full h-full absolute bg-dark-filter"></div>
    <div
      class="z-50 relative max-w-(--page) w-full mx-auto pt-11 py-7 max-md:px-3.5"
    >
      <BannerText class="text-xl">Наши преимущества</BannerText>
      <div
        class="grid grid-rows-2 grid-cols-3 gap-x-6 gap-y-5 mt-11 max-md:grid-rows-[repeat(5,auto)] max-md:grid-cols-1"
      >
        <OurAdvantagesItem>
          <template v-slot:number>1</template>
          <template v-slot:header>Опыт и профессионализм</template>
          <template v-slot:text
            >Наша компания на рынке многие годы, что позволяет нам уверенно
            решать задачи любой сложности. Мы постоянно совершенствуем
            производственные процессы, внедряем новые технологиии проводим
            обучение персонала, чтобы поддерживать высокий уровень квалификации
            наших специалистов.</template
          >
        </OurAdvantagesItem>
        <OurAdvantagesItem>
          <template v-slot:number>2</template>
          <template v-slot:header>Инновации и развитие</template>
          <template v-slot:text
            >Наша компания активно следит за инновациями в области
            металлообработки и стремится внедрять лучшие из них в свое
            производство. Мы уверены, что постоянное развитиеи внедрение новых
            технологий позволяют нам оставаться в авангарде отрасли.</template
          >
        </OurAdvantagesItem>
        <OurAdvantagesItem>
          <template v-slot:number>3</template>
          <template v-slot:header>Высокоточная металлообработка </template>
          <template v-slot:text
            >Мы предлагаем широкий спектр услугпо металлообработке — от
            серийного производства до выполнения индивидуальных заказов.
            Независимо от объема и сложности, наши мощности позволяют нам
            обеспечивать высокое качество и точность изделий.</template
          >
        </OurAdvantagesItem>
        <OurAdvantagesItem>
          <template v-slot:number>4</template>
          <template v-slot:header>Гибкие условия сотрудничества </template>
          <template v-slot:text
            >Мы ценим каждого клиента и готовы предложить индивидуальный подход,
            учитывая особенности и потребности каждого заказа. Наша цель — не
            просто выполнять заказы, а стать надежным партнером для каждого
            нашего клиента.</template
          >
        </OurAdvantagesItem>
        <OurAdvantagesItem>
          <template v-slot:number>5</template>
          <template v-slot:header
            >Контроль качества и стандарты безопасности
          </template>
          <template v-slot:text
            >Мы придерживаемся строгих стандартов качества и безопасности.
            Каждый этап производства подвергается тщательной проверке, что
            позволяет нам гарантировать надежность и безопасность наших изделий.
          </template>
        </OurAdvantagesItem>
      </div>
    </div>
  </section>
</template>
