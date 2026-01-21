import { Link } from "react-router-dom";
import mapImage from "../../assets/image/MapPin.svg";

function SEOLink() {
    return (
        <>
            <div className="flex flex-col items-center justify-center mt-10 px-1">
                <h2 className="sm:text-5xl text-3xl font-normal text-gray-500 max-w-[700px] text-center">Работаем также в других районах города Одессы и Одесской области</h2>
                <ul className="flex flex-col items-center justify-center mt-5 text-center">
                    <Link to="/" className="text-xl font-normal text-black hover:text-yellow-400 flex flex-row items-center gap-2">
                        <div className="w-full">Круглосуточный эвакуатор в Одессе и области
                        </div>
                        <div className="w-5 h-5">
                            <img src={mapImage} alt="MapPin" loading="lazy" />
                        </div>
                    </Link>
                    <Link to="/znamenka" className="text-xl font-normal text-black hover:text-yellow-400 flex flex-row items-center gap-2">Круглосуточный эвакуатор в Знаменке
                        <div className="w-5 h-5">
                            <img src={mapImage} alt="MapPin" loading="lazy" />
                        </div>
                    </Link>
                </ul>
            </div>
        </>
    );
}
export default SEOLink;