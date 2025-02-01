import { useRouteError } from "react-router-dom"
const ErrorElement = () => {

    const error = useRouteError()
    console.log('error Router Error :',error  )
  return (
    <h4>
        Une erreur est survenue 🙁 veuillez nous en excusez !
    </h4>
  )
}

export default ErrorElement