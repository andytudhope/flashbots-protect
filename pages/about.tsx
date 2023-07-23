import {
  BugAntIcon,
  MagnifyingGlassIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import type { NextPage } from "next";
import Link from "next/link";
import Accordion from "~~/components/Accordion";
import { MetaHeader } from "~~/components/MetaHeader";
import { faq } from "~~/lib/faq";

const Content: NextPage = () => {
  const Faqs = faq.map((res) => {
    return <Accordion key={res.key} title={res.title} description={res.description} />;
  });
  return (
    <>
      <MetaHeader
        title="About | Flashbots Protect"
        description="Learn more about how to protect yourself..."
      />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center md:mt-36 mb-10">
            <span className="block text-6xl mb-2 font-cmu">
              Reliable Protection For All Positions
            </span>
          </h1>
        </div>

        <div className="px-5 md:w-1/2">
          <p className="text-center text-lg font-cmu">
            When you create a transaction on a public blockchain, everyone can
            see it. More advanced users called &ldquo;searchers&rdquo; can profit from
            knowing what you want to do. As part of our efforts to{" "}
            <strong>illuminate, democratize, and distribute</strong> the value
            created by public blockchains, we&apos;ve built a way for you to submit
            transactions that are kept safe from those who seek to profit from
            the unsuspecting public.
          </p>
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12 font-cmu">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <BugAntIcon className="h-16 w-16 fill-secondary" />
              <p>
                <strong>224,693 ETH</strong> extracted since the merge
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <SparklesIcon className="h-16 w-16 fill-secondary" />
              <p>Lots returned to users of Flashbot Protect</p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <MagnifyingGlassIcon className="h-16 w-16 fill-secondary" />
              <p>
                Check your rebates in our{" "}
                <Link href="/explorer" passHref className="link">
                  Explorer
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mb-2 md:w-1/2 px-5">
          <p className="text-center text-4xl py-8 font-cmu">FAQ</p>
          {Faqs}
        </div>
      </div>
    </>
  );
};

export default Content;
