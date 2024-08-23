import { motion } from "framer-motion";
import Transition, { Transition2 } from "./Transition";

export default function PlayerControls({ player, onPlayerChange }) {
  return (
    <div onClick={onPlayerChange} className="player z-10 w-36 ">
      <Transition y1={100} y2={0} r1={0} r2={0} delay={0.1}>
        {" "}
        <button
          name="1"
          className={`${player === "1" ? "active" : ""} mainButton2`}
        >
          With computer
        </button>
      </Transition>
      <Transition y1={100} y2={0} r1={0} r2={0} delay={0.2}>
        {" "}
        <button
          name="2"
          className={`${player === "2" ? "active" : ""} mainButton2  `}
        >
          Multi Player
        </button>
      </Transition>
      <Transition y1={100} y2={0} r1={0} r2={0} delay={0.3}>
        {" "}
        <button name="3" className="mainButton2">
          RESET
        </button>
      </Transition>
    </div>
  );
}
