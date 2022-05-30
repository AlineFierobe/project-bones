<script lang="ts">
export default {
  name: "ModuleTabLink",
};
</script>

<script setup lang="ts">
defineProps<{
  urls: Array<{ id: string; link: string }>;
  extraClass?: string;
}>();
</script>

<template>
  <nav :class="['tab-nav', extraClass ? extraClass : '', 'inline', 'p-4']">
    <router-link
      v-for="url in urls"
      :key="url.id"
      :to="url.link"
      custom
      v-slot="{ href, route, navigate, isExactActive }"
    >
      <a
        :href="href"
        @click="navigate"
        :class="['link-nav-secondary', isExactActive ? 'isActive' : '']"
        >{{ route.name }}</a
      >
    </router-link>
  </nav>
</template>
