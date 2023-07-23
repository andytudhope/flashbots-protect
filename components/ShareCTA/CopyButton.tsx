import cn from "classnames";
import { FC, useCallback, useEffect, useState } from "react";

type Props = {
  url: string;
};

export const CopyButton: FC<Props> = ({ url }) => {
  const [justCopied, setJustCopied] = useState(false);

  const handleClick = useCallback(async () => {
    await navigator.clipboard.writeText(url);

    setJustCopied(true);
  }, [url]);

  useEffect(() => {
    if (justCopied) {
      const timeout = setTimeout(() => {
        setJustCopied(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [justCopied]);

  return (
    <button
      className="inline-flex relative py-2 pl-4 pr-5 rounded shadow hover:shadow-md bg-blue-400 hover:bg-blue-500 text-white transition duration-300 ease-in-out"
      onClick={handleClick}
    >
      <span
        className={cn("flex items-center justify-center", {
          "opacity-0": justCopied,
        })}
      >
        <div className="flex items-center">
          <div className="w-8 mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
            </svg>
          </div>
          <div>copy link</div>
        </div>
      </span>
      <span
        className={cn("flex items-center justify-center absolute", {
          "opacity-0": !justCopied,
        })}
      >
        <div className="flex items-center">
          <div className="w-8 mr-2 text-green-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
          </div>
          <div>copied!</div>
        </div>
      </span>
    </button>
  );
};
