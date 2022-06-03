<script lang="ts">
export default {
  name: "ComponentPageSubMenuVertical",
};
</script>

<script setup lang="ts">
import TitleTabLinkVertical from "@/components/modules/link-button/ModuleTabLinkVertical.vue";
import BlockContainer from "@/components/block/ComponentBlockContainer.vue";
import Typography from "@/components/modules/typography/ModuleTypography.vue";
import ComponentBlockContainerInPage from "../block/ComponentBlockContainerInPage.vue";
defineProps<{
  title: string;
  urls: Array<{
    id: string;
    name?: string;
    link: string;
    hasChildren?: boolean;
  }>;
  extraClass?: string | Array<string>;
  hasTabLeft?: boolean;
}>();
</script>

<template>
  <ComponentBlockContainerInPage :is-section="true" v-if="title">
    <Typography
      tag="h1"
      font-style="headline1"
      :content="title"
      bg-color="secondary"
      font-color="dark-2"
      extra-class="mr-auto mt-5"
    />
  </ComponentBlockContainerInPage>
  <BlockContainer
    :is-section="false"
    :has-tab-left="hasTabLeft ? hasTabLeft : false"
    extra-class="h-full md:grid-cols-auto/1"
  >
    <div class="tab-nav-vertical mr-5 mb-24">
      <TitleTabLinkVertical
        :title="title"
        :urls="urls"
        extra-class="sticky top-12rem"
      />
    </div>
    <section :class="extraClass ? extraClass : ''">
      <slot></slot>
    </section>
  </BlockContainer>
</template>
