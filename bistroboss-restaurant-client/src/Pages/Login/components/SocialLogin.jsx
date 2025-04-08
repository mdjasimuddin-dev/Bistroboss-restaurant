import { useContext } from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const navigate = useNavigate();

  const { handleGoogleLogin } = useContext(AuthContext);

  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    handleGoogleLogin()
      .then((result) => {
        const user = result?.user?.displayName;
        console.log(user);
        if (user) {
          navigate("/");
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
        onClick={handleGoogleSignIn}
        className="btn border border-black rounded-full m-2"
      >
        <FaFacebookF />
      </Link>
      <button className="btn border border-black rounded-full m-2">
        <FaGoogle></FaGoogle>
      </button>
      <button className="btn border border-black rounded-full m-2">
        <FaGithub />
      </button>
    </div>
  );
};

export default SocialLogin;
