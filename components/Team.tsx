import { Twitter } from "./SvgIcons";
import TeamCard from "./TeamCard";
import TeamCard1 from "./TeamCard1";
import TeamCard2 from "./TeamCard2";

const Team = () => {
    return (
        <div className="flex flex-col mx-10" id="team">
            <div className="flex justify-center">
                <div className="relative my-5">
                    <p className="uppercase text-[40px] md:text-[100px] font-bold font-gulf text-[black]">Team</p>
                    <p className="uppercase text-xl rotate-[20deg] font-bold font-gulf text-[#F8450B] absolute top-0 right-0">Sneaky</p>
                </div>
            </div>
            <div className="flex justify-between lg:flex-row flex-col lg:gap-0 gap-10">
                <TeamCard />
                <TeamCard1 />
                <TeamCard2 />
            </div>
        </div>
    )
}

export default Team;