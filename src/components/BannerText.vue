<script setup>
// import { ref, onMounted } from "vue";

// const textBlock = ref(null);

// onMounted(() => {
//   const observer = new IntersectionObserver(
//     (entries) => {
//       if (entries[0].isIntersecting) {
//         textBlock.value.classList.add("visible");
//       }
//     },
//     { threshold: 0.2 } // Когда 20% блока появится на экране
//   );

//   if (textBlock.value) {
//     observer.observe(textBlock.value);
//   }
// });
</script>

<template>
  <h1
    v-textSlide
    class="text font-bowler text-white h-auto text-3xl max-md:text-xl"
  >
    <slot></slot>
  </h1>
</template>

<style scoped>
/* .text {
  opacity: 0;
  transform: translateX(100px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.text.visible {
  opacity: 1;
  transform: translateX(0);
} */
</style>
