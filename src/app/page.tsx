import Project from "@/components/project";
import Image from "next/image";
import { A } from "@/components/ui/a";
import Name from "@/components/name";
import Code from "@/components/ui/code";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-start justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Name />
        <div className="flex flex-col gap-4">
          <Project
            title="Spacebots.io"
            href="https://spacebots.io"
          >
            <p>A platform for botting Twitch.tv chats with AI, never released for ethical reasons. Use code <Code>mywebsite</Code> to enter.</p>
          </Project>
          <Project 
            title="Battlezone Shapes" 
            href="https://www.npmjs.com/package/battlezone-shapes" 
            src="https://github.com/brianmatzelle/battlezone-shapes"
          >
            <p>Published an npm package for generating shapes & backgrounds with a{" "}
              <A 
                variant="secondary" 
                href="https://en.wikipedia.org/wiki/Battlezone_(1980_video_game)"
              >
                Battlezone (1980)
              </A>{" "}
              theme.
            </p>
          </Project>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
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
      </footer>
    </div>
  );
}
