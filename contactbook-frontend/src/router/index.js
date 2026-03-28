import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";
import { p } from "vue-router/dist/router-CWoNjPRp.mjs";

const routes = [
  {
    path: "/",
    name: "ContactBook",
    component: ContactBook,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
  },
  {
    path: "/contact/:id",
    name: "contact.edit",
    component: () => import("@/views/ContactEdit.vue"),
    props: true,
  },
  {
    path: "/contact/create",
    name: "contact.create",
    component: () => import("@/views/ContactCreate.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
