<script lang="ts">
export default {
  name: "ModuleTitleSubtitleLeft",
};
</script>

<script setup lang="ts">
import BlockContainerInPage from "@/components/block/ComponentBlockContainerInPage.vue";
import Typography from "@/components/modules/typography/ModuleTypography.vue";

defineProps<{
  title: string | number;
  subtitle?: string | number;
  titleColor?: string;
  titleBgColor?: string;
  subtitleColor?: string;
  tagTitle?: string;
  tagSubtitle?: string;
}>();
</script>

<template>
  <BlockContainerInPage :is-center="false" :is-section="true">
    <Typography
      :tag="tagTitle ? tagTitle : 'h1'"
      :content="title"
      :font-color="titleColor ? titleColor : ''"
      font-style="headline2"
      :class="titleBgColor ? titleBgColor + '-bg-highlight' : ''"
      extra-class="inline mr-auto"
    />
    <Typography
      v-if="subtitle"
      :tag="tagSubtitle ? tagSubtitle : 'span'"
      :content="subtitle"
      :font-color="subtitleColor ? subtitleColor : ''"
      font-style="subtitle2"
    />
  </BlockContainerInPage>
</template>
