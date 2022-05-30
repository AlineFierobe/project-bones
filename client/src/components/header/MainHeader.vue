<script lang="ts">
export default {
  name: "MainHeader",
};
</script>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import BlockFullWidth from "../block/ComponentBlockFullWidth.vue";
import LinkButton from "../modules/link-button/ModuleLinkButton.vue";

defineProps<{
  siteTitle: string;
}>();
</script>

<template>
  <header id="header">
    <BlockFullWidth
      extra-class="grid md:grid-cols-2 py-10 items-center justify-center"
      bg-color="dark"
    >
      <LinkButton url="/" :text="siteTitle" link-style="nav-title" />

      <nav class="md:justify-self-end">
        <RouterLink to="/" class="link-nav-primary light-color"
          >Home</RouterLink
        >
        <RouterLink to="/view-type" class="link-nav-primary light-color"
          >Page Type</RouterLink
        >
        <RouterLink to="/styleguide" class="link-nav-primary light-color"
          >Styleguide</RouterLink
        >
      </nav>
    </BlockFullWidth>
  </header>
</template>
