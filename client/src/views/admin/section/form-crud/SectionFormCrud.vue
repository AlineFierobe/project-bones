<script lang="ts">
export default {
  name: "SectionCrudForm",
  title: "Gestion des Formulaire",
};
</script>
<script setup lang="ts">
import BlockContainer from "@/components/block/ComponentBlockContainerInPage.vue";
import Typography from "@/components/modules/typography/ModuleTypography.vue";

const text =
  "Mauris lacinia eros et urna tincidunt, vitae rhoncus mi facilisis. Suspendisse sit amet blandit justo. Vestibulum mattis ultrices ullamcorper. Duis ultricies dapibus diam quis pharetra. Vestibulum quis urna cursus, luctus ipsum sollicitudin, congue velit. Quisque vitae mollis erat. Curabitur egestas nunc arcu, et fermentum lectus viverra egestas. Maecenas bibendum augue vehicula bibendum varius. Sed posuere bibendum felis et mattis.";
</script>

<template>
  <BlockContainer :is-section="true">
    <Typography :content="text" font-style="body1" />
  </BlockContainer>
</template>
