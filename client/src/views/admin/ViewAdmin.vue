<script lang="ts">
export default {
  name: "ViewAdmin",
  title: "Panneau Administration",
};
</script>
<script setup lang="ts">
import PageAdmin from "@/components/page/ComponentPageAdmin.vue";

const tabs = [
  {
    id: "1",
    link: "/admin",
    name: "Dashboard",
  },
  {
    id: "2",
    link: "/config",
    name: "Config",
  },
  {
    id: "3",
    link: "/azerty",
    name: "Formulaires",
  },
  {
    id: "4",
    link: "/crud-lorem",
    name: "lorem",
  },
];
</script>

<template>
  <PageAdmin title="Panneau d'Administration" :urls="tabs" :has-tab-left="true">
    <router-view></router-view>
  </PageAdmin>
</template>
