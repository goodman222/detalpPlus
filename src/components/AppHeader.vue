<script setup>
import navItem from "./NavItem.vue";
import Logo from "./Logo.vue";
</script>

<template>
  <header
    class="h-16 w-full bg-grey-background flex flex-row items-center justify-center"
  >
    <nav class="flex flex-row gap-6 justify-between items-center">
      <navItem href="/about"> О компании </navItem>
      <navItem href="/workTypes">Виды работ и услуг</navItem>
      <navItem href="/equipment">Оборудование</navItem>
      <Logo></Logo>
      <navItem href="/ourPartners">Партнеры и клиенты</navItem>
      <navItem href="/contacts">Контакты</navItem>
      <navItem href="/feedback">Обратная связь</navItem>
    </nav>
  </header>
</template>
