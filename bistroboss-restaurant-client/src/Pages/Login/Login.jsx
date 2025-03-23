import loginImg from "./../../assets/login/authentication1.png";


const Login = () => {
  return (
    <div>
      <div className={`hero h-[700px] bg-base-200 p-10 flex flex-col justify-center items-center`}>
        <div className="flex">
          <img src={loginImg} alt=""  className="w-1/2 bg-cover" />

          {/* form part  */}
          
            <div className="card-body">
              <h1 className="text-5xl font-inter font-bold text-center">Login</h1>
              <form>
                <fieldset className="fieldset">
                  <label className="fieldset-label text-xl py-2">Email</label>
                  <input
                    type="email"
                    className="input w-full text-base px-3 py-6 border-none"
                    placeholder="Enter your email"
                  />
                </fieldset>

                <fieldset className="fieldset">
                  <label className="fieldset-label text-xl py-2">
                    Password
                  </label>
                  <input
                    type="password"
                    className="input w-full text-base px-3 py-6 border-none"
                    placeholder="Enter your email"
                  />
                </fieldset>

                <button className="btn btn-neutral mt-4 mx-auto px-10 w-1/4 flex justify-center items-center bg-[#d8b681] border-none text-xl text-white">
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
