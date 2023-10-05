<script setup lang="ts">
import { UserFilterProps } from '@/components/UserFilter/user-filter.model'
import { useAppStore } from '@/store/app'

const props = defineProps<UserFilterProps>()

const updateValue = (event:string | null) => {
  useAppStore().selectFilter({idx: props.idx, value:event})
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


