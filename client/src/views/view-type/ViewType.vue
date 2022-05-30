<script lang="ts">
export default {
  name: "ViewType",
  title: "Page Type",
};
</script>
<script setup lang="ts">
import Accordion from "@/components/modules/accordion/ModuleAccordion.vue";
import Page from "@/components/page/ComponentBasicPage.vue";
import BlockContainer from "@/components/block/ComponentBlockContainer.vue";
import Typography from "../../components/modules/typography/ModuleTypography.vue";

const list = [
  {
    itemId: "uboub97676g",
    question: "Etiam aliquam vel elit a varius.",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget varius justo. Nam id justo porttitor magna dapibus tincidunt et nec velit. Mauris congue, nisl eget mollis luctus, tellus urna elementum magna, eget condimentum libero felis vitae velit. Etiam laoreet cursus mi, eget condimentum dui accumsan sit amet. Nullam tristique felis eu metus placerat, vel ornare leo ultricies. Etiam sollicitudin convallis leo sed mollis. In ac enim nisi.",
  },
  {
    itemId: "ojbfe8676zzb",
    question: "Maecenas quis ipsum mi ?",
    answer:
      "Nunc pharetra quam nec nunc molestie, eu ullamcorper lacus iaculis. Donec ut justo vitae felis rhoncus tempor. Sed et lorem accumsan tortor viverra vestibulum. Integer eget lobortis purus. In facilisis urna in mattis lacinia. Sed semper fringilla nisl non ultricies. Donec turpis felis, pharetra sit amet nisl nec, venenatis scelerisque enim. Cras interdum sed lectus eget finibus. Praesent et ipsum et leo semper viverra. Ut imperdiet mauris eu ullamcorper feugiat. Phasellus id tincidunt enim, ut venenatis nulla. Maecenas tincidunt vestibulum libero, ullamcorper facilisis metus ornare id. Morbi pretium, elit vel pulvinar tincidunt, felis nisl sodales nisl, placerat rutrum nisi tortor in arcu. Vestibulum nec accumsan dolor. In non posuere diam.",
  },
  {
    itemId: "108hjbdzehv",
    question: "Phasellus id tincidunt enim ?",
    answer: `Suspendisse quam purus, tempus ac viverra eu, viverra a quam. Phasellus convallis tempor lacus quis luctus. Integer ut condimentum ligula. Nulla id orci at purus commodo suscipit quis in dui. Morbi dapibus, est sed commodo ultricies, sem magna tristique turpis, egestas interdum nunc neque nec mauris. Fusce at tincidunt urna. Donec tempor lectus turpis, eget tempus nulla varius a. Vestibulum et tempor tellus.

    Nullam dignissim tempus eros quis auctor. Etiam aliquam vel elit a varius. Sed aliquam lectus in porta tincidunt. Curabitur quis consequat libero. Donec ultricies erat id arcu euismod, non elementum odio viverra. Sed et felis nulla. Etiam sem turpis, mollis nec viverra in, luctus eget mauris.`,
  },
];
const modelePage = `<Page title="texte du h1" subtitle="Sous-titre si besoin (facultatif)">

// CONTENU DE LA PAGE ICI
// LA COULEUR, LES STYLES DU TITRE, DU SOUS-TITRE ET LE SOULIGNEMENT SONT AUTOMATISÉS DANS LE COMPONENT POUR TOUTES LES PAGES UTILISANT CE MODÈLE

</Page>`;
</script>

<template>
  <Page title="Page Type" subtitle="voici un exemple de page standard">
    <!-- HOW TO USE -->
    <BlockContainer :is-section="true" bg-color="gray">
      <Typography
        tag="div"
        content="comment utiliser le modèle : Page"
        font-color="dark"
        font-style="headline3"
        extra-class="mb-4"
      />
      <Typography
        tag="div"
        content='import Page from "@/components/page/ComponentBasicPage.vue";'
      />
      <Typography tag="div" :content="modelePage" />
    </BlockContainer>

    <!-- FAQ  -->
    <BlockContainer :is-section="true">
      <Accordion
        v-for="item in list"
        :key="item.itemId"
        :itemId="item.itemId"
        :title="item.question"
        :content="item.answer"
        fontAwesome="double-chevron"
        icon-color="ternary"
        border-color="gray"
      />
    </BlockContainer>
  </Page>
</template>
