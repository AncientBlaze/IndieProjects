import { useState } from 'react'

function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString())
    const update = () => setTime(new Date().toLocaleTimeString())
    setInterval(update, 1000)

    return (
        <div className='p-5 bg-black'>
            <p className='font-mono text-white text-5xl border-2 px-20 py-10'>{time}</p>
        </div>
    )
}

export default Clock

