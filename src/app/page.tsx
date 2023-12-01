import FolderButton from "@/components/folder.component"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen, faUserLarge } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const TWITTER_URL = "https://twitter.com/ScarsoLP";
const GITHUB_URL = "https://github.com/Scarso327/";
const GITHUB_PROJECTS_URL = "https://github.com/Scarso327?tab=repositories";
const LINKEDIN_URL = "https://www.linkedin.com/in/jack-farhall-847259160";

export default function Home() {
  return (
    <main className="container mx-auto min-h-screen grid grid-rows-1 grid-cols-2 grid-flow-row row-span-2 grid-flow-row">
      <div className="flex flex-col justify-center p-12">
        <h3 className="text-slate-200">Hello, I'm Jack</h3>
        <h1 className="text-3xl font-bold">I'M A DEVELOPER<span className="animate-blink">_</span></h1>
        <ul className="flex flex-row">
          <li className="p-1 text-slate-300 hover:text-slate-100"><a href={TWITTER_URL} target="_blank"><FontAwesomeIcon icon={faTwitter} /></a></li>
          <li className="p-1 text-slate-300 hover:text-slate-100"><a href={GITHUB_URL} target="_blank"><FontAwesomeIcon icon={faGithub} /></a></li>
          <li className="p-1 text-slate-300 hover:text-slate-100"><a href={LINKEDIN_URL} target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></li>
        </ul>
      </div>
      <div className="flex flex-col justify-center p-12 items-center">
        <div className="grid grid-rows-1 grid-cols-2 w-max">
          <FolderButton url={GITHUB_PROJECTS_URL} icon={faFolderOpen} text="My Projects" />
          <FolderButton url={undefined} icon={faUserLarge} text="About Me" />
        </div>
      </div>
    </main>
  )
}
