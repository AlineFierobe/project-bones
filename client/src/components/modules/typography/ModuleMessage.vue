<script lang="ts">
export default {
  name: "ModuleMessage",
};
</script>

<script setup lang="ts">
defineProps<{
  typeMessage: string;
  content: string;
}>();
</script>

<template>
  <div :class="'message-' + typeMessage">
    <i
      :class="[
        'text-3xl',
        'fa-solid',
        typeMessage == 'warning'
          ? ' fa-triangle-exclamation'
          : typeMessage == 'important'
          ? 'fa-bullhorn'
          : typeMessage == 'validation'
          ? 'fa-circle-check'
          : '',
      ]"
    ></i>
    {{ content }}
  </div>
</template>
