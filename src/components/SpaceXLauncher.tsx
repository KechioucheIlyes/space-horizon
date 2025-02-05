import { Link } from 'react-router-dom'

const SpaceXLauncher = () => {
  return (
    <article className="w-full h-[300px] spacex ">
      <div className="align-element h-full flex flex-col justify-center items-center text-zinc-300">
        <p className="font-bold text-4xl  text-center">
            More About SpaceX
        </p>
        
        <button type="button" className="mt-4 border-2  slider-btn">
          <Link to={"/spacex"}>Explore</Link>
        </button>
      </div>
    </article>
  )
}

export default SpaceXLauncher