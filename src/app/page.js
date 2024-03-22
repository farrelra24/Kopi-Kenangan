import Image from "next/image";
import Carosel from "~/components/carosel";
import NextCarosel from "~/components/carosel2";
import NewFromJiwa from "~/components/terbaruJiwaGroup";

export default function Home(){
  return(
    <div>
      <Carosel/>
      <NextCarosel />
      <NewFromJiwa />
    </div>
  )
}
