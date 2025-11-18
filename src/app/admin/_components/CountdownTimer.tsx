import api from "@/lib/axiosCall";
import { useState, useEffect, useRef } from "react";

const CountdownTimer = ({ initialTimeInSeconds }: any) => {
  const calculateTime = (totalSeconds: number) => {
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(initialTimeInSeconds);
  const [isActive, setIsActive] = useState(true);
  const [isReloadInFiveSeconds, setIsReloadInFiveSeconds] = useState(false);
  const interval = useRef<any>(null);

  const { days, hours, minutes, seconds } = calculateTime(timeLeft);

  useEffect(() => {
    if (isActive && timeLeft > 0) {
      interval.current = setInterval(() => {
        setTimeLeft((prevTime: number) => {
          const newTime = prevTime - 1;
          return newTime;
        });
      }, 1000);
    } else if (timeLeft < 1) {
      const maintenaceModeOff = async () => {
        setIsActive(false);
        setIsReloadInFiveSeconds(true);
        try {
          await api.post("/maintenance-mode-off");
        } catch (error: any) {
          console.error(error);
        } finally {
          setTimeout(() => {
            window.location.reload();
            setIsReloadInFiveSeconds(false);
          }, 5000);
        }
      };

      maintenaceModeOff();
    }

    return () => clearInterval(interval.current);
  }, [timeLeft, isActive]);

  return (
    <>
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="flex flex-col items-center">
          <div
            className={`text-5xl font-bold bg-black bg-opacity-30 rounded-lg p-6 w-24 h-24 flex items-center justify-center shadow-lg ${
              days === 0 &&
              hours === 0 &&
              minutes === 0 &&
              seconds < 10 &&
              "text-red-500"
            }`}
          >
            <span
              className={`${
                hours === 0 &&
                minutes === 0 &&
                days === 0 &&
                seconds === 0 &&
                "animate-bounce"
              }`}
            >
              {days.toString().padStart(2, "0")}
            </span>
          </div>
          <span className="mt-2 text-lg opacity-80">Days</span>
        </div>

        <div className="flex flex-col items-center">
          <div
            className={`text-5xl font-bold bg-black bg-opacity-30 rounded-lg p-6 w-24 h-24 flex items-center justify-center shadow-lg ${
              days === 0 &&
              hours === 0 &&
              minutes === 0 &&
              seconds < 10 &&
              "text-red-500"
            }`}
          >
            <span
              className={`${
                hours === 0 &&
                minutes === 0 &&
                days === 0 &&
                seconds === 0 &&
                "animate-bounce"
              }`}
            >
              {hours.toString().padStart(2, "0")}
            </span>
          </div>
          <span className="mt-2 text-lg opacity-80">Hours</span>
        </div>

        <div className="flex flex-col items-center">
          <div
            className={`text-5xl font-bold bg-black bg-opacity-30 rounded-lg p-6 w-24 h-24 flex items-center justify-center shadow-lg ${
              days === 0 &&
              hours === 0 &&
              minutes === 0 &&
              seconds < 10 &&
              "text-red-500"
            }`}
          >
            <span
              className={`${
                hours === 0 &&
                minutes === 0 &&
                days === 0 &&
                seconds === 0 &&
                "animate-bounce"
              }`}
            >
              {minutes.toString().padStart(2, "0")}
            </span>
          </div>
          <span className="mt-2 text-lg opacity-80">Minutes</span>
        </div>

        <div className="flex flex-col items-center">
          <div
            className={`text-5xl font-bold bg-black bg-opacity-30 rounded-lg p-6 w-24 h-24 flex items-center justify-center shadow-lg ${
              days === 0 &&
              hours === 0 &&
              minutes === 0 &&
              seconds < 10 &&
              "text-red-500"
            }`}
          >
            <span
              className={`${
                hours === 0 &&
                minutes === 0 &&
                days === 0 &&
                seconds === 0 &&
                "animate-bounce"
              }`}
            >
              {seconds.toString().padStart(2, "0")}
            </span>
          </div>
          <span className="mt-2 text-lg opacity-80">Seconds</span>
        </div>
      </div>
      {isReloadInFiveSeconds && (
        <span className="text-red-500 font-bold">
          The server will up in 5 seconds...
        </span>
      )}
    </>
  );
};

export default CountdownTimer;
