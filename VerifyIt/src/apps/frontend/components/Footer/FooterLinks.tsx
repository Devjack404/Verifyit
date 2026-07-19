import {Link} from "react-router-dom";

export default function FooterLinks(){
    return (
        <>
            <Link to='/about'>About</Link>
            <Link to='/about'>Documentation</Link>
            <Link to='/about'>Github</Link>
            <Link to='/about'>Privacy Policy</Link>
            <Link to='/about'>Contact</Link>
        </>
    );
}