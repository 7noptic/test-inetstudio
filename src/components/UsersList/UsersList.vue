<script setup lang="ts">
import { UserListProps } from '@/components/UsersList/users-list.model'

defineProps<UserListProps>()
</script>
<template>
  <v-card :loading="loading" class="mx-auto">
    <v-toolbar color="cyan-lighten-1">
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-toolbar>
    <v-slide-y-transition
      group
      tag="v-list"
    >
      <div v-if="users.length" style="max-height: 400px"
           class="overflow-y-auto">
        <v-list-item
          v-for="user in users"
          :key="user.avatar"
          :title="user.title"
          :prepend-avatar="user.avatar"
        >
          <template v-slot:prepend>
            <v-tooltip
              location="top center"
              origin="auto"
              no-click-animation
            >
              <template v-slot:activator="{props}">
                <div class="v-list-item__prepend">
                  <div
                    v-bind="props"
                    class="v-avatar v-theme--light v-avatar--density-default v-avatar--size-default v-avatar--variant-flat">
                    <v-img :src="user.avatar" />
                  </div>
                  <div class="v-list-item__spacer"></div>
                </div>
              </template>

              <div>{{ user.address }}</div>
            </v-tooltip>
          </template>
          <template v-slot:subtitle>
            <div v-html="user.subtitle"></div>
          </template>
        </v-list-item>
      </div>
      <v-list-item v-else >
        <v-chip class="d-flex justify-center ma-4">
          Список пуст
        </v-chip>
      </v-list-item>
    </v-slide-y-transition>
  </v-card>
</template>


<style scoped>

</style>
