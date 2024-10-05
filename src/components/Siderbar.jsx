import { assets } from '../assets/assets'

const Sidebar = () => {
    const SidebarItem = ({ icon, text }) => (
        <div className='flex items-center gap-3 pl-8 cursor-pointer'>
            <img className='w-6' src={icon} alt='' />
            <p className='font-bold'>{text}</p>
        </div>
    );

    const SidebarSection = ({ title, description, buttonText }) => (
        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
            <h1>{title}</h1>
            <p className='font-light'>{description}</p>
            <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>{buttonText}</button>
        </div>
    );

    return (
        <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
            <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
                <SidebarItem icon={assets.home_icon} text="Home" />
                <SidebarItem icon={assets.search_icon} text="Search" />
            </div>
            <div className='bg-[#121212] h-[85%] rounded'>
                <div className='p-4 flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <img src={assets.stack_icon} alt="" className='w-8' />
                        <p className='font-semibold'>Your Library</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img className='w-5' src={assets.arrow_icon} alt="" />
                        <img className='w-5' src={assets.plus_icon} alt="" />
                    </div>
                </div>
                <SidebarSection 
                    title="Create your first playlist"
                    description="It's easy, we'll help you"
                    buttonText="Create Playlist"
                />
                <SidebarSection 
                    title="Let's find some podcasts to follow"
                    description="We'll keep you updated on new episodes"
                    buttonText="Browse Podcasts"
                />
            </div>
        </div>
    )
}

export default Sidebar
