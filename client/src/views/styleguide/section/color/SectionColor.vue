<script lang="ts">
export default {
  name: "SectionColor",
  title: "Section Color",
};
</script>

<script setup lang="ts">
import BlockContainer from "@/components/block/ComponentBlockContainer.vue";
import Typography from "@/components/modules/typography/ModuleTypography.vue";

const colors = [
  {
    id: "128jhdz",
    name: "primary-1 : #192a56",
    style: "primary-1",
  },
  {
    id: "78787bbdz",
    name: "primary-2 : #273c75",
    style: "primary-2",
  },
  {
    id: "990ndzjb",
    name: "primary-3 : #40739e",
    style: "primary-3",
  },
  {
    id: "026bdz788",
    name: "primary-4 : #487eb0",
    style: "primary-4",
  },
  {
    id: "868guhgd8686",
    name: "secondary-1 : #341f97",
    style: "secondary-1",
  },
  {
    id: "dnnd99dgz76868",
    name: "secondary-2 : #5f27cd",
    style: "secondary-2",
  },
  {
    id: "bhbd9898bkjdbz",
    name: "secondary-3 : #8c7ae6",
    style: "secondary-3",
  },
  {
    id: "9876ghhig",
    name: "secondary-4 : #9c88ff",
    style: "secondary-4",
  },
  {
    id: "jbkj9898jbkjbsfe",
    name: "special-1 : #e84393",
    style: "special-1",
  },
  {
    id: "9898hdzj9898nn",
    name: "special-2 : #009432",
    style: "special-2",
  },
  {
    id: "jb87dhgz766vvz000",
    name: "special-3 : #ee5a24",
    style: "special-3",
  },
  {
    id: "kjbjo009890jkbe",
    name: "special-4 : #b53471",
    style: "special-4",
  },
  {
    id: "efef98Y8778hjb",
    name: "dark-1 : #2d3436",
    style: "dark-1",
  },
  {
    id: "kjb98hbdz98",
    name: "dark-2 : #000000",
    style: "dark-2",
  },
  {
    id: "efef98Yde8778hjb",
    name: "light-1 : #fafafa",
    style: "light-1",
  },
  {
    id: "kjb98hbddqazdz98",
    name: "light-2 : #ffffff",
    style: "light-2",
  },
  {
    id: "efef98Yde8ef9b",
    name: "gray-1 : #b2bec3",
    style: "gray-1",
  },
  {
    id: "kjb98hbef9dz98",
    name: "gray-2 : #636e72",
    style: "gray-2",
  },
];
</script>

<template>
  <BlockContainer
    :is-section="true"
    extra-class="sm:grid-cols-3 justify-items-start gap-10 my-20"
  >
    <div class="flex items-center" v-for="color in colors" :key="color.id">
      <BlockContainer
        :is-section="false"
        :bg-color="color.style"
        extra-class="w-14 h-14 mr-5"
      />
      <Typography tag="span" :content="color.name" font-style="subtitle3" />
    </div>
  </BlockContainer>
</template>
