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
      path: "/admin",
      name: "Admin",
      component: () => import("@/views/admin/ViewAdmin.vue"),
      children: [
        {
          path: "/admin",
          name: "Dashboard",
          component: () => import("@/views/admin/section/admin-overview/SectionOverview.vue"),
        },
        {
          path: "/config",
          name: "Config",
          component: () => import("@/views/admin/section/config/SectionConfig.vue"),
        },
        {
          path: "/crud-lorem",
          name: "Lorem",
          component: () => import("@/views/admin/section/crud-lorem/SectionCrudLorem.vue"),
        },
        {
          path: "/azerty",
          name: "Forms",
          component: () => import("@/views/admin/section/form-crud/SectionFormCrud.vue"),
        },
      ]
    },
    {
      path: "/404",
      name: "OUPS",
      component: () => import("@/views/404/404.vue"),
    },
    {
      path: "/view-type",
      name: "Page Type",
      component: () => import("@/views/view-type/ViewType.vue"),
    },
    // STYLEGUIDE
    {
      path: "/styleguide",
      name: "Styleguide",
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
        // FORM
        {
          path: "/styleguide/form",
          name: "Formulaires",
          component: () =>
            import("@/views/styleguide/section/form/SectionForm.vue"),
        },
        // MODULE
        {
          path: "/styleguide/module",
          name: "Modules",
          component: () =>
            import("@/views/styleguide/section/module/SectionModule.vue"),
          children: [
            {
              path: "/styleguide/module/link1",
              name: "Tab 1",
              component: () => import("@/views/404/404.vue"),
            },
            {
              path: "/styleguide/module/link2",
              name: "Tab 2",
              component: () => import("@/views/404/404.vue"),
            },
            {
              path: "/styleguide/module/link3",
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
