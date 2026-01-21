import znamenka from '../../assets/image/Znamenka.svg';
import calculator from '../../assets/image/Calculator.svg';
import clock from '../../assets/image/clock1.svg';
import ButtonRed from '../ButtonRed/ButtonRed';
import { motion } from "framer-motion";
import phone from '../../assets/image/Phone.svg';


function ZnamenkaMain() {
    return (
        <>
            <div
                className="relative w-full h-[900px] sm:h-[800px] md:h-[700px] lg:h-[600px]"
                style={{
                    backgroundImage: `url(${znamenka})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Контейнер для двух колонок по центру */}
                <div className="absolute inset-0 flex flex-col md:flex-row  gap-10 px-6 md:px-20 ">

                    <div className="flex flex-col text-white max-w-[550px] px-2 items-center justify-center p-10">
                        <motion.h1 className="text-5xl font-bold mb-4 lg:text-6xl text-left"
                            initial={{ opacity: 0, x: -80 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.9,
                                ease: "easeOut",
                            }}
                        >
                            Вызов эвакуатора <br />{" "}<span className="text-yellow-400 text-5xl">Знаменка</span><br /><span className="text-yellow-400 text-2xl ">круглосуточно 24/7</span>
                        </motion.h1>
                        <motion.h2 className="text-lg mt-4 text-white text-left sm:text-xl"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.8,
                                ease: "easeOut",
                                delay: 0.2, // чтобы появилось после h1
                            }}
                        >
                            <span className="text-white  font-light text-4xl">Эвакуация всех видов транспорта в Знаменке, Одесская область трасса E-95</span>
                        </motion.h2>

                        <ButtonRed to="tel:+380663642781" className='mt-10 sm:self-start self-center'>Вызвать эвакуатор</ButtonRed>
                    </div>

                    <div className="flex flex-col sm:justify-end sm:items-end items-center justify-center w-full h-full pb-10">
                        <div className="flex flex-col max-w-[550px] px-2 gap-3 justify-center">
                            <a href="tel:+380937302859" className="flex flex-row gap-3 items-center justify-end">
                                <h3 className="text-lg text-yellow-400 font-bold">
                                    +380937302859
                                </h3>
                                <img src={phone} alt="phone" loading="lazy" className="w-8 h-8" />
                            </a>
                            <div className="flex flex-row gap-3 items-center justify-end">
                                <h3 className="text-lg text-white font-light">
                                    Индивидуальный <span className="text-yellow-400 font-normal">расчет</span>
                                </h3>
                                <img src={calculator} alt="calculator" loading="lazy" className="w-8 h-8" />
                            </div>
                            <div className="flex flex-row gap-3 items-center justify-end ">
                                <h3 className="text-lg text-white font-light">
                                    Круглосуточно <span className="text-yellow-400 font-normal">24/7</span>
                                </h3>
                                <img src={clock} alt="clock" loading="lazy" className="w-8 h-8" />
                            </div>
                        </div>

                    </div>


                </div>
            </div>

        </>
    );
}
export default ZnamenkaMain;