<script lang="ts">
export default {
  name: "ComponentPageFullWidth",
};
</script>

<script setup lang="ts">
import Title from "@/components/modules/typography/ModuleTitleSubtitle.vue";
import BlockFullWidth from "@/components/block/ComponentBlockFullWidth.vue";
defineProps<{
  title: string;
  subtitle?: string;
}>();
</script>

<template>
  <BlockFullWidth :is-section="false">
    <Title
      :title="title"
      :subtitle="subtitle ? subtitle : ''"
      title-bg-color="primary-1"
      title-color="dark-1"
      subtitle-color="gray-1"
    />
    <slot></slot>
  </BlockFullWidth>
</template>
