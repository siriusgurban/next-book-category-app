import { useRouter } from 'next/router'
import React, { useState } from 'react'
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { getGenres, getMovieByGenre, getMovies } from '@/services/movies';



function MovieId() {
    const { query, push } = useRouter();
    const [gen, setGen] = useState();
    const queryTan = useQuery({ queryKey: ['genre'], queryFn: getGenres })
    const queryTanMov = useQuery({ queryKey: ['movies', gen], queryFn: () => getMovieByGenre(gen) })

    function handleMovies(path) {
        push(`/${path}`)
        setGen(() => queryTan?.data?.data?.genres?.find(item => item?.name == query?.movie_id)?.id?.toString())
        console.log(gen, "gen");
    }

    console.log(queryTan, "genre");

    return (
        <>
            <div>MovieId</div>
            <ul>
                {queryTan?.data?.data?.genres?.map((item, index) => {
                    return (
                        <li key={index}><button onClick={() => handleMovies(item?.name)}>{item?.name}</button></li>
                    )
                })}

            </ul >
            <div>
                {/* original_title */}
                <div>
                    {queryTanMov?.data?.data?.results?.map((item, index) => {
                        return (<div key={index} className='border border-white'>
                            <h4>{item?.original_title}</h4>
                            <p>{item?.overview}</p>
                        </div>)
                    })}
                </div>
                <h2>{console.log(queryTanMov?.data?.data?.results, "Movies")}</h2>
                {console.log(gen, "gen")}
            </div>
        </>

    )
}

export default MovieId