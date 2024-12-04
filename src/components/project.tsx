import Image from "next/image";
import { A } from "./ui/a";

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
        <div className="flex flex-col gap-1">
          <A href={href}>{title}</A>
          {children}
        </div>
        {src && (
          <A
            variant="source"
            href={src}
            target="_blank"
            rel="noopener noreferrer"
          >
            (source)
          </A>
        )}
      </div>
      <div className="border-b border-black/[.08] dark:border-white/[.145]"></div>
    </>
  );
}
