<script setup>
import { RouterLink } from "vue-router";
import FooterHeader from "./FooterHeader.vue";
import FooterItem from "./FooterItem.vue";
import Logo from "./Logo.vue";
</script>
<template>
  <footer class="bg-footer flex flex-col py-10 max-md:px-3.5">
    <div class="max-w-(--page) w-full mx-auto flex flex-col">
      <div
        class="flex flex-row items-start justify-between max-footer-mobile:flex-col-reverse"
      >
        <div class="max-footer-mobile:mt-4 max-footer-mobile:order-1">
          <FooterHeader>Меню</FooterHeader>
          <FooterItem><RouterLink to="/">Главная</RouterLink></FooterItem>
          <FooterItem
            ><RouterLink to="/about">О компании</RouterLink></FooterItem
          >
          <FooterItem
            ><RouterLink to="/ourPartners"
              >Партнеры и клиенты</RouterLink
            ></FooterItem
          >
          <FooterItem
            ><RouterLink to="/workTypes"
              >Виды работ и услуг</RouterLink
            ></FooterItem
          >
          <FooterItem
            ><RouterLink to="/contacts">Контакты</RouterLink></FooterItem
          >
        </div>
        <div class="max-footer-mobile:mt-0">
          <FooterHeader>Контакты</FooterHeader>
          <FooterItem
            >Гск Жилстрой, ​Нефтеюганск, Ханты-Мансийский автономный округ —
            Югра, 628305.</FooterItem
          >
          <FooterItem>Ежедневно с 08:00 до 18:00</FooterItem>
          <FooterItem>+7 (982) 502 54‒69</FooterItem>
          <FooterItem>+7 (922) 965-94-55</FooterItem>
          <FooterItem>Dplus3@mail.ru</FooterItem>
        </div>
        <div class="max-footer-mobile:order-2">
          <Logo class="max-footer-mobile:mb-2" :light-logo="true"></Logo>
          <FooterItem>ООО «Деталь+»</FooterItem>
          <FooterItem>ИНН 8604073694</FooterItem>
          <FooterItem>КПП 860401001</FooterItem>
          <FooterItem>ОГРН 1248600000439</FooterItem>
        </div>
      </div>
      <FooterItem>© Все права защищены.</FooterItem>
    </div>
  </footer>
</template>
