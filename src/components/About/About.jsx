import about1 from "../../assets/image/about1.svg";
import about2 from "../../assets/image/about2.svg";
import about3 from "../../assets/image/about3.svg";
import about4 from "../../assets/image/about4.svg"
function About() {
    return (
        <div id="about" className="flex flex-row justify-center flex-wrap gap-2 p-2">
            <div className="flex flex-col bg-gradient-to-r from-[#0E3A57] to-[#198491] max-w-[430px] max-h-[570px] rounded-[40px] p-7">
                <h2 className="sm:text-5xl text-2xl font-bold text-white sm:mt-5 mt-1">Эвакуатор <br />FILIN </h2>
                <h3 className="sm:text-xl text-sm font-normal text-white mt-5">Эвакуатор FILIN — это команда профессионалов, которая работает со всеми видами машин. Мы эвакуируем легковые автомобили, кроссоверы, внедорожники, электрокары, мотоциклы и авто после ДТП, обеспечивая быструю и безопасную доставку 24/7.</h3>
                <h4 className="sm:text-xl text-sm font-normal text-white sm:mt-5 mt-2">Профессиональный сервис с опытной командой и современной техникой. Эвакуируем любые авто быстро, безопасно и без лишних хлопот.</h4>
            </div>
            <div className="flex flex-col items-end gap-2">
                <img src={about1} alt="Эвакуатор FILIN — это команда профессионалов, которая работает со всеми видами машин. " loading="lazy" className="sm:max-w-[400px] w-full" />
                <img src={about2} alt="Эвакуатор FILIN — эвакуатор в Одессе" loading="lazy" className="sm:max-w-[400px] w-full" />
            </div>
            <img src={about3} alt="Эвакуатор FILIN — эвакуатор в Одессе 24/7" loading="lazy" className="max-h-[570px] hidden sm:block" />
            <img src={about4} alt="Эвакуатор FILIN — эвакуатор в Одессе 24/7" loading="lazy" className="max-h-[570px] block sm:hidden rounded-[30px]" />
        </div>
    );
}

export default About;
