import { FaPhoneAlt, FaTelegramPlane, FaViber } from "react-icons/fa";

function FloatingContacts() {
    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">



            {/* TELEGRAM */}
            <a
                href="https://t.me/httpswwwtowtruckodesaua"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-lg hover:scale-110 transition"
                aria-label="Telegram"
            >
                <FaTelegramPlane size={24} />
            </a>
            {/* PHONE */}
            <a
                href="tel:+380663642781"
                className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center text-white shadow-lg hover:scale-110 transition"
                aria-label="Позвонить"
            >
                <FaPhoneAlt size={22} />
            </a>

            {/* VIBER */}
            {/* <a
                href="viber://chat?number=%2B380663642781"
                className="w-14 h-14 rounded-full bg-purple-600 flex items-center justify-center text-white shadow-lg hover:scale-110 transition"
                aria-label="Viber"
            >
                <FaViber size={24} />
            </a> */}

        </div>
    );
}

export default FloatingContacts;
