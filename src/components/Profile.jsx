import Control from "./Control";
import img_profile from "../assets/images/profile.png"
import Links from "./Links";

function Profile() {
    const profile = {
        name: "Liwei Cheng",
        title: "Full Stack Engineer",
        description: "Experienced in Python and Javascript programming languages. An enthusiastic programmer eager to contribute to team success through excellent organizational skills and seeking best practice of system and code design."
    }
    return (
        <div className={`flex justify-center my-64`}>
            <div
                className={`flex items-center justify-evenly w-1/2 h-[30rem] m-2 bg-slate-300/60 backdrop-blur-md rounded-2xl`}>
                <Control className={`top-5 left-5`}/>
                <div className={`w-1/3 flex flex-col`}>
                    <img className={`min-w-full`} src={img_profile} alt=""/>
                    <Links/>
                </div>
                <div className={`w-2/5`}>
                    <h2 className={`p-2 text-4xl whitespace-nowrap`}>{profile.name}</h2>
                    <h3 className={`p-2 text-2xl whitespace-nowrap`}>{profile.title}</h3>
                    <p className={`p-2 text-start break-normal`}>{profile.description}</p>
                </div>
            </div>
        </div>

    )
}

export default Profile
