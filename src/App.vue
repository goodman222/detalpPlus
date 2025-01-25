<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header></header>
  <RouterLink to="/">Go to Home</RouterLink>
  <RouterLink to="/about">Go to About</RouterLink>
  <RouterView></RouterView>
</template>

<style scoped></style>
