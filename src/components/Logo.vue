<script setup>
import { RouterLink } from "vue-router";
const props = defineProps({
  lightLogo: Boolean,
});

const lightLogo = props.lightLogo;
console.log(lightLogo);
</script>

<template>
  <RouterLink to="/">
    <img v-if="lightLogo" src="../assets/img/logo-light.png" alt="" />
    <img v-else src="../assets/img/logo.png" alt=""
  /></RouterLink>
</template>
