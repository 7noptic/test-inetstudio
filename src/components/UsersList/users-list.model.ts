import IUser from '@/types/user.type'

interface UserListProps {
  users: IUser[],
  title: string,
  loading: boolean
}

export type {
  UserListProps
}
