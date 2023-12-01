import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialLink({ url, icon }: { url: string, icon: IconProp }) {
    return <li className="p-1 text-slate-300 hover:text-slate-100"><a href={url} target="_blank"><FontAwesomeIcon icon={icon} /></a></li>
}