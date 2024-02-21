import { NextPage } from "next";
import React from "react";

const LandingInformation: NextPage = () => {
    return (
        <div className="my-16 w-full mx-auto max-w-[1240px] flex flex-col gap-4 items-center">
            <div className="uppercase text-greyText font-bold text-xl">
                examine your candidates online with 100% behaviour with no mal-practice
            </div>
            <button className="p-3  w-[200px] bg-black text-white rounded-xl uppercase font-bold text-sm">
                sign up
            </button>
            <div className="mt-10 border border-greyText rounded-sm max-w-[500px] p-10 w-full h-auto gap-5 flex flex-col items-center justify-center">
                <div className="text-black font-semibold">
                    Why to choose Proctor X ?
                </div>
                <div className="flex flex-col">
                    <div>1. Best online exam interface</div>
                    <div>2. Full test proctored</div>
                    <div>3. Behavior of candidate recorded</div>
                    <div>4. Copy/Paste Disabled</div>
                    <div>5. Tab switching disabled</div>
                </div>
            </div>
        </div>
    );
};

export default LandingInformation;
