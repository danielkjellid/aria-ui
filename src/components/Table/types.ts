export interface TableHeader {
  text: string
  value: string
}

export interface TableMeta {
  currentPage: string | number
  totalPages: string | number
  currentRange: string | number
  totalInstances: string | number
}

export interface TableProps {
  headers: TableHeader[]
  items: any[]
  meta: TableMeta
  showTableActions?: boolean
  tableActionsInputIcon?: string
  showSearchbar?: boolean
  searchbarPlaceholder?: string
  showPagination?: boolean
}
