import React from 'react'

const Portfolio = () => {
  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-slate-900 w-full text-white py-10">
        <div className="max-w-screen-lg p-4 mx-auto justify-center flex flex-col w-full h-full" >
          <div className="py-8">
            <p className="text-3xl font-semibold border-b-2 border-gray-500 inline ">Portfolio</p>
            <p className="py-6">Check out some of my work right here</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          <div className="shadow-md shadow-gray-600 rounded-lg mx-auto">
              <img src="https://picsum.photos/1280/720" alt="" className="rounded-md duration-200 hover:scale-105 object-fill w-72 h-48" />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 m-4 duration-200 hover:scale-105">Code</button>
                <button className="w-1/2 px-6 m-4 duration-200 hover:scale-105">Demo</button>
              </div>
            </div>
            <div className="shadow-md shadow-gray-600 rounded-lg mx-auto">
              <img src="https://picsum.photos/1280/720" alt="" className="rounded-md duration-200 hover:scale-105 object-fill w-72 h-48" />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 m-4 duration-200 hover:scale-105">Code</button>
                <button className="w-1/2 px-6 m-4 duration-200 hover:scale-105">Demo</button>
              </div>
            </div>
            <div className="shadow-md shadow-gray-600 rounded-lg mx-auto">
              <img src="https://picsum.photos/1280/720" alt="" className="rounded-md duration-200 hover:scale-105 object-fill w-72 h-48" />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 m-4 duration-200 hover:scale-105">Code</button>
                <button className="w-1/2 px-6 m-4 duration-200 hover:scale-105">Demo</button>
              </div>
            </div>
            <div className="shadow-md shadow-gray-600 rounded-lg mx-auto">
              <img src="https://picsum.photos/1280/720" alt="" className="rounded-md duration-200 hover:scale-105 object-fill w-72 h-48" />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 m-4 duration-200 hover:scale-105">Code</button>
                <button className="w-1/2 px-6 m-4 duration-200 hover:scale-105">Demo</button>
              </div>
            </div>
            <div className="shadow-md shadow-gray-600 rounded-lg mx-auto">
              <img src="https://picsum.photos/1280/720" alt="" className="rounded-md duration-200 hover:scale-105 object-fill w-72 h-48" />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 m-4 duration-200 hover:scale-105">Code</button>
                <button className="w-1/2 px-6 m-4 duration-200 hover:scale-105">Demo</button>
              </div>
            </div>
            <div className="shadow-md shadow-gray-600 rounded-lg mx-auto">
              <img src="https://picsum.photos/1280/720" alt="" className="rounded-md duration-200 hover:scale-105 object-fill w-72 h-48" />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 m-4 duration-200 hover:scale-105">Code</button>
                <button className="w-1/2 px-6 m-4 duration-200 hover:scale-105">Demo</button>
              </div>
            </div>
            
          </div>
        </div>
        
    </div>
  )
}

export default Portfolio