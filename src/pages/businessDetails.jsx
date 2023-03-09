import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";

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
                <Form>
                    <label htmlFor="bsnsLglNm">Business Legal Name</label>
                    <Field id="bsnsLglNm" name="bsnsLglNm" />
                    <ErrorMessage name="bsnsLglNm" render={msg => <div style={{ color: "red" }} >{msg}</div>} />

                    <label htmlFor="bsnsDBA">Business DBA</label>
                    <Field id="bsnsDBA" name="bsnsDBA" />
                    <ErrorMessage name="bsnsDBA" render={msg => <div style={{ color: "red" }} >{msg}</div>} />

                    <label htmlFor="dtEstablish">Date Establishes</label>
                    <Field id="dtEstablish" name="dtEstablish" type="date" />
                    <ErrorMessage name="dtEstablish" render={msg => <div style={{ color: "red" }} >{msg}</div>} />

                    <label htmlFor="bsnsEIN">Business EIN</label>
                    <Field id="bsnsEIN" name="bsnsEIN" />
                    <ErrorMessage name="bsnsEIN" render={msg => <div style={{ color: "red" }} >{msg}</div>} />

                    <label htmlFor="bdAddZipcode">Zip code</label>
                    <Field id="bdAddZipcode" name="bdAddZipcode" />
                    <ErrorMessage name="bdAddZipcode" render={msg => <div style={{ color: "red" }} >{msg}</div>} />

                    <label htmlFor="bsnsWebsite">Business Website</label>
                    <Field id="bsnsWebsite" name="bsnsWebsite" />
                    <ErrorMessage name="bsnsWebsite" render={msg => <div style={{ color: "red" }} >{msg}</div>} />

                    <label htmlFor="incState">State of Incorporation</label>
                    <Field id="incState" name="incState" />
                    <ErrorMessage name="incState" render={msg => <div style={{ color: "red" }} >{msg}</div>} />

                    <label htmlFor="incState">State of Incorporation</label>
                    <Field name="incState" as="select" >
                        <option value="stree1">stree1</option>
                        <option value="stree2">stree2</option>
                        <option value="stree3">stree3</option>
                    </Field>
                    <ErrorMessage name="incState" render={msg => <div style={{ color: "red" }} >{msg}</div>} />

                    <label htmlFor="bnsnType">Type of Business</label>
                    <Field name="bnsnType" as="select">
                        <option value="businessType1">businessType1</option>
                        <option value="businessType2">businessType2</option>
                        <option value="businessType3">businessType3</option>
                    </Field>
                    <ErrorMessage name="bnsnType" render={msg => <div style={{ color: "red" }} >{msg}</div>} />

                    <label htmlFor="bnsnPhNo">Business Phone Number</label>
                    <Field id="bnsnPhNo" name="bnsnPhNo" />
                    <ErrorMessage name="bnsnPhNo" render={msg => <div style={{ color: "red" }} >{msg}</div>} />

                    <label htmlFor="bnsnDescript">Business Description</label>
                    <Field id="bnsnDescript" name="bnsnDescript" />
                    <ErrorMessage name="bnsnDescript" render={msg => <div style={{ color: "red" }} >{msg}</div>} />

                    <button type="submit">Next</button>
                </Form>
            </Formik>
        </>
    )
}

export default BusinessDetails