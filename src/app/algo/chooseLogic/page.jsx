"use client";
import Transition, { Transition2 } from "@/components/Transition";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();

  return (
    <div className="text-center p-5 flex flex-col gap-7 justify-center items-center overflow-auto">
      <Transition className="p-5 text-[3rem] " y1={-100} y2={0} delay={0}>
        <h1 className="p-5 text-[1.5rem] md:text-[3rem]">Choose option</h1>
      </Transition>
      <Transition2 x1={-100} x2={0} r1={0} r2={0} delay={0.2}>
        <Link
          href={{
            pathname: "/algo/algoGame",
            query: { fun: "bfs" },
          }}
          className="mainButton2"
        >
          BFS
        </Link>
      </Transition2>
      <Transition2 x1={100} x2={0} r1={0} r2={0} delay={0.3}>
        <Link
          href={{
            pathname: "/algo/algoGame",
            query: { fun: "dfs" },
          }}
          className="mainButton2"
        >
          DFS
        </Link>
      </Transition2>
      <Transition2 x1={-100} x2={0} r1={0} r2={0} delay={0.4}>
        <Link
          href={{
            pathname: "/algo/algoGame",
            query: { fun: "ucs" },
          }}
          className="mainButton2"
        >
          UCS
        </Link>
      </Transition2>
      <Transition2 x1={100} x2={0} r1={0} r2={0} delay={0.5}>
        <Link
          href={{
            pathname: "/algo/algoGame",
            query: { fun: "hur" },
          }}
          className="mainButton2"
        >
          Hur
        </Link>
      </Transition2>
      <Transition2 x1={-100} x2={0} r1={0} r2={0} delay={0.6}>
        <Link
          href={{
            pathname: "/algo/algoGame",
            query: { fun: "AStar" },
          }}
          className="mainButton2"
        >
          AStar
        </Link>
      </Transition2>
      <Transition2 x1={100} x2={0} r1={0} r2={0} delay={0.7}>
        <button className="mainButton2" onClick={() => router.back()}>
          Back
        </button>
      </Transition2>
    </div>
  );
}

export default Page;
