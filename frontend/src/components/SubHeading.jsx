
export function SubHeading({label, regular}) {
    if(regular) {
        return <div className="font-semibold text-2xl pt-6 italic">
            {label}
        </div>
    }
    return <div className="text-slate-500 text-md pt-1 px-4 pb-4">
        {label}
    </div>
    

}