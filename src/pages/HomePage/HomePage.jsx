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
import GeoButton from '../../components/GeoButton/GeoButton';
import TroickiyImage from '../../components/TroickiyImage/TroickiyImage';
import ZnamenkaImage from "../../components/ZnamenkaImage/ZnamenkaImage";
import SEOLink from '../../components/SEOLink/SEOLink';
import OdessaImage from '../../components/OdessaImage/OdessaImage';

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
            <div className='flex justify-center'>
                <ButtonRed to="tel:+380663642781" className='mt-10'>Расчитать стоимость</ButtonRed>
            </div>
            <RoadLine />
            <OdessaImage />

            <Bast />
            <div className="flex justify-center items-center mt-10 flex-col gap-5">
                <GeoButton href="https://www.google.com/maps/place/Filin+%D0%AD%D0%B2%D0%B0%D0%BA%D1%83%D0%B0%D1%82%D0%BE%D1%80+%D0%A2%D1%80%D0%BE%D0%B8%D1%86%D0%BA%D0%BE%D0%B5+24%2F7/@47.6492317,30.3078798,17z/data=!3m1!4b1!4m6!3m5!1s0x40ceefd40170c81b:0xf610f75abf758fdf!8m2!3d47.6492317!4d30.3078798!16s%2Fg%2F11yxz6gfds?entry=ttu&g_ep=EgoyMDI2MDEyNy4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D" name="Мы на карте — Троицкое" />
            </div>
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
            <SectionStyle number="04" title="Эвакуатор Знаменка Одесская область" />
            <ZnamenkaImage />
            <SectionStyle number="05" title="О нас" />
            <About />
            <div className='flex justify-center'>
                <ButtonRed to="tel:+380663642781" className='mt-10'>Вызвать эвакуатор</ButtonRed>
            </div>
            <LineBanner />
            <SectionStyle number="06" title="Карта эвакуатора Filin" />
            <Map />
            <SectionStyle number="07" title="Эвакуатор Троицкое" />
            <TroickiyImage />
            <div className="flex justify-center items-center mt-10 flex-col gap-5">
                <GeoButton href="https://www.google.com/maps/place/Filin+%D0%AD%D0%B2%D0%B0%D0%BA%D1%83%D0%B0%D1%82%D0%BE%D1%80+%D0%A2%D1%80%D0%BE%D0%B8%D1%86%D0%BA%D0%BE%D0%B5+24%2F7/@47.6492317,30.3078798,17z/data=!3m1!4b1!4m6!3m5!1s0x40ceefd40170c81b:0xf610f75abf758fdf!8m2!3d47.6492317!4d30.3078798!16s%2Fg%2F11yxz6gfds?entry=ttu&g_ep=EgoyMDI2MDEyNy4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D" name="Мы на карте — Троицкое" />
            </div>
            <SectionStyle number="08" title="Вопросы и ответы" />
            <Questions />
            <SEOLink />
            <RoadLine />
            <Footer />
            <FloatingContacts />
        </>
    );
}
export default HomePage;