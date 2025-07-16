import react from 'react';
import {useSate} from 'react';
import Reminder from './components/Reminder';

function App() {
    return (
    <div className="min-h-screen bg-gray-100 p-4 flex justify-center items-start">
      <div className="w-full max-w-md bg-white rounded-lg shadow p-6 mt-10">
        <h1 className="text-2xl font-bold text-center text-black-700 mb-4">Task Reminder</h1>
        <Reminder/>
      </div>
    </div>
  );
}
export default App;