import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-screen h-[80vh] bg-white flex flex-row">
      <div className="w-3/5 h-full bg-green-500"></div>
      <div className="w-2/5 h-full bg-black">
        <p className="text-softGreen">from the daylight</p>
      </div>
    </div>
  );
}
