import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";
import ProtectTxes from "~~/components/ProtectTxes";

const Explorer: NextPage = () => {
  return (
    <>
      <MetaHeader
        title="About | Flashbots Protect"
        description="Learn more about how to protect yourself..."
      />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center md:mt-20 mb-10">
            <span className="block text-6xl mb-2 font-cmu">Check your MEV</span>
          </h1>
        </div>

        <div className="px-5 w-1/2 mb-10">
          <p className="text-center text-lg">
            If you are trying to do something simple - such as token approvals
            or transfers - or your transaction uses less than 42,000 gas, it
            does not need frontrunning protection. We send those straight to the
            public mempool for quickest inclusion. Transactions with a bundle
            type of &ldquo;mempool&rdquo; will not lead to any rebates.
          </p>
          <p className="text-center text-lg">
            The table below shows all the transactions you have sent through our
            RPC. You&apos;ll be saved from MEV during more complex interactions,
            which are those transactions with a bundle type of &ldquo;flashbots&rdquo;.
          </p>
        </div>

        <div className="px-5">
          <ProtectTxes />
        </div>
      </div>
    </>
  );
};

export default Explorer;
