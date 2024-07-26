"use client";

import { useContext } from "react";
import { webAppContext } from "./context/context";
import { data } from "./data";
import FlowerCard from "@/components/ui/FlowerCard";
import Carusel from "@/components/ui/Carusel";

export default function Home() {
  const app = useContext(webAppContext).appRef.current;

  return (
    <>
      {app.version ? (
        <div className="h-full w-full text-center pt-4">
          <code className="">{app.colorScheme}</code>
          <h3 className="font-bold mb-1 text-xl">
            Welcome {app.initDataUnsafe.user?.first_name}!
          </h3>
          <div className="font-medium text-sm text-center">
            I&apos;m Mini App for Telegram
          </div>
          <Carusel items={data} />
        </div>
      ) : (
        "loading"
      )}
    </>
  );
}
