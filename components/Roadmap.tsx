const Roadmap = () => {
    const cards = [];
    const cardInfo = [
        {
            image: "img/nft1.png",
            index: "01",
            date: "Q1 2023",
            title: "Brand and Community Building",
            content: "Launch of our social media platforms to grow our community and establish the Sneaky Kittens brand. Engagement and feedback from early supporters will shape the project.",
            done: true
        },
        {
            image: "img/nft2.png",
            index: "02",
            date: "Q2 2023",
            title: "Website Launch and Marketing",
            content: "Our official website goes live, featuring a user-friendly interface and immersive lore of the Sneaky Kittens world. Marketing campaigns to amplify our presence.",
            done: false
        },
        {
            image: "img/nft3.png",
            index: "03",
            date: "Q3 2023",
            title: "Collaborations and Partnerships",
            content: "Partnering with influencers and brands within the NFT space to expand our reach. Exclusive drops and collaborations to add value for our members.",
            done: false
        },
        {
            image: "img/nft4.png",
            index: "04",
            date: "Q4 2023",
            title: "Minting Event and Secondary Market Listing",
            content: "Launch the minting of our 5k unique Sneaky Kittens NFTs. Listings on secondary markets will follow for trading and increased liquidity.",
            done: false
        },
        {
            image: "img/nft5.png",
            index: "05",
            date: "Q1 2024",
            title: "Community Rewards Program",
            content: "Initiate the rewards program where 15% of minting costs are distributed to holders, increasing their investment value from the get-go.",
            done: false
        },
        {
            image: "img/nft6.png",
            index: "06",
            date: "Q2 2024",
            title: "Holder Exclusive Benefits",
            content: "Implement a Flare delegation pool for monthly revenue sharing, and introduce a 5% royalty from secondary sales to our NFT holders. Ongoing community events and governance.",
            done: false
        },
    ]
    for (let i = 0; i < 6; i++) {
        cards.push(
            <div className="card flex sm:flex-row flex-col justify-between p-[60px] items-center relative" key={i} id="roadmap">
                {
                    cardInfo[i].done &&
                    <div className="absolute top-0 right-0 sm:w-[160px] sm:h-[160px] w-[100px] h-[100px]">
                        <img src="img/done.png" alt="" />
                    </div>
                }
                <div className="flex justify-center ">
                    <img src={cardInfo[i].image} className="sm:w-[250px] sm:h-[250px] w-[100px] h-[100px] rounded-full" alt="" />
                </div>
                <div className="flex flex-col justify-center w-full md:w-[calc(100%-270px)] px-0 gap-5 items-center">
                    <div className="bg-[#FEEADE] py-5 w-[216px] rounded-2xl flex justify-between items-center px-5">
                        <p className={`text-[white] font-bold text-[32px] bg-[#ff1515] px-4 rounded-3xl`}>{cardInfo[i].index}</p>
                        <p className={`text-[#ff1515] font-bold`}>{cardInfo[i].date}</p>
                    </div>
                    <p className="text-black font-gulf text-3xl text-center">
                        {cardInfo[i].title}
                    </p>
                    <p className="text-black text-lg">
                        {cardInfo[i].content}
                    </p>
                </div>
            </div>
        );
    }
    return (
        <div className="flex flex-col">
            <div className="flex lg:flex-row flex-col justify-between items-center gap-10 mx-10 my-10">
                <div className="relative">
                    <p className="uppercase text-[40px] md:text-[100px] font-bold font-gulf text-[black]">roadmap</p>
                    <p className="uppercase text-xl -rotate-[20deg] font-bold font-gulf text-[#F8450B] absolute top-0 left-0">our</p>
                </div>
                <p className="uppercase text-[20px] font-medium text-[black] text-center">
                    Our roadmap is the compass that guides the Sneaky Kittens NFT project, marking out our journey from inception to realization and beyond. It's a declaration of our planned initiatives, a timeline of exciting milestones we aim to achieve, and a commitment to our community's growth and the value of their investments.
                </p>
            </div>
            <div className="mx-10">
                {cards}
            </div>
        </div>
    )
}

export default Roadmap;