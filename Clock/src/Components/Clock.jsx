import { useState } from 'react'

function Clock({ passedMode }) {
    const [time, setTime] = useState(new Intl.DateTimeFormat('en-US', { timeStyle: 'short', hour12: true }).format(new Date()))
    const update = () => setTime(new Intl.DateTimeFormat('en-US', { timeStyle: 'short', hour12: true }).format(new Date()))
    setInterval(update, 1000)

    return (
        <div className ={`${passedMode ? "dark" : "light"} `}>
            <div className='p-5 bg-black dark:bg-white *:transition-all *:duration-500 *:ease-in-out'>
                <p className='font-mono text-white dark:text-black text-5xl border-2 dark:border-black px-20 py-10'>{time.split(":")[0] < 10 ? "0" + time : time}</p>
            </div>
        </div>
    )
}

export default Clock


