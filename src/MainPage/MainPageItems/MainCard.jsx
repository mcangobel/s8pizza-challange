import { Link } from "react-router-dom";

export default function MainCard({className, heading, text, url}){
    return (
        <div className="relative">
            <img className="rounded-md" src={url} alt="" />
            <div className="h-1/2 absolute top-0 m-5 text-white">
                {heading}
                <p className="font-barlow text-lg">{text}</p>
                <Link className="inline-block my-5 font-medium py-3 px-10 rounded-full bg-white text-[#CE2829]" to={'/'}>
                    Sipariş Ver
                </Link>
            </div>
        </div>
    )
}