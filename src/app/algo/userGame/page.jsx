"use client";

import Actions from "../../../logic/algo/logic/Actions";
import MoveAction from "../../../logic/algo/logic/MoveAction";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import GameLevel from "@/components/GameLevel";
import { useSearchParams } from "next/navigation";
import Transition, { Transition3 } from "@/components/Transition";
import { useCookies } from "next-client-cookies";
import { SlArrowUp } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

function Page() {
  const params = useSearchParams();
  const player = params.get("player");
  const cookies = useCookies();
  const router = useRouter();
  const game1 = useSelector((state) => state.game.value);
  const [game, setgame] = useState(game1);
  const [keyM, setkeyM] = useState([0, 0, 0, 0]);
  const [win, setwin] = useState(0);
  // const [showallstate, setshowallstate] = useState(0);
  const action = new Actions();
  const print = action.print(game);
  const [level, setLevel] = useState(cookies.get("game"));

  let movekey = MoveAction();
  const checkmove = action.nextState(game);

  const handelKey = (e) => {
    if (e === "u") {
      setkeyM([1, 0, 0, 0]);
    }
    if (e === "d") {
      setkeyM([0, 1, 0, 0]);
    }
    if (e === "l") {
      setkeyM([0, 0, 1, 0]);
    }
    if (e === "r") {
      setkeyM([0, 0, 0, 1]);
    }
  };
  useEffect(() => {
    setkeyM([movekey.up, movekey.down, movekey.left, movekey.rgiht]);
  }, [movekey]);

  useEffect(() => {
    if (
      (keyM[0] === 1 && checkmove.up[0]) ||
      (keyM[1] === 1 && checkmove.down[0]) ||
      (keyM[2] === 1 && checkmove.left[0]) ||
      (keyM[3] === 1 && checkmove.right[0])
    ) {
      setgame(action.move(game, keyM));
      setwin(action.checkWin(action.move(game, keyM)));
    }
  }, [keyM]);

  // useEffect(() => {
  //   setalllpeint(action.printAll(allstate));
  // }, [win]);

  // if (showallstate && curentprintindex <= alllpeint.length) {
  //   setTimeout(() => {
  //     setcurentprintindex((p) => p + 1);
  //     setcurentprint(alllpeint[curentprintindex]);
  //   }, 100);
  // }
  const gamemodel = new GameLevel();
  const handelNextlevel = () => {
    setwin(0);
    const level = parseInt(cookies.get("game"));
    setLevel(level + 1);
    cookies.set("game", level + 1);
    setgame(gamemodel[`level${level + 1}`]());
  };

  const handelReset = () => {
    setwin(0);
    setgame(gamemodel[`level${level}`]());
  };
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen gap-5">
      {win && !player ? (
        <>
          <Transition y1={200} y2={0} r1={50} r2={0} delay={0}>
            <h1 className="text-xl text-center">{win ? "You Won" : ""}</h1>
          </Transition>
          <Transition y1={200} y2={0} r1={50} r2={0} delay={0.1}>
            <button className="mainButton2" onClick={handelReset}>
              Play again
            </button>
          </Transition>
          <Transition y1={200} y2={0} r1={50} r2={0} delay={0.2}>
            <button className="mainButton2" onClick={handelNextlevel}>
              Next level
            </button>
          </Transition>
        </>
      ) : win && player ? (
        <>
          <h1 className=" text-center">{win ? "You Won" : ""}</h1>
          <Transition y1={200} y2={0} r1={50} r2={0} delay={0.2}>
            <button
              className="mainButton2"
              onClick={() => router.push("/algo")}
            >
              Back
            </button>
          </Transition>
        </>
      ) : (
        <div className="flex flex-col justify-around items-center w-full h-screen gap-7 ">
          <Transition y1={-200} y2={0} r1={50} r2={0} delay={0.5}>
            <h2 className="text-xl">level {level}</h2>
          </Transition>
          <Transition3 s1={0} s2={1} r1={50} r2={0} delay={0.1}>
            {print}
          </Transition3>
          <div className="flex flex-col gap-4 justify-center items-center w-1/2 md:hidden ">
            <div onClick={() => handelKey("u")}>
              <SlArrowUp />
            </div>
            <div className="flex justify-between gap-12">
              <div onClick={() => handelKey("l")}>
                <SlArrowLeft />
              </div>
              <div onClick={() => handelKey("r")}>
                <SlArrowRight />
              </div>
            </div>

            <div onClick={() => handelKey("d")}>
              <SlArrowDown />
            </div>
          </div>
          <div className="flex gap-5 items-end justify-center">
            <Transition y1={200} y2={0} r1={50} r2={0} delay={0.7}>
              <button className="mainButton2" onClick={() => router.back()}>
                Back
              </button>
            </Transition>
            <Transition y1={200} y2={0} r1={50} r2={0} delay={0.8}>
              <button
                className="mainButton2"
                onClick={() => setgame(gamemodel[`level${level}`]())}
              >
                RESET
              </button>
            </Transition>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
