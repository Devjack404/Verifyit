import { Link } from "react-router-dom";

export default function Logo(){
    return (
        <Link 
            to="/" 
            className="text-xl font-bold text-blue-800 tracking-tight"
        >
        VerifyIt
        </Link>
    );
}