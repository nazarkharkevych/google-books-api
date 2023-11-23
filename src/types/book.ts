export interface Book {
  id: string,
  etag: string,
  volumeInfo: {
    authors: string[],
    categories?: string[],
    imageLinks?: {
      smallThumbnail: string,
      thumbnail: string
    },
    description: string,
    publishedDate: string,
    title: string
  }
}
