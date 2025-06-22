import swimmingImg from "../assets/swimming.png";
import classImg from "../assets/class.png";
import playgroundImg from "../assets/playground.png";

const QZone = () => {
    return (
        <div className="bg-gray-200 p-4 pb-4 rounded-lg">
            <p className="font-semibold mb-3">QZone</p>
            <div className="space-y-6">
                <img src={swimmingImg} alt="" />
                <img src={classImg} alt="" />
                <img src={playgroundImg} alt="" />
            </div>
        </div>
    );
};

export default QZone;