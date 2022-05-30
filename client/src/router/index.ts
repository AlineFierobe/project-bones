import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/home/ViewHome.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Accueil",
      component: HomeView,
    },
    {
      path: "/404",
      name: "OUPS",
      component: () => import("@/views/404/404.vue"),
    },
    {
      path: "/view-type",
      name: "Page Type",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/view-type/ViewType.vue"),
    },
    // STYLEGUIDE
    {
      path: "/styleguide",
      name: "Styleguide",
      // route level code-splitting
      // this generates a separate chunk (Styleguide.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/styleguide/ViewStyleguide.vue"),
      // ALL THE CHILDREN PATH IN STYLEGUIDE VIEW
      children: [
        // TYPOGRAPHY
        {
          path: "/styleguide/typography",
          name: "Typography",
          component: () =>
            import(
              "@/views/styleguide/section/typography/SectionTypography.vue"
            ),
        },
        // LINK
        {
          path: "/styleguide/link-button",
          name: "Links & Buttons",
          component: () =>
            import(
              "@/views/styleguide/section/link-button/SectionLinkButton.vue"
            ),
        },
        // COLOR
        {
          path: "/styleguide",
          name: "Colors",
          component: () =>
            import("@/views/styleguide/section/color/SectionColor.vue"),
        },
        // MODULE
        {
          path: "/styleguide/module",
          name: "Modules",
          component: () =>
            import("@/views/styleguide/section/module/SectionModule.vue"),
          children: [
            {
              path: "/link1",
              name: "Tab 1",
              component: () => import("@/views/404/404.vue"),
            },
            {
              path: "/link2",
              name: "Tab 2",
              component: () => import("@/views/404/404.vue"),
            },
            {
              path: "/link3",
              name: "Tab 3",
              component: () => import("@/views/404/404.vue"),
            },
          ],
        },
      ],
    },
    // CONNEXION
    {
      path: "/signin",
      name: "Inscription",
      component: () => import("@/views/connexion/ViewRegister.vue"),
    },
  ],
});

export default router;
