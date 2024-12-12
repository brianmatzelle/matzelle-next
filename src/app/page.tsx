import Project from "@/components/project";
import { A } from "@/components/ui/a";
import Name from "@/components/name";
import Code from "@/components/ui/code";
import { SocialLinks } from "@/components/social-links";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-start justify-center px-4 pb-8 gap-16 font-[family-name:var(--font-geist-sans)] max-w-[1000px] max-w-screen mx-auto">
      <main className="flex flex-col gap-6 row-start-2 items-center sm:items-start">
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
            <p>Scraped 173k Reddit threads from 23 political subreddits for months leading up to the 2024 US Presidential Election, then finetuned Llama3.1 with the data to &quot;archive&quot; public opinion and allow you to chat with &quot;people&quot; of the time. To demo a model, run <Code>ollama run brianmatzelle/llama3.1-8b-instruct-hasanpiker</Code> <A variant="lowkey" href="https://ollama.com/brianmatzelle/llama3.1-8b-instruct-hasanpiker-abliterated hover:no-underline">or, check out the uncensored version.</A></p>
          </Project>

          <Project
            title="Binghamton U. Hugging Face Group"
            href="https://huggingface.co/BinghamtonUniversity"  
            color="text-rose-400/80"
          >
            <p>Maintaining the unofficial Hugging Face group for Binghamton University (my alma mater), with the goal of making it official and teaching students about AI development + finetuning models, and cleaning unstructured data.</p>
          </Project>

          <Project
            title="Spacebots.io"
            href="https://spacebots.io"
            src="https://whop.com/spacebots/"
            srcName="whop"
            color="text-[#FF6243]"
          >
            <p>A platform for botting <A variant="secondary" href="https://twitch.tv">Twitch.tv</A>. DM me on instagram <Code>@brianmatzelle</Code> for a code to enter, I limited the number of bots available so it can&apos;t be abused.</p>
          </Project>

          <Project
            title="AI Documenter"
            href="https://documenter.vercel.app/"
            src="https://github.com/brianmatzelle/documenter"
          >
            <p>A tool for generating documentation for your GitLab merge requests, intended for local use (so the backend isn't hosted atm). See the <A variant="source" href="https://github.com/brianmatzelle/documenter/blob/main/README.md">README</A> for more information on how to set it up. Built in a day.</p>
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
            title="LendaHand"
            href="https://devpost.com/software/lendahand-oq1snb"
            src="https://github.com/brianmatzelle/lendahand"
          >
            <p>2x Winning <A variant="secondary" href="https://hackbu.org/">HackBU 2023</A> project, awarded Best Civic Engagement Hack Sponsored by J.P. Morgan and Best Geo Hack Sponsored by CAE. Learned iOS and Android development via React Native.</p>
          </Project>

          <Project
            title="asdftype"
            href="https://asdftype.com"
            src="https://github.com/brianmatzelle/asdf"
          >
            <p>A really dumb typing game.</p>
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
        <SocialLinks />
      </footer>
    </div>
  );
}
