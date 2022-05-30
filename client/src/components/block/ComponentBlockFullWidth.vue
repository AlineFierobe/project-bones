<script lang="ts">
export default {
  name: "ComponentBlockFullWidth",
};
</script>

<script setup lang="ts">
defineProps<{
  bgColor?: string;
  extraClass?: string;
}>();
</script>

<template>
  <section
    :class="[
      'grid',
      'grid-cols-1',
      'block-full-width',
      bgColor ? bgColor + '-bg-color p-10' : '',
      extraClass ? extraClass : '',
    ]"
  >
    <slot></slot>
  </section>
</template>
