import Project from "@/components/project";
import { A } from "@/components/ui/a";
import Name from "@/components/name";
import Code from "@/components/ui/code";
import Footer from "@/components/footer";
import { Bold } from "@/components/ui/bold";
import { Highlight } from "@/components/ui/highlight";

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
            <p>Scraped 173k Reddit threads from 23 political subreddits for months leading up to the 2024 US Presidential Election, then finetuned Llama3.1 with the data to &quot;archive&quot; public opinion and allow you to chat with &quot;people&quot; of the time. To demo a model, run <Code>ollama run brianmatzelle/llama3.1-8b-instruct-hasanpiker</Code> <A variant="censored" href="https://ollama.com/brianmatzelle/llama3.1-8b-instruct-hasanpiker-abliterated">or, check out the uncensored version.</A></p>
          </Project>

          <Project
            title="Binghamton U. Hugging Face Group"
            href="https://huggingface.co/BinghamtonUniversity"  
            color="text-na-80"
          >
            <p>Maintaining the unofficial Hugging Face group for Binghamton University (my alma mater), with the goal of making it official and teaching students about AI development + finetuning models, and cleaning unstructured data.</p>
          </Project>

          <Project
            title="Spacebots.io"
            href="https://spacebots.io"
            color="text-na-80"
          >
            <p>A platform for botting <A variant="secondary" href="https://twitch.tv">Twitch.tv</A> with AI chatbots,&nbsp;
            {/* DM me on instagram <Code>@brianmatzelle</Code> for a code to enter, I limited the number of bots available so it can&apos;t be abused. */}
            use code <Code>portfolio</Code> to enter.&nbsp;I limited the number of bots available so it can&apos;t be abused.</p>
          </Project>

          <Project
            title="AI Documenter"
            href="https://documenter.vercel.app/"
            src="https://github.com/brianmatzelle/documenter"
          >
            <p>A tool for generating documentation for your GitLab merge requests, intended for local use (so the backend isn&apos;t hosted atm). See the <A variant="source" href="https://github.com/brianmatzelle/documenter/blob/main/README.md">README</A> for more information on how to set it up. Built in a day.</p>
          </Project>

          <Project
            title="LendaHand"
            href="https://devpost.com/software/lendahand-oq1snb"
            src="https://github.com/brianmatzelle/lendahand"
          >
            <p><Highlight>2x Winning</Highlight> <A variant="secondary" href="https://hackbu.org/">HackBU</A> 2023 app, <Bold>coded in React Native for iOS and Android</Bold>. Awarded Best Civic Engagement Hack Sponsored by J.P. Morgan and Best Geo Hack Sponsored by CAE.</p>
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
              theme. Over 500 downloads so far, and it&apos;s the theme of this website!
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
            title="Reactor Suite"
            href="https://suite.matzelle.co/"
            src="https://github.com/brianmatzelle/reactor-suite-js"
          >
            <p>A tool to help content creators annotate and analyze YouTube videos.</p>
          </Project>

        </div>
      </main>
      <Footer />
    </div>
  );
}
