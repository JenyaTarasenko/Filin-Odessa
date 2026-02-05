import mapImage from "../../assets/image/map.svg";

function Map() {
    const plusCode = "28F8+RRH Znamyanka Odessa Ukraine";
    const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(plusCode)}`;

    return (
        <section id="map" className="w-full bg-white py-16">
            <div className="max-w-7xl mx-auto px-5">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">

                    {/* LEFT — GOOGLE MAP */}
                    <div className="w-full h-[400px] rounded-3xl overflow-hidden mx-auto">
                        <a href={mapsLink} target="_blank" rel="noopener noreferrer">
                            <iframe
                                title="Google Map"
                                src={`https://www.google.com/maps?q=${encodeURIComponent(plusCode)}&output=embed`}
                                className="w-full h-full border-0"
                                loading="lazy"
                            />
                        </a>
                    </div>

                    {/* RIGHT — IMAGE */}
                    <div className="flex justify-center items-center">
                        <img
                            src={mapImage}
                            alt="Карта эвакуатора Filin"
                            className="w-full max-w-[300px] lg:max-w-[400px] h-auto"
                            loading="lazy"
                        />
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Map;
