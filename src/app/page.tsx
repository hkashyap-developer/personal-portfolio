import Image from "next/image";
import Herobanner from "@/components/custom/herobanner/herobanner";
import Alltestimonials from "@/components/custom/global/testimonial/testimonial";

export default function Home() {
  return (
    <div className="">
      <Herobanner />
      <Alltestimonials />
    </div>
  );
}
