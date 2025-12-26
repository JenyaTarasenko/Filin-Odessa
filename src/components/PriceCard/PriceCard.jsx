// import background from "../../assets/image/bgcard.svg";
// import CarProfile from "../../assets/image/CarProfile.svg";
// import Cnopca from "../../assets/image/cnopca.svg";
// import Car from "../../assets/image/Car.svg";
// import Truck from "../../assets/image/Truck.svg";
// import Van from "../../assets/image/Van.svg";
// import Sailboat from "../../assets/image/Sailboat.svg";

// function PriceCard() {
//     return (
//         <>
//             <div id="prices" className="relative w-full min-h-[100vh] lg:min-h-[700px] sm:mt-5 mt-0">

//                 {/* BACKGROUND */}
//                 <img
//                     src={background}
//                     alt=""
//                     aria-hidden="true"
//                     className="absolute inset-0 w-full h-full object-contain"
//                     loading="lazy"
//                 />

//                 {/* CONTENT */}
//                 <div className="
//                 relative z-10
//                 grid
//                 grid-cols-1 sm:grid-cols-2
//                 gap-6
//                 max-w-[900px]
//                 mx-auto
//                 px-6
//                 py-24
//             ">
//                     {/* CARD */}
//                     <div className="lg:max-h-[400px] max-h-[800px] rounded-[60px] bg-gradient-to-b from-[rgba(217,217,217,0.2)] to-[rgba(115,115,115,0.2)] p-3">
//                         <div className="flex items-between w-full justify-between p-5">
//                             <img src={CarProfile} alt="" className="w-[70px] h-[70px]" />
//                             <img src={Cnopca} alt="" className="w-[70px] h-[70px]" />
//                         </div>
//                         <div className="flex flex-col gap-2 px-5">
//                             <h2 className="text-xl font-bold max-w-[250px] uppercase">Легковые авто и мототехника</h2>
//                             <h3 className="text-gray-600 max-w-[300px] uppercase mt-2 text-sm">Легковые автомобили Мотоциклы, квадроциклы, мотоколяски</h3>
//                             <h4 className="">Эвакуация легковых автомобилей и мототехники любых марок и моделей. Подходит для стандартных поломок, ДТП и авто не на ходу.</h4>
//                             <p className="text-lg mt-1 text-gray-900 font-normal">от 800 грн по городу-от 50 грн / км за пределами Одессы</p>
//                         </div>
//                     </div>

//                     {/* CARD */}
//                     <div className="lg:max-h-[400px] max-h-[800px] rounded-[60px] bg-gradient-to-b from-[rgba(217,217,217,0.2)] to-[rgba(115,115,115,0.2)] p-3">
//                         <div className="flex items-between w-full justify-between p-5">
//                             <img src={Car} alt="" className="w-[70px] h-[70px]" />
//                             <img src={Cnopca} alt="" className="w-[70px] h-[70px]" />
//                         </div>
//                         <div className="flex flex-col gap-2 px-5">
//                             <h2 className="text-xl font-bold max-w-[250px] uppercase">Кроссоверы и минивэны</h2>
//                             <h3 className="text-gray-600 max-w-[300px] uppercase mt-2 text-sm">Кроссоверы Минивэны</h3>
//                             <h4 className="">Безопасная эвакуация автомобилей повышенной массы и габаритов. Используем усиленные платформы и профессиональные крепления.</h4>
//                             <p className="text-lg mt-3 text-gray-900 font-normal">от 900 грн по городу-от 50 грн / км за пределами Одессы</p>
//                         </div>
//                     </div>

//                     {/* CARD */}
//                     <div className="lg:max-h-[400px] max-h-[800px] rounded-[60px] bg-gradient-to-b from-[rgba(217,217,217,0.2)] to-[rgba(115,115,115,0.2)] p-3">
//                         <div className="flex items-between w-full justify-between p-5">
//                             <img src={Van} alt="" className="w-[70px] h-[70px]" />
//                             <img src={Cnopca} alt="" className="w-[70px] h-[70px]" />
//                         </div>
//                         <div className="flex flex-col gap-2 px-5">
//                             <h2 className="text-xl font-bold max-w-[250px] uppercase">Внедорожники и микроавтобусы до 3,5 т</h2>
//                             <h3 className="text-gray-600 max-w-[300px] uppercase mt-2 text-sm">Микроавтобусы (Газель и аналоги)</h3>
//                             <h4 className="">Эвакуация тяжёлых автомобилей и коммерческого транспорта. Подходит для джипов, микроавтобусов и сложных случаев.</h4>
//                             <p className="text-lg mt-1 text-gray-900 font-normal">от 1100 грн по городу-от 50 грн / км за пределами Одессы</p>
//                         </div>
//                     </div>

//                     {/* CARD */}
//                     <div className="lg:max-h-[400px] max-h-[800px] rounded-[60px] bg-gradient-to-b from-[rgba(217,217,217,0.2)] to-[rgba(115,115,115,0.2)] p-3">
//                         <div className="flex items-between w-full justify-between p-5">
//                             <img src={Sailboat} alt="" className="w-[70px] h-[70px]" />
//                             <img src={Cnopca} alt="" className="w-[70px] h-[70px]" />
//                         </div>
//                         <div className="flex flex-col gap-2 px-5">
//                             <h2 className="text-xl font-bold max-w-[250px] uppercase">Легковые авто и мототехника</h2>
//                             <h3 className="text-gray-600 max-w-[300px] uppercase mt-2 text-sm">Легковые автомобили Мотоциклы, квадроциклы, мотоколяски</h3>
//                             <h4 className="text-sm font-normal text-black">Перевозка яхт, катеров и маломерных судов Бережная транспортировка по Одессе и области с гарантией сохранности</h4>
//                             <p className="text-lg mt-3 text-gray-900 font-normal">от 800 грн по городу-от 50 грн / км за пределами Одессы</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="flex justify-center p-5">
//                     <h6 className="text-center text-gray-400 text-sm mt-5 max-w-[400px] ">Каждая поездка рассчитывается индивидуально и зависит от многих факторов: расстояния, типа транспортного средства, его состояния, сложности погрузки и маршрута перевозки.</h6>
//                 </div>

//             </div>
//         </>
//     );
// }
// export default PriceCard;

import background from "../../assets/image/bgcard.svg";
import CarProfile from "../../assets/image/CarProfile.svg";
import Cnopca from "../../assets/image/cnopca.svg";
import Car from "../../assets/image/Car.svg";
import Van from "../../assets/image/Van.svg";
import Sailboat from "../../assets/image/Sailboat.svg";
import { motion } from "framer-motion";

function PriceCard() {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2, // задержка между карточками
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <div id="prices" className="relative w-full min-h-[100vh] lg:min-h-[700px] sm:mt-5 mt-0">

            {/* BACKGROUND */}
            <img
                src={background}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-contain"
                loading="lazy"
            />

            {/* CONTENT */}
            <motion.div
                className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[900px] mx-auto px-6 py-24"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }} // срабатывает, когда 20% блока в зоне видимости
            >

                {/* CARD 1 */}
                <motion.div variants={cardVariants} className="lg:max-h-[400px] max-h-[800px] rounded-[60px] bg-gradient-to-b from-[rgba(217,217,217,0.2)] to-[rgba(115,115,115,0.2)] p-3">
                    <div className="flex items-between w-full justify-between p-5">
                        <img src={CarProfile} alt="" className="w-[70px] h-[70px]" />
                        <img src={Cnopca} alt="" className="w-[70px] h-[70px]" />
                    </div>
                    <div className="flex flex-col gap-2 px-5">
                        <h2 className="text-xl font-bold max-w-[250px] uppercase">Легковые авто и мототехника</h2>
                        <h3 className="text-gray-600 max-w-[300px] uppercase mt-2 text-sm">Легковые автомобили Мотоциклы, квадроциклы, мотоколяски</h3>
                        <h4>Эвакуация легковых автомобилей и мототехники любых марок и моделей. Подходит для стандартных поломок, ДТП и авто не на ходу.</h4>
                        <p className="text-lg mt-1 text-gray-900 font-normal">от 800 грн по городу-от 50 грн / км за пределами Одессы</p>
                    </div>
                </motion.div>

                {/* CARD 2 */}
                <motion.div variants={cardVariants} className="lg:max-h-[400px] max-h-[800px] rounded-[60px] bg-gradient-to-b from-[rgba(217,217,217,0.2)] to-[rgba(115,115,115,0.2)] p-3">
                    <div className="flex items-between w-full justify-between p-5">
                        <img src={Car} alt="" className="w-[70px] h-[70px]" />
                        <img src={Cnopca} alt="" className="w-[70px] h-[70px]" />
                    </div>
                    <div className="flex flex-col gap-2 px-5">
                        <h2 className="text-xl font-bold max-w-[250px] uppercase">Кроссоверы и минивэны</h2>
                        <h3 className="text-gray-600 max-w-[300px] uppercase mt-2 text-sm">Кроссоверы Минивэны</h3>
                        <h4>Безопасная эвакуация автомобилей повышенной массы и габаритов. Используем усиленные платформы и профессиональные крепления.</h4>
                        <p className="text-lg mt-3 text-gray-900 font-normal">от 900 грн по городу-от 50 грн / км за пределами Одессы</p>
                    </div>
                </motion.div>

                {/* CARD 3 */}
                <motion.div variants={cardVariants} className="lg:max-h-[400px] max-h-[800px] rounded-[60px] bg-gradient-to-b from-[rgba(217,217,217,0.2)] to-[rgba(115,115,115,0.2)] p-3">
                    <div className="flex items-between w-full justify-between p-5">
                        <img src={Van} alt="" className="w-[70px] h-[70px]" />
                        <img src={Cnopca} alt="" className="w-[70px] h-[70px]" />
                    </div>
                    <div className="flex flex-col gap-2 px-5">
                        <h2 className="text-xl font-bold max-w-[250px] uppercase">Внедорожники и микроавтобусы до 3,5 т</h2>
                        <h3 className="text-gray-600 max-w-[300px] uppercase mt-2 text-sm">Микроавтобусы (Газель и аналоги)</h3>
                        <h4>Эвакуация тяжёлых автомобилей и коммерческого транспорта. Подходит для джипов, микроавтобусов и сложных случаев.</h4>
                        <p className="text-lg mt-1 text-gray-900 font-normal">от 1100 грн по городу-от 50 грн / км за пределами Одессы</p>
                    </div>
                </motion.div>

                {/* CARD 4 */}
                <motion.div variants={cardVariants} className="lg:max-h-[400px] max-h-[800px] rounded-[60px] bg-gradient-to-b from-[rgba(217,217,217,0.2)] to-[rgba(115,115,115,0.2)] p-3">
                    <div className="flex items-between w-full justify-between p-5">
                        <img src={Sailboat} alt="" className="w-[70px] h-[70px]" />
                        <img src={Cnopca} alt="" className="w-[70px] h-[70px]" />
                    </div>
                    <div className="flex flex-col gap-2 px-5">
                        <h2 className="text-xl font-bold max-w-[250px] uppercase">Легковые авто и мототехника</h2>
                        <h3 className="text-gray-600 max-w-[300px] uppercase mt-2 text-sm">Легковые автомобили Мотоциклы, квадроциклы, мотоколяски</h3>
                        <h4 className="text-sm font-normal text-black">Перевозка яхт, катеров и маломерных судов. Бережная транспортировка по Одессе и области с гарантией сохранности.</h4>
                        <p className="text-lg mt-3 text-gray-900 font-normal">от 800 грн по городу-от 50 грн / км за пределами Одессы</p>
                    </div>
                </motion.div>

            </motion.div>

            {/* FOOTNOTE */}
            <div className="flex justify-center p-5">
                <h6 className="text-center text-gray-400 text-sm mt-5 max-w-[400px]">
                    Каждая поездка рассчитывается индивидуально и зависит от многих факторов: расстояния, типа транспортного средства, его состояния, сложности погрузки и маршрута перевозки.
                </h6>
            </div>

        </div>
    );
}

export default PriceCard;
