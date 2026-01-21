import './style.css';
import star from "../../assets/image/star1.svg";
import review from "../../assets/image/review.svg";


function Reviews() {
    return (
        <section className="questions-section mt-5">
            <div className="scroll-container">
                <div className="questions-card">
                    <img src={review} alt="звезды" loading='lazy' className='w-20 h-20' />
                    <img src={star} alt="звезды" loading='lazy' className='w-20 h-20' />
                    <p className="mt-4">Быстро приехали в Знаменке, аккуратно погрузили авто и довезли без проблем. Спасибо за оперативность.</p>
                </div>
                <div className="questions-card">
                    <img src={review} alt="звезды" loading='lazy' className='w-20 h-20' />
                    <img src={star} alt="звезды" loading='lazy' className='w-20 h-20' />
                    <p className="mt-4">Эвакуатор FILIN выручил на трассе рядом со Знаменкой. Всё четко, без лишних вопросов.</p>
                </div>
                <div className="questions-card">
                    <img src={review} alt="звезды" loading='lazy' className='w-20 h-20' />
                    <img src={star} alt="звезды" loading='lazy' className='w-20 h-20' />
                    <p className="mt-4">Вызывал эвакуатор ночью в Знаменке, ответили сразу. Цена адекватная, водитель опытный.</p>
                </div>
            </div>
        </section>
    );
}
export default Reviews;