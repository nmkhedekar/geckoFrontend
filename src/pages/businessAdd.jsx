import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/images/Rovr-logo.png";
import image2 from "../assets/images/image-2.svg";
import paginationDots from "../assets/images/pagination-dots.png";

const BusinessAddress = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const usZipRegExp = /^([0-9]{5})(?:[-\s]*([0-9]{4}))?$/
    const checkoutSchema = yup.object().shape({
        streetAdd: yup.string().required("Required"),
        officeAdd: yup.string().min(10, "Minimum 10 characters").max(50, "Max 50 characters").required("Required"),
        addCity: yup.string().required("Required"),
        addState: yup.string().required("Required"),
        addZipcode: yup.string().matches(usZipRegExp, "Zip Code is not valid").required("Required")
    });

    const initialValues = {
        streetAdd: "",
        officeAdd: "",
        addCity: "",
        addState: "",
        addZipcode: ""
    };

    console.log("form-1", {
        data: location.state
    })
    return (
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
                                    <h3>Tell us about your Business Address</h3>
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
                            <h2>Business Address</h2>
                            <p>Please input physical U.S addresses only, no PO Boxes</p>
                            <Formik
                                onSubmit={(values) => {
                                    console.log("values", values);
                                    navigate("/business-details", {
                                        state: {
                                            fName: location.state.fName,
                                            lName: location.state.lName,
                                            eMail: location.state.eMail,
                                            password: location.state.password,
                                            streetAdd: values.streetAdd,
                                            officeAdd: values.officeAdd,
                                            addCity: values.addCity,
                                            addState: values.addState,
                                            addZipcode: values.addZipcode
                                        }
                                    });
                                }}
                                initialValues={initialValues}
                                validationSchema={checkoutSchema}
                            >
                                <Form class="business-address">
                                    <div class="street-address">
                                        {/* <Field name="streetAdd" as="select">
                                            <option value="stree1">stree1</option>
                                            <option value="stree2">stree2</option>
                                            <option value="stree3">stree3</option>
                                        </Field>
                                        <ErrorMessage name="streetAdd" render={msg => <div style={{ color: "red" }} >{msg}</div>} /> */}
                                        <Field id="streetAdd" name="streetAdd" placeholder="Street" />
                                        <ErrorMessage name="streetAdd" render={msg => <div class="error-msg" >{msg}</div>} />
                                    </div>
                                    
                                    <div class="floor">
                                        <Field id="officeAdd" name="officeAdd" placeholder="Floor / Suite / Office" />
                                        <ErrorMessage name="officeAdd" render={msg => <div class="error-msg" >{msg}</div>} />
                                    </div>

                                    <div class="city">
                                        <Field id="addCity" name="addCity" placeholder="City" />
                                        <ErrorMessage name="addCity" render={msg => <div class="error-msg" >{msg}</div>} />
                                    </div>

                                    <div class="name">
                                        {/* <Field name="addState" as="select">
                                            <option value="addState1">addState1</option>
                                            <option value="addState2">addState2</option>
                                            <option value="addState3">addState3</option>
                                        </Field>
                                        <ErrorMessage name="addState" render={msg => <div style={{ color: "red" }} >{msg}</div>} /> */}
                                        <div class="name-1">
                                            <Field id="addState" name="addState" placeholder="State" />
                                            <ErrorMessage name="addState" render={msg => <div class="error-msg" >{msg}</div>} />
                                        </div>

                                        <div class="name-2">
                                            <Field id="addZipcode" name="addZipcode" placeholder="zipcode" />
                                            <ErrorMessage name="addZipcode" render={msg => <div class="error-msg" >{msg}</div>} />
                                        </div>
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
    )
}

export default BusinessAddress;