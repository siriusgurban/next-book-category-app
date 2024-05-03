import { useRouter } from 'next/router'
import React from 'react'
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { getGenres, getMovieByGenre, getMovies } from '@/services/movies';



function MovieId() {
    const { query } = useRouter();
    const queryTan = useQuery({ queryKey: ['genre'], queryFn: getGenres })
    const queryTanMov = useQuery({ queryKey: ['movies'], queryFn: (janr) => getMovieByGenre(janr) })

    // function handleMovies() {

    //     getMovieByGenre(janr);
    // }

    // console.log(queryTan.data.data, "queryTan");
    // console.log(queryTan.data.data.genres[0].name, "CatequeryTan");
    console.log(queryTan, "genre");
    console.log(queryTanMov, "Movies");
    return (
        <>
            <div>MovieId</div>
            <ul>
                {queryTan?.data?.data?.genres?.map((item, index) => {
                    return (
                        <li key={index}><button onClick={() => getMovieByGenre(item?.name)}>{item?.name}</button></li>
                    )
                })}

            </ul>
        </>

    )
}

export default MovieId