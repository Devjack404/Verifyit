import FooterActions from "./FooterActions";
import FooterLinks from "./FooterLinks";
import Logo from "../Navbar/Logo";

export default function Footer () {
    return (
        <footer className="border-t border-gray-200 bg-white">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-8 py-8 md:flex-row"> 
                <Logo />

                <FooterLinks />

                <FooterActions />
            </div>
        </footer>
    );
}