import { FaDiscord, FaFacebook } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa6";
import { PiDiscordLogoBold } from "react-icons/pi";


const FindUs = () => {
    return (
        <div className="">
            <p className="font-semibold mb-3">Find Us On</p>
            <div className=" flex join-vertical *:bg-base-100">
                <button className="btn join-item justify-start hover:bg-base-300"><FaFacebook></FaFacebook> Facebook</button>
                <button className="btn join-item justify-start hover:bg-base-300"><FaDiscord></FaDiscord> Discord</button>
                <button className="btn join-item justify-start hover:bg-base-300"><FaTwitch></FaTwitch> Twitch</button>
            </div>
        </div>
    );
};

export default FindUs;