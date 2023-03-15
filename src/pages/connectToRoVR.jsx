import { useLocation, useNavigate } from "react-router-dom";

const ConnectToRoVR = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <>
            <form onSubmit={() => {
                navigate("/review-and-submit", {
                    state: { ...location.state }
                })
            }} >

                <button type="submit" >Next</button>
            </form>
        </>
    )
}

export default ConnectToRoVR