const Banner = () =>{

    return (
        <div className = 'h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end'style={{backgroundImage : `url(https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/04/Avengers-Endgame-banner-poster.jpg?q=50&fit=contain&w=1040&h=&dpr=1.5)`}}>
            <div className="text-white text-xl items-center bg-gray-900/60 text-center w-full p-4"> Avengers End Game</div>
        </div>
    )
}

export default Banner;