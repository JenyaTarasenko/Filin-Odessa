
import bastimage from '../../assets/image/bast-card.svg';
import cardpig from '../../assets/image/card-pig.svg';
import cardstar from '../../assets/image/card-star.svg';
import cardtime from '../../assets/image/card-time.svg';
import cardcar from '../../assets/image/card-car.svg';

function BastCard() {
    return (
        <div className="relative w-full min-h-[60vh] lg:min-h-[600px] mt-20 overflow-hidden">
            {/* BACKGROUND */}
            <img
                src={bastimage}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                fetchpriority="high"
                decoding="async"
            />

            {/* CONTENT */}
            <div className="relative z-10 flex flex-wrap justify-center items-center gap-5 px-4 py-16">

                <div className="flex flex-col border border-gray-600 rounded-3xl p-6 w-[240px] min-h-[300px] transition hover:scale-105">
                    <div className="flex flex-col items-center text-center">
                        <img src={cardtime} alt="" width={70} height={70} loading="lazy" />
                        <h2 className="uppercase mt-5 max-w-[150px]">Подача от 20 минут</h2>
                        <p className="text-gray-600 mt-5 max-w-[200px]">
                            Работаем по всему городу, ближайший эвакуатор всегда рядом.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col border border-gray-600 rounded-3xl p-6 w-[240px] min-h-[300px] transition hover:scale-105">
                    <div className="flex flex-col items-center text-center">
                        <img src={cardpig} alt="" width={70} height={70} loading="lazy" />
                        <h2 className="uppercase mt-5 max-w-[200px]">Честная фиксированная цена</h2>
                        <p className="text-gray-600 mt-5 max-w-[200px]">
                            Без скрытых платежей. Озвучиваем стоимость заранее.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col border border-gray-600 rounded-3xl p-6 w-[240px] min-h-[300px] transition hover:scale-105">
                    <div className="flex flex-col items-center text-center">
                        <img src={cardcar} alt="" width={70} height={70} loading="lazy" />
                        <h2 className="uppercase mt-5 max-w-[150px]">Эвакуируем любые авто</h2>
                        <p className="text-gray-600 mt-5 max-w-[200px]">
                            Эвакуируем все виды автомобилей: легковые авто, мотоциклы, джипы и микроавтобусы.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col border border-gray-600 rounded-3xl p-6 w-[240px] min-h-[300px] transition hover:scale-105">
                    <div className="flex flex-col items-center text-center">
                        <img src={cardstar} alt="" width={70} height={70} loading="lazy" />
                        <h2 className="uppercase mt-5 max-w-[150px]">Аккуратность и опыт</h2>
                        <p className="text-gray-600 mt-5 max-w-[200px]">
                            10+ лет на рынке, бережная погрузка на платформу.
                        </p>
                    </div>
                </div>

                {/* остальные карточки такие же */}
            </div>
        </div>

    );
}
export default BastCard;