<script lang="ts">
export default {
  name: "ModuleQuote",
};
</script>

<script setup lang="ts">
defineProps<{
  borderColor?: string;
}>();
</script>

<template>
  <p
    :class="[
      'quote',
      borderColor ? borderColor + '-border-quote' : 'gray-border-quote',
      'pr-5',
    ]"
  >
    <slot></slot>
  </p>
</template>
