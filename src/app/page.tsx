import FolderButton from "@/components/folder.component"
import { faFolderOpen, faUserLarge } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import SocialLink from "@/components/socialLink.component";
import InView from "@/components/inView.component";

const TWITTER_URL = "https://twitter.com/ScarsoLP";
const GITHUB_URL = "https://github.com/Scarso327/";
const GITHUB_PROJECTS_URL = "https://github.com/Scarso327?tab=repositories";
const LINKEDIN_URL = "https://www.linkedin.com/in/jack-farhall-847259160";

export default function Home() {
  return (
    <main className="container mx-auto min-h-screen grid grid-rows-1 grid-cols-1 normal:grid-cols-2 grid-flow-row row-span-2 grid-flow-row">
      <div className="flex flex-col justify-center items-center normal:items-start p-12">
        <InView
          initial={{
            opacity: 0, transform: "translateX(-400px)"
          }}
          visible={{
            opacity: 1, transform: "translateX(0px)", transition: { duration: 0.75 }
          }}
          hidden={null}
          className={undefined}
        >
          <h3 className="text-slate-200">Hello, I&apos;m Jack</h3>
          <h1 className="text-3xl font-bold">I&apos;M A DEVELOPER<span className="animate-blink">_</span></h1>
          <ul className="flex flex-row">
            <SocialLink url={TWITTER_URL} icon={faTwitter} />
            <SocialLink url={GITHUB_URL} icon={faGithub} />
            <SocialLink url={LINKEDIN_URL} icon={faLinkedin} />
          </ul>
        </InView>
      </div>

      <div className="flex flex-col justify-center p-12 items-center">
        <InView
          initial={{
            opacity: 0, transform: "translateY(400px)"
          }}
          visible={{
            opacity: 1, transform: "translateY(0px)", transition: { duration: 1 }
          }}
          hidden={null}
          className={undefined}
        >
          <div className="grid grid-rows-1 grid-cols-2 w-max">
            <FolderButton url={GITHUB_PROJECTS_URL} icon={faFolderOpen} text="My Projects" />
            <FolderButton url={undefined} icon={faUserLarge} text="About Me" />
          </div>
        </InView>
      </div>
    </main>
  )
}
