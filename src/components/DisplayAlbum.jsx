import { useParams } from "react-router-dom"
import Navbar from "./Navbar"
import { albumsData, assets, songsData } from "../assets/assets";
import { useMemo } from "react";

const DisplayAlbum = () => {
    const { id } = useParams();
    const albumData = useMemo(() => albumsData[id], [id]);

    const renderHeader = useMemo(() => (
        <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
            <img className="w-48 rounded" src={albumData.image} alt="" />
            <div className="flex flex-col">
                <p>Playlist</p>
                <h2 className="text-5xl font-bold mb-4 md:text-7xl">{albumData.name}</h2>
                <h4>{albumData.desc}</h4>
                <p className="mt-1">
                    <img className="inline-block w-5" src={assets.spotify_logo} alt="" />
                    <b>Spotify</b>
                    +1,123,123
                    <b>50 songs</b>
                    2hours
                </p>
            </div>
        </div>
    ), [albumData]);

    const renderSongList = useMemo(() => 
        songsData.map((item, index) => (
            <div key={item.id || index} className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff] cursor-pointer">
                <p className="text-white">
                    <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
                    <img src={item.image} alt="" className="inline w-10 mr-5" />
                    {item.name}
                </p>
                <p className="text-[15px]">{albumData.name}</p>
                <p className="text-[15px]">5 days ago</p>
                <p className="text-[15px] text-center">{item.duration}</p>
            </div>
        )), [albumData.name]);

    return (
        <>
            <Navbar />
            {renderHeader}
            <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
                <p><b className="mr-4">#</b>Title</p>
                <p>Album</p>
                <p className="hidden sm:block">Date Added</p>
                <img className="m-auto w-4" src={assets.clock_icon} alt="" />
            </div>
            <hr />
            {renderSongList}
        </>
    )
}

export default DisplayAlbum
