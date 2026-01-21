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
import LineBanner from '../../components/LinerBanner/LinerBanner';
import RoadLine from '../../components/RoadLine/RoadLine';
import { Helmet } from "@dr.pogodin/react-helmet";

function HomePage() {
    return (
        <>
            <Helmet>
                <title>Эвакуатор FILIN Одесса — 24/7 | Вызов эвакуатора в Одессе и области</title>
                <meta
                    name="description"
                    content="Круглосуточный эвакуатор в Одессе и Одесской области. Быстрый выезд 24/7, эвакуация всех видов авто и мототехники. Бесплатная консультация."
                />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://odessa-evacuator.com.ua" />

                {/* Open Graph */}
                <meta property="og:title" content="Круглосуточный эвакуатор в Одессе и Одесской области" />
                <meta
                    property="og:description"
                    content="Круглосуточный эвакуатор в Одессе и Одесской области. Быстрый выезд, эвакуация любых авто и мототехники."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://odessa-evacuator.com.ua" />
                <meta property="og:site_name" content="FILIN Эвакуатор Одесса" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Круглосуточный эвакуатор в Одессе и Одесской области" />
                <meta
                    name="twitter:description"
                    content="Круглосуточный эвакуатор в Одессе и Одесской области. Быстрый выезд, эвакуация любых авто и мототехники."
                />
            </Helmet>

            <NavBar />
            <HeroSection />
            <PriceHero />
            <RoadLine />
            <div className='flex justify-center'>
                <ButtonRed to="tel:+380663642781" className='mt-10'>Расчитать стоимость</ButtonRed>
            </div>
            <Bast />
            <BastCard />
            <SectionStyle number="01" title="Почему с нами  безопасно и камфортно" />
            <BastSafely />
            <LineBanner />
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
            <LineBanner />
            <SectionStyle number="05" title="Карта эвакуатора Filin" />
            <Map />
            <SectionStyle number="06" title="Вопросы и ответы" />
            <Questions />
            <RoadLine />
            <Footer />
            <FloatingContacts />
        </>
    );
}
export default HomePage;