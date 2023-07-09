import { BiCheckCircle, BiArrowBack } from "react-icons/bi";
import './style.css'

let ThanksSignIn = () => {
    
    return (
        <div className="container-thanks">
            <div className="back" onClick={() => document.location.href = '/'}>
                <BiArrowBack className="icon"/>
                <span>VOLTAR</span>
            </div>
            <div className="content">
                <BiCheckCircle className="icon" />
                <span>VOCÊ FEZ LOGIN...</span>
            </div>
        </div>
    )
}

export default ThanksSignIn