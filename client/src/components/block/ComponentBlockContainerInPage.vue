<script lang="ts">
export default {
  name: "ComponentBlockContainerInPage",
};
</script>

<script setup lang="ts">
defineProps<{
  isSection: boolean;
  isCenter?: boolean;
  bgColor?: string;
  extraClass?: string | Array<string>;
}>();
</script>

<template>
  <component
    :is="isSection ? 'section' : 'div'"
    :class="[
      'container',
      'grid',
      'mx-auto',
      'grid-cols-1',
      isCenter ? 'justify-center text-center' : 'justify-start',
      bgColor ? 'bg-' + bgColor + ' p-10' : '',
      extraClass ? extraClass : '',
    ]"
  >
    <slot></slot>
  </component>
</template>
