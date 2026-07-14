import Logo from "./Logo";
import NavActions from "./NavbarActions";
import NavLinks from "./NavLinks";



export default function Navbar(){
    return (
        <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                <Logo />
                <NavLinks />
                <NavActions />
            </div>

        </nav>
    );
}