import { useAuth } from "@/context/auth";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import SmallHeader from "@/components/SmallHeader";
import { Parent } from "@/components/Parent";

export default function signUp() {
  const [alert, setAlert] = useState(false);
  const { signup } = useAuth();
  const router = useRouter();

  function handleSignup(e) {
    e.preventDefault();
    if (
      e.target.password.value.length >= 8 &&
      /[A-Za-z]/.test(e.target.password.value) &&
      /[0-9]/.test(e.target.password.value) &&
      e.target.password.value === e.target.c_password.value
    ) {
      let obj = {
        username: e.target.username.value,
        email: e.target.email.value,
        first_name: e.target.firstName.value,
        last_name: e.target.lastName.value,
        location: e.target.city.value,
        password1: e.target.password.value,
        password2: e.target.c_password.value,
      };
      signup(obj);
      setAlert(false);
      router.push("/signin");
    } else {
      setAlert(true);
    }
  }

  return (
    <>
      <Parent>
        <div
          className="bg-bgLight pb-10 pt-10 dark:bg-bgDark"
          style={{ minHeight: "70vh" }}
        >
          <div className="container mx-auto">
            <div className="flex justify-center px-6 ">
              {/* <!-- Row --> */}
              <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                {/* <!-- Col --> */}
                <div
                  className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                  style={{
                    backgroundImage: `url(
                    "https://img.freepik.com/free-photo/man-with-tablet_1112-648.jpg?w=1380&t=st=1691495687~exp=1691496287~hmac=502d84b9091a2d6fe8c9ee8d7c1920bd0eb1ed9d6be15de3c295222d984aca8a"
                  )`,
                    backgroundPosition: "center",
                  }}
                >
                  {/* <img src="https://img.freepik.com/free-psd/newspaper-cover-concept-mock-up_23-2148384363.jpg?w=826&t=st=1691495160~exp=1691495760~hmac=0111bb20b93a1588a5c1c27312eaf41d8f86d22a86e3e286be8fea750599891d" /> */}
                </div>
                {/* Col  */}
                <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                  <h3 className="pt-4 text-2xl text-center">
                    Create an Account!
                  </h3>
                  <form
                    className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
                    onSubmit={handleSignup}
                  >
                    <div className="mb-4 md:flex md:justify-between">
                      <div className="mb-4 md:mr-2 md:mb-0">
                        <label className="block mb-2 text-sm font-bold text-gray-700">
                          First Name
                        </label>
                        <input
                          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                          id="firstName"
                          type="text"
                          placeholder="First Name"
                          name="firstName"
                          required
                        />
                      </div>
                      <div className="md:ml-2">
                        <label className="block mb-2 text-sm font-bold text-gray-700">
                          Last Name
                        </label>
                        <input
                          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                          id="lastName"
                          type="text"
                          placeholder="Last Name"
                          name="lastName"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="block mb-2 text-sm font-bold text-gray-700">
                        Email
                      </label>
                      <input
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Email"
                        name="email"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block mb-2 text-sm font-bold text-gray-700">
                        Username
                      </label>
                      <input
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Username"
                        name="username"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block mb-2 text-sm font-bold text-gray-700">
                        City
                      </label>
                      <input
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="city"
                        type="text"
                        placeholder="City"
                        name="city"
                        required
                      />
                    </div>
                    <div className="mb-4 md:flex md:justify-between">
                      <div className="mb-4 md:mr-2 md:mb-0">
                        <label className="block mb-2 text-sm font-bold text-gray-700">
                          Password{" "}
                          <span className="opacity-50">(+8char, A-Z, a-z)</span>
                        </label>
                        <input
                          className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 borderrounded shadow appearance-none focus:outline-none focus:shadow-outline"
                          id="password"
                          type="password"
                          placeholder="******************"
                          name="password"
                          required
                        />
                      </div>
                      <div className="md:ml-2">
                        <label className="block mb-2 text-sm font-bold text-gray-700">
                          Confirm Password
                        </label>
                        <input
                          className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                          id="c_password"
                          type="password"
                          placeholder="******************"
                          name="c_password"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-6 text-center">
                      <button
                        className="w-full px-4 py-2 font-bold text-white custom-teal-bg active:bg-teal-600 rounded-full hover:bg-bgDark focus:outline-none focus:shadow-outline"
                        type="submit"
                      >
                        Register Account
                      </button>
                      <div>
                        {" "}
                        {alert ? (
                          <p className="inline-block text-sm text-red-500 align-baseline mt-5">
                            Your password must contain : Capital letter, Small
                            letter, Number and +8 character !!! or your Confirm
                            password is diffrent !!!
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <hr className="mb-6 border-t" />
                    <div className="text-center">
                      <Link
                        className="inline-block text-sm  text-teal-600  align-baseline hover:text-bgDark"
                        href="/signin"
                      >
                        Already have an account? Login!
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Parent>
    </>
  );
}
