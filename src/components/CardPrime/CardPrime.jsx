import bastcard from '../../assets/image/bg-card1.svg';
import time from '../../assets/image/Clock.svg';
import Filin from '../../assets/image/FilinCard.svg';
import bastcard2 from '../../assets/image/bg-card2.svg';
import bastcard3 from '../../assets/image/bg-card3.svg';
import bastcard4 from '../../assets/image/bg-card4.svg';
import bastcard5 from '../../assets/image/bg-card5.svg';
import bastcard6 from '../../assets/image/bg-card6.svg';
import bastmob1 from '../../assets/image/bg-mobile1.svg';
import bastmob2 from '../../assets/image/bg-mobile2.svg';
import bastmob3 from '../../assets/image/bg-mobile3.svg';
import bastmob4 from '../../assets/image/bg-mobile4.svg';
import bastmob5 from '../../assets/image/bg-mobile5.svg';
import bastmob6 from '../../assets/image/bg-mobile6.svg';




function CardPrime() {
    return (
        <>
            {/* карточка до sm */}
            <div id="services" className="hidden sm:flex justify-center flex-row gap-2 mt-20 flex-wrap">
                <div className="relative w-[600px] h-[270px] rounded-3xl overflow-hidden group">

                    {/* BACKGROUND */}
                    <img
                        src={bastcard}
                        className="absolute inset-0 w-full h-full object-cover"
                        aria-hidden="true"
                        loading="lazy"
                        alt="Эвакуация легковых автомобилей в Одессе — Filin"
                    />

                    {/* CONTENT */}
                    <div className="relative z-10 flex flex-col p-6 gap-3">
                        <h2 className="text-3xl font-bold uppercase">
                            Легковые<br />авто
                        </h2>
                        <h3 className='uppercase text-lg text-white'>все виды легковых<br />автомобилей</h3>

                        <div className="flex justify-between items-center w-full mt-2 gap-5">
                            <div className='flex items-center flex-row gap-10'>
                                <a
                                    href="tel:+380663642781"
                                    aria-label="Позвонить в эвакуатор Filin"
                                    className="group"
                                >
                                    {/* КНОПКА */}
                                    <span
                                        className="
                                        flex items-center justify-center
                                        max-w-[300px]
                                        px-10 py-3
                                        font-medium text-lg
                                        border-2 border-yellow-400
                                        text-yellow-400
                                        bg-transparent
                                        transition-all duration-300 ease-in-out
                                        hover:bg-yellow-400 hover:text-black
                                        hover:shadow-xl hover:-translate-y-0.5
                                        active:scale-95
                                        rounded-3xl
                                        "
                                    >
                                        Позвонить
                                    </span>
                                </a>
                                <img src={Filin} alt="" className="w-20 h-20" />
                            </div>

                            <div className="flex items-center gap-3 mt-5">
                                <img src={time} alt="" width={20} height={20} />
                                <p className='text-white'>Быстрая подача от 20 минут</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative w-[600px] h-[270px] rounded-3xl overflow-hidden group">

                    {/* BACKGROUND */}
                    <img
                        src={bastcard2}
                        alt="Эвакуация кроссоверов и джипов до 3,5 т в Одессе — Filin"
                        className="absolute inset-0 w-full h-full object-cover"
                        aria-hidden="true"
                        loading="lazy"
                    />

                    {/* CONTENT */}
                    <div className="relative z-10 flex flex-col p-6 gap-3">
                        <h2 className="text-3xl font-bold uppercase">
                            Кроссоверы<br />и джипы
                        </h2>
                        <h3 className='uppercase text-lg text-white'>все виды Кроссоверов<br />и джипов до 3,5 т</h3>

                        <div className="flex justify-between items-center w-full mt-2 gap-5">
                            <div className='flex items-center flex-row gap-10'>
                                <a
                                    href="tel:+380663642781"
                                    aria-label="Позвонить в эвакуатор Filin"
                                    className="group"
                                >
                                    {/* КНОПКА */}
                                    <span
                                        className="
                                        flex items-center justify-center
                                        max-w-[300px]
                                        px-10 py-3
                                        font-medium text-lg
                                        border-2 border-yellow-400
                                        text-yellow-400
                                        bg-transparent
                                        transition-all duration-300 ease-in-out
                                        hover:bg-yellow-400 hover:text-black
                                        hover:shadow-xl hover:-translate-y-0.5
                                        active:scale-95
                                        rounded-3xl
                                        "
                                    >
                                        Позвонить
                                    </span>
                                </a>
                                <img src={Filin} alt="" className="w-20 h-20" />
                            </div>

                            <div className="flex items-center gap-3 mt-5">
                                <img src={time} alt="" width={20} height={20} />
                                <p className='text-white'>Быстрая подача от 20 минут</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative w-[600px] h-[270px] rounded-3xl overflow-hidden group">

                    {/* BACKGROUND */}
                    <img
                        src={bastcard3}
                        alt="Эвакуация всех видов мотоциклов скутеров и мопедов спортбайков в Одессе — Filin"
                        className="absolute inset-0 w-full h-full object-cover"
                        aria-hidden="true"
                        loading="lazy"
                    />

                    {/* CONTENT */}
                    <div className="relative z-10 flex flex-col p-6 gap-3">
                        <h2 className="text-3xl font-bold uppercase">
                            все виды<br />мотоциклов
                        </h2>
                        <h3 className='uppercase text-lg text-white'>Все виды мотоциклов,<br />спортбайки, скутеры</h3>

                        <div className="flex justify-between items-center w-full mt-2 gap-5">
                            <div className='flex items-center flex-row gap-10'>
                                <a
                                    href="tel:+380663642781"
                                    aria-label="Позвонить в эвакуатор Filin"
                                    className="group"
                                >
                                    {/* КНОПКА */}
                                    <span
                                        className="
                                        flex items-center justify-center
                                        max-w-[300px]
                                        px-10 py-3
                                        font-medium text-lg
                                        border-2 border-yellow-400
                                        text-yellow-400
                                        bg-transparent
                                        transition-all duration-300 ease-in-out
                                        hover:bg-yellow-400 hover:text-black
                                        hover:shadow-xl hover:-translate-y-0.5
                                        active:scale-95
                                        rounded-3xl
                                        "
                                    >
                                        Позвонить
                                    </span>
                                </a>
                                <img src={Filin} alt="" className="w-20 h-20" />
                            </div>

                            <div className="flex items-center gap-3 mt-5">
                                <img src={time} alt="" width={20} height={20} />
                                <p className='text-white'>Быстрая подача от 20 минут</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative w-[600px] h-[270px] rounded-3xl overflow-hidden group">

                    {/* BACKGROUND */}
                    <img
                        src={bastcard4}
                        alt="Эвакуация автомобиля после ДТП в Одессе — Filin"
                        className="absolute inset-0 w-full h-full object-cover"
                        aria-hidden="true"
                        loading="lazy"
                    />

                    {/* CONTENT */}
                    <div className="relative z-10 flex flex-col p-6 gap-3">
                        <h2 className="text-3xl font-bold uppercase">
                            Авто<br />после ДТП
                        </h2>
                        <h3 className='uppercase text-lg text-white'>все виды после ДТП<br />Заблокированные / не на ходу</h3>

                        <div className="flex justify-between items-center w-full mt-2 gap-5">
                            <div className='flex items-center flex-row gap-10'>
                                <a
                                    href="tel:+380663642781"
                                    aria-label="Позвонить в эвакуатор Filin"
                                    className="group"
                                >
                                    {/* КНОПКА */}
                                    <span
                                        className="
                                        flex items-center justify-center
                                        max-w-[300px]
                                        px-10 py-3
                                        font-medium text-lg
                                        border-2 border-yellow-400
                                        text-yellow-400
                                        bg-transparent
                                        transition-all duration-300 ease-in-out
                                        hover:bg-yellow-400 hover:text-black
                                        hover:shadow-xl hover:-translate-y-0.5
                                        active:scale-95
                                        rounded-3xl
                                        "
                                    >
                                        Позвонить
                                    </span>
                                </a>
                                <img src={Filin} alt="" className="w-20 h-20" />
                            </div>

                            <div className="flex items-center gap-3 mt-5">
                                <img src={time} alt="" width={20} height={20} />
                                <p className='text-white'>Быстрая подача от 20 минут</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-[600px] h-[270px] rounded-3xl overflow-hidden group">

                    {/* BACKGROUND */}
                    <img
                        src={bastcard5}
                        alt="Эвакуация автомобиля всех видов микроавтобусов и автобусов в Одессе — Filin"
                        className="absolute inset-0 w-full h-full object-cover"
                        aria-hidden="true"
                        loading="lazy"
                    />

                    {/* CONTENT */}
                    <div className="relative z-10 flex flex-col p-6 gap-3">
                        <h2 className="text-3xl font-bold uppercase">
                            Микроавтобусы<br />автобусы
                        </h2>
                        <h3 className='uppercase text-lg text-white'>все виды микроавтобусов<br />и автобусов</h3>

                        <div className="flex justify-between items-center w-full mt-2 gap-5">
                            <div className='flex items-center flex-row gap-10'>
                                <a
                                    href="tel:+380663642781"
                                    aria-label="Позвонить в эвакуатор Filin"
                                    className="group"
                                >
                                    {/* КНОПКА */}
                                    <span
                                        className="
                                        flex items-center justify-center
                                        max-w-[300px]
                                        px-10 py-3
                                        font-medium text-lg
                                        border-2 border-yellow-400
                                        text-yellow-400
                                        bg-transparent
                                        transition-all duration-300 ease-in-out
                                        hover:bg-yellow-400 hover:text-black
                                        hover:shadow-xl hover:-translate-y-0.5
                                        active:scale-95
                                        rounded-3xl
                                        "
                                    >
                                        Позвонить
                                    </span>
                                </a>
                                <img src={Filin} alt="" className="w-20 h-20" />
                            </div>

                            <div className="flex items-center gap-3 mt-5">
                                <img src={time} alt="" width={20} height={20} />
                                <p className='text-white'>Быстрая подача от 20 минут</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-[600px] h-[270px] rounded-3xl overflow-hidden group">
                    <div className="relative w-[600px] h-[270px] rounded-3xl overflow-hidden group">

                        {/* BACKGROUND */}
                        <img
                            src={bastcard6}
                            alt="Эвакуация всех видов судов, яхт, катеров в Одессе — Filin"
                            className="absolute inset-0 w-full h-full object-cover"
                            aria-hidden="true"
                            loading="lazy"

                        />

                        {/* CONTENT */}
                        <div className="relative z-10 flex flex-col p-6 gap-3">
                            <h2 className="text-3xl font-bold uppercase">
                                суда,<br /> яхты, катера
                            </h2>
                            <h3 className='uppercase text-lg text-white'>маломерные <br />суда, яхты, катера</h3>

                            <div className="flex justify-between items-center w-full mt-2 gap-5">
                                <div className='flex items-center flex-row gap-10'>
                                    <a
                                        href="tel:+380663642781"
                                        aria-label="Позвонить в эвакуатор Filin"
                                        className="group"
                                    >
                                        {/* КНОПКА */}
                                        <span
                                            className="
                                        flex items-center justify-center
                                        max-w-[300px]
                                        px-10 py-3
                                        font-medium text-lg
                                        border-2 border-yellow-400
                                        text-yellow-400
                                        bg-transparent
                                        transition-all duration-300 ease-in-out
                                        hover:bg-yellow-400 hover:text-black
                                        hover:shadow-xl hover:-translate-y-0.5
                                        active:scale-95
                                        rounded-3xl
                                        "
                                        >
                                            Позвонить
                                        </span>
                                    </a>
                                    <img src={Filin} alt="" className="w-20 h-20" />
                                </div>

                                <div className="flex items-center gap-3 mt-5">
                                    <img src={time} alt="" width={20} height={20} />
                                    <p className='text-white'>Быстрая подача от 20 минут</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* карточка до sm */}

            {/* карточка после sm */}
            <div id="services-mobile" className="flex sm:hidden justify-center gap-2 mt-20 flex-wrap">

                <div className="relative w-[310px] h-[400px] rounded-3xl overflow-hidden group">
                    <img
                        src={bastmob1}
                        className="absolute inset-0 w-full h-full object-cover"
                        aria-hidden="true"
                        loading="lazy"
                        alt="Эвакуация легковых автомобилей в Одессе — Filin"
                    />
                    <div className="relative z-10 flex flex-col p-6">
                        <h2 className="text-3xl font-bold uppercase text-gray-900">
                            Легковые<br />авто
                        </h2>
                        <h3 className='uppercase text-base text-white mt-3 font-normal text-gray-600'>все виды легковых<br />автомобилей</h3>

                        <div className="flex flex-col items-start mt-1">
                            <div className='flex items-center flex-row gap-5'>
                                <a
                                    href="tel:+380663642781"
                                    aria-label="Позвонить в эвакуатор Filin"
                                    className="group"
                                >
                                    {/* КНОПКА */}
                                    <span
                                        className="
                                        flex items-center justify-center
                                        max-w-[300px]
                                        px-5 py-2
                                        font-medium text-lg
                                        border-2 border-yellow-400
                                        text-yellow-400
                                        bg-transparent
                                        transition-all duration-300 ease-in-out
                                        hover:bg-yellow-400 hover:text-black
                                        hover:shadow-xl hover:-translate-y-0.5
                                        active:scale-95
                                        rounded-3xl
                                        "
                                    >
                                        Позвонить
                                    </span>
                                </a>
                                {/* <p className='uppercase text-sm text-white mt-5 font-medium'>Позвонить</p> */}
                                <img src={Filin} alt="" className="w-20 h-20" />
                            </div>

                            <div className="flex flex-row gap-3 mt-2">
                                <img src={time} alt="" width={30} height={30} />
                                <p className='text-white text-gray-600'>Быстрая подача <span className="text-yellow-400">от 20 минут</span></p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="relative w-[310px] h-[400px] rounded-3xl overflow-hidden group">
                    <img
                        src={bastmob2}
                        className="absolute inset-0 w-full h-full object-cover"
                        aria-hidden="true"
                        loading="lazy"
                        alt="Эвакуация кроссоверов и джипов до 3,5 т в Одессе — Filin"
                    />
                    <div className="relative z-10 flex flex-col p-6">
                        <h2 className="text-3xl font-bold uppercase text-gray-900">
                            Кроссоверы<br />и джипы
                        </h2>
                        <h3 className='uppercase text-base text-white mt-3 font-normal text-gray-600'>все виды Кроссоверов<br />и джипов до 3,5 т</h3>

                        <div className="flex flex-col items-start mt-1">
                            <div className='flex items-center flex-row gap-5'>
                                <a
                                    href="tel:+380663642781"
                                    aria-label="Позвонить в эвакуатор Filin"
                                    className="group"
                                >
                                    {/* КНОПКА */}
                                    <span
                                        className="
                                        flex items-center justify-center
                                        max-w-[300px]
                                        px-5 py-2
                                        font-medium text-lg
                                        border-2 border-yellow-400
                                        text-yellow-400
                                        bg-transparent
                                        transition-all duration-300 ease-in-out
                                        hover:bg-yellow-400 hover:text-black
                                        hover:shadow-xl hover:-translate-y-0.5
                                        active:scale-95
                                        rounded-3xl
                                        "
                                    >
                                        Позвонить
                                    </span>
                                </a>
                                <img src={Filin} alt="" className="w-20 h-20" />
                            </div>

                            <div className="flex flex-row gap-3 mt-2">
                                <img src={time} alt="" width={30} height={30} />
                                <p className='text-white text-gray-600'>Быстрая подача <span className="text-yellow-400">от 20 минут</span></p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="relative w-[310px] h-[400px] rounded-3xl overflow-hidden group">
                    <img
                        src={bastmob3}
                        className="absolute inset-0 w-full h-full object-cover"
                        aria-hidden="true"
                        loading="lazy"
                        alt="Эвакуация всех видов мотоциклов скутеров и мопедов спортбайков в Одессе — Filin"
                    />
                    <div className="relative z-10 flex flex-col p-6">
                        <h2 className="text-3xl font-bold uppercase text-gray-900">
                            все виды<br />мотоциклов
                        </h2>
                        <h3 className='uppercase text-base text-white mt-3 font-normal text-gray-600'>Все виды мотоциклов,<br />спортбайки, скутеры, мопеды</h3>

                        <div className="flex flex-col items-start mt-1">
                            <div className='flex items-center flex-row gap-5'>
                                <a
                                    href="tel:+380663642781"
                                    aria-label="Позвонить в эвакуатор Filin"
                                    className="group"
                                >
                                    {/* КНОПКА */}
                                    <span
                                        className="
                                        flex items-center justify-center
                                        max-w-[300px]
                                        px-5 py-2
                                        font-medium text-lg
                                        border-2 border-yellow-400
                                        text-yellow-400
                                        bg-transparent
                                        transition-all duration-300 ease-in-out
                                        hover:bg-yellow-400 hover:text-black
                                        hover:shadow-xl hover:-translate-y-0.5
                                        active:scale-95
                                        rounded-3xl
                                        "
                                    >
                                        Позвонить
                                    </span>
                                </a>
                                <img src={Filin} alt="" className="w-20 h-20" />
                            </div>

                            <div className="flex flex-row gap-3 mt-2">
                                <img src={time} alt="" width={30} height={30} />
                                <p className='text-white text-gray-600'>Быстрая подача <span className="text-yellow-400">от 20 минут</span></p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="relative w-[310px] h-[400px] rounded-3xl overflow-hidden group">
                    <img
                        src={bastmob4}
                        className="absolute inset-0 w-full h-full object-cover"
                        aria-hidden="true"
                        loading="lazy"
                        alt="Эвакуация всех видов машин после ДТП в Одессе — Filin"
                    />
                    <div className="relative z-10 flex flex-col p-6">
                        <h2 className="text-3xl font-bold uppercase text-gray-900">
                            Авто<br />после ДТП
                        </h2>
                        <h3 className='uppercase text-base text-white mt-3 font-normal text-gray-600'>все виды после ДТП<br />Заблокированные / не на ходу</h3>

                        <div className="flex flex-col items-start mt-1">
                            <div className='flex items-center flex-row gap-5'>
                                <a
                                    href="tel:+380663642781"
                                    aria-label="Позвонить в эвакуатор Filin"
                                    className="group"
                                >
                                    {/* КНОПКА */}
                                    <span
                                        className="
                                        flex items-center justify-center
                                        max-w-[300px]
                                        px-5 py-2
                                        font-medium text-lg
                                        border-2 border-yellow-400
                                        text-yellow-400
                                        bg-transparent
                                        transition-all duration-300 ease-in-out
                                        hover:bg-yellow-400 hover:text-black
                                        hover:shadow-xl hover:-translate-y-0.5
                                        active:scale-95
                                        rounded-3xl
                                        "
                                    >
                                        Позвонить
                                    </span>
                                </a>
                                <img src={Filin} alt="" className="w-20 h-20" />
                            </div>

                            <div className="flex flex-row gap-3 mt-2">
                                <img src={time} alt="" width={30} height={30} />
                                <p className='text-white text-gray-600'>Быстрая подача <span className="text-yellow-400">от 20 минут</span></p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="relative w-[310px] h-[400px] rounded-3xl overflow-hidden group">
                    <img
                        src={bastmob5}
                        className="absolute inset-0 w-full h-full object-cover"
                        aria-hidden="true"
                        loading="lazy"
                        alt="Эвакуация автомобиля всех видов микроавтобусов и автобусов в Одессе — Filin"
                    />
                    <div className="relative z-10 flex flex-col p-6">
                        <h2 className="text-3xl font-bold uppercase text-gray-900">
                            Микроавтобусы<br />автобусы
                        </h2>
                        <h3 className='uppercase text-base text-white mt-3 font-normal text-gray-600'>все виды микроавтобусов и автобусов</h3>

                        <div className="flex flex-col items-start mt-1">
                            <div className='flex items-center flex-row gap-5'>
                                <a
                                    href="tel:+380663642781"
                                    aria-label="Позвонить в эвакуатор Filin"
                                    className="group"
                                >
                                    {/* КНОПКА */}
                                    <span
                                        className="
                                        flex items-center justify-center
                                        max-w-[300px]
                                        px-5 py-2
                                        font-medium text-lg
                                        border-2 border-yellow-400
                                        text-yellow-400
                                        bg-transparent
                                        transition-all duration-300 ease-in-out
                                        hover:bg-yellow-400 hover:text-black
                                        hover:shadow-xl hover:-translate-y-0.5
                                        active:scale-95
                                        rounded-3xl
                                        "
                                    >
                                        Позвонить
                                    </span>
                                </a>
                                <img src={Filin} alt="" className="w-20 h-20" />
                            </div>

                            <div className="flex flex-row gap-3 mt-2">
                                <img src={time} alt="" width={30} height={30} />
                                <p className='text-white text-gray-600'>Быстрая подача <span className="text-yellow-400">от 20 минут</span></p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="relative w-[310px] h-[400px] rounded-3xl overflow-hidden group">
                    <img
                        src={bastmob6}
                        className="absolute inset-0 w-full h-full object-cover"
                        aria-hidden="true"
                        loading="lazy"
                        alt="Эвакуация всех видов судов, яхт, катеров, лодок в Одессе — Filin"
                    />
                    <div className="relative z-10 flex flex-col p-6">
                        <h2 className="text-3xl font-bold uppercase text-gray-900">
                            лодки,<br /> яхты, катера
                        </h2>
                        <h3 className='uppercase text-base text-white mt-3 font-normal text-gray-600'>маломерные <br />суда, яхты, катера, лодки</h3>

                        <div className="flex flex-col items-start mt-1">
                            <div className='flex items-center flex-row gap-5'>
                                <a
                                    href="tel:+380663642781"
                                    aria-label="Позвонить в эвакуатор Filin"
                                    className="group"
                                >
                                    {/* КНОПКА */}
                                    <span
                                        className="
                                        flex items-center justify-center
                                        max-w-[300px]
                                        px-5 py-2
                                        font-medium text-lg
                                        border-2 border-yellow-400
                                        text-yellow-400
                                        bg-transparent
                                        transition-all duration-300 ease-in-out
                                        hover:bg-yellow-400 hover:text-black
                                        hover:shadow-xl hover:-translate-y-0.5
                                        active:scale-95
                                        rounded-3xl
                                        "
                                    >
                                        Позвонить
                                    </span>
                                </a>
                                <img src={Filin} alt="" className="w-20 h-20" />
                            </div>

                            <div className="flex flex-row gap-3 mt-2">
                                <img src={time} alt="" width={30} height={30} />
                                <p className='text-white text-gray-600'>Быстрая подача <span className="text-yellow-400">от 20 минут</span></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div >
            {/* карточка после sm */}
        </>


    );
}
export default CardPrime;