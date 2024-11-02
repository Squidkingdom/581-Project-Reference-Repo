import React, { useEffect, useState } from 'react';
import Background from './components/Background';
import Modal from './components/Modal';

const App: React.FC = () => {
  const [timeSince, setTimeSince] = useState("");
  const [timeUntil, setTimeUntil] = useState("");


  // Set your dates here
  const startDate = new Date("2024-09-13T15:00:00"); // Replace with XYZ date
  const targetDate = new Date("2025-05-18T12:00:00"); // Replace with ABC date

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();

      // Calculate "Time since XYZ"
      const sinceDiff = now.getTime() - startDate.getTime();
      const sinceTime = formatTime(sinceDiff);
      setTimeSince(sinceTime);

      // Calculate "Time until ABC"
      const untilDiff = targetDate.getTime() - now.getTime();
      const untilTime = formatTime(untilDiff);
      setTimeUntil(untilTime);

      function formatTime(time: number): string {
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const months = Math.floor(days / 30);
        const remainingDays = days % 30;
        return `${(months == 1) ? `${months} Month ` : `${months} Months `}  ${remainingDays} Days ${hours} Hours ${minutes} Minutes`;
      }
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);

    return () => clearInterval(interval);
  }, [startDate, targetDate]);

  return (
    <Background>
      <Modal timeUntil={timeUntil}>
        <h1 className="text-3xl font-bold">Has Exam 1 been graded?</h1>
        <div className="flex items-end justify-center">
          <div className={`bg-black m-5`}>
            <p className={`text-2xl font-bold font-mono text-white py-2 px-4`}>Not yet</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Days since exam 1:</h2>
          <p className="text-xl font-mono mt-2"></p>
        </div>{timeSince}
        <div>
          <h2 className="text-2xl m-3 font-semibold">Days until I graduate:</h2>
          <p className="text-xl font-mono mt-2">{timeUntil}</p>
        </div>
      </Modal>
    </Background>

  );
};

export default App;


