import OptionItem from "./MainPageItems/OptionItem"
import MainCard from "./MainPageItems/MainCard"
import { iconItems } from "./data"

export default function IntroMenu() {
    return (
        <section>
            <div className="flex bg-white justify-center gap-20 py-6 overflow-x-auto">
                {iconItems.map(item => (<OptionItem key={item.text} url={item.url} text={item.text} />))}
            </div>
            <div className="flex justify-center gap-6 bg-[#FAF7F2] py-20 max-[800px]:flex-col content-center flex-wrap">
                <MainCard 
                        heading={(<h2 className="font-quattrocento font-bold text-5xl w-50">Özel Lezzetus</h2>)}
                        text={'Position absolute Acı Pizza'}
                        url={'../images/iteration-2-images/cta/kart-1.png'}
                />
                <div className="flex flex-col gap-6">
                    <MainCard 
                        heading={(<h2 className="font-barlow font-medium text-3xl">Hackathlon Burger Menü</h2>)}
                        url={'../images/iteration-2-images/cta/kart-2.png'}/>
                    <MainCard 
                        heading={(<h2 className="font-barlow font-semibold text-3xl w-60"><span className="text-[#CE2829]">Çooook</span> hızlı npm gibi kurye</h2>)}
                        url={'../images/iteration-2-images/cta/kart-3.png'}/>
                </div>
            </div>
        </section>
    )
}