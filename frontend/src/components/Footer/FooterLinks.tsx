import {Link} from "react-router-dom";

export default function FooterLinks(){
    return (
        <>
            <Link to='/about'>About</Link>
            <Link to='/documentation'>Documentation</Link>
            <Link to='https://github.com/Devjack404/Verifyit'>Github</Link>
            <Link to='/privacy&policy'>Privacy Policy</Link>
            <Link to='/contact'>Contact</Link>
        </>
    );
}