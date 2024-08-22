"use client";
import Transition, { Transition2 } from "@/components/Transition";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();

  return (
    <div className="text-center p-10 flex flex-col gap-7 justify-center items-center overflow-auto">
      <Transition className="p-5 text-[3rem] " y1={-100} y2={0} delay={0}>
        <h1 className="p-5 text-[3rem]">Choose option</h1>
      </Transition>
      <Transition2
        className="w-52"
        x1={-200}
        x2={0}
        r1={-50}
        r2={0}
        delay={0.2}
      >
        <Link
          href={{
            pathname: "/algo/algoGame",
            query: { fun: "bfs" },
          }}
          className="button"
        >
          BFS
        </Link>
      </Transition2>
      <Transition2 className="w-52" x1={200} x2={0} r1={50} r2={0} delay={0.3}>
        <Link
          href={{
            pathname: "/algo/algoGame",
            query: { fun: "dfs" },
          }}
          className=" button"
        >
          DFS
        </Link>
      </Transition2>
      <Transition2
        className="w-52"
        x1={-200}
        x2={0}
        r1={-50}
        r2={0}
        delay={0.4}
      >
        <Link
          href={{
            pathname: "/algo/algoGame",
            query: { fun: "ucs" },
          }}
          className=" button"
        >
          UCS
        </Link>
      </Transition2>
      <Transition2 className="w-52" x1={200} x2={0} r1={50} r2={0} delay={0.5}>
        <Link
          href={{
            pathname: "/algo/algoGame",
            query: { fun: "hur" },
          }}
          className=" button"
        >
          Hur
        </Link>
      </Transition2>
      <Transition2
        className="w-52"
        x1={-200}
        x2={0}
        r1={-50}
        r2={0}
        delay={0.6}
      >
        <Link
          href={{
            pathname: "/algo/algoGame",
            query: { fun: "AStar" },
          }}
          className=" button"
        >
          AStar
        </Link>
      </Transition2>
      <Transition2 className="w-52" x1={200} x2={0} r1={50} r2={0} delay={0.7}>
        <button className="button w-52" onClick={() => router.back()}>
          Back
        </button>
      </Transition2>
    </div>
  );
}

export default Page;
