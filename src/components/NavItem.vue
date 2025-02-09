<script setup>
import { RouterLink } from "vue-router";

const props = defineProps({
  href: String,
});
</script>

<template>
  <RouterLink
    :to="href"
    class="font-manrope font-normal text-sm max-md:text-center max-md:py-5 max-md:border-b-2 max-md:border-[#BBBBBB]"
    ><slot></slot
  ></RouterLink>
</template>

<style scoped></style>
