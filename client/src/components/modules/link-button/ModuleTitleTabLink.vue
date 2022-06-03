<script lang="ts">
export default {
  name: "ModuleTitleTabLink",
};
</script>

<script setup lang="ts">
import Typography from "@/components/modules/typography/ModuleTypography.vue";
defineProps<{
  title: string;
  urls: Array<{ id: string; link: string; hasChildren?: boolean }>;
  linkStyle?: string;
  extraClass?: string | Array<string>;
}>();
</script>

<template>
  <nav
    :class="[
      linkStyle == 'secondary' ? 'tab-nav' : '',
      extraClass ? extraClass : '',
      'flex',
      'gap-20',
    ]"
  >
    <Typography :content="title" tag="h1" font-style="headline1" />
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
          linkStyle ? 'link-nav-' + linkStyle : 'link-nav-primary',
          url.hasChildren && isActive ? 'isActive' : '',
          isExactActive ? 'isActive' : '',
        ]"
        >{{ route.name }}</a
      >
    </router-link>
  </nav>
</template>
