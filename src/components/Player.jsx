import { assets, songsData } from '../assets/assets'

const Player = () => {
    const currentSong = songsData[0];

    return (
        <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
            <div className='hidden lg:flex items-center gap-4'>
                <img src={currentSong.image} alt="" className='w-12' />
                <div>
                    <p>{currentSong.name}</p>
                    <p>{currentSong.desc.slice(0, 12)}</p>
                </div>
            </div>
            <div className='flex flex-col items-center gap-1 m-auto'>
                <div className='flex gap-4'>
                    {['shuffle', 'prev', 'play', 'next', 'loop'].map(icon => (
                        <img key={icon} src={assets[`${icon}_icon`]} alt="" className='w-4 cursor-pointer' />
                    ))}
                </div>
                <div className='flex items-center gap-5'>
                    <p>1:06</p>
                    <div className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                        <hr className='h-1 border-none w-0 bg-green-800 rounded-full' />
                    </div>
                    <p>3:20</p>
                </div>
            </div>
            <div className='hidden lg:flex items-center gap-2 opacity-75'>
                {['play', 'mic', 'queue', 'speaker', 'volume'].map(icon => (
                    <img key={icon} className='w-4' src={assets[`${icon}_icon`]} alt="" />
                ))}
                <div className='w-20 bg-slate-50 h-1 rounded'></div>
                <img className='w-4' src={assets.mini_player_icon} alt="" />
                <img className='w-4' src={assets.zoom_icon} alt="" />
            </div>
        </div>
    )
}

export default Player
