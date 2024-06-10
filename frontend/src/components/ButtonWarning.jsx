import {Link} from "react-router-dom"


export function ButtonWarning({label, buttonText, to}) {
    return <div className="text-small flex justify-center">
        <div>
            {label}
        </div>
        <Link className="pointer underline px-1 cursor-pointer" to={to}>
            {buttonText}
        </Link>
    </div>
}