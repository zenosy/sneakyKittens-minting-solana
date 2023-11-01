import { useEffect, useState } from "react";

const Home = () => {
    const imgList = [
        'img/anim1.png',
        'img/anim2.png',
        'img/anim3.png'
    ];
    const [mounted, setMounted] = useState(false);
    const [turn, setTurn] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setTurn(prevTurn => prevTurn === 2 ? 0 : prevTurn + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        setMounted(true)
    }, [])
    return (
        <div className="flex relative bg-[rgb(251,191,45)] flex-col items-center z-[11]">
            <p className={`font-gulf mb-10 leading-10 sm:leading-[80px] text-[#F8450B] lg:text-[120px] md:text-[80px] sm:text-[60px] text-[40px] text-shadow1 delay-500 duration-1000 ${mounted ? "translate-y-0" : "translate-y-20"}`}>SNEAKY</p>
            <p className={`font-gulf leading-10 sm:leading-[80px] text-white lg:text-[120px] md:text-[80px] sm:text-[60px] text-[40px] text-shadow1 delay-1000 duration-1000 ${mounted ? "translate-y-0" : "translate-y-20"}`}>KITTENS</p>
            <img src={imgList[turn]} className={`w-[500px] delay-[2000ms] duration-1000 ${mounted ? "translate-y-0" : "translate-y-20"}`} alt="" />
            <div className={`absolute right-10 top-[100px] md:top-[200px] md:w-[160px] md:h-[160px] w-[120px] h-[120px] delay-1000 duration-1000 ${mounted ? "translate-y-0" : "translate-y-20"}`}>
                <img src="img/rabbit.svg" className="md:w-[160px] md:h-[160px] w-[120px] h-[120px]" alt="" />
            </div>
            <div className={`absolute z-[1] right-10 top-[100px] md:top-[200px] md:w-[160px] md:h-[160px] w-[120px] h-[120px] delay-1000 duration-1000 ${mounted ? "translate-y-0" : "translate-y-20"}`}>
                <img src="img/circle.svg" className="md:w-[160px] md:h-[160px] w-[120px] h-[120px] animateSpin" alt="" />
            </div>
            <p className={`hidden sm:flex absolute bottom-10 left-10 text-black font-semibold text-lg uppercase delay-1000 duration-1000 ${mounted ? "translate-y-0" : "translate-y-20"}`}>
                a new wave <br /> collection is about <br /> to hit the Solana network
            </p>
            <div className={`hidden sm:flex flex-col justify-end bottom-10 right-10 absolute delay-1000 duration-1000 ${mounted ? "translate-y-0" : "translate-y-20"}`}>
                <a href="https://x.com/Sneaky_labs" target="_blank" rel="noopener noreferrer">
				<button className="text-black font-semibold text-lg flex justify-center items-center z-[16] bg-white rounded-lg border-[3px] border-black shadow-custom">
                    Twitter
					</button></a>
				<a href="https://discord.gg/55PAppga" target="_blank" rel="noopener noreferrer">
                <button className="text-black font-semibold text-lg flex justify-center items-center z-[16] bg-white rounded-lg border-[3px] border-black shadow-custom">
                    Discord
                </button></a>
            </div>
        </div>
    )
}

export default Home;