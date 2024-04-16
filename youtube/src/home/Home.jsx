
import Featured from "../components/featured/featured"
import List from "../components/list/List"
import Navbar from "../components/navbar/navbar"
import"./home.scss"
import React from 'react'

const Home = () => {
  return (
    <div className="home">
      <Navbar/>
     <Featured type="movie"/>
     <List/>
     <List/>
     <List/>
     <List/>
     <List/>
    </div>
  )
}

export default Home
