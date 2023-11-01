import { Twitter } from "./SvgIcons";
import { FaLinkedin } from 'react-icons/fa'; // For LinkedIn icon

const TeamCard = () => {
    return (
        <div className="rounded-2xl border-black border-[1px] flex flex-col items-center p-[80px] gap-5">
            <img src="img/nft2.png" className="rounded-full w-full md:w-[300px] h-auto" alt="" />
            <p className="uppercase text-[36px] font-bold font-gulf text-[black]">Arjun</p>
            <p className="uppercase text-[18px] font-bold text-[#535353] text-center">designer & co-founder</p>
            <div className="flex justify-center gap-5">
                <a href="https://twitter.com/Sneaky_labs" target="_blank" rel="noopener noreferrer" className="w-[80px] h-[80px] rounded-full flex justify-center items-center text-shadow3 border-[1px] border-black">
                    <Twitter /></a>

            </div>
        </div>


    )
}

export default TeamCard;