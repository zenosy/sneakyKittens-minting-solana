const About = () => {
    return (
        <div className="flex flex-col bg-white items-center gap-10 relative" id="about">
            <p className="font-gulf text-[#F8450B] text-lg sm:text-[30px] md:text-[40px]">ABOUT</p>
            <div className="flex gap-5 justify-center items-center">
                <p className="font-gulf text-[white] text-lg sm:text-[30px] md:text-[40px] text-shadow2 uppercase">5000</p>
                <img src="img/monster.svg" className="w-10 h-10 sm:block hidden" alt="" />
                <p className="font-gulf text-[black] text-lg sm:text-[30px] md:text-[40px] uppercase">Sneaky Kittens</p>
            </div>
            <div className="flex gap-5 justify-center items-center">
                <p className="font-gulf text-[black] text-lg sm:text-[30px] md:text-[40px] uppercase">Build </p>
                <img src="img/monster.svg" className="w-10 h-10 sm:block hidden" alt="" />
                <p className="font-gulf text-[white] text-lg sm:text-[30px] md:text-[40px] text-shadow2 uppercase">passive income</p>
            </div>
            <div className="flex gap-5 justify-center items-center">
                <p className="font-gulf text-[white] text-lg sm:text-[30px] md:text-[40px] text-shadow2 uppercase">solana</p>
                <img src="img/monster.svg" className="w-10 h-10 sm:block hidden" alt="" />
                <p className="font-gulf text-[black] text-lg sm:text-[30px] md:text-[40px] uppercase">blockchain</p>
            </div>
            <p className="text-md text-black font-bold w-4/5 sm:w-3/4 text-base sm:text-2xl">
                Discover our enchanting collection of 5,000 unique Sneaky Kittens NFTs, each with its own personality and charm. As a part of our community, you’re not just owning a piece of digital art, you're stepping into a world of adventure and unlocking a path to fantastic passive income.
            </p>

            <div className="text-md text-black font-bold w-4/5 sm:w-3/4">
                <h3 className="text-lg sm:text-[30px] md:text-[40px] text-[#F8450B]">Benefits of NFTs:</h3><br></br>
                <ul style={{ lineHeight: '2' }}>
                    <li><strong style={{ textDecoration: 'underline' }}>Community Rewards:</strong> <span style={{ background: '#F8450B', color: 'white', padding: '0 4px', borderRadius: '2px' }}>15% of the mint cost is shared with NFT holders. Mint early to claim a larger share of every new mint!</span></li>
                    <li><strong style={{ textDecoration: 'underline'}}>Flare Delegation Pool:</strong> <span style={{ background: '#F8450B', color: 'white', padding: '0 4px', borderRadius: '2px' }}>25% of the mint cost supports the Flare delegation pool, earning FLR weekly and Flaredrops monthly, which are converted to SOL for distribution to NFT holders. And yes, 28 months of Flaredrops are still coming!</span></li>
                    <li><strong style={{ textDecoration: 'underline' }}>Secondary Sales:</strong> <span style={{ background: '#F8450B', color: 'white', padding: '0 4px', borderRadius: '2px' }}>Enjoy a 5% return from secondary sales directly to NFT holders.</span></li>
                </ul><br></br>
                 <p className="font-gulf text-[black] text-lg sm:text-[28px] md:text-[30px] uppercase">It's all about passive income! Hold your Sneaky Kittens and keep earning SOL monthly!</p>
            </div>
            <img src="img/coin.svg" className="w-[150x] h-[150px] absolute right-0 -bottom-[120px] sm:flex hidden" alt="" />
        </div>
    )
}

export default About;