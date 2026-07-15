import Logo from "./Logo";
import NavActions from "./NavbarActions";
import NavLinks from "./NavLinks";



export default function Navbar(){
    return (
        <nav className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
                <Logo />
                <NavLinks />
                <NavActions />
            </div>

        </nav>
    );
}



