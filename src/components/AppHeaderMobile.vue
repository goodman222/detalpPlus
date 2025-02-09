<script setup>
import Logo from "./Logo.vue";
import MenuBtn from "./MenuBtn.vue";
import MenuMobile from "./MenuMobile.vue";
import { useStore } from "../stores/store.js";
import { computed } from "vue";
const store = useStore();
// const isMenuOpen = store.isMenuOpen;
const isMenuOpen = computed(() => store.isMenuOpen);
</script>

<template>
  <header
    class="flex flex-row justify-between px-1 fixed w-full z-100 bg-white shadow-[0px 4px 4px 0px rgba(0, 0, 0, 0.04)]"
  >
    <Logo></Logo>
    <MenuBtn @click="store.menuStateChange"></MenuBtn>
  </header>
  <MenuMobile v-show="isMenuOpen"></MenuMobile>
</template>
<style>
header {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.04);
}
</style>
