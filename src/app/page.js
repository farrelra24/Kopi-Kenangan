import Image from "next/image";
import Carosel from "~/components/carosel/page";
import NextCarosel from "~/components/carosel2/page";

export default function Home(){
  return(
    <div>
      <Carosel/>
      <NextCarosel />
    </div>
  )
}
