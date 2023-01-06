import Project from "./Project"
import img_o2 from "../assets/images/o2meta.png"
import sp1 from "../assets/images/sp1.png"
import modeling from "../assets/images/modeling.png"
import message from "../assets/images/message.png"

function Projects() {
    const projects = [
        {
            image: img_o2,
            title: "O2 META",
            content: "A web3 NFT project for virtual land and achieved about 350 ETH revenue" +
                "The site created with VueJS and PixiJS."
        }, {
            image: message,
            title: "Messaging",
            content: "A module of Messaging integrated VueJS with Twillio Conversation and Vue-advanced-chat."
        }, {
            image: modeling,
            title: "OEXPO 3D Modeling",
            content: "An IOS and Android app for 3D modeling. (EOL)"
        },
        {
            image: sp1,
            title: "Custom Domain Setting",
            content: "This project demonstrates a flow for creating different domain endpoints for the demo itself."
        },
    ]
    return (
        <div className={`flex flex-col items-center`}>
            {
                projects.map((p, i) => {
                    return <Project data={p} key={i}/>
                })
            }
        </div>
    )
}

export default Projects
