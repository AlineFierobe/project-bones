<script lang="ts">
export default {
  name: "ModuleForm",
};
</script>

<script setup lang="ts">
import Input from "@/components/modules/input/ModuleInput.vue";
import Typography from "@/components/modules/typography/ModuleTypography.vue";
import BlockContainer from "@/components/block/ComponentBlockContainer.vue";

defineProps<{
  form: {
    name: string;
    inputs: Array<{
      id: string;
      label: string;
      type: string;
      name: string;
      inputId?: string;
      placeholder?: string;
      value?: string | number;
      required?: boolean;
    }>;
    btnText: string;
    cols: number;
    width?: string;
    isCenter?: boolean;
  };
}>();
</script>

<template>
  <form
    :id="form.name"
    :class="[form.width ? form.width : 'w-3/4', form.isCenter ? 'mx-auto' : '']"
  >
    <Typography :content="form.name" tag="h3" font-style="headline3" />
    <BlockContainer
      :is-section="false"
      :extra-class="[form.cols ? 'md:grid-cols-' + form.cols : '', 'gap-10']"
    >
      <div v-for="input in form.inputs" :key="input.id" class="grid">
        <label :for="input.inputId ? input.inputId : input.name">{{
          input.label
        }}</label>
        <Input
          :input-type="input.type"
          :name="input.name"
          :id="input.inputId"
          :value="input.value ? input.value : ''"
          :required="input.required ? input.required : false"
        />
      </div>
    </BlockContainer>
    <input type="submit" :value="form.btnText" class="btn-primary-filled" />
  </form>
</template>
