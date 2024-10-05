import Navbar from "./Navbar"
import { albumsData, songsData } from '../assets/assets'
import AlbumItem from "./AlbumItem"
import SongItem from "./SongItem"

const DisplayHome = () => {
    const renderItems = (data, ItemComponent, title) => (
        <div className="mb-4">
            <h1 className="my-5 font-bold text-2xl">{title}</h1>
            <div className="flex overflow-auto">
                {data.map((item) => (
                    <ItemComponent 
                        key={item.id} 
                        {...item} 
                    />
                ))}
            </div>
        </div>
    )

    return (
        <>
            <Navbar />
            {renderItems(albumsData, AlbumItem, "Featured Charts")}
            {renderItems(songsData, SongItem, "Hit")}
        </>
    )
}

export default DisplayHome
