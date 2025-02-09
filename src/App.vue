<script setup>
import { RouterView } from "vue-router";
import { computed } from "vue";
import AppHeader from "./components/AppHeader.vue";
import AppHeaderMobile from "./components/AppHeaderMobile.vue";
import AppFooter from "./components/AppFooter.vue";
import { useStore } from "./stores/store.js";

const store = useStore();
const isMobile = computed(() => store.isMobile);
</script>

<template>
  <!-- <AppHeader></AppHeader> -->
  <component :is="isMobile ? AppHeaderMobile : AppHeader"></component>
  <div class="max-md:pt-14">
    <RouterView class=""></RouterView>
  </div>
  <AppFooter></AppFooter>
</template>

<style scoped></style>
