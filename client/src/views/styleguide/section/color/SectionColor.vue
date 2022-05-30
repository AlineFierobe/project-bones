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
    name: "primary : #341f97",
    style: "primary",
  },
  {
    id: "78787bbdz",
    name: "secondary : #5f27cd",
    style: "secondary",
  },
  {
    id: "990ndzjb",
    name: "ternary : #2e86de",
    style: "ternary",
  },
  {
    id: "026bdz788",
    name: "quaternary : #01a3a4",
    style: "quaternary",
  },
  {
    id: "868guhgd8686",
    name: "quinary : #ee5253",
    style: "quinary",
  },
  {
    id: "dnnd99dgz76868",
    name: "sinary : #f368e0",
    style: "sinary",
  },
  {
    id: "bhbd9898bkjdbz",
    name: "gray : #8395a7",
    style: "gray",
  },
  {
    id: "9876ghhig",
    name: "dark : #222f3e",
    style: "dark",
  },
  {
    id: "jbkj9898jbkjbsfe",
    name: "light : #fafafa",
    style: "light",
  },
  {
    id: "9898hdzj9898nn",
    name: "red : #b71540",
    style: "red",
  },
  {
    id: "jb87dhgz766vvz000",
    name: "green : #009432",
    style: "green",
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
