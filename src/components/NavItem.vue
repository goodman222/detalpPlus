<script setup>
import { RouterLink } from "vue-router";

const props = defineProps({
  href: String,
});
</script>

<template>
  <RouterLink :to="href" class="font-manrope font-normal text-sm"
    ><slot></slot
  ></RouterLink>
</template>

<style scoped></style>
