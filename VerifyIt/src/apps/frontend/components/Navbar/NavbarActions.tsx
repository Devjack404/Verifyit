import { Link } from "react-router-dom";

export default function NavActions(){
    return (
        <Link
            to="/analyze"
            className="rounded-lg bg-blue-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
        >
            Analyze
        </Link>
    );
}