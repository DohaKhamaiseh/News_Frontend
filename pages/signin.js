import React from "react";
import { useAuth } from "../context/auth";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import SmallHeader from "@/components/SmallHeader";

export default function signIn() {
  const { login, user } = useAuth();
  const router = useRouter();

  const [userInfo, setUserInfo] = useState({
    user_name: "",
    password: "",
  });

  const [errors, setError] = useState({
    user_name: "",
    password: "",
  });

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user, router]);

  async function userHandler(event) {
    event.preventDefault();
    const userObj = {
      user_name: event.target.Name.value,
      password: event.target.Pass.value,
    };

    setUserInfo(userObj);
    console.log(userObj);
    try {
      await login(userObj.user_name, userObj.password);
    } catch (err) {
      setError({
        user_name: "Invalid username",
        password: "Invalid password",
      });
    }
  }
  return (



<div className="bg-gray-200 min-h-screen flex-1 pt-10">
        <div className="container mx-auto">
          <div className="flex justify-center px-6 my-12">
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
                 Signin to your account!
                </h3>
                <form
                  className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
                  onSubmit={userHandler}
                >
               
                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700">
                      Username
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="Username"
                      name="Name"
                      required
                    />
                    {errors.user_name && <p>{errors.user_name}</p>}
                  </div>
               
                  <div className="mb-4 md:flex md:justify-between">
                    <div className="mb-4 md:mr-2 md:mb-0">
                      <label className="block mb-2 text-sm font-bold text-gray-700">
                        Password
                      </label>
                      <input
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 borderrounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="******************"
                        name="Pass"
                        required
                      />
                      {errors.password && <p>{errors.password}</p>}
                    </div>
                 
                  </div>
                  <div className="mb-6 text-center">
                    <button
                      className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Register Account
                    </button>
              
                  </div>
                  <hr className="mb-6 border-t" />
                  <div className="text-center">
                    <Link
                      className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                      href="/signup"
                    >
                      Don't have an account? Signup!
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
 
  )

    
}
