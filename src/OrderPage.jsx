import Footer from "./Footer";
import Order from "./OrderPage/Order";

export default function OrderPage({state, setState}){
    return (
        <div>
            <Order state={state} setState={setState} />
            <Footer/>
        </div>
    )
}