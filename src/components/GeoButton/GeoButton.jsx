const GeoButton = ({ href, name }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-200 max-w-[300px] rounded-[40px]"
        >
            📍 {name}
        </a>
    );
};

export default GeoButton;
