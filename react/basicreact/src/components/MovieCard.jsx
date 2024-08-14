const MovieCard = ({poster_path}) =>{
    return(
        <div className="h-[40vh] w-[254px] bg-center bg-cover rounded-xl hover:cursor-pointer hover:scale-110 " style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`}}></div>
    )
}
export default MovieCard 