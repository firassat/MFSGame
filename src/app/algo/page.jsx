"use client";
import { createContext, useEffect, useState } from "react";
import GameLevel from "../../components/GameLevel.js";

import Link from "next/link";

import { setGame } from "../../store/gameSlice.js";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import Transition, { Transition2 } from "@/components/Transition.js";
import { useCookies } from "next-client-cookies";
export const GameContext = createContext(null);

const Page = () => {
  const gamemodel = new GameLevel();
  const dispatch = useDispatch();
  const router = useRouter();
  const cookies = useCookies();
  const [level, setLevel] = useState(cookies.get("game"));
  useEffect(() => {
    if (cookies.get("game") == undefined) {
      cookies.set("game", 1);
    }

    setLevel(cookies.get("game"));
    dispatch(setGame(gamemodel[`level${cookies.get("game")}`]()));
  }, []);

  const choseHandle = (e) => {
    if (e.target.value == 1) {
      dispatch(setGame(gamemodel[`level${cookies.get("game")}`]()));
      router.push("/algo/userGame");
    }
    if (e.target.value == 2) dispatch(setGame(gamemodel["level2"]()));
    if (e.target.value == 3) {
      cookies.set("game", 1);
      dispatch(setGame(gamemodel["level1"]()));
      router.push("/algo/userGame");
    }
    if (e.target.value == 4) {
      dispatch(setGame(gamemodel.level100()));
      router.push("/algo/chooseLogic");
    }
  };

  return (
    <>
      <div className="text-center p-10 flex flex-col gap-10 justify-center items-center md:p-20">
        <Transition y1={-200} y2={0} delay={0}>
          <h1 className=" text-2xl  md:text-[3rem]">Choose option</h1>
        </Transition>
        <Transition2 x1={200} x2={0} r1={50} r2={0} delay={0.1}>
          {" "}
          <button className="w-52" onClick={choseHandle} value={1}>
            {level == 1 ? "START GAME" : "Continue with Level " + level}
          </button>
        </Transition2>

        {level > 1 && (
          <Transition2 x1={-200} x2={0} r1={-50} r2={0} delay={0.2}>
            {" "}
            <button className="w-52" onClick={choseHandle} value={3}>
              NEW GAME
            </button>
          </Transition2>
        )}
        <Transition2 x1={200} x2={0} r1={50} r2={0} delay={0.3}>
          {" "}
          <button className="w-52" onClick={choseHandle} value={4}>
            Test Smart Search Algorithms
          </button>
        </Transition2>
        <Transition2 x1={-200} x2={0} r1={-50} r2={0} delay={0.4}>
          {" "}
          <Link href={"/algo/dis"} className="w-52 block button">
            Design Level
          </Link>
        </Transition2>
        <Transition2 x1={200} x2={0} r1={50} r2={0} delay={0.5}>
          <button className="button w-52" onClick={() => router.back()}>
            Back
          </button>
        </Transition2>
      </div>
    </>
  );
};

export default Page;
