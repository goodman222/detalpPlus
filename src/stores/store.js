import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useWindowSize } from "@vueuse/core";

export const useStore = defineStore("store", () => {
  const isMenuOpen = ref(false);
  function menuStateChange() {
    isMenuOpen.value = !isMenuOpen.value;
    if (isMenuOpen.value) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }

  const { width } = useWindowSize();
  const isMobile = computed(() => width.value < 852);
  return { isMenuOpen, menuStateChange, isMobile };
});
