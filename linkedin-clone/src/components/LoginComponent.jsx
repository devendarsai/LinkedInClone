import React, { useState } from "react";
import { LoginAPI } from "../api/AuthAPI";
import "../Sass/LoginComponent.scss";
import LinkedinLogo from "../assets/linkedinLogo.png";

export default function LoginComponent() {
    const [credentials, setCredentials] = useState({});
    const login = async () => {
        try {
            let res = await LoginAPI(credentials.email, credentials.password);
            console.log(res?.user);
        } catch (err) {
            console.log(err.errors.message);
        }
    };
    return (
        <div className="login-component">
            <div className="login-wrapper">
                <img src={LinkedinLogo} className="linkedinLogo" />
                <div className="login-wrapper-inner">
                    <h1 className="heading">Sign in</h1>
                    <p className="sub-heading">Stay updated on your professional world</p>

                    <div className="auth-inputs">
                        <input
                            onChange={(event) =>
                                setCredentials({ ...credentials, email: event.target.value })
                            }
                            type="email"
                            className="common-input"
                            placeholder="Email or Phone"
                        />
                        <input
                            onChange={(event) =>
                                setCredentials({ ...credentials, password: event.target.value })
                            }
                            type="password"
                            className="common-input"
                            placeholder="Password"
                        />
                    </div>
                    <a href="#" className="forgot-password">
                        {" "}
                        Forgot password?
                    </a>
                    <button onClick={login} className="login-btn">
                        Sign in
                    </button>
                    <p className="new-to-linkedin">
                        New to LinkedIn?{" "}
                        <a href="#" className="join-now">
                            Join now
                        </a>
                    </p>
                </div>
            </div>
            <div className="login-footer">
                <div className="login-footer-inner">
                    <div className="footer-links">
                        <a href="#">About</a>
                        <a href="#">Accessibility</a>
                        <a href="#">Help Center</a>
                        <a href="#">Privacy & Terms</a>
                        <a href="#">Ad Choices</a>
                        <a href="#">Advertising</a>
                        <a href="#">Business Services</a>
                        <a href="#">Get the LinkedIn app</a>
                        <a href="#">More</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
