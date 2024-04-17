import React from "react";
import { useTimer } from "react-timer-hook";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function MyTimer({ expiryTimestamp }: any) {
  const { seconds, minutes, hours, isRunning } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "30px" }}>
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
    </div>
  );
}

const Exam = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer

  return (
    <div className="w-screen overflow-hidden h-auto mt-[90px] ">
      <div className="w-full max-w-[1240px] mx-auto  h-full flex flex-row gap-7 p-10">
        <div className="w-1/2 h-auto overflow-scroll overflow-y-scroll flex flex-col gap-3">
          <div className="h-[150px] w-full border">1</div>
          <div className="h-[150px] w-full border">1</div>
          <div className="h-[150px] w-full border">1</div>
          <div className="h-[150px] w-full border">1</div>
          <div className="h-[150px] w-full border">1</div>
          <div className="h-[150px] w-full border">1</div>
          <div className="h-[150px] w-full border">1</div>
          <div className="h-[150px] w-full border">1</div>
          <div className="h-[150px] w-full border">1</div>
        </div>
        <div className="w-1/2 flex justify-center">
          <div className="flex flex-col gap-9 top-[130px] w-[400px] fixed">
            <div className="w-full h-[120px] border flex flex-col justify-center items-center">
              <div>Finish before</div>
              <MyTimer expiryTimestamp={time} />
            </div>
            <div className="w-full h-[120px] border">1</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exam;
