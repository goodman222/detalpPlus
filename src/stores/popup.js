import { defineStore } from "pinia";
import { computed, ref, shallowRef } from "vue";
import Logo from "../components/Logo.vue";
export const usePopupStore = defineStore("popup", () => {
  const isOpen = ref(false);
  const popupContent = ref(null);
  function openPopup(component) {
    isOpen.value = true;
    popupContent.value = component;
  }
  function closePopup() {
    isOpen.value = false;
  }
  return { isOpen, openPopup, closePopup, popupContent };
});
