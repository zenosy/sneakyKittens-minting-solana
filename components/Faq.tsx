import { DownArrow } from "./SvgIcons";
import { useEffect, useState } from "react";

const Faq = () => {
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    return (
        <div>
            <div className="flex flex-col lg:flex-row justify-between mx-10 gap-0 lg:gap-[100px]">
                <div className="relative">
                    <p className="uppercase text-[40px] md:text-[100px] font-bold font-gulf text-[black]">Faq</p>
                    <p className="uppercase text-xl -rotate-[20deg] font-bold font-gulf text-[#F8450B] absolute top-0 left-0">SNEAKY</p>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="border-[1px] gap-10 overflow-hidden border-black rounded-xl flex flex-col justify-between items-start text-shadow4 p-8 ease-in-out transition-all duration-300 lg:h-[100px] h-[220px]"
                        style={{
                            height: isOpen1 ? "280px" : "220px"
                        }}
                    >
                        <div className="flex items-center justify-between w-full"
                            onClick={() => {
                                setIsOpen1(!isOpen1);
                                setIsOpen2(false);
                                setIsOpen3(false);
                                setIsOpen4(false);
                            }}
                        >
                            <p className="font-gulf text-[26px] md:text-[40px] text-black uppercase">what is sneaky kittens NFTs?</p>
                            <div
                                className="cursor-pointer"

                            >
                                <div className={`${isOpen1 ? 'rotate-180' : 'rotate-0'} transition-all ease-in-out duration-300 sh:block hidden`}>
                                    <DownArrow />
                                </div>
                            </div>
                        </div>
                        <p className={`text-md text-black ${isOpen1 ? 'visible' : 'invisible'}`}>Sneaky Kittens NFTs are a collection of 5,000 uniquely designed digital kittens created by Sneaky Labs. These virtual felines exist on the Solana blockchain, a popular platform known for its speed and efficiency in handling transactions. Each Sneaky Kitten is distinct, with a diverse range of over 100 traits that give each one a unique appearance and personality. Owners of these NFTs can enjoy exclusive utilities that may include member benefits, access to events, or other digital assets. Additionally, holding a Sneaky Kitten NFT could provide a passive income stream, as owners might earn SOL, Solana's native cryptocurrency, on a monthly basis. This combination of artistry, exclusivity, and financial incentive makes Sneaky Kittens an appealing project for enthusiasts in the NFT space.</p>
                    </div>
                    <div className="border-[1px] gap-10 overflow-hidden border-black rounded-xl flex flex-col justify-between items-start text-shadow4 p-8 ease-in-out transition-all duration-300 2md:h-[100px] h-[230px]"
                        style={{
                            height: isOpen2 ? "280px" : "230px"
                        }}
                    >
                        <div className="flex items-center justify-between w-full"
                            onClick={() => {
                                setIsOpen2(!isOpen2);
                                setIsOpen1(false);
                                setIsOpen3(false);
                                setIsOpen4(false);
                            }}
                        >
                            <p className="font-gulf text-[26px] md:text-[40px] text-black uppercase">What are the benefits of minting?</p>
                            <div
                                className="cursor-pointer"

                            >
                                <div className={`${isOpen2 ? 'rotate-180' : 'rotate-0'} transition-all ease-in-out duration-300  sh:block hidden`}>
                                    <DownArrow />
                                </div>
                            </div>
                        </div>
                        <p className={`text-md text-black ${isOpen2 ? 'visible' : 'invisible'}`}> Community Rewards: A portion of the cost to mint new NFTs (15%) is allocated to existing NFT holders. This incentivizes early participation since the earlier you mint, the more you stand to gain from subsequent mints.

                            <br></br>Flare Delegation Pool: A substantial portion (25%) of the minting fees is directed towards the Flare delegation pool. This generates FLR tokens on a weekly basis and Flaredrops on a monthly basis. These are then converted to SOL and distributed among NFT holders. The mention of "28 months of Flaredrops" suggests that holders can expect to receive these distributions for over two years following their initial mint.

                            <br></br>Secondary Sales: A 5% royalty from secondary sales of the NFTs is distributed to the current holders, providing a continuous benefit from the ongoing trade of the NFTs they own.</p>
                    </div>
                    <div className="border-[1px] gap-10 overflow-hidden border-black rounded-xl flex flex-col justify-between items-start text-shadow4 p-8 ease-in-out transition-all duration-300 2md:h-[100px] h-[230px]"
                        style={{
                            height: isOpen3 ? "280px" : "230px"
                        }}
                    >
                        <div className="flex items-center justify-between w-full"
                            onClick={() => {
                                setIsOpen3(!isOpen3);
                                setIsOpen2(false);
                                setIsOpen1(false);
                                setIsOpen4(false);
                            }}
                        >
                            <p className="font-gulf text-[26px] md:text-[40px] text-black uppercase">How to claim 15% mint back & SOL from flaredrop?</p>
                            <div
                                className="cursor-pointer">
                                <div className={`${isOpen3 ? 'rotate-180' : 'rotate-0'} transition-all ease-in-out duration-300  sh:block hidden`}>
                                    <DownArrow />
                                </div>
                            </div>
                        </div>
                        <p className={`text-md text-black ${isOpen3 ? 'visible' : 'invisible'}`}>To claim your 15% mint back from minting share, the process is streamlined through our dedicated decentralized application (dApp). We will provide a specialized dApp designed for the minting process. This will be the primary platform through which you can interact with our services.There will be a clearly marked 'Claim' option available on our website. Once you navigate to this option, you can easily claim your share of the mint back rewards and the SOL earned from Flaredrops.</p>
                    </div>
                    <div className="border-[1px] gap-10 overflow-hidden border-black rounded-xl flex flex-col justify-between items-start text-shadow4 p-8 ease-in-out transition-all duration-300 2md:h-[100px] h-[230px]"
                        style={{
                            height: isOpen4 ? "280px" : "230px"
                        }}
                    >
                        <div className="flex items-center justify-between w-full"

                            onClick={() => {
                                setIsOpen4(!isOpen4);
                                setIsOpen2(false);
                                setIsOpen3(false);
                                setIsOpen1(false);
                            }}
                        >
                            <p className="font-gulf text-[26px] md:text-[40px] text-black uppercase">Why we picked Solana blockchain?</p>
                            <div
                                className="cursor-pointer">
                                <div className={`${isOpen4 ? 'rotate-180' : 'rotate-0'} transition-all ease-in-out duration-300  sh:block hidden`}>
                                    <DownArrow />
                                </div>
                            </div>
                        </div>
                        <p className={`text-md text-black ${isOpen4 ? 'visible' : 'invisible'}`}>We chose the Solana blockchain for our project due to its exceptional transaction speed and capacity, which ensures a smooth and efficient experience for users. Its low transaction fees make it economical for both minting and trading NFTs. Additionally, Solana's scalability and eco-friendly consensus mechanism provide a sustainable infrastructure that can grow with our project. The robust and supportive Solana community further enriches the ecosystem, offering a wealth of resources and opportunities for integration and collaboration.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Faq;