import { Input } from "./ui/input";
import { Label } from "./ui/label";

type FormInputProps = {
    label:string;
    name:string;
    type:string;
    defaultValue?:string;
    placeholder :string;
}

const FormInput = ({label , name, type , defaultValue , placeholder } : FormInputProps ) => {
  return (
    <div className="flex flex-col gap-2">
        <Label className="capitalize text-xl " htmlFor={name}>{label || name}</Label>
        <Input id={name} name={name} type={type} defaultValue={defaultValue ?defaultValue :"" } placeholder={placeholder}/>
    </div>
  )
}

export default FormInput