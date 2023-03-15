import { Routes, Route, BrowserRouter } from "react-router-dom";
import BusinessAddress from "./pages/businessAdd";
import BusinessDetails from "./pages/businessDetails";
import BusinessOwnInfo from "./pages/businessOwnInfo";
import ConnectToRoVR from "./pages/connectToRoVR";
import ConnectYourBank from "./pages/connectYourBank";
import Register from "./pages/register";
import ReviewAndSubmit from "./pages/reviewAndSubmit";
 
const Router = () => {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Register />} />
                    <Route path="/business-address" element={<BusinessAddress />} />
                    <Route path="/business-details" element={<BusinessDetails />} />
                    <Route path="/business-ownership-information" element={<BusinessOwnInfo />} />
                    <Route path="/connect-your-bank" element={<ConnectYourBank />} />
                    <Route path="/connect-to-rovr" element={<ConnectToRoVR />} />
                    <Route path="/review-and-submit" element={<ReviewAndSubmit />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router