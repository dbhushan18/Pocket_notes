import React, { useEffect, useRef} from 'react'
import styles from "./Register.module.css"
import { useState } from 'react'
import {useNavigate} from "react-router"
import { RegisterUser } from '../../apis/auth'


function Register() {
    const navigate = useNavigate();

    let [data, setdata] = useState({
        name: "",
        email: "",
        mobile: "",
        password: ""
    })

    const [nameError, setNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [mobError, setMobError] = useState(false)
    const [passwordError, setpasswordError] = useState(false)
    const [checkboxError, setCheckboxError] = useState(false);
    const checkbox = useRef();


    const error = "Field is Required";
    const checkboxErrorText = "please agree to the terms and conditions"

    const handleChange = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setNameError(false)
        setEmailError(false)
        setMobError(false)
        setpasswordError(false)
        setCheckboxError(false)

        if (!data.name.trim()) {
            setNameError(true);
        }
        if (!data.email.trim()) {
            setEmailError(true);
        }
        if (!data.mobile.trim()) {
            setMobError(true);
        }
        if (!data.password.trim()) {
            setpasswordError(true);
        }
        if (!checkbox.current.checked) {
            setCheckboxError(true);
        }

        const response = await RegisterUser({...data});
        
        if(response){
            console.log(response)
            localStorage.setItem("token", JSON.stringify(response.token));
            localStorage.setItem("userName", response.name);
            navigate('/')
        }
    }

    return (
        <div className={styles.container}>
            <h2 id={styles.header}>Create an account</h2>
            <p id={styles["finder-text"]}>Your personal job finder is here</p>
            <form>
                <input
                    className={styles.field}
                    type="text"
                    placeholder='Name'
                    name='name'
                    value={data.name}
                    onChange={handleChange}
                    input />
                {nameError ? (<p className={styles.error}>{error}</p>) :
                    (<div className={styles["no-error"]}></div>)}

                <input
                    className={styles.field}
                    type='email'
                    placeholder='Email'
                    name='email'
                    onChange={handleChange}
                    value={data.email}
                    input />
                {emailError ? (<p className={styles.error}>{error}</p>) :
                    (<div className={styles["no-error"]}></div>)}

                <input
                    className={styles.field}
                    type={'tel'}
                    placeholder='Mobile'
                    name='mobile'
                    onChange={handleChange}
                    value={data.mobile}
                    input />
                {mobError ? (<p className={styles.error}>{error}</p>) :
                    (<div className={styles["no-error"]}></div>)}


                <input
                    className={styles.field}
                    type="password"
                    placeholder='Password'
                    name='password'
                    onChange={handleChange}
                    value={data.password}
                    input />
                {passwordError ? (<p className={styles.error}>{error}</p>) :
                    (<div className={styles["no-error"]}></div>)}


                <span style={{ display: "block" }}><input type='checkbox' id={styles.checkbox} ref={checkbox} />
                    &nbsp; By creating an account, I agree to our terms of use and privacy policy
                </span>
                {checkboxError ? (<p className={styles.error}>{checkboxErrorText}</p>) :
                    (<div className={styles["no-error"]}></div>)}


                <button onClick={(e) => handleSubmit(e)}>Create Account</button>
                <div className={styles.footer}>
                    <p>Already have an account?</p>
                    <a href="/login">Sign In?</a>
                </div>

            </form>
        </div>
    )
}

export default Register