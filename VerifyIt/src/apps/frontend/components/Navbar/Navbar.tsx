import Logo from "./Logo";
import NavActions from "./NavbarActions";
import NavLinks from "./NavLinks";



export default function Navbar(){
    return (
        <nav>
            <Logo />
            <NavLinks />
            <NavActions />
        </nav>
    );
}