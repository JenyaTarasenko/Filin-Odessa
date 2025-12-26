export default function LineBanner() {
    return (
        <div className="w-full flex items-center justify-center my-16 px-4">
            <div className="flex items-center w-full max-w-6xl">

                {/* Левая линия */}
                <div className="flex-1 h-[2px] bg-yellow-500" />

                {/* Центр */}
                <div className="flex items-center gap-4 px-6">
                    <span className="text-yellow-500 font-bold text-lg tracking-widest">
                        24/7
                    </span>

                    <span className="uppercase font-semibold text-gray-900 text-lg">
                        FILIN <span className="text-yellow-500">эвакуатор</span>
                    </span>
                </div>

                {/* Правая линия */}
                <div className="flex-1 h-[2px] bg-yellow-500" />

            </div>
        </div>
    );
}
