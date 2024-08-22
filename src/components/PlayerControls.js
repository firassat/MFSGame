import { motion } from "framer-motion";
import Transition, { Transition2 } from "./Transition";

export default function PlayerControls({ player, onPlayerChange }) {
  return (
    <div onClick={onPlayerChange} className="player z-10 w-36 ">
      <Transition2 x1={300} x2={0} r1={100} r2={0} delay={0.3}>
        {" "}
        <button name="1" className={`${player === "1" ? "active" : ""} w-full`}>
          With computer
        </button>
      </Transition2>
      <Transition2 x1={300} x2={0} r1={100} r2={0} delay={0.2}>
        {" "}
        <button
          name="2"
          className={`${player === "2" ? "active" : ""} w-full  `}
        >
          Multi Player
        </button>
      </Transition2>
      <Transition2 x1={300} x2={0} r1={100} r2={0} delay={0.1}>
        {" "}
        <button name="3" className="w-full">
          RESET
        </button>
      </Transition2>
    </div>
  );
}
