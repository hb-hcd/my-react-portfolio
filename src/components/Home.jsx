import hero from '../assets/heroImage11.jpg'
import hero2 from '../assets/heroImage.png'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
    return (
        <div name="home"
            className="h-screen w-full bg-gradient-to-b from-slate-900 via-slate-900 to-slate-700"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-4xl sm:text-6xl font-bold text-white">I'm a Full Stack Developer</h2>
                    <p className="text-gray-400 py-4 max-w-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus rerum consectetur
                        ipsam dignissimos, magni adipisci quod quis dolorum
                        odio porro neque alias debitis error quae molestiae impedit corrupti illo. Iure!
                    </p>
                    <div>
                        <button className="flex text-white px-6 py-3 my-2 w-fit items-center rounded-md bg-gradient-to-r
                        from-cyan-500 to-blue-500 cursor-pointer group">
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300">
                                <HiOutlineArrowNarrowRight size={20} className="ml-1"/>
                            </span>
                        </button>
                    </div>
                </div>
                <div>
                    <img src={hero} alt="heroPortfolio" className="rounded-3xl mx-auto md:w-full w-2/3" />
                </div>
            </div>
        </div>
    )
}

export default Home