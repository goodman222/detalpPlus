<script setup>
import { RouterView } from "vue-router";
import { computed } from "vue";
import AppHeader from "./components/AppHeader.vue";
import AppHeaderMobile from "./components/AppHeaderMobile.vue";
import AppFooter from "./components/AppFooter.vue";
import CommonPopup from "./components/CommonPopup.vue";

import { useStore } from "./stores/store.js";
import { usePopupStore } from "./stores/popup.js";
const popupStore = usePopupStore();

const store = useStore();
const isMobile = computed(() => store.isMobile);
</script>

<template>
  <component :is="isMobile ? AppHeaderMobile : AppHeader"></component>
  <div class="max-md:pt-14">
    <RouterView class=""></RouterView>
  </div>
  <AppFooter></AppFooter>
  <CommonPopup v-if="popupStore.isOpen"></CommonPopup>
</template>

<style scoped></style>
