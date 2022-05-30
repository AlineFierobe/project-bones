<script lang="ts">
export default {
  name: "BasicPage",
};
</script>

<script setup lang="ts">
import Title from "@/components/modules/typography/ModuleTitleSubtitle.vue";
defineProps<{
  title: string;
  subtitle?: string;
}>();
</script>

<template>
  <Title
    :title="title"
    :subtitle="subtitle ? subtitle : ''"
    title-bg-color="primary"
    title-color="dark"
    subtitle-color="gray"
  />
  <slot></slot>
</template>
