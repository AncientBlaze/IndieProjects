import { useRef, useState, useEffect } from "react";

function Alarm({ passedMode }) {
  const [time, setTime] = useState(new Date());
  const [alarmList, setAlarmList] = useState([]);
  const audioRef = useRef(null);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000)

    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    alarmList.forEach(alarm => {
      if (time.toLocaleTimeString().toLowerCase().slice(0, 5) === alarm.time.toLowerCase().slice(0, 5)) {
        playAlarm(alarm);
      }
    })
  }, [alarmList, time]);

  const setAlarm = (e) => {
    e.preventDefault();
    const alarm = {
      time: `${e.target.hours.value}:${e.target.minutes.value}`,
      id: Date.now(),
    };
    if (alarmList.some(value => value.time === alarm.time)) {
      alert(`Alarm Already set at ${e.target.hours.value}:${e.target.minutes.value}`);
    }
    else {
      setAlarmList([alarm, ...alarmList]);
    }
  };

  const playAlarm = (alarm) => {
    if (audioRef.current) {
      audioRef.current.play();
    }
    console.log(`Alarm ${alarm.id} played at ${alarm.time}`);
  };

  const snoozeAlarm = (alarm) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    const newAlarm = {
      time: new Date(time.getTime() + prompt("Enter the number of minutes to snooze:") * 60 * 1000).toLocaleTimeString().slice(0, 5),
      id: alarm.id,
    };
    setAlarmList(alarmList.map(a => a.id === alarm.id ? newAlarm : a));
  };

  const cancelAlarm = (alarm) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setAlarmList(alarmList.filter(a => a.id !== alarm.id));
  };

  return (
    <div className={passedMode ? "dark" : "light"}>
      <div className="flex justify-center space-y-8 flex-col">
        <div className="bg-gray-200 rounded-lg p-8 dark:bg-gray-800 text-gray-800">
          <h1 className="text-3xl font-bold py-5 dark:text-white">Current Time: {time.toLocaleTimeString()}</h1>
          <form onSubmit={setAlarm} className="flex flex-col space-y-4">
            <input type="number" name="hours" placeholder="HH" min="1" max="23" required className="bg-white rounded-lg p-2" />
            <input type="number" name="minutes" placeholder="MM" min="0" max="59" required className="bg-white rounded-lg p-2" />
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 dark:bg-green-600 dark:text-white font-bold py-2 px-4 rounded text-gray-800">
              Set Alarm
            </button>
          </form>
          <audio ref={audioRef} src="/clock.mp3" />
        </div >
        <div className="bg-gray-200 rounded-lg p-8 dark:bg-gray-800 text-gray-800">
          <h2 className="text-2xl font-bold mb-4 dark:text-white">Alarm List</h2>
          <ul className="list-none">
            {alarmList.map(alarm => (
              <li key={alarm.id} className="flex items-center justify-between border-b border-gray-300 px-6 py-4">
                <h2 className="text-2xl font-bold dark:text-white">{alarm.time}</h2>
                <div className="flex space-x-4">
                  <button onClick={() => snoozeAlarm(alarm)} className="text-white bg-blue-500 hover:bg-blue-700 h-auto w-auto rounded">
                    Snooze
                  </button>
                  <button onClick={() => cancelAlarm(alarm)} className="text-white bg-red-500 hover:bg-red-700 px-4 py-2 rounded">
                    X
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Alarm;




