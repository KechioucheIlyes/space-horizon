import { Button } from "@/components/ui/button"
import { Link, useRouteError } from "react-router-dom"

const ErrorMain = () => {
 
    const error = useRouteError()
    console.log('error Router Error :',error  )
  return (
    <div className="section flex flex-col gap-10 justify-center items-center">
      <h4>
          Une erreur est survenue 🙁 veuillez nous en excusez !
      </h4>
      <Button asChild size={"lg"} variant={"default"}>
        <Link to={'/'}>Back home</Link>
      </Button>
    </div>
  )
}

export default ErrorMain