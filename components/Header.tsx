import { WalletConnectButton, WalletMultiButton, WalletModalButton } from "@solana/wallet-adapter-react-ui";
import { Hamburger } from "./SvgIcons";
import { useEffect, useState } from "react";

interface IHeaderProps { }

const Header = ({ }: IHeaderProps): JSX.Element => {
  const [isMenu, setIsMenu] = useState(false);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="w-full d-flex p-5 bg-[#FBBF2D] flex justify-between items-center" id="header">
      <div className={`flex items-center z-[16] duration-1000 ${mounted ? "translate-y-0" : "translate-y-20"}`}>
			  <img src="img/logo1.png" className="w-[140px] h-[120px]" alt="" />

      </div>
      <div className="gap-10 md:flex hidden">
        <a className={`text-sm text-black uppercase font-semibold delay-100 duration-1000 ${mounted ? "translate-y-0" : "translate-y-20"}`} href="#about">about</a>
        <a className={`text-sm text-black uppercase font-semibold delay-200 duration-1000 ${mounted ? "translate-y-0" : "translate-y-20"}`} href="#roadmap">roadmap</a>
        <a className={`text-sm text-black uppercase font-semibold delay-500 duration-1000 ${mounted ? "translate-y-0" : "translate-y-20"}`} href="#team">team</a>
        <a className={`text-sm text-black uppercase font-semibold delay-700 duration-1000 ${mounted ? "translate-y-0" : "translate-y-20"}`} href="#follow">follow us</a>
      </div>

      {/* <WalletMultiButton className="wallet-custom" /> */}
      <div className="flex items-center gap-2 z-[16]">
        <div className={`flex justify-center items-center z-[16] bg-white rounded-lg border-[3px] border-black shadow-custom delay-1000 duration-500 ${mounted ? "translate-y-0" : "translate-y-20"}`}>
          <p className="font-bold text-black text-md px-10 py-4 uppercase">mint Soon</p>
        </div>
        <div className="">
        </div>
        <button
          onClick={() => {
            setIsMenu(!isMenu);
          }}
          className="md:hidden flex"
        >
          <Hamburger />
        </button>
      </div>
      <div className={`md:hidden flex flex-col fixed top-0 left-0 w-full menu bg-white justify-center items-center gap-10 ${isMenu ? 'h-full' : 'h-0 invisible'} ease-in-out transition-all duration-500 z-[15]`}>
        <a className="text-2xl text-black uppercase font-semibold" onClick={() => { setIsMenu(false) }} href="#about">about</a>
        <a className="text-2xl text-black uppercase font-semibold" onClick={() => { setIsMenu(false) }} href="#roadmap">roadmap</a>
        <a className="text-2xl text-black uppercase font-semibold" onClick={() => { setIsMenu(false) }} href="#team">team</a>
        <a className="text-2xl text-black uppercase font-semibold" onClick={() => { setIsMenu(false) }} href="#follow">follow us</a>
      </div>
    </div>
  );
};

export default Header;
