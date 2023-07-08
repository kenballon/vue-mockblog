import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/posts/:id",
      name: "BlogPostDetails",
      component: () => import("../views/BlogPostDetails.vue"),
      props: true,
    },
    {
      path: "/create",
      name: "CreateBlogPost",
      component: () => import("../views/CreateBlogPost.vue"),
    },
  ],
});

export default router;
