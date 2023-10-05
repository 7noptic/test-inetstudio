<script setup lang="ts">
import UsersList from '@/components/UsersList/UsersList.vue'
import UserFilter from '@/components/UserFilter/UserFilter.vue'
import AppLogo from '@/components/AppLogo/AppLogo.vue'
import { useAppStore } from '@/store/app'

const filters = useAppStore().filters

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
        />
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <UsersList
          title="List"
        />
      </v-col>
    </v-row>
  </v-container>
</template>


