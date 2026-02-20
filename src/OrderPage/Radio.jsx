export default function Radio({value, name, onChange}){
    return (
        <>
            <input onChange={onChange} type="radio" id={value} name={name} value={value} className="hidden" />
            <label htmlFor={value} className="bg-[#FAF7F2] mr-4 w-12 h-12 flex items-center justify-center rounded-full font-medium">{value}</label>
        </>
    )
}