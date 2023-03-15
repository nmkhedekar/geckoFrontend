import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import image from "../assets/images/image-1.svg";

const Register = () => {
    const navigate = useNavigate();
    const checkoutSchema = yup.object().shape({
        fName: yup.string().min(2, 'Too Short!').max(20, 'Too Long!').required('Required'),
        lName: yup.string().min(2, 'Too Short!').max(20, 'Too Long!').required('Required'),
        eMail: yup.string().email("invalid email").required("Required"),
        password: yup.string().required("Required")
    });

    const initialValues = {
        fName: "",
        lName: "",
        eMail: "",
        password: ""
    };
    return (
        <>
            <div class="banner">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="banner-text">
                                <h1>Start your Application</h1>
                                <p >A whole new productive journey starts right here</p>
                                <img src={image} alt="" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <Formik
                                onSubmit={(values) => {
                                    console.log("values", values);
                                    navigate("/business-address", {
                                        state: {
                                            fName: values.fName,
                                            lName: values.lName,
                                            eMail: values.eMail,
                                            password: values.password
                                        }
                                    });
                                }}
                                initialValues={initialValues}
                                validationSchema={checkoutSchema}
                            >
                                <Form class="start-application">
                                    <div class="email">
                                        <Field
                                            id="eMail"
                                            name="eMail"
                                            placeholder="Work email address"
                                            type="email"
                                        />
                                        <ErrorMessage name="eMail" render={msg => <div class="error-msg"  >{msg}</div>} />
                                    </div>

                                    <div class="name">
                                        <div class="name-1">
                                            <Field id="fName" name="fName" placeholder="First Name" />
                                            <ErrorMessage name="fName" render={msg => <div class="error-msg" >{msg}</div>} />
                                        </div>
                                        <div class="name-2">
                                            <Field id="lName" name="lName" placeholder="Last Name" />
                                            <ErrorMessage name="lName" render={msg => <div class="error-msg" >{msg}</div>} />
                                        </div>

                                    </div>

                                    <div class="password">
                                        <Field id="password" name="password" placeholder="password" type="password" />
                                        <ErrorMessage name="password" render={msg => <div class="error-msg" >{msg}</div>} />
                                    </div>

                                    <button type="submit" class="start-btn">Start Application</button>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;