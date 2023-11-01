import { Twitter } from "./SvgIcons";
import { FaDiscord } from 'react-icons/fa'; // This imports the Discord icon
import { FaLinkedin } from 'react-icons/fa'; // For LinkedIn icon


const SocialPage = () => {
    return (
        <div className="flex flex-col items-center my-[100px] gap-10 relative" id="follow">
            <img src="img/logo1.png" className="w-[80px] h-[80px]" alt="" />
            <p className="font-gulf text-[white] text-2xl sm:text-[30px] md:text-[60px] lg:text-[80px] text-shadow2 uppercase">follow us</p>
            <p className="font-gulf text-[black] text-2xl text-center sm:text-[30px] md:text-[60px] lg:text-[80px] uppercase md:leading-[80px] leading-0">on social<br /> media</p>
            <img src="img/coin.svg" className="absolute left-10 -bottom-10" alt="" />
<div className="flex justify-center gap-5">
    <a href="https://twitter.com/Sneaky_labs" target="_blank" rel="noopener noreferrer" className="sm:w-[80px] sm:h-[80px] w-[50px] h-[50px] rounded-full flex justify-center items-center text-shadow3 border-[1px] border-black">
        <Twitter />
    </a>
    <a href="https://discord.gg/55PAppga" target="_blank" rel="noopener noreferrer" className="sm:w-[80px] sm:h-[80px] w-[50px] h-[50px] rounded-full flex justify-center items-center text-shadow3 border-[1px] border-black">
        <FaDiscord />
    </a>
</div>
            <a className="w-[50px] h-[50px] rounded-full flex justify-center items-center text-shadow3 border-[1px] border-black -bottom-[80px] left-2 absolute"
                href="#header"
            >
                <img src="img/Uparrow.svg" alt="" />
            </a>
        </div>
    )
}

export default SocialPage;