"use client";
import Navbar from "@/components/Navbar";
import PageOne from "../components/PageOne";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [gradientIndex, setGradientIndex] = useState(0);
  
  const gradients = [
    "from-blue-200 to-purple-300",
    "from-red-200 to-yellow-300",
    "from-green-200 to-teal-300",
  ];



  useEffect(() => {
    const interval = setInterval(() => {
      setGradientIndex((prevIndex) => (prevIndex + 1) % gradients.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`bg-gradient-to-r ${gradients[gradientIndex]}`}>
      <motion.div
        className={` mx-auto w-100 transition-opacity duration-500 wrapper overflow-y-hidden `}
      >
        <Navbar />
        <PageOne />
      </motion.div>
    </div>
  );
}
