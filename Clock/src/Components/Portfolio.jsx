import { useState } from 'react'
import profilePic from '../assets/profile_pic.jpeg'
function Portfolio() {
    const [isDark, setIsDark] = useState(false);
    const toggleDarkMode = () => {
        setIsDark(!isDark);
    };
    return (
        <>
            <section className="h-auto w-auto p-20 flex items-center justify-center">
                <div className="flex flex-col justify-center items-center h-auto">
                    <div className="relative flex flex-col items-center rounded-[20px] w-[400px] mx-auto p-4 bg-white bg-clip-border shadow-3xl shadow-shadow-500 !bg-navy-800 text-white !shadow-none">
                        <div className="relative flex h-32 w-full justify-center rounded-xl bg-cover" >
                            <img src='https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png' className="absolute flex h-32 w-full justify-center rounded-xl bg-cover" />
                            <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 !border-navy-700">
                                <img className="h-full w-full rounded-full" src={profilePic} alt="" />
                            </div>
                        </div>
                        <div className="mt-16 flex flex-col items-center">
                            <h4 className="text-xl font-bold text-navy-700 text-black">
                                Saikat Adhikary
                            </h4>
                            <p className="text-base font-normal text-gray-600">Student of Bca</p>
                        </div>
                        <div className='border-2 w-full text-center flex flex-col px-20  rounded border-black'>
                            <h1 className='text-black text-3xl font-bold'>Github Info</h1>
                            <div className="mt-6 mb-3 flex gap-14 md:!gap-14 justify-center">
                                <div className="flex flex-col items-center justify-center transition duration-300 ease-in-out hover:scale-110">
                                    <p className="text-2xl font-bold text-navy-700 text-black">17</p>
                                    <p className="text-sm font-normal text-gray-600">Repos</p>
                                </div>
                                <div className="flex flex-col items-center justify-center transition duration-300 ease-in-out hover:scale-110">
                                    <p className="text-2xl font-bold text-navy-700 text-black">
                                        0
                                    </p>
                                    <p className="text-sm font-normal text-gray-600">Followers</p>
                                </div>
                                <div className="flex flex-col items-center justify-center transition duration-300 ease-in-out hover:scale-110">
                                    <p className="text-2xl font-bold text-navy-700 text-black">
                                        1
                                    </p>
                                    <p className="text-sm font-normal text-gray-600">Following</p>
                                </div>
                            </div>
                        </div>
                        <button className="mt-6 flex items-center justify-center rounded-full border-2 border-black hover:bg-gray-700 hover:text-white" onClick={toggleDarkMode}>
                            {isDark ? <span className="text-sm font-normal text-gray-600">Switch to Light Mode</span> : <span className="text-sm font-normal text-gray-600">Switch to Dark Mode</span>}
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Portfolio;

