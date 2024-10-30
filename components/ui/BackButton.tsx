import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";

interface BackButtonProps {
    text: string;
    link: string; 
}

const BackButtonProps = ({text, link}: BackButtonProps) => {
    return ( 
<Link href={link} className="txt-gray-500 hover:underline flex items-center gap-1 font-bold mb-5">
<ArrowLeftCircle size={18}></ArrowLeftCircle>
{text}
</Link>
     );
}
 
export default BackButtonProps;