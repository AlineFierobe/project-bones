<script lang="ts">
export default {
  name: "ModuleInput",
};
</script>

<script setup lang="ts">
defineProps<{
  inputType: string;
  name: string;
  inputId?: string;
  placeholder?: string;
}>();
</script>

<template>
  <input
    :type="inputType"
    :name="name"
    :id="inputId ? inputId : name"
    :placeholder="placeholder ? placeholder : ''"
  />
</template>
