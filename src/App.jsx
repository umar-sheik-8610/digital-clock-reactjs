import "./App.css";
import { useEffect, useState } from "react";
// background color  EEF5FF    inside 2D3250   numbers A7E6FF
function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatHour = (hour) => {
    return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
  };
  const formatTimeWithLeadingZero = (num) => {
    return num < 10 ? `0${num}` : num;
  };
  const formatDate = (date) => {
    return date.toLocaleDateString(undefined, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <div className="digital-clock">
        <div className="time">
          {formatTimeWithLeadingZero(formatHour(currentTime.getHours()))} :{" "}
          {formatTimeWithLeadingZero(currentTime.getMinutes())} :{" "}
          {formatTimeWithLeadingZero(currentTime.getSeconds())}{" "}
          {currentTime.getHours() >= 12 ? "PM" : "AM"}
        </div>
        <div className="date">{formatDate(currentTime)}</div>
      </div>
    </>
  );
}

export default App;
