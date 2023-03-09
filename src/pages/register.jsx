import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

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
                <Form>
                    <label htmlFor="fName">First Name</label>
                    <Field id="fName" name="fName" placeholder="Jane" />
                    <ErrorMessage name="fName" render={msg => <div style={{ color: "red" }} >{msg}</div>} />

                    <label htmlFor="lName">Last Name</label>
                    <Field id="lName" name="lName" placeholder="Doe" />
                    <ErrorMessage name="lName" render={msg => <div style={{ color: "red" }} >{msg}</div>} />

                    <label htmlFor="eMail">Email</label>
                    <Field
                        id="eMail"
                        name="eMail"
                        placeholder="jane@acme.com"
                        type="email"
                    />
                    <ErrorMessage name="eMail" render={msg => <div style={{ color: "red" }} >{msg}</div>} />

                    <label htmlFor="password">Password</label>
                    <Field id="password" name="password" placeholder="password" type="password" />
                    <ErrorMessage name="password" render={msg => <div style={{ color: "red" }} >{msg}</div>} />

                    <button type="submit">Next</button>
                </Form>
            </Formik>
        </>
    )
}

export default Register;