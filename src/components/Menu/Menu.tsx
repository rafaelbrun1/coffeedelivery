import { Header } from "../Header";
import { Coffees } from "./Coffees";
import { Marketing } from "./Marketing";

export function Menu() { 
  return ( 
    <div className="flex flex-col items-center justify-center">
    <Header />
    <Marketing />
    <Coffees />
    </div>
  )
}