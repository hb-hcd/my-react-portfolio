import React from 'react'

const Contact = () => {
    return (
        <div name="contact"
        className="bg-gradient-to-b from-black to-slate-900 w-full p-4 text-white">
            <div className="flex flex-col max-w-screen-lg mx-auto p-4 justify-center w-full h-full text-white">
                <div className="pb-8">
                    <p  className="text-3xl font-semibold border-b-2 inline border-gray-500 p-2">Contact</p>
                    <p className="py-6">Feel free to submit below form to contact me</p>
                </div>
                <div>
                    <form 
                    action="https://getform.io/f/2c36ade9-17dc-447f-81b1-dd6c95d1b26a"
                    method="POST"
                     className="flex flex-col w-full md:w-1/2 mx-auto gap-y-2 pb-10">
                        <input type="text" 
                        name="name"
                        placeholder="Enter your name" 
                        className="bg-transparent border-2 rounded-md p-2 foucs:outline-none"
                        />

                        <input 
                        type="text" 
                        name="email"
                        placeholder="Enter your email" 
                        className="bg-transparent  border-2 rounded-md p-2" 
                        />
                        
                        <textarea 
                        name="message" 
                        id="" cols="30" rows="10" 
                        className="border-2 bg-transparent rounded-md">

                        </textarea>
                        <button
                        type="submit"
                        className="flex items-center px-10 bg-gradient-to-b from-blue-700 to-blue-500 h-14 rounded-md mx-auto mt-10 hover:scale-105 duration-200">
                            Let's talk
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact