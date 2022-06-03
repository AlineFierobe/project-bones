<script lang="ts">
export default {
  name: "SectionForm",
  title: "Section Formulaire",
};
</script>
<script setup lang="ts">
import BlockContainer from "@/components/block/ComponentBlockContainer.vue";
import Typography from "@/components/modules/typography/ModuleTypography.vue";
import Form from "@/components/form/ComponentForm.vue";

const form = {
  name: "formulaire d'inscription",
  inputs: [
    {
      id: "1",
      label: "first name",
      type: "text",
      name: "firstName",
      inputId: "firstName",
      placeholder: "prénom",
      required: true,
    },
    {
      id: "2",
      label: "last name",
      type: "text",
      name: "lastName",
      inputId: "lastName",
      placeholder: "nom de famille",
    },
    {
      id: "3",
      label: "date of birth",
      type: "date",
      name: "dob",
      inputId: "dob",
      required: false,
    },
    {
      id: "4",
      label: "age",
      type: "number",
      name: "age",
      inputId: "age",
      value: 0,
    },
  ],
  btnText: "envoyer",
  cols: 2,
};
</script>

<template>
  <!-- ****************************  SECTION TYPOGRAPHY ***************************** -->
  <!-- HOW TO USE -->
  <BlockContainer :is-section="true" :is-center="false" bg-color="gray-1">
    <Typography
      tag="div"
      content="Comment utiliser le module : Form "
      font-color="dark-1"
      font-style="headline3"
      extra-class="mb-4"
    />
  </BlockContainer>

  <!-- TYPOGRAPHY -->
  <BlockContainer
    :is-center="false"
    :is-section="true"
    extra-class="grid py-14"
  >
    <Form :form="form" />
  </BlockContainer>
</template>
