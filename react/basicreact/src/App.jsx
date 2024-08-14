import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Movies from './components/Movies'
import WatchList from './components/Watchlist'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Banner from './components/Banner'

function App() {

  return (
    <div>

      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path='/' element={<><Banner /> <Movies /></>} />
          <Route path='/watchlist' element={<WatchList />} />
        </Routes>




      </BrowserRouter>

    </div>
  )
}

export default App

// https://api.themoviedb.org/3/person/popular?api_key=5cf66eeb1f6637f34cb5a8764086ba76&language=en-US&page=10