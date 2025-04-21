import { useContext } from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();

  const from = location.state || "/";
  console.log(from);

  const { handleFacebookLogin, handleGoogleLogin, handleGithubLogin } =
    useContext(AuthContext);

  // handle facebook signin function
  const handleFacebookSignIn = (e) => {
    e.preventDefault();
    handleFacebookLogin()
      .then((result) => {
        const user = result?.user?.displayName;

        const userInfo = {
          name: result?.user?.displayName,
          email: result.user?.email,
          photo : result.user?.photoURL
        };

        axiosPublic.post("/user", userInfo).then((res) => res.data);

        if (user) {
          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // handle google signin function
  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    handleGoogleLogin()
      .then((result) => {
        const user = result?.user?.displayName;
        console.log(user);
        const userInfo = {
          name: result?.user?.displayName,
          email: result.user?.email,
          photo : result.user?.photoURL
        };

        axiosPublic.post("/user", userInfo).then((res) => res.data);
        if (user) {
          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // handle github signin function
  const handleGithubSignIn = (e) => {
    e.preventDefault();
    handleGithubLogin()
      .then((result) => {
        const user = result?.user?.displayName;

        const userInfo = {
          name: result?.user?.displayName,
          email: result.user?.email,
          photo : result.user?.photoURL
        };

        axiosPublic.post("/user", userInfo).then((res) => res.data);
        if (user) {
          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const handleloginWithGoogle = (e) => {
  //     e.preventDefault();

  //     GoogleSignin()
  //       .then((result) => {
  //         console.log(result.user);

  //         const userInfo = {
  //           name: result?.user?.displayName,
  //           email: result?.user?.email,
  //         };

  //         AxiosPublic.post("/users", userInfo).then((res) => {
  //           // res.data
  //           console.log(res.data);
  //           console.log(userInfo);
  //           Swal.fire({
  //             title: "User Login Successful.",
  //             showClass: {
  //               popup: "animate__animated animate__fadeInDown",
  //             },
  //             hideClass: {
  //               popup: "animate__animated animate__fadeOutUp",
  //             },
  //           });
  //         });

  //         navigate(from, { replace: true });
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };
  return (
    <div>
      <Link
        onClick={handleFacebookSignIn}
        className="btn border border-black rounded-full m-2"
      >
        <FaFacebookF />
      </Link>
      <button
        onClick={handleGoogleSignIn}
        className="btn border border-black rounded-full m-2"
      >
        <FaGoogle></FaGoogle>
      </button>
      <button
        onClick={handleGithubSignIn}
        className="btn border border-black rounded-full m-2"
      >
        <FaGithub />
      </button>
    </div>
  );
};

export default SocialLogin;
