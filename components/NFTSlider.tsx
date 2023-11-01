import { useEffect, useState } from "react";

const NFTSlider = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const currentPosition = window.scrollY;
        setScrollPosition(currentPosition);
    };
    const topOffset = scrollPosition * 1;
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className="flex flex-col py-10 overflow-x-hidden gap-10">
            <div className={`flex gap-5 overflow-x-hidden`}
                style={{ transform: `translateX(${topOffset - 1400}px)` }}
            >
                <img src="img/nft1.png" className="w-[250px] h-[250px] rounded-xl" alt="" />
                <img src="img/nft2.png" className="w-[250px] h-[250px] rounded-xl" alt="" />
                <img src="img/nft3.png" className="w-[250px] h-[250px] rounded-xl" alt="" />
				<img src="img/nft4.png" className="w-[250px] h-[250px] rounded-xl" alt="" />
				<img src="img/nft5.png" className="w-[250px] h-[250px] rounded-xl" alt="" />
				<img src="img/nft6.png" className="w-[250px] h-[250px] rounded-xl" alt="" />
				<img src="img/nft7.png" className="w-[250px] h-[250px] rounded-xl" alt="" />
            </div>
            <div className={`flex gap-5 overflow-x-hidden`}
                style={{ transform: `translateX(-${topOffset - 1400}px)` }}
            >
                <img src="img/nft8.png" className="w-[250px] h-[250px] rounded-xl" alt="" />
                <img src="img/nft9.png" className="w-[250px] h-[250px] rounded-xl" alt="" />
                <img src="img/nft10.png" className="w-[250px] h-[250px] rounded-xl" alt="" />
				<img src="img/nft11.png" className="w-[250px] h-[250px] rounded-xl" alt="" />
				<img src="img/nft12.png" className="w-[250px] h-[250px] rounded-xl" alt="" />
				<img src="img/nft13.png" className="w-[250px] h-[250px] rounded-xl" alt="" />
				<img src="img/nft14.png" className="w-[250px] h-[250px] rounded-xl" alt="" />

            </div>
            <div className={`flex gap-5 overflow-x-hidden`}
                style={{ transform: `translateX(${topOffset - 1400}px)` }}
            >
                <img src="img/nft9.png" className="w-[250px] h-[250px] rounded-xl" alt="" />
                <img src="img/nft10.png" className="w-[250px] h-[250px] rounded-xl" alt="" />
                <img src="img/nft11.png" className="w-[250px] h-[250px] rounded-xl" alt="" />
				<img src="img/nft12.png" className="w-[250px] h-[250px] rounded-xl" alt="" />
				<img src="img/nft4.png" className="w-[250px] h-[250px] rounded-xl" alt="" />
				<img src="img/nft6.png" className="w-[250px] h-[250px] rounded-xl" alt="" />
				<img src="img/nft15.png" className="w-[250px] h-[250px] rounded-xl" alt="" />
            </div>
        </div>
    )
}

export default NFTSlider;