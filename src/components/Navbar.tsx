import { ReactNode } from "react"
import LinksMobile from "./LinksMobile"
import LinksDesktop from "./LinksDesktop"

const Navbar = () => {
  return (
    <nav className='bg-black '>
      <div className="align-element py-5">
        <LinksMobile/>
        <LinksDesktop/>
      </div>
    </nav>
  )
}

export default Navbar