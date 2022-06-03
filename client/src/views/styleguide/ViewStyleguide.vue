<script lang="ts">
export default {
  name: "ViewStyleguide",
  title: "Styleguide",
};
</script>
<script setup lang="ts">
import PageSubMenu from "@/components/page/ComponentPageSubMenu.vue";

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
    hasChildren: true,
  },
  {
    id: "jjje88nn00jj",
    link: "/styleguide/form",
  },
];
</script>

<template>
  <PageSubMenu title="Styleguide" :urls="links">
    <router-view></router-view>
  </PageSubMenu>
</template>
