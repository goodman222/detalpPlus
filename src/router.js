import { createWebHistory, createRouter } from "vue-router";

import HomeView from "./components/view/HomeView.vue";
import AboutView from "./components/view/AboutView.vue";
import WorkTypesView from "./components/view/WorkTypesView.vue";
import EquipmentView from "./components/view/EquipmentView.vue";
import OurPartnersView from "./components/view/OurPartnersView.vue";
import ContactsView from "./components/view/ContactsView.vue";
import FeedbackView from "./components/view/FeedbackView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
  { path: "/workTypes", component: WorkTypesView },
  { path: "/equipment", component: EquipmentView },
  { path: "/ourPartners", component: OurPartnersView },
  { path: "/contacts", component: ContactsView },
  { path: "/feedback", component: FeedbackView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
