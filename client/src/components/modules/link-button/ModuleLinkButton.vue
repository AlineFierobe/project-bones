<script lang="ts">
export default {
  name: "ModuleLinkButton",
};
</script>

<script setup lang="ts">
defineProps<{
  text: string | number;
  url: string;
  buttonStyle?: string;
  linkStyle?: string;
  extraClass?: string;
  isExternalLink?: boolean;
}>();
</script>

<template>
  <a
    :href="url"
    :class="[
      buttonStyle
        ? 'btn-' + buttonStyle
        : linkStyle
        ? 'link-' + linkStyle
        : 'link-primary',
      extraClass ? extraClass : '',
    ]"
    :target="isExternalLink ? '_blank' : ''"
    :rel="isExternalLink ? 'noreferrer noopener' : ''"
    >{{ text }}</a
  >
</template>
