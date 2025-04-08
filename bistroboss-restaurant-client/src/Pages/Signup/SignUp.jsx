import { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "./../../assets/login/authentication2.png";
import SocialLogin from "./../Login/components/SocialLogin";
import { AuthContext } from "../../Provider/AuthProvider";
import { use } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { createUser} = useContext(AuthContext);

  const handleSingUp = (e) => {
    e.preventDefault();
    // const form = e.target
    // const name = form.value('name');
    // const email = form.value("email");
    // const password = form.value("password");

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate('/')
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //   user create use google
 

  return (
    <div className="my-10">
      <div
        className={`hero bg-base-200 lg:p-10 flex flex-col justify-center items-center`}
      >
        <div className="flex flex-col lg:flex-row-reverse">
          <div className="lg:w-1/2 flex flex-col items-center justify-center">
            <img src={loginImg} alt="" />
          </div>

          {/* form part  */}
          <div className="card-body">
            <h1 className="text-3xl lg:text-5xl font-inter font-bold text-center">
              Sign Up
            </h1>
            <form onSubmit={handleSingUp} className="space-y-1 lg:space-y-3">
              <fieldset className="fieldset">
                <label className="fieldset-label text-xl">Name</label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  name="name"
                  className="input w-full text-base px-3 py-6 border-none"
                  placeholder="Enter your email"
                />
              </fieldset>

              <fieldset className="fieldset">
                <label className="fieldset-label text-xl">Email</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  name="email"
                  className="input w-full text-base px-3 py-6 border-none"
                  placeholder="Enter your email"
                />
              </fieldset>

              <fieldset className="fieldset">
                <label className="fieldset-label text-xl">Password</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  name="password"
                  className="input w-full text-base px-3 py-6 border-none"
                  placeholder="Enter your password"
                />
              </fieldset>

              <button className="btn btn-neutral mt-4 mx-auto px-10 w-full flex justify-center items-center bg-[#d8b681] border-none text-xl text-white">
                Sign Up
              </button>
            </form>

            <div className="form-control mt-6">
              <div className="text-[#d1a054b3] text-center text-xl space-y-3">
                <p>
                  Already registered?
                  <Link className="text-blue-600 font-bold ml-2" to="/login">
                    Go to log in
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

export default SignUp;
