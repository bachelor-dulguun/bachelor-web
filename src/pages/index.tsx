import Image from "next/image";
import { Inter } from "next/font/google";
import LandingHome from "@/subsets/LandingHome";
import LandingInformation from "@/subsets/LandingInformation";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-screen h-auto bg-white flex flex-col">
      <LandingHome />
      <LandingInformation />
      <Footer />
    </div>
  );
}
