import { createApp } from "vue";
import "./style.css";
import { createPinia } from "pinia";
import router from "./router";
import App from "./App.vue";
const pinia = createPinia();

createApp(App)
  .use(pinia)
  .use(router)
  .directive("textSlide", {
    mounted(el, binding) {
      //   el.classList.add("scroll-animate"); // Базовый класс

      // Опции из binding.value или стандартные значения
      //   const { direction = "right", delay = 0 } = binding.value || {};

      // Добавляем анимацию в зависимости от направления
      el.style.transform = "translateX(-100px)";

      el.style.opacity = "0";
      el.style.transition = `opacity 0.6s ease-out 0.6s, transform 0.6s ease-out 0.6s`;

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            el.style.opacity = "1";
            el.style.transform = "translateX(0) translateY(0)";
          }
        },
        { threshold: 0.2 }
      );

      observer.observe(el);
    },
  })
  .mount("#app");
