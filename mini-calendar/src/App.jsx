import React, { useState } from "react";
import Calendar from "./components/Calendar";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-8">
         Calendar
      </h1>
      <Calendar/>
    </div>
  );
};

export default App;
