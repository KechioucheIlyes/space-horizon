import { Link } from "react-router"

const WebbLauncher = () => {
  return (
    <article className=" w-full h-[40vh] jwst text-zinc-300 pt2">
      <div className="align-element p-2 flex flex-col">
        <p className="text-4xl font-bold max-w-[50%] place-self-end text-right">
          The Most Recent James Webb Images
        </p>
        <button type="button" className="slider-btn mt-4 place-self-end">
          <Link to={"/webb"}>Explore</Link>
        </button>
      </div>
    </article>
  )
}

export default WebbLauncher