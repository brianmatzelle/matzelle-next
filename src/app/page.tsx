import Project from "@/components/project";
import Image from "next/image";
import { A } from "@/components/ui/a";
import Name from "@/components/name";
import Code from "@/components/ui/code";
import { Bold } from "@/components/ui/bold";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-start justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] max-w-[1000px] max-w-screen mx-auto">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Name />
        <div className="flex flex-col gap-4">

          {/* <Project
            title="Starting.gg"
            href="https://starting.gg"
          >
            <p>Coming soon...</p>
          </Project> */}

          <Project
            title="2024 US Election LLM Archive"
            href="https://huggingface.co/datasets/brianmatzelle/2024-election-subreddit-threads-173k"
            src="https://github.com/brianmatzelle/election-crawler"
          >
            <p><Bold>Scraped 173k Reddit threads</Bold> from 23 political subreddits for months leading up to the 2024 US Presidential Election, then <Bold>finetuned Llama3.1</Bold> with the data to <Bold>&quot;archive&quot; public opinion</Bold> and allow you to chat with &quot;people&quot; of the time. <Code>ollama run brianmatzelle/llama3.1-8b-instruct-hasanpiker</Code></p>
          </Project>

          <Project
            title="Binghamton U. Hugging Face Group"
            href="https://huggingface.co/BinghamtonUniversity"  
          >
            <p>Maintaining the unofficial Hugging Face group for Binghamton University, with the goal of making it official and teaching students about AI development.</p>
          </Project>

          <Project
            title="Spacebots.io"
            href="https://spacebots.io"
          >
            <p>A platform for botting <A variant="secondary" href="https://twitch.tv">Twitch.tv</A> chats with AI, never released for ethical reasons. Use code <Code>portfolio</Code> to enter, I limited the number of bots available so it can&apos;t be abused.</p>
          </Project>

          <Project
            title="AI Documenter"
            href="https://documenter.vercel.app/"
            src="https://github.com/brianmatzelle/documenter"
          >
            <p>A tool for generating documentation for your GitLab merge requests, intended for local use. See the <A variant="source" href="https://github.com/brianmatzelle/documenter/blob/main/README.md">README</A> for more information on how to set it up.</p>
          </Project>

          <Project 
            title="Battlezone Shapes" 
            href="https://www.npmjs.com/package/battlezone-shapes" 
            src="https://github.com/brianmatzelle/battlezone-shapes"
          >
            <p>An npm package for generating shapes & backgrounds with a{" "}
              <A 
                variant="secondary" 
                href="https://en.wikipedia.org/wiki/Battlezone_(1980_video_game)"
              >
                Battlezone (1980)
              </A>{" "}
              theme. It&apos;s the theme of this website!
            </p>
          </Project>

          <Project
            title="asdftype"
            href="https://asdftype.com"
            src="https://github.com/brianmatzelle/asdf"
          >
            <p>A really dumb typing game.</p>
          </Project>

          <Project
            title="LendaHand"
            href="https://devpost.com/software/lendahand-oq1snb"
            src="https://github.com/brianmatzelle/lendahand"
          >
            <p>2x Winning <A variant="secondary" href="https://hackbu.org/">HackBU 2023</A> project, awarded Best Civic Engagement Hack Sponsored by J.P. Morgan and Best Geo Hack Sponsored by CAE</p>
          </Project>

          <Project
            title="Reactor Suite"
            href="https://suite.matzelle.co/"
            src="https://github.com/brianmatzelle/reactor-suite-js"
          >
            <p>A tool to help content creators annotate and analyze YouTube videos.</p>
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
