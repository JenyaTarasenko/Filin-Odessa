import React from 'react'
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import ZnamenkaMain from '../../components/ZnamenkaMain/ZnamenkaMain';
import PriceHero from '../../components/PriceHero/PriceHero';
import ZnamenkaText from '../../components/ZnamenkaText/ZnamenkaText';
import ZnamenkaMap from '../../components/ZnamenkaMap/ZnamenkaMap';
import ButtonRed from '../../components/ButtonRed/ButtonRed';
import FloatingContacts from '../../components/FloatingContacts/FloatingContacts';
import SectionStyle from '../../components/SectionStyle/SectionStyle';
import ZnamenkaSEO from '../../components/ZnamenkaSEO/ZnamenkaSEO';
import ZnamenkaImage from '../../components/ZnamenkaImage/ZnamenkaImage';
import SEOLink from '../../components/SEOLink/SEOLink';
import Reviews from '../../components/Reviews/Reviews';
import { Helmet } from "@dr.pogodin/react-helmet";


function ZnamenkaPage() {
    return (

        <>
            <Helmet>
                <title>Эвакуатор FILIN Знаменка — 24/7 | Вызов эвакуатора в Знаменке и ближайших районах</title>
                <meta
                    name="description"
                    content="Круглосуточный эвакуатор в Знаменке и ближайших районах: Кривое Озеро, Троицкое, Беляевка. Быстрый выезд 24/7, эвакуация всех видов авто и мототехники. Бесплатная консультация."
                />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://odessa-evacuator.com.ua/znamenka" />

                {/* Open Graph */}
                <meta property="og:title" content="Круглосуточный эвакуатор в Знаменке Одесская облась Кривое Озеро, Троицкое" />
                <meta
                    property="og:description"
                    content="Эвакуатор FILIN работает в Знаменке, Кривом Озере, Троицком и Беляевке. Быстрый выезд, эвакуация всех видов транспорта."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://odessa-evacuator.com.ua/znamenka" />
                <meta property="og:site_name" content="FILIN Эвакуатор Знаменка" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Эвакуатор FILIN Знаменка Одесса и Одесская область — 24/7" />
                <meta
                    name="twitter:description"
                    content="Эвакуатор FILIN работает в Знаменке, Кривом Озере, Троицком и Беляевке. Быстрый выезд, эвакуация всех видов транспорта 24/7."
                />

                {/* JSON-LD LocalBusiness */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "Эвакуатор FILIN Знаменка",
                        "url": "https://odessa-evacuator.com.ua/znamenka",
                        "telephone": ["+380663642781", "+380937302859"],
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "ул. Магистральная, 15",
                            "addressLocality": "Знаменка",
                            "addressRegion": "Одеська область",
                            "postalCode": "67211",
                            "addressCountry": "UA"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 47.1245,
                            "longitude": 30.2258
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
            <ZnamenkaMain />
            <PriceHero />
            <ZnamenkaText />
            <ZnamenkaImage />
            <div className='flex justify-center'>
                <ButtonRed to="tel:+380663642781" className='mt-10'>Вызвать эвакуатор</ButtonRed>
            </div>
            <SectionStyle number="01" title="Круглосуточная эвакуация Знаменка Одесская область" />
            <ZnamenkaMap />
            <SectionStyle number="02" title="Эвакуация автомобилей Знаменка" />
            <ZnamenkaSEO />
            <FloatingContacts />
            <div className='flex justify-center'>
                <ButtonRed to="tel:+380663642781" className='mt-10'>Вызвать эвакуатор</ButtonRed>
            </div>
            <SEOLink />
            <SectionStyle number="03" title="Отзывы Знаменка Одесская область" />
            <Reviews />
            <Footer />
        </>
    );
}
export default ZnamenkaPage;