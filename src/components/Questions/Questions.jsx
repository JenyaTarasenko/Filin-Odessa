import question from '../../assets/image/question.svg'
function Questions() {
    return (
        <div className="flex flex-col bg-[#D3EFEF] rounded-[40px] p-10">
            <div className="flex  flex-col gap-20 p-5">
                <div className="flex md:flex-row flex-col md:gap-20 gap-10 p-5">
                    {/* LEFT */}
                    <div className="flex items-center gap-5 w-full sm:w-1/2 max-w-[400px] md:flex-row flex-col ">
                        <img src={question} alt="question" className="w-5 h-5 shrink-0" />
                        <h2 className="text-2xl font-medium">
                            Сколько стоит вызов эвакуатора ?
                        </h2>
                    </div>

                    {/* RIGHT */}
                    <div className="flex items-center w-full sm:w-1/2 max-w-[800px]">
                        <h3>
                            Стоимость зависит от типа автомобиля, расстояния и сложности эвакуации. Минимальная цена по городу — от 600 грн. Точную стоимость озвучиваем до выезда эвакуатора.
                        </h3>
                    </div>
                </div>
            </div>
            <hr className="border-t border-black w-full px-10 mt-4 opacity-50" />
            <div className="flex  flex-col gap-20 p-5">
                <div className="flex md:flex-row flex-col md:gap-20 gap-10 p-5">
                    {/* LEFT */}
                    <div className="flex items-center gap-5 w-full sm:w-1/2 max-w-[400px] md:flex-row flex-col">
                        <img src={question} alt="question" className="w-5 h-5 shrink-0" />
                        <h2 className="text-2xl font-medium">
                            Как быстро приедетэвакуатор ?
                        </h2>
                    </div>

                    {/* RIGHT */}
                    <div className="flex items-center w-full sm:w-1/2 max-w-[800px]">
                        <h3>
                            Среднее время подачи от 20 минут по Одессе. Мы работаем круглосуточно, без выходных и праздников.
                        </h3>
                    </div>
                </div>
            </div>
            <hr className="border-t border-black w-full px-10 mt-4 opacity-50" />
            <div className="flex  flex-col gap-20 p-5">
                <div className="flex md:flex-row flex-col md:gap-20 gap-10 p-5">
                    {/* LEFT */}
                    <div className="flex items-center gap-5 w-full sm:w-1/2 max-w-[400px] md:flex-row flex-col">
                        <img src={question} alt="question" className="w-5 h-5 shrink-0" />
                        <h2 className="text-2xl font-medium">
                            Как заказать эвакуатор?
                        </h2>
                    </div>

                    {/* RIGHT */}
                    <div className="flex items-center w-full sm:w-1/2 max-w-[800px]">
                        <h3>
                            Позвоните нам или напишите в мессенджер. Диспетчер примет заявку и сразу направит эвакуатор к вам.
                        </h3>
                    </div>
                </div>
            </div>
            <hr className="border-t border-black w-full px-10 mt-4 opacity-50" />
            <div className="flex  flex-col gap-20 p-5">
                <div className="flex md:flex-row flex-col md:gap-20 gap-10 p-5">
                    {/* LEFT */}
                    <div className="flex items-center gap-5 w-full sm:w-1/2 max-w-[400px] md:flex-row flex-col">
                        <img src={question} alt="question" className="w-5 h-5 shrink-0" />
                        <h2 className="text-2xl font-medium">
                            Работаете ли вы ночью и в выходные?
                        </h2>
                    </div>

                    {/* RIGHT */}
                    <div className="flex items-center w-full sm:w-1/2 max-w-[800px]">
                        <h3>
                            Да, эвакуатор FILIN работает 24/7, включая ночное время, выходные и праздничные дни.
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Questions;