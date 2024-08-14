import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
const Movies = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/person/popular?api_key=5cf66eeb1f6637f34cb5a8764086ba76&language=en-US&page=10`).then(function (res) {
            setMovie(res.data.results)
            // console.log(res.data.results)
        })
    }, [])
    console.log(movie);
    return (
        <div className="p-6">
            <div className="text-2xl font-bold text-center "> Trending Movies </div>

            <div className="flex gap-10 flex-row pt-5 flex-wrap justify-around">

                {

                    movie.map((smovie) => {
                       return <MovieCard poster_path={smovie.profile_path} />
                    }
                    )
                }


            </div>
        </div>
    )
}

export default Movies;