import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <footer className='bg-black text-white'>
      <div className="align-element min-h-[15vh] flex flex-col justify-center items-center gap-4">
        <p className="my-2">-2025-</p>
        <div className="flex flex-row gap-2 mars-font ">
        <p className="mars-font text-center">Space Horizon,</p> 
        <p>by Ilyes</p>

        </div>
        <p className="underline">Resources :</p>
        <div className="flex flex-row gap-2">
        <Link className="text-zinc-300  " to={"https://www.nasa.gov/"} target="_blank">NASA</Link> |      
        <Link className="text-zinc-300" to={"https://api.nasa.gov/"} target="_blank">NASA API</Link> |    
        <Link className="text-zinc-300" to={"https://www.youtube.com/@NASA"} target="_blank">NASA YOUTUBE CHANNEL</Link>
        </div>
        <div className="flex flex-row gap-2">
        <Link className="text-zinc-300  " to={"https://www.webbtelescope.org/home"} target="_blank">JWST</Link> |      
        <Link className="text-zinc-300" to={"https://jwstapi.com/"} target="_blank">JWST API</Link>  
        </div>
        <div className="flex flex-row gap-2">
        <Link className="text-zinc-300  " to={"https://www.esa.int/"} target="_blank">ESA</Link>       
        </div>
        <div className="flex flex-row gap-2">
        <Link className="text-zinc-300  " to={"https://www.spacex.com/"} target="_blank">SPACEX</Link>      | 
        <Link className="text-zinc-300  " to={"https://www.spacex.com/"} target="_blank">SPACEX API</Link>       
        </div>
        <div className="flex flex-row gap-2">
        <Link className="text-zinc-300  " to={"https://www.datastro.eu/pages/home"} target="_blank">DATASTRO API</Link>       
        </div>
        <div className="flex flex-row gap-2">
        <Link className="text-zinc-300 mb-8  " to={"https://www.spaceflightnewsapi.net/"} target="_blank">SNAPI API</Link>       
        </div>
    

      </div>
    </footer>
  )
}

export default Footer