import Image from "next/image";
import Carosel from "~/components/carosel";
import NextCarosel from "~/components/carosel2";

export default function Home(){
  return(
    <div>
      <Carosel/>
      <NextCarosel />
    </div>
  )
}
