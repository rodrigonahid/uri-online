import Image from "next/image";
import HuluLogoImg from "../img/hulu-logo.png";
import { HeaderItem } from "./HeaderItem";

export function Header(){
  return(
    <header>
      <div>
        <HeaderItem />
        <HeaderItem />
        <HeaderItem />
      </div>
      <Image src={HuluLogoImg} alt="hulu" height={80} width={200}/>
    </header>
  )
}