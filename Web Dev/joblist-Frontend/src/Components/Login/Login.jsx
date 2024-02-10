import React, { useRef, useState } from 'react'
import styles from './Login.module.css'
import { LoginUser } from '../../apis/auth';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const navigate = useNavigate();

    const [data, setdata] = useState({
        email: "",
        password: ""
    })

    const error = "Field is required";
    const checkboxErrorText = "please agree to the terms and conditions"
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setpasswordError] = useState(false);
    const [checkboxError, setCheckboxError] = useState(false);
    const checkbox = useRef();

    const handleChange = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setEmailError(false)
        setpasswordError(false)
        setCheckboxError(false)

        if (!data.email.trim()) {
            setEmailError(true);
        }

        if (!data.password.trim()) {
            setpasswordError(true);
        }

        if (!checkbox.current.checked) {
            setCheckboxError(true);
        }

        const response = await LoginUser({ ...data });
        if (response) {
            localStorage.setItem("token", response.token);
            localStorage.setItem("userName", response.name);
            navigate("/");
        }
        toast.error("Fields are not matched!!", {
            position: "top-right",
            autoClose: 2000,
          });
    }

    return (
        <div className={styles.container}>
            <h2 id={styles.header}>Already have an account?</h2>
            <p id={styles["finder-text"]}>Your personal job finder is here</p>
            <form>
                <input
                    className={styles.field}
                    type='email'
                    placeholder='Email'
                    name='email'
                    value={data.email}
                    onChange={handleChange}
                />
                {emailError ? (<p className={styles.error}>{error}</p>) :
                    (<div className={styles["no-error"]}></div>)}

                <input
                    className={styles.field}
                    type="password"
                    placeholder='Password'
                    name='password'
                    value={data.password}
                    onChange={handleChange}
                />
                {passwordError ? (<p className={styles.error}>{error}</p>) :
                    (<div className={styles["no-error"]}></div>)}


                <span style={{ display: "block" }}><input type='checkbox' id={styles.checkbox} ref={checkbox} />
                    &nbsp; By creating an account, I agree to our terms of use and privacy policy
                </span>
                {checkboxError ? (<p className={styles.error}>{checkboxErrorText}</p>) :
                    (<div className={styles["no-error"]}></div> ) }

                <button onClick={handleSubmit}>Sign in</button>
                <div className={styles.footer}>
                    <p>Don’t have an account?</p>
                    <a href="/register">Sign Up?</a>
                </div>
                <ToastContainer/>
            </form>
        </div>
    )
}

export default Login