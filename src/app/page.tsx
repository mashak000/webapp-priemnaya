"use client";

import { useContext } from "react";
import { webAppContext } from "./context/context";
import FlowerCard from "@/components/ui/FlowerCard";
import Carusel from "@/components/ui/Carusel";

export default function Home() {
  const app = useContext(webAppContext).appRef.current;

  const flowers = [
    {
      id: 1111,
      name: "Romashki",
      price: 29000,
      imagelink:
        "https://dostavka-tsvety.ru/wp-content/uploads/2019/12/13b832a2f9fcffd057117c09dff04f8d.jpeg",
    },
    {
      id: 2222,
      name: "Roses",
      price: 3000,
      imagelink:
        "https://m.media-amazon.com/images/I/61QFtjVVy5L._AC_SL1024_.jpg",
    },
    {
      id: 3333,
      name: "Nesabudki",
      price: 7000,
      imagelink:
        "https://сады-эдема.рф/images/cms/data/Zvetochki/Prochie_mnogoletnie_rasteniya/Prochie_mnogoletnie_2021/Prochie_mnogoletnie/06555_nezabudka_002.jpg",
    },
  ];
  

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
          <Carusel items={flowers}/>
          </div>
      ) : (
        "loading"
      )}
    </>
  );
}
