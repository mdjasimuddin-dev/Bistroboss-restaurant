import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import loginImg from "./../../assets/login/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import SocialLogin from "./components/SocialLogin";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const captchaRef = useRef(null);
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleSingIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    console.log("your email :", email, "\n Your Password :", password);
  };

  const handleCaptcha = () => {
    const inputUserCaptcha = captchaRef.current.value;
    if (validateCaptcha(inputUserCaptcha) == true) {
      console.log("You Input captcha : ", inputUserCaptcha, "Captcha Matched");
      setDisable(false);
    } else {
      console.log("Sorry! Not matched captcha", inputUserCaptcha);
      setDisable(true);
    }
  };

  return (
    <div className="my-10">
      <div
        className={`hero bg-base-200 lg:p-10 flex flex-col justify-center items-center`}
      >
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 flex flex-col items-center justify-center" >
            <img src={loginImg} alt=""/>
          </div>

          {/* form part  */}
          <div className="card-body">
            <h1 className="text-3xl lg:text-5xl font-inter font-bold text-center">Login</h1>
            <form onSubmit={handleSingIn} className="space-y-1 lg:space-y-3">
              <fieldset className="fieldset">
                <label className="fieldset-label text-xl">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input w-full text-base px-3 py-6 border-none"
                  placeholder="Enter your email"
                />
              </fieldset>

              <fieldset className="fieldset">
                <label className="fieldset-label text-xl">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input w-full text-base px-3 py-6 border-none"
                  placeholder="Enter your password"
                />
              </fieldset>

              {/* Recaptcha function  */}

              <fieldset className="fieldset">
                <label className="fieldset-label text-xl py-2">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  ref={captchaRef}
                  className="input w-full text-base px-3 py-6 border-none"
                  placeholder="Enter captcha above"
                />
              </fieldset>

              <button onClick={handleCaptcha} className="btn">
                Validate Captcha{" "}
              </button>

              <button
                disabled={disable}
                className="btn btn-neutral mt-4 mx-auto px-10 w-1/2 flex justify-center items-center bg-[#d8b681] border-none text-xl text-white"
              >
                Sign In
              </button>
            </form>

            <div className="form-control mt-6">
              <div className="text-[#d1a054b3] text-center text-xl space-y-3">
                <p>
                  New here?
                  <Link className="text-blue-600 font-bold ml-2" to="/signup">
                    Create a New Account
                  </Link>
                </p>
                <p className="text-black">Or sign up with</p>
                <SocialLogin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
