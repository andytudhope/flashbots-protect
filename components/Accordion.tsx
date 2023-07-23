import { useState } from "react";

export type FaqProps = {
  title: string;
  description: string;
};

export default function Accordion(props: FaqProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      className="flex flex-col p-3 border-b text-gray-light cursor-pointer font-cmu"
    >
      <div className="flex flex-row items-center">
        <p className="flex-auto hover:text-blue-800 font-bold">{props.title}</p>
        <img
          className="flex-none w-3"
          src="/icon-arrow-down.svg"
          alt="arrow down"
        />
      </div>
      <div
        className={`transition-max-height duration-700 ease-in-out overflow-hidden ${
          expanded ? "max-h-200" : "max-h-0"
        }`}
      >
        {props.description.split("\n").map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
}
