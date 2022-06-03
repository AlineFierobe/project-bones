<script lang="ts">
export default {
  name: "SectionModule",
  title: "Section Modules",
};
</script>

<script setup lang="ts">
import Typography from "@/components/modules/typography/ModuleTypography.vue";
import BlockContainer from "@/components/block/ComponentBlockContainer.vue";
import Accordion from "@/components/modules/accordion/ModuleAccordion.vue";
import TabLink from "@/components/modules/link-button/ModuleTabLink.vue";

const accordion = [
  {
    id: "obhou09890",
    title: "font-awesome : chevron (icon par défaut si rien n'est précisé)",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis accumsan pharetra. Maecenas mattis iaculis dui. Curabitur odio purus, convallis pellentesque arcu nec, ullamcorper pharetra ex. Aenean risus nibh, rutrum non orci vitae, vehicula imperdiet augue. Nam euismod nibh ac suscipit vehicula. Ut condimentum, lectus at fringilla lacinia, diam libero ctus viverra egestas. Maecenas bibendum augue vehicula bibendum varius. Sed posuere bibendum felis et mattis.",
    icon: "chevron",
    iconColor: "primary",
    borderColor: "primary",
  },
  {
    id: "oiuhfe9898",
    title: "font-awesome : double-chevron",
    content:
      "Mauris lacinia eros et urna tincidunt, vitae rhoncus mi facilisis. Suspendisse sit amet blandit justo. Vestibulum mattis ultrices ullamcorper. Duis ultricies dapibus diam quis pharetra. Vestibulum quis urna cursus, luctus ipsum sollicitudin, congue velit. Quisque vitae mollis erat. Curabitur egestas nunc arcu, et fermentum lectus viverra egestas. Maecenas bibendum augue vehicula bibendum varius. Sed posuere bibendum felis et mattis.",
    icon: "double-chevron",
    iconColor: "secondary",
    borderColor: "secondary",
  },
  {
    id: "iuheif9898",
    title: "icon : arrow (open par défaut)",
    content:
      "Donec eleifend, mi eget euismod congue, velit purus maximus diam, nec congue orci nibh vehicula sapien. Phasellus mauris orci, eleifend vel laoreet at, hendrerit vel est. Morbi placerat, leo eu pharetra vehicula, ex enim molestie eros, in cursus metus nulla nec nisi. Ut iaculis elit in quam pretium posuere quis vitae quam. Vivamus a mollis dui, sed posuere leo. Etiam lorem nisi, tempor vitae scelerisque eu, lacinia nec metus. Praesent ultricies condimentum risus, et scelerisque enim mollis cursus. Quisque maximus massa id dui auctor, sed vehicula turpis ultrices. Aliquam at est ac magna facilisis aliquet.",
    icon: "arrow",
    open: "true",
    iconColor: "ternary",
    borderColor: "ternary",
  },
  {
    id: "jfjijbe98988dzdzd",
    title: "font-awesome : circle-arrow",
    content:
      "Aenean ut molestie dui. Suspendisse mollis nec mi eget suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porttitor, ipsum quis imperdiet luctus, enim velit cursus libero, non molestie magna nibh sit amet metus. Donec eros diam, sollicitudin vulputate nisi eget, euismod vestibulum nulla. In hac habitasse platea dictumst. Donec tristique accumsan lacus quis viverra. Aliquam ac nulla commodo, posuere dui et, condimentum dolor. Nam quis diam id ligula porttitor posuere. Fusce eu ante rutrum eros molestie accumsan. Curabitur cursus sem eget mauris eleifend luctus. Suspendisse consectetur augue porta ante condimentum, in lacinia nulla porttitor. Phasellus tellus mauris, tempor id felis nec, accumsan bibendum enim. Integer vitae neque mauris. Morbi ac odio a eros dapibus hendrerit sed ac urna.",
    icon: "circle-arrow",
    iconColor: "quaternary",
    borderColor: "quaternary",
  },
  {
    id: "1298jbibie989",
    title: "font-awesome : chevron-solid",
    content:
      "Phasellus at est id erat consectetur ultrices. Sed suscipit cursus nisi, sed consequat erat. Nulla rhoncus urna ut ex aliquam, sit amet commodo lorem convallis. Mauris laoreet tempor nulla et vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam nunc urna, condimentum scelerisque dignissim eu, sollicitudin interdum mauris. Ut tristique imperdiet magna et mattis. Curabitur nunc tellus, dapibus vel semper sed, porttitor sed tellus. Maecenas sollicitudin diam sit amet feugiat aliquet. Integer interdum sit amet augue et euismod. Etiam non felis eu dolor facilisis tincidunt. Mauris consequat felis non massa placerat consequat. Praesent diam dolor, lacinia sit amet bibendum eget, porta eu ipsum. Nam posuere ultricies massa interdum ultricies. Cras congue leo finibus justo aliquet, sit amet porta arcu porttitor.",
    icon: "chevron-solid",
    iconColor: "quinary",
    borderColor: "quinary",
  },
  {
    id: "ijhi8877dz",
    title: "font-awesome : chevron-solid-square",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis accumsan pharetra. Maecenas mattis iaculis dui. Curabitur odio purus, convallis pellentesque arcu nec, ullamcorper pharetra ex. Aenean risus nibh, rutrum non orci vitae, vehicula imperdiet augue. Nam euismod nibh ac suscipit vehicula. Ut condimentum, lectus at fringilla lacinia, diam libero maximus erat, at rhoncus sapien turpis vel magna. Praesent ut lorem id ipsum aliquam pellentesque eget lacinia felis. Proin eget lacinia ipsum. Curabitur porta lorem augue, eget dictum mi malesuada ac. Sed consequat cursus consectetur. Aliquam consequat tellus nec urna placerat, non aliquam lorem iaculis.",
    icon: "chevron-solid-square",
    iconColor: "sinary",
    borderColor: "sinary",
  },
  {
    id: "193846bhbd7661Bdzd",
    title: "font-awesome : rotate-arrow",
    content:
      "Mauris lacinia eros et urna tincidunt, vitae rhoncus mi facilisis. Suspendisse sit amet blandit justo. Vestibulum mattis ultrices ullamcorper. Duis ultricies dapibus diam quis pharetra. Vestibulum quis urna cursus, luctus ipsum sollicitudin, congue velit. Quisque vitae mollis erat. Curabitur egestas nunc arcu, et fermentum lectus viverra egestas. Maecenas bibendum augue vehicula bibendum varius. Sed posuere bibendum felis et mattis.",
    icon: "rotate-arrow",
    iconColor: "gray",
    borderColor: "gray",
  },
  {
    id: "oihou9898jndfjbkjb",
    title: "font-awesome : dot",
    content:
      "Donec eleifend, mi eget euismod congue, velit purus maximus diam, nec congue orci nibh vehicula sapien. Phasellus mauris orci, eleifend vel laoreet at, hendrerit vel est. Morbi placerat, leo eu pharetra vehicula, ex enim molestie eros, in cursus metus nulla nec nisi. Ut iaculis elit in quam pretium posuere quis vitae quam. Vivamus a mollis dui, sed posuere leo. Etiam lorem nisi, tempor vitae scelerisque eu, lacinia nec metus. Praesent ultricies condimentum risus, et scelerisque enim mollis cursus. Quisque maximus massa id dui auctor, sed vehicula turpis ultrices. Aliquam at est ac magna facilisis aliquet.",
    icon: "dot",
    iconColor: "dark",
    borderColor: "dark",
  },
  {
    id: "9819737hbjhd878sjb",
    title: "font-awesome : plus",
    content:
      "Aenean ut molestie dui. Suspendisse mollis nec mi eget suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porttitor, ipsum quis imperdiet luctus, enim velit cursus libero, non molestie magna nibh sit amet metus. Donec eros diam, sollicitudin vulputate nisi eget, euismod vestibulum nulla. In hac habitasse platea dictumst. Donec tristique accumsan lacus quis viverra. Aliquam ac nulla commodo, posuere dui et, condimentum dolor. Nam quis diam id ligula porttitor posuere. Fusce eu ante rutrum eros molestie accumsan. Curabitur cursus sem eget mauris eleifend luctus. Suspendisse consectetur augue porta ante condimentum, in lacinia nulla porttitor. Phasellus tellus mauris, tempor id felis nec, accumsan bibendum enim. Integer vitae neque mauris. Morbi ac odio a eros dapibus hendrerit sed ac urna.",
    icon: "plus",
  },
];

const modules = [
  {
    id: 2,
    name: "TabLink",
    import:
      'import TabLink from "@/components/modules/link-button/ModuleTabLink.vue";',
    use: '<TabLink :urls="LIST" extra-class="facultatif" />',
  },
  {
    id: 1,
    name: "Accordion",
    import:
      'import Accordion from "@/components/modules/accordion/ModuleAccordion.vue";',
    use: `<Accordion
      v-for="item in accordion"
      :key="item.id"
      :itemId="item.id"
      :title="item.title"
      :content="item.content"
      :font-awesome="item.icon"
      :is-open="item.open ? true : false"
      iconColor="primary"
      borderColor="gray"
    />`,
  },
];

const links = [
  {
    id: "1",
    link: "/styleguide/module/link1",
  },
  {
    id: "2",
    link: "/styleguide/module/link2",
  },
  {
    id: "3",
    link: "/styleguide/module/link3",
  },
];
</script>

<template>
  <!-- ****************************  SECTION MODULES ***************************** -->

  <!-- MODULE ACCORDION -->
  <!-- HOW TO USE  -->

  <BlockContainer :is-section="true" :is-center="false" bg-color="gray-1">
    <div v-for="item in modules" :key="item.id">
      <Typography
        tag="div"
        :content="'comment utiliser le module : ' + item.name"
        font-color="dark-1"
        font-style="headline3"
        extra-class="mb-4"
      />
      <Typography tag="div" :content="item.import" />
      <Typography tag="div" :content="item.use" extra-class="mb-9" />
    </div>
  </BlockContainer>

  <!-- DEMO MODULE TABLINK -->
  <BlockContainer :is-section="true" :is-center="false">
    <TabLink :urls="links" />
  </BlockContainer>

  <!-- DEMO MODULE ACCORDION -->
  <BlockContainer
    :is-section="true"
    :is-center="false"
    extra-class="grid-cols-2 gap-5"
  >
    <Accordion
      v-for="item in accordion"
      :key="item.id"
      :itemId="item.id"
      :title="item.title"
      :content="item.content"
      :font-awesome="item.icon"
      :is-open="item.open ? true : false"
      :border-color="item.borderColor ? item.borderColor : ''"
      :icon-color="item.iconColor ? item.iconColor : ''"
    />
  </BlockContainer>
</template>
