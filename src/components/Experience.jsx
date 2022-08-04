
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/javascript.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import csharp from '../assets/C-Sharp.png'
import sql from '../assets/mysql.png'
import git from '../assets/github.png'
import dotnet from '../assets/dotnet.png'

const Experience = () => {

  const techArray = [
    {
      id: 1, title: "HTML", src: html, style:"shadow-orange-500"
    },
    {
      id: 2, title: "CSS", src: css, style:"shadow-blue-500"
    },
    {
      id: 3, title: "JavaScript", src: js, style:"shadow-yellow-500"
    },
    {
      id: 4, title: "React", src: react, style:"shadow-blue-500"
    },
    {
      id: 5, title: "Tailwind", src: tailwind,  style:"shadow-sky-400"
    },
    {
      id: 6, title: "C#", src: csharp,  style:"shadow-purple-500"
    },
    {
      id: 7, title: "MySql", src: sql,  style:"shadow-orange-300"
    },
    {
      id: 8, title: "GitHub", src: git,  style:"shadow-gray-500"
    },
    {
      id: 9, title: ".NET", src: dotnet,  style:"shadow-purple-500"
    },

  ]

  return (
    <div name="experience"
    className="bg-gradient-to-b from-gray-900 to-black w-full h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-3xl font-semibold border-b-2 inline border-gray-500 p-2">Experience</p>
          <p className="py-6">I have worked with these technologies.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

          {techArray.map(item => (
          
            <div 
            key={item.id} 
            className={`shadow-md hover:scale-105 duration-300 rounded-lg py-2 ${item.style}`}>
              <img src={item.src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{item.title}</p>
            </div>

          ))}

        </div>

      </div>
    </div>
  )
}

export default Experience