import { useNavigate } from 'react-router-dom'
import {BackArrow} from "../iconFolder/BackArrow"

export const BackHome = ({className}) => {
    const navigate = useNavigate()

    return (
        <button onClick={()=>navigate("/")} className={`${className}`}>
            <BackArrow />
            <p className="text-textlg">Back to home</p>
        </button>
    )
}