import image2 from "../assets/images/image-2.svg";
import paginationDots from "../assets/images/pagination-dots.png";
import { useLocation } from "react-router-dom";

const ReviewAndSubmit = () => {
    const location = useLocation();

    console.log("data", location);
    return (
        <>
            <div style={{
                backgroundColor: "#3C5D9C",
                padding: "20px 0px 50px 0px"
            }}>
                <div class="container">
                    <div class="row">
                        <div class="col-md-5">
                            <div class="left">
                                <div class="back-icon">
                                    <a href="/">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 20L4 12L12 4L13.425 5.4L7.825 11H20V13H7.825L13.425 18.6L12 20Z" fill="white" />
                                        </svg>
                                    </a>
                                </div>
                                <div class="left-2">
                                    {/* <div class="logo">
                                        <a href="/">
                                            <img src={logo} alt="Company Logo" width="120px" />
                                        </a>
                                    </div> */}
                                    <div class="content">
                                        <img src={image2} alt="" width="70%" />
                                        <h3>Review & Submit</h3>
                                        <p>We will use the information to give you a purchasing limit</p>
                                    </div>
                                    <div class="pag-dots">
                                        <img src={paginationDots} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-7">
                            <div class="right">
                                <h3>One last look at everything</h3>
                                <p>Your application is ready to submit, please review the information below and make sure it is all correct</p>

                                <div class="business-address">
                                    <label htmlFor="bsnsAdd" >Business Adress</label>
                                    <div id="bsnsAdd" class="street-address">
                                        <input disabled value={"Business Adress:"} />
                                    </div>

                                    <label htmlFor="bsnsDetails" >Business Details</label>
                                    <div id="bsnsDetails" class="street-address" >
                                        <input disabled value={"Name:"} />
                                        <input disabled value={"Website:"} />
                                        <input disabled value={"Phone:"} />
                                        <input disabled value={"EIN:"} />
                                        <input disabled value={"Established:"} />
                                    </div>

                                    <label htmlFor="leadership" >Leadership</label>
                                    <div id="leadership" class="street-address" >
                                        <input disabled value={"Name:"} />
                                        <input disabled value={"Title:"} />
                                        <input disabled value={"Address:"} />
                                    </div>

                                    <label htmlFor="ownership" >Ownership</label>
                                    <div id="ownership" class="street-address" >
                                        <input disabled value={"Name:"} />
                                        <input disabled value={"Email:"} />
                                        <input disabled value={"Phone:"} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default ReviewAndSubmit
