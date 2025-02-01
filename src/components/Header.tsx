import { Link } from "react-router"
import AlienImg from "./../assets/images/Alien.svg"
import { ReactNode } from "react"

const Header = ():ReactNode => {
  return (
    <header className=' bg-black'>
      <div className="align-element grid grid-cols-2 md:grid-cols-3 p-2">
        <Link to={"/"} className="justify-self-start self-center">
        <h1 className="mars-font text-2xl pt-2 tracking-[0.8rem] text-zinc-300">Space Horizon</h1>
        </Link>
        <Link to={"/"} className="justify-self-end self-center md:justify-self-center" >
        <div className="border-2 border-zinc-300 w-fit rounded-[50%] bg-zinc-300 relative ">
        <img src={AlienImg} alt="alien-logo" className="h-20 w-20 object-cover  " />
        </div>
        </Link>
      </div>
    </header>
  )
}

export default Header