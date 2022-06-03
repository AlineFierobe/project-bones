<script lang="ts">
export default {
  name: "MainHeader",
};
</script>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import BlockFullWidth from "@/components/block/ComponentBlockFullWidth.vue";
import LinkButton from "@/components/modules/link-button/ModuleLinkButton.vue";
import TabLink from "@/components/modules/link-button/ModuleTabLink.vue";

defineProps<{
  siteTitle: string;
}>();

const links = [
  {
    id: "oih989",
    link: "/",
    name: "Accueil",
  },
  {
    id: "oifezfh989",
    link: "/view-type",
    name: "Page Type",
  },
  {
    id: "7676jhvj67bdzkjb",
    link: "/styleguide",
    name: "Styleguide",
    hasChildren: true,
  },
  {
    id: "iugh8jnjo7jhg65uhg",
    link: "/admin",
    name: "Admin",
  },
];
</script>

<template>
  <header id="header" class="sticky top-0 z-50">
    <BlockFullWidth
      extra-class="grid md:grid-cols-2 py-10 items-center justify-center"
      bg-color="primary-1"
    >
      <LinkButton url="/" :text="siteTitle" link-style="nav-title" />
      <nav class="md:justify-self-end">
        <TabLink :urls="links" link-style="primary" />
      </nav>
    </BlockFullWidth>
  </header>
</template>
