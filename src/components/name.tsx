"use client";
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
export default function Name() {
  return <div className="flex flex-col gap-2 w-full">
    <div className="flex w-full gap-2 items-center justify-between">
      <TypeAnimation className="text-4xl font-bold w-[50%]" sequence={["Brian Matzelle"]} speed={20} cursor={false} />
      <div className="flex gap-6 flex-wrap items-center justify-end w-[50%]">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/brianmatzelle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/github-mark-white.svg"
            alt="github icon"
            width={16}
            height={16}
          />
          Github
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/brianmatzelle/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/linkedin-white.svg"
            alt="linkedin icon"
            width={16}
            height={16}
          />
          LinkedIn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://huggingface.co/brianmatzelle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/hf-logo-pirate.svg"
            alt="huggingface icon"
            width={16}
            height={16}
          />
          Hugging Face
        </a>
      </div>
    </div>
    <span className="text-sm text-black/[.5] dark:text-white/[.5]">Software Engineer</span>
  </div>;
}
