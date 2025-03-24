import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
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
      <button
        // onClick={handleloginWithGoogle}
        className="btn border border-black m-2"
      >
        <FaGoogle></FaGoogle> Google
      </button>
      <button className="btn border border-black m-2">
        <FaGoogle></FaGoogle> Google
      </button>
      <button className="btn border border-black m-2">
        <FaGoogle></FaGoogle> Google
      </button>
    </div>
  );
};

export default SocialLogin;
