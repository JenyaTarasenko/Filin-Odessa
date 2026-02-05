
import './style.css';
import slaid2 from "../../assets/image/znamenka1.svg"
import slaid3 from "../../assets/image/znamenka2.svg"
import slaid4 from "../../assets/image/znamenka3.svg"
import slaid1 from "../../assets/image/znamenka4.svg"
import slaid5 from "../../assets/image/znamenka5.svg"
import slaid6 from "../../assets/image/znamenka6.svg"
import slaid8 from "../../assets/image/znamenka8.svg"




import { useInView } from "react-intersection-observer";




function OdessaImage() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const fadeInLeftStyle = (delay = 0) => ({
        opacity: inView ? 1 : 0,
        transform: inView ? "translateX(0)" : "translateX(-30px)", // сдвиг слева
        // transition: `all 1s ease-out ${delay}s`
        transition: `opacity 1.5s cubic-bezier(0.65, 0, 0.35, 1) ${delay}s, transform 1.5s cubic-bezier(0.65, 0, 0.35, 1) ${delay}s`
    });
    return (

        <>
            <div className="slider-container mt-5">
                <div class="slider-track">
                    <div class="card-img">
                        <img src={slaid1} alt="Эвакуатор Знаменка Одесская область" />
                    </div>
                    <div className="card-img">
                        <img src={slaid2} alt="Эвакуатор Знаменка Одесская область" />
                    </div>
                    <div className="card-img">
                        <img src={slaid3} alt="Эвакуатор Знаменка Одесская область" />
                    </div>
                    <div className="card-img">
                        <img src={slaid4} alt="Эвакуатор Знаменка Одесская область" />
                    </div>
                    <div className="card-img">
                        <img src={slaid5} alt="Эвакуатор Знаменка Одесская область" />
                    </div>
                    <div className="card-img">
                        <img src={slaid6} alt="Эвакуатор Знаменка Одесская область" />
                    </div>
                    <div className="card-img">
                        <img src={slaid8} alt="Эвакуатор Знаменка Одесская область" />
                    </div>
                    <div className="card-img">
                        <img src={slaid1} alt="Знаменка Одесская область" />
                    </div>
                    <div className="card-img">
                        <img src={slaid2} alt="Знаменка Одесская область" />
                    </div>
                    <div className="card-img">
                        <img src={slaid3} alt="Знаменка Одесская область" />
                    </div>
                    <div className="card-img">
                        <img src={slaid4} alt="Знаменка Одесская область" />
                    </div>
                    <div className="card-img">
                        <img src={slaid5} alt="Знаменка Одесская область" />
                    </div>
                    <div className="card-img">
                        <img src={slaid6} alt="Знаменка Одесская область" />
                    </div>
                </div>
            </div>
        </>
    );
}
export default OdessaImage;