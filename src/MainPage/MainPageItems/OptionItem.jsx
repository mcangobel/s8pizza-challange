import { Link } from "react-router-dom";

export default function OptionItem({ url, text, classNames }) {
    return (
        <Link to="/" className={"font-roboto shrink-0 " + classNames}>
            <img className="inline-block" src={url} alt="" />
            <span className="mx-4 font-medium">{text}</span>
        </Link>
    )

}