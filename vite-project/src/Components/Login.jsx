import { useState } from "react";

export default function Login() {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(loginFormData);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  return (
    <div className="flex justify-center items-center flex-col">
      <h1>Sign in to your account </h1>
      <form onSubmit={handleSubmit} className="">
        <input
          type="email"
          name="email"
          value={loginFormData.email}
          placeholder="Email address"
          onChange={handleChange}
          className="w-full border p-5 mt-3"
        />

        <input
          type="password"
          name="password"
          value={loginFormData.password}
          placeholder="Enter your password"
          onChange={handleChange}
          className="w-full border p-5 mt-3"
        />
        <button className="px-10 py-1 bg-orange-600 mt-3 ">Log in page </button>
      </form>
      
    </div>
  );
}
