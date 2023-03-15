import logo from "../assets/images/Rovr-logo.png";

const Header = () => {
    return (
        <>
            <header>
                <div class="container">
                    <div class="header-box">
                        <div class="logo">
                            <a href="/">
                                <img src={logo} alt="Company Logo" width="120px" />
                            </a>
                        </div>
                        <div class="sign-register">
                            <button class="sign-btn">Sign In</button>
                            <button class="reg-btn">Register</button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;