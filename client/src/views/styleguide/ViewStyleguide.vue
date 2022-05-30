<script lang="ts">
export default {
  name: "ViewStyleguide",
  title: "Styleguide",
};
</script>
<script setup lang="ts">
import Page from "@/components/page/ComponentBasicPage.vue";
import TabLink from "@/components/modules/link-button/ModuleTabLink.vue";

const links = [
  {
    id: "oih989",
    link: "/styleguide",
  },
  {
    id: "oih989",
    link: "/styleguide/typography",
  },
  {
    id: "iugh87jhg65uhg",
    link: "/styleguide/link-button",
  },
  {
    id: "7676jhvj67bdzkjb",
    link: "/styleguide/module",
  },
];
</script>

<template>
  <Page
    title="Styleguide"
    subtitle="toutes les couleurs, les styles et les modules disponible pour le site"
  >
    <div class="styleguide container mx-auto">
      <TabLink :urls="links" extra-class="styleguide__nav" />
      <router-view></router-view>
    </div>
  </Page>
</template>
