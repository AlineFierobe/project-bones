<script lang="ts">
export default {
  name: "ComponentPageSubMenu",
};
</script>

<script setup lang="ts">
import TitleTabLink from "@/components/modules/link-button/ModuleTitleTabLink.vue";
import BlockContainer from "@/components/block/ComponentBlockContainer.vue";
defineProps<{
  title: string;
  urls: Array<{ id: string; link: string; hasChildren?: boolean }>;
  extraClassContainer?: string | Array<string>;
  extraClassTabs?: string | Array<string>;
}>();
</script>

<template>
  <BlockContainer :is-section="false" :extra-class="extraClassContainer">
    <TitleTabLink
      :title="title"
      :urls="urls"
      link-style="secondary"
      :extra-class="extraClassTabs ? extraClassTabs : ''"
    />
    <slot></slot>
  </BlockContainer>
</template>
