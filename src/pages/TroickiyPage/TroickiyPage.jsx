import React from 'react'
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import TroicKiy from '../../components/TroicKiy/TroicKiy';
import ZnamenkaImage from '../../components/ZnamenkaImage/ZnamenkaImage';
import PriceHero from '../../components/PriceHero/PriceHero';
import GeoButton from '../../components/GeoButton/GeoButton';
import TroiText from '../../components/TroiText/TroiText';
import SEOLink from '../../components/SEOLink/SEOLink';
import SectionStyle from '../../components/SectionStyle/SectionStyle';
import TroickiyMap from '../../components/TroickiyMap/TroickiyMap';
import { Helmet } from "@dr.pogodin/react-helmet";
import TroickiySeo from '../../components/TroickiySeo/TroickiySeo';
import ReviewTroickiy from '../../components/ReviewTroickiy/ReviewTroickiy';

function TroickiyPage() {
    return (
        <div>
            <Helmet>
                <title>Эвакуатор FILIN Троицкое — 24/7 | Вызов эвакуатора в Троицком и ближайших районах</title>
                <meta
                    name="description"
                    content="Круглосуточный эвакуатор в Троицком и ближайших районах: Знаменка, Кривое Озеро, Беляевка. Быстрый выезд 24/7, эвакуация всех видов авто и мототехники. Бесплатная консультация."
                />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://odessa-evacuator.com.ua/troickiy" />

                {/* Open Graph */}
                <meta property="og:title" content="Круглосуточный эвакуатор в Троицком Одесская область Знаменка, Кривое Озеро" />
                <meta
                    property="og:description"
                    content="Эвакуатор FILIN работает в Троицком, Знаменке, Кривом Озере и Беляевке. Быстрый выезд, эвакуация всех видов транспорта."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://odessa-evacuator.com.ua/troickiy" />
                <meta property="og:site_name" content="FILIN Эвакуатор Троицкое" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Эвакуатор FILIN Троицкое Одесса и Одесская область — 24/7" />
                <meta
                    name="twitter:description"
                    content="Эвакуатор FILIN работает в Троицком, Знаменке, Кривом Озере и Беляевке. Быстрый выезд, эвакуация всех видов транспорта 24/7."
                />

                {/* JSON-LD LocalBusiness */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "Эвакуатор FILIN Троицкое",
                        "url": "https://odessa-evacuator.com.ua/troickiy",
                        "telephone": ["+380663642781", "+380937302859", "+380635615665"],
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "ул. Магистральная, 15",
                            "addressLocality": "Троицкое",
                            "addressRegion": "Одеська область",
                            "postalCode": "67211",
                            "addressCountry": "UA"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 47.6492,
                            "longitude": 30.3079
                        },
                        "openingHoursSpecification": [
                            {
                                "@type": "OpeningHoursSpecification",
                                "dayOfWeek": [
                                    "Monday",
                                    "Tuesday",
                                    "Wednesday",
                                    "Thursday",
                                    "Friday",
                                    "Saturday",
                                    "Sunday"
                                ],
                                "opens": "00:00",
                                "closes": "23:59"
                            }
                        ],
                        "sameAs": [
                            "https://www.facebook.com/people/%D0%98%D0%B2%D0%B0%D0%BD-%D0%A4%D0%B8%D0%BB%D0%B8%D0%BD/",
                            "https://t.me/httpswwwtowtruckodesaua",
                            "https://www.instagram.com/filin.vans/"
                        ]
                    })}
                </script>
            </Helmet>
            <NavBar />
            <TroicKiy />
            <PriceHero />
            <div className="flex justify-center items-center mt-10 flex-col gap-5">
                <GeoButton href="https://www.google.com/maps/place/Filin+%D0%AD%D0%B2%D0%B0%D0%BA%D1%83%D0%B0%D1%82%D0%BE%D1%80+%D0%A2%D1%80%D0%BE%D0%B8%D1%86%D0%BA%D0%BE%D0%B5+24%2F7/@47.6492317,30.3078798,17z/data=!3m1!4b1!4m6!3m5!1s0x40ceefd40170c81b:0xf610f75abf758fdf!8m2!3d47.6492317!4d30.3078798!16s%2Fg%2F11yxz6gfds?entry=ttu&g_ep=EgoyMDI2MDEyNy4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D" name="Мы на карте — Троицкое" />
            </div>
            <ZnamenkaImage />
            <TroiText />
            <SectionStyle number="01" title="Круглосуточная эвакуация Троицкое Одесская область" />
            <TroickiyMap />
            <SectionStyle number="02" title="Круглосуточная эвакуация Троицкое Одесская область" />
            <TroickiySeo />
            <SEOLink />
            <ReviewTroickiy />
            <Footer />
        </div>
    )
}

export default TroickiyPage
