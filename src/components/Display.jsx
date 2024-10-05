import { Route, Routes, useLocation } from "react-router-dom"
import DisplayHome from "./DisplayHome"
import DisplayAlbum from "./DisplayAlbum"
import { useEffect, useRef, useMemo } from "react"
import { albumsData } from "../assets/assets"

const Display = () => {
    const displayRef = useRef();
    const location = useLocation();
    const isAlbum = location.pathname.includes('album');
    const albumId = useMemo(() => isAlbum ? location.pathname.split('/').pop() : "", [isAlbum, location.pathname]);
    const bgColor = useMemo(() => isAlbum ? albumsData[Number(albumId)]?.bgColor : "#121212", [isAlbum, albumId]);

    useEffect(() => {
        displayRef.current.style.background = isAlbum ? `linear-gradient(${bgColor},#121212)` : "#121212";
    }, [isAlbum, bgColor]);

    return (
        <div ref={displayRef} className="w-full m-2 px-6 pt-4 rounded text-white overflow-auto lg:ml-0">
            <Routes>
                <Route path="/" element={<DisplayHome />} />
                <Route path="/album/:id" element={<DisplayAlbum />} />
            </Routes>
        </div>
    )
}

export default Display
