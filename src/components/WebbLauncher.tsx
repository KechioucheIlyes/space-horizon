import { Link } from "react-router"

const WebbLauncher = () => {
  return (
    <article className=" w-full h-[300px] jwst text-zinc-300 pt2">
      <div className="align-element   h-full flex flex-col justify-center items-center">
        <p className="text-4xl font-bold   text-center">
          The Most Recent James Webb Images
        </p>
        <button type="button" className="slider-btn mt-4">
          <Link to={"/webb"}>Explore</Link>
        </button>
      </div>
    </article>
  )
}

export default WebbLauncher