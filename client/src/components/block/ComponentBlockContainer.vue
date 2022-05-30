<script lang="ts">
export default {
  name: "ComponentBlockContainer",
};
</script>

<script setup lang="ts">
defineProps<{
  isSection: boolean;
  isCenter?: boolean;
  bgColor?: string;
  extraClass?: string;
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
      'my-9',
      isCenter ? 'justify-center text-center' : 'justify-start',
      bgColor ? bgColor + '-bg-color p-10' : '',
      extraClass ? extraClass : '',
    ]"
  >
    <slot></slot>
  </component>
</template>
