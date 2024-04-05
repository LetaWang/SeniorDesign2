import React, { useEffect } from 'react';

const EndOfDayTask = ({ endOfDayFunction }) => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date();
      const endOfDay = new Date(currentTime);
      endOfDay.setHours(23, 59, 59, 999); // Set to the end of the day (23:59:59.999)

      if (currentTime >= endOfDay) {
        // If current time is past the end of the day, call the endOfDayFunction
        endOfDayFunction();
      }
    }, 60000); // Check every minute (adjust as needed)

    // Clean up the interval on unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return null; // This component doesn't render anything visible
};

export default EndOfDayTask;
