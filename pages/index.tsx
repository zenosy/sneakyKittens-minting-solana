/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { errorAlert } from "../components/ToastGroup";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import Home from "components/Home";
import InfiniteSlider from "components/InfiniteSlider";
import About from "components/About";
import NFTSlider from "components/NFTSlider";
import InfiniteSliderTape from "components/InfiniteSliderTape";
import Roadmap from "components/Roadmap";
import Team from "components/Team";
import Faq from "components/Faq";
import SocialPage from "components/SocialPage";

export default function HomePage(props: {
  startLoading: Function;
  closeLoading: Function;
  pageLoading: boolean;
}) {
  const wallet = useWallet();
  useEffect(() => {
    if (wallet.publicKey !== null) {
      console.log(wallet.publicKey.toBase58());
    }
  }, [wallet.connected, wallet.publicKey]);

  return (
    <>
      <main>
        <Home />
        <InfiniteSlider />
        <About />
        <NFTSlider />
        <InfiniteSliderTape />
        <Roadmap />
        <Team />
        <InfiniteSlider />
        <Faq />
        <SocialPage />
      </main>
    </>
  );
}
