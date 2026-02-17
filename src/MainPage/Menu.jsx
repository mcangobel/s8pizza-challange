const names = ['Ramen', 'Pizza', 'Burger', 'French fries', 'Fast food', 'Soft drinks']
const params = [
    { url: '../images/iteration-2-images/pictures/food-1.png', heading: 'Terminal Pizza', points: 4.9, favorites: 200, price: 300 },
    { url: '../images/iteration-2-images/pictures/food-2.png', heading: 'Position Absolute Acı Pizza', points: 4.9, favorites: 920, price: 450 },
    { url: '../images/iteration-2-images/pictures/food-3.png', heading: 'useEffect Tavuklu Burger', points: 4.9, favorites: 428, price: 350 },
];

import { iconItems } from "./data"
import OptionItem from "../MainPageItems/OptionItem"
import MenuCard from "../MainPageItems/MenuCard"

export default function Menu() {
    return (
        <section className="flex flex-col flex-wrap content-center bg-[#FAF7F2] pb-20">
            <h1 className="font-satisfy text-[#CE2829] text-3xl text-center">en çok paketlenen menüler</h1>
            <h2 className="font-barlow text-5xl font-medium mt-3 text-center max-[800px]:w-100 mx-auto">Acıktıran Kodlara Doyuran Lezzetler</h2>
            <div className="overflow-x-auto">
                <div className="flex gap-7 mt-10">
                    {iconItems.map((item, index) =>
                        <OptionItem classNames={`${names[index] == 'Pizza' ? 'bg-[#292929] text-white' : 'bg-white'} py-3 px-6 rounded-full`} key={names[index]} text={names[index]} url={item.url} />
                    )}
                </div>
            </div>
            <div className="flex justify-center gap-10 mt-12 max-[800px]:flex-col content-center flex-wrap">
                {params.map((parameter, index) =>
                    <MenuCard key={index} url={parameter.url} heading={parameter.heading} favorites={parameter.favorites} points={parameter.points} price={parameter.price} />
                )}
            </div>
        </section>
    )
}