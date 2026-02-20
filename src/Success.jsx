import { Link } from "react-router-dom";

function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

export default function Success({ state }) {
    return (
        <div className="h-screen w-full bg-[#CE2829]">
            <div className="flex flex-col justify-center font-barlow text-white items-center">
                <div className="pt-8">
                    <Link to="/">
                        <img className="mx-auto" src="../images/iteration-1-images/logo.svg" alt="" />
                    </Link>
                </div>
                <div className="mt-20">
                    <div className="w-max mx-auto font-satisfy text-3xl text-[#FDC913]">lezzetin yolda</div>
                    <div className="text-center mx-auto text-8xl font-extralight mt-4">SİPARİŞ ALINDI</div>
                </div>
                <div className="mt-15 w-3xl h-[1px] bg-white"></div>
                <div className="w-max text-2xl mt-5">
                    Position Absolute Acı Pizza
                </div>
                <div className="w-3xs mt-15">
                    <div className="mt-3">
                        <span className="font-extralight">Boyut:</span> {state.size}
                    </div>
                    <div className="mt-3">
                        <span className="font-extralight">Hamur:</span> {capitalizeFirstLetter(state.hamur)}
                    </div>
                    <div className="mt-3">
                        <span className="font-extralight">Ek Malzemeler:</span> 
                        {state.additions.map(item => capitalizeFirstLetter(item) + ' ')}
                    </div>
                </div>
                <div className="rounded-md border font-medium py-5 px-20 mt-10">
                    <div className="text-2xl mb-10">
                        Sipariş Toplamı
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        <div>Ekler:</div>
                        <div class="ml-auto">{state.additions.length * 10 + '₺'}</div>
                        <div>Toplam:</div>
                        <div class="ml-auto">{state.additions.length * 10 + 450 + '₺'}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}