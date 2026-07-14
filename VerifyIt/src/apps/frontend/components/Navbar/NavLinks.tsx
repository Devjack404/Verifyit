import {Link} from "react-router-dom";

export default function NavLinks(){
    return(
        <>
            <Link to='/'>Home</Link> 
            <Link to='/about'>About</Link>
            <Link to='/analayze'>Analyze</Link>
        </>
    );
}