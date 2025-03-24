import { useEffect, useRef, useState } from "react";
import loginImg from "./../../assets/login/authentication1.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

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
      setDisable(true)
    }
  };

  return (
    <div className="my-10">
      <div
        className={`hero h-[700px] bg-base-200 p-10 flex flex-col justify-center items-center`}
      >
        <div className="flex">
          <img src={loginImg} alt="" className="w-1/2 bg-cover" />

          {/* form part  */}

          <div className="card-body">
            <h1 className="text-5xl font-inter font-bold text-center">Login</h1>
            <form onSubmit={handleSingIn}>
              <fieldset className="fieldset">
                <label className="fieldset-label text-xl py-2">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input w-full text-base px-3 py-6 border-none"
                  placeholder="Enter your email"
                />
              </fieldset>

              <fieldset className="fieldset">
                <label className="fieldset-label text-xl py-2">Password</label>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
