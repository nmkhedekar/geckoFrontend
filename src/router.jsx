import { Routes, Route, BrowserRouter } from "react-router-dom";
import BusinessAddress from "./pages/businessAdd";
import BusinessDetails from "./pages/businessDetails";
import BusinessOwnInfo from "./pages/businessOwnInfo";
import Register from "./pages/register";
 
const Router = () => {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Register />} />
                    <Route path="/business-address" element={<BusinessAddress />} />
                    <Route path="/business-details" element={<BusinessDetails />} />
                    <Route path="/business-ownership-information" element={<BusinessOwnInfo />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router