<script setup lang="ts">
import { computed, ref } from 'vue'
import UsersList from '@/components/UsersList/UsersList.vue'
import UserFilter from '@/components/UserFilter/UserFilter.vue'
import AppLogo from '@/components/AppLogo/AppLogo.vue'
import { SelectFilter } from '@/components/UserFilter/user-filter.model'
import { useAppStore } from '@/store/app'

const filters = useAppStore().filters
const users = useAppStore().users
const isLoading = ref(false)


const filteredUsers = computed(() => {
  isLoading.value = true
  const res = filters.reduce((users, { value, getter }) => {
    return value
      ? users.filter(n => getter(n, value))
      : users
  }, users)
  isLoading.value = false
  return res
})
const selectFilter = ({ idx, value }: SelectFilter) => {
  filters[idx].value = value
}


</script>
<template>
  <v-container>
    <v-row
      align="center"
      justify="center"
      class="ma-4"
    >
      <v-col cols="12">
        <AppLogo />
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <UserFilter
          v-for="(filter, idx) in filters"
          :key="filter.name"
          :idx="idx"
          :items="filter.options"
          :label="filter.name"
          :value="filter.value"
          @select-filter="selectFilter"
        />
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <UsersList
          :loading="isLoading"
          :users="filteredUsers"
          title="List"
        />
      </v-col>
    </v-row>
  </v-container>
</template>


