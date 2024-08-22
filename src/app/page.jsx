"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Transition from "@/components/Transition";

export default function Home() {
  return (
    <div className="flex items-center flex-col justify-around h-screen overflow-hidden">
      <motion.div
        className="mainContainer w-[500%] md:w-[200%]"
        initial={{ opacity: 0, top: -350 }}
        animate={{ opacity: 1, top: 320 }}
        exit={{ opacity: 0, top: -350 }}
        transition={{ delay: 0, duration: 0.6, type: "spring" }}
      ></motion.div>
      <Transition
        y1={-300}
        y2={0}
        delay={0.2}
        className="text-[50px] text-center"
      >
        <span className="text-main font-bold">MFS</span> GAME
      </Transition>
      <div className="flex items-center justify-around flex-col gap-5 md:flex-row md:gap-32">
        <Transition y1={200} y2={0} delay={0.3}>
          <Link className="mainButton" href="/algo">
            Puzzel With Algorithm
          </Link>
        </Transition>

        <Transition y1={200} y2={0} delay={0.5}>
          <Link className="mainButton" href="/x-o">
            X/O MinMax Algorithm
          </Link>
        </Transition>
      </div>
    </div>
  );
}
