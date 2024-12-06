import { A } from "./ui/a";
import { Card } from "./ui/card";

export default function Project({
  title,
  href,
  src,
  children,
}: {
  title: string;
  href: string;
  src?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex gap-2 items-start justify-between">
        <div className="flex flex-col gap-1 w-full">
          <div className="flex w-full justify-between items-center">
            <A href={href}>{title}</A>
            <A
            variant="source"
              href={src ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="backdrop-blur-sm text-center rounded-sm w-16 outline outline-1 outline-dotted outline-black/[.08] dark:outline-white/[.145] flex items-center justify-center"
            >
              {src ? (
                <span>src</span>
              ) : (
                <span className="text-rose-400/80 hover:underline">n/a</span>
              )}
            </A>
          </div>
          <Card>{children}</Card>
        </div>
      </div>
      <div className="border-b border-black/[.08] dark:border-white/[.145]"></div>
    </>
  );
}
