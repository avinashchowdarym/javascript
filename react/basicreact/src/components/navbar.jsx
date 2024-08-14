import React from "react"
import Logo from '../imgs/movielogo.png'
import { Link } from "react-router-dom"

const Navbar =  () => {
    return(
        <div className="flex space-x-8 border sticky items-center pl-3 pr-3 py-4 "> 
            <img className="w-[50px]" src={Logo} alt="movie-logo"/>
            <Link className='text-blue-500 text-3xl font-bold 'to="/"> Home </Link>
            <Link className="text-blue-500 text-3xl font-bold" to="/watchlist"> Watchlist </Link>
             </div>
    )
}
export default Navbar