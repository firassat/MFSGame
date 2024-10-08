import { motion } from "framer-motion";
import Transition, { Transition2 } from "./Transition";

export default function ScoreBoard({ score, onReset }) {
  return (
    <div onClick={onReset} className="score z-10 w-36">
      <Transition y1={-100} y2={0} r1={0} r2={0} delay={0.3}>
        <h1>{`THE X WIN "${score[0]}"`}</h1>
      </Transition>
      <Transition y1={-100} y2={0} r1={0} r2={0} delay={0.2}>
        <h1>{`THE O WIN "${score[1]}"`}</h1>
      </Transition>
      <Transition y1={-100} y2={0} r1={0} r2={0} delay={0.1}>
        <button name="3" className="mainButton2">
          RESET
        </button>
      </Transition>
    </div>
  );
}
