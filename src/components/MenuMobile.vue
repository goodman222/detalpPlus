<script setup>
import navItem from "./NavItem.vue";
import { useStore } from "../stores/store.js";
const store = useStore();
</script>

<template>
  <nav
    class="flex flex-col h-lvh h-[calc(100vh - 56px)] w-full overflow-y-auto fixed top-14 z-100 px-2 gap-1.5 bg-white"
    @click="store.menuStateChange"
  >
    <navItem href="/about"> О компании </navItem>
    <navItem href="/workTypes">Виды работ и услуг</navItem>
    <navItem href="/equipment">Оборудование</navItem>
    <navItem href="/ourPartners">Партнеры и клиенты</navItem>
    <navItem href="/contacts">Контакты</navItem>
    <navItem href="/feedback">Обратная связь</navItem>
  </nav>
</template>
