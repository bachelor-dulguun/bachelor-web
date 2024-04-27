import Card from "@/components/card/card";
import React from "react";
import { useTimer } from "react-timer-hook";

const data = [
  {
    title: "Choose the box that is similar to the box formed from the given sheet of paper",
    options: [
      { option: "Option 1", value: "Option", rightOne: false },
      { option: "Option 2", value: "Option", rightOne: true },
      { option: "Option 3", value: "Option", rightOne: false },
      { option: "Option 4", value: "Option", rightOne: false },
    ]
  },
  {
    title: "Card 2",
    options: [
      { option: "Option 1", value: "Option", rightOne: false },
      { option: "Option 2", value: "Option", rightOne: true },
      { option: "Option 3", value: "Option", rightOne: false },
      { option: "Option 4", value: "Option", rightOne: false },
    ]
  },
  {
    title: "Card 4",
    options: [
      { option: "Option 1", value: "Option", rightOne: false },
      { option: "Option 2", value: "Option", rightOne: true },
      { option: "Option 3", value: "Option", rightOne: false },
      { option: "Option 4", value: "Option", rightOne: false },
    ]
  },
  {
    title: "Card 5",
    options: [
      { option: "Option 1", value: "Option", rightOne: false },
      { option: "Option 2", value: "Option", rightOne: true },
      { option: "Option 3", value: "Option", rightOne: false },
      { option: "Option 4", value: "Option", rightOne: false },
    ]
  },
  {
    title: "Card 6",
    options: [
      { option: "Option 1", value: "Option", rightOne: false },
      { option: "Option 2", value: "Option", rightOne: true },
      { option: "Option 3", value: "Option", rightOne: false },
      { option: "Option 4", value: "Option", rightOne: false },
    ]
  }
]

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
          {
            data.map((card, index) => {
              return (
                <Card
                  key={index}
                  title={`${++index}. ${card.title}`}
                  options={card.options}
                />
              );
            })
          }
        </div>
        <div className="w-1/2 flex justify-center">
          <div className="flex flex-col gap-9 top-[130px] w-[400px] fixed">
            <div className="w-full h-[120px] border flex flex-col justify-center items-center">
              <div>Finish before</div>
              <MyTimer expiryTimestamp={time} />
            </div>
            <button className="p-3 self-center w-[200px] bg-black text-white rounded-xl uppercase font-bold text-sm">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exam;
