import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";

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
        <>
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
                <Form>
                    <label htmlFor="streetAdd">Street Address</label>
                    <Field name="streetAdd" as="select">
                        <option value="stree1">stree1</option>
                        <option value="stree2">stree2</option>
                        <option value="stree3">stree3</option>
                    </Field>
                    <ErrorMessage name="streetAdd" render={msg => <div style={{ color: "red" }} >{msg}</div>} />

                    <label htmlFor="officeAdd">Office Address</label>
                    <Field id="officeAdd" name="officeAdd" placeholder="Floor / Suite / Office" />
                    <ErrorMessage name="officeAdd" render={msg => <div style={{ color: "red" }} >{msg}</div>} />

                    <label htmlFor="addCity">City</label>
                    <Field id="addCity" name="addCity" />
                    <ErrorMessage name="addCity" render={msg => <div style={{ color: "red" }} >{msg}</div>} />

                    <label htmlFor="addState">State</label>
                    <Field name="addState" as="select">
                        <option value="addState1">addState1</option>
                        <option value="addState2">addState2</option>
                        <option value="addState3">addState3</option>
                    </Field>
                    <ErrorMessage name="addState" render={msg => <div style={{ color: "red" }} >{msg}</div>} />

                    <label htmlFor="addZipcode">Zip code</label>
                    <Field id="addZipcode" name="addZipcode" />
                    <ErrorMessage name="addZipcode" render={msg => <div style={{ color: "red" }} >{msg}</div>} />

                    <button type="submit">Next</button>
                </Form>
            </Formik>
        </>
    )
}

export default BusinessAddress;