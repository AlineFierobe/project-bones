<script lang="ts">
export default {
  name: "ModuleAccordion",
};
</script>

<script setup lang="ts">
import Typography from "@/components/modules/typography/ModuleTypography.vue";

defineProps<{
  itemId: string;
  title: string;
  content: string | number;
  fontAwesome: string;
  iconSize?: string;
  maxWidth?: string;
  isOpen?: boolean;
  iconColor?: string;
  borderColor?: string;
}>();

function accordionOpen(itemId: string, fontAwesome: string) {
  const accordion = document.getElementById(itemId);
  const icon = accordion?.children[0].children[0];
  if (fontAwesome == "plus") {
    icon?.classList.toggle("fa-plus");
    icon?.classList.toggle("fa-minus");
    icon?.classList.toggle("active");
  } else {
    icon?.classList.toggle("active");
  }
  const content = accordion?.children[1];
  content?.classList.toggle("close");
}
</script>

<template>
  <div
    :class="[
      'accordion',
      borderColor ? 'wrapper-border-' + borderColor : 'wrapper-border-gray',
      'my-8',
      'pb-9',
      'h-auto',
    ]"
    :id="itemId"
  >
    <div
      class="accordion__title-line h-auto relative cursor-pointer z-10"
      @click.stop="accordionOpen(itemId, fontAwesome)"
    >
      <i
        :class="[
          isOpen ? 'active' : '',
          'accordion__icon',
          iconColor ? 'icon-color-' + iconColor : 'icon-color-primary',
          'mr-4',
          iconSize ? iconSize : 'text-2xl',
          fontAwesome == 'chevron'
            ? 'fa-solid fa-angle-right'
            : fontAwesome == 'double-chevron'
            ? 'fa-solid fa-angles-right'
            : fontAwesome == 'arrow'
            ? 'fa-solid fa-arrow-right'
            : fontAwesome == 'circle-arrow'
            ? 'fa-solid fa-circle-chevron-right'
            : fontAwesome == 'chevron-solid'
            ? 'fa-solid fa-caret-right'
            : fontAwesome == 'chevron-solid-square'
            ? 'fa-solid fa-square-caret-right'
            : fontAwesome == 'plus'
            ? 'fa-solid fa-plus'
            : fontAwesome == 'rotate-arrow'
            ? 'fa-solid fa-rotate-right'
            : fontAwesome == 'dot'
            ? 'fa-solid fa-ellipsis'
            : 'fa-solid fa-angle-right',
        ]"
      ></i>

      <Typography tag="span" font-style="subtitle4" :content="title" />
    </div>
    <Typography
      tag="div"
      font-style="body1"
      :content="content"
      :class="isOpen ? '' : 'close'"
      extra-class="accordion__content h-auto transition-all ease-linear duration-3000"
    />
  </div>
</template>
