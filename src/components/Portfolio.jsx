import React from 'react'
import netflixclone from '../assets/portfolio/netflixclone.png'
import sidebar from '../assets/portfolio/tailwindSidebar.png'
import reactWeather from '../assets/portfolio/reactWeather.png'
import reactEats from '../assets/portfolio/reactEats.png'
import {BrowserRouter as Router, Link} from 'react-router-dom'

const Portfolio = () => {

  const projects = [
    {
      name: "Netflix Clone",
      src: netflixclone,
      url: "https://hbnetflixclone.netlify.app"
    },
    {
      name: "React Weather",
      src: reactWeather,
      url: "https://hbreactweather.netlify.app"
    },
    {
      name: "Tailwind Sidebar",
      src: sidebar,
      url: "https://hbreactsidebar.netlify.app"
    },
    {
      name: "React Eats",
      src: reactEats,
      url: "https://hbreacteats.netlify.app/"
    },

  ]

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-slate-900 w-full text-white py-10">
      <div className="max-w-screen-lg p-4 mx-auto justify-center flex flex-col w-full h-full" >
        <div className="py-8">
          <p className="text-3xl font-semibold border-b-2 border-gray-500 inline ">Portfolio</p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {
            projects.map((project) => (
              <div 
              key={project.name}
              className="shadow-md shadow-gray-600 rounded-lg mx-auto">
                <div>
                  <img src={project.src} alt="" className="rounded-md duration-200 hover:scale-105 object-cover w-72 h-48" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <button className="w-full px-2 mt-4 duration-200 hover:scale-105">{project.name}</button>
                  <a 
                  href={`${project.url}`}
                  className="w-1/2 px-6 m-4 duration-200 hover:scale-105 text-center">Demo</a>
                </div>
              </div>
            ))
          }


        </div>
      </div>

    </div>
  )
}

export default Portfolio