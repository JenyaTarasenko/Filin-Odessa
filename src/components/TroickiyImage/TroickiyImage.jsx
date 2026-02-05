
import './style.css';
// import slaid2 from "../../assets/image/znamenka1.svg"
// import slaid3 from "../../assets/image/znamenka2.svg"
// import slaid4 from "../../assets/image/znamenka3.svg"
// import slaid1 from "../../assets/image/znamenka4.svg"
// import slaid5 from "../../assets/image/znamenka5.svg"
// import slaid6 from "../../assets/image/znamenka6.svg"
// import slaid8 from "../../assets/image/znamenka8.svg"
// import slaid9 from "../../assets/image/znamenkaIm1.svg"
import slaid10 from "../../assets/image/znamIm2.svg"
import slaid11 from "../../assets/image/znamIm3.svg"
import slaid12 from "../../assets/image/znamIm4.svg"
import slaid13 from "../../assets/image/znamIm5.svg"
import slaid14 from "../../assets/image/znamIm6.svg"
import slaid15 from "../../assets/image/znamIm7.svg"
import slaid16 from "../../assets/image/znamIm8.svg"
import slaid17 from "../../assets/image/znamIm9.svg"
import slaid18 from "../../assets/image/znamIm10.svg"


import { useInView } from "react-intersection-observer";




function TroickiyImage() {
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
                        <img src={slaid10} alt="Эвакуатор Знаменка Одесская область" />
                    </div>
                    <div className="card-img">
                        <img src={slaid11} alt="Эвакуатор Знаменка Одесская область" />
                    </div>
                    <div className="card-img">
                        <img src={slaid12} alt="Эвакуатор Знаменка Одесская область" />
                    </div>
                    <div className="card-img">
                        <img src={slaid13} alt="Эвакуатор Знаменка Одесская область" />
                    </div>
                    <div className="card-img">
                        <img src={slaid14} alt="Эвакуатор Знаменка Одесская область" />
                    </div>
                    <div className="card-img">
                        <img src={slaid15} alt="Эвакуатор Знаменка Одесская область" />
                    </div>
                    <div className="card-img">
                        <img src={slaid16} alt="Эвакуатор Знаменка Одесская область" />
                    </div>
                    <div className="card-img">
                        <img src={slaid17} alt="Эвакуатор Знаменка Одесская область" />
                    </div>
                    <div className="card-img">
                        <img src={slaid18} alt="Знаменка Одесская область" />
                    </div>
                    <div className="card-img">
                        <img src={slaid12} alt="Знаменка Одесская область" />
                    </div>
                    <div className="card-img">
                        <img src={slaid11} alt="Знаменка Одесская область" />
                    </div>
                    <div className="card-img">
                        <img src={slaid14} alt="Знаменка Одесская область" />
                    </div>
                    <div className="card-img">
                        <img src={slaid15} alt="Знаменка Одесская область" />
                    </div>
                    <div className="card-img">
                        <img src={slaid16} alt="Знаменка Одесская область" />
                    </div>
                    <div className="card-img">
                        <img src={slaid18} alt="Знаменка Одесская область" />
                    </div>
                </div>
            </div>
        </>
    );
}
export default TroickiyImage;