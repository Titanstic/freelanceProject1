import media from "../assets/media.jpg";
import youtube from "../assets/youtube.png";
import twitter from "../assets/twitter.png";
import facebook from "../assets/fb.png";
import instgram from "../assets/insta.png";
import {Link} from "react-router-dom";

const linkData = [
    {
        link: "https://tailwindcss.com/docs/background-color",
        icon: instgram,
        name: "juniorcreative.myanmar"
    },
    {
        link: "https://tailwindcss.com/docs/background-color",
        icon: twitter,
        name: "JuniorCreative2"
    },
    {
        link: "https://tailwindcss.com/docs/background-color",
        icon: facebook,
        name: "Junior Creative"
    },
    {
        link: "https://tailwindcss.com/docs/background-color",
        icon: youtube,
        name: "Junior Creative Myanmar"
    },
]

// eslint-disable-next-line react/prop-types
const MediaView = ({mediaRef}) => {
    return(
        <div ref={mediaRef} className="h-[100vh] w-full bg-black flex flex-col justify-center items-center">
            <div>
                <p className="text-7xl text-[#83fdea] font-bold">WE CAN BE FOUND EVERYWHERE</p>
                <p className="text-white">
                    After being invited to <br/>
                    AGT The Champion Season2, we became <br/>
                    globally renowned letting us to connect with many audiences.
                </p>
            </div>

            <div className="w-3/6 flex justify-between mt-5">
                <div className="text-white">
                    {
                        linkData.map(data => (
                            <Link to={data.link} className="flex items-center mb-4" target="_blank" key={data.name}>
                                <img src={data.icon} className="w-16 mr-14" alt={data.name} />
                                <p>{data.name}</p>
                            </Link>
                        ))
                    }

                </div>

                <img className="w-72" src={media} alt="media"/>
            </div>
        </div>
    )
}

export default MediaView;