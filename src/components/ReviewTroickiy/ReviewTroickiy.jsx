import './style.css';
import star from "../../assets/image/star1.svg";
import review from "../../assets/image/review.svg";


function ReviewTroickiy() {
    return (
        <section className="questions-section mt-5">
            <div className="scroll-container">
                <div className="questions-card">
                    <img src={review} alt="звезды" loading='lazy' className='w-20 h-20' />
                    <img src={star} alt="звезды" loading='lazy' className='w-20 h-20' />
                    <p className="mt-4">Быстро приехали в Троицкое, аккуратно погрузили авто. Цена адекватная.</p>
                </div>
                <div className="questions-card">
                    <img src={review} alt="звезды" loading='lazy' className='w-20 h-20' />
                    <img src={star} alt="звезды" loading='lazy' className='w-20 h-20' />
                    <p className="mt-4">Эвакуатор Filin выручил — приехали оперативно, водитель вежливый.Быстро приехал и погрузил машину</p>
                </div>
                <div className="questions-card">
                    <img src={review} alt="звезды" loading='lazy' className='w-20 h-20' />
                    <img src={star} alt="звезды" loading='lazy' className='w-20 h-20' />
                    <p className="mt-4">Надёжный и крутой эвакуатор Filin в Троицком. Без задержек и лишних вопросов.</p>
                </div>
            </div>
        </section>
    );
}
export default ReviewTroickiy;