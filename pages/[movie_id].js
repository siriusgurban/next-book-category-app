import { useRouter } from 'next/router'
import React from 'react'
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { getMovies } from '@/services/movies';



function MovieId() {
    const { query } = useRouter();
    const queryTan = useQuery({ queryKey: ['movie'], queryFn: getMovies })

    // console.log(queryTan.data.data, "queryTan");
    // console.log(queryTan.data.data.genres[0].name, "CatequeryTan");
    console.log(queryTan.data.data, "genre");
    return (
        <div>MovieId</div>
    )
}

export default MovieId