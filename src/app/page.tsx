import Image from "next/image";
import Navbar from "@/components/custom/global/navbar/navbar";
import Herobanner from "@/components/custom/herobanner/herobanner";
import Herobannertext from "@/components/custom/herobannertext/herobannertext";
import Alltestimonials from "@/components/custom/global/testimonial/testimonial";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Herobannertext />
      <Herobanner />
      <Alltestimonials />
    </div>
  );
}
