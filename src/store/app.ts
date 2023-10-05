// Utilities
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import IUser from '@/types/user.type'
import usersData from '@/data/index'
import API from '@/utils/api'
import { SelectFilter } from '@/components/UserFilter/user-filter.model'
import IFilters from '@/types/filters.type'

const countryOptions = [
  'russia',
  'usa'
]
const scoreOptions = [
  '> 20',
  '< 10'
]
export const useAppStore = defineStore('app', () => {
  const users = ref<IUser[]>(usersData)

  const getUsers = async () => {
    users.value = await API.getUsers()
  }

  const filters = ref<IFilters[]>([
    {
      name: 'Score',
      value: '',
      options: scoreOptions,
      getter: (obj: IUser, value: string) => eval(`${obj.score}${value}`)
    },
    { name: 'Country', value: '', options: countryOptions, getter: (obj: IUser, value: string) => obj.country == value }
  ])

  const filteredUsers = computed(() => {
    return filters.value.reduce((initialValue, { value, getter }) => {
      return value
        ? initialValue.filter(n => getter(n, value))
        : initialValue
    }, users.value)
  })

  const selectFilter = ({ idx, value }: SelectFilter) => {
    filters.value[idx].value = value
  }

  return {
    users,
    filteredUsers,
    filters,

    getUsers,
    selectFilter,
  }
})
