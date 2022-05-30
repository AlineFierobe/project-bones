<script lang="ts">
export default {
  name: "ModuleTitle",
};
</script>

<script setup lang="ts">
import BlockContainer from "@/components/block/ComponentBlockContainer.vue";
import Typography from "@/components/modules/typography/ModuleTypography.vue";

defineProps<{
  title: string | number;
  subtitle?: string | number;
  titleColor?: string;
  titleBgColor?: string;
  subtitleColor?: string;
}>();
</script>

<template>
  <BlockContainer
    :is-center="true"
    :is-section="true"
    extra-class="text-center mb-10"
  >
    <Typography
      tag="h1"
      :content="title"
      :font-color="titleColor ? titleColor : ''"
      font-style="headline1"
      :class="titleBgColor ? titleBgColor + '-bg-highlight' : ''"
      extra-class="inline-block mx-auto"
    />
    <Typography
      v-if="subtitle"
      tag="div"
      :content="subtitle"
      :font-color="subtitleColor ? subtitleColor : ''"
      font-style="subtitle2"
    />
  </BlockContainer>
</template>
