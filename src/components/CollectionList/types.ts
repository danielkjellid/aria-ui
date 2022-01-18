export interface ImageType {
  image500x305: string
  image660x400: string
  image850x520: string
}

export interface CollectionListItemProps {
  title: string
  description: string
  loading?: boolean
  reverse?: boolean
  images?: ImageType
}
