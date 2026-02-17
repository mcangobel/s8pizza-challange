import { Link } from "react-router-dom";

export default function Order() {
    return (
        <div>
            <div className="bg-[#CE2829] py-4">
                <img className="mx-auto" src="../images/iteration-1-images/logo.svg" alt="" />
            </div>
            <div className="bg-[#FAF7F2] pb-5 font-barlow">
                <div className="max-w-[595px] mx-auto">
                    <img className="" src="../images/iteration-2-images/pictures/form-banner.png" alt="" />
                    <nav className="mt-15">
                        <Link className="text-[#5F5F5F]" to="/">Anasayfa - </Link>
                        <Link className="text-[#5F5F5F]" to="/">Seçenekler - </Link>
                        <Link className="font-medium text-[#CE2829]" to="/siparis">Sipariş Oluştur</Link>
                    </nav>
                    <h1 className="text-3xl font-medium mt-10">Position Absolute Acı Pizza</h1>
                    <div className="flex justify-between mt-10">
                        <div className="text-2xl font-bold">450₺</div>
                        <div className="ml-auto mr-10 text-[#5F5F5F]">4.9</div>
                        <div className="text-[#5F5F5F]">(920)</div>
                    </div>
                    <div className="mt-5">
                        <p className="text-[#5F5F5F]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis nunc porta, fermentum sapien at, sagittis elit. 
                            Maecenas at gravida felis. Duis rhoncus mattis dictum. Nam elementum laoreet ligula, vulputate luctus neque commodo nec. 
                            Duis eu tortor fermentum, efficitur lectus at, euismod lacus. Ut laoreet libero ac pulvinar tempus. Donec dictum augue non 
                            urna lobortis, a ullamcorper elit accumsan. Proin tempus elementum quam, viverra eleifend neque semper quis.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}