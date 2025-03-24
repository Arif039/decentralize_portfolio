import {getIpfsGatewayUrl} from "../utils/ipfs";

function Profile ({profileImage, bio}) {
    return (
        <section id="profile" className="flex flex-col justify-self-center">
            

            <div className="flex justify-center mb-10">
                <img src={getIpfsGatewayUrl(profileImage)} alt="Profile" className="w-50 h-50 rounded-full"/>
            </div>

            <h2 className="ml-10 md:m-auto text-white text-center md:text-2xl  font-bold">Hi I'm Arif, Full-Stack Blockchain Developer</h2>

            <div>
                <p className="ml-10 md:m-auto text-white text-center md:text-2xl mt-4 font-bold">{bio}</p>
            </div>
        </section>
    )
}

export default Profile;