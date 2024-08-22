"use client";
import Actions from "../../../logic/algo/logic/Actions";
import { useEffect, useState } from "react";
import BFS from "../../../components/algorethm/BFS";
import DFS from "../../../components/algorethm/DFS";
import UFC from "../../../components/algorethm/UFC";
import { useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

import Hur from "../../../components/algorethm/Hur";
import AStar from "../../../components/algorethm/AStar";

function Page() {
  const router = useRouter();

  const game = useSelector((state) => state.game.value);

  const params = useSearchParams();
  const fun = params.get("fun");

  console.log(fun);

  const [win, setwin] = useState(0);
  const [showallstate, setshowallstate] = useState(0);
  const [cost, setcost] = useState(0);
  const [allstate, setallstate] = useState(0);
  const action = new Actions();
  const [alllpeint, setalllpeint] = useState();
  const [curentprint, setcurentprint] = useState();
  const [curentprintindex, setcurentprintindex] = useState(0);

  const bb = () => {
    const bfs = new BFS();
    const solv = bfs.bfs(game);
    setalllpeint(action.printAll(solv.fullPath));

    if (solv.fullPath.length) setwin(1);
    else setwin(0);
    setallstate(solv.state);
    setcost(solv.cost);
  };
  const dd = () => {
    const dfs = new DFS();
    const solv = dfs.dfs(game);
    setalllpeint(action.printAll(solv.fullPath));
    if (solv.fullPath.length) setwin(1);
    else setwin(0);
    setallstate(solv.state);
    setcost(solv.cost);
  };
  const uu = () => {
    const ufc = new UFC();
    const solv = ufc.ufc(game);
    setalllpeint(action.printAll(solv.fullPath));
    if (solv.fullPath.length) setwin(1);
    else setwin(0);
    setallstate(solv.state);
    setcost(solv.cost);
  };
  const hh = () => {
    const hur = new Hur();
    const solv = hur.hur(game);
    setalllpeint(action.printAll(solv.fullPath));
    if (solv.fullPath.length) setwin(1);
    else setwin(0);
    setallstate(solv.state);
    setcost(solv.cost);
  };
  const Astar = () => {
    const astar = new AStar();
    const solv = astar.astar(game);
    setalllpeint(action.printAll(solv.fullPath));
    if (solv.fullPath.length) setwin(1);
    else setwin(0);
    setallstate(solv.state);
    setcost(solv.cost);
  };

  useEffect(() => {
    if (fun === "bfs") bb();
    else if (fun === "dfs") {
      dd();
    } else if (fun === "ucs") {
      uu();
    } else if (fun === "hur") {
      hh();
    } else if (fun === "AStar") {
      Astar();
    }
  }, []);

  useEffect(() => {
    if (alllpeint) setcurentprintindex(alllpeint.length);
  }, [alllpeint]);

  if (curentprintindex >= 0 && alllpeint) {
    setTimeout(() => {
      setcurentprintindex((p) => p - 1);
      setcurentprint(alllpeint[curentprintindex]);
    }, 200);
  }

  const Display = () => {
    return (
      <div key={curentprintindex} className="flex flex-wrap all">
        {curentprint}
      </div>
    );
  };
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen">
      {!win ? (
        <>
          <h1 className="m-24 text-center">{"didn't solve"} </h1>
          <button className="button w-40" onClick={() => router.back()}>
            Back
          </button>
        </>
      ) : (
        <>
          <h1 className="text-center">{allstate} All State</h1>
          <h1 className="text-center">{alllpeint.length} State</h1>
          <h1 className="text-center ">{cost} Cost</h1>
          <Display />
          <button
            className="button w-40"
            onClick={() => {
              setcurentprintindex(alllpeint.length);
            }}
          >
            Replay
          </button>
          <button className="button w-40" onClick={() => router.back()}>
            Back
          </button>
        </>
      )}
    </div>
  );
}

export default Page;
