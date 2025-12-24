import hero from '../../assets/image/Hero.svg';
import calculator from '../../assets/image/Calculator.svg';
import clock from '../../assets/image/Clock.svg';
import E95 from '../../assets/image/E.svg';
import ButtonRed from '../ButtonRed/ButtonRed';


function HeroSection() {
    return (
        <>
            <div id="home"
                className="relative w-full h-[900px] sm:h-[800px] md:h-[700px] lg:h-[600px]"
                style={{
                    backgroundImage: `url(${hero})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Контейнер для двух колонок по центру */}
                <div className="absolute inset-0 flex flex-col md:flex-row  gap-10 px-6 md:px-20 ">

                    <div className="flex flex-col text-white max-w-[550px] px-2 items-center justify-center p-10">
                        <h1 className="text-4xl font-bold mb-4 lg:text-6xl">
                            Вызов эвакуатора<br />в{" "}<span className="text-yellow-400 text-7xl">Одессе</span> подача от 10 минут
                        </h1>
                        <h2 className="text-xl mt-4 text-gray-300">
                            Круглосуточный эвакуатор в Одессе и области — быстрая подача, доступные цены, трасса E-95
                        </h2>

                        <ButtonRed to="tel:+380663642781" className='mt-10 sm:self-start self-center'>Вызвать эвакуатор</ButtonRed>
                    </div>

                    <div className="flex flex-col justify-end items-end w-full h-full pb-10">
                        <div className="flex flex-col max-w-[550px] px-2 gap-3 justify-end">
                            <div className="flex flex-row gap-3 justify-center items-center">
                                <h3 className="text-lg text-white">
                                    Индивидуальный <span className="text-yellow-400">расчет</span>
                                </h3>
                                <img src={calculator} alt="calculator" loading="lazy" className="w-8 h-8" />
                            </div>
                            <div className="flex flex-row gap-3 items-center justify-end ">
                                <h3 className="text-lg text-white">
                                    Круглосуточно <span className="text-yellow-400">24/7</span>
                                </h3>
                                <img src={clock} alt="clock" loading="lazy" className="w-8 h-8" />
                            </div>
                            <img src={E95} className="w-[260px] h-[94px]" loading="lazy" alt="Filin-эвакуатор в Одессе круглосуточная помощь трасса-E95" />
                        </div>

                    </div>


                </div>
            </div>

        </>
    );
}
export default HeroSection;