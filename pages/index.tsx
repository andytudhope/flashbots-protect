import type { NextPage } from "next";
import Image from "next/image";
import FlashbotsProtectButton from "protect-button";
import { MetaHeader } from "~~/components/MetaHeader";
import ProtectButtonSelector from "~~/components/ProtectButtonSelector";
import { ShareCTA } from "~~/components/ShareCTA/ShareCTA";

// At first, we encourage people just to connect - KISS. Then we offer them the advanced options below the fold

const Home: NextPage = () => {
  // The protect-button expects this object and array of potential strings, rather than just "undefined" which, if passed to it,
  // result in nothing happening when the button is clicked.
  const hints = {
    calldata: false,
    logs: false,
    contractAddress: false,
    functionSelector: false,
    hash: true,
  };

  const selectedBuilders: string[] = [];

  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10 relative">
        <div
          className="hidden md:block absolute top-0 left-0 w-full h-full bg-no-repeat z-0 opacity-20 pointer-events-none"
          style={{ backgroundImage: `url('/lightning.svg')` }}
        />
        <div className="px-5 z-2 relative">
          <h1 className="text-center my-48 md:my-36">
            <span className="block text-6xl mb-2 font-cmu">
              Connect to Protect
            </span>
          </h1>
          <div className="flex justify-center">
            <div className="btn btn-primary px-14 text-xl rounded-full space-x-3 mb-24">
              <FlashbotsProtectButton hints={hints} builders={selectedBuilders}>
                Use Protection! ⚡🤖
              </FlashbotsProtectButton>
            </div>
          </div>
          <p className="text-center text-lg font-cmu">
            Protecting the value you create is as easy as switching to the
            Flashbots Protect RPC.
          </p>
          <ShareCTA
            title="Protect Your Loved Ones from MEV"
            tags={["Flashbots", "Protect", "MEV", "Ethereum"]}
          />
          <p className="text-center text-lg font-cmu">
            The settings used above should be sufficient. Scroll down if you
            have special needs.
          </p>
        </div>

        <div className="pt-20 px-5 md:w-1/2">
          <p className="text-center text-4xl font-cmu my-20">
            Programmable Privacy
          </p>
          <p className="text-center text-lg font-cmu">
            Flashbots Protect automatically ensures that the value you create
            when using public blockchains is returned to you. We try to balance
            your privacy with the need to share transaction information in order
            to ensure efficient execution. If you&apos;d like to be more explicit
            about what you are willing to share, and the people with whom you
            are willing to share it, please select the options below which align
            with your own preferences.
          </p>
          <ProtectButtonSelector />
        </div>

        <div className="px-5">
          <Image
            src="/rainbow-forest.png"
            width={500}
            height={500}
            alt="The Illuminated Forest"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
