<script setup lang="ts">
import { RouterView } from "vue-router";
import MainHeader from "@/components/header/MainHeader.vue";
import MainFooter from "@/components/footer/MainFooter.vue";

const siteTitle = "Project Bones";
const devName = "Aowlyne";
const devLink = "https://www.alinefierobe.com/";
// mongodb+srv://aowlyne:oGminJ6s-e1M@cluster0.jfuvnvu.mongodb.net/project-bones?retryWrites=true&w=majority
</script>

<template>
  <MainHeader :siteTitle="siteTitle" />

  <main id="main">
    <RouterView />
  </main>

  <MainFooter :siteTitle="siteTitle" :devName="devName" :devLink="devLink" />
</template>

<style lang="scss">
@import "@/assets/reset.scss";
@import "@/views/views.scss";
@import "@/components/components.scss";
</style>
