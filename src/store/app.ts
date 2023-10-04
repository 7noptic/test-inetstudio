// Utilities
import { defineStore } from 'pinia'
import { ref } from 'vue'
import IUser from '@/types/user.type'
import usersData from '@/data/index'
import API from '@/utils/api'

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

  const filters = ref([
    {
      name: 'Score',
      value: '',
      options: scoreOptions,
      getter: (obj: IUser, value: string) => eval(`${obj.score}${value}`)
    },
    { name: 'Country', value: '', options: countryOptions, getter: (obj: IUser, value: string) => obj.country == value }
  ])

  return {
    users,
    filters,
    getUsers
  }
})
