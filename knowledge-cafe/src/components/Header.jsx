import profile from '../assets/images/profile.png'

const Header = () => {
    return (
        <div>
            <div className='flex justify-between items-center mb-5'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" className='w-14' />
            </div>
            <hr />
        </div>
    );
};

export default Header;