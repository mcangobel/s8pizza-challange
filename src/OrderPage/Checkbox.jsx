export default function Checkbox({name, value, onChange}){
    return (
        <>  
            <input onChange={onChange} className="scale-200 accent-yellow-500" type="checkbox" name={name} id={value} value={value}/>
            <label className="text-lg ml-5" htmlFor={value}>{value}</label>
        </>

    )
}