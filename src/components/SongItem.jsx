import { useNavigate } from "react-router-dom";

const SongItem = ({ image, name, desc, id }) => {
    const navigate = useNavigate();

    return (
        <div 
            className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'
            onClick={() => navigate(`/song/${id}`)}
        >
            <img className='rounded w-full' src={image} alt={name} />
            <p className='font-bold mt-2 mb-1 truncate'>{name}</p>
            <p className='text-slate-200 text-sm truncate'>{desc}</p>
        </div>
    );
};

export default SongItem;
