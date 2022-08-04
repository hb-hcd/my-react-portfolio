import { FaGithub, FaLinkedin, } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from 'react-icons/bs'
const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn<FaLinkedin size={30} />
                </>
            ),
            href: 'https://linkedin.com',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    GitHub<FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/hb-hcd',
        },
        {
            id: 3,
            child: (
                <>
                    Mail<HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:hhbryan11@gmail.com',
        },
        {
            id: 4,
            child: (
                <>
                    Resume<BsFillPersonLinesFill size={30} />
                </>
            ),
            href: '/Haobin Huang resume.pdf',
            style: 'rounded-br-md',
            download: true,
        }
    ]
    return (
        <div className="hidden lg:flex flex-col left-0 fixed top-[40%]  ">
            <ul>
                {
                    links.map(({ id, child, href, style, download }) => (
                        <li key={id}
                            className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:rounded-md hover:ml-[-10px] bg-transparent duration-300"+" "+style}>
                            <a
                                href={href}
                                className="flex justify-between items-center w-full text-white"
                                download={download}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {child}
                            </a>
                        </li>
                    ))
                }

            </ul>
        </div>
    )
}

export default SocialLinks