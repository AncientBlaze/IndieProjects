import { useState } from 'react'
import profilePic from '../assets/profile_pic.jpeg'
function Portfolio({ passedMode }) {
    return (
        <div className={passedMode ? "dark" : "light"}>
            <section className="bg-gray-50 dark:bg-[#1D232A] dark:text-white">
                <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                    <div className="mx-auto max-w-xl text-center">
                        <h1 className="text-3xl font-extrabold sm:text-5xl dark:bg-gradient-to-r dark:from-green-300 dark:via-blue-500 dark:to-purple-600 dark:bg-clip-text dark:text-transparent">
                            Understand User Flow.
                            <strong className="font-extrabold text-red-700 sm:block dark:bg-gradient-to-r dark:from-green-300 dark:via-blue-500 dark:to-purple-600 dark:bg-clip-text dark:text-transparent"> Increase Conversion. </strong>
                        </h1>

                        <p className="mt-4 sm:text-xl/relaxed">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
                            numquam ea!
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <a
                                className="block w-full rounded
                                 bg-red-600 dark:border-blue-600 dark:bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                                href="#"
                            >
                                Get Started
                            </a>

                            <a
                                className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                                href="#"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Portfolio;

