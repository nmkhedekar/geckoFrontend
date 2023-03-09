import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";

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
        purchasePwrBar: yup.string().required("Required")
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
                <Form>
                    <label htmlFor="ownFName">First Name</label>
                    <Field id="ownFName" name="ownFName" placeholder="Jane" />
                    <ErrorMessage name="ownFName" render={msg => <div style={{ color: "red" }} >{msg}</div>} />

                    <label htmlFor="ownLName">Last Name</label>
                    <Field id="ownLName" name="ownLName" placeholder="Doe" />
                    <ErrorMessage name="ownLName" render={msg => <div style={{ color: "red" }} >{msg}</div>} />

                    <label htmlFor="title">Title</label>
                    <Field id="title" name="title" />
                    <ErrorMessage name="title" render={msg => <div style={{ color: "red" }} >{msg}</div>} />

                    <label htmlFor="ownEMail">Executive's Email</label>
                    <Field id="ownEMail" name="ownEMail" type="email" placeholder="jane@acme.com" />
                    <ErrorMessage name="ownEMail" render={msg => <div style={{ color: "red" }} >{msg}</div>} />

                    <label htmlFor="ownPhNo">Executive's Phone Number</label>
                    <Field id="ownPhNo" name="ownPhNo" />
                    <ErrorMessage name="ownPhNo" render={msg => <div style={{ color: "red" }} >{msg}</div>} />

                    <label htmlFor="ownStreetAdd">Street Address</label>
                    <Field name="ownStreetAdd" as="select">
                        <option value="stree1">stree1</option>
                        <option value="stree2">stree2</option>
                        <option value="stree3">stree3</option>
                    </Field>
                    <ErrorMessage name="ownStreetAdd" render={msg => <div style={{ color: "red" }} >{msg}</div>} />

                    <label htmlFor="ownOfficeAdd">Office Address</label>
                    <Field id="ownOfficeAdd" name="ownOfficeAdd" placeholder="Floor / Suite / Office" />
                    <ErrorMessage name="ownOfficeAdd" render={msg => <div style={{ color: "red" }} >{msg}</div>} />

                    <label htmlFor="ownAddCity">City</label>
                    <Field id="ownAddCity" name="ownAddCity" />
                    <ErrorMessage name="ownAddCity" render={msg => <div style={{ color: "red" }} >{msg}</div>} />

                    <label htmlFor="ownAddState">State</label>
                    <Field name="ownAddState" as="select">
                        <option value="ownAddState1">ownAddState1</option>
                        <option value="ownAddState2">ownAddState2</option>
                        <option value="ownAddState3">ownAddState3</option>
                    </Field>
                    <ErrorMessage name="ownAddState" render={msg => <div style={{ color: "red" }} >{msg}</div>} />

                    <label htmlFor="ownAddZipcode">Zip code</label>
                    <Field id="ownAddZipcode" name="ownAddZipcode" />
                    <ErrorMessage name="ownAddZipcode" render={msg => <div style={{ color: "red" }} >{msg}</div>} />

                    <label htmlFor="birthDt">Executive's Birth Date</label>
                    <Field id="birthDt" name="birthDt" type="date" />
                    <ErrorMessage name="birthDt" render={msg => <div style={{ color: "red" }} >{msg}</div>} />

                    <label htmlFor="ssnNo">Last four degits of SSN</label>
                    <Field id="ssnNo" name="ssnNo" />
                    <ErrorMessage name="ssnNo" render={msg => <div style={{ color: "red" }} >{msg}</div>} />

                    <label htmlFor="purchasePwrBar">Last four degits of SSN</label>
                    <progress min="10000" max="100000000" value="90000" name="purchasePwrBar"  >  </progress>
                    <ErrorMessage name="purchasePwrBar" render={msg => <div style={{ color: "red" }} >{msg}</div>} />
                    
                    <button type="submit">Next</button>
                </Form>
            </Formik>
        </>
    )
}

export default BusinessOwnInfo