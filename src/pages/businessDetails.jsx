import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/images/Rovr-logo.png";
import image2 from "../assets/images/image-2.svg";
import paginationDots from "../assets/images/pagination-dots.png";

const BusinessDetails = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const usZipRegExp = /^([0-9]{5})(?:[-\s]*([0-9]{4}))?$/
    const websiteRegExp = /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?\/?$/
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const checkoutSchema = yup.object().shape({
        bsnsLglNm: yup.string().min(10, "Minimum 10 characters").max(20, "Max 20 characters").required("Required"),
        bsnsDBA: yup.number().required("Required"),
        dtEstablish: yup.date().required("Required"),
        bsnsEIN: yup.number().required("Required"),
        bdAddZipcode: yup.string().matches(usZipRegExp, "Zip Code is not valid").required("Required"),
        bsnsWebsite: yup.string().matches(websiteRegExp, "Wrong website URL").required("Required"),
        incState: yup.string().required("Required"),
        bnsnType: yup.string().required("Required"),
        bnsnPhNo: yup.string().min(6, 'Please enter valid number').max(15, 'Please enter valid number').matches(phoneRegExp, 'Phone number is not valid').required("Required"),
        bnsnDescript: yup.string().min(10, "Minimum 10 characters").max(100, "Max 100 characters").required("Required")
    });

    const initialValues = {
        bsnsLglNm: "",
        bsnsDBA: 0,
        dtEstablish: "",
        bsnsEIN: 0,
        bdAddZipcode: "",
        bsnsWebsite: "",
        incState: "",
        bnsnType: "",
        bnsnPhNo: "",
        bnsnDescript: ""
    };

    console.log("form-2", {
        data: location.state
    })
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
                                        <h3>Enter your Business Details</h3>
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
                                <h3>Business Details</h3>
                                <p>We use this information to understand business identity and determine how RoVR can help you</p>
                                <Formik
                                    onSubmit={(values) => {
                                        console.log("values", values);
                                        navigate("/business-ownership-information", {
                                            state: {
                                                fName: location.state.fName,
                                                lName: location.state.lName,
                                                eMail: location.state.eMail,
                                                password: location.state.password,
                                                streetAdd: location.state.streetAdd,
                                                officeAdd: location.state.officeAdd,
                                                addCity: location.state.addCity,
                                                addState: location.state.addState,
                                                addZipcode: location.state.addZipcode,
                                                bsnsLglNm: values.bsnsLglNm,
                                                bsnsDBA: values.bsnsDBA,
                                                dtEstablish: values.dtEstablish,
                                                bsnsEIN: values.bsnsEIN,
                                                bdAddZipcode: values.bdAddZipcode,
                                                bsnsWebsite: values.bsnsWebsite,
                                                incState: values.incState,
                                                bnsnType: values.bnsnType,
                                                bnsnPhNo: values.bnsnPhNo,
                                                bnsnDescript: values.bnsnDescript
                                            }
                                        });
                                    }}
                                    initialValues={initialValues}
                                    validationSchema={checkoutSchema}
                                >
                                    <Form class="business-address">
                                        <div class="street-address">
                                            <Field id="bsnsLglNm" name="bsnsLglNm" placeholder="Business Legal Name" />
                                            <ErrorMessage name="bsnsLglNm" render={msg => <div class="error-msg" >{msg}</div>} />
                                        </div>

                                        <div class="name">
                                            <div class="name-1">
                                                <label htmlFor="bsnsDBA">Business DBA</label>
                                                <Field id="bsnsDBA" name="bsnsDBA" placeholder="Business DBA" />
                                                <ErrorMessage name="bsnsDBA" render={msg => <div class="error-msg" >{msg}</div>} />
                                            </div>

                                            <div class="name-2">
                                                <label htmlFor="dtEstablish">Date Establishes</label>
                                                <Field id="dtEstablish" name="dtEstablish" type="date" />
                                                <ErrorMessage name="dtEstablish" render={msg => <div class="error-msg" >{msg}</div>} />
                                            </div>
                                        </div>

                                        <div class="name">
                                            <div class="name-1">
                                                <label htmlFor="bsnsEIN">Business EIN</label>
                                                <Field id="bsnsEIN" name="bsnsEIN" placeholder="Business EIN" />
                                                <ErrorMessage name="bsnsEIN" render={msg => <div class="error-msg" >{msg}</div>} />
                                            </div>

                                            <div class="name-2">
                                                <Field id="bdAddZipcode" name="bdAddZipcode" placeholder="Zip code" />
                                                <ErrorMessage name="bdAddZipcode" render={msg => <div class="error-msg" >{msg}</div>} />
                                            </div>
                                        </div>

                                        <div class="name">
                                            <div class="name-1">
                                                <div class="street-address">
                                                    <Field id="bsnsWebsite" name="bsnsWebsite" placeholder="Business Website" />
                                                    <ErrorMessage name="bsnsWebsite" render={msg => <div class="error-msg" >{msg}</div>} />
                                                </div>
                                            </div>


                                            <div class="name-2">
                                                <div class="street-address">
                                                    <Field id="incState" name="incState" placeholder="State of Incorporation" />
                                                    <ErrorMessage name="incState" render={msg => <div class="error-msg" >{msg}</div>} />
                                                </div>
                                            </div>

                                            {/* <label htmlFor="incState">State of Incorporation</label>
                                        <Field name="incState" as="select" >
                                            <option value="stree1">stree1</option>
                                            <option value="stree2">stree2</option>
                                            <option value="stree3">stree3</option>
                                        </Field>
                                        <ErrorMessage name="incState" render={msg => <div style={{ color: "red" }} >{msg}</div>} /> */}
                                        </div>

                                        <div class="name">
                                            <div class="name-1">
                                                <div class="street-address">
                                                    <Field id="bnsnType" name="bnsnType" placeholder="Type of Business" />
                                                    <ErrorMessage name="bnsnType" render={msg => <div class="error-msg" >{msg}</div>} />
                                                </div>
                                            </div>
                                            {/* <label htmlFor="bnsnType">Type of Business</label>
                                        <Field name="bnsnType" as="select">
                                            <option value="businessType1">businessType1</option>
                                            <option value="businessType2">businessType2</option>
                                            <option value="businessType3">businessType3</option>
                                        </Field>
                                        <ErrorMessage name="bnsnType" render={msg => <div style={{ color: "red" }} >{msg}</div>} /> */}

                                            <div class="name-2">
                                                <Field id="bnsnPhNo" name="bnsnPhNo" placeholder="Business Phone Number" />
                                                <ErrorMessage name="bnsnPhNo" render={msg => <div class="error-msg" >{msg}</div>} />
                                            </div>
                                        </div>

                                        <div class="street-address">
                                            <Field id="bnsnDescript" name="bnsnDescript" />
                                            <ErrorMessage name="bnsnDescript" render={msg => <div class="error-msg" >{msg}</div>} />
                                        </div>

                                        <button type="submit" class="next-btn">Next
                                            <span>
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M12.3855 9.59765L7.6043 14.3789C7.27383 14.7094 6.73945 14.7094 6.4125 14.3789L5.61797 13.5844C5.2875 13.2539 5.2875 12.7195 5.61797 12.3926L9.00703 9.00351L5.61797 5.61445C5.2875 5.28398 5.2875 4.74961 5.61797 4.42265L6.4125 3.62812C6.74297 3.29765 7.27734 3.29765 7.6043 3.62812L12.3855 8.40937C12.716 8.73281 12.716 9.26718 12.3855 9.59765Z"
                                                        fill="black" fill-opacity="0.8" />
                                                </svg>
                                            </span>
                                        </button>
                                    </Form>
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BusinessDetails