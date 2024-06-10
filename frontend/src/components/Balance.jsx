export const Balance = ({value}) => {
    return <div className="flex mt-3 ml-3 text-lg">
        <div className="font-bold text-slate-600 ml-2 mr-3">
            Your Balance
        </div>
        <div className="font-semibold text-slate-600">
            Rs. {value}
        </div>
    </div>
}