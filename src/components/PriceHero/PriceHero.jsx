// npm install react-countup
import CountUp from "react-countup";
// npm install react-intersection-observer
import { useInView } from "react-intersection-observer";

function PriceHero() {
    const { ref, inView } = useInView({
        triggerOnce: true, // анимация сработает только один раз
        threshold: 0.5,    // элемент считается видимым, когда 50% его видно
    });
    return (
        <>
            <div ref={ref} className="flex items-center justify-center  bg-yellow-500 p-10 rounded-b-3xl flex-col">
                <div className="flex flex-row items-center flex-wrap justify-center">
                    <div className="flex items-center justify-center lg:flex-row items-center flex-col">
                        <div className="flex flex-col p-10 items-center gap-5">
                            <div className="flex items-end justify-center flex-row items-center ">
                                <span className="text-sm text-lg">от</span><p className="sm:text-9xl text-6xl font-bold"> {inView && (<CountUp duration={2} end={575} />)}</p><span className="text-sm text-lg">грн</span>
                            </div>
                            <div className="flex items-center justify-center flex-row items-center ">
                                <h2 className="text-sm font-normal text-center max-w-[300px] text-gray-900">Оперативная эвакуация лекговых автомобилей в пределах Одессы.</h2>
                            </div>
                        </div>
                        <div className="w-px h-[100px] bg-black lg:block hidden"></div>
                        <div className="lg:hidden w-full h-px bg-black/20 my-4"></div>


                    </div>

                    <div ref={ref} className="flex items-center justify-center lg:flex-row items-center flex-col">
                        <div className="flex flex-col p-10 items-center gap-5">
                            <div className="flex items-end justify-center flex-row items-center ">
                                <span className="text-sm text-lg">от</span><p className="sm:text-9xl text-6xl font-bold"> {inView && (<CountUp duration={3} end={25} />)}</p> <span className="text-sm text-lg">грн/км</span>
                            </div>
                            <div className="flex items-center justify-center flex-row items-center ">
                                <h2 className="text-sm font-normal text-center max-w-[300px] text-gray-900">Перевозка автомобиля за пределы Одессы и по Одесской области.</h2>
                            </div>
                        </div>
                        <div className="w-px h-[100px] bg-black lg:block hidden"></div>
                        <div className="lg:hidden w-full h-px bg-black/20 my-4"></div>

                    </div>
                    <div ref={ref} className="flex items-center justify-center lg:flex-row items-center flex-col">
                        <div className="flex flex-col p-10 items-center gap-5">
                            <div className="flex items-end justify-center flex-row items-center ">
                                <span className="text-sm text-lg">от</span><p className="sm:text-9xl text-6xl font-bold">{inView && (<CountUp duration={4} end={625} />)}</p> <span className="text-sm text-lg">грн</span>
                            </div>
                            <div className="flex items-center justify-center flex-row items-center ">
                                <h2 className="text-sm font-normal text-center max-w-[300px] text-gray-900">Эвакуация мотоциклов, квадроциклов, мотоколяски.</h2>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="flex items-center justify-center flex-row items-center ">
                    <h4 className="text-center text-gray-900 text-lg font-normal max-w-[400px] mt-5 uppercase">* Окончательная стоимость рассчитывается индивидуально</h4>
                </div>
            </div>
        </>
    );
}
export default PriceHero;