import { useState } from 'react';
import { ImCross } from 'react-icons/im';

function StopWatch({ passedMode }) {
    const [intervalId, setIntervalId] = useState(null);
    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(0);
    const [lapse, setLapse] = useState([]);

    const handleStart = () => {
        if (!isRunning) {
            setIsRunning(true);
            setIntervalId(setInterval(() => setTime(prevTime => prevTime + 10), 10));
        }
    };

    const handleStop = () => {
        setIsRunning(false);
        clearInterval(intervalId);
    };

    const handleReset = () => {
        setIsRunning(false);
        clearInterval(intervalId);
        setTime(0);
        setLapse([]);
    };
    const handleLapse = () => {
        setLapse(
            prevLapse => [
                ...prevLapse,
                `Lapsed time: ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(3, '0')}`,
            ]
        );
    };

    const milliseconds = time % 1000;
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);

    return (
        <div className={passedMode ? "dark" : "light"}>
            <div className="flex flex-col items-center space-y-4 text-gray-700 dark:text-white">
                <div className="text-5xl flex justify-center items-end">
                    <p>{String(hours).padStart(2, '0')}</p>:<p>{String(minutes).padStart(2, '0')}</p>:<p>{String(seconds).padStart(2, '0')}</p>.<p className='text-2xl'>{String(milliseconds).padStart(3, '0')}</p>
                </div>
                <div className="flex space-x-4 md:space-x-8">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded md:px-8" onClick={handleStart}>START</button>
                    <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded md:px-8" onClick={handleStop}>STOP</button>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md:px-8' onClick={handleLapse}>LAPSE</button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded md:px-8" onClick={handleReset}>RESET</button>
                </div>
                <div className="text-2xl">{isRunning ? 'running' : 'stopped'}</div>
                <div className='space-y-2 overflow-y-scroll h-40 w-full'>
                    {lapse.map((lapses, index) => (
                        <div key={index} className='text-2xl flex justify-between items-center bg-gray-200 dark:bg-gray-700 p-2 rounded-lg border-2 border-gray-400 dark:border-gray-600 shadow-md'>
                            <p>{lapses}</p>
                            <button className="ml-4 bg-red-500 text-white rounded-full px-1 hover:bg-red-600" onClick={() => setLapse(prevLapse => prevLapse.filter((_, i) => i !== index))}>
                                <div className='text-black dark:text-white flex justify-center items-center px-2 py-2.5'>
                                    <ImCross />
                                </div>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default StopWatch;


