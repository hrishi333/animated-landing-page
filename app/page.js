"use client";
import Navbar from "@/components/Navbar";
import PageOne from "../components/PageOne";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [gradientIndex, setGradientIndex] = useState(0);

  const gradientCss= ["grad1","grad2","grad3"];
  const gradients = [
    "from-[#2b5876] to-[#ffdde1]",
    "from-[#cc2b5e] to-[#753a88]",
    "from-[#799F0C] to-[#ACBB78]",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientIndex((prevIndex) => (prevIndex + 1) % gradientCss.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      <div className={` ${gradientCss[gradientIndex]} overflow-y-hidden`}>
      <Navbar />
        <motion.div
          className={` mx-auto w-100 transition-opacity duration-500 wrapper  overflow-y-hidden `}
        >
            
          <PageOne />
        </motion.div>
      </div>
      <div className="section-two bg-black w-100 h-100">
      hello
      </div>
    </div>
  );
}
