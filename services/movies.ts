// @ts-nocheck

import { instanceAxios } from '@/helpers/instanceAxios'

export const getMovies = async () => {
  const response = await instanceAxios({ method: 'GET' })

  return response
}
export const getMovieByGenre = async () => {
  const response = await instanceAxios({ method: 'GET' })

  return response
}

// export const crtBlog = async (data) => {
//   const response = await instanceAxios({ method: 'POST', url: 'posts', data })

//   return response
// }
// export const rmvBlogId = async (id: number) => {
//   await instanceAxios({ method: 'DELETE', url: 'posts/' + id })
// }
