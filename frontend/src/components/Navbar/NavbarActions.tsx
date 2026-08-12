import { Link } from "react-router-dom";

export default function NavActions(){
    return (
        <Link
            to="/analyze"
            className="rounded-3xl bg-blue-800 px-8 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
        >
            Analyze Now
        </Link>
    );
}