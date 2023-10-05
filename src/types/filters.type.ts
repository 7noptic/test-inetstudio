import IUser from '@/types/user.type'

export default interface IFilters {
  name: string
  value: string | null
  options: string[]
  getter: (obj: IUser, value: any) => any

}
