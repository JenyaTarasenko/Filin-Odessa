import BastImage from "../../assets/image/BastImage.svg";

function Bast() {
    return (
        <>
            <div className="flex flex-col items-center justify-center mt-20">
                <hr className="border-t border-black w-full  px-10" />
                <div className="flex flex-row items-center justify-center p-5 flex-wrap">
                    <img src={BastImage} alt="Служба эвакуации авто в Одессе логотип компании" className="w-[280px] h-[100px]" loading="lazy" />
                    <div className="w-px h-[100px] bg-gray-300 hidden lg:block"></div>
                    <hr className="block sm:hidden border-t border-gray-300 w-full mt-10 px-10" />
                    <h2 className="sm:text-3xl text-2xl font-normal text-gray-900 p-5 uppercase max-w-[700px]">Профессиональная эвакуация всех видов транспорта в Одессе и области </h2>
                </div>
                <hr className="border-t border-black w-full  px-10" />
            </div>
        </>
    );
}
export default Bast;
