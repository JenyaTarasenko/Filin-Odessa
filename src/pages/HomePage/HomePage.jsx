import React from 'react'
import NavBar from '../../components/NavBar/NavBar';
import HeroSection from '../../components/HeroSection/HeroSection';
import PriceHero from '../../components/PriceHero/PriceHero';
import ButtonRed from '../../components/ButtonRed/ButtonRed';
import Bast from '../../components/Bast/Bast';
import BastCard from '../../components/BastCard/BastCard';
import SectionStyle from '../../components/SectionStyle/SectionStyle';
import BastSafely from '../../components/BastSafely/BastSafely';
import CardPrime from '../../components/CardPrime/CardPrime';
import PriceCard from '../../components/PriceCard/PriceCard';
import About from '../../components/About/About';
import Questions from '../../components/Questions/Questions';
import Map from '../../components/Map/Map';
import Footer from '../../components/Footer/Footer';
import FloatingContacts from '../../components/FloatingContacts/FloatingContacts';

function HomePage() {
    return (
        <>
            <NavBar />
            <HeroSection />
            <PriceHero />
            <div className='flex justify-center'>
                <ButtonRed to="tel:+380663642781" className='mt-10'>Расчитать стоимость</ButtonRed>
            </div>
            <Bast />
            <BastCard />
            <SectionStyle number="01" title="Почему с нами  безопасно и камфортно" />
            <BastSafely />
            <SectionStyle number="02" title="Мы работаем со всеми видами транспорта" />
            <CardPrime />
            <div className='flex justify-center'>
                <ButtonRed to="tel:+380663642781" className='mt-10'>Вызвать эвакуатор</ButtonRed>
            </div>
            <SectionStyle number="03" title="Наши цены" />
            <PriceCard />
            <SectionStyle number="04" title="О нас" />
            <About />
            <div className='flex justify-center'>
                <ButtonRed to="tel:+380663642781" className='mt-10'>Вызвать эвакуатор</ButtonRed>
            </div>
            <SectionStyle number="05" title="Карта эвакуатора Filin" />
            <Map />
            <SectionStyle number="06" title="Вопросы и ответы" />
            <Questions />
            <Footer />
            <FloatingContacts />
        </>
    );
}
export default HomePage;