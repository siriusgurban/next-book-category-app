// @ts-nocheck

import { instanceAxios } from '@/helpers/instanceAxios'

export const getMovies = async () => {
  const response = await instanceAxios({ method: 'GET', url: '' })

  return response
}
export const getMovieByGenre = async (janr) => {
  const response = await instanceAxios({
    method: 'GET',
    url: `discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${janr}&api_key=83c38445714fc8a04070abef1b19e665`,
  })

  return response
}
export const getGenres = async () => {
  const response = await instanceAxios({
    method: 'GET',
    url:
      'genre/movie/list?language=en&api_key=83c38445714fc8a04070abef1b19e665',
  })

  return response
}

// export const crtBlog = async (data) => {
//   const response = await instanceAxios({ method: 'POST', url: 'posts', data })

//   return response
// }
// export const rmvBlogId = async (id: number) => {
//   await instanceAxios({ method: 'DELETE', url: 'posts/' + id })
// }
