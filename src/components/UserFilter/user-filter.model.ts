interface UserFilterProps {
  value: string | null
  items: string[]
  label: string,
  idx: number
}

interface SelectFilter {
  idx: number,  // знать позицию фильтра в массиве
  value: UserFilterProps['value'] | null
}

export type {
  UserFilterProps,
  SelectFilter
}
