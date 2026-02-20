import { Link } from "react-router-dom";
import { footerIconItems, footerMenus, footerInstagramUrls } from "./MainPage/data";
import OptionItem from "./MainPage/MainPageItems/OptionItem";

export default function Footer() {
    return (
        <footer className="py-10 bg-[#292929] border-b-1 border-white">
            <div className="max-w-8/10 mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 ">
                <div className="flex flex-col ">
                    <img className="w-50" src="../images/iteration-2-images/footer/logo-footer.svg" alt="" />
                    <div className="mt-9">
                        {footerIconItems.map((item, index) => <OptionItem key={index} text={item.text} url={item.url} classNames={'block text-white mt-5 w-70'} />)}
                    </div>
                </div>
                <div className="">
                    <h4 className="text-white text-2xl mt-10">Sıccacık Menuler</h4>
                    <div className="mt-10">
                        {footerMenus.map((item, index) =>
                            <Link to='/'>
                                <p key={index} className="text-white mt-3">{item}</p>
                            </Link>
                        )}
                    </div>
                </div>
                <div className="xl:col-start-4">
                    <h4 className="text-white text-xl">Instagram</h4>
                    <div className="mt-10 flex flex-wrap gap-2">
                        {footerInstagramUrls.map((item, index) =>
                            <Link key={index} to='/'>
                                <img src={item} />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex flex-between">
                
            </div>
        </footer>
    )
}