import { Link } from 'react-router'
import { useMode } from '../utils/globalState'
function Navbar({ passedMode }) {
    const [mode, setMode] = useMode();
    return (
        <div className={mode ? "dark" : "light"}>
            <nav className="bg-gray-800 py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <Link to={'/'}>
                                <div className="flex-shrink-0 h-8 w-8">
                                    <svg id="logo-14" width="100%" height="100%" viewBox="0 0 73 49" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M46.8676 24C46.8676 36.4264 36.794 46.5 24.3676 46.5C11.9413 46.5 1.86765 36.4264 1.86765 24C1.86765 11.5736 11.9413 1.5 24.3676 1.5C36.794 1.5 46.8676 11.5736 46.8676 24Z" className="ccustom" fill="#68DBFF"></path> <path d="M71.1324 24C71.1324 36.4264 61.1574 46.5 48.8529 46.5C36.5484 46.5 26.5735 36.4264 26.5735 24C26.5735 11.5736 36.5484 1.5 48.8529 1.5C61.1574 1.5 71.1324 11.5736 71.1324 24Z" className="ccompli1" fill="#FF7917"></path> <path d="M36.6705 42.8416C42.8109 38.8239 46.8676 31.8858 46.8676 24C46.8676 16.1144 42.8109 9.17614 36.6705 5.15854C30.5904 9.17614 26.5735 16.1144 26.5735 24C26.5735 31.8858 30.5904 38.8239 36.6705 42.8416Z" className="ccompli2" fill="#5D2C02"></path> </svg>
                                </div>
                            </Link>
                            <div className="block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <Link to="/clock" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium text-4xl">Clock</Link>
                                    <Link to="/stopwatch" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium text-4xl">Stopwatch</Link>
                                    <Link to="/alarm" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium text-4xl">Alarm</Link>
                                    <button className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium text-4xl' onClick={() => setMode(!mode)}>switch modes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar