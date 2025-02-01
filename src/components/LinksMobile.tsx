
import { Link, links } from '@/utils/links'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from './ui/dropdown-menu'
import { NavLink } from 'react-router-dom'
import { Button } from './ui/button'
import { AlignLeft } from 'lucide-react'


const LinksMobile = () => {
  return (
    <div>
        <DropdownMenu>
            <DropdownMenuTrigger asChild className='lg:hidden'>
            <Button variant={'outline'} size={'icon'} > <AlignLeft /> </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent  className='lg:hidden' align="start" sideOffset={10} >
            {links.map(link => {
        const {ref , label} = link as Link
        return <DropdownMenuItem key={label}>
            <NavLink className={({isActive}) => `capitalize tracking-wide font-light ${isActive ? "text-primary" : ''} `} to={ref}>{label}</NavLink>
        </DropdownMenuItem> 
    })}
            </DropdownMenuContent>
        </DropdownMenu>
    </div>
  )
}

export default LinksMobile