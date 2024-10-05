import { useNavigate } from "react-router-dom"
import { assets } from "../assets/assets"

const Navbar = () => {
    const navigate = useNavigate();

    const NavButton = ({ onClick, src, alt }) => (
        <img onClick={onClick} className="w-8 bg-black p-2 rounded-2xl cursor-pointer" src={src} alt={alt} />
    );

    const NavItem = ({ className, children }) => (
        <p className={`px-4 py-1 rounded-2xl cursor-pointer ${className}`}>{children}</p>
    );

    return (
        <>
            <div className="w-full flex justify-between items-center font-semibold">
                <div className="flex items-center gap-2">
                    <NavButton onClick={() => navigate(-1)} src={assets.arrow_left} alt="Back" />
                    <NavButton onClick={() => navigate(1)} src={assets.arrow_right} alt="Forward" />
                </div>
                <div className="flex items-center gap-4">
                    <NavItem className="bg-white text-black text-[15px] hidden md:block">Explore</NavItem>
                    <NavItem className="bg-black text-[15px]">Install App</NavItem>
                    <div className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center">D</div>
                </div>
            </div>
            <div className="flex items-center gap-2 mt-4">
                <NavItem className="bg-white text-black">All</NavItem>
                <NavItem className="bg-black">Music</NavItem>
                <NavItem className="bg-black">Podcasts</NavItem>
            </div>
        </>
    )
}

export default Navbar
