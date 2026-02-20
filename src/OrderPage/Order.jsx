import "react-toastify/dist/ReactToastify.css"
import { Link } from "react-router-dom";
import Radio from "./Radio";
import './Order.css';
import { additions } from "./data";
import Checkbox from "./Checkbox";
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { initialState } from "../initialState";
import { showErrorToast } from "./toastMessage";
import { ToastContainer } from "react-toastify";

export default function Order({state, setState}) {
    const history = useHistory();

    const [errors, setErrors] = useState({
        size: true,
        hamur: true,
        additions: true
    })
    const [isValid, setIsValid] = useState(false);
    const [price, setPrice] = useState(0);
    const [totalPrice, setTotalPrice] = useState(450);

    useEffect(() => {
        const sizeValid = state.size != null
        const hamurValid = state.hamur !== 'Hamur'
        const additionsValid = state.additions.length >= 4;

        setIsValid(sizeValid && hamurValid && additionsValid)
        const price = state.additions.length * 10;
        const totalPrice = price + (450 * state.count);

        setPrice(price);
        setTotalPrice(totalPrice);

        setErrors({
            size: !sizeValid,
            hamur: !hamurValid,
            additions: !additionsValid
        })

    }, [state])

    function handleChange(event){
        const { value, name, type, checked } = event.target;
        let newValue;

        if (type == 'checkbox'){
            if (checked && state.additions.length == 10) {
                event.target.checked = false;
                return;
            }
            newValue = checked ? [...state.additions, value] : state.additions.filter(item => item != value);
        }
        else {
            newValue = value;
        }

        setState({ ...state, [name]:newValue });
    }

    async function onSubmit(event){
        event.preventDefault();
        
        let response;
        try{
            response = await axios.post('https://reqres.in/api/pizza', 
            state, 
            { 
                headers:
                { 
                    'x-api-key': 'reqres_a81bee6baafc4b6782e76868a07f1614'
                } 
            })
        }catch(err) {
            showErrorToast('Ağ hatası oluştu.');
            return;
        }

        history.push('/success');
    }

    return (
        <div className="font-barlow">
            <ToastContainer />
            <div className="bg-[#FAF7F2]">
                <div className="bg-[#CE2829] py-4">
                    <img className="mx-auto" src="../images/iteration-1-images/logo.svg" alt="" />
                </div>
                <div className="max-w-[595px] mx-auto">
                    <div className="pb-5">
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
                            <article className="text-[#5F5F5F]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis nunc porta, fermentum sapien at, sagittis elit.
                                Maecenas at gravida felis. Duis rhoncus mattis dictum. Nam elementum laoreet ligula, vulputate luctus neque commodo nec.
                                Duis eu tortor fermentum, efficitur lectus at, euismod lacus. Ut laoreet libero ac pulvinar tempus. Donec dictum augue non
                                urna lobortis, a ullamcorper elit accumsan. Proin tempus elementum quam, viverra eleifend neque semper quis.
                            </article>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5 max-w-[595px] mx-auto">
                <form onSubmit={onSubmit}>
                    <div className="grid grid-cols-2">
                        <div>
                            <div className="font-medium text-lg">Boyut Seç 
                            { errors.size && <span className="text-[#CE2829]">*</span> } 
                            </div>
                            <div className="flex mt-2">
                                <Radio onChange={handleChange} value={'S'} name={'size'} />
                                <Radio onChange={handleChange} value={'M'} name={'size'} />
                                <Radio onChange={handleChange} value={'L'} name={'size'} />
                            </div>
                        </div>
                        <div>
                            <div className="font-medium text-lg">Hamur Seç 
                               { errors.hamur && <span className="text-[#CE2829]">*</span> }
                            </div>
                            <select onChange={handleChange} className="w-full mt-2 h-10 bg-[#FAF7F2] font-medium rounded-md" id="hamur" name="hamur">
                                <option value="Hamur">-- Hamur Kalınlığı Seçiniz --</option>
                                <option value="ince">İnce</option>
                                <option value="orta">Orta</option>
                                <option value="kalın">Kalın</option>
                            </select>
                        </div>
                        <div className="mt-10 col-span-2">
                            <div className="font-medium text-lg">Ek Malzemeler</div>
                            <div className="text-[#5F5F5F] mt-2">En fazla 10 en az 4 adet seçilebilir. Her biri 10₺</div>
                            <div className="grid grid-cols-3 mt-10 ml-2 gap-10">
                                {
                                    additions.map((item, index) =>
                                        <div>
                                            <Checkbox onChange={handleChange} key={index} name={'additions'} value={item} />
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className="mt-10 col-span-2">
                            <div className="font-medium text-lg">Sipariş Notu: </div>
                            <textarea onChange={handleChange} className="p-2 w-full h-12 bg-[#FAF7F2] rounded-md resize-none" name="note" id="note" placeholder="Siparişe eklemek istediğiniz notlar"></textarea>
                        </div>
                        <div class="w-full col-span-2 h-px bg-gray-300 mt-5"></div>
                        <div className="mt-5 col-span-2 grid grid-cols-[25%_75%] pb-20">
                            <div className="flex justify-evenly bg-[#FAF7F2] rounded-md p-3 text-xl h-13">
                                <button  onClick={() => setState({...state, count: state.count + 1})} type="button" className="block rounded-l-lg">+</button>
                                <span className="block">{state.count}</span>
                                <button onClick={() => state.count - 1 > 0 ? setState({...state, count: state.count - 1}) : ''} 
                                        type="button" className="block">-</button>
                            </div>
                            <div className="">
                                <div className="ml-auto w-8/10 bg-[#FAF7F2] h-full rounded-md pt-3">
                                    <div className="ml-auto w-9/10 font-medium">
                                        <div className="text-xl">Sipariş Toplamı</div>
                                        <div className="grid grid-cols-[60%_40%] font-medium mt-5">
                                            <div className="text-[#5F5F5F]">Seçimler</div>
                                            <div className="text-[#5F5F5F]">{price + '₺'}</div>
                                            <div className="text-[#CE2829]">Toplam</div>
                                            <div className="text-[#CE2829]">{(totalPrice) + '₺'}</div>
                                        </div>
                                    </div>
                                    <button type="submit" disabled={!isValid} className="w-full bg-[#FDC913] py-2 mt-5 rounded-b-md">Satın al</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
}