import { A } from "./ui/a";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { p } from "@/lib/styles";

export default function Project({
  title,
  href,
  src,
  children,
  color,
  srcName,
}: {
  title: string;
  href: string;
  src?: string;
  color?: string;
  srcName?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-col gap-1 w-full">
        <div className="flex w-full justify-between items-center">
          <A href={href}>{title}</A> 
          <A
          variant="source"
            href={src ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={cn("backdrop-blur-sm text-center rounded-sm w-16 outline outline-1 outline-dotted outline-black/[.08] dark:outline-white/[.145] flex items-center justify-center", color)}
          >
            {src ? (
              <span>{srcName ?? "src"}</span>
            ) : (
              <span>n/a</span>
            )}
          </A>
        </div>
        <Card>{children}</Card>
      </div>
      <div className="border-b border-black/[.08] dark:border-white/[.145]"></div>
    </>
  );
}
