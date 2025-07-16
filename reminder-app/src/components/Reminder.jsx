import react, {useState} from 'react';

function Reminder() {
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [reminder, setReminder] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (task && date && time) {
      const newReminder = {task, date, time};
      setReminder([...reminder, newReminder]);
      setTask('');
      setDate('');
      setTime('');
    }
  };

  return (
     <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Task"
        className="border border-gray-300 rounded p-3"/>

        <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className ="border border-gray-300 rounded p-3"
        />
        <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className ="border border-gray-300 rounded p-3"
        />

        <button type="submit" className="bg-gray-600 hover:bg-gray-700 text-white py-2 rounded font-semibold">Add Reminder</button>
        </form>

        <div className="mt-6">
          <h2 className="text-lg font-bold">Reminders</h2>
          <ul className="list-none space-y-2">
            {reminder.map((rem)=> (
              <li key={rem.id} className="bg-gray-100 p-3 rounded shadow">
                <p className="font-semibold">{rem.task}</p>
                <p>{rem.date} at {rem.time}</p>
              </li>
            ))}
          </ul>
        </div>

    </div>
  );
}
export default Reminder;