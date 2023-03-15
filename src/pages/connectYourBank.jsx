import { useLocation, useNavigate } from "react-router-dom";

const ConnectYourBank = () => {
    const navigate = useNavigate();
    const location = useLocation();


    return(
        <>
            <form onSubmit={() => {
                navigate("/connect-to-rovr", {
                    state: {...location.state}
                })
            }} >

                <button type="submit" >Next</button>
            </form>
        </>
    )
}

export default ConnectYourBank