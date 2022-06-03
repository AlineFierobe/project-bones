<script lang="ts">
export default {
  name: "ComponentPage",
};
</script>

<script setup lang="ts">
import Title from "@/components/modules/typography/ModuleTitleSubtitle.vue";
import BlockContainer from "@/components/block/ComponentBlockContainer.vue";
defineProps<{
  title: string;
  subtitle?: string;
}>();
</script>

<template>
  <BlockContainer :is-section="false">
    <Title
      :title="title"
      :subtitle="subtitle ? subtitle : ''"
      title-bg-color="secondary"
      title-color="dark-2"
      subtitle-color="gray-2"
    />
    <slot></slot>
  </BlockContainer>
</template>
