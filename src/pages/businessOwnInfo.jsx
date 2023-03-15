import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/images/Rovr-logo.png";
import image2 from "../assets/images/image-2.svg";
import paginationDots from "../assets/images/pagination-dots.png";

const BusinessOwnInfo = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const usZipRegExp = /^([0-9]{5})(?:[-\s]*([0-9]{4}))?$/
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const checkoutSchema = yup.object().shape({
        ownFName: yup.string().min(2, 'Too Short!').max(20, 'Too Long!').required('Required'),
        ownLName: yup.string().min(2, 'Too Short!').max(20, 'Too Long!').required('Required'),
        title: yup.string().required("Required"),
        ownEMail: yup.string().email("invalid email").required("Required"),
        ownPhNo: yup.string().min(6, 'Please enter valid number').max(15, 'Please enter valid number').matches(phoneRegExp, 'Phone number is not valid').required("Required"),
        ownStreetAdd: yup.string().required("Required"),
        ownOfficeAdd: yup.string().min(10, "Minimum 10 characters").max(50, "Max 50 characters").required("Required"),
        ownAddCity: yup.string().required("Required"),
        ownAddState: yup.string().required("Required"),
        ownAddZipcode: yup.string().matches(usZipRegExp, "Zip Code is not valid").required("Required"),
        birthDt: yup.date().required("Required"),
        ssnNo: yup.number().required("Required"),
        purchasePwrBar: yup.string()
    });

    const initialValues = {
        ownFName: "",
        ownLName: "",
        title: "",
        ownEMail: "",
        ownPhNo: "",
        ownStreetAdd: "",
        ownOfficeAdd: "",
        ownAddCity: "",
        ownAddState: "",
        ownAddZipcode: "",
        birthDt: "",
        ssnNo: 0,
        purchasePwrBar: ""
    };

    console.log("form-3", {
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
                                        <h3>Lets talk about your business owners</h3>
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
                                <h3>Business Ownership Information</h3>
                                <p>We use this information to understand business identity and determine how RoVR can help you</p>
                                <Formik
                                    onSubmit={(values) => {
                                        console.log("values", values);
                                        navigate("/", {
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
                                                bsnsLglNm: location.state.bsnsLglNm,
                                                bsnsDBA: location.state.bsnsDBA,
                                                dtEstablish: location.state.dtEstablish,
                                                bsnsEIN: location.state.bsnsEIN,
                                                bdaddZipcode: location.state.bdAddZipcode,
                                                bsnsWebsite: location.state.bsnsWebsite,
                                                incState: location.state.incState,
                                                bnsnType: location.state.bnsnType,
                                                bnsnPhNo: location.state.bnsnPhNo,
                                                bnsnDescript: location.state.bnsnDescript,
                                                ownFName: values.ownFName,
                                                ownLName: values.ownLName,
                                                title: values.title,
                                                ownEMail: values.ownEMail,
                                                ownPhNo: values.ownPhNo,
                                                ownStreetAdd: values.ownStreetAdd,
                                                ownOfficeAdd: values.ownOfficeAdd,
                                                ownAddCity: values.ownAddCity,
                                                ownAddState: values.ownAddState,
                                                ownAddZipcode: values.ownAddZipcode,
                                                birthDt: values.birthDt,
                                                ssnNo: values.ssnNo,
                                                purchasePwrBar: values.purchasePwrBar
                                            }
                                        });
                                    }}
                                    initialValues={initialValues}
                                    validationSchema={checkoutSchema}
                                >
                                    <Form class="business-address">
                                        <div class="name">
                                            <div class="name-1">
                                                <Field id="ownFName" name="ownFName" placeholder="First Name" />
                                                <ErrorMessage name="ownFName" render={msg => <div class="error-msg" >{msg}</div>} />
                                            </div>

                                            <div class="name-2">
                                                <Field id="ownLName" name="ownLName" placeholder="Last Name" />
                                                <ErrorMessage name="ownLName" render={msg => <div class="error-msg" >{msg}</div>} />
                                            </div>
                                        </div>

                                        <div class="street-address">
                                            <Field id="title" name="title" placeholder="Title" />
                                            <ErrorMessage name="title" render={msg => <div class="error-msg" >{msg}</div>} />
                                        </div>

                                        <div class="street-address">
                                            <Field id="ownEMail" name="ownEMail" type="email" placeholder="Executive's Email" />
                                            <ErrorMessage name="ownEMail" render={msg => <div class="error-msg" >{msg}</div>} />
                                        </div>

                                        <div class="street-address">
                                            <Field id="ownPhNo" name="ownPhNo" placeholder="Executive's Phone Number" />
                                            <ErrorMessage name="ownPhNo" render={msg => <div class="error-msg" >{msg}</div>} />
                                        </div>

                                        {/* <label htmlFor="ownStreetAdd">Street Address</label>
                                        <Field name="ownStreetAdd" as="select">
                                            <option value="stree1">stree1</option>
                                            <option value="stree2">stree2</option>
                                            <option value="stree3">stree3</option>
                                        </Field>
                                        <ErrorMessage name="ownStreetAdd" render={msg => <div class="error-msg" >{msg}</div>} /> */}
                                        <div class="street-address">
                                            <Field id="ownStreetAdd" name="ownStreetAdd" placeholder="Street Address" />
                                            <ErrorMessage name="ownStreetAdd" render={msg => <div class="error-msg" >{msg}</div>} />
                                        </div>

                                        <div class="street-address">
                                            <Field id="ownOfficeAdd" name="ownOfficeAdd" placeholder="Office Address" />
                                            <ErrorMessage name="ownOfficeAdd" render={msg => <div class="error-msg" >{msg}</div>} />
                                        </div>

                                        <div class="street-address">
                                            <Field id="ownAddCity" name="ownAddCity" placeholder="City" />
                                            <ErrorMessage name="ownAddCity" render={msg => <div class="error-msg" >{msg}</div>} />
                                        </div>

                                        <div class="name">
                                            <div class="name-1">
                                                {/* <label htmlFor="ownAddState">State</label>
                                                <Field name="ownAddState" as="select">
                                                    <option value="ownAddState1">ownAddState1</option>
                                                    <option value="ownAddState2">ownAddState2</option>
                                                    <option value="ownAddState3">ownAddState3</option>
                                                </Field>
                                                <ErrorMessage name="ownAddState" render={msg => <div class="error-msg" >{msg}</div>} /> */}
                                                <Field id="ownAddState" name="ownAddState" placeholder="Stat" />
                                                <ErrorMessage name="ownAddState" render={msg => <div class="error-msg" >{msg}</div>} />
                                            </div>

                                            <div class="name-2">
                                                <Field id="ownAddZipcode" name="ownAddZipcode" placeholder="Zip code" />
                                                <ErrorMessage name="ownAddZipcode" render={msg => <div class="error-msg" >{msg}</div>} />
                                            </div>
                                        </div>

                                        <div class="name">
                                            <div class="name-1">
                                                <Field id="birthDt" name="birthDt" type="date" placeholder="Executive's Birth Date" />
                                                <ErrorMessage name="birthDt" render={msg => <div class="error-msg" >{msg}</div>} />
                                            </div>

                                            <div class="name-2">
                                                <Field id="ssnNo" name="ssnNo" placeholder="Last four digits of SSN" />
                                                <ErrorMessage name="ssnNo" render={msg => <div class="error-msg" >{msg}</div>} />
                                            </div>
                                        </div>

                                        <div class="street-address">
                                            <label htmlFor='purchasePwrBar' >Mach X Purchasing Power</label>
                                            <progress min="10000" max="100000000" value="90000" id='purchasePwrBar' name="purchasePwrBar"  >  </progress>
                                            <ErrorMessage name="purchasePwrBar" render={msg => <div class="error-msg" >{msg}</div>} />
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

export default BusinessOwnInfo