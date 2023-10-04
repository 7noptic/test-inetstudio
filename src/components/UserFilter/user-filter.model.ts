interface UserFilterProps {
  value: string
  items: string[]
  label: string,
  idx: number
}

interface SelectFilter {
  idx: number,  // знать позицию фильтра в массиве
  value: UserFilterProps['value']
}

export type {
  UserFilterProps,
  SelectFilter
}
