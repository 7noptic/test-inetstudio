<script setup lang="ts">
import { UserFilterProps } from '@/components/UserFilter/user-filter.model'

const props = defineProps<UserFilterProps>()

const emit = defineEmits(["selectFilter"]);
const updateValue = (event:string | null) => {
  emit("selectFilter", {idx: props.idx, value:event});
};
</script>
<template>
  <v-select
    :value="value"
    :items="items"
    :clearable="true"
    :label="label"
    @update:model-value="updateValue"
    hide-selected
  />
</template>


