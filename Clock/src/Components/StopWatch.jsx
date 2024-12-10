import { useState } from 'react';

function StopWatch({ passedMode }) {
    const [intervalId, setIntervalId] = useState(null);
    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(0);

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
    };


    const milliseconds = time % 1000;
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);


    return (
        <div className={passedMode ? "dark" : "light"}>
            <div className="flex flex-col items-center space-y-4">
                <div className="text-5xl flex justify-center items-end">
                    <p>{String(hours).padStart(2, '0')}</p>:<p>{String(minutes).padStart(2, '0')}</p>:<p>{String(seconds).padStart(2, '0')}</p>.<p className='text-2xl'>{String(milliseconds).padStart(3, '0')}</p>
                </div>
                <div className="flex space-x-4">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={handleStart}>start</button>
                    <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" onClick={handleStop}>stop</button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={handleReset}>reset</button>
                </div>
                <div className="text-2xl">{isRunning ? 'running' : 'stopped'}</div>
            </div>
        </div>
    );
}

export default StopWatch;

