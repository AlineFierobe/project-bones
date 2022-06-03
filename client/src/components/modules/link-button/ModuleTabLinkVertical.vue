<script lang="ts">
export default {
  name: "ModuleTabLinkVertical",
};
</script>

<script setup lang="ts">
defineProps<{
  urls: Array<{
    id: string;
    name?: string;
    link: string;
    hasChildren?: boolean;
  }>;
  extraClass?: string;
}>();
</script>

<template>
  <nav
    :class="[
      extraClass ? extraClass : '',
      'inline',
      'flex',
      'flex-col',
      'gap-10',
    ]"
  >
    <router-link
      v-for="url in urls"
      :key="url.id"
      :to="url.link"
      custom
      v-slot="{ href, route, navigate, isExactActive, isActive }"
    >
      <a
        :href="href"
        @click="navigate"
        :class="[
          'link-nav-vertical',
          url.hasChildren && isActive ? 'isActive' : '',
          isExactActive ? 'isActive' : '',
        ]"
        >{{ url.name ? url.name : route.name }}</a
      >
    </router-link>
  </nav>
</template>
