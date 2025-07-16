import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './calendar.css'; 
// import 'react-calendar/dist/Calendar.css';

function SimpleCalendar() {
  const [date, setDate] = useState(new Date());
  const [note, setNote] = useState('');
  const [noteslist, setNotesList] = useState([]);

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const handleAddNote = () => {
    if (note) {
      setNotesList([...noteslist, { date: formatDate(date), note }]);
      setNote('');
    }
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white w-full max-w-md rounded-lg shadow p-6">

        <h1 className="text-2xl font-bold text-center text-yellow-700 mb-4">
          Monthly Calendar - Notes
        </h1>

        <div className="flex justify-center mb-4">
        <Calendar
          onChange={setDate}
          value={date}
          className="rounded-lg border border-gray-300 shadow"
        />
        </div>

        <div className="mt-6 text-center">
          <p className="text-lg text-gray-700 font-medium">Date :
            <span className="text-green-600"> {formatDate(date)}</span>
          </p>

          <div className="mt-4">
            <textarea
              className="w-full p-2 border border-gray-300 rounded-lg"
              rows="3"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Add a note"
            ></textarea>

            <button
              className="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              onClick={handleAddNote}>Add Note</button>
          </div>

         <div className="mt-4 text-left">
        <h2 className="font-semibold">Notes for {formatDate(date)}:</h2>
        <ul className="list-disc list-inside text-sm mt-2 text-gray-800">
         {noteslist.map((item, index) => {
           if (item.date === formatDate(date)) {
           return <li key={index}>{item.note}</li>;
        }
        return null;
    })}
  </ul>
</div>
    </div>
      </div>
    </div>
  );
};

export default SimpleCalendar;
