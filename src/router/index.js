import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/posts/:id",
      name: "BlogPostDetails",
      component: () => import("../views/BlogPostDetailsView.vue"),
      props: true,
    },
    {
      path: "/create",
      name: "CreateBlogPost",
      component: () => import("../views/CreateBlogPostView.vue"),
    },
    {
      path: "/tags/:tag",
      name: "TagView",
      component: () => import("../views/TagView.vue"),
    },
  ],
});

export default router;
