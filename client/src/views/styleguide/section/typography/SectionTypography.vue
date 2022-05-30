<script lang="ts">
export default {
  name: "SectionTypography",
  title: "Section Typography",
};
</script>
<script setup lang="ts">
import BlockContainer from "@/components/block/ComponentBlockContainer.vue";
import Typography from "@/components/modules/typography/ModuleTypography.vue";
import Quote from "@/components/modules/typography/ModuleQuote.vue";
import Message from "@/components/modules/typography/ModuleMessage.vue";

const typo = [
  {
    id: 1,
    name: "headline1",
    content: "Lorem ipsum dolor sit amet",
  },
  {
    id: 2,
    name: "headline2",
    content: "Lorem ipsum dolor sit amet",
  },
  {
    id: 3,
    name: "headline3",
    content: "Lorem ipsum dolor sit amet",
  },
  {
    id: 4,
    name: "headline4",
    content: "Lorem ipsum dolor sit amet",
  },
  {
    id: 5,
    name: "headline5",
    content: "Lorem ipsum dolor sit amet",
  },
  {
    id: 6,
    name: "headline6",
    content: "Lorem ipsum dolor sit amet",
  },
  {
    id: 7,
    name: "subtitle1",
    content: "Lorem ipsum dolor sit amet",
  },
  {
    id: 8,
    name: "subtitle2",
    content: "Lorem ipsum dolor sit amet",
  },
  {
    id: 9,
    name: "subtitle3",
    content: "Lorem ipsum dolor sit amet",
  },
  {
    id: 10,
    name: "subtitle4",
    content: "Lorem ipsum dolor sit amet",
  },
  {
    id: 11,
    name: "body1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis accumsan pharetra. Maecenas mattis iaculis dui. Curabitur odio purus, convallis pellentesque arcu nec, ullamcorper pharetra ex. Aenean risus nibh, rutrum non orci vitae, vehicula imperdiet augue. Nam euismod nibh ac suscipit vehicula. Ut condimentum, lectus at fringilla lacinia, diam libero maximus erat, at rhoncus sapien turpis vel magna. Praesent ut lorem id ipsum aliquam pellentesque eget lacinia felis. Proin eget lacinia ipsum. Curabitur porta lorem augue, eget dictum mi malesuada ac. Sed consequat cursus consectetur. Aliquam consequat tellus nec urna placerat, non aliquam lorem iaculis.",
  },
  {
    id: 12,
    name: "body2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis accumsan pharetra. Maecenas mattis iaculis dui. Curabitur odio purus, convallis pellentesque arcu nec, ullamcorper pharetra ex. Aenean risus nibh, rutrum non orci vitae, vehicula imperdiet augue. Nam euismod nibh ac suscipit vehicula. Ut condimentum, lectus at fringilla lacinia, diam libero maximus erat, at rhoncus sapien turpis vel magna. Praesent ut lorem id ipsum aliquam pellentesque eget lacinia felis. Proin eget lacinia ipsum. Curabitur porta lorem augue, eget dictum mi malesuada ac. Sed consequat cursus consectetur. Aliquam consequat tellus nec urna placerat, non aliquam lorem iaculis.",
  },
  {
    id: 13,
    name: "smallprint",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis accumsan pharetra. Maecenas mattis iaculis dui. Curabitur odio purus, convallis pellentesque arcu nec, ullamcorper pharetra ex",
  },
];
const font = [
  {
    id: 1,
    name: "primary-font : Yanone Kaffeesatz",
  },
  {
    id: 2,
    name: "secondary-font : Josefin Sans",
  },
];
const typeMessage = [
  {
    id: 1,
    name: "important",
    content:
      "IMPORTANT. Ceci est une annonce important ! Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis accumsan pharetra. Maecenas mattis iaculis dui. Curabitur odio purus, convallis pellentesque arcu nec, ullamcorper pharetra ex",
  },
  {
    id: 2,
    name: "warning",
    content:
      "WARNING. Ceci est un message d'alerte ! Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis accumsan pharetra. Maecenas mattis iaculis dui. Curabitur odio purus, convallis pellentesque arcu nec, ullamcorper pharetra ex",
  },
  {
    id: 3,
    name: "validation",
    content:
      "VALIDATION. Ceci est un message de validation ! Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis accumsan pharetra. Maecenas mattis iaculis dui. Curabitur odio purus, convallis pellentesque arcu nec, ullamcorper pharetra ex",
  },
];
const myModules = [
  {
    id: 1,
    name: "Title",
    import: `import Title from "@/components/modules/typography/ModuleTitleSubtitle.vue";`,
    content: `<Title
    title="Links & Buttons"
    titleColor="dark"
    subtitle="toutes les class disponibles pour ce site"
    subtitleColor="primary"
    title-bg-color="ternary"
  />`,
  },
  {
    id: 2,
    name: "Typography",
    import: `import Typography from "@/components/modules/typography/ModuleTypography.vue";`,
    content: `<Typography tag="div" content="mon super contenu ici" font-color="primary" font-style="body1" bg-color="primary" />`,
  },
  {
    id: 3,
    name: "Quote",
    import: `import Quote from "@/components/modules/typography/ModuleQuote.vue";`,
    content: `<Quote border-color="gray">
      <Typography tag="div" content="mon super contenu ici" font-color="primary" font-style="quote" />
    </Quote>`,
  },
  {
    id: 4,
    name: "Message",
    import: `import Message from "@/components/modules/typography/ModuleMessage.vue";`,
    content: `<Message
      content="mon message super important"
      type-message="warning"
    />`,
  },
];
</script>

<template>
  <!-- ****************************  SECTION TYPOGRAPHY ***************************** -->
  <!-- HOW TO USE -->
  <BlockContainer :is-section="true" :is-center="false" bg-color="gray">
    <Typography
      tag="div"
      content="les polices disponibles"
      font-color="dark"
      font-style="headline3"
      extra-class="mb-4"
    />
    <Typography
      v-for="item in font"
      :key="item.id"
      tag="span"
      :content="item.name"
      font-style="subtitle4"
    />

    <div v-for="item in myModules" :key="item.id">
      <Typography
        tag="div"
        :content="'comment utiliser le module : ' + item.name"
        font-color="dark"
        font-style="headline3"
        extra-class="mt-9 mb-4"
      />
      <Typography tag="div" :content="item.import" />
      <Typography tag="div" :content="item.content" />
    </div>
  </BlockContainer>

  <!-- TYPOGRAPHY -->
  <BlockContainer
    :is-center="false"
    :is-section="true"
    extra-class="grid md:grid-cols-2 py-14"
  >
    <div v-for="item in typo" :key="item.id" class="m-5">
      <Typography tag="div" :content="item.name" :font-style="item.name" />
      <Typography tag="div" :content="item.content" :font-style="item.name" />
    </div>
    <Quote border-color="gray">
      <Typography
        tag="div"
        content="quote"
        font-style="subtitle3"
        font-color="gray"
      />
      <Typography tag="div" :content="typo[10].content" font-style="quote" />
    </Quote>
    <Message
      v-for="item in typeMessage"
      :key="item.id"
      :content="item.content"
      :type-message="item.name"
    />
  </BlockContainer>
</template>
