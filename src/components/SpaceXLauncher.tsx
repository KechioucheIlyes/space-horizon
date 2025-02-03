import React from 'react'
import { Link } from 'react-router-dom'

const SpaceXLauncher = () => {
  return (
    <article className="w-full h-[40vh] spacex ">
      <div className="align-element text-zinc-300">
        <p className="font-bold text-4xl ">
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