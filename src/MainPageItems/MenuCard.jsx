export default function MenuCard({url, heading, points, favorites, price}){
    return (
        <div className="bg-white rounded-md px-6">
            <img src={url} alt="" />
            <h4 className="font-medium text-1xl">{heading}</h4>
            <div className="flex justify-between text-[15px] font-medium">
                <div className="text-[#5F5F5F]">{points}</div>
                <div className="text-[#5F5F5F]">{'(' + favorites + ')'}</div>
                <div className="text-[18px]">{price + '₺'}</div>
            </div>
        </div>
    )
}