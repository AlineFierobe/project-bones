<script lang="ts">
export default {
  name: "SectionLinkButton",
  title: "Section Link Button",
};
</script>

<script setup lang="ts">
import BlockFullWidth from "@/components/block/ComponentBlockFullWidth.vue";
import BlockContainer from "@/components/block/ComponentBlockContainer.vue";
import LinkButton from "@/components/modules/link-button/ModuleLinkButton.vue";
import Typography from "@/components/modules/typography/ModuleTypography.vue";

const button = [
  {
    id: 1,
    name: "primary",
  },
  {
    id: 2,
    name: "secondary",
  },
  {
    id: 3,
    name: "ternary",
  },
  {
    id: 4,
    name: "quaternary",
  },
  {
    id: 5,
    name: "warning",
  },
  {
    id: 6,
    name: "validation",
  },
];

const link = [
  {
    id: 1,
    name: "primary",
  },
  {
    id: 2,
    name: "secondary",
  },
  {
    id: 3,
    name: "ternary",
  },
  {
    id: 4,
    name: "quaternary",
  },
];

const useContent = `<LinkButton
            url="#"
            text="texte affiché"
            link-style="primary"
            button-style="primary-filled"
          />`;
</script>

<template>
  <!-- ****************************  LINK & BUTTON ***************************** -->
  <!-- HOW TO USE -->
  <BlockContainer :is-section="true" :is-center="false" bg-color="gray">
    <Typography
      tag="div"
      content="comment utiliser le module : LinkButton"
      font-color="dark"
      font-style="headline3"
      extra-class="mb-4"
    />
    <Typography
      tag="div"
      content='import LinkButton from
    "@/components/modules/link-button/ModuleLinkButton.vue";'
    />
    <Typography tag="div" :content="useContent" />
  </BlockContainer>
  <!-- Background Light -->
  <BlockContainer
    :is-section="true"
    :is-center="true"
    extra-class="md:grid-cols-1/2"
  >
    <div class="section-link">
      <Typography
        content="Link"
        tag="h2"
        font-style="headline2"
        bg-color="quinary"
      />
      <div class="grid mt-20">
        <LinkButton
          v-for="item in link"
          :key="item.id"
          url="#"
          :text="item.name"
          :link-style="item.name"
        />
      </div>
    </div>
    <div class="section-button">
      <Typography
        content="Button"
        tag="h2"
        font-style="headline2"
        bg-color="quinary"
      />
      <Typography
        content="tous les buttons sont disponibles en small en ajoutant -small au style"
        tag="div"
        font-style="subtitle4"
        extra-class="mb-10"
      />
      <div class="grid md:grid-cols-2">
        <div class="section-button-left grid md:grid-cols-2">
          <LinkButton
            v-for="item in button"
            :key="item.id"
            url="#"
            :text="item.name + '-filled'"
            :button-style="item.name + '-filled'"
          />
          <LinkButton
            url="#"
            :text="button[0].name + '-filled-small'"
            :button-style="button[0].name + '-filled-small'"
            extra-class="col-span-2"
          />
        </div>
        <div class="section-button-right grid md:grid-cols-2">
          <LinkButton
            v-for="item in button"
            :key="item.id"
            url="#"
            :text="item.name + '-outlined'"
            :button-style="item.name + '-outlined'"
          />
          <LinkButton
            url="#"
            :text="button[0].name + '-outlined-small'"
            :button-style="button[0].name + '-outlined-small'"
            extra-class="col-span-2"
          />
        </div>
      </div>
    </div>
  </BlockContainer>

  <!-- Background Dark -->
  <BlockFullWidth bg-color="dark" extra-class="mt-10">
    <BlockContainer
      :is-section="false"
      :is-center="true"
      extra-class="md:grid-cols-1/2"
    >
      <div class="section-link">
        <div class="grid">
          <LinkButton
            v-for="item in link"
            :key="item.id"
            url="#"
            :text="'dark-' + item.name"
            :link-style="'dark-' + item.name"
            link-color="light"
          />
        </div>
      </div>
      <div class="section-button">
        <div class="grid md:grid-cols-2">
          <div class="section-button-left grid md:grid-cols-2">
            <LinkButton
              v-for="item in button"
              :key="item.id"
              url="#"
              :text="'dark-' + item.name + '-filled'"
              :button-style="'dark-' + item.name + '-filled'"
            />
            <LinkButton
              url="#"
              :text="'dark-' + button[0].name + '-filled-small'"
              :button-style="'dark-' + button[0].name + '-filled-small'"
              extra-class="col-span-2"
            />
          </div>
          <div class="section-button-right grid md:grid-cols-2">
            <LinkButton
              v-for="item in button"
              :key="item.id"
              url="#"
              :text="'dark-' + item.name + '-outlined'"
              :button-style="'dark-' + item.name + '-outlined'"
            />
            <LinkButton
              url="#"
              :text="'dark-' + button[0].name + '-outlined-small'"
              :button-style="'dark-' + button[0].name + '-outlined-small'"
              extra-class="col-span-2"
            />
          </div>
        </div>
      </div>
    </BlockContainer>
  </BlockFullWidth>
</template>
