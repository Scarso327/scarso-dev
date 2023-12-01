import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FolderButton({ url = undefined, icon, text }: { url: string | undefined, icon: IconProp, text: string }) {
    return <a href={url} target="_blank" className={`outline outline-1 rounded h-44 w-44 m-3 p-3 normal:m-6 normal:p-6 ${(url === undefined ? "outline-slate-400" : "hover:outline-2")}
        flex flex-col justify-center items-center`}>
        <FontAwesomeIcon size="3x" icon={icon} />
        <p className="mt-2">{text}</p>
    </a>
}