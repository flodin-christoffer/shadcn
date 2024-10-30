import Image from "next/image";
import Link from "next/link";
import logo from "../../img/logo.jpg"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
 import ThemeToggler from "../ThemeToggler"; 

const Navbar = () => {
    return ( <div className="bg-primary dark:bg-slate-700 text-white py-2 px-5 flex justify-between">
        <Link href='/'>
        <Image className="rounded-3xl" src={ logo } alt="CC " width={80} height={80} />
        </Link>
        <div className="flex items-center">
        <ThemeToggler></ThemeToggler>
        
        <DropdownMenu>
  <DropdownMenuTrigger className="focus:outline-none">
  <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
            <AvatarFallback>Fall back Avatar</AvatarFallback>
        </Avatar>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem><Link href="/profile"> Profile </Link></DropdownMenuItem>
    <DropdownMenuItem><Link href="/auth"> Logout </Link></DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
</div>
    </div> );
}
 
export default Navbar;