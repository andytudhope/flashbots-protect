import { CopyButton } from "./CopyButton";
import { TweetButton } from "./TweetButton";
import { useShareUrl } from "./useShareUrl";
import cn from "classnames";
import { FC } from "react";

type Props = {
  title: string;
  tags: string[];
  className?: string;
};

export const ShareCTA: FC<Props> = ({ className, title, tags }) => {
  const shareUrl = useShareUrl();

  return (
    <aside className={cn("text-center p-4 my-8", className)}>
      <div className="text-2xl mb-6 font-cmu">We've got you covered</div>
      <div className="flex items-center justify-center">
        <TweetButton
          className="mr-4"
          title={title}
          tags={tags}
          url={shareUrl}
        />
        <CopyButton url={shareUrl} />
      </div>
    </aside>
  );
};
