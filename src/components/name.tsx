"use client";
import { TypeAnimation } from 'react-type-animation';
import { A } from "@/components/ui/a";
export default function Name() {
  return <div className="flex flex-col gap-2">
    <TypeAnimation className="text-4xl font-bold" sequence={["Brian Matzelle"]} speed={20} cursor={false} />
    <span className="text-sm text-black/[.5] dark:text-white/[.5]">Software Engineer @ <A variant="secondary" className="text-[#007862]/250 underline hover:no-underline hover:text-[#007862] transition-all duration-150" href="https://sagesure.com/">SageSure</A></span>
  </div>;
}
