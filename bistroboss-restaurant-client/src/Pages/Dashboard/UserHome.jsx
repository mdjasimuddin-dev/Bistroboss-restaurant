import useAuth from "../../Hooks/useAuth";


const UserHome = () => {
    const {user} = useAuth()
    console.log(user);
    return (
        <div className="space-y-10">
            <h1 className="text-3xl font-cinzel">Hi, Welcome, <span>{user?.displayName? user?.displayName : 'Back'}</span></h1>
            <div className="grid grid-cols-3 gap-10">
                <div className="h-40 bg-gradient-to-l from-[#FCDBFF] to-[#BB34F5] flex flex-col justify-center items-center">
                    <h1 className="text-5xl font-bold font-inter text-white">Coming Soon</h1>
                </div>
                <div className="h-40 bg-gradient-to-l from-[#FDE8C0] to-[#D3A256] flex flex-col justify-center items-center">
                <h1 className="text-5xl font-bold font-inter text-white">Coming Soon</h1>
                </div>
                <div className="h-40 bg-gradient-to-l from-[#FECDE9] to-[#FE4880] flex flex-col justify-center items-center">
                <h1 className="text-5xl font-bold font-inter text-white">Coming Soon</h1>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-10 h-[500px]">
                <div className=" bg-amber-200 flex flex-col justify-center items-center">
                    <img src={user?.photoURL} alt="" className="rounded-full h-40 border-2 border-white"/>
                    <h1 className="font-cinzel text-4xl font-bold my-5">{user?.displayName}</h1>
                </div>

                <div className=" bg-amber-400 p-10">
                    <h1 className="font-cinzel text-4xl font-bold my-5">Your Activities</h1>
                    <li className="font-inter text-2xl font-bold my-5">Coming Soon Update</li>
                    <li className="font-inter text-2xl font-bold my-5">Coming Soon Update</li>
                    <li className="font-inter text-2xl font-bold my-5">Coming Soon Update</li>
                    <li className="font-inter text-2xl font-bold my-5">Coming Soon Update</li>
                    <li className="font-inter text-2xl font-bold my-5">Coming Soon Update</li>
                </div>
            </div>
            
        </div>
    );
};

export default UserHome;