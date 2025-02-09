<script setup>
import RedHeader from "../RedHeader.vue";
</script>
<template>
  <section
    class="md:bg-grey-background py-12 flex justify-between items-center flex-col w-full max-md:px-3.5"
  >
    <div
      class="flex flex-col justify-between items-center max-w-(--page) w-full"
    >
      <RedHeader>Наши клиенты</RedHeader>
      <div
        class="flex flex-row justify-between items-center w-full mt-6 max-md:grid max-md:grid-rows-2 max-md:grid-cols-[repeat(2,auto)] max-md:justify-items-center max-md:gap-3.5 max-md:justify-center"
      >
        <a href=""><img src="../../assets/img/clients/1.png" alt="" /></a>
        <a href=""><img src="../../assets/img/clients/2.png" alt="" /></a>
        <a href=""><img src="../../assets/img/clients/4.png" alt="" /></a>
        <a href=""><img src="../../assets/img/clients/3.png" alt="" /></a>
      </div>
    </div>
  </section>
</template>
