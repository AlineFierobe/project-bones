<script lang="ts">
export default {
  name: "moduleTypography",
};
</script>

<script setup lang="ts">
defineProps<{
  content: string | number;
  tag?: string;
  fontStyle?: string;
  fontColor?: string;
  bgColor?: string;
  extraClass?: string;
}>();
</script>

<template>
  <component
    :is="tag ? tag : 'span'"
    :class="[
      fontStyle ? fontStyle : 'body1',
      fontColor ? fontColor : 'dark-2',
      bgColor ? 'bg-highlight-' + bgColor + ' inline justify-self-start' : '',
      extraClass ? extraClass : '',
    ]"
  >
    {{ content }}
  </component>
</template>
