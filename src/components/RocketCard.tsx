import { Rocket } from "@/utils/types"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"


const RocketCard = ({rocket} : {rocket : Rocket }) => {
    const {rocket_name , cost_per_launch ,flickr_images, description , diameter , height , mass , engines , first_flight , stages , second_stage , payload_weights , first_stage } = rocket
    const {meters : diam} = diameter
    const {meters : hght} = height
    const { kg} = mass
    

  return (
    <Card className="bg-muted my-6">
        <CardHeader>
            <CardTitle className="text-2xl my-2">{rocket_name}</CardTitle>
            <CardDescription>
                <img src={flickr_images[0]} alt={`image-${rocket_name}`} className="rounded-2xl h-full w-full object-cover"/>
            </CardDescription>
        </CardHeader>
        <CardContent>
            <p className="">Diameter : {diam} m </p>
            <p className="">Height : {hght} m </p>
            <p className="">Mass : {kg} kg</p>
            <p className="">First Flight : {first_flight.split('-').reverse().join('-')} </p>
            <p className="">Cost per launch : {cost_per_launch} $</p>
            <div className="mt-2">Payload : {payload_weights.map(payload => 
                <p className="">{payload.name} : {payload.kg} kgs</p>) } </div>
            <p className="mt-2">Engines : </p>
            <p className="">{engines.number} {engines.type} (s) </p>
            <p className="">Props :{engines.propellant_1} + {engines.propellant_2}</p>
            <p className="">ISP: sea : {engines.thrust_sea_level.kN}KNs / vac : {engines.thrust_vacuum.kN} </p>
            <p className="">Thrust to weight : {engines.thrust_to_weight}</p>
            <p className="mt-2">Stages : {stages}</p>
            <span className="">
            <p className="">First Stage : </p>
            <p className="">Reusable : </p>
            {first_stage.reusable ? "Yes" : "No"}
            <p className="">Engines : {first_stage.engines} </p>
            </span>


             
        </CardContent>
        <CardFooter>{description}</CardFooter>
    </Card>
  )
}

export default RocketCard