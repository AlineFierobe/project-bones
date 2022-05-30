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
      fontColor ? fontColor + '-color' : 'dark-color',
      bgColor ? bgColor + '-bg-highlight inline justify-self-start' : '',
      extraClass ? extraClass : '',
    ]"
  >
    {{ content }}
  </component>
</template>
