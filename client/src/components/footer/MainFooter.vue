<script lang="ts">
export default {
  name: "mainFooter",
};
</script>

<script setup lang="ts">
import LinkButton from "@/components/modules/link-button/ModuleLinkButton.vue";
import BlockFullWidth from "@/components/block/ComponentBlockFullWidth.vue";

defineProps<{
  siteTitle: string;
  devName: string;
  devLink: string;
  links?: [];
}>();
</script>

<template>
  <footer id="footer" class="footer__wrapper">
    <BlockFullWidth bg-color="gray" extra-class="p-5 flex flex-col text-center">
      <span> {{ siteTitle }}</span>
      <span class="smallprint justify-self-center">
        réalisé par
        <LinkButton
          :url="devLink"
          :text="devName"
          extraClass="footer__dev-link"
          :externalLink="true"
        />
      </span>
    </BlockFullWidth>
  </footer>
</template>
