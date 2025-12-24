import HandHeart from "../../assets/image/HandHeart.svg";
import HandTap from "../../assets/image/HandTap.svg";
import FireTruck from "../../assets/image/FireTruck.svg";


// function BastSafely() {
//     return (
//         <div className="flex flex-row items-center justify-center flex-wrap gap-3 mt-10 p-1">
//             <div className="bg-[rgba(240,240,240,0.7)] shadow-lg w-[400px] h-[220px] rounded-3xl flex flex-col">
//                 <div className="flex flex-row items-center justify-between">
//                     <p className="p-5 text-7xl font-normal text-yellow-500">1</p>
//                     <img src={HandHeart} alt="HandHeart" className="p-5" loading="lazy" />
//                 </div>
//                 <h2 className="p-5 text-xl font-normal text-gray-900 max-w-[300px]">Индивидуальный подход к каждому авто</h2>
//             </div>
//             <div className="bg-[rgba(240,240,240,0.7)] shadow-lg w-[400px] h-[220px] rounded-3xl flex flex-col">
//                 <div className="flex flex-row items-center justify-between">
//                     <p className="p-5 text-7xl font-normal text-yellow-500">2</p>
//                     <img src={FireTruck} alt="HandHeart" className="p-5" loading="lazy" />
//                 </div>
//                 <h2 className="p-5 text-xl font-normal text-gray-900 max-w-[300px]">Cовременный эвакуатор</h2>
//             </div>
//             <div className="bg-[rgba(240,240,240,0.7)] shadow-lg w-[400px] h-[220px] rounded-3xl flex flex-col">
//                 <div className="flex flex-row items-center justify-between">
//                     <p className="p-5 text-7xl font-normal text-yellow-500">3</p>
//                     <img src={HandTap} alt="HandHeart" className="p-5" loading="lazy" />
//                 </div>
//                 <h2 className="p-5 text-xl font-normal text-gray-900 max-w-[340px]">Надёжная фиксация ремнями и креплениями</h2>
//             </div>

//         </div>
//     );
// }
// export default BastSafely;

import { motion } from "framer-motion";
// import HandHeart from "../assets/HandHeart.png";
// import FireTruck from "../assets/FireTruck.png";
// import HandTap from "../assets/HandTap.png";

export default function Cards() {
    // Варианты анимации карточек
    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.3, // задержка между карточками
            },
        },
    };

    const card = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <motion.div
            className="flex flex-row items-center justify-center flex-wrap gap-3 mt-10 p-1"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }} // запускаем, когда 30% контейнера видно
        >
            <motion.div className="bg-[rgba(240,240,240,0.7)] shadow-lg w-[400px] h-[220px] rounded-3xl flex flex-col" variants={card}>
                <div className="flex flex-row items-center justify-between">
                    <p className="p-5 text-7xl font-normal text-yellow-500">1</p>
                    <img src={HandHeart} alt="HandHeart" className="p-5" loading="lazy" />
                </div>
                <h2 className="p-5 text-xl font-normal text-gray-900 max-w-[300px]">
                    Индивидуальный подход к каждому авто
                </h2>
            </motion.div>

            <motion.div className="bg-[rgba(240,240,240,0.7)] shadow-lg w-[400px] h-[220px] rounded-3xl flex flex-col" variants={card}>
                <div className="flex flex-row items-center justify-between">
                    <p className="p-5 text-7xl font-normal text-yellow-500">2</p>
                    <img src={FireTruck} alt="FireTruck" className="p-5" loading="lazy" />
                </div>
                <h2 className="p-5 text-xl font-normal text-gray-900 max-w-[300px]">
                    Современный эвакуатор
                </h2>
            </motion.div>

            <motion.div className="bg-[rgba(240,240,240,0.7)] shadow-lg w-[400px] h-[220px] rounded-3xl flex flex-col" variants={card}>
                <div className="flex flex-row items-center justify-between">
                    <p className="p-5 text-7xl font-normal text-yellow-500">3</p>
                    <img src={HandTap} alt="HandTap" className="p-5" loading="lazy" />
                </div>
                <h2 className="p-5 text-xl font-normal text-gray-900 max-w-[340px]">
                    Надёжная фиксация ремнями и креплениями
                </h2>
            </motion.div>
        </motion.div>
    );
}
